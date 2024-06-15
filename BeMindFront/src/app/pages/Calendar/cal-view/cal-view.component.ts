import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-cal-view',
  templateUrl: './cal-view.component.html',
  styleUrl: './cal-view.component.scss'
})
export class CalViewComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
}
