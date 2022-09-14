import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';

const routes: Routes = [
  {
    path : 'restaurant',
    component : RestaurantDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
