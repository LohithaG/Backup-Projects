import { Component, ChangeDetectorRef, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
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
  templateUrl: './food.update.component.html',
  providers: [FoodService],
  styles: [`
   @media only screen and (max-width: 500px) {
    .split-input {
      margin-top:5%'
    }
    }`]
})
export class FoodUpdateComponent {
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


  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private foodService: FoodService) {
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
  navigated = true
  foodId;
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['Id'] !== undefined) {
        this.foodId = +params['Id'] + "";
        this.navigated = true;
        //get driver Details by Id
        this.foodService.getFoodAdressById(this.foodId).subscribe(data => {
          this.food = data;

          L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
          this.map = L.mapbox.map('update_addressMap', 'mapbox.streets')
            .setView([this.food.latitude, this.food.longitude], 12);

          var marker = new L.Marker(new L.LatLng(this.food.latitude, this.food.longitude)).addTo(this.map);
          var newMarkerGroup = new L.LayerGroup();
          var newMarker;
          this.map.doubleClickZoom.disable();
          this.map.on('click', (e) => {
            var latitude = e.latlng.lat;
            var longitude = e.latlng.lng;

            if (newMarker != undefined) {
              this.map.removeLayer(newMarker);
            }
            // newMarker = new L.marker(e.latlng).addTo(this.map);
            // newMarker.on('click', (e) => {
            //   $('#add_foodcourt_Modal').modal('show');
            //   $('.add_foodcourt').on('click', () => {
            //     $('#add_foodcourt_Modal').modal('hide');
            //     this.food.latitude = e.latlng.lat;
            //     this.food.longitude = e.latlng.lng;
            //     this.map.removeLayer(marker);
            //   });
            // });
          });

        });
        this.cdr.detectChanges();
        console.info("Getting driver deails by Id ended");
      } else {
        this.navigated = false;
      }
    });
  }


  submitForm(value) {
    if (this.complexForm.valid) {
      const foodObject = {
        "id": this.foodId,
        "name": this.food.name,
        "address": this.food.address,
        "latitude": this.food.latitude,
        "longitude": this.food.longitude
      }

      this.foodService.updateFoodStation(foodObject).then(response => {
        if (response.data != null) {
          this.foodAddSuccess = 'Food Court updated sucessfully'
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
