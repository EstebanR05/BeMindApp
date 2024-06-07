import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  private taskService = new TaskService();

  constructor() {}

  async getAllTask(_req: Request, res: Response) {
    try {
      const tasks = await this.taskService.getAllTaskService();
      res.json(tasks || {});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getByIdTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const task = await this.taskService.getByIdTaskService(id);
      res.json(task || {});
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async createTask(req: Request, res: Response) {
    try {
      const task = req.body;
      const result = await this.taskService.createTaskService(task);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async updateTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const task = req.body;
      const result = await this.taskService.updateTaskService(id, task);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.taskService.deleteTaskService(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
