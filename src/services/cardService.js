import cardRepository from "../repositories/cardRepository.js";

export default {
    getAllCards: async () => {
        const cards = await cardRepository.findAll();
        return cards;
    },
    getCardById: async (id) => {
        const card = await cardRepository.findById(id);
        return card;
    },
    addCard: async (cardData) => {
        const { name, rarety, edition, state, owner } = cardData;
        const newCard = await cardRepository.create(name, rarety, edition, state, owner);
        return newCard;
    },
    deleteCard: async (id) => {
        const deletedCard = await cardRepository.delete(id);
        return deletedCard;
    },
    updateCard: async (id, cardData) => {
        const updatedCard = await cardRepository.update(id, cardData);
        return updatedCard;
    },
    getCardByOwnerId: async (ownerId) => {
        const cards = await cardRepository.findByOwnerId(ownerId);
        return cards;
    },
    getCardByName: async (name) => {
        const cards = await cardRepository.findByName(name);
        return cards;
    },
    getCardByRarety: async (rarety) => {
        const cards = await cardRepository.findByRarety(rarety);
        return cards;
    },
    getCardByEdition: async (edition) => {
        const cards = await cardRepository.findByEdition(edition);
        return cards;
    },
    getCardByState: async (state) => {
        const cards = await cardRepository.findByState(state);
        return cards;
    },
};