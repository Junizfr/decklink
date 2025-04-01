import userService from "../services/userService.js";

export default {

    register: async (req, res) => {
        const user = await userService.register(req.body);
        return res.status(user.error ? 400 : 201).json(user);
    },

    login: async (req, res) => {
        const token = await userService.login(req.body);
        return res.status(token.error ? 401 : 200).json(token);
    }
}