import fightRepository from "../repositories/fightRepository.js";

export default {
    fight: async (body) => {
        try {
            const { player1, player2 } = body;
            if (!player1 || !player2) {
                return { error: "User ID and opponent ID are required" };
            }

            const fight = await fightRepository.create(player1, player2);
            if (!fight) {
                return { error: "Fight creation failed" };
            }

            return fight;
        } catch (error) {
            return { error: "An error occurred while creating the fight" };
        }
    },

    getFightById: async (id) => {
        try {
            const fight = await fightRepository.findById(id);
            if (!fight) {
                return { error: "Fight not found" };
            }
            return fight;
        } catch (error) {
            return { error: "An error occurred while retrieving the fight" };
        }
    },

    getAllFights: async () => {
        try {
            const fights = await fightRepository.findAll();
            return fights.length > 0 ? { error: "No fights found" } : fights;
        } catch (error) {
            return { error: "An error occurred while retrieving fights" };
        }
    },

    getFightsByPlayerId: async (idplayer) => {
        try {
            const fights = await fightRepository.findByPlayerId(idplayer);
            return fights.length > 0 ? fights : { error: "No fights found for this player" };
        } catch (error) {
            return { error: "An error occurred while retrieving the fights for this player" };
        }
    },

    updateFight: async (id, body) => {
        try {
            const { winnerId } = body;
            if (!winnerId) {
                return { error: "Winner ID is required" };
            }

            const fight = await fightRepository.update(id, winnerId);
            if (!fight) {
                return { error: "Fight update failed" };
            }

            return fight;
        } catch (error) {
            return { error: "An error occurred while updating the fight" };
        }
    },
};
