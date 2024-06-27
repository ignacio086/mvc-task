import { Task } from "../schema/taskSchema";
import { arrTask } from "../utils/tasks";

export class TaskModule {
  static async getAllTask() {
    const data = arrTask;
    return data;
  }
  static async getTaskbyid(id) {
    let num = parseInt(id);
    const data = arrTask.filter((t) => {
      return t.id === num;
    });
    return data;
  }
  static async createTask(task: Task) {
    arrTask.push(task);
    return arrTask;
  }
  static async deleteTask(id) {
    let num = parseInt(id);
    const data = arrTask.filter((t) => {
      return t.id !== num;
    });
    return data;
  }
  static async updateTask(id, task: Task) {
    let num = parseInt(id);
    let act = arrTask.filter((t) => {
      return t.id !== num;
    });
    act.push(task);
    return act;
  }
}
