import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL: string =
  'http://ec2-18-191-248-162.us-east-2.compute.amazonaws.com:5000';
// const BASE_URL: string = 'http://localhost:5000';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  httpOptions: any = {};

  constructor(private http: HttpClient, router: Router) {
    let token: string = localStorage.getItem('token');

    if (!token) {
      localStorage.clear();
      router.navigate['main'];
    }

    this.httpOptions.headers = new HttpHeaders({ 'auth-token': token });
  }

  getData(type: string): Observable<any> {
    let url: string = `${BASE_URL}/api/readings/${type}`;
    return this.http.get(url, this.httpOptions);
  }

  getDataByDate(type: string, date: string): Observable<any> {
    let url: string = `${BASE_URL}/api/readings/${type}/${date}`;
    return this.http.get(url, this.httpOptions);
  }
}
