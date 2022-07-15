import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss']
})
export class RegisterLoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup
  signUpFormSubmit:boolean = false
  hide:boolean = true



  constructor( private formBuilder: FormBuilder, private UserService: UserService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required ]],
      lastName: ['', [Validators.required ]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6) ]],

      
    });

   
  }
  ngOnInit(): void {
  }

  onSignup(){
    this.signUpFormSubmit=true
    let reqData= {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
     
   
    }
    this.UserService.registerService(reqData).subscribe((res:any)=>{
      console.log(res)
      
    }) 

  }

}
