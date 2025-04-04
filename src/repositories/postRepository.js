import { prisma } from "../server.js"

export default {

    findAll: async () => {
        const posts = await prisma.article.findMany();        
        return posts;
    },


    create: async (title, content, shared, state, userId) => {
        const post = await prisma.article.create({
            data: {
                title,
                content,
                public: shared,
                state,
                authorId: userId
            }
        });
        return post;
    },

    findById: async (id) => {
        const post = await prisma.article.findUnique({
            where: { id: Number(id) }
        });
        return post;
    },

    update: async (id, body) => {
        const post = await prisma.article.update({
            where: { id: Number(id) },
            data: body
        });
        return post;
    },

    delete: async (id) => {
        await prisma.article.delete({
            where: { id: Number(id) }
        });
    }

}