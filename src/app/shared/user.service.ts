import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public base_Url = 'https://restaurantrecordsapplication.herokuapp.com/api/user';
  // public base_Url = 'http://localhost:3000/api/user'

  constructor(private http: HttpClient, private router : Router) { }

  singUp(data: any){
    return this.http.post<any>(`${this.base_Url}/register`, data);
  };

  Login(user:any){
    return this.http.post<any>(`${this.base_Url}/login`,user);
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedIn(){
    return !!localStorage.getItem('token')!;
  }
}
