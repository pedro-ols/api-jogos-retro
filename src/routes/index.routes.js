import express from 'express'

import authRouter from "./auth.routes.js"
import gameRouter from "./game.routes.js"

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use("/auth", authRouter);
router.use("/games", gameRouter);

router.use(authMiddleware)

export default router;