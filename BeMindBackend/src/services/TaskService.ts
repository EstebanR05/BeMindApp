import { conexion } from "../conexion_bd";

export class TaskService {
  constructor() {}

  async getAllTaskService() {
    const [resp] = await conexion.query("SELECT * FROM task");
    return resp;
  }

  async getByIdTaskService(id: number) {
    const [resp] = await conexion.query("SELECT * FROM task WHERE id_user = ?", [id]);
    return resp;
  }

  async createTaskService(task: any) {
    const [resp] = await conexion.query("INSERT INTO task SET ?", [task]);
    return resp;
  }

  async updateTaskService(id: number, task: any) {
    const [resp] = await conexion.query("UPDATE task SET ? WHERE id = ?", [task, id]);
    return resp;
  }

  async deleteTaskService(id: number) {
    const [resp] = await conexion.query("DELETE FROM task WHERE id = ?", [id]);
    return resp;
  }
}
