import { UserService } from './../shared/user.service';
import { Router } from '@angular/router';
import { ResturantData } from './../modal/resturant-data';
import { RestaurantServiceService } from './../shared/restaurant-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css'],
})
export class RestaurantDashboardComponent implements OnInit {
  @ViewChild('modalForm') public userModalForm: NgForm;
  @ViewChild('closemodal') closemodal : any;
  allRestaurentData: any;
  formValue: FormGroup;
  showAdd : boolean;
  showUpdate : boolean;
  restaurantModalObj: ResturantData = new ResturantData();

  constructor(
    private restaurantService: RestaurantServiceService,
    private fbBuilder: FormBuilder,
    public userService : UserService
  ) {}

  ngOnInit(): void {
    this.formValue = this.fbBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
    this.getAllData();
  }

  clickAddRestaurant(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getAllData() {
    this.restaurantService.getRestaurent().subscribe((data) => {
      if (data) {
        this.allRestaurentData = data;
      }
    });
  }

  addRestaurant() {
    this.restaurantModalObj.name = this.formValue.value.name;
    this.restaurantModalObj.email = this.formValue.value.email;
    this.restaurantModalObj.mobile = this.formValue.value.mobile;
    this.restaurantModalObj.address = this.formValue.value.address;
    this.restaurantModalObj.services = this.formValue.value.services;

      this.restaurantService.addRestaurent(this.restaurantModalObj).subscribe(
        (data) => {
          if (data) {
            alert('Restaurent Record add successful!');
            this.formValue.reset();
            this.getAllData();
            this.closemodal.nativeElement.click();
          }
        },
        (err) => {
          alert('Error Adding Restaurent!');
        }
      );
  }

  resetModal() {
    this.userModalForm.form.reset();
  }

  deleteRestaurant(data: any) {
    this.restaurantService.deleteRestaurant(data._id).subscribe((data) => {
      if (data) {
        alert('Delete Restaurent Successful');
        this.getAllData();
      }
    });
  }

  onEditRestaurent(data: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.restaurantModalObj._id = data._id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  updateRestaurant() {
    this.restaurantModalObj.name = this.formValue.value.name;
    this.restaurantModalObj.email = this.formValue.value.email;
    this.restaurantModalObj.mobile = this.formValue.value.mobile;
    this.restaurantModalObj.address = this.formValue.value.address;
    this.restaurantModalObj.services = this.formValue.value.services;

      this.restaurantService
      .updateRestaurant(this.restaurantModalObj._id, this.restaurantModalObj)
      .subscribe((data) => {
        if (data) {
          alert('Restaurent Record Update Successful');
          this.formValue.reset();
          this.getAllData();
          // this.restaurantModalObj = '';
          this.closemodal.nativeElement.click();
        }
      },err=>{
        alert(err);
      });
  }
}
