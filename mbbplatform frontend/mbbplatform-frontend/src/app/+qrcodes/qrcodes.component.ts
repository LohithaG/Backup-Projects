import { Component, ViewChild, OnInit } from '@angular/core';
import { QRCodesService } from './qrcodes.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-qrcodes',
    templateUrl: './qrcodes.component.html',
})

export class QrCodesComponent implements OnInit {

    public retrieveForm: FormGroup;

    public generateSKUForm: FormGroup;
    public reprintForm: FormGroup
    formValidate: boolean;
    reprintFormValidate: boolean

    public skucode: AbstractControl;
    public noofProducts: AbstractControl;
    public qrcode: AbstractControl
    public printqrcode: AbstractControl
    skuCodeList: any=[];

    generateObj: any = {};
    generateErrorMsg: any;//([0-9]{3})+?([1-9]{1}?-)+?([0-9]{6})+?([1-9]{1})
    constructor(
        public _qrcodesService: QRCodesService,
        private readonly fb: FormBuilder,
    ) {
        this.generateSKUForm = this.fb.group({
            SKUCODE: [null, [Validators.required]],
            NO_OF_PROD: [null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]],
        })
        this.skucode = this.generateSKUForm.controls['SKUCODE'];
        this.noofProducts = this.generateSKUForm.controls['NO_OF_PROD'];

        this.reprintForm = this.fb.group({
            QRCODE: [null, [Validators.required, Validators.pattern('')]],
        })
        this.qrcode = this.reprintForm.controls['QRCODE']

        this.retrieveForm = this.fb.group({
            QRCODEE: [null, [Validators.required]],
        })
        this.printqrcode = this.retrieveForm.controls['QRCODEE']



    }
    ngOnInit() {
        this.getAllSkuCodes()

    }

    getAllSkuCodes() {
        this._qrcodesService.getAllSkuCodes().subscribe(data => {
            const resData: any = data;
            this.skuCodeList = resData.data;
        })
    }

    GenerateQrCodes() {
        if (this.generateSKUForm.valid) {
            this._qrcodesService.GenerateQRcodes(this.generateObj.sku, this.generateObj.productsCount).subscribe((data: any) => {
                if (data.data != null) {
                    this.generateErrorMsg = 'QR Codes generated successfully';
                    this.cleartText()
                    this.generateSKUForm.reset()
                    this.formValidate = false
                } else {
                    this.generateErrorMsg = "Failed to Generate QR Codes";
                    this.cleartText()
                }
            })
        } else {
            this.formValidate = true
        }
    }

    printformValidate: boolean

    /**
     * Retrieve QRcodes
     */
    reprintQRCodeList: any = [];
    retrieveObj: any = {};
    displayMsg: any = '';
    RetrieveQRcodes() {
        this.reprintQRCodeList = [];
        if (this.retrieveForm.valid) {
            if (this.retrieveObj.sku) {
                this._qrcodesService.retrieveQrCodes(this.retrieveObj.sku).subscribe((data) => {
                    const retriveRes: any = data;
                    if (retriveRes.data != null) {
                        if (retriveRes.data.length === 0) {
                            this.displayMsg = 'No QR Codes Available to Reprint'
                        } else {
                            this.displayMsg = 'QR Codes retrieved successfully';
                        }
                        this.reprintQRCodeList = retriveRes.data;
                        this.cleartText()
                    } else {
                        this.displayMsg = 'No QR Codes Available to Reprint'
                    }
                })
            }
        }
        else {
            this.printformValidate = true
        }
    }

    reprint() {
        if (this.reprintForm.valid) {
            console.log(this.qrcode.value)
            //this.printQRrcode(this.qrcode.value)
            this.reprintForm.reset()
            this.reprintFormValidate = false
        }
        else {
            this.reprintFormValidate = true
        }
    }
    RePrintAllQRcodes() {
        this._qrcodesService.printQrcode(this.reprintQRCodeList).subscribe(data => {
            this.displayMsg = 'QRcode is successfully sent to printer'
            this.cleartText()
            this.reprintQRCodeList=[]

        })
    }

    printQRrcode(barcode) {
        const array = [];
        array.push(barcode);
        this._qrcodesService.printQrcode(array).subscribe(data => {
            this.displayMsg = 'QRcode is successfully sent to printer';
            this.cleartText()
        })
    }
    filteredSkusList: any = [];
    skuSelection = false;
    getSKUSbasedonSearch() {
        this.skuSelection = false;
        this.filteredSkusList = [];
        if (this.generateObj.sku) {
            this.skuCodeList.find((data: any) => {
                if ((data.skuCode + "").includes(this.generateObj.sku) || (data.productName.toLowerCase()).includes(this.generateObj.sku.toLowerCase())) {
                    this.filteredSkusList.push(data)
                }
            })
        }
    }

    selectSKU(obj) {
        this.skuSelection = true;
        this.generateObj.sku = obj.skuCode;
        this.filteredSkusList = [];
    }




    cleartText() {
        setTimeout(() => {
            this.generateErrorMsg = ''
            this.displayMsg = '';
        }, 3000);
    }

}

