import fightRepository from "../repositories/fightRepository.js";

export default {
    fight: async (body) => {
        const { player1, player2 } = body;
        if (!player1 || !player2) {
            return { error: "User ID and opponent ID are required" };
        }
        const fight = await fightRepository.create(player1, player2);
        if (!fight) {
            return { error: "Fight creation failed" };
        }
        return fight;
    },

    getFightById: async (id) => {
        const fight = await fightRepository.findById(id);
        if (!fight) {
            return { error: "Fight not found" };
        }
        return fight;
    },

    getAllFights: async () => {
        const fights = await fightRepository.findAll();
        if (!fights) {
            return { error: "No fights found" };
        }
        return fights;
    },

    getFightsByPlayerId: async (idplayer) => {
        const fights = await fightRepository.findByPlayerId(idplayer);
        if (!fights) {
            return { error: "No fights found for this player" };
        }
        return fights;
    },

    updateFight: async (id, body) => {
        const { winnerId } = body;
        if (!winnerId) {
            return { error: "Winner ID is required" };
        }
        const fight = await fightRepository.update(id, winnerId);
        if (!fight) {
            return { error: "Fight update failed" };
        }
        return fight;
    },
};