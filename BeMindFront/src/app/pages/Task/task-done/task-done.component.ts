import { TaskService } from 'src/app/shared/services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/shared/interface/task.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrl: './task-done.component.scss'
})
export class TaskDoneComponent implements OnInit {
  public list: task[] = [];

  constructor(public taskService: TaskService, public route: Router) {}

  ngOnInit(): void {
    this.getAllDone();
  }


  async getAllDone(): Promise<void>{
    try {
      const resp: task[] = await this.taskService.getAllDoinTask();
      this.list = resp.reverse();
    } catch(e){
      console.log('Error in the server: ', e);
    }
  } 

  async returnTask(id: number){
    try {
      await this.taskService.returnTask(id);
      Swal.fire('returned!', '', 'success');
      await this.getAllDone();
    } catch(e){
      console.log('Error in the server: ', e);
    }
  }
}
