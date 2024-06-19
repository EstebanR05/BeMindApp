import { penddingTask } from './../../../shared/interface/task.interface';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { TaskService } from 'src/app/shared/services/task.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent extends BaseComponent implements OnInit  {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  public sizePenddingTask: any;
  public penddingTask: penddingTask[] = [];

  showFiller = false;

  constructor(public dialog: MatDialog, public route: Router, private userService: UserService, private taskService: TaskService) {
    super();
  }

  ngOnInit(): void {
    this.getAllPenddingTask();
  }

  public async logOut(): Promise<void> {
    this.clearHistory();
    this.route.navigate(['/authentication/login']);
    await this.userService.logout();
  }

  async getAllPenddingTask(): Promise<void> {
    try {
      this.penddingTask = await this.taskService.getAllPenddingTask();
      this.sizePenddingTask = this.penddingTask.length;
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }
}
