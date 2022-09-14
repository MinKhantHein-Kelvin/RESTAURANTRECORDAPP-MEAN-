import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  constructor(private http : HttpClient) { }
  public base_Url = environment.API_URL;

  getRestaurent(){
    return this.http.get(`${this.base_Url}/api/restaurant`).pipe(map((res:any)=>{
      return res;
    }))
  };
}
