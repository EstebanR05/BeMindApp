export class TaskService {
  constructor() {}

  getAllTaskService() {}

  getByIdTaskService() {}

  CreateTaskService() {}

  UpdateTaskService() {}

  public deleteTaskService(id: number) {
    try {
      if (id) {
        console.log("hey");
      }
    } catch (error) {
      this.handleError(null, error, "error in the server");
    }
  }

  private handleError(res: any, error: any, message: any) {
    console.error(message, error);
    res.status(500).json({ error: message });
  }
}
