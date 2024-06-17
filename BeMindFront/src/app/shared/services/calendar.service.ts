import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { Calendar } from '../interface/Calendar.interface';

@Injectable({
  providedIn: 'root'
})
export class CalendarService extends BaseComponent {
  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Promise<any> {
    const url: string = `${this.apiUrl}/calendar`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<Calendar[]>(url, { headers }).toPromise();
  }
}
