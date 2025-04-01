import { Router } from "express";

import securityController from "./controllers/securityController.js";
import fightController from "./controllers/fightController.js";

const router = Router();

/** Security */
router.post("/register", securityController.register);
router.post("/login", securityController.login);

/** Fight */
router.post("/fight", fightController.fight);
router.get("/fight/:id", fightController.getFightById);
router.get("/fight", fightController.getAllFights);
router.get("/fight/player/:idplayer", fightController.getFightsByPlayerId);
router.put("/fight/:id", fightController.updateFight);

export default router;