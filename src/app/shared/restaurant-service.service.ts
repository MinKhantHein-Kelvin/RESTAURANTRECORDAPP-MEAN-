import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http : HttpClient) { }

  getRestaurent(){
    return this.http.get('http://localhost:3000/api/restaurant').pipe(map((res:any)=>{
      return res;
    }))
  };
}
