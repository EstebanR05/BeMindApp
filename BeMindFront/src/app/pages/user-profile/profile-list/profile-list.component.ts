import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { task } from 'src/app/shared/interface/task.interface';
import { user } from 'src/app/shared/interface/user.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.scss'
})
export class ProfileListComponent extends BaseComponent implements OnInit {

  public doing: number = 0;
  public doneTask: number = 0;
  public user = {} as user;

  constructor(private taskService: TaskService, private userService: UserService) { super() }

  ngOnInit(): void {
    this._getUserInfo();
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

  private async _getUserInfo(): Promise<any> {
    try {
      const response: user = await this.userService.getUser();
      this.user = response;
    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  // openModal() {
  //   const modalElement = document.getElementById('myModal')!;
  //   const modal = new Modal(modalElement);
  //   modal.show();
  // }

}
