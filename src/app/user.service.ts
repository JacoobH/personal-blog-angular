import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'http://localhost:8080/user';
  constructor(private http: HttpClient) { }

  login(user: User): Observable<boolean> {
    const url = `${this.userUrl}/login`;
    return this.http.post<boolean>(url, user);
  }

  getInformation(user: User): Observable<User> {
    const url = `${this.userUrl}/getInformation`;
    return this.http.post<User>(url,user);
  }
}
