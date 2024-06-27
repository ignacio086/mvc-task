import express from "express";
import { TaskController } from "../controllers/taskController";

const taskRoute = express.Router();

taskRoute.get("/", TaskController.getAllTask);
taskRoute.post("/", TaskController.createTask);

taskRoute.get("/:id", TaskController.getTaskById);
taskRoute.delete("/:id", TaskController.deleteTask);
taskRoute.put("/:id", TaskController.updateTask);

export default taskRoute;
