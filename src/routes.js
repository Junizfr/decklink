import { Router } from "express";

import authMiddleware from "./middlewares/authMiddleware.js";

import securityController from "./controllers/securityController.js";
import postController from "./controllers/postController.js";
import fightController from "./controllers/fightController.js";

const router = Router();

/** Security */
router.post("/register", securityController.register);
router.post("/login", securityController.login);

/** Posts */
router.get('/posts', postController.posts);
router.post('/posts', authMiddleware, postController.create);
router.get('/posts/:id', authMiddleware, postController.show);
router.patch('/posts/:id', authMiddleware, postController.update);
router.delete('/posts/:id', authMiddleware, postController.delete);

/** Fight */
router.post("/fight", fightController.fight);
router.get("/fight/:id", fightController.getFightById);
router.get("/fight", fightController.getAllFights);
router.get("/fight/player/:idplayer", fightController.getFightsByPlayerId);
router.put("/fight/:id", fightController.updateFight);

export default router;