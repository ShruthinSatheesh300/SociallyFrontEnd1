import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {
    const token = localStorage.getItem('Authorization');
    if (token) {
      this.router.navigateByUrl('dashboard');
    }
  }

  public onLogin(loginFormData: object): void {
    this.authService.login(loginFormData).subscribe((res: any) => {
      const userData = res.body.data;

      localStorage.setItem('UserData', JSON.stringify(userData));

      const auth = res.headers.get('Authorization');
      const token = auth.split(' ')[1];

      localStorage.setItem('Authorization', token);

      this.snackBar.open('Login Succesfull', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('dashboard');
    });
  }

  public onSignup(signUpFormData: object): void {
    this.authService.registerUser(signUpFormData).subscribe((res: any) => {});
  }
}
