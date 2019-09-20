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
    selector: 'refund-view',
    templateUrl: './refund-details.component.html',
})

export class RefundComponent implements OnInit {

    refundObj: any = {}
    constructor(
        public returnService: ReturnService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.refundForm = new FormGroup({
            'status': new FormControl(null, Validators.compose([Validators.required])),
            'enteredDate': new FormControl(null, Validators.compose([Validators.required])),
            'amount': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
            'transactionNumber': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
            'comments': new FormControl(null, Validators.compose([Validators.required])),

        });
    }

    refundForm: FormGroup;
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



    dateData: any = '';
    dispatchId; orderId; dispatchDate;
    d = new Date();
    ngOnInit() {
        this.refundObj.status = 'Refunded'
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.dispatchId = params['id'];
                this.orderId = params['orderId'];
                this.dispatchDate = params['date1'];
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
    }
    pricePattern = '^[0-9]+([.][0-9]+)?$';
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    submitted = false;
    refundSuccess = 'Refund details added successfully';
    refundFail: any;
    success; fail; status;
    addRefundDetails() {
        this.submitted = false;
        if (this.refundForm.valid) {
            if (this.refundObj.status == 'Refunded') {
                this.status = true
            }
            let date = this.refundObj.enteredDate.date.year + '-' + this.twoDigit(this.refundObj.enteredDate.date.month) + '-' + this.twoDigit(this.refundObj.enteredDate.date.day)
            let postObj = {
                "refundedDate": date,
                "amount": '' + this.refundObj.amount,
                "transactionNumber": this.refundObj.transactionNumber,
                "refundStatus": this.status,
                "comments": this.refundObj.comments,
                "dispatchId": {
                    "id": parseInt(this.dispatchId)
                }
            };
            this.returnService.addRefundDetails(postObj).subscribe(data => {
                if (data.error == null) {
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                        this.router.navigate(['./returns'])
                    }, 3000)
                } else {
                    this.refundFail = data.error.message;
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



