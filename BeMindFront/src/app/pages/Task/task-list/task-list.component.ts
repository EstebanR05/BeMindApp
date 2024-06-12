import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  public list: task[] = [];

  constructor(private taskService: TaskService, public route: Router) {}

  ngOnInit(): void {
    $(document).ready(() => {
      $('#table').DataTable({
        pageLength: 2,
        destroy: true,
        language: {
          lengthMenu: "",
          zeroRecords: "Ninguna tarea encontrada.",
          infoEmpty: "Ninguna tarea pendiente.",
          info: "",
          loadingRecords: "Cargando tareas..."

        },
        searching: false,
        scrollX: false,
        "dom": '<"col-sm-4"f>><"row"<"col-sm-4"l><"col-sm-4 text-center"p>',
      });
    })
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

  delete(id: number){

  }

}
