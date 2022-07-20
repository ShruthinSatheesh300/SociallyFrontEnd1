import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  signUpFormSubmit: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  @Output() registerToAuth = new EventEmitter<any>()

  ngOnInit(): void {}

 public onSignup() {
    this.signUpFormSubmit = true;
   
    this.registerToAuth.emit(this.signupForm.value)

   
  }
}
