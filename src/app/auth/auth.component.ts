import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  public onLogin(loginFormData: object): void {
    this.authService.login(loginFormData).subscribe((res: any) => {
      const auth = res.headers.get('Authorization');
      const token = auth.split(' ')[1];

      localStorage.setItem('Authorization', token);

      this._snackBar.open('Login Succesfull', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('dash');
    });
  }

  public onSignup(signUpFormData: object): void {
    this.authService.registerUser(signUpFormData).subscribe((res: any) => {});
  }
}
