import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL: string =
  'http://ec2-18-191-248-162.us-east-2.compute.amazonaws.com:5000';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/login`, user, HTTP_OPTIONS);
  }

  register(user: any) {}
}
