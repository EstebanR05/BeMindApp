import { TaskService } from "../services/TaskService";

export class TaskController {
  
  constructor(private taskService: TaskService) {}

  getAllTask(_req: any, res: any) {
    const resp: any = this.taskService.getAllTaskService();

    if (res) {
      console.log("hey word", resp);
    }

    res.json({
      message: "Hello World",
    });
  }

  getByIdTask(_req: any, res: any) {
    res.json({
      message: "Hello World",
    });
  }

  CreateTask(_req: any, res: any) {
    res.json({
      message: "Hello World",
    });
  }

  UpdateTask(_req: any, res: any) {
    res.json({
      message: "Hello World",
    });
  }

  deleteTask(_req: any, res: any) {
    res.json({
      message: "Hello World",
    });
  }
}
