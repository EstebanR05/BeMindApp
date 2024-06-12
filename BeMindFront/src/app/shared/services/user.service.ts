import { Injectable } from '@angular/core';
import { BaseComponent } from '../core/base.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseComponent {
  constructor(private http: HttpClient) {
    super();
  }

  public login(): Promise<any> {
    const url: string = `${this.apiUrl}/getUser`;
    return this.http.get<user>(url).toPromise();
  }

  public register(body: user): Promise<any> {
    const url: string = `${this.apiUrl}/register`;
    return this.http.post<any>(url, body).toPromise();
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
