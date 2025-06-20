import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login-request.model';
import { LoginResponse } from '../model/login-response.model';
import { User } from '../model/user.model';
import { CreateUserModel } from '../model/create-user.model';
import { UpdateUserModel } from '../model/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_URL = 'http://localhost:8081/users';
  private readonly LOGIN_URL = `${this.BASE_URL}/login`;
  private readonly REGISTER_URL = `${this.BASE_URL}/register`;

  constructor(private http: HttpClient, private router: Router) {}

  // Auth
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGIN_URL, credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Token handling
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Current user
  setCurrentUser(user: LoginResponse): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // User CRUD
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL);
  }

  addUser(user: CreateUserModel): Observable<User> {
    return this.http.post<User>(this.REGISTER_URL, user);
  }

  updateUser(user: UpdateUserModel): Observable<User> {
    return this.http.put<User>(this.BASE_URL, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}
