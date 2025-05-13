import express from "express";
import RecordController from "../controllers/record.Controller.js";

const recordRouter = express.Router();

recordRouter.get("/", RecordController.getAllRecords);
// recordRouter.get("/:id", recordController.getrecordById);
recordRouter.post("/", RecordController.createRecord);

export default recordRouter;
