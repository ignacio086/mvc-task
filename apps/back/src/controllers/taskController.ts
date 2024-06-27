import { TaskModule } from "../modules/task.module";

export class TaskController{
    static async getAllTask(_req,res){
        const tasks =  await TaskModule.getAllTask()
        res.json(tasks)
    }
    static async getTaskById(req, res){
        const {id} = req.params
        const task =  await TaskModule.getTaskbyid(id)
        res.json(task)
    }
    static async createTask(req, res){
        console.log(req.body)
        const task = await TaskModule.createTask(req.body)
        res.json(task)
    }
    static async deleteTask(req, res){
        const {id} = req.params
        const task = await TaskModule.deleteTask(id)
        res.json(task)
    }
    static async updateTask(req, res){
        const {id} = req.params
        const task =  await TaskModule.updateTask(id, req.body)
        res.json(task)
    }
}