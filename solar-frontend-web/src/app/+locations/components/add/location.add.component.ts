import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '../../models/location.data'
import { LocationService } from '../../services/location.services';
import { IMyOptions, IMyDateModel } from 'mydatepicker';
// import { invalid } from 'moment';
/** Global declarions for accessing google and $ value **/
declare var google: any;
declare var $: any;
@Component({
  templateUrl: './location.add.component.html',
  providers: [LocationService, FormBuilder]
})

export class LocationAddComponent {
  public locationAddSuccess;
  public locationAddFailure;
  @Output() close = new EventEmitter();
  navigated = true;
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

  public holidays = [
    { id: 1, day: "Sunday", code: "SUN" },
    { id: 2, day: "Monday", code: "MON" },
    { id: 3, day: "Tuesday", code: "TUE" },
    { id: 4, day: "Wednesday", code: "WED" },
    { id: 5, day: "Thursday", code: "THU" },
    { id: 6, day: "Friday", code: "FRI" },
    { id: 7, day: "Saturday", code: "SAT" }
  ]
  // locationData: Location = new Location('', '', '', '', '', '', '', '', '', '', null, null, null, null,null);
  public activePageTitle: string;
  public locationAddResponse: string;
  public storeTimings: any;
  public error: String;
  public postal_code: Object;
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
  public fetchSearchDetails = false;
  public serviceErrorResponse;
  public serviceErrorData;
  public open_hours: any = '';
  public open_minutes: any = ''
  public close_hours: any = ''
  public close_minutes: any = ''


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


  constructor(fb: FormBuilder, private locationService: LocationService, private router: Router, private cdr: ChangeDetectorRef) {
    this.activePageTitle = 'addLocation';
    this.formValidate = false;
    /** Complex form validations for Dealer data **/
    var a = 2;
    this.complexForm = fb.group({
      'locNbr': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')])],
      'contactPerson': [null, Validators.compose([Validators.required, Validators.minLength(3),
      Validators.maxLength(32), Validators.pattern('[a-zA-Z*" "]+')])],
      'locAddrName': [null, Validators.compose([Validators.required,
      Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z*" "]+')])],
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
      'holiday': [null,],
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
    this.locationType = this.complexForm.controls['locationType'],
      this.holiday = this.complexForm.controls['holiday'],
      this.openHours = this.complexForm.controls['openHours'],
      this.openMinutes = this.complexForm.controls['openMinutes'],
      this.closeHours = this.complexForm.controls['closeHours'],
      this.closeMinutes = this.complexForm.controls['closeMinutes']
  }
  locationTypes: any;

  ngOnInit() {
    this.locationData.locationType.id = '';
    this.locationService.getAllLocationDetails().subscribe(response => {
      this.locationTypes = response.data;
    }, error =>
        console.log(error)
    )
    // this.complexForm=this.fb.
  }
  //   static facilityCompare(formGroup) {
  //     // console.log(formGroup);

  //     let returnObj: any = {};
  //     if (formGroup.controls['openHours'].value == formGroup.controls['closeHours'].value&&formGroup.controls.openMinutes.value==formGroup.controls.closeMinutes.value) {
  //         returnObj.equal = true
  //     }
  //     return returnObj
  // }
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

    for (let i = 0; i < this.days.length; i++) {
      if (i < this.days.length - 1)
        this.h = this.h + this.days[i] + "-"
      else
        this.h = this.h + this.days[i];
    }
    console.log(this.days);
    console.log(this.h);
  }

  /** Dealers Form submit **/
  submitForm(locationDataValues) {
    this.storeTimings = this.locationData.openHours + ':' + this.locationData.openMinutes + '-' + this.locationData.closeHours + ':' + this.locationData.closeMinutes;
    // console.log(this.storeTimings);
    this.locationData.timings = this.storeTimings,
      this.locationData.holidays = this.h;
    if (this.complexForm.valid) {
      console.log(locationDataValues)
      locationDataValues.locationType.id = locationDataValues.locationType.id;
      this.locationService.addLocation(locationDataValues).then(response => {
        if (response.data != null) {
          this.locationAddSuccess = 'Location added successfully'
          const that = this;
          setTimeout(() => {
            this.locationAddSuccess = '';
            that.router.navigate(['/locations']);
          }, 3000);
        } else {
          this.locationAddFailure = response.error.message;
          setTimeout(() => {
            this.locationAddFailure = '';
          }, 3000);
        }
      }, error => {
        this.serviceErrorResponse = error.exception;
        this.serviceErrorData = true;
      })
        .catch(error => this.error = error);
    } else {
      this.formValidate = true;
      console.log("Ivalid form")
    }
  }


  /** Google auto generated places for Dealer address **/

  onchange(eventChange: any) {
    const places = new google.maps.places.Autocomplete(document.getElementById('address'));
    google.maps.event.addListener(places, 'place_changed', () => {
      this.fetchSearchDetails = true;
      const place = places.getPlace();
      const address = place.formatted_address.split(',');
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      this.locationData.longitude = longitude;
      this.locationData.latitude = latitude;
      if (address[1] != 'undefined') {
        this.locationData.city = address[1].trim();
      } if (address[2] != 'undefined') {
        this.locationData.state = (address[2]).trim().split(' ')[0];
      } if (address[2] != 'undefined') {
        this.locationData.zipCode = (address[2]).trim().split(' ')[1];
      } if (address[3] != 'undefined') {
        this.locationData.country = (address[3]);
      } if (address[0] != 'undefined') {
        this.locationData.address = (address[0].trim());
      }
    });
    this.fetchSearchDetails = false;
    this.cdr.detectChanges();
  }

  /**
   * This method navigates screen to previous page
 */
  goBack(): void {
    this.close.emit();
    if (this.navigated) { window.history.back(); }

  }

  /**
* This method navigates screen to dash board page
*/
  goToHome() {
    const link = ['/dashboard'];
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
// export function ValidateUrl(control: AbstractControl) {
//   if (!control.value.startsWith('https') || !control.value.includes('.io')) {
//     return { validUrl: true };
//   }
//   return null;
// }
