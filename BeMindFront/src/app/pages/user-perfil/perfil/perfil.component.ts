import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { task } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent extends BaseComponent implements OnInit {

  public doing: number = 0;
  public doneTask: number = 0;

  constructor(private taskService: TaskService) { super() }

  ngOnInit(): void {
    this.bindingParams();
  }

  private async bindingParams(): Promise<void> {
    this.doing = await this._getDoingTask();
    this.doneTask = await this._getDoneTask();
  }

  private async _getDoingTask(): Promise<number> {
    const response: task[] = await this.taskService.getAll();
    return (response != null) ? response.length : 0;
  }

  private async _getDoneTask(): Promise<number> {
    const response: task[] = await this.taskService.getAllDoinTask();
    return (response != null) ? response.length : 0;
  }

}
