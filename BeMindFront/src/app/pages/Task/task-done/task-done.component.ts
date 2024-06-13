import { TaskService } from 'src/app/shared/services/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-done',
  standalone: true,
  imports: [],
  templateUrl: './task-done.component.html',
  styleUrl: './task-done.component.scss'
})
export class TaskDoneComponent implements OnInit {
  constructor(TaskService: TaskService, route: Router) {}

  ngOnInit(): void {
    
  }


  async getAllDone(): Promise<void>{
    try {

    } catch(e){

    }
  } 
}
