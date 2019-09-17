import { Component, Type, OnInit, ViewEncapsulation, ViewChild, Input, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ILoad } from '../../models/load';

import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import * as $ from 'jquery';
// import { Ng2MessagePopupComponent, Ng2PopupComponent } from 'ng2-popup';

import { IMyOptions, IMyDateModel } from 'mydatepicker';
import { CarsService } from '../../../+cars/services/car.service';
import { ModalDirective } from 'ngx-bootstrap';

import { endponitConfig } from '../../../../environments/endpoints';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * This component gets all loads data.
 */
@Component({
    templateUrl: './cars.list.component.html',
    providers: [CarsService, FormBuilder],
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
    public carListView;
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
            this.http.get(endponitConfig.CARTONS_API + 'getAllCartons', { headers: this.loadsHeader })
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
                data: 'cartonId',
                responsivePriority: 1
            },
            {
                data: 'loadNumber.loadNumber',
                responsivePriority: 2
            },
            {
                data: 'pickupLocation.locAddrName',
                responsivePriority: 3,
                render: (data) => {
                    return data.toUpperCase()
                }
            },
            {
                data: 'destinationLocation.locAddrName',
                responsivePriority: 7,
                render: (data) => {
                    return data.toUpperCase()
                }
            },
            {
                data: 'weight',
                responsivePriority: 4,
                class: 'text-center'
            },
            {
                data: 'length',
                responsivePriority: 5,
                class: 'text-center',
                "render": (data, type, row, meta) => {
                    return row['width'] + '*' + data + '*' + row['height'];
                }
            },
            // {
            //     data: null,
            //     className: 'editcenter',
            //     responsivePriority: 6,
            //     orderable: false,
            //     render: (data, type, row) => {
            //         if (1) {
            //             return `<a class=" editor_edit "  (click)="goToUpdateLoadDetial(load.loadNum)"><i class="fa fa-edit"></i>/</a>
            //                     <a class=" editor_view" ><i class="fa fa-eye"></i></a>
            //                     <a class=" editor_remove" >/<i class="fa fa-trash-o"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
            //         }
            //     }
            // }
            {
                data: 'loadNumber.loadStatNbr',
                className: 'editcenter',
                responsivePriority: 6,
                orderable: false,
                render: (data, type, row) => {


                    //     if (data.id == 5) {
                    //         return `<a class=" editor_view" ><i class="fa fa-eye" (click)="mypopup()"></i></a>`
                    //     }
                    //     else if (data.id == 4) {
                    //         return `<a class=" editor_view" ><i class="fa fa-eye"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
                    //     } else if (data.id == 2 || data.id == 3) {
                    //         return `
                    //              <a class=" editor_view" ><i class="fa fa-eye"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
                    //     } else {
                    //         return `<a class=" editor_edit "  (click)="goToUpdateLoadDetial(load.loadNum)"><i class="fa fa-edit"></i>/</a>
                    //         <a class=" editor_view" ><i class="fa fa-eye"></i></a>
                    //         <a class=" editor_remove" >/<i class="fa fa-trash-o"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
                    //     }
                    // }

                    if (row['preInspectionStatus']) {
                        return `<a class=" editor_view" ><i class="fa fa-eye"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
                    } else {
                        return `<a class=" editor_edit "  (click)="goToUpdateLoadDetial(load.loadNum)"><i class="fa fa-edit"></i>/</a>
                            <a class=" editor_view" ><i class="fa fa-eye"></i></a>
                            <a class=" editor_remove" >/<i class="fa fa-trash-o"></i></a>/<a class="qr_view" ><i class="fa fa-qrcode"></i></a>`
                    }

                }
            }
        ],
        "aaSorting": [[1, 'desc']],

        rowCallback: (row: Node, data: any | Object, index: number) => {

            const self = this;
            $('td', row).unbind('click');

            $('a.editor_edit', row).bind('click', () => {
                // self.editUser(data);
                self.goToUpdateCarDetial(data)
            });

            $('a.editor_view', row).bind('click', () => {
                self.gotoViewCarDetails(data);
            });
            $('a.qr_view', row).bind('click', () => {
                self.qrDisplay(data);
            });

            $('a.editor_remove', row).bind('click', () => {
                this.carsService
                    .deleteCar(data)
                    .subscribe(response => {
                        if (response.data != null) {
                            if ($.fn.DataTable.isDataTable('#DataTable table')) {
                                var table = $('#DataTable table').DataTable();
                                let info = table.page.info();
                                $('td', row).parents('tr').remove();
                                table.ajax.reload();
                            }
                            this.loadDeleteSuccess = 'Carton deleted successfully'
                            setTimeout(() => {
                                this.loadDeleteSuccess = '';
                            }, 1000);
                        } else {
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

    @ViewChild('loadviewPopup') public loadviewPopup: ModalDirective;
    public showChildModal(): void {
        this.loadviewPopup.show();
    }

    constructor(private http: Http, private cdr: ChangeDetectorRef,
        private carsService: CarsService, private router: Router, private readonly _sanitizer: DomSanitizer) {
        this.activePageTitle = 'Loads';
        this.isLoadSearchQuerySubmitted = false;
        this.loadQueryData.highValue = 0;
        this.loadQueryData.highPriority = 0;
        this.loadDeleteResponse = '';


        this.loadsHeader = new Headers();
        this.loadsHeader.append('Content-Type', 'application/json');
        this.loadsHeader.append('Authorization', localStorage.getItem('Authentication'));


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


    ngOnInit() {

    }

    @ViewChild('viewPopup') public viewPopup: ModalDirective;
    imgDetails; img;
    qrCodeValue: any = '';
    displayQrObj: any;
    qrDisplay(obj: any) {

        this.displayQrObj = obj;
        this.qrCodeValue = obj.cartonId;
        this.carsService.getQRcodeById(obj.id).subscribe(response => {
            let res: any = response;
            this.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + res.binaryData)
            this.viewPopup.show();
        }, error =>
                console.log(error)
        )
    }
    /**
     * View Car
     */

    public gotoViewCarDetails(viewObj: any) {
        console.log(viewObj);
        this.carListView = viewObj;
        console.log(this.carListView)
        this.loadviewPopup.show();
    }

    /**
     * Update Car
     */
    public goToUpdateCarDetial(carObj: any) {
        const link = ['/cartons/updateCarton', carObj.id];
        this.router.navigate(link);
    }

    /**
     * back to Car page
     */
    public goToAddLoad() {
        const link = ['/loads/addLoad'];
        this.router.navigate(link);
    }

}
