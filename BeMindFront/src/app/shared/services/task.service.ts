import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private generalUrl: string = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Promise<any> {
    const url: string = `${this.generalUrl}/Task`;
    return this.http.get<task[]>(url).toPromise();
  }

  public getById(id: number): Promise<any> {
    const url: string = `${this.generalUrl}/Task/${id}`;
    return this.http.get<task>(url).toPromise();
  }
}
