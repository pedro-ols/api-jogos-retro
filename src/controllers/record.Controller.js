import RecordModel from "../models/record.Model.js"

class RecordController {
    async getAllRecords(req, res) {
        try {
            const records = await RecordModel.findAll()
            res.status(200).json(records)
        } catch (error) {
            console.error( "Error finding records.", error )
        }
    }

    async createRecord(req, res) {
        const { userId, score, screenShot, game_id } = req.body

        // if(!userId || !score || !screenShot || !game_id ){
        //     return res.status(400).json({error: "All the fields are required"})
        // }
        
        
        try {
            const data = { userId, score, screenShot, game_id  };
            
            const newRecord = await RecordModel.create(data)
            
            return res.status(201).json(newRecord)        
        } catch (error) {
            console.error("Error creating a new record", error);
            res.status(500).json({ error: "Error creating a new record" })
        }
    }
}

export default new RecordController()