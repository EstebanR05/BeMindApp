import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user, userLogin } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseComponent {
  constructor(private http: HttpClient) {
    super();
  }

  public login(body: userLogin): Promise<any> {
    const url: string = `${this.apiUrl}/login`;
    return this.http.post<user>(url, body).toPromise();
  }

  public logout(): Promise<any> {
    const url: string = `${this.apiUrl}/logout`;
    return this.http.get<user>(url).toPromise();
  }

  public register(body: user): Promise<user> {
    const url: string = `${this.apiUrl}/register`;
    return this.http.post<user | any>(url, body).toPromise();
  }

  public getUser(): Promise<any> {
    const url: string = `${this.apiUrl}/getUser`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.get<user>(url, { headers }).toPromise();
  }

  public updateUser(body: user): Promise<any> {
    const url: string = `${this.apiUrl}/updateUser`;
    let headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ` + this.token
    );
    return this.http.put<any>(url, body, { headers }).toPromise();
  }
}
