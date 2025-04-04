import { prisma } from '../server.js';

export default {
    create: async (name, rarety, edition, state, ownerId) => { 
        const card = await prisma.card.create({
            data: {
                name: name,
                rarety: rarety,
                edition: edition,
                state: state,
                owner: {
                    connect: { id: ownerId }
                },
            }
        })
        return card;
    },
    findAll: async () => {
        const cards = await prisma.card.findMany();
        return cards;
    },
    findById: async (id) => {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id, 10) },
        });
        return card;
    },
    delete: async (id) => {
        const card = await prisma.card.delete({
            where: { id: parseInt(id, 10) },
        });
        return card;
    },
    update: async (id, cardData) => {
        const card = await prisma.card.update({
            where: { id: parseInt(id, 10) },
            data: cardData,
        });
        return card;
    },
    findByOwnerId: async (ownerId) => {
        const cards = await prisma.card.findMany({
            where: { ownerId: ownerId },
        });
        return cards;
    },
    findByName: async (name) => {
        const cards = await prisma.card.findMany({
            where: { name: name },
        });
        return cards;
    },
    findByRarety: async (rarety) => {
        const cards = await prisma.card.findMany({
            where: { rarety: rarety },
        });
        return cards;
    },
    findByEdition: async (edition) => {
        const cards = await prisma.card.findMany({
            where: { edition: edition },
        });
        return cards;
    },
    findByState: async (state) => {
        const cards = await prisma.card.findMany({
            where: { state: state },
        });
        return cards;
    },
} 