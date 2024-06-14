import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent extends BaseComponent implements OnInit {
  constructor(private route: Router, private fb: FormBuilder, private userService: UserService) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      studentCode: ['', Validators.required],
    });
  }


  get f() {
    return this.form.controls;
  }

  async submit() {
    if (this.form.valid) {
      try {
        this.clearHistory();
        //await this.userService.register(this.form.value);
        Swal.fire('Saved!', 'User created! please now sign in', 'success');
        this.route.navigate(['/authentication/login']);
      } catch (error) {
        this.handleError("error en los datos ingresados");
      }
    }
  }

}
