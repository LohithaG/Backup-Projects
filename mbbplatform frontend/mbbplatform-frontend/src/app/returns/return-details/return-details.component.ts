import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { endponitConfig } from '../../../environments/endpoint';
declare var $;
import { ReturnService } from '../returns.service';
import { IMyOptions } from 'mydatepicker';

@Component({
    selector: 'return-view',
    templateUrl: './return-details.component.html',
})

export class ReturnDetailsComponent implements OnInit {


    constructor(
        public returnService: ReturnService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.returnForm = new FormGroup({
            'enteredDate': new FormControl(null, Validators.compose([Validators.required])),
            'channel': new FormControl(null, Validators.compose([Validators.required])),
            'type': new FormControl(null, Validators.compose([Validators.required])),
            'reason': new FormControl(null, Validators.compose([Validators.required])),
            'status': new FormControl(null, Validators.compose([Validators.required])),
            'prodStatus': new FormControl(null, Validators.compose([Validators.required])),
            'refNumber': new FormControl(null, Validators.compose([Validators.required])),
             'others': new FormControl(),
            'comments': new FormControl(null, Validators.compose([Validators.required])),
        });
    }

    returnForm: FormGroup;
    itemDetails: any = [];
    dateFormat = 'dd-mm-yyyy'
    private datePickerOptions: IMyOptions = {
        dateFormat: this.dateFormat,
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };


    returnObj: any = {others:null};
    dateData: any = ''; channelId; dispatchId; orderId;
    channelNames; returnTypes; allReasons; dispatchDate;
    d = new Date();
    ngOnInit() {
        this.returnObj.channel = '';
        this.returnObj.type = '';
        this.returnObj.reason = '';
        this.returnObj.status = "QC Done";
        this.returnObj.prodStatus = 'Pending QC';
        this.returnService.getChannels().subscribe((data: any) => {
            if (data.length !== 0 && data.data != null) {
                this.channelNames = data.data;
            }
        })
        this.returnService.getReturns().subscribe((data: any) => {
            if (data.length !== 0 && data.data != null) {
                this.returnTypes = data.data;
            }
        })
        this.returnService.getReasons().subscribe((data: any) => {
            if (data.length !== 0 && data.data != null) {
                this.allReasons = data.data;
            }
        })
        this.route.params.forEach((params: Params) => {
            if (params['dispatchId'] !== undefined && params['orderId'] !== undefined) {
                this.dispatchId = params['dispatchId'];
                this.orderId = params['orderId'];
                this.dispatchDate = params['date'];
            }
            else {
                this.router.navigate(['./returns']);
            }
        });
        const value = this.dispatchDate;
        const year = value.substring(0, 4);
        const month = value.substring(5, 7);
        const day = value.substring(8, 10);
        this.datePickerOptions = {
            showClearDateBtn: false,
            showTodayBtn: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            dateFormat: this.dateFormat,
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
            disableUntil: { year: year, month: month, day: day - 1 },
            disableSince: { year: this.d.getFullYear(), month: this.d.getMonth() + 1, day: this.d.getDate() + 1 },
        }
        const others = this.returnForm.get('others');
        this.returnForm.get('reason').valueChanges.subscribe(
            (mode) => {
                if (mode == 13) {
                    others.setValidators([Validators.required]);
                }
                else  {
                    others.setValidators([])
                }
            });
    
    }
    pricePattern = '^[0-9]+([.][0-9]+)?$';
    public productStatuses = {
        "data": [
            {
                "id": 1,
                "name": "Pending QC"
            },
            {
                "id": 2,
                "name": "Good"
            },
            {
                "id": 3,
                "name": "Bad"
            }

        ],
        "error": null,
        "code": 0
    }
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }

    returnSuccess = 'Return details added successfully';
    returnFail: any;
    success; fail;

    submitted = false;
    status: boolean;
   

    addReturnDetails() {
        this.submitted = false;
       if(this.returnObj.reason==13){

       }
        if (this.returnForm.valid) {
            if (this.returnObj.status == 'QC Done') {
                this.status = true
            }
            let date = this.returnObj.enteredDate.date.year + '-' + this.twoDigit(this.returnObj.enteredDate.date.month) + '-' + this.twoDigit(this.returnObj.enteredDate.date.day)
            let postObj: any = {
                "returnRequestOn": date,
                "typeOfReturn": {
                    "id": this.returnObj.type
                },
                "returnReasons": {
                    "id": this.returnObj.reason
                },
                "returnStatus": this.status,
                "comments": this.returnObj.comments,
                "dispatchId": {
                    "id": parseInt(this.dispatchId)
                },
                "productStatus": this.returnObj.prodStatus,
                "unicommerceRefferenceNo":this.returnObj.refNumber
            };
            if (this.returnObj.others != null) {
                postObj.otherReasons = this.returnObj.others;
            }                 
            this.returnService.addReturnDetails(postObj, this.returnObj.channel).subscribe(data => {
                if (data.error == null) {
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                        this.router.navigate(['./returns'])
                    }, 3000)
                } else {
                    this.returnFail = data.error.message;
                    this.fail = true;
                    setTimeout(() => {
                        this.fail = false;
                    }, 3000)
                }
            })
        }
        else {
            this.submitted = true;
        }

    }
    gotoHomePage() {
        this.router.navigate(['./returns']);
    }
}



