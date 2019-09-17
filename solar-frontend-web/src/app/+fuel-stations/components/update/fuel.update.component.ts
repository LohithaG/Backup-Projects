import { Component, EventEmitter, Output, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { FuelService } from 'app/+fuel-stations/services/fuel.service';

/**
 * This component adds new driver
 */

declare var $: any;
declare var check: any;
declare var L: any;
@Component({
  templateUrl: './fuel.update.component.html',
  providers: [FuelService],
  styles: [`
   @media only screen and (max-width: 500px) {
    .split-input {
      margin-top:5%'
    }
    }`]
})
export class FuelUpdateComponent {

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
  navigated = true;
  name: AbstractControl;
  address: AbstractControl;
  longitude: AbstractControl;
  latitude: AbstractControl;
  public map;
  public directions = L.mapbox.directions();
  public directionsLayer;

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder, private route: ActivatedRoute, private fuelService: FuelService, private router: Router) {

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
  fuelId;
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['Id'] !== undefined) {
        this.fuelId = +params['Id'] + "";
        this.navigated = true;
        //get driver Details by Id
        this.fuelService.getFuelAdressById(this.fuelId).subscribe(data => {
          this.fuel = data;
          L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
          this.map = L.mapbox.map('update_addressMap', 'mapbox.streets')
            .setView([this.fuel.latitude, this.fuel.longitude], 12);
          var marker = new L.Marker(new L.LatLng(this.fuel.latitude, this.fuel.longitude)).addTo(this.map);
          var newMarkerGroup = new L.LayerGroup();
          var newMarker;
          this.map.doubleClickZoom.disable();
          this.map.on('click', (e) => {
            var latitude = e.latlng.lat;
            var longitude = e.latlng.lng;
            if (newMarker != undefined) {
              this.map.removeLayer(newMarker);
            }
            //newMarker = new L.marker(e.latlng).addTo(this.map);
            // newMarker.on('click', (e) => {
            //   $('#add_fuelstation_Modal').modal('show');
            //   $('.add_fuelstation').on('click', () => {
            //     $('#add_fuelstation_Modal').modal('hide');
            //     this.fuel.latitude = e.latlng.lat;
            //     this.fuel.longitude = e.latlng.lng;
            //     this.map.removeLayer(marker);
            //   });
            // });

          });
        })
        this.cdr.detectChanges();
        console.info("Getting driver deails by Id ended");
      } else {
        this.navigated = false;
      }
    });
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

    this.map.panTo(new L.LatLng(fuelvalue.lat, fuelvalue.lang));
    if (this.marker !== []) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([fuelvalue.lat, fuelvalue.lang])
      .addTo(this.map);
    // this.map.panTo(new L.LatLng(fuelvalue.lat, fuelvalue.lang));
  }

  submitForm(value) {
    if (this.complexForm.valid) {
      const fuelObject = {
        "id": this.fuelId,
        "name": this.fuel.name,
        "address": this.fuel.address,
        "latitude": this.fuel.latitude,
        "longitude": this.fuel.longitude
      }

      this.fuelService.updateFuelStation(fuelObject).then(response => {
        if (response.data != null) {
          this.fuelAddSuccess = 'Fuel Station updated sucessfully'
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
