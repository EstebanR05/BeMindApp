import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  public list: task[] = [];

  constructor(private taskService: TaskService, public route: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    try {
      const resp: task[] = await this.taskService.getAll();
      this.list = resp.reverse();
    } catch (error) {
      console.log('Error in the server: ', error);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.taskService.delete(id);
      Swal.fire('deleted!', '', 'success');
      await this.getAll();
    } catch (error) {
      console.log('Error in the server: ', error);
    }
  }

}
