import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {
  public base_Url = 'https://restaurantrecordsapplication.herokuapp.com';

  constructor(private http : HttpClient) { }


  getRestaurent(){
    return this.http.get(`${this.base_Url}/api/restaurant`).pipe(map((res:any)=>{
      return res;
    }))
  };
}
