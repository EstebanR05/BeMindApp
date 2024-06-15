import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { user } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent extends BaseComponent implements OnInit {

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private route: Router
  ) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async submit() {
    if (this.form.valid) {
      try {
        this.clearHistory();
        const result: user = await this.userService.login(this.form.value);
        localStorage.setItem("token", result.token);
        this.route.navigate(['/dashboard']);
      } catch (error: any) {
        this.handleError(error.error.message);
      }
    }
  }
}
