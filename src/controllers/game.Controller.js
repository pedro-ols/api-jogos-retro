import GameModel from "../models/game.Model.js"

class GameController {
    async getAllGames(req, res) {
        try {
            const games = await GameModel.findAll()
            res.status(200).json(games)
        } catch (error) {
            console.error( "Error finding games.", error )
        }
    }

    async createGame(req, res) {
        const { name, platform } = req.body

        if(!name || !platform){
            return res.status(400).json({error: "Name and platform are required"})
        }
    
        
        try {
            const data = { name, platform };
    
            const newGame = await GameModel.create(data)
            
            return res.status(201).json({ message: "Game successfully created" })        
        } catch (error) {
            console.error("Error creating a new game", error);
            res.status(500).json({ error: "Error creating a new game" })
        }
    }
}

export default new GameController()