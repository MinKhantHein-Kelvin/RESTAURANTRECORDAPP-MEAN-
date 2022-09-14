import { RestaurantServiceService } from './../shared/restaurant-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent implements OnInit {
  allRestaurentData : any;

  constructor(private restaurantService : RestaurantServiceService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurent().subscribe(data=>{
      console.log(data);
      if(data){
        this.allRestaurentData = data;
      }
    })
  }

}
