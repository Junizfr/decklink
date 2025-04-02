import postRepository from "../repositories/postRepository.js"

export default {

    findAll: async () => {
        const posts = await postRepository.findAll();
        return posts;
    },

    create: async (body, user) => {
        const { title, content, shared, state } = body;
        const post = await postRepository.create(title, content, shared, state, user.id);
        return { success: 'Post created', post };
    },

    findById: async (id) => {
        const post = await postRepository.findById(id);
        if (!post) return { error: 'Post not found' };
        return post;
    },

    update: async (id, body, user) => {
        const post = await postRepository.findById(id);
        if (!post) return { error: 'Post not found' };
        if( post.authorId !== user.id) return { error: 'Unauthorized' };
        const updatedPost = await postRepository.update(id, body);
        return { success: 'Post updated', post: updatedPost };
    },

    delete: async (id, user) => {
        const post = await postRepository.findById(id);
        if (!post) return { error: 'Post not found' };
        if( post.authorId !== user.id) return { error: 'Unauthorized' };
        await postRepository.delete(id);
        return { success: 'Post deleted' };
    }

}