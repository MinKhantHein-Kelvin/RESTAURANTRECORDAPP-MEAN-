import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  public error = true;
  message: any;
  messageClass: any;

  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['' ,Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  };

  userLogin(){
    if(this.loginForm.valid){
      this.userService.Login(this.loginForm.value).subscribe(data=>{
        if (!data.success) {
          this.error = true;
          this.messageClass = 'alert alert-warning';
          this.message = data.message;
        } else {
          this.error = false;
          localStorage.setItem('token', data.token);
          this.loginForm.reset();
          this.router.navigate(['/restaurant']);
        }
      })
    }
  };

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

}
