import express from "express";
import GameController from "../controllers/game.Controller.js";

const gameRouter = express.Router();

gameRouter.get("/", GameController.getAllGames);
// gameRouter.get("/:id", GameController.getGameById);
gameRouter.post("/", GameController.createGame);

export default gameRouter;
