import { prisma } from '../server.js';
import bcrypt from 'bcryptjs';

export default {
    create: async (fullname, email, username, password) => {
        const user = await prisma.user.create({
            data: {
                fullname: fullname,
                email: email,
                username: username,
                password: await hashPassword(password),
                avatar: "None", // image à déclarer
                roleId: 1, // role 1 correspond a member
                //rank: 1, // rank 1 correspond a noob
                xp: 0,
                createdAt: new Date(),
                updateAt: new Date()
            }
        })
        return user;
    },

    findById: async (id) => {
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        return user;
    },
    findByEmail: async (email) => {
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        return user;
    },
    findAll: async () => {
        const users = await prisma.user.findMany();
        return users;
    },
    findRegistered: async (email, username) => {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        email: email
                    },
                    {
                        username: username
                    }
                ]
            }
        })
        return user;
    }
}

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}