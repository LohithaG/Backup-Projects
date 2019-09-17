import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocationService } from '../../services/location.services';
import { ILocation } from '../../models/location';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { Location } from '../../models/location.data';
import * as moment from 'moment';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
/** Global declarions for accessing google and $ value **/
declare var google: any;
declare var $: any;

/**
 *This component deals with dealer update operation dealer.update.component
 */

@Component({
  templateUrl: './location.update.component.html',
  providers: [LocationService, FormBuilder],
})
export class LocationUpdateComponent implements OnInit {

  public locationUpdateSuccess;
  public locationUpdateFailure;
  public locationsList: ILocation[];
  // @Input() locationData: ILocation;
  public locationData: any =
    {
      'locNbr': '',
      'contactPerson': '',
      'locAddrName': '',
      'address': '',
      'city': '',
      'state': '',
      'country': '',
      'zipCode': '',
      'email': '',
      'phoneNumber': '',
      'latitude': null,
      'longitude': null,
      'createdTS': null,
      'lastUpdatedTS': null,
      'holidays': '',
      'timings': '',
      'openHours': null,
      'openMinutes': null,
      'closeHours': null,
      'closeMinutes': null,
      'locationType': {
        'id': ''
      }
    }
  public postLocation: any =
    {
      'locNbr': '',
      'contactPerson': '',
      'locAddrName': '',
      'address': '',
      'city': '',
      'state': '',
      'country': '',
      'zipCode': '',
      'email': '',
      'phoneNumber': '',
      'latitude': null,
      'longitude': null,
      'createdTS': null,
      'lastUpdatedTS': null,
      'holidays': '',
      'timings': '',
      'openHours': null,
      'openMinutes': null,
      'closeHours': null,
      'closeMinutes': null,
      'locationType': {
        'id': ''
      }
    }
  @Output() close = new EventEmitter();
  navigated = true;
  public storeTimings: any;
  public activePageTitle: string;
  public locationUpdateResponse: String;
  public error: String;
  complexForm: FormGroup;
  formValidate: boolean;
  locNbr: AbstractControl;
  contactPerson: AbstractControl;
  locAddrName: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  state: AbstractControl;
  country: AbstractControl;
  zipCode: AbstractControl;
  email: AbstractControl;
  phoneNumber: AbstractControl;
  latitude: AbstractControl;
  longitude: AbstractControl;
  locationType: AbstractControl;
  holiday: AbstractControl;
  openHours: AbstractControl;
  openMinutes: AbstractControl;
  closeHours: AbstractControl;
  closeMinutes: AbstractControl;

  public lastUpdatedDate: any;
  // public createdTS:any;
  public createdDate: any;
  public dd: any;
  public mm: any;
  public yyyy: any;
  public serviceErrorResponse;
  public serviceErrorData;
  public open_hours: any = '';
  public open_minutes: any = ''
  public close_hours: any = ''
  public close_minutes: any = ''
  public holidays = [
    { id: 1, day: "Sunday", code: "SUN", check: false },
    { id: 2, day: "Monday", code: "MON", check: false },
    { id: 3, day: "Tuesday", code: "TUE", check: false },
    { id: 4, day: "Wednesday", code: "WED", check: false },
    { id: 5, day: "Thursday", code: "THU", check: false },
    { id: 6, day: "Friday", code: "FRI", check: false },
    { id: 7, day: "Saturday", code: "SAT", check: false }
  ]


  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    showTodayBtn: false,
    showClearDateBtn: false,
    editableDateField: false,
    height: '30px',
    selectionTxtFontSize: '14px',
    indicateInvalidDate: true,
  };

  constructor(private locationService: LocationService, private router: Router, fb: FormBuilder, private route: ActivatedRoute) {

    this.activePageTitle = 'updateLocation';
    this.formValidate = false;
    this.locationUpdateResponse = '';
    /** Complex form validations for Dealer data **/
    this.complexForm = fb.group({
      'locNbr': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      'contactPerson': [null, Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(32), Validators.pattern('[a-zA-Z, " "]+')])],
      'locAddrName': [null, Validators.compose([Validators.required,
      Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z, " "]+')])],
      'address': [null, Validators.required],
      'city': [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z, " "]+')])],
      'state': [null, Validators.compose([Validators.required])],
      'country': [null, Validators.compose([Validators.required])],
      'zipCode': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      'email': [null, Validators.compose([Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      'phoneNumber': [null, Validators.compose([Validators.required, Validators.pattern('[0-9]+')])],
      'latitude': [null, Validators.compose([Validators.required])],
      'longitude': [null, Validators.compose([Validators.required])],
      'locationType': [null, Validators.compose([Validators.required])],
      'holidays': [null],
      'openHours': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]$|^[0,1][0-9]$|^2[0-3]$')])],
      'openMinutes': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]$|^[0-5][0-9]$')])],
      'closeHours': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]$|^[0,1][0-9]$|^2[0-3]$')])],
      'closeMinutes': [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]$|^[0-5][0-9]$')])]

    })
    this.locNbr = this.complexForm.controls['locNbr'];
    this.contactPerson = this.complexForm.controls['contactPerson'];
    this.locAddrName = this.complexForm.controls['locAddrName'];
    this.address = this.complexForm.controls['address'];
    this.city = this.complexForm.controls['city'];
    this.state = this.complexForm.controls['state'];
    this.country = this.complexForm.controls['country'];
    this.zipCode = this.complexForm.controls['zipCode'];
    this.email = this.complexForm.controls['email'];
    this.phoneNumber = this.complexForm.controls['phoneNumber'];
    this.latitude = this.complexForm.controls['latitude'];
    this.longitude = this.complexForm.controls['longitude'];
    this.locationType = this.complexForm.controls['locationType'];
    this.holiday = this.complexForm.controls['holidays'],
    this.openHours = this.complexForm.controls['openHours'],
    this.openMinutes = this.complexForm.controls['openMinutes'],
    this.closeHours = this.complexForm.controls['closeHours'],
    this.closeMinutes = this.complexForm.controls['closeMinutes']

  }

  locationTypes: any;
  ngOnInit(): void {
    this.locationService.getAllLocationDetails().subscribe(response => {
      this.locationTypes = response.data;
      // console.log(response);
    }, error =>
        console.log(error)
    )
    var timings = [];
    var openTime = [], closeTime = [], holidays_list = []
    this.route.params.forEach((params: Params) => {
      if (params['locNbr'] !== undefined) {
        const locNbr: string = +params['locNbr'] + '';
        this.navigated = true;

        this.locationService.getLocationDetailsByID(locNbr).then(locationData => {
          console.log(locationData);
          if (locationData.locationType != null) {
            this.locationData = locationData;
            timings = locationData.timings.split("-");
            // console.log(timings);
            openTime = timings[0].split(":");
            closeTime = timings[1].split(":");
            this.locationData.openHours = openTime[0]
            this.locationData.closeHours = closeTime[0]
            this.locationData.openMinutes = openTime[1]
            this.locationData.closeMinutes = closeTime[1];
            holidays_list = this.locationData.holidays.split("-");
            console.log(holidays_list);

            for (let i = 0; i < this.holidays.length; i++) {
              for (let j = 0; j < holidays_list.length; j++) {
                if (holidays_list[j].toUpperCase() === this.holidays[i].code) {
                  this.holidays[i].check = true;
                  this.days.push(this.holidays[i].code)
                  console.log(this.holidays[i].code);
                }
              }
            }

          }
          // let locationdate = new Date(locationData.lastUpdatedTS);
          const date = new Date(locationData.lastUpdatedTS);
          this.lastUpdatedDate = {
            date: {
              year: date.getFullYear(),
              month: date.getMonth() + 1,
              day: date.getDate()
            }
          };

          // public model: any = { date: { year: 2018, month: 10, day: 9 } };
          const lastdate = new Date(locationData.createdTS);
          this.createdDate = {
            date: {
              year: lastdate.getFullYear(),
              month: lastdate.getMonth() + 1,
              day: lastdate.getDate()
            }
          };
        });
      } else {
        this.navigated = false;
      }
    });
  }


  /** Dealers Form submit **/
  submitForm(locationDataValues) {
    console.log(locationDataValues);
    this.storeTimings = this.locationData.openHours + ':' + this.locationData.openMinutes + '-' + this.locationData.closeHours + ':' + this.locationData.closeMinutes;
    console.log(this.storeTimings);
    this.locationData.timings = this.storeTimings,
      this.locationData.holidays = this.h;
    // for(let i=0;i<this.holidays.length;i++){
    //   if(!this.h.includes(this.holidays[i].code)){
    //     if(this.holidays[i].check===true)
    //     this.h=this.h+"-"+this.holidays[i].code
    //   }
    // }
    for (let i = 0; i < this.days.length; i++) {
      if (i < this.days.length - 1)
        this.h = this.h + this.days[i] + "-"
      else
        this.h = this.h + this.days[i];
    }
    console.log(this.h);
    const today_Date = new Date();
    this.postLocation = {
      'locNbr': locationDataValues.locNbr,
      'contactPerson': locationDataValues.contactPerson,
      'locAddrName': locationDataValues.locAddrName,
      'address': locationDataValues.address,
      'city': locationDataValues.city,
      'state': locationDataValues.state,
      'country': locationDataValues.country,
      'zipCode': locationDataValues.zipCode,
      'email': locationDataValues.email,
      'holidays': this.h,
      'timings': this.storeTimings,
      'phoneNumber': locationDataValues.phoneNumber,
      'latitude': locationDataValues.latitude,
      'longitude': locationDataValues.longitude,
      'locationType': {
        'id': locationDataValues.locationType
      },
      'createdTS': moment(today_Date).format(),
      'lastUpdatedTS': moment(today_Date).format(),
    }

    if (locationDataValues.locNbr != '' && locationDataValues.contactPerson != ''
      && locationDataValues.locAddrName != '' && locationDataValues.state != '' && locationDataValues.city != ''
      && locationDataValues.country != '' && locationDataValues.zipCode != '' && locationDataValues.phoneNumber != ''
      && locationDataValues.email != '' && locationDataValues.address != '' && locationDataValues.latitude != '' &&
      locationDataValues.longitude != '' &&this.complexForm.valid) {
      // successs
      console.log(this.postLocation)
      this.locationService.updateLocation(this.postLocation)
        .then(response => {
          if (response.data != null) {
            this.locationUpdateSuccess = 'Location updated successfully'
            setTimeout(() => {
              this.locationUpdateSuccess = '';
              this.router.navigate(['/locations']);
            }, 3000);
          } else {
            this.locationUpdateFailure = response.error.message;
            setTimeout(() => {
              this.locationUpdateFailure = ''
            }, 3000)
          }
        }, error => {
          this.serviceErrorResponse = error.exception;
          this.serviceErrorData = true;
        })
        .catch(error => this.error = error);
    } else {
      this.formValidate = true;
      console.log("form invalid")
    }
  }


  /** Google auto generated places for Dealer address **/
  onchange(eventChange: any) {
    const places = new google.maps.places.Autocomplete(document.getElementById('address'));
    google.maps.event.addListener(places, 'place_changed', () => {
      const place = places.getPlace();
      const address = place.formatted_address.split(',');
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      this.locationData.latitude = latitude;
      this.locationData.longitude = longitude;
      if (address[1] != 'undefined') {
        this.locationData.city = address[1].trim();
      }
      if (address[2] != 'undefined') {
        this.locationData.state = (address[2]).trim().split(' ')[0];
      }
      if (address[2] != 'undefined') {
        this.locationData.zipCode = (address[2]).trim().split(' ')[1];
      }
      if (address[0] != 'undefined') {
        this.locationData.address = address[0].trim();
      }
    });

  }
  days = [];
  h: any = '';
  fun(e, id) {
    // console.log(id);
    this.h = '';

    if (!this.days.includes(e)) {
      if (this.days.length >= id)
        this.days.splice(id - 1, 0, e)
      else {
        this.days.splice(this.days.length, 0, e)
      }
    }
    else {
      var index;
      for (let i = 0; i < this.days.length; i++) {
        if (e === this.days[i]) {
          index = i;
          break;
        }
      }
      this.days.splice(index, 1);
    }
    console.log(this.days);
    console.log(this.h);
  }

  /**
    * This method navigates the screen to back
  */
  public goBack(savedDriver: ILocation = null): void {
    this.close.emit(savedDriver);
    if (this.navigated) { window.history.back(); }

  }
  /**
   * This method navigates the screen to home Page (dashboard)
   */
  public goToHome() {
    let link = ['/dashboard'];
    this.router.navigate(link);
  }

  onDateChanged(event: IMyDateModel) {

    this.myDatePickerOptions = {
      // other options...
      dateFormat: 'dd-mm-yyyy',
      showTodayBtn: false,
      showClearDateBtn: false,
      editableDateField: false,
      height: '30px',
      selectionTxtFontSize: '14px',
      indicateInvalidDate: true,
    };
  }
}
