import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { task } from 'src/app/shared/interface/task.interface';
import { TaskService } from 'src/app/shared/services/task.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss',
})
export class TaskManagerComponent extends BaseComponent implements OnInit {
  public id: any = this.ActiveRoute.snapshot.paramMap.get('id');

  constructor(
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder,
    private route: Router,
    private taskService: TaskService,
    public location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      img: ['', Validators.required],
      name: ['', Validators.required],
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
    try {
      const result: task = await this.taskService.getById(this.id);

      // Convertir las cadenas de fecha a objetos Date
      const startDate = new Date(result.startDate);
      const endDate = new Date(result.endDate);

      // Validar si las fechas son válidas
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        console.error('Invalid date format');
        return;
      }

      this.form.patchValue({
        name: result.name,
        img: result.img,
        area: result.area,
        code: result.code,
        Comentary: result.Comentary,
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        id_user: result.id_user,
      });
    } catch (error) {
      console.error('Error fetching task', error);
    }
  }

  async submit(): Promise<void> {
    if (this.form.valid) {
      if (this.id) {
        await this.taskService.update(this.id, this.form.value);
      } else {
        await this.taskService.create(this.form.value);
      }

      this.route.navigate(['Task']);
      Swal.fire('Saved!', '', 'success');
    }
  }
}
