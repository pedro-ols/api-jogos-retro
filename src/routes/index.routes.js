import express from 'express'

import authRouter from "./auth.routes.js"
import cardRouter from "./cardRoutes.js"

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use("/auth", authRouter);

router.use(authMiddleware)

export default router;