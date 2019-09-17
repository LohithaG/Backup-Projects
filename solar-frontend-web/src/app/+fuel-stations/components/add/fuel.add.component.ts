import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { FuelService } from '../../services/fuel.service';

declare var $: any;
declare var check: any;
declare var L: any;
/**
 * This component adds new driver
 */
@Component({
  templateUrl: './fuel.add.component.html',
  providers: [FuelService],
  styles: [`
   @media only screen and (max-width: 500px) {
    .split-input {
      margin-top:5%'
    }
    }`]
})
export class FuelAddComponent {

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
  public fuelAddressList: any[];
  fuelAddSuccess;
  fuelAddFailure
  fuel: any = {}
  public map;
  public directions = L.mapbox.directions();
  public directionsLayer;
  public drivermarker = [];

  name: AbstractControl;
  address: AbstractControl;
  longitude: AbstractControl;
  latitude: AbstractControl;


  constructor(private fb: FormBuilder, private fuelService: FuelService, private router: Router) {
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

  // ngOnInit() {
  //   L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
  //   this.map = L.mapbox.map('map', 'mapbox.streets', {
  //     zoomControl: true,
  //     minZoom: 2,
  //     maxZoom: 6
  //   }).setView([39.428893, -103.397667], 4);
  // }


  ngOnInit() {
    this.activePageTitle = 'Add Food Court';
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
    this.activePageTitle = 'Add Fuel Station'
    this.map = L.mapbox.map('update_addressMap', 'mapbox.streets').setView([33.891315, -84.255382], 9);
    var newMarkerGroup = new L.LayerGroup();
    var newMarker;
    this.map.doubleClickZoom.disable();
    this.map.on('click', (e, fuel) => {
      var latitude = e.latlng.lat;
      var longitude = e.latlng.lng;

      if (newMarker != undefined) {
        this.map.removeLayer(newMarker);
      }
      if (this.marker !== []) {
        this.map.removeLayer(this.marker);
      }
     // newMarker = new L.marker(e.latlng).addTo(this.map);
      // newMarker.on('click', (e, fuel) => {
      //   $('#add_fuelstation_Modal').modal('show');
      //   $('.add_fuelstation').on('click', fuel => {
      //     $('#add_fuelstation_Modal').modal('hide');
      //     this.fuel.latitude = e.latlng.lat;
      //     this.fuel.longitude = e.latlng.lng;

      //   });
      // });
    });
  }




  driverMarker(lat, lng) {
    if (this.drivermarker !== []) {
      this.map.removeLayer(this.drivermarker);
    }
    let drivermarker = '';
    drivermarker = L.icon({
      iconUrl: '../../../../assets/img/map/truck-icon.png',
      iconAnchor: [0, 0]
    });
    this.drivermarker = L.marker([lat, lng], { icon: drivermarker })
      .bindPopup('Driver : ' + ' ')
      .addTo(this.map);
  }


  onchange(eventChange: any, fuel: any) {
    fuel.latitude = '';
    fuel.longitude = '';
    this.fuelService.getFuelAddress(fuel.address).subscribe(response => {
      this.fuelAddressList = new Array(response.features.length);
      if (response.features.length != 0) {
        for (let i = 0; i < response.features.length; i++) {
          this.fuelAddressList[i] = {
            value: response.features[i].place_name,
            lat: response.features[i].center[1],
            lang: response.features[i].center[0]
          };
        }
      }
    });
  }
  marker = []
  public fuelItemSelected(fuelvalue: any) {
    console.info("fuel Item Selected.");
    this.fuelAddressList.length = null;
    this.fuel.address = fuelvalue.value;
    this.fuel.latitude = fuelvalue.lat;
    this.fuel.longitude = fuelvalue.lang;

    //  this.driverMarker( this.fuel.latitude,this.fuel.longitude)
    this.map.panTo(new L.LatLng(fuelvalue.lat, fuelvalue.lang));
    if (this.marker !== []) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([fuelvalue.lat, fuelvalue.lang])
      .addTo(this.map);
  }

  submitForm(value) {
    if (this.complexForm.valid) {
      const fuelObject = {
        "name": this.fuel.name,
        "address": this.fuel.address,
        "latitude": this.fuel.latitude,
        "longitude": this.fuel.longitude
      }

      this.fuelService.addFuelStation(fuelObject).then(response => {
        if (response.data != null) {
          this.fuelAddSuccess = 'Fuel Station added sucessfully'
          let that = this;
          setTimeout(() => {
            this.fuelAddSuccess = ''
            this.router.navigate(['/fuel']);
          }, 2000);
        } else {
          this.fuelAddFailure = response.error.message
          setTimeout(() => {
            this.fuelAddFailure = ''
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
    this.router.navigate(['/fuel']);
  }

}
