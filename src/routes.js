import { Router } from "express";

import securityController from "./controllers/securityController.js";
import fightController from "./controllers/fightController.js";
import cardController from "./controllers/cardController.js";

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
/** Cards */
router.post("/cards", cardController.addCard);
router.get("/cards", cardController.getAllCards);
router.patch("/cards/:id", cardController.updateCard);
router.delete("/cards/:id", cardController.deleteCard);

/** Posts */
router.get('/posts', postController.posts);
router.post('/posts', authMiddleware, postController.create);
router.get('/posts/:id', authMiddleware, postController.show);
router.patch('/posts/:id', authMiddleware, postController.update);
router.delete('/posts/:id', authMiddleware, postController.delete);

export default router;