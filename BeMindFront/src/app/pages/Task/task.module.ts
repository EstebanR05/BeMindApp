import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskDoneComponent } from './task-done/task-done.component';

@NgModule({
  declarations: [TaskListComponent, TaskManagerComponent, TaskDoneComponent],
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule, RouterModule],
})
export class TaskModule {}
