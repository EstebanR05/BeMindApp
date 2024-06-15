import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { user } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrl: './profile-modal.component.scss'
})
export class ProfileModalComponent extends BaseComponent implements OnInit {

  @Input() modal: any;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService, private fb: FormBuilder) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({});

    this.getValuesForm();
  }

  private async getValuesForm(): Promise<void> {
    const response: user = await this.userService.getUser();
    this.form.patchValue(response);
  }

  public async submit(): Promise<void> {
    if (this.form.valid) {
      try {
        await this.userService.updateUser(this.form.value);
        this.handleSuccess("Update succesible!");
      } catch (error: any) {
        this.handleError(error.error.message);
      }
    }
  }


}
