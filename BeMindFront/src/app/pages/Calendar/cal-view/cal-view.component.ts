import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BaseComponent } from 'src/app/shared/core/base.component';
import { Calendar } from 'src/app/shared/interface/Calendar.interface';
import { CalendarService } from 'src/app/shared/services/calendar.service';



@Component({
  selector: 'app-cal-view',
  templateUrl: './cal-view.component.html',
  styleUrl: './cal-view.component.scss'
})
export class CalViewComponent extends BaseComponent implements OnInit {
  private calander: Calendar[] = [];

  constructor(private calendarServicer: CalendarService) { super() }

  ngOnInit(): void {
    this.getDataCalender();
    console.log(this.calander)
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.calander
  };

  async getDataCalender() {
    try {
      const result: Calendar[] = await this.calendarServicer.getAll();
      this.calander = result;
    } catch (error: any) {
      this.handleError(error.error.message);
    }
  }

}

