import { Router } from "express";

import securityController from "./controllers/securityController.js";
import cardController from "./controllers/cardController.js";

const router = Router();

/** Security */
router.post("/register", securityController.register);
router.post("/login", securityController.login);

router.post("/cards", cardController.addCard);
router.get("/cards", cardController.getAllCards);
router.patch("/cards/:id", cardController.updateCard);
router.delete("/cards/:id", cardController.deleteCard);


export default router;