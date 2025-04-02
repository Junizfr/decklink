import postService from "../services/postService.js";

export default {

    posts: async (req, res) => {
        const posts = await postService.findAll();
        return res.status(200).json(posts);
    },

    create: async (req, res) => {
        const post = await postService.create(req.body, req.user);
        return res.status(post.error ? 400 : 201).json(post);
    },

    show: async (req, res) => {
        const post = await postService.findById(req.params.id);
        return res.status(post.error ? 404 : 200).json(post);
    },

    update: async (req, res) => {
        const post = await postService.update(req.params.id, req.body, req.user);
        return res.status(post.error ? 404 : 200).json(post);
    },

    delete: async (req, res) => {
        const post = await postService.delete(req.params.id, req.user);
        return res.status(post.error ? 404 : 200).json(post);
    }


}