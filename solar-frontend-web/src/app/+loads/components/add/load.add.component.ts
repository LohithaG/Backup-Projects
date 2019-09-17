import { Component, Type, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl, FormArray, FormsModule } from '@angular/forms';
import { ILoad } from '../../models/load';
import { Load } from '../../models/load.data';
import { LoadsService } from '../../services/load.service';

import * as moment from 'moment';
import { MapStyleService } from '../map-style.service';

// import { Select2OptionData } from 'ng2-select2';

declare var $, google: any;
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer({
    // map: this.map,
    suppressMarkers: true
});

/**
 * This component adds new Load
 */
@Component({
    templateUrl: './load.add.component.html',
    providers: [LoadsService],
    styles: [`
    input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
    -moz-appearance:textfield; /* Firefox */
}`]
})

export class LoadAddComponent implements OnInit {

    public loadAddSuccess;
    public loadAddFailure;
    public show_map: boolean = false;
    public driverNameListData;
    public dealerNameListData;
    public map: any;
    public locationList;
    public truckList;
    public vendorsList;
    public appointmentTypesList;
    public geomiles;
    public skid_index: any = -1;
    @Output() close = new EventEmitter();
    public activePageTitle: string;
    public loadAddResponse: String;
    public error: String;
    navigated = true; // true if navigated here
    public load: any = { driverId: '' };
    public driversList;

    complexForm: FormGroup;
    formValidate: boolean;

    loadNum: AbstractControl;
    driverId: AbstractControl;
    originNum: AbstractControl;
    destinNum: AbstractControl;
    truckNum: AbstractControl;
    vendorNum: AbstractControl;
    appointmentye: AbstractControl;
    skids: AbstractControl;
    geomile: AbstractControl;
    public serviceErrorResponse;
    public serviceErrorData;
    dcLocations: any = [];
    public pickup_location: any;
    destSkidDrops: any = [];
    gmarkers = [];
    public activeStyle: any;
    public styles = [
        { key: 'colorful', name: 'Colorful', url: '/greyscale.json' },
    ];

    constructor(private router: Router, private loadService: LoadsService, private styleService: MapStyleService, fb: FormBuilder) {
        this.load.driverId = '';
        this.load.originNum = '';
        this.load.destinNum = '';
        this.load.vendorNum = '';
        this.load.appointmentye = '';

        this.load.highValueLoad = 0;
        this.load.highPriorityLoad = 0;
        this.formValidate = false;
        this.complexForm = fb.group({
            'loadNum': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')])],
            'originNum': [null, Validators.required],
            'skids': [null, Validators.compose([Validators.required, Validators.pattern('^[1-9]$|^1[0]$')])],
            'geomile': [null, Validators.compose([Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')])],
            'skidList': new FormArray([])
        })
        this.loadNum = this.complexForm.controls['loadNum'];
        this.originNum = this.complexForm.controls['originNum'];
        this.skids = this.complexForm.controls['skids'];
        this.geomile = this.complexForm.controls['geomile'];
    }


    ngOnInit() {
        this.getLoadNumber();
        this.getVendors();
        this.getAppointments();
        this.getAllDcLocations();
    }

    // getAllDcLocations() {
    //     this.loadService.getAllDcLocations().subscribe((data) => {
    //         this.dcLocations = data;
    //     })
    // }

    getLoadNumber() {
        this.loadService.getLoadNumber().subscribe((data) => {
            this.load.loadNum = data;
        })
    }


    /**
     * Get All locations
     */
    getAlllocations() {
        this.loadService.getAlllocationsInfo().subscribe(response => {
            this.locationList = response
        }, error =>
                console.log(error)
        )
    }



    /**
    * Vendors List
    */
    getVendors() {
        this.loadService.getVendorsInfo().subscribe(response => {
            this.vendorsList = response;
        }, error =>
                console.log(error)
        )
    }
    /**
    * Drivers List Based on Vendors
    */
    selectedVendroNumer: any = null;
    getDriversByVendorNum(vendorNbr) {
        this.selectedVendroNumer = vendorNbr;
        this.load.driverId = '';
        this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(response => {
            this.driverNameListData = response.data;
        }, error =>
                console.log(error)
        )
    }
    types;

    getAppointmentType(index) {
        let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
        getLoadValue.controls[index].get('skidDestination').setValue(null)
        this.appointmentTypesList.find((data) => {
            if (data.id == getLoadValue.controls[index].get('loadType').value) {
                let pickupLoc = data.type.split(" ")[0];
                let destLoc = data.type.split(" ")[2];
                this.getLocationByTypes(pickupLoc, destLoc, index)
            }
        })

    }

    locationType: any = [{
        pickuplocation: { locNbr: '' },
        destinationlocation: { locNbr: '' }
    }
    ];
    loadTypedestinations: any = [];
    getLocationByTypes(pickupLoc, destLoc, index) {
        this.loadService.getLocationByType(pickupLoc, destLoc).subscribe((response: any) => {
            this.locationType = response.data;
            this.loadTypedestinations[index] = this.locationType.destinationlocation;
        }, error =>
                console.log(error)
        )
    }
    skidsArray: any = [];
    skidForm: FormGroup;
    previousValue: any = 0;
    getSkidsCount() {
        this.previousValue == 0 ? this.previousValue = this.load.skids : this.previousValue = this.previousValue;
        if (this.previousValue > this.load.skids) {
            let count = this.previousValue - this.load.skids;
            for (let j = 0; j < count; j++) {
                (<FormArray>this.complexForm.get('skidList')).removeAt((this.complexForm.get('skidList') as FormArray).controls.length - 1);
            }
        } else {
            if ((this.complexForm.get('skidList') as FormArray).controls.length == 0) {
                (this.complexForm.get('skidList') as FormArray).controls = [];
                for (let i = 0; i < this.load.skids; i++) {
                    (<FormArray>this.complexForm.get('skidList')).push(this.createSkids());
                }
            } else {
                let formObj: any = <FormArray>this.complexForm.get('skidList');
                for (let i = 0; i < this.load.skids; i++) {

                    if (formObj.controls[i] != undefined) {
                        formObj.controls[i].get('skidDropcartons').setValue(formObj.controls[i].get('skidDropcartons').value)
                        formObj.controls[i].get('skidDestination').setValue(formObj.controls[i].get('skidDestination').value)
                        formObj.controls[i].get('loadType').setValue(formObj.controls[i].get('loadType').value)
                    } else {
                        (<FormArray>this.complexForm.get('skidList')).push(this.createSkids());
                    }

                }

            }
        }

        this.load.skids = (this.complexForm.get('skidList') as FormArray).controls.length;
        this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;
    }

    selectedIndex: any;
    getList(location) {
        let formObj: any = <FormArray>this.complexForm.get('skidList');
        if (formObj.value.length > 0) {
            if (formObj.controls[0].get('skidDestination').value) {
                for (let i = 0; i < formObj.length; i++) {
                    if (formObj.controls[i].get('skidDestination').value == location.locNbr) {
                        return true;
                    }
                }
            }
        }
        let pickuploc: any = this.complexForm.get('originNum').value;
        if (pickuploc) {
            if (pickuploc == location.locNbr) {
                return true;
            }
        }
    }

    createSkids() {
        return new FormGroup({
            'skidDestination': new FormControl(null, Validators.required),
            'loadType': new FormControl(null, Validators.required),
            'skidDropcartons': new FormControl(1, [Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')]),
            'miles': new FormControl(),
            'miles_ui': new FormControl()
        })
    }


    skidDelete(index, skid) {

        for (let i = 0; i < this.destSkidDrops.length; i++) {
            if (this.destSkidDrops[i].value === skid) {
                this.destSkidDrops.splice(i, 1);
            }
        }

        (<FormArray>this.complexForm.get('skidList')).removeAt(index);
        this.load.skids = (<FormArray>this.complexForm.get('skidList')).length;
        this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;

    }


    /**
    * AppointmentTypes
    */
    getAppointments() {
        this.loadService.getAppointmentTypesInfo().subscribe(response => {
            this.appointmentTypesList = response;
        }, error =>
                console.log(error)
        )
    }



    pickuplatitude;
    pickupLongitude;
    getPickuplocations(value) {

        let skidDropsList: any = <FormArray>this.complexForm.get('skidList');
        skidDropsList.reset();
        this.formValidate = false;
        this.pickUpLocationList.find((data) => {
            if (value == data.locNbr) {
                this.pickuplatitude = data.latitude;
                this.pickupLongitude = data.longitude;
            }
        })

    }

    getSkidLocations(value, index) {
        // alert("dfgdg");
        let skid_data;
        let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
        if (this.load.originNum) {
            var latitude = 0;
            var longitude = 0;

            getLoadValue.controls[index].get('miles').setValue(0)
            getLoadValue.controls[index].get('miles_ui').setValue(0)
            this.loadTypedestinations[index].find((data) => {

                if (value == data.locNbr) {
                    skid_data = data;
                    latitude = data.latitude;
                    longitude = data.longitude
                    this.loadService.getTimeDistance(this.pickuplatitude, this.pickupLongitude, latitude, longitude).subscribe((data) => {
                        if (data.data) {
                            for (let i = 0; i < getLoadValue.length; i++) {
                                getLoadValue.controls[index].get('miles_ui').setValue(data.data.distance.toFixed(2))
                                getLoadValue.controls[index].get('miles').setValue(data.data.distance)
                            }
                            if (index + 1 > this.destSkidDrops.length) {
                                 this.destSkidDrops.push({
                                    "index": this.destSkidDrops.length,
                                    "latitude": skid_data.latitude,
                                    "longitude": skid_data.longitude,
                                    "name": skid_data.locAddrName,
                                    "address": skid_data.address,
                                    "distance": data.data.distance,
                                    "value": value

                                });
                            }
                            else {
                                this.destSkidDrops.splice(index, 1);
                                this.destSkidDrops.splice(index, 0, {
                                    "index": index,
                                    "latitude": skid_data.latitude,
                                    "longitude": skid_data.longitude,
                                    "name": skid_data.locAddrName,
                                    "address": skid_data.address,
                                    "distance": data.data.distance,
                                    "value": value
                                })
                                if (this.show_map)
                                    this.showMap()
                            }
                        }
                    })
                }
            })
        } else {
            getLoadValue.controls[index].get('skidDestination').setValue(null)
            alert('Please select pickup location')
        }

    }


    public dealerNameDetails() {
        this.loadService.getDriverNameList().subscribe(response => {
            const dealerNameDetailsList = new Array(response.length);
            for (let i = 0; i < response.length; i++) {
                dealerNameDetailsList[i] = {
                    id: response[i].vendorNbr,
                    text: response[i].vendorName
                };
            }
            this.dealerNameListData = dealerNameDetailsList.slice(0);
        }, error => console.error(error),
        );
    }


    pickUpLocationList;
    getAllDcLocations() {
        this.loadService.getAllDcLocations().subscribe((response: any) => {
            this.pickUpLocationList = response.data;
        }, error =>
                console.log(error)
        )
    }
    /**
    * This method sets submitted property to true to hide form in view .
    */

    submitForm(value: any) {

        if (this.complexForm.valid && value.loadNum != '' && value.originNum != '' && this.geomiles != '') {
            const today_Date = new Date();
            const userID = localStorage.getItem('userData');


            let SkidDropsObj: any = [];
            let skidObj: any = <FormArray>this.complexForm.get('skidList');
            for (let i = 0; i < this.complexForm.value.skidList.length; i++) {
                SkidDropsObj.push({
                    totalCartons: skidObj.controls[i].get('skidDropcartons').value,
                    loadTypNbr: {
                        id: parseInt(skidObj.controls[i].get('loadType').value)
                    },
                    destLocNbr: {
                        locNbr: skidObj.controls[i].get('skidDestination').value
                    },
                    "totalMiles": skidObj.controls[i].get('miles').value
                })
            }


            let addLoadObject: any = {
                'loadNumber': value.loadNum,
                'originLocNbr': {
                    'locNbr': value.originNum
                },
                'createdTS': moment(today_Date).format(),
                'createdUser': {
                    'id': userID
                },
                'lastUpdatedUser': {
                    'id': userID
                },
                'lastUpdatedTS': moment(today_Date).format(),
                "loadStatNbr": {
                    "id": 0
                },
                'highValueLoad': this.load.highValueLoad,
                'highPriorityLoad': this.load.highPriorityLoad,
                'geomiles': this.geomiles,
                "skidDropsCount": SkidDropsObj.length,
                "skidDrops": SkidDropsObj,
            }


            if (this.load.driverId == '') {
                addLoadObject.driver = null;
            } else {
                addLoadObject.driver = {
                    id: this.load.driverId
                }
            }
            if (this.selectedVendroNumer == null) {
                addLoadObject.vndNbr = null;
            } else {
                addLoadObject.vndNbr = { vendorNbr: this.selectedVendroNumer };
            }

            //     console.log(addLoadObject)

            this.loadService.addLoad(addLoadObject).then(response => {
                if (response.data != null) {
                    this.loadAddSuccess = 'Load created successfully '
                    const that = this;
                    setTimeout(() => {
                        this.loadAddSuccess = ''
                        this.router.navigate(['/loads']);
                    }, 3000);
                } else {

                    this.loadAddFailure = response.error.message
                    setTimeout(() => {
                        this.loadAddFailure = ''
                    }, 3000);

                }
            }, error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                this.loadAddFailure = ' Failed to create load'
            })

        } else {
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }

    }


    /**
     * This method navigates screen to previous page
     */
    goBack(): void {
        this.close.emit();
        this.router.navigate(['/loads']);

    }
    /**
   * This method navigates screen to dash board page
   */
    goToHome() {
        const link = ['/dashboard'];
        this.router.navigate(link);
    }
    fetchStyle(style) {
        this.styleService.fetchStyle(style).subscribe((styleDef) => {
            this.map.mapTypes.set(style.key,
                new google.maps.StyledMapType(styleDef,
                    { name: style.name })
            );
            this.map.setMapTypeId(style.key);
        })
    }

    showMap() {
        this.removeMarkers();
        if (this.pickuplatitude != null && this.pickupLongitude != null) {

            this.show_map = true;
            this.destSkidDrops.sort((val1, val2) => {
                return val1.distance - val2.distance
            })
            this.activeStyle = this.styles[0];

            let waypts = [];
            this.fetchStyle(this.activeStyle);
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 2,
                center: { lat: 25.32, lng: 35.32 }
            });

            for (let i = 0; i < this.destSkidDrops.length; i++) {
                waypts.push({
                    location: { lat: this.destSkidDrops[i].latitude, lng: this.destSkidDrops[i].longitude },
                    stopover: true
                })
                this.addMarker(this.destSkidDrops[i], i);
            }
            directionsDisplay.setMap(this.map)
            this.makeMarkerValue(new google.maps.LatLng(this.pickuplatitude, this.pickupLongitude))
            var request = {
                origin: new google.maps.LatLng(this.pickuplatitude, this.pickupLongitude),
                destination: new google.maps.LatLng(this.destSkidDrops[this.destSkidDrops.length - 1].latitude, this.destSkidDrops[this.destSkidDrops.length - 1].longitude),
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: waypts,
                //   optimizeWaypoints: true
            }
            directionsService.route(request, function (result, status) {
                if (status === "OK") {
                    directionsDisplay.setDirections(result);
                }
                else {
                    alert("Route not found");
                }
            })
        }
        // }
        else {
            alert("Please select pickup location and skidDrops");

        }
    }

    removeMarkers() {
        for (let i = 0; i < this.gmarkers.length; i++) {
            this.gmarkers[i].setMap(null);
        }
    }

    addMarker(obj, labelIndex) {
        var infoWindow = new google.maps.InfoWindow({
        }
        );
        var labels = '123456789'
        // var  = 0;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj.latitude, obj.longitude),
            // title: obj.destLocNbr.locAddrName,
            // icon: "./assets/img/dealer.png",
            map: this.map,
            label: "" + (labelIndex + 1)
        })
        this.gmarkers.push(marker);


        marker.addListener('click', () => {
            infoWindow.setContent('<div style="color:black;float:left"><strong>Name : ' + obj.name + ' </strong></div><br><div style="color:black;float:left"><strong>Address : ' + obj.address + '</strong></div><br><div style="color:black;float:left"></div><div style="color:black;float:left"><strong>Distance(Miles) : ' + obj.distance.toFixed(2) + '</strong></div>')
            infoWindow.open(this.map, marker);
        })
    }
    makeMarkerValue = (position) => {
        var marker = new google.maps.Marker({
            position: position,
            map: this.map,
            // title: position.locAddrName,
            icon: './assets/img/p.png'
        });
        this.gmarkers.push(marker);
    }

}