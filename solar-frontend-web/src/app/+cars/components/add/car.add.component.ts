import { Component, Type, OnInit, ViewEncapsulation, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { ILoad } from '../../models/load';
import { Load } from '../../models/load.data';
import { CarsService } from '../../services/car.service';

import * as moment from 'moment';
// import { Select2OptionData } from 'ng2-select2';

declare var $;

@Component({
    templateUrl: './car.add.component.html',
    providers: [CarsService],
//     styles: [`
//    .test:disabled {
//     color: red;
//     font-weight: bold;
// } 
//     `]
})

export class LoadAddComponent implements OnInit {

    public loadAddSuccess;
    public loadAddFailure;

    @Output() close = new EventEmitter();
    public activePageTitle: string;
    public loadAddResponse: String;
    public error: String;
    navigated = true; // true if navigated here

    load: any = {
        "length": "",
        "width": "",
        "height": "",
        "weight": "",
        "destinationLocation": {
            "locNbr": ""
        },
        "createdDate": new Date(),
        "loadNumber": {
            "loadNumber": ""
        },
        "updatedDate": new Date(),
        "comment": "",
        addedCartons: 0
    }



    public loadsList: any;

    complexForm: FormGroup;
    formValidate: boolean;

    loadNum: AbstractControl;
    pickupAddress: AbstractControl;
    skidDrop: AbstractControl;
    width: AbstractControl;
    length: AbstractControl;
    height: AbstractControl;
    weight: AbstractControl;

    public serviceErrorResponse;
    public serviceErrorData;

    constructor(private router: Router, private carService: CarsService, fb: FormBuilder) {
        this.formValidate = false;
        this.complexForm = fb.group({
            'loadNum': [null, Validators.required],
            'skidDrop': [null, Validators.required],
            'dimensions': new FormArray([])
        })
        this.loadNum = this.complexForm.controls['loadNum'];
        this.skidDrop = this.complexForm.controls['skidDrop']
        this.width = this.complexForm.controls['width'];
        this.height = this.complexForm.controls['height'];
        this.length = this.complexForm.controls['length'];
        this.weight = this.complexForm.controls['weight'];
    }

    validate: any; emptyVal: any;
    weightUnits: any;
    ngOnInit() {
        this.getLoads();
        this.weightUnits = "lbs"
    }

value:any
    /**
     *  getAllPartialLoads
     */
    getLoads() {
        this.carService.getAllPartialLoads().subscribe((response: any) => {
            this.loadsList = response;
        }, error =>
                console.log(error)
        )
    }

    getskidsByloadNum() {
        this.load.destinationLocation.locNbr = '';
        let formObj: any = <FormArray>this.complexForm.get('dimensions');
        formObj.controls = [];
        this.load.addedCartons = 0;
        this.totalCartons = 0;
        this.pendingCartons = 0;
        this.carService.getSkidsByLoad(this.load.loadNumber.loadNumber).subscribe((data) => {
            this.skidDropList = data;
        })
    }


    getSkidStatus(obj) {
        if (obj.totalCartons == obj.addedCartons) {
            return true;
        } else {
            return false;
        }
    }
    pendingCartons: any = 0;
    totalCartons: any = 0;
    getAddedCartons() {
        let formObj: any = <FormArray>this.complexForm.get('dimensions');
        formObj.controls = [];
        this.load.addedCartons = 0;
        this.totalCartons = 0;
        this.pendingCartons = 0;
        this.skidDropList.find((skidData) => {
            if (this.load.destinationLocation.locNbr == skidData.destLocNbr.locNbr) {
                this.load.addedCartons = skidData.addedCartons;
                this.totalCartons = skidData.totalCartons;
                this.pendingCartons = skidData.totalCartons - skidData.addedCartons;
                this.addRow();
            }
        })
    }
    myFunction(skid,i){
        if(skid.value==0){
        skid.setValue('');
        }
    }

    addRow() {
        this.formValidate=false
        let formObj: any = <FormArray>this.complexForm.get('dimensions');
        (<FormArray>this.complexForm.get('dimensions')).push(this.createDimestions());
    }

    createDimestions() {
        return new FormGroup({
            'width': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)]),
            'height': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)]),
            'length': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)]),
            'weight': new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]$|^[1-4][0-9]$|^5[0]$|^[1-9]?\.[0-9]{1,}$|^[1-4][0-9]?\.[0-9]{1,}$/)]),
        })
    }


    skidDropList: any = [];
    getDetailsByloadNum() {
        this.load.skid = '';
        this.loadsList.find((data) => {
            if (data.apptNbr === this.load.loadNumber) {
                this.load.addedCartons = 4;
                this.skidDropList = [{ id: 1, destLocNbr: { locAddrName: 'A' } }, { id: 2, destLocNbr: { locAddrName: 'B' } }, { id: 3, destLocNbr: { locAddrName: 'C' } }, { id: 4, destLocNbr: { locAddrName: 'D' } }]
                this.load.picklocNbr = data.originLocNbr.locNbr
                this.load.pickupAddress = data.originLocNbr.locAddrName;
                this.load.destAddress = data.destLocNbr.locAddrName;
            }
        })
    }
    show; cartonId: any;
    submitForm(value: any) {
        //      console.log(this.load)

        let serviceCartonObj: any = [];
        let cartonObj: any = <FormArray>this.complexForm.get('dimensions');
        for (let i = 0; i < this.complexForm.value.dimensions.length; i++) {
            serviceCartonObj.push({
                width: cartonObj.controls[i].get('width').value,
                height: cartonObj.controls[i].get('height').value,
                length: cartonObj.controls[i].get('length').value,
                weight: cartonObj.controls[i].get('weight').value,
                "destinationLocation": {
                    "locNbr": this.load.destinationLocation.locNbr,
                },
                "createdDate": new Date(),
                "loadNumber": {
                    "loadNumber": this.load.loadNumber.loadNumber
                },
                "updatedDate": new Date(),
                "comment": "comment"
            })
        }


        if (this.complexForm.valid) {
            const userID = localStorage.getItem('userData');
            this.carService.addCarton(serviceCartonObj).then(response => {
                if (response.data != null) {
                    this.loadAddSuccess = 'Carton Added successfully'
                    const that = this;
                    //    this.cartonId = response.data.cartonId;
                    this.show = true;
                    setTimeout(() => {
                        this.show = false;
                        this.formValidate = false;
                        this.getskidsByloadNum();
                        this.carService.getAllPartialLoads().subscribe((response: any) => {
                            let testLoad: any = false;
                            for (let i = 0; i < response.length; i++) {
                                if (response[i].loadNumber == this.load.loadNumber.loadNumber) {
                                    testLoad = true;
                                    break;
                                }
                            }
                            if (!testLoad) {
                                this.router.navigate(['/cartons']);
                            }
                        }, error =>
                                console.log(error)
                        )
                        this.loadAddSuccess = ''
                    }, 1000);
                } else {
                    this.loadAddFailure = response.error.message
                    setTimeout(() => {
                        this.loadAddFailure = ''
                    }, 3000);
                }
            }, error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                this.loadAddFailure = ' Failed to create Carton'
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
        this.router.navigate(['/cartons']);

    }
    /**
    * This method navigates screen to dash board page
    */
    goToHome() {
        const link = ['/dashboard'];
        this.router.navigate(link);
    }

}


