import userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default {

    findAll: async () => {
        const users = await userRepository.findAll();
        return users;
    },
    register: async (body) => {
        const {fullname, email, username, password} = body;
        if(await userRepository.findRegistered(email, username)){
            return { error: 'Email or username already in use'};
        }
        const user = await userRepository.create(fullname, email, username, password);
        return { success: 'User created', user};
    },
    login: async (body) => {
        const { email, password } = body;
        if(email === undefined || password === undefined)
            return { error: 'Email and password are required'};
        const user = await userRepository.findByEmail(email);
        if (user && bcrypt.compareSync(password, user.password)){
            const token = jwt.sign({ id: user.id},
                process.env.TOKEN, { expiresIn: '1h'});
                return { token };
        } else {
            return { error: 'Invalid credentials'};
        }
    }
}