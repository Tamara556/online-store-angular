
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginRequest} from '../model/login-request.model';
import {LoginResponse} from '../model/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/users/login';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials, {
      withCredentials: true
    });
  }


  saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  // getToken(): string | null {
  //   return localStorage.getItem('auth_token');
  // }
  //
  // logout(): void {
  //   localStorage.removeItem('auth_token');
  // }
  //
  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('auth_token');
  // }
}
