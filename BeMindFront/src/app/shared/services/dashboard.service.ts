import {Injectable, OnInit} from '@angular/core';
import {BaseComponent} from "../core/base.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AllByYearly, DoInTheWeek, RecentlyDone} from "../interface/Dashboard.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseComponent {

  constructor(private http: HttpClient) {
    super()
  }

  public getAllYearly(): Promise<any> {
    const url: string = `${this.apiUrl}/dashboard/getAllYearly`;
    let headers: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<AllByYearly>(url, {headers}).toPromise();
  }

  public getAllRecentlyDone(): Promise<any> {
    const url: string = `${this.apiUrl}/dashboard/getAllRecentlyDone`;
    let headers: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<RecentlyDone[]>(url, {headers}).toPromise();
  }

  public getAllDoInTheWeek(): Promise<any> {
    const url: string = `${this.apiUrl}/dashboard/getAllDoInTheWeek`;
    let headers: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<DoInTheWeek[]>(url, {headers}).toPromise();
  }


}
