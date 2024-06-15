import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProfileListComponent, ProfileModalComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserProfileModule { }
