import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TablerIconsProvider } from 'angular-tabler-icons';
import { task } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent implements OnInit {
  public form!: FormGroup;
  private id: any = this.ActiveRoute.snapshot.paramMap.get('id');

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      area: ['', Validators.required],
      code: ['', Validators.required],
      Comentary: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      id_user: ['', Validators.required],
    });

    if (this.id) {
      this.getValuesForm();
    }
  }

  async getValuesForm(): Promise<void> {
    const result: task = await this.taskService.getById(this.id);

    this.form.patchValue({
      name: result.name,
      img: result.img,
      area: result.area,
      code: result.code,
      Comentary: result.Comentary,
      startDate: result.startDate,
      endDate: result.endDate,
      id_user: result.id_user,
    });
  }

  async submit(): Promise<void> {
    if (this.id) {
      await this.taskService.update(this.id, this.form.value);
    } else {
      await this.taskService.create(this.form.value);
    }
  }
}
