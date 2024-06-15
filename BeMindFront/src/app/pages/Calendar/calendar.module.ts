import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalViewComponent } from './cal-view/cal-view.component';


@NgModule({
  declarations: [CalViewComponent],
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarModule { }
