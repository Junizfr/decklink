import { prisma } from '../server.js';

export default {
    create: async (player1, player2) => {
        const fight = await prisma.fight.create({
            data: {
                player1: player1,
                player2: player2,
                fightAt: new Date(),
            }
        })
        return fight;
    },

    findById: async (id) => {
        console.log(id);
        const fight = await prisma.fight.findFirst({
            where: {
                id: id
            }
        })
        console.log(JSON.stringify(fight, null, 2));

        return fight;
    },

    findAll: async () => {
        const fights = await prisma.fight.findMany();
        return fights;
    },

    findByPlayerId: async (idplayer) => {
        const fights = await prisma.fight.findMany({
            where: {
                OR: [
                    { player1: idplayer },
                    { player2: idplayer }
                ]
            }
        })
        return fights;
    },

    update: async (id, winner) => {
        const fight = await prisma.fight.update({
            where: {
                id: id
            },
            data: {
                winner:{
                    connect: { id: winner }
                }
            }
        })
        return fight;
    }
}