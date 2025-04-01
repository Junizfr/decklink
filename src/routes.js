import { Router } from "express";

import securityController from "./controllers/securityController.js";

const router = Router();

/** Security */
router.post("/register", securityController.register);
router.post("/login", securityController.login);


export default router;