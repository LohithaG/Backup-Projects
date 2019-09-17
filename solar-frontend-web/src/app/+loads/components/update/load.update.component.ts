import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoadsService } from '../../services/load.service';
import { ILoad } from '../../models/load';
import { Load } from '../../models/load.data';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as moment from 'moment';
declare var $, google: any;
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer({
    // map: this.map,
    suppressMarkers: true
});
/**
 * This component deals with loads update operation
 */
@Component({
    templateUrl: './load.update.component.html',
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
export class LoadUpdateComponent implements OnInit {

    public loadUpdateSuccess;
    public loadUpdateFailure;
    public map: any;
    public updateDriverNameListData;
    public updateDealerNameListData;
    public updateDriversOptions;
    public updateDealerOptions;
    public selectedDriverName: string;
    public selectedDealerName: string;
    public skiDropsMismatched: boolean;
    public selectedDealerList: Array<string> = [];
    public loadUpdateResponse: String;
    public error: String;
    public loadList: ILoad[];
    gmarkers: any = []
    load: any = {
        'apptNbr': '',
        'originLocNbr': {
            'locNbr': ''
        },
        'destLocNbr': {
            'locNbr': ''
        },
        'cartons': '',
        'apptTypNbr': {
            'id': ''
        },
        driver: {
            id: ''
        },
        vndNbr: {
            vendorNbr: ''
        },
        'highValueLoad': '',
        'highPriorityLoad': '',
        'geomiles': ''

    };
    @Output() close = new EventEmitter();

    public locationList;
    public truckList;
    public vendorsList;
    public appointmentTypesList;
    public driverList;
    public activePageTitle: string;

    navigated = true;
    public driversList = [];
    public dealersList = [];
    complexForm: FormGroup;
    formValidate: boolean;
    public load_details: any;

    skids: AbstractControl;
    loadNum: AbstractControl;
    driverId: AbstractControl;
    originNum: AbstractControl;
    destinNum: AbstractControl;
    truckNum: AbstractControl;
    vendorNum: AbstractControl;
    appointmentye: AbstractControl;
    cartons: AbstractControl;
    geomile: AbstractControl;
    public skidDrops = [];
    public orignlocAddrName;
    public destAddrName;
    public vendorId: any;
    public appointmentypeId: any;
    public driverNum: any;
    public serviceErrorResponse;
    public serviceErrorData;


    constructor(private router: Router, private route: ActivatedRoute, private loadService: LoadsService,
        fb: FormBuilder, private cdr: ChangeDetectorRef) {
        this.getAppointments();
        this.getVendors();
        this.getAllDcLocations();
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



    skidsValue: any;
    geomiles: any;
    skidId;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['loadNum'] !== undefined) {
                const loadNum: string = +params['loadNum'] + '';
                this.navigated = true;
                this.loadService.getLoadDetailsByLoadNum(loadNum).toPromise().then(loadInfo => {

                    console.log(loadInfo)
                    this.load_details = loadInfo;
                    for (let i = 0; i < this.load_details.skidDropsCount; i++) {
                        // alert("dg")
                        this.skidDrops.push({
                            "index": this.skidDrops.length,
                            "latitude": this.load_details.skidDrops[i].destLocNbr.latitude,
                            "longitude": this.load_details.skidDrops[i].destLocNbr.longitude,
                            "name": this.load_details.skidDrops[i].destLocNbr.locAddrName,
                            "address": this.load_details.skidDrops[i].destLocNbr.address,
                            "distance": this.load_details.skidDrops[i].totalMiles
                        })
                    }
                    console.log(this.skidDrops)
                    console.log(this.load_details);
                    console.log()
                    this.load.vndNbr = {
                        vendorNbr: loadInfo.vndNbr ? loadInfo.vndNbr.vendorNbr : ''
                    }
                    this.load.driver = {
                        id: loadInfo.driver ? loadInfo.driver.id : ''
                    }
                    if (loadInfo.vndNbr) {
                        for (let i = 0; i < loadInfo.skidDrops.length; i++) {
                            (this.complexForm.get('skidList') as FormArray).push(this.createSkids(loadInfo.skidDrops[i]))
                            this.getAppointmentType1(i, loadInfo.skidDrops[i])
                        }
                        this.getDriversByVendorNum(loadInfo.vndNbr.vendorNbr);

                        this.getDriversByVendorNum(loadInfo.vndNbr.vendorNbr);
                    } else {
                        for (let i = 0; i < loadInfo.skidDrops.length; i++) {
                            (this.complexForm.get('skidList') as FormArray).push(this.createSkids(loadInfo.skidDrops[i]))
                            this.getAppointmentType1(i, loadInfo.skidDrops[i])
                        }
                    }
                    this.load.originLocNbr.locNbr = loadInfo.originLocNbr.locNbr
                    this.getPickuplocations(loadInfo.originLocNbr.locNbr)
                    this.load.loadNum = loadInfo.loadNumber;
                    this.geomiles = loadInfo.geomiles;
                    this.load.skids = loadInfo.skidDropsCount;
                    this.skidsValue = loadInfo.skidDropsCount

                    this.load.highPriorityLoad = loadInfo.highPriorityLoad
                    this.load.highValueLoad = loadInfo.highValueLoad
                    this.getPickuplocations(this.load.originLocNbr.locNbr)
                    this.showMap()

                });
            } else {
                this.navigated = false;
            }
        });

    }
    createSkids(obj) {
        if (obj) {
            return new FormGroup({
                'skidDestination': new FormControl(obj.destLocNbr.locNbr, Validators.required),
                'loadType': new FormControl(obj.loadTypNbr.id, Validators.required),
                'skidDropcartons': new FormControl(obj.totalCartons, [Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')]),
                'addedCartons': new FormControl(obj.addedCartons, [Validators.required,]),
                'geoStatus': new FormControl(obj.geoStatus),
                'cartonstatus': new FormControl(obj.cartonstatus),
                'id': new FormControl(obj.id),
                'miles': new FormControl(obj.totalMiles),
                'miles_ui': new FormControl(obj.totalMiles.toFixed(2))
            })
        } else {
            return new FormGroup({
                'skidDestination': new FormControl(null, Validators.required),
                'loadType': new FormControl(null, Validators.required),
                'skidDropcartons': new FormControl(1, [Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')]),
                'addedCartons': new FormControl(0),
                'geoStatus': new FormControl(0),
                'cartonstatus': new FormControl(0),
                'id': new FormControl(''),
                'miles': new FormControl(),
                'miles_ui': new FormControl()
            })
        }
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

    getAppointmentType1(index, obj) {
        let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
        console.log(obj.destLocNbr.locNbr)
        getLoadValue.controls[index].get('skidDestination').setValue(obj.destLocNbr.locAddrName)
        console.log(getLoadValue.value)
        this.loadService.getAppointmentTypesInfo().subscribe(response => {
            this.appointmentTypesList = response;
            console.log(this.appointmentTypesList)
            this.appointmentTypesList.find((data) => {
                if (data.id == getLoadValue.controls[index].get('loadType').value) {
                    console.log("dfg")
                    //getLoadValue.controls[index].get('skidDestination').value=obj.destLocNbr.locNbr
                    let pickupLoc = data.type.split(" ")[0];
                    let destLoc = data.type.split(" ")[2];
                    this.getLocationByTypes1(pickupLoc, destLoc, index, obj)
                }
            })
        }, error =>
                console.log(error)
        )


    }
    getLocationByTypes1(pickupLoc, destLoc, index, obj) {
        this.loadService.getLocationByType(pickupLoc, destLoc).subscribe((response: any) => {
            this.locationType = response.data;
            this.loadTypedestinations[index] = this.locationType.destinationlocation;
            let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
            console.log(obj.destLocNbr.locNbr)
            getLoadValue.controls[index].get('skidDestination').setValue(obj.destLocNbr.locNbr)
        }, error =>
                console.log(error)
        )
    }
    skidsArray: any = [];
    skidForm: FormGroup;
    previousValue: any = 0;
    getSkidsCount() {
        this.formValidate = false;
        this.previousValue == 0 ? this.previousValue = this.load.skids : this.previousValue = this.previousValue;
        if (this.complexForm.get('skids').value >= this.skidsValue) {
            if (this.previousValue > this.load.skids) {
                let count = this.previousValue - this.load.skids;
                for (let j = 0; j < count; j++) {
                    (<FormArray>this.complexForm.get('skidList')).removeAt((this.complexForm.get('skidList') as FormArray).controls.length - 1);
                }
            } else {
                if ((this.complexForm.get('skidList') as FormArray).controls.length == 0) {
                    (this.complexForm.get('skidList') as FormArray).controls = [];
                    for (let i = 0; i < this.load.skids; i++) {
                        (<FormArray>this.complexForm.get('skidList')).push(this.createSkids(null));
                    }
                } else {
                    let formObj: any = <FormArray>this.complexForm.get('skidList');
                    for (let i = 0; i < this.load.skids; i++) {
                        if (formObj.controls[i] != undefined) {
                            formObj.controls[i].get('skidDropcartons').setValue(formObj.controls[i].get('skidDropcartons').value)
                            formObj.controls[i].get('skidDestination').setValue(formObj.controls[i].get('skidDestination').value)
                            formObj.controls[i].get('loadType').setValue(formObj.controls[i].get('loadType').value)
                        } else {
                            (<FormArray>this.complexForm.get('skidList')).push(this.createSkids(null));
                        }

                    }

                }
            }
        } else {
            this.complexForm.get('skids').setValue(this.skidsValue)
        }

        this.load.skids = (this.complexForm.get('skidList') as FormArray).controls.length;
        this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;
    }


    skidDelete(index, value) {
        if (value != '') {
            this.loadService.deleteSkid(value).subscribe((data) => {
                if (data.error == null) {
                    this.delete(index, value)
                } else {
                    alert(data.error.message)
                }
            });
        } else {
            this.delete(index, value)
        }
    }

    delete(index, value) {
        for (let i = 0; i < this.skidDrops.length; i++) {
            if (this.skidDrops[i].index === index) {
                this.skidDrops.splice(i, 1);
            }
        }
        for (let i = 0; i < this.skidDrops.length; i++) {
            if (this.skidDrops[i].index > index) {
                this.skidDrops[i].index = (this.skidDrops[i].index) - 1;
            }
        }
        this.showMap();
        (this.complexForm.get('skidList') as FormArray).removeAt(index);
        this.load.skids = (<FormArray>this.complexForm.get('skidList')).length;
        this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;
    }
    pickUpLocationList;
    getAllDcLocations() {
        this.loadService.getAllDcLocations().subscribe((response: any) => {
            this.pickUpLocationList = response.data;
            console.log(this.pickUpLocationList)
        }, error =>
                console.log(error)
        )
    }


    pickuplatitude;
    pickupLongitude;
    getPickuplocations(value) {
        this.pickUpLocationList.find((data) => {
            if (value == data.locNbr) {
                this.pickuplatitude = data.latitude;
                this.pickupLongitude = data.longitude;
            }
        })

    }
    public show_map: boolean = false;
    getSkidLocations(value, index) {
        let getLoadValue: any = <FormArray>this.complexForm.get('skidList');

        if (this.load.originLocNbr.locNbr) {
            var latitude = 0;
            var longitude = 0;
            var skid_data;
            getLoadValue.controls[index].get('miles').setValue(0)
            getLoadValue.controls[index].get('miles_ui').setValue(0)
            this.loadTypedestinations[index].find((data) => {
                if (value == data.locNbr) {
                    console.log(data);
                    skid_data = data;
                    latitude = data.latitude;
                    longitude = data.longitude

                }
            })
            this.loadService.getTimeDistance(this.pickuplatitude, this.pickupLongitude, latitude, longitude).subscribe((data) => {
                if (data.data) {
                    for (let i = 0; i < getLoadValue.length; i++) {
                        getLoadValue.controls[index].get('miles').setValue(data.data.distance);
                        getLoadValue.controls[index].get('miles_ui').setValue(data.data.distance.toFixed(2))

                    }

                    if (index + 1 > this.skidDrops.length) {
                        console.log(index, this.skidDrops.length)
                        this.skidDrops.push({
                            "index": this.skidDrops.length,
                            "latitude": skid_data.latitude,
                            "longitude": skid_data.longitude,
                            "name": skid_data.locAddrName,
                            "address": skid_data.address,
                            "distance": data.data.distance
                        });
                    }
                    else {
                        this.skidDrops.splice(index, 1);
                        this.skidDrops.splice(index, 0, {
                            "index": index,
                            "latitude": skid_data.latitude,
                            "longitude": skid_data.longitude,
                            "name": skid_data.locAddrName,
                            "address": skid_data.address,
                            "distance": data.data.distance
                        })
                        console.log(this.skidDrops)
                        if (this.show_map)
                            this.showMap()
                    }
                }
            })
        } else {
            getLoadValue.controls[index].get('skidDestination').setValue("enter")
            alert('Please select pickup location')

        }
    }

    testValue: any;
    getAppointmentType(index) {
        let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
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



    /**
    * Get All locations
    */

    getAlllocations() {
        this.loadService.getAlllocationsInfo().subscribe(response => {
            this.locationList = response;
            for (let i = 0; i < this.locationList.length; i++) {
                if (this.locationList[i].locNbr == this.load.originLocNbr.locNbr) {
                    this.orignlocAddrName = this.locationList[i].locNbr;
                    break;
                }
            }
            for (let i = 0; i < this.locationList.length; i++) {
                if (this.locationList[i].locNbr == this.load.destLocNbr.locNbr) {
                    this.destAddrName = this.locationList[i].locNbr;
                    break;
                }
            }
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
        this.driverNum = '';
        this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(response => {
            this.driverList = response.data;

        }, error =>
                console.log(error)
        )
    }

    /**
    * AppointmentTypes
    */

    public getAppointments() {
        this.loadService.getAppointmentTypesInfo().subscribe(response => {
            this.appointmentTypesList = response;
            for (let a = 0; a < this.appointmentTypesList.length; a++) {
                if (this.appointmentTypesList[a].id == this.load.apptTypNbr.id) {
                    this.appointmentypeId = this.appointmentTypesList[a].id;
                }
            }
        }, error =>
                console.log(error)
        )
    }


    updateLoadData(value: any) {
        if (this.complexForm.valid && value.loadNum != '' && value.driverId != '' && value.originNum != ''
            && value.destinNum != '' && value.geomile != '' && value.appointmentye != '' && this.complexForm.valid) {
            if (value.originNum != value.destinNum) {
                const today_Date = new Date();
                const userID = localStorage.getItem('userData');
                let SkidDropsObj: any = [];
                let skidObj: any = <FormArray>this.complexForm.get('skidList');
                for (let i = 0; i < this.complexForm.value.skidList.length; i++) {
                    SkidDropsObj.push({
                        totalCartons: skidObj.controls[i].get('skidDropcartons').value,
                        "addedCartons": skidObj.controls[i].get('addedCartons').value,
                        loadTypNbr: {
                            id: parseInt(skidObj.controls[i].get('loadType').value)
                        },
                        destLocNbr: {
                            locNbr: skidObj.controls[i].get('skidDestination').value
                        },
                        geoStatus: skidObj.controls[i].get('geoStatus').value,
                        cartonstatus: skidObj.controls[i].get('cartonstatus').value,
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
                    'highValueLoad': this.load.highValueLoad,
                    'highPriorityLoad': this.load.highPriorityLoad,
                    'geomiles': value.geomile,
                    "skidDropsCount": SkidDropsObj.length,
                    "skidDrops": SkidDropsObj,
                }


                if (this.load.driver.id == "") {
                    addLoadObject.driver = null;
                } else {
                    addLoadObject.driver = {
                        id: this.load.driver.id
                    }
                }
                if (this.selectedVendroNumer == null) {
                    addLoadObject.vndNbr = null;
                } else {
                    addLoadObject.vndNbr = { vendorNbr: this.selectedVendroNumer };
                }
                console.log(addLoadObject);
                this.loadService.updateLoad(addLoadObject).then(response => {
                    if (response.data != null) {
                        // this.loadService = response.message
                        this.loadUpdateSuccess = 'Load updated successfully';
                        setTimeout(() => {
                            this.loadUpdateSuccess = ''
                            this.router.navigate(['/loads']);
                        }, 2000);
                    } else {
                        this.loadUpdateFailure = response.error.message;
                        setTimeout(() => {
                            this.loadUpdateFailure = ''
                        }, 2000);
                    }
                }, error => {
                    this.serviceErrorResponse = error.exception;
                    this.serviceErrorData = true;
                })
            } else {
                this.loadUpdateFailure = 'Please select different destination locations';
                setTimeout(() => {
                    this.loadUpdateFailure = ''
                }, 2000);
            }
        } else {
            console.log('error');
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }
    }


    goBack(): void {
        this.router.navigate(['/loads']);
    }
    goToHome() {
        const link = ['/dashboard'];
        this.router.navigate(link);
    }
    removeMarkers() {
        for (let i = 0; i < this.gmarkers.length; i++) {
            this.gmarkers[i].setMap(null);
        }
    }

    showMap() {
        this.removeMarkers()
        this.show_map = true;

        console.log(this.load_details);
        this.skidDrops.sort((val1, val2) => {
            return val1.distance - val2.distance
        })
        console.log(this.skidDrops);
        let waypts = [];
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: { lat: 25.32, lng: 35.32 }
        });
        for (let i = 0; i < this.skidDrops.length; i++) {
            waypts.push({
                location: { lat: this.skidDrops[i].latitude, lng: this.skidDrops[i].longitude },
                stopover: true
            })
            this.addMarker(this.skidDrops[i], i);
        }
        directionsDisplay.setMap(this.map)
        this.makeMarkerValue(this.load_details.originLocNbr)
        var request = {
            origin: new google.maps.LatLng(this.pickuplatitude, this.pickupLongitude),
            destination: new google.maps.LatLng(this.skidDrops[this.skidDrops.length - 1].latitude, this.skidDrops[this.skidDrops.length - 1].longitude),
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

    addMarker(obj, labelIndex) {
        var infoWindow = new google.maps.InfoWindow({
        }
        );
        var labels = '123456789'

        // var  = 0;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj.latitude, obj.longitude),
            map: this.map,
            label: "" + (labelIndex + 1)
        })
        this.gmarkers.push(marker);
        marker.addListener('click', () => {
            infoWindow.setContent('<div style="color:black;float:left"><strong>Name : ' + obj.name + ' </strong></div><br><div style="color:black;float:left"><strong>Address : ' + obj.address + '</strong></div><br><div style="color:black;float:left"></div><div style="color:black;float:left"><strong>Distance : ' + obj.distance.toFixed(2) + '</strong></div>')
            infoWindow.open(this.map, marker);
        })
    }
    makeMarkerValue = (position) => {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(position.latitude, position.longitude),
            map: this.map,
            title: position.locAddrName,
            icon: './assets/img/p.png'
        });

        this.gmarkers.push(marker);
    }


}





















// import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { FormBuilder, FormGroup, FormArray, Validators, FormControl, AbstractControl } from '@angular/forms';
// import { LoadsService } from '../../services/load.service';
// import { ILoad } from '../../models/load';
// import { Load } from '../../models/load.data';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Observable';
// import { Router } from '@angular/router';

// import * as moment from 'moment';
// declare var $, google: any;
// var directionsService = new google.maps.DirectionsService();
// var directionsDisplay = new google.maps.DirectionsRenderer({
//     // map: this.map,
//     suppressMarkers: true
// });
// /**
//  * This component deals with loads update operation
//  */
// @Component({
//     templateUrl: './load.update.component.html',
//     providers: [LoadsService],
//     styles: [`
//     input::-webkit-outer-spin-button,
// input::-webkit-inner-spin-button {
//     /* display: none; <- Crashes Chrome on hover */
//     -webkit-appearance: none;
//     margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
// }

// input[type=number] {
//     -moz-appearance:textfield; /* Firefox */
// }`]
// })
// export class LoadUpdateComponent implements OnInit {

//     public loadUpdateSuccess;
//     public loadUpdateFailure;
//     public map: any;
//     public updateDriverNameListData;
//     public updateDealerNameListData;
//     public updateDriversOptions;
//     public updateDealerOptions;
//     public selectedDriverName: string;
//     public selectedDealerName: string;
//     public skiDropsMismatched: boolean;
//     public selectedDealerList: Array<string> = [];
//     public loadUpdateResponse: String;
//     public error: String;
//     public loadList: ILoad[];
//     gmarkers: any = []
//     load: any = {
//         'apptNbr': '',
//         'originLocNbr': {
//             'locNbr': ''
//         },
//         'destLocNbr': {
//             'locNbr': ''
//         },
//         'cartons': '',
//         'apptTypNbr': {
//             'id': ''
//         },
//         driver: {
//             id: ''
//         },
//         vndNbr: {
//             vendorNbr: ''
//         },
//         'highValueLoad': '',
//         'highPriorityLoad': '',
//         'geomiles': ''

//     };
//     @Output() close = new EventEmitter();

//     public locationList;
//     public truckList;
//     public vendorsList;
//     public appointmentTypesList;
//     public driverList;
//     public activePageTitle: string;

//     navigated = true;
//     public driversList = [];
//     public dealersList = [];
//     complexForm: FormGroup;
//     formValidate: boolean;
//     public load_details: any;

//     skids: AbstractControl;
//     loadNum: AbstractControl;
//     driverId: AbstractControl;
//     originNum: AbstractControl;
//     destinNum: AbstractControl;
//     truckNum: AbstractControl;
//     vendorNum: AbstractControl;
//     appointmentye: AbstractControl;
//     cartons: AbstractControl;
//     geomile: AbstractControl;
//     public skidDrops = [];
//     public orignlocAddrName;
//     public destAddrName;
//     public vendorId: any;
//     public appointmentypeId: any;
//     public driverNum: any;
//     public serviceErrorResponse;
//     public serviceErrorData;


//     constructor(private router: Router, private route: ActivatedRoute, private loadService: LoadsService,
//         fb: FormBuilder, private cdr: ChangeDetectorRef) {
//         this.getAppointments();
//         this.getVendors();
//         this.getAllDcLocations();
//         this.load.driverId = '';
//         this.load.originNum = '';
//         this.load.destinNum = '';
//         this.load.vendorNum = '';
//         this.load.appointmentye = '';

//         this.load.highValueLoad = 0;
//         this.load.highPriorityLoad = 0;
//         this.formValidate = false;
//         this.complexForm = fb.group({
//             'loadNum': [null, Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+')])],
//             'originNum': [null, Validators.required],
//             'skids': [null, Validators.compose([Validators.required, Validators.pattern('^[1-9]$|^1[0]$')])],
//             'geomile': [null, Validators.compose([Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')])],
//             'skidList': new FormArray([])
//         })
//         this.loadNum = this.complexForm.controls['loadNum'];
//         this.originNum = this.complexForm.controls['originNum'];
//         this.skids = this.complexForm.controls['skids'];
//         this.geomile = this.complexForm.controls['geomile'];

//     }



//     skidsValue: any;
//     geomiles: any;
//     skidId;

//     ngOnInit(): void {
//         this.route.params.forEach((params: Params) => {
//             if (params['loadNum'] !== undefined) {
//                 const loadNum: string = +params['loadNum'] + '';
//                 this.navigated = true;
//                 this.loadService.getLoadDetailsByLoadNum(loadNum).toPromise().then(loadInfo => {
//                     this.load_details = loadInfo;
//                     for (let i = 0; i < this.load_details.skidDropsCount; i++) {
//                         this.skidDrops.push({
//                             "index": this.skidDrops.length,
//                             "latitude": this.load_details.skidDrops[i].destLocNbr.latitude,
//                             "longitude": this.load_details.skidDrops[i].destLocNbr.longitude,
//                             "name": this.load_details.skidDrops[i].destLocNbr.locAddrName,
//                             "address": this.load_details.skidDrops[i].destLocNbr.address,
//                             "distance": this.load_details.skidDrops[i].totalMiles
//                         })
//                     }
//                     this.load.vndNbr = {
//                         vendorNbr: loadInfo.vndNbr ? loadInfo.vndNbr.vendorNbr : ''
//                     }
//                     this.load.driver = {
//                         id: loadInfo.driver ? loadInfo.driver.id : ''
//                     }
//                     if (loadInfo.vndNbr) {
//                         this.getDriversByVendorNum(loadInfo.vndNbr.vendorNbr);
//                     }
//                     this.load.originLocNbr.locNbr = loadInfo.originLocNbr.locNbr
//                     this.load.loadNum = loadInfo.loadNumber;
//                     this.geomiles = loadInfo.geomiles;
//                     this.load.skids = loadInfo.skidDropsCount;
//                     this.skidsValue = loadInfo.skidDropsCount

//                     this.load.highPriorityLoad = loadInfo.highPriorityLoad
//                     this.load.highValueLoad = loadInfo.highValueLoad
//                     let getLoadValue: any = <FormArray>this.complexForm.get('skidList');

//                     this.getPickuplocations(this.load.originLocNbr.locNbr)
//                     loadInfo.skidDrops.find((data) => {
//                         (<FormArray>this.complexForm.get('skidList')).push(this.createSkids());
//                     })

//                     for (let i = 0; i <= loadInfo.skidDrops.length; i++) {
//                         if (i == loadInfo.skidDrops.length) {
//                             for (let i = 0; i < loadInfo.skidDrops.length; i++) {
//                                 getLoadValue.controls[i].get('skidDestination').setValue(parseInt(loadInfo.skidDrops[i].destLocNbr.locNbr));
//                             }
//                         } else {
//                             getLoadValue.controls[i].get('skidDropcartons').setValue(loadInfo.skidDrops[i].totalCartons)
//                             getLoadValue.controls[i].get('loadType').setValue(loadInfo.skidDrops[i].loadTypNbr.id);
//                             getLoadValue.controls[i].get('addedCartons').setValue(loadInfo.skidDrops[i].addedCartons);
//                             getLoadValue.controls[i].get('geoStatus').setValue(loadInfo.skidDrops[i].geoStatus);
//                             getLoadValue.controls[i].get('cartonstatus').setValue(loadInfo.skidDrops[i].cartonstatus);
//                             getLoadValue.controls[i].get('miles').setValue(loadInfo.skidDrops[i].totalMiles);
//                             getLoadValue.controls[i].get('miles_ui').setValue(loadInfo.skidDrops[i].totalMiles.toFixed(2))
//                             getLoadValue.controls[i].get('id').setValue(loadInfo.skidDrops[i].id);
//                             this.getAppointmentType(i)
//                         }
//                     }
//                 });
//             } else {
//                 this.navigated = false;
//             }
//         });

//     }

//     selectedIndex: any;
//     getList(location) {
//         let formObj: any = <FormArray>this.complexForm.get('skidList');
//         if (formObj.value.length > 0) {
//             if (formObj.controls[0].get('skidDestination').value) {
//                 for (let i = 0; i < formObj.length; i++) {
//                     if (formObj.controls[i].get('skidDestination').value == location.locNbr) {
//                         return true;
//                     }
//                 }
//             }
//         }

//         let pickuploc: any = this.complexForm.get('originNum').value;
//         if (pickuploc) {
//             if (pickuploc == location.locNbr) {
//                 return true;
//             }

//         }
//     }

//     skidsArray: any = [];
//     skidForm: FormGroup;
//     previousValue: any = 0;
//     getSkidsCount() {
//         this.formValidate = false;
//         this.previousValue == 0 ? this.previousValue = this.load.skids : this.previousValue = this.previousValue;
//         if (this.complexForm.get('skids').value >= this.skidsValue) {
//             if (this.previousValue > this.load.skids) {
//                 let count = this.previousValue - this.load.skids;
//                 for (let j = 0; j < count; j++) {
//                     (<FormArray>this.complexForm.get('skidList')).removeAt((this.complexForm.get('skidList') as FormArray).controls.length - 1);
//                 }
//             } else {
//                 if ((this.complexForm.get('skidList') as FormArray).controls.length == 0) {
//                     (this.complexForm.get('skidList') as FormArray).controls = [];
//                     for (let i = 0; i < this.load.skids; i++) {
//                         (<FormArray>this.complexForm.get('skidList')).push(this.createSkids());
//                     }
//                 } else {
//                     let formObj: any = <FormArray>this.complexForm.get('skidList');
//                     for (let i = 0; i < this.load.skids; i++) {
//                         if (formObj.controls[i] != undefined) {
//                             formObj.controls[i].get('skidDropcartons').setValue(formObj.controls[i].get('skidDropcartons').value)
//                             formObj.controls[i].get('skidDestination').setValue(formObj.controls[i].get('skidDestination').value)
//                             formObj.controls[i].get('loadType').setValue(formObj.controls[i].get('loadType').value)
//                         } else {
//                             (<FormArray>this.complexForm.get('skidList')).push(this.createSkids());
//                         }

//                     }

//                 }
//             }
//         } else {
//             this.complexForm.get('skids').setValue(this.skidsValue)
//         }

//         this.load.skids = (this.complexForm.get('skidList') as FormArray).controls.length;
//         this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;
//     }

//     createSkids() {
//         return new FormGroup({
//             'skidDestination': new FormControl(null, Validators.required),
//             'loadType': new FormControl(null, Validators.required),
//             'skidDropcartons': new FormControl(1, [Validators.required, Validators.pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')]),
//             'addedCartons': new FormControl(0),
//             'geoStatus': new FormControl(0),
//             'cartonstatus': new FormControl(0),
//             'id': new FormControl(''),
//             'miles': new FormControl(),
//             'miles_ui': new FormControl()
//         })
//     }

//     skidDelete(index, value) {
//         if (value != '') {
//             this.loadService.deleteSkid(value).subscribe((data) => {
//                 if (data.error == null) {
//                     this.delete(index, value)
//                 } else {
//                     alert(data.error.message)
//                 }
//             });
//         } else {
//             this.delete(index, value)
//         }
//     }

//     delete(index, value) {
//         for (let i = 0; i < this.skidDrops.length; i++) {
//             if (this.skidDrops[i].index === index) {
//                 this.skidDrops.splice(i, 1);
//             }
//         }
//         for (let i = 0; i < this.skidDrops.length; i++) {
//             if (this.skidDrops[i].index > index) {
//                 this.skidDrops[i].index = (this.skidDrops[i].index) - 1;
//             }
//         }
//         (this.complexForm.get('skidList') as FormArray).removeAt(index);
//         this.load.skids = (<FormArray>this.complexForm.get('skidList')).length;
//         this.previousValue = (this.complexForm.get('skidList') as FormArray).controls.length;
//     }

//     pickUpLocationList;
//     getAllDcLocations() {
//         this.loadService.getAllDcLocations().subscribe((response: any) => {
//             this.pickUpLocationList = response.data;
//         }, error =>
//                 console.log(error)
//         )
//     }


//     pickuplatitude;
//     pickupLongitude;
//     getPickuplocations(value) {
//         this.pickUpLocationList.find((data) => {
//             if (value == data.locNbr) {
//                 this.pickuplatitude = data.latitude;
//                 this.pickupLongitude = data.longitude;
//             }
//         })

//     }
//     public show_map: boolean = false;
//     getSkidLocations(value, index) {
//         var latitude;
//         var longitude;
//         var skid_data;
//         this.loadTypedestinations[index].find((data) => {
//             if (value == data.locNbr) {
//                 skid_data = data;
//                 latitude = data.latitude;
//                 longitude = data.longitude

//             }
//         })
//         let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
//         this.loadService.getTimeDistance(this.pickuplatitude, this.pickupLongitude, latitude, longitude).subscribe((data) => {
//             for (let i = 0; i < getLoadValue.length; i++) {
//                 getLoadValue.controls[index].get('miles').setValue(data);
//                 getLoadValue.controls[index].get('miles_ui').setValue(data.toFixed(2))

//             }

//             if (index + 1 > this.skidDrops.length) {
//                 this.skidDrops.push({
//                     "index": this.skidDrops.length,
//                     "latitude": skid_data.latitude,
//                     "longitude": skid_data.longitude,
//                     "name": skid_data.locAddrName,
//                     "address": skid_data.address,
//                     "distance": data
//                 });
//             }
//             else {

//                 this.skidDrops.splice(index, 1);
//                 this.skidDrops.splice(index, 0, {
//                     "index": index,
//                     "latitude": skid_data.latitude,
//                     "longitude": skid_data.longitude,
//                     "name": skid_data.locAddrName,
//                     "address": skid_data.address,
//                     "distance": data
//                 })

//                 if (this.show_map)
//                     this.showMap()
//             }
//         })
//     }

//     testValue: any;
//     getAppointmentType(index) {
//         let getLoadValue: any = <FormArray>this.complexForm.get('skidList');
//         this.appointmentTypesList.find((data) => {
//             if (data.id == getLoadValue.controls[index].get('loadType').value) {
//                 let pickupLoc = data.type.split(" ")[0];
//                 let destLoc = data.type.split(" ")[2];
//                 this.getLocationByTypes(pickupLoc, destLoc, index)
//             }
//         })
//     }
//     locationType: any = [{
//         pickuplocation: { locNbr: '' },
//         destinationlocation: { locNbr: '' }
//     }
//     ];
//     loadTypedestinations: any = [];
//     getLocationByTypes(pickupLoc, destLoc, index) {
//         this.loadService.getLocationByType(pickupLoc, destLoc).subscribe((response: any) => {
//             this.locationType = response.data;
//             this.loadTypedestinations[index] = this.locationType.destinationlocation;
//         }, error =>
//                 console.log(error)
//         )
//     }



//     /**
//     * Get All locations
//     */

//     getAlllocations() {
//         this.loadService.getAlllocationsInfo().subscribe(response => {
//             this.locationList = response;
//             for (let i = 0; i < this.locationList.length; i++) {
//                 if (this.locationList[i].locNbr == this.load.originLocNbr.locNbr) {
//                     this.orignlocAddrName = this.locationList[i].locNbr;
//                     break;
//                 }
//             }
//             for (let i = 0; i < this.locationList.length; i++) {
//                 if (this.locationList[i].locNbr == this.load.destLocNbr.locNbr) {
//                     this.destAddrName = this.locationList[i].locNbr;
//                     break;
//                 }
//             }
//         }, error =>
//                 console.log(error)
//         )
//     }



//     /**
//     * Vendors List
//     */

//     getVendors() {
//         this.loadService.getVendorsInfo().subscribe(response => {
//             this.vendorsList = response;
//         }, error =>
//                 console.log(error)
//         )
//     }
//     /**
//      * Drivers List Based on Vendors
//      */

//     selectedVendroNumer: any = null;
//     getDriversByVendorNum(vendorNbr) {
//         this.selectedVendroNumer = vendorNbr;
//         this.driverNum = '';
//         this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(response => {
//             this.driverList = response.data;

//         }, error =>
//                 console.log(error)
//         )
//     }

//     /**
//     * AppointmentTypes
//     */

//     public getAppointments() {
//         this.loadService.getAppointmentTypesInfo().subscribe(response => {
//             this.appointmentTypesList = response;
//             for (let a = 0; a < this.appointmentTypesList.length; a++) {
//                 if (this.appointmentTypesList[a].id == this.load.apptTypNbr.id) {
//                     this.appointmentypeId = this.appointmentTypesList[a].id;
//                 }
//             }
//         }, error =>
//                 console.log(error)
//         )
//     }


//     updateLoadData(value: any) {
//         if (this.complexForm.valid && value.loadNum != '' && value.driverId != '' && value.originNum != ''
//             && value.destinNum != '' && value.geomile != '' && value.appointmentye != '' && this.complexForm.valid) {
//             if (value.originNum != value.destinNum) {
//                 const today_Date = new Date();
//                 const userID = localStorage.getItem('userData');
//                 let SkidDropsObj: any = [];
//                 let skidObj: any = <FormArray>this.complexForm.get('skidList');
//                 for (let i = 0; i < this.complexForm.value.skidList.length; i++) {
//                     SkidDropsObj.push({
//                         totalCartons: skidObj.controls[i].get('skidDropcartons').value,
//                         "addedCartons": skidObj.controls[i].get('addedCartons').value,
//                         loadTypNbr: {
//                             id: parseInt(skidObj.controls[i].get('loadType').value)
//                         },
//                         destLocNbr: {
//                             locNbr: skidObj.controls[i].get('skidDestination').value
//                         },
//                         geoStatus: skidObj.controls[i].get('geoStatus').value,
//                         cartonstatus: skidObj.controls[i].get('cartonstatus').value,
//                         "totalMiles": skidObj.controls[i].get('miles').value

//                     })
//                 }
//                 let addLoadObject: any = {
//                     'loadNumber': value.loadNum,
//                     'originLocNbr': {
//                         'locNbr': value.originNum
//                     },
//                     'createdTS': moment(today_Date).format(),
//                     'createdUser': {
//                         'id': userID
//                     },
//                     'lastUpdatedUser': {
//                         'id': userID
//                     },
//                     'lastUpdatedTS': moment(today_Date).format(),
//                     'highValueLoad': this.load.highValueLoad,
//                     'highPriorityLoad': this.load.highPriorityLoad,
//                     'geomiles': value.geomile,
//                     "skidDropsCount": SkidDropsObj.length,
//                     "skidDrops": SkidDropsObj,
//                 }


//                 if (this.load.driver.id == "") {
//                     addLoadObject.driver = null;
//                 } else {
//                     addLoadObject.driver = {
//                         id: this.load.driver.id
//                     }
//                 }
//                 if (this.selectedVendroNumer == null) {
//                     addLoadObject.vndNbr = null;
//                 } else {
//                     addLoadObject.vndNbr = { vendorNbr: this.selectedVendroNumer };
//                 }
//                 this.loadService.updateLoad(addLoadObject).then(response => {
//                     if (response.data != null) {
//                         // this.loadService = response.message
//                         this.loadUpdateSuccess = 'Load updated successfully';
//                         setTimeout(() => {
//                             this.loadUpdateSuccess = ''
//                             this.router.navigate(['/loads']);
//                         }, 2000);
//                     } else {
//                         this.loadUpdateFailure = response.error.message;
//                         setTimeout(() => {
//                             this.loadUpdateFailure = ''
//                         }, 2000);
//                     }
//                 }, error => {
//                     this.serviceErrorResponse = error.exception;
//                     this.serviceErrorData = true;
//                 })
//             } else {
//                 this.loadUpdateFailure = 'Please select different destination locations';
//                 setTimeout(() => {
//                     this.loadUpdateFailure = ''
//                 }, 2000);
//             }
//         } else {
//             console.log('error');
//             this.formValidate = true;
//             this.complexForm != this.complexForm;
//         }
//     }


//     goBack(): void {
//         this.router.navigate(['/loads']);
//     }
//     goToHome() {
//         const link = ['/dashboard'];
//         this.router.navigate(link);
//     }
//     removeMarkers() {
//         for (let i = 0; i < this.gmarkers.length; i++) {
//             this.gmarkers[i].setMap(null);
//         }
//     }

//     showMap() {
//         console.log("hi")
//         this.removeMarkers()
//         this.show_map = true;
//         this.skidDrops.sort((val1, val2) => {
//             return val1.distance - val2.distance
//         })
//         let waypts = [];
//         this.map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 2,
//             center: { lat: 25.32, lng: 35.32 }
//         });
//         for (let i = 0; i < this.skidDrops.length; i++) {
//             waypts.push({
//                 location: { lat: this.skidDrops[i].latitude, lng: this.skidDrops[i].longitude },
//                 stopover: true
//             })
//             this.addMarker(this.skidDrops[i], i);
//         }
//         directionsDisplay.setMap(this.map)
//         this.makeMarkerValue(this.load_details.originLocNbr)
//         var request = {
//             origin: new google.maps.LatLng(this.pickuplatitude, this.pickupLongitude),
//             destination: new google.maps.LatLng(this.skidDrops[this.skidDrops.length - 1].latitude, this.skidDrops[this.skidDrops.length - 1].longitude),
//             travelMode: google.maps.TravelMode.DRIVING,
//             waypoints: waypts,
//             //   optimizeWaypoints: true
//         }
//         directionsService.route(request, function (result, status) {
//             if (status === "OK") {
//                 directionsDisplay.setDirections(result);
//             }
//             else {
//                 alert("Route not found");
//             }
//         })
//     }

//     addMarker(obj, labelIndex) {
//         var infoWindow = new google.maps.InfoWindow({
//         }
//         );
//         var labels = '123456789'
//         // var  = 0;
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(obj.latitude, obj.longitude),
//             map: this.map,
//             label: labels[labelIndex++ % labels.length]
//         })
//         this.gmarkers.push(marker);
//         marker.addListener('click', () => {
//             infoWindow.setContent('<div style="color:black;float:left"><strong>Name : ' + obj.name + ' </strong></div><br><div style="color:black;float:left"><strong>Address : ' + obj.address + '</strong></div><br><div style="color:black;float:left"></div><div style="color:black;float:left"><strong>Distance : ' + obj.distance.toFixed(2) + '</strong></div>')
//             infoWindow.open(this.map, marker);
//         })
//     }
//     makeMarkerValue = (position) => {
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(position.latitude, position.longitude),
//             map: this.map,
//             title: position.locAddrName,
//             icon: './assets/img/p.png'
//         });

//         this.gmarkers.push(marker);
//     }


// }