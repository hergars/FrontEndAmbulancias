import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = 'http://localhost/api/login';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(this.apiUrl, credentials);
  }

  logout() {
  localStorage.removeItem('token');
}
}
