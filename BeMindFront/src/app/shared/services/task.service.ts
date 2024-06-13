import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from '../interface/task.interface';
import { BaseComponent } from '../core/base.component';

@Injectable({
  providedIn: 'root',
})
export class TaskService extends BaseComponent {
  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Promise<any> {
    const url: string = `${this.apiUrl}/Task`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<task[]>(url, { headers }).toPromise();
  }

  public getById(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/Task/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<task>(url, { headers }).toPromise();
  }

  public create(body: task): Promise<any> {
    const url: string = `${this.apiUrl}/Task`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.post<any>(url, body, { headers }).toPromise();
  }

  public update(id: number, body: task): Promise<any> {
    const url: string = `${this.apiUrl}/Task/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.put<any>(url, body, { headers }).toPromise();
  }

  public delete(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/Task/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.delete<any>(url, { headers }).toPromise();
  }

  public doingTask(id: number): Promise<any> {
    const url: string = `${this.apiUrl}/doingTask/${id}`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.post<any>(url, null ,{headers}).toPromise();
  }
}
