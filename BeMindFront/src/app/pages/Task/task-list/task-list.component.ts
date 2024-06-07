import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  public list: any[] = [{ img: "perritos.png", name: "infografia", materia: "sistemas de informacion", startDate: "01/01/2023", endDate: "01/02/2023", comentary: "se debe entregar lo mas pronto"}];

}
