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
    selector: 'po-details',
    templateUrl: './details.component.html',
    styles: [`
    .table>tbody>tr>td
    {
        line-height: 1.42857143;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
}
    `]
})

export class DetailsComponent implements OnInit {


    storageDetails: any = {};
    bankDetails: any = {}

    poForm: FormGroup;
    poDetails: any = { items: [] };
    submitted = false;
    vendorDetails: any = {};
    vendorsNameList: any = [];
    successAlertMessages: any;
    errorAlertMessages: any;
    public poDate: Date;
    // comments:any="";
    poId;
    totalprice;
    comments;



    otherChargesDetails: any = { items: [] };
    otherCharges: any = {}
    OtherChargesForm: FormGroup;
    formValidate = false;

    skupoDetails: any = { items: [] };
    priceData: any = {}
    SkuForm: FormGroup;
    formskuValidate = false;


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
        // this.getAllPoDetails()
        this.route.params.forEach((params: Params) => {
            this.poId = params['poId']
        })
    }

    ngOnInit() {
        this.storageDetails = JSON.parse(localStorage.getItem('poObj'))

        this.poForm = new FormGroup({
            'poInfo': new FormGroup({
                'purchageNumber': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
            }),
            'items': new FormArray([])
        });
        this.poForm.get('poInfo.purchageNumber').setValue(this.storageDetails.ponumber);
        this.getAllBankDatails()

        this.getOtherChargesDetails()
        this.OtherChargesForm = new FormGroup({
            'items': new FormArray([])
        });

        this.getPriceDetailsPoVendorId()

        this.SkuForm = new FormGroup({
            'items': new FormArray([])
        });
        this.datePickerOptions = {
            showClearDateBtn: false,
            openSelectorOnInputClick: true,
            inline: false,
            editableDateField: false,
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


    getPriceDetailsPoVendorId() {
        this.poService.getPriceDetailsPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
            if (data.error == null) {
                this.priceData = data.data
                this.getCurrencyDetails()

                for (const i of this.priceData) {
                    this.itemsskuAddStatus = true;
                    (this.SkuForm.get('items') as FormArray).push(this.createPriceItem(i));
                }
            }
            else {
                alert(data.error.message)
            }
        })
    }

    getAllBankDatails() {
        this.poService.getBankDetailsPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
            if (data.data !== []) {
                this.bankDetails = data.data
                if (this.bankDetails.length) {
                    for (const i of this.bankDetails) {
                        this.itemsAddStatus = true;
                        (this.poForm.get('items') as FormArray).push(this.createItem(i));
                        this.dateData.push(i.enteredDate)
                        this.comments=i.comments;
                    }
                }
                else {
                    this.onAddItem()
                }
            }
            else {
                alert(data.error.message)
            }
        })
    }


    getOtherChargesDetails() {
        this.poService.getOtherChargesDetailsPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
            if (data.error == null) {
                this.otherCharges = data.data
                if (this.otherCharges.length) {
                    for (const i of this.otherCharges) {
                        this.itemsskuAddStatus = true;
                        (this.OtherChargesForm.get('items') as FormArray).push(this.createskuItem(i));
                    }
                }
                else {
                    this.onAddSkuItem();
                }
            }
            else {
                alert(data.error.message)
            }
        })
    }

    getTotal(i) {
        const controlArray: any = this.OtherChargesForm.get('items') as FormArray;
        let sum = 0;
        sum += this.OtherChargesForm.value.items[i].bankCharges +
            this.OtherChargesForm.value.items[i].customDuty +
            this.OtherChargesForm.value.items[i].clearingCharges +
            this.OtherChargesForm.value.items[i].transportation +
            this.OtherChargesForm.value.items[i].carriage +
            this.OtherChargesForm.value.items[i].otherCharges

        controlArray.controls[i].get('totalAmount').setValue(sum)

    }

    itemskuDetails: any = [];
    itemsskuAddStatus = false;


    pricePattern = '^[0-9]+([.][0-9]+)?$'
    createItem(obj) {
        if (obj) {
            return new FormGroup({
                'bankName': new FormControl(obj.bankName, Validators.required),
                'transactionNumber': new FormControl(obj.transactionNumber, [Validators.required, Validators.maxLength(50)]),
                'amount': new FormControl(obj.amount, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'enteredDate': new FormControl(obj.enteredDate, Validators.required),
               // 'comments':new FormControl(obj.comments,Validators.required)
            })
        }
        else {
            return new FormGroup({
                'bankName': new FormControl(null, Validators.required),
                'transactionNumber': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
                'amount': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'enteredDate': new FormControl(null, Validators.compose([Validators.required])),
               // 'comments':new FormControl(null,Validators.required)
            })
        }
    }

    createskuItem(obj) {
        if (obj) {
            return new FormGroup({
                'bankCharges': new FormControl(obj.bankCharges, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'customDuty': new FormControl(obj.customDuty, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'clearingCharges': new FormControl(obj.clearingCharges, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'transportation': new FormControl(obj.transportation, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'carriage': new FormControl(obj.carriageInwardOrOutward, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'otherCharges': new FormControl(obj.otherCharges, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'totalAmount': new FormControl(obj.totalAmount, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
            })
        } else {
            return new FormGroup({
                'bankCharges': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'customDuty': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'clearingCharges': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'transportation': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'carriage': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'otherCharges': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                'totalAmount': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),

            })
        }
    }

    getTotalValue() {
        let sum = 0;
        for (const i of this.poForm.value.items) {
            sum += i.amount
        }
        return sum.toFixed(2);
    }


    itemDetails: any = [];
    itemsAddStatus = false;
    onAddItem() {
        this.poDetails.items.push({ bankName: '', transactionNumber: '', amount: '', enteredDate: null })
        this.itemsAddStatus = true;
        (this.poForm.get('items') as FormArray).push(this.createItem({}));
    }

    // getAllPoDetails() {
    //     this.poService.getAllPoDetails().subscribe((data: any) => {
    //         if (data.error == null) {
    //             let details:any = data.data
    //             this.storageDetails = details.find(status => this.poId = status.ponumber)
    //             console.log(this.storageDetails)
    //         }

    //     })
    // }

    onDeleteItem(index) {
        (this.poForm.get('items') as FormArray).removeAt(index);
        this.dateData.splice(index, 1)
        if (this.poForm.get('items').value.length === 0) {
            this.itemsAddStatus = false;
        }
    }
    dateData: any = []

    bankDetailsStatus = 'pending'

    onAddSkuItem() {
        this.otherChargesDetails.items.push({ bankCharges: '', customDuty: '', clearingCharges: '', transportation: '', carriage: '', otherCharges: '' })
        this.itemsskuAddStatus = true;
        (this.OtherChargesForm.get('items') as FormArray).push(this.createskuItem({}));
    }

    onDeleteskuItem(index) {
        (this.OtherChargesForm.get('items') as FormArray).removeAt(index);
        if (this.OtherChargesForm.get('items').value.length === 0) {
            this.itemsskuAddStatus = false;
        }

    }
    getTotalOtherChargesValue() {
        let sum = 0;
        for (const i of this.OtherChargesForm.value.items) {
            sum += i.totalAmount
        }
        return sum.toFixed(2);
    }
    createPriceItem(obj) {
        if (obj) {
            return new FormGroup({
                'itemName': new FormControl(obj.itemName, Validators.required),
                'quantity': new FormControl(obj.quantity, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
                'skuCode': new FormControl(obj.skuCode, Validators.compose([Validators.required, Validators.maxLength(30)])),
                'price': new FormControl(obj.price, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                // 'comments':new FormControl(obj.comments,Validators.compose([Validators.required]))
            })
        } else {
            return new FormGroup({
                'itemName': new FormControl(null, Validators.required),
                'quantity': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,4})$')]),
                'skuCode': new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(30)])),
                'price': new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pricePattern)])),
                // 'comments':new FormControl(null,Validators.compose([Validators.required]))

            })
        }
    }
    getProductName(index) {
        const formObj: any = this.SkuForm.get('items') as FormArray;
        formObj.controls[index].get('itemName').setValue('')
        this.poService.getSKUdetails(this.SkuForm.value.items[index].skuCode).subscribe((data) => {
            if (data.data != null) {
                formObj.controls[index].get('itemName').setValue(data.data.productName)
            }
        })
    }
    loaddata = false;
    CurrencyTypes: any;
    CurrencyId;
    getCurrencyDetails() {
        this.poService.getAllDetails().subscribe((data: any) => {
            if (data.error == null) {
                this.CurrencyTypes = data.data;
                if (this.priceData[0].currencyType == null) {
                    const condObj: any = this.CurrencyTypes.find(status => 1 === status.id)
                    this.CurrencyId = condObj.id;
                }
                else {
                    const condObj: any = this.CurrencyTypes.find(status => this.priceData[0].currencyType.id === status.id)
                    this.CurrencyId = condObj.id;
                }
            }
            else {
                alert(data.error.message)
            }

        })
    }

    getCurrencyChange() {
        this.loaddata = false;
    }
    itemspriceAddStatus = true;
    onAddPriceItem() {
        this.skupoDetails.items.push({ skuCode: '', itemName: '', quantity: '' })
        this.itemspriceAddStatus = true;
        (this.SkuForm.get('items') as FormArray).push(this.createPriceItem({}));
    }

    onDeletePriceItem(index) {
        (this.SkuForm.get('items') as FormArray).removeAt(index);
        if (this.SkuForm.get('items').value.length === 0) {
            this.itemspriceAddStatus = false;
        }

    }
    loader = false
    detailsStatus = "pending"
    pricesuccessAlertMessages: any;
    priceerrorAlertMessages: any;

    errorOtherChargesAlertMessages: any
    skusuccessAlertMessages: any;
    skuerrorAlertMessages: any;
    otherChargesStatus = "pending"
    showPriceDetails = false
    AddOtherChargesDetails() {
        this.formValidate = false;
        if (this.OtherChargesForm.valid) {
            if (this.itemsskuAddStatus) {
                this.showPriceDetails = true
            }
            else {
                this.errorOtherChargesAlertMessages = "please add otherCharges Details";
                setTimeout(() => {
                    this.errorOtherChargesAlertMessages = ''
                }, 3000)
            }
        } else {
            this.formValidate = true;
        }
    }
    showOtherCharges = false;
    addBankDetails() {
        this.submitted = false;
        if (this.poForm.valid) {
            if (this.itemsAddStatus) {
                this.showOtherCharges = true
            }
            else {
                this.errorAlertMessages = "please add Bank Details";
                setTimeout(() => {
                    this.errorAlertMessages = ''
                }, 3000)
            }
        }
        else {
            this.submitted = true;
        }
    }
    loaderbtn = false
    finalSubmit() {
        this.submitted = false;
        this.formValidate = false;
        this.formskuValidate = false;
        const postObjPriceArray: any = []
        const postObjOtherChargesArray: any = {
            otherCharges: [], poVendorId: ''
        }
        const postObjBankArray: any = {
            bankDetails: [], poVendorId: ''
        }
        if (this.poForm.valid) {
            if (this.itemsAddStatus) {
                // alert("Hi")

                for (let i = 0; i < this.poForm.value.items.length; i++) {
                    postObjBankArray.bankDetails.push({
                        bankName: this.poForm.value.items[i].bankName,
                        transactionNumber: this.poForm.value.items[i].transactionNumber,
                        amount: this.poForm.value.items[i].amount,
                        enteredDate: this.poForm.value.items[i].enteredDate.jsdate,
                        comments:this.comments
                    })

                }
                postObjBankArray.poVendorId = { id: this.storageDetails.productDetails[0].poVendorId.id }
                if (this.OtherChargesForm.valid) {
                    if (this.itemsskuAddStatus) {
                        for (let i = 0; i < this.OtherChargesForm.value.items.length; i++) {
                            postObjOtherChargesArray.otherCharges.push({
                                bankCharges: this.OtherChargesForm.value.items[i].bankCharges,
                                customDuty: this.OtherChargesForm.value.items[i].customDuty,
                                clearingCharges: this.OtherChargesForm.value.items[i].clearingCharges,
                                transportation: this.OtherChargesForm.value.items[i].transportation,
                                carriageInwardOrOutward: this.OtherChargesForm.value.items[i].carriage,
                                otherCharges: this.OtherChargesForm.value.items[i].otherCharges,
                                totalAmount: this.OtherChargesForm.value.items[i].totalAmount
                            })
                        }
                        postObjOtherChargesArray.poVendorId = { id: this.storageDetails.productDetails[0].poVendorId.id }
                        if (this.SkuForm.valid) {
                            if (this.itemspriceAddStatus) {
                                for (let i = 0; i < this.SkuForm.value.items.length; i++) {
                                    postObjPriceArray.push({
                                        skuCode: this.SkuForm.value.items[i].skuCode,
                                        quantity: this.SkuForm.value.items[i].quantity,
                                        price: this.SkuForm.value.items[i].price,
                                    },
                                        // { comments: this.SkuForm.value.comments }

                                    )
                                }
                                this.loaderbtn = true
                                this.poService.deleteBankDetailsPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
                                    if (data.error == null) {
                                        this.poService.addpoBankDetails(postObjBankArray).subscribe((data: any) => {
                                            if (data.error == null) {
                                                this.poService.deleteOtherChargesPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
                                                    if (data.error == null) {
                                                        this.poService.addOtherChargesDetails(postObjOtherChargesArray).subscribe((data: any) => {
                                                            if (data.error == null) {
                                                                this.poService.deletePriceDetailsPoVendorId(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
                                                                    if (data.error == null) {
                                                                        this.poService.addPriceDetails(this.CurrencyId, this.storageDetails.productDetails[0].poVendorId.id, postObjPriceArray).subscribe((data: any) => {
                                                                            if (data.error == null) {
                                                                                this.pricesuccessAlertMessages = "Details Added Successfully";
                                                                                this.loaderbtn = false
                                                                                setTimeout(() => {
                                                                                    this.pricesuccessAlertMessages = ''
                                                                                    this.loader = true
                                                                                    this.loaddata = true
                                                                                    // this.priceId = 1
                                                                                }, 1000)
                                                                                this.poService.getAllPurchasePoDetails(this.storageDetails.productDetails[0].poVendorId.id).subscribe((data: any) => {
                                                                                    if (data.error == null) {
                                                                                        this.poDetails = data.data
                                                                                    }
                                                                                    else {
                                                                                        alert(data.error.message)
                                                                                    }
                                                                                })
                                                                            }
                                                                            else {
                                                                                this.loaderbtn = false
                                                                                this.priceerrorAlertMessages = data.error.message;
                                                                                this.detailsStatus = "complete"

                                                                                setTimeout(() => {
                                                                                    this.priceerrorAlertMessages = ''
                                                                                }, 3000)
                                                                            }
                                                                        })
                                                                    }
                                                                    else {
                                                                        alert(data.error.message)
                                                                    }

                                                                })
                                                            }
                                                            else {
                                                                this.errorAlertMessages = data.error.message;
                                                                setTimeout(() => {
                                                                    this.errorAlertMessages = ''
                                                                }, 3000)
                                                            }
                                                        })
                                                    }
                                                    else {
                                                        alert(data.error.message)
                                                    }

                                                })
                                            }
                                            else {
                                                this.errorAlertMessages = data.error.message;
                                                setTimeout(() => {
                                                    this.errorAlertMessages = ''
                                                }, 3000)
                                            }
                                        })
                                    }
                                    else {
                                        alert(data.error.message)
                                    }
                                })
                            }
                            else {
                                alert("please add price Details")
                            }
                        }
                        else {
                            this.formskuValidate = true;
                        }
                    }
                    else {
                        this.errorOtherChargesAlertMessages = "please add otherCharges Details";
                        setTimeout(() => {
                            this.errorOtherChargesAlertMessages = ''
                        }, 3000)
                    }
                }
                else {
                    this.formValidate = true;
                }
            }
            else {
                this.errorAlertMessages = "please add Bank Details";
                setTimeout(() => {
                    this.errorAlertMessages = ''
                }, 3000)
            }
        }
        else {
            this.submitted = true;
        }
    }

    // HomePage
    gotoHomePage() {
        this.router.navigate(['/purchaseorder'])
    }
























}



