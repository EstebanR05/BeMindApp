import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';



@NgModule({
  declarations: [ProfileListComponent, ProfileModalComponent],
  imports: [CommonModule]
})
export class UserProfileModule { }
