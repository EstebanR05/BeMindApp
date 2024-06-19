import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskDoneComponent } from './task-done/task-done.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'create',
    component: TaskManagerComponent,
  },
  {
    path: 'update/:id',
    component: TaskManagerComponent,
  },
  {
    path: 'view/:id',
    component: TaskManagerComponent,
  },
  {
    path: 'doneTask',
    component: TaskDoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
