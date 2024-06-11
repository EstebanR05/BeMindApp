import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({ template: '' })
export class BaseComponent {
  
  public form!: FormGroup;
  token: any = environment.auth.JWT;
  apiUrl = environment.app.apiBaseUrl;
  
  constructor() {}

  getControl(control: string, form: FormGroup = this.form): AbstractControl {
    return form.controls[control];
  }

  clearHistory() {
    localStorage.removeItem('token');
    sessionStorage.clear();
    localStorage.clear();
  }
}
