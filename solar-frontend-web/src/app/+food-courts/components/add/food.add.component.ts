import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { FoodService } from 'app/+food-courts/services/food.service';
declare var $: any;
declare var check: any;
declare var L: any;
/**
 * This component adds new driver
 */
@Component({
  templateUrl: './food.add.component.html',
  providers: [FoodService],
  styles: [`
   @media only screen and (max-width: 500px) {
    .split-input {
      margin-top:5%'
    }
    }`]
})
export class FoodAddComponent {
  private model: Object = { date: { year: 2018, month: 10, day: 9 } };
  private dateOfBirth: Date;
  isMatchedConfirmPassword: boolean;
  public activePageTitle: string;
  public minAge: Date;
  public error: string;
  public driverAddResponse: string;
  public maxAge: Date;
  private placeholder = 'Select date of birth';
  complexForm: FormGroup;
  formValidate: boolean;
  public dateBirth: Date;
  public licenseExpiryDate: Date;
  public vendorsList;
  public dealerNameListData;
  public serviceErrorResponse;
  public serviceErrorData;
  public foodAddressList: any[];
  foodAddSuccess;
  foodAddFailure;

  food: any = {}

  public map;
  public directions = L.mapbox.directions();
  public directionsLayer;
  name: AbstractControl;
  address: AbstractControl;
  longitude: AbstractControl;
  latitude: AbstractControl;


  constructor(private fb: FormBuilder, private router: Router, private foodService: FoodService) {

    this.formValidate = false;
    this.complexForm = this.fb.group({
      'latitude': [null, Validators.compose([Validators.required])],
      'name': [null, Validators.compose([Validators.required])],
      'longitude': [null, Validators.compose([Validators.required])],
      'address': [null, Validators.compose([Validators.required])],

    })
    this.latitude = this.complexForm.controls['latitude'];
    this.name = this.complexForm.controls['name'];
    this.longitude = this.complexForm.controls['longitude'];
    this.address = this.complexForm.controls['address'];

  }

  ngOnInit() {
    this.activePageTitle = 'Add Food Court';
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
    this.map = L.mapbox.map('update_addressMap', 'mapbox.streets').setView([33.891315, -84.255382], 9);
    var newMarkerGroup = new L.LayerGroup();
    var newMarker;
    this.map.doubleClickZoom.disable();
    this.map.on('click', (e, food) => {
      var latitude = e.latlng.lat;
      var longitude = e.latlng.lng;

      if (newMarker != undefined) {
        this.map.removeLayer(newMarker);
      }
      // newMarker = new L.marker(e.latlng).addTo(this.map);
      // newMarker.on('click', (e, food) => {
      //     $('#add_foodcourt_Modal').modal('show');
      //     $('.add_foodcourt').on('click', food => {
      //         $('#add_foodcourt_Modal').modal('hide');
      //         this.food.latitude = e.latlng.lat;
      //         this.food.longitude = e.latlng.lng;
      //     });
      // });
    });
  }

  // ngOnInit() {
  //   this.activePageTitle = 'Add Food Court';
  //   L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
  //   this.map = L.mapbox.map('update_addressMap', 'mapbox.streets',{
  //         zoomControl: true,
  //         minZoom: 2,
  //         maxZoom: 6
  //       }).setView([39.428893, -103.397667], 4);
  //   var newMarkerGroup = new L.LayerGroup();
  //   var newMarker;
  //   this.map.doubleClickZoom.disable();
  //   this.map.on('click', (e, food) => {
  //     var latitude = e.latlng.lat;
  //     var longitude = e.latlng.lng;

  //     if (newMarker != undefined) {
  //       this.map.removeLayer(newMarker);
  //     }
  //     if (this.marker !== []) {
  //       this.map.removeLayer(this.marker);
  //     }
  //     newMarker = new L.marker(e.latlng).addTo(this.map);
  //     newMarker.on('click', (e, food) => {
  //       if (confirm("Are you sure to change ")) {
  //         this.food.latitude = e.latlng.lat;
  //         this.food.longitude = e.latlng.lng;
  //       }

  //     });
  //   });

  // }

  onchange(eventChange: any, food: any) {
    food.latitude = '';
    food.longitude = '';
    this.foodService.getFoodAddress(food.address).subscribe(response => {
      this.foodAddressList = new Array(response.features.length);
      if (response.features.length != 0) {
        for (let i = 0; i < response.features.length; i++) {
          this.foodAddressList[i] = {
            value: response.features[i].place_name,
            lat: response.features[i].center[1],
            lang: response.features[i].center[0]
          };
        }
      }
    });
  }
  /**
    * This method food Item Selected
    */
  marker = []
  public foodItemSelected(foodvalue: any) {
    console.info("food Item Selected");
    this.foodAddressList.length = null;
    this.food.address = foodvalue.value;
    this.food.latitude = foodvalue.lat;
    this.food.longitude = foodvalue.lang;

    this.map.panTo(new L.LatLng(foodvalue.lat, foodvalue.lang));
    if (this.marker !== []) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([foodvalue.lat, foodvalue.lang])
      .addTo(this.map);
    // this.map.panTo(new L.LatLng(foodvalue.lat, foodvalue.lang));
  }


  submitForm(value) {
    if (this.complexForm.valid) {
      const foodObject = {
        "name": this.food.name,
        "address": this.food.address,
        "latitude": this.food.latitude,
        "longitude": this.food.longitude
      }

      this.foodService.addFoodStation(foodObject).then(response => {
        if (response.data != null) {
          this.foodAddSuccess = 'Food Court added sucessfully'
          let that = this;
          setTimeout(() => {
            this.foodAddSuccess = ''
            this.router.navigate(['/food']);
          }, 2000);
        } else {
          this.foodAddFailure = response.error.message
          setTimeout(() => {
            this.foodAddFailure = ''
          }, 3000);
        }
      }, error => {
        this.serviceErrorResponse = error.exception;
        this.serviceErrorData = true;
      })
        .catch(error => this.error = error);
    }
    else {
      this.formValidate = true;
    }
  }

  public goBack(): void {
    this.router.navigate(['/food']);
  }
}
