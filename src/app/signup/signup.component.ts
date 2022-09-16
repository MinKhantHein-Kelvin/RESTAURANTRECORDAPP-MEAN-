import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public error = false;
  message: any;
  messageClass: any;
  signupForm : FormGroup;

  constructor(private userService : UserService, private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name : ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      mobile : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email : ['', Validators.compose([Validators.required, Validators.email])],
      password : ['' ,Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }
  signUp(){
    this.userService.singUp(this.signupForm.value).subscribe(data=>{
      if(!data.success){
        this.error = true;
        this.messageClass = 'alert alert-warning';
        this.message = data.message;
      }
      else{
        this.error = false;
        this.signupForm.reset();
        this.router.navigate(['/login']);
      }
    },
    err=>{
      alert("You have an error!")
    });
  }



  get Username() {
    return this.signupForm.get('name');
  }

  get Mobile(){
    return this.signupForm.get('mobile');
  }

  get Email() {
    return this.signupForm.get('email');
  }

  get Password() {
    return this.signupForm.get('password');
  }

}
