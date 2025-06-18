import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/login-request.model';
import { LoginResponse } from '../model/login-response.model';
import { User } from '../model/user.model';
import {CreateUserModel} from '../model/create-user.model';
import {UpdateUserModel} from '../model/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/users/login';
  private usersUrl = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginUrl, credentials);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token){
      return true;
    }
    return false;
  }

  setCurrentUser(user: LoginResponse) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): LoginResponse {
    return JSON.parse(localStorage.getItem('currentUser')!) as LoginResponse;
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  addUser(user: CreateUserModel): Observable<User> {
    return this.http.post<User>('http://localhost:8081/users/register', user);
  }

  updateUser(user: UpdateUserModel): Observable<User> {
    return this.http.put<User>(`http://localhost:8081/users`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/users/${id}`);
  }

}
