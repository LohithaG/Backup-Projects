import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray, FormsModule } from '@angular/forms';
import { POService } from '../po.service';
import { endponitConfig } from '../../../environments/endpoint';

declare var SockJS;
declare var Stomp;
declare var $;
import * as moment from 'moment';
import { IMyOptions, IMyDateModel } from 'mydatepicker';

@Component({
    selector: 'po-update',
    templateUrl: './po-update.component.html'
})

export class UpdatePOComponent {



    poDetails: any = { items: [] };
    storageDetails: any = {};
    poForm: FormGroup;
    submitted = false;
    comments;
    vendorDetails: any = {};
    //   public poDate: Object;
    public selectedPODate: Object;
    dateFormat = 'dd-mm-yyyy'
    private expirydatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: this.dateFormat,
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };

    constructor(
        private readonly poService: POService,
        private readonly route: ActivatedRoute,
        private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly cdr: ChangeDetectorRef) {
    }
    poDate2
    addStatus;
    ngOnInit() {
        this.storageDetails = JSON.parse(localStorage.getItem('poObj'))
        this.addStatus = this.storageDetails.productDetails[0].poVendorId.enable;

        this.expirydatePickerOptions = {
            dateFormat: this.dateFormat,
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        }

        this.poForm = new FormGroup({
            'poInfo': new FormGroup({
                'vendorName': new FormControl({ value: '', disabled: true }, Validators.required),
                'purchageNumber': new FormControl({ value: '', disabled: true }),
            }),
            'items': new FormArray([])
        });
        this.poForm.get('poInfo.vendorName').setValue(this.storageDetails.vendorname);
        this.poForm.get('poInfo.purchageNumber').setValue(this.storageDetails.ponumber);
        this.comments = this.storageDetails.productDetails[0].poVendorId.comments


        this.selectedPODate = this.storageDetails.purchaseOrderDate;

        for (const i of this.storageDetails.productDetails) {
            this.itemsAddStatus = true;
            (this.poForm.get('items') as FormArray).push(this.createItem(i));
        }

    }

    onDateChanged(event: IMyDateModel) {
        this.expirydatePickerOptions = {
            // other options...
            dateFormat: this.dateFormat,
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };
    }

    createItem(obj) {
        if (obj) {
            return new FormGroup({
                'itemName': new FormControl(obj.itemName, Validators.required),
                'quantity': new FormControl(obj.quantity, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
                'skuCode': new FormControl(obj.skuCode, Validators.compose([Validators.required, Validators.maxLength(30)])),
            })
        } else {
            return new FormGroup({
                'itemName': new FormControl(obj.itemName, Validators.required),
                'quantity': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
                'skuCode': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
            })
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
                    formObj.controls[index].get('itemName').setValue(data.data.inventory.productName)
                    // formObj.controls[index].get('itemName').setValue(data.data.productName)
                } else {
                    //this.errorAlertMessages = "No Details Added for this SKU";
                    this.errorAlertMessages =data.error.message;
                    setTimeout(() => {
                        this.errorAlertMessages = '';
                        formObj.controls[index].get('skuCode').setValue('')
                    }, 1000)
                }
            })
        }
    }

    itemDetails: any = [];
    itemsAddStatus = false;
    onAddItem() {
        this.poDetails.items.push({ skuCode: '', itemName: '', quantity: '' })
        this.itemsAddStatus = true;
        (this.poForm.get('items') as FormArray).push(this.createItem({}));
    }

    onDeleteItem(index) {
        (this.poForm.get('items') as FormArray).removeAt(index);

    }

    successAlertMessages: any;
    errorAlertMessages: any;
    updateVendorDetails() {
        this.submitted = false;
        if (this.poForm.valid) {
            if (this.itemsAddStatus && this.poForm.value.items.length) {
                this.poService.deleteVendorItemList(this.storageDetails.productDetails[0].poVendorId.id).subscribe(
                    (data: any) => {
                        if (data.error == null) {
                            const poItemsObj = {
                                "vendorDetails": this.poForm.value.items,
                                "poVendorId": { "id": this.storageDetails.productDetails[0].poVendorId.id }
                            }
                            this.poService.addpoItemDetails(poItemsObj).subscribe((poItemsdata: any) => {
                                if (poItemsdata.error == null) {
                                    const poItemsupdateObj = {
                                        "id": this.storageDetails.productDetails[0].poVendorId.id,
                                        "vendorId": {
                                            "id": this.storageDetails.productDetails[0].poVendorId.vendorId.id
                                        },
                                        "purchaseOrderNumber": this.storageDetails.ponumber,
                                        "comments": this.comments
                                    }
                                    this.poService.updatepoItemDetails(poItemsupdateObj, this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
                                        if (data.error == null) {
                                            this.successAlertMessages = "P.O Updated Successfully";
                                            setTimeout(() => {
                                                this.successAlertMessages = ''
                                                this.gotoHomePage();
                                            }, 3000)
                                        }
                                    })
                                } else {
                                    this.errorAlertMessages = poItemsdata.error.message;
                                    setTimeout(() => {
                                        this.errorAlertMessages = ''
                                    }, 3000)
                                }
                            })
                        } else {
                            this.errorAlertMessages = data.error.message;
                            setTimeout(() => {
                                this.errorAlertMessages = '';
                            }, 5000);
                        }
                    }
                )
            } else {
                this.errorAlertMessages = 'please add atleast one item'
                setTimeout(() => {
                    this.errorAlertMessages = ''
                }, 3000)
            }
        } else {
            this.submitted = true;
        }
    }


    gotoHomePage() {
        this.router.navigate(['/purchaseorder'])
    }


}



