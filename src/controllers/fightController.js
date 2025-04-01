import fightService from '../services/fightService.js';

export default {
    fight: async (req, res) => {
        const fight = await fightService.fight(req.body);
        return res.status(fight.error ? 400 : 201).json(fight);
    },

    getFightById: async (req, res) => {
        const id  = parseInt(req.params.id, 10);
        const fight = await fightService.getFightById(id);
        return res.status(fight.error ? 400 : 200).json(fight);
    },

    getAllFights: async (req, res) => {
        const fights = await fightService.getAllFights();
        return res.status(fights.error ? 400 : 200).json(fights);
    },

    getFightsByPlayerId: async (req, res) => {
        const  idplayer  = parseInt(req.params.idplayer, 10);
        const fights = await fightService.getFightsByPlayerId(idplayer);
        return res.status(fights.error ? 400 : 200).json(fights);
    },
    updateFight: async (req, res) => {
        const  id  = parseInt(req.params.id, 10);
        const fight = await fightService.updateFight(id, req.body);
        return res.status(fight.error ? 400 : 200).json(fight);
    }

}