import cardService from "../services/cardService.js";

export default {

    getAllCards: async (req, res) => {
        const cards = await cardService.getAllCards();
        return res.status(200).json(cards);
    },

    addCard: async (req, res) => {
        const card = await cardService.addCard(req.body);
        return res.status(card.error ? 400 : 201).json(card);
    },

    deleteCard: async (req, res) => {
        const card = await cardService.deleteCard(req.params.id);
        return res.status(card.error ? 400 : 200).json(card);
    },

    updateCard: async (req, res) => {
        const card = await cardService.updateCard(req.params.id, req.body);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardById: async (req, res) => {
        const card = await cardService.getCardById(req.params.id);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardByOwnerId: async (req, res) => {
        const card = await cardService.getCardByOwnerId(req.params.id);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardByName: async (req, res) => {
        const card = await cardService.getCardByName(req.params.name);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardByRarety: async (req, res) => {
        const card = await cardService.getCardByRarety(req.params.rarety);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardByEdition: async (req, res) => {
        const card = await cardService.getCardByEdition(req.params.edition);
        return res.status(card.error ? 400 : 200).json(card);
    },

    getCardByState: async (req, res) => {
        const card = await cardService.getCardByState(req.params.state);
        return res.status(card.error ? 400 : 200).json(card);
    },
} 
