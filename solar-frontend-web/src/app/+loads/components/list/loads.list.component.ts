import { Component, Type, OnInit, ViewEncapsulation, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { LoadsService } from '../../services/load.service';
import { Router } from '@angular/router';
import { ILoad } from '../../models/load';

import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
// import { Ng2MessagePopupComponent, Ng2PopupComponent } from 'ng2-popup';

import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { DriverService } from '../../../+drivers/services/driver.service';
import { ModalDirective } from 'ngx-bootstrap';

import { endponitConfig } from '../../../../environments/endpoints';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var google: any;
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer({
    // map: this.map,
    suppressMarkers: true
});
import * as moment from 'moment';
/**
 * This component gets all loads data.
 */
@Component({
    templateUrl: './loads.list.component.html',
    providers: [LoadsService, FormBuilder, DriverService],
    encapsulation: ViewEncapsulation.None,
    styles: [`
    .popup-header,
    .popup-body,
    .popup-footer {
        padding: 15px;
        text-align: center;
    }

    .popup-header {
        font-weight: bold;
        font-size: 18px;
        border-bottom: 1px solid #ccc;
    }

    .ng2-popup-overlay {
        display: flex;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.2);
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: none;
    }
  `]
})

export class LoadsListComponent {
    public loadNumberOptions;
    public vinNumberOptions;
    public driverNamesList = [{ value: '', label: '' }];
    driverListArray: Array<any> = [];
    private model: Object = { date: { year: 2018, month: 10, day: 9 } };
    public loadnumprefix = '';
    public loadListView;
    // @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
    message: string;
    public loadDeleteResponse: any;
    public activePageTitle: string;
    public error: String;
    public allLoads: ILoad[];
    public loads: ILoad;
    public errorMessage: String;
    private startplaceholder = 'Select Start Date';
    private endplaceholder = 'Select End Date';
    public serviceErrorResponse;
    public serviceErrorData;
    public pseudoServer = [];
    loadStartEnddates: any = { startDate: '', endDate: '' };
    loadQueryData: any = {
        startDate: '', endDate: '', loadStatus: '', empID: '', vinNumber: '',
        loadNumber: '', highValue: '0', highPriority: '0'
    };
    dealerList: any = [{
        city: '', contactName: '', dealerName: '', dealerNumber: '',
        latitude: '', longtitude: '', seq: '', status: '', vinCount: ''
    }];
    vinList: any = [{
        id: '', vin: '', vinSeq: '', yardId: '', loadSeq: '', divCd: '', scac: '', loadNum: '', affil: '',
        shipId: '', dealerCd: '', colorDesc: '', vinDesc: '',
        lotLocation: '', parkingSpot: ''
    }]
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
    // collapse content
    public isCollapsedContent = false;
    public itemactive: boolean;
    isLoadSearchQuerySubmitted: boolean;
    upDownArrow: any;
    collapseExpand: boolean;
    loadListQueryArray: Array<any> = [];
    public loadNumberList = [{ value: '', label: '' }]
    vinsListQueryArray: Array<any> = [];
    public vinsNumberList = [{ value: '', label: '' }]
    public filterQuery = '';
    public rowsOnPage = 10;
    public sortBy = 'loadNum';
    public sortOrder = 'asc';

    public loadsHeader: Headers;
    public loadDeleteSuccess;
    public loadDeleteFailure;
    complexForm: FormGroup;

    @ViewChild('loadviewPopup') public loadviewPopup: ModalDirective;
    public showChildModal(): void {
        this.loadviewPopup.show();
    }
    public load: any = {}; formValidate: boolean;

    driverId: AbstractControl;
    vendorNum: AbstractControl;
    constructor(private http: Http, private loadService: LoadsService, private cdr: ChangeDetectorRef, private driverService: DriverService,
        private loadsService: LoadsService, private router: Router, fb: FormBuilder) {
        this.activePageTitle = 'Loads';
        this.isLoadSearchQuerySubmitted = false;
        this.loadQueryData.highValue = 0;
        this.loadQueryData.highPriority = 0;
        this.loadDeleteResponse = '';
        this.loadsHeader = new Headers();
        this.loadsHeader.append('Content-Type', 'application/json');
        this.loadsHeader.append('Authorization', localStorage.getItem('Authentication'));

        this.load.driverId = '';
        this.load.vendorNum = '';
        this.formValidate = false;
        this.complexForm = fb.group({
            'driverId': [null, Validators.required],
            'vendorNum': [null, Validators.required],
        })
        this.driverId = this.complexForm.controls['driverId'];
        this.vendorNum = this.complexForm.controls['vendorNum'];
    }
    driverNameListData: any;
    /**
      * Drivers List Based on Vendors
      */
    getDriversByVendorNum(vendorNbr) {
        this.load.driverId = '';
        this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(response => {
            this.driverNameListData = response.data;
            console.log(this.pushData.driver)
            // this.assignDriverId = ''
            this.assignDriverId = this.pushData.driver.id ? this.pushData.driver.id : '';
        }, error =>
                console.log(error)
        )
    }



    pushLoadHide() {
        // if ($.fn.DataTable.isDataTable('#DataTable table')) {
        //     var table = $('#DataTable table').DataTable();
        //     let info = table.page.info();
        //     table.ajax.reload();
        // }
        // // this.complexForm.reset();
        this.assignDriverId = '';
        this.assignVendorId = '';
        this.pushLoad.hide();
    }

    private extractData(res) {
        const body = res.json();
        if (body) {
            return body.data
        } else {
            return {}
        }
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    map: any;
    ngOnInit() {
        this.getAllLoadsList();
        this.getAllDrivers();
        // this.map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 3,
        //     center: { lat: 39.053720, lng: -121.517768 }
        // });

    }



    options = {
        dom: 'Bfrtip',
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'btn bg-color-blueLight  txt-color-white btn-sm dataTableCustomButtonMargin',
                action: function (e, dt, node, config) {
                    if ($.fn.DataTable.isDataTable('#DataTable table')) {
                        var table = $('#DataTable table').DataTable();
                        table.ajax.reload();
                    }
                }
            }
        ],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.LOAD_API_ENDPOINT + 'getAllLoadAppointments', { headers: this.loadsHeader })
                .map(this.extractData)
                .catch(error => {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    const errMsg = (error.message) ? error.message :
                        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                    console.error(errMsg); // log to console instead
                    if (error.status == 404) {
                        error = error.json();
                        this.serviceErrorResponse = error.exception;
                        this.serviceErrorData = true;
                        return Observable.throw(error)
                    } else {
                        // this.navigateToLogin( this.errorMessage)
                        localStorage.setItem('status', '401')
                        // 401 unauthorized response so log user out of client
                        window.location.href = '/#/error';
                        return Observable.throw(errMsg);
                    }
                })
                .subscribe((dataa) => {
                    callback({
                        aaData: dataa,
                    })
                })
        },


        columns: [
            {
                data: 'loadNumber',
                responsivePriority: 1,
                render: (data, type, row) => {
                    console.log(data)
                    if (row['loadStatNbr'].id == 4) {
                        return `<a type='button' style='cursor:pointer;'  class='loadNumber' >${data}</a>`;
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'originLocNbr.locAddrName',
                responsivePriority: 4,
                render: (data) => {
                    return data.toUpperCase()
                }
            },
            {
                data: 'destLocNbr.locAddrName',
                responsivePriority: 10,
                render: (data) => {
                    return data.toUpperCase()
                }
            },
            {
                data: 'driver.firstName',
                responsivePriority: 5,
                render: (data) => {
                    if (data != null) {
                        return data;
                    } else {
                        return '-'
                    }
                }
            },
            {
                data: 'skidDropsCount',
                responsivePriority: 3,
                className: 'text-center'
            },
            {
                data: 'totalCartons',
                className: 'text-center',
                responsivePriority: 5
            },
            {
                data: 'addedCartons',
                className: 'text-center',
            },

            {
                data: "loadStatNbr",
                render: (data, type, row) => {
                    if (data.id == 0) {
                        return `Incomplete Load`
                    }
                    else if (data.id == 1) {
                        return `Load Created`
                    }
                    else if (data.id == 2) {
                        return `Load Assigned`
                    }
                    else if (data.id == 3) {
                        return `Driver Login`
                    }
                    else if (data.id == 4) {
                        return `Load Accepted`
                    }
                    else if (data.id == 5) {
                        return `Load Completed`
                    } else {
                        return '-'
                    }
                }
            },
            {
                data: "loadStatNbr",
                className: 'editcenter',
                orderable: false,
                render: (data, type, row) => {
                    if (data.id == 2 || data.id == 3 || data.id == 4 || data.id == 5) {
                        return `<a class=" editor_view" ><i class="fa fa-eye" (click)="mypopup()"></i></a>`
                    }
                    else if (data.id == 1) {
                        return `<a class=" editor_edit "  (click)="goToUpdateLoadDetial(load.loadNum)"><i class="fa fa-edit"></i>/</a>
                                <a class=" editor_view" ><i class="fa fa-eye" (click)="mypopup()"></i></a>
                                <a class=" editor_remove" >/<i class="fa fa-trash-o"></i></a>
                                <a class=" load_push" >/<i class="fa fa-arrow-right"></i></a>`
                    } else {
                        return ` <a class=" editor_edit " (click)="goToUpdateLoadDetial(load.loadNum)"><i class="fa fa-edit"></i>/</a>
                                <a class=" editor_view" ><i class="fa fa-eye" (click)="mypopup()"></i></a>
                                <a class=" editor_remove" >/<i class="fa fa-trash-o"></i></a>`
                    }
                }
            }
        ],

        "aaSorting": [[6, 'asc']],
        rowCallback: (row: Node, data: any | Object, index: number) => {

            const self = this;
            $('td', row).unbind('click');
            $('a.loadNumber', row).bind('click', () => {
                // self.getReportsbyLoadNUmber(data)
                self.gotoLiveTrackingDetails(data)
            });
            $('a.editor_edit', row).bind('click', () => {
                // self.editUser(data);
                self.goToUpdateLoadDetial(data)
            });

            $('a.editor_view', row).bind('click', () => {
                self.gotoViewLoadDetails(data);
            });

            $('a.get_Documents', row).bind('click', () => {
                self.getDocuments(data, 1);
            });

            $('a.get_Documents2', row).bind('click', () => {
                self.getDocuments(data, 2);
            });
            $('a.load_push', row).bind('click', () => {
                self.pushLoadDetails(data);
            });
            $('a.editor_remove', row).bind('click', () => {
                this.loadsService
                    .deleteLoad(data)
                    .subscribe(response => {
                        if (response.data != null) {
                            if ($.fn.DataTable.isDataTable('#DataTable table')) {
                                var table = $('#DataTable table').DataTable();
                                let info = table.page.info();
                                $('td', row).parents('tr').remove();
                                table.ajax.reload();
                                //    setTimeout(()=>{
                                //     table.page(info.page).draw('page'); 
                                //    },500)
                            }
                            this.loadDeleteSuccess = 'Load deleted successfully'
                            setTimeout(() => {
                                this.loadDeleteSuccess = '';
                            }, 1000);
                            //  this.getAllLoadsList();
                        } else {
                            // this.loadDeleteFailure = response.error.message;
                            this.loadDeleteFailure = response.error.message
                            setTimeout(() => {
                                this.loadDeleteFailure = '';
                            }, 3000)
                        }
                    },
                    error => { this.error = error })
            });
            return row;
        },
    };

    getReportsbyLoadNUmber(data: any) {
        localStorage.setItem('loadNumber', data.loadNumber)
        this.loadService.getExpensesReportsbyLoadnUmber(data.loadNumber).subscribe((reportData) => {
        })
        setTimeout(() => {
            this.loadService.getConsolidatedReports(data.loadNumber).subscribe((reportData) => {
            })
        }, 2000);
    }

    assignDriverId: any = ''
    assignVendorId: any;
    documentsList: any;
    getDocuments(obj, id) {
        localStorage.setItem('type', id)
        const link = ['/loads/loadImages', obj.loadNumber];
        this.router.navigate(link);
    }
    vendorsList: any;
    @ViewChild('pushLoad') public pushLoad: ModalDirective;
    pushData: any;
    pushLoadDetails(loadData) {
        this.pushData = loadData;
        if (this.pushData.vndNbr == null) {
            this.assignVendorId = '';
        } else {
            this.assignVendorId = this.pushData.vndNbr.vendorNbr;
        }

        this.loadService.getVendorsInfo().subscribe(response => {
            this.vendorsList = response;
            this.getDriversByVendorNum(this.assignVendorId)
            this.pushLoad.show();
            this.assignDriverId = ''
        }, error =>
                console.log(error)
        )
    }

    hide: boolean = true;
    submitForm(value: any) {
        if (this.complexForm.valid && value.loadNum != '' && value.driverId != '') {
            const today_Date = new Date();
            const userID = localStorage.getItem('userData');


            this.pushData.driver = {
                'id': this.assignDriverId
            }
            this.pushData.vndNbr = {
                vendorNbr: this.assignVendorId
            }
            var pushObj = this.pushData
            this.loadsService.updateLoad(pushObj).then(response => {
                this.loadsService.updateLoadStatus(this.pushData.loadNumber, 2).then(response => {
                    if (response != null) {
                        this.hide = false;
                        if ($.fn.DataTable.isDataTable('#DataTable table')) {
                            var table = $('#DataTable table').DataTable();
                            let info = table.page.info();
                            table.ajax.reload();
                        }
                        this.loadDeleteSuccess = 'Load details pushed successfully'
                        this.pushLoad.hide();
                        setTimeout(() => {
                            this.loadDeleteSuccess = '';
                        }, 1000);
                    } else {
                        this.loadDeleteFailure = response.error.message;
                    }

                })
                this.assignDriverId = '';
                this.assignVendorId = '';
            }, error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            })
        } else {
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }
    }

    /**
   * This method gets all loads
   */
    public getAllLoadsList(): void {
        try {
            this.loadsService.getAllLoads().toPromise().then((load) => {
                this.allLoads = load;
            });
        } catch (error) {
            console.error('error occured in getting all load details' + error)
        }
    }

    /**
     * View Load
     */

    public gotoLiveTrackingDetails(viewObj: any) {
        localStorage.setItem('driverNumber', JSON.stringify(viewObj))
        this.router.navigate(['/dashboard/liveTracking'])
    }

    gotoViewLoadDetails(viewObj: any) {
        this.loadListView = viewObj;
        this.map = new google.maps.Map(document.getElementById('map'), {
            //      zoom: 4,
            center: { lat: this.loadListView.originLocNbr.latitude, lng: this.loadListView.originLocNbr.longitude }
        });

        var waypoints = [];
        var ordered_points = [];

        this.loadListView.skidDrops.sort((val1, val2) => {
            return val1.skidOrderPerLoad - val2.skidOrderPerLoad
        })

        for (let i = 0; i < this.loadListView.skidDrops.length; i++) {
            waypoints.push({
                location: { lat: this.loadListView.skidDrops[i].destLocNbr.latitude, lng: this.loadListView.skidDrops[i].destLocNbr.longitude },
                stopover: true
            })
            this.addMarker(this.loadListView.skidDrops[i], i);
        }
        this.makeMarkerValue(this.loadListView.originLocNbr);
        directionsDisplay.setMap(this.map);
        var request = {
            origin: new google.maps.LatLng(this.loadListView.originLocNbr.latitude, this.loadListView.originLocNbr.longitude),
            destination: new google.maps.LatLng(this.loadListView.skidDrops[this.loadListView.skidDrops.length - 1].destLocNbr.latitude, this.loadListView.skidDrops[this.loadListView.skidDrops.length - 1].destLocNbr.longitude),
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: waypoints,
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

        this.loadviewPopup.show();
    }
    makeMarkerValue = (position) => {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(position.latitude, position.longitude),
            map: this.map,
            title: position.locAddrName,
            icon: './assets/img/p.png'
        });
        // this.gmarkers.push(marker);
    }
    addMarker(obj, labelIndex) {
        var infoWindow = new google.maps.InfoWindow({
        }
        );
        var labels = '123456789'
        // var  = 0;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(obj.destLocNbr.latitude, obj.destLocNbr.longitude),
            title: obj.destLocNbr.locAddrName,
            // icon: "./assets/img/dealer.png",
            map: this.map,
            label: labels[labelIndex++ % labels.length]
        })


        marker.addListener('click', () => {
            infoWindow.setContent('<div style="color:black;float:left"><strong>Name : ' + obj.destLocNbr.locAddrName + ' </strong></div><br><div style="color:black;float:left"><strong>Address : ' + obj.destLocNbr.address + '</strong></div><br><div style="color:black;float:left"></div><div style="color:black;float:left"><strong>Distance(miles) : ' + obj.totalMiles.toFixed(2) + '</strong></div>')
            infoWindow.open(this.map, marker);
        })
    }

    /**
     * Update Load
     */
    public goToUpdateLoadDetial(loadNum: any) {
        const link = ['/loads/updateLoad', loadNum.loadNumber];
        this.router.navigate(link);
    }

    /**
     * back to load page
     */
    public goToAddLoad() {
        const link = ['/loads/addLoad'];
        this.router.navigate(link);
    }

    /**
   * This method gets all driver details
   */
    private getAllDrivers(): void {
        this.driverService.getDrivers().subscribe(drivers => {
            this.driverListArray = drivers;
            const driverNamesList = new Array(this.driverListArray.length);
            for (let i = 0; i < this.driverListArray.length; i++) {
                driverNamesList[i] = {
                    value: this.driverListArray[i].empID,
                    label: this.driverListArray[i].firstName + ' ' + this.driverListArray[i].lastName
                };
            }
            this.driverNamesList = driverNamesList.slice(0);
        });

    }

}
