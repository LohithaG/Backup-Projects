import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { CarsService } from '../../services/car.service';
import { ILoad } from '../../models/load';
import { Load } from '../../models/load.data';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as moment from 'moment';
declare var $;
/**
 * This component deals with loads update operation
 */
@Component({
    templateUrl: './car.update.component.html',
    providers: [CarsService]
})
export class LoadUpdateComponent {

    public loadUpdateSuccess;
    public loadUpdateFailure;

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
    @Input() load: any = {};
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


    public orignlocAddrName;
    public destAddrName;
    public vendorId: any;
    public appointmentypeId: any;
    public driverNum: any;
    public serviceErrorResponse;
    public serviceErrorData;

    loadNum: AbstractControl;
    skidDrop: AbstractControl;
    destAddress: AbstractControl;
    width: AbstractControl;
    length: AbstractControl;
    height: AbstractControl;
    weight: AbstractControl;
    public updateCarObj: any = {
        "length": "",
        "width": "",
        "height": "",
        "weight": "",
        "destinationLocation": {
            "locNbr": ''
        },
        "createdDate": new Date(),
        "loadNumber": {
            "loadNumber": ""
        },
        "updatedDate": new Date(),
        "comment": "",
        addedCartons: 0,
        cartonId: ''
    }

    constructor(private router: Router, private route: ActivatedRoute, fb: FormBuilder, private carService: CarsService) {
        this.complexForm = fb.group({
            'loadNum': [null, Validators.required],
            'width': [null, Validators.compose([Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)])],
            'height': [null, Validators.compose([Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)])],
            'length': [null, Validators.compose([Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)])],
            'weight': [null, Validators.compose([Validators.required, Validators.pattern(/^[1-9]$|^[1-9][0-9]$|^5[0][0]$|^[1-4][0-9][0-9]$|^[1-9]?\.[0-9]{1,}$|^[1-9][0-9]?\.[0-9]{1,}$|[1-4][0-9][0-9]?\.[0-9]{1,}$/)])],
        })
        this.loadNum = this.complexForm.controls['loadNum'];
        this.width = this.complexForm.controls['width'];
        this.length = this.complexForm.controls['height'];
        this.height = this.complexForm.controls['length'];
        this.weight = this.complexForm.controls['weight'];
    }


    id;
    skidDropList: any = [];
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['vinId'] !== undefined) {
                this.id = +params['vinId'] + '';
                const vinId: string = +params['vinId'] + '';
                this.navigated = true;
                this.carService.getLoadDetailsByLoadId(vinId).toPromise().then(carInfo => {
                    this.updateCarObj = carInfo;
                    // this.carService.getSkidsByLoad(this.updateCarObj.loadNumber.loadNumber).subscribe((data) => {
                    //     this.skidDropList = data;                      
                    // })

                });
            } else {
                this.navigated = false;
            }
        });

    }



    updateCarData() {

        if (this.complexForm.valid) {
            const today_Date = new Date();
            const userID = localStorage.getItem('userData');
            this.updateCarObj = {
                "id": this.id,
                "length": this.updateCarObj.length,
                "width": this.updateCarObj.width,
                "height": this.updateCarObj.height,
                "weight": this.updateCarObj.weight,
                "pickupLocation": {
                    "locNbr": this.updateCarObj.pickupLocation.locNbr
                },
                "destinationLocation": {
                    "locNbr": this.updateCarObj.destinationLocation.locNbr
                },
                "createdDate": today_Date,
                updatedDate: today_Date,
                "loadNumber": {
                    "loadNumber": this.updateCarObj.loadNumber.loadNumber
                },
                comment: '',
            }


            this.carService.updateCar(JSON.stringify(this.updateCarObj)).then(response => {
                if (response.data != null) {
                    this.loadUpdateSuccess = 'Carton Updated sucessfully'
                    const that = this;
                    setTimeout(() => {
                        this.loadUpdateSuccess = ''
                        this.router.navigate(['/cartons']);
                    }, 1000);
                } else {
                    this.loadUpdateFailure = response.error.message
                    setTimeout(() => {
                        this.loadUpdateFailure = ''
                    }, 3000);

                }
            }, error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                this.loadUpdateFailure = ' Failed to update Car'
            })

        } else {
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }

    }
    goBack(): void {
        this.close.emit();
        this.router.navigate(['/cartons']);

    }
}
