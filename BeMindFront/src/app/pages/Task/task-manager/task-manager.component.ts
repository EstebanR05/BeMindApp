import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.scss'
})
export class TaskManagerComponent {

  formEmpleados:FormGroup;
  elId:any;

  constructor(
    private ActiveRoute:ActivatedRoute,
    public form: FormBuilder,
    public ruteador:Router) { 

      this.formEmpleados = this.form.group({
        nombre: [''],
        correo: ['']
      });


    }

}
