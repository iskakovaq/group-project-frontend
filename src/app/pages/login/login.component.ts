import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  login() {
    const success = this.auth.login(this.email, this.password);

    if (success) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid data');
    }
  }
}