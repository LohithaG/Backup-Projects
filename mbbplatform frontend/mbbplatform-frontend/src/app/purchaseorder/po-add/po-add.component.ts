import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';

import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray, FormsModule } from '@angular/forms';
import { POService } from '../po.service';
import { endponitConfig } from '../../../environments/endpoint';

import { IMyOptions, IMyDateModel } from 'mydatepicker';


declare var SockJS;
declare var Stomp;
@FadeInTop()

@Component({
    selector: 'po-add',
    templateUrl: './po-add.component.html'
})

export class AddPOComponent {

    poForm: FormGroup;
    poDetails: any;
    submitted = false;
    vendorDetails: any = {};
    vendorsNameList: any = [];
    successAlertMessages: any;
    errorAlertMessages: any;
    public poDate: Date;
    public siDate:Date;
    comments;
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
    private readonly model: Object = { date: { year: 2018, month: 10, day: 9 } };
    private readonly dateOfBirth: Date;

    constructor(
        private readonly poService: POService,
        private readonly route: ActivatedRoute,
        private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.poForm = new FormGroup({
            'poInfo': new FormGroup({
                'vendorName': new FormControl(null, Validators.required),
                'purchageNumber': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
            }),
            'items': new FormArray([])
        });
        this.getAllVendors(); 

        this.datePickerOptions = {
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
            showClearDateBtn: false,
            dateFormat: this.dateFormat,
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
            disableSince: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 }
        }
    }


    onDateChanged(event: IMyDateModel) {

        this.datePickerOptions = {
            dateFormat: this.dateFormat,
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };

    }

    getAllVendors() {
        this.poService.getAllVendors().subscribe((data) => {
            if (data.data != []) {
                this.vendorsNameList = data.data;
                this.onAddItem()
            } else {
                alert(data.error.message)
            }
        })
    }


    createItem() {
        return new FormGroup({
            'itemName': new FormControl(null, Validators.required),
            'quantity': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
            'skuCode': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
        })
    }



    itemDetails: any = [];
    itemsAddStatus = false;
    onAddItem() {
        this.itemsAddStatus = true;
        (this.poForm.get('items') as FormArray).push(this.createItem());
    }

    onDeleteItem(index) {
        (this.poForm.get('items') as FormArray).removeAt(index);
        if (this.poForm.get('items').value.length === 0) {
            this.itemsAddStatus = false;
        }
    }

    skuCodeErrorMsg;
    getProductName(index) {
        let skuCheckingStatus = true
        const formObj: any = this.poForm.get('items') as FormArray;
        formObj.controls[index].get('itemName').setValue('')
        if (index) {
            for (let i = 0; i < this.poForm.get('items').value.length; i++) {
                if (this.poForm.value.items[index].skuCode === this.poForm.value.items[i].skuCode && i !== index) {
                    skuCheckingStatus = false;
                    this.errorAlertMessages = "SKU Already exists";
                    setTimeout(() => {
                        this.errorAlertMessages = '';
                        formObj.controls[index].get('skuCode').setValue('')
                    }, 1000)
                }
            }
        }

        if (skuCheckingStatus && this.poForm.value.items[index].skuCode) {
            this.poService.getSKUdetails(this.poForm.value.items[index].skuCode).subscribe((data) => {
                if (data.data != null) {
                    skuCheckingStatus = false;
                    formObj.controls[index].get('itemName').setValue(data.data.inventory.productName)
                    // formObj.controls[index].get('itemName').setValue('data.data.productName')
                } else {
                    this.errorAlertMessages = data.error.message;
                    setTimeout(() => {
                        this.errorAlertMessages = '';
                        formObj.controls[index].get('skuCode').setValue('')
                    }, 1000)
                }
            })
        }




    }
    // getProductName(index) {
    //     let formObj: any = <FormArray>this.poForm.get('items');
    //     formObj.controls[index].get('itemName').setValue('')
    //     this.poService.getSKUdetails(this.poForm.value.items[index].skuCode).subscribe((data) => {
    //         if (data.data != null) {
    //             formObj.controls[index].get('itemName').setValue(data.data.productName)
    //         }
    //     })
    // }

    addPo() {
        this.submitted = false;
        if (this.poForm.valid && this.poDate) {
            if (this.itemsAddStatus) {
                const poObj = {
                    "vendorId": {
                        "id": this.poForm.value.poInfo.vendorName,
                    },
                    "purchaseOrderNumber": this.poForm.value.poInfo.purchageNumber,
                    "commercialInvoiceDate": this.poDate["jsdate"],
                    "comments": this.comments
                }
                this.addPoSubMethod(poObj)

            } else {
                alert('please add item')
            }
        } else {
            this.submitted = true;
        }
    }

    addPoSubMethod(poObj) {
        this.poService.addPoDetails(poObj).subscribe((podata: any) => {
            if (podata.error == null) {
                const poItemsObj = {
                    "vendorDetails": this.poForm.value.items,
                    "poVendorId": { "id": podata.data.id }
                }
                this.poService.addpoItemDetails(poItemsObj).subscribe((poItemsdata: any) => {
                    if (poItemsdata.error == null) {
                        this.successAlertMessages = "P.O Added Successfully";
                        setTimeout(() => {
                            this.successAlertMessages = ''
                            this.gotoHomePage();
                        }, 3000)
                    } else {
                        this.errorAlertMessages = poItemsdata.error.message;
                        setTimeout(() => {
                            this.errorAlertMessages = ''
                        }, 3000)
                    }
                })
            } else {
                this.errorAlertMessages = podata.error.message;
                setTimeout(() => {
                    this.errorAlertMessages = ''
                }, 3000)
            }
        })
    }


    // HomePage
    gotoHomePage() {
        this.router.navigate(['/purchaseorder'])
    }
}