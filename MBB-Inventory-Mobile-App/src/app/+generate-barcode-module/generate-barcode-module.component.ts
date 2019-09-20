import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product-services.service';
import { setTimeout } from 'timers';
import { Router } from '@angular/router';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-generate-barcode-module',
    templateUrl: './generate-barcode-module.component.html',
    styleUrls: ['./generate-barcode-module.component.css']
})
export class GenerateBarcodeModuleComponent implements OnInit {

    @ViewChild('addProductAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    private skuCodeList;
    public complexForm: FormGroup;
    public reprintForm: FormGroup;
    public submitted;

    successResponse;
    resultQrcode;
    constructor(
        private productService: ProductService,
        private fb: FormBuilder,
        private router: Router,
        private barcode: barcodeScanner) {

    }


    ngOnInit() {
        this.complexForm = this.fb.group({
            skuId: [null, [Validators.required]],
            productsCount: [null, [Validators.required, Validators.pattern('^([0-9]|[1-9][0-9]|100)$')]]
        })
        this.reprintForm = this.fb.group({
            skuId: [null, [Validators.required]],
        })
        this.getAllSkuCodes();
    }

    /**
     * get skuCodes from service call
     */
    getAllSkuCodes() {
        this.productService.getAllSkuCodes().subscribe(data => {
            this.skuCodeList = data.data;
        })
    }

    /**
     * Barcodes generation
     */
    GenerateBarcode() {
        this.submitted = true;
        if (this.complexForm.valid) {
            this.productService.GenerateBarcodes(this.complexForm.value.skuId.skuCode, this.complexForm.value.productsCount).subscribe(data => {
                if (data.data.length) {
                    this.complexForm.reset();
                    this.successResponse = 'Barcodes Generated Successfully';
                    this.submitted = false;
                    this.showPopup.show();
                } else {
                    this.successResponse = 'Failed to Generate barcodes Generated';
                    this.showPopup.show();
                }
            })
        }
    }

    /**
     * Reprint the barcodes
     */
    reprintBarcodeList: any = [];
    printSubmit;
    ReprintBarcodes() {
        this.reprintBarcodeList = [];
        this.printSubmit = true;
        if (this.reprintForm.valid) {
            this.productService.reprintBarcodesList(this.reprintForm.value.skuId.skuCode).subscribe(data => {
                if (data.data != null) {
                    if (data.data.length) {
                        this.reprintForm.reset();
                        this.successResponse = 'Retrive Barcodes Successfully';
                        this.printSubmit = false;
                        this.showPopup.show();
                        this.reprintBarcodeList = data.data;
                    } else {
                        this.successResponse = 'No Barcodes Available to Reprint';
                        this.reprintForm.reset();
                        this.showPopup.show();
                        this.printSubmit = false;
                    }
                } else {
                    this.successResponse = data.error.message
                    this.showPopup.show();
                }
            })
        }
    }

    printBarcode(barcode) {
        this.productService.printBarcode(barcode).subscribe(data => {
            this.successResponse = 'QRcode is successfully sent to printer';
            this.showPopup.show();
        })
    }

    Okay() {
        this.showPopup.hide();
    }

}
