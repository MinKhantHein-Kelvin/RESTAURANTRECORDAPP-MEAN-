import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  public base_Url = 'https://restaurantrecordsapplication.herokuapp.com';
  // public base_Url = 'http://localhost:3000'

  // private httpOptions = {
  //   headers : new HttpHeaders().set('Content-Type','application/json').set('auth-token',localStorage.getItem('token')!)
  // };

  constructor(private http : HttpClient) { }


  getRestaurent(){
    return this.http.get(`${this.base_Url}/api/restaurant`).pipe(map((res:any)=>{
      return res;
    }))
  };

  addRestaurent(data:any){
    return this.http.post<any>(`${this.base_Url}/api/restaurant`, data).pipe(map((res : any)=>{
      return res;
    }))
  };

  deleteRestaurant(id : number){
    return this.http.delete(`${this.base_Url}/api/restaurant/${id}`).pipe(map((res:any)=>{
      return res;
    }))
  };

  updateRestaurant(id: number, data: any){
    return this.http.put<any>(`${this.base_Url}/api/restaurant/${id}`,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
