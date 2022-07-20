import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  onLogin(loginFormData: any) {
    this.authService.login(loginFormData).subscribe((res: any) => {
      this._snackBar.open('Login Succesfull', '', {
        duration: 3000,
      });
    });
  }

  onSignup(signUpFormData: any) {
    this.authService.registerUser(signUpFormData).subscribe((res: any) => {});
  }
}
