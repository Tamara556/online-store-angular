import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateUserModel } from '../../model/update-user.model';
import { AuthService } from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginResponse} from '../../model/login-response.model';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.scss'
})
export class UpdateUser {
  user: UpdateUserModel = {
    id: 0,
    username: '',
    email: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.user.id = Number(this.route.snapshot.paramMap.get('id')!);
    console.log('User ID:', this.user.id);
  }

  onSubmit() {
    this.authService.updateUser(this.user).subscribe({
      next: () => this.router.navigate(['/admin/users']),
      error: err => console.error('Failed to update user', err)
    });
  }
}
