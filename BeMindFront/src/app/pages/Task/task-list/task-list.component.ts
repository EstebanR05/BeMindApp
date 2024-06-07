import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {

  public list: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    try {
      const resp = await this.taskService.getAll();
      this.list = resp.reverse();
    } catch (error) {
      console.log('Error in the server: ', error);
    }
  }
}
