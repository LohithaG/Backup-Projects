import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../../product-services.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import { Location, PlatformLocation } from '@angular/common';
import { barcodeScanner } from '../../+barcode-scanner/barcode-scanner.service';
@Component({
    selector: 'dispatch-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})

export class dispatcherProductViewComponent {

    @ViewChild('dispatchAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    successResponse;
    public dispatchForm: FormGroup;
    public productData: any = {
        inventoryId: {},
    };
    checkListObj: any = {
        checkListArray: []
    }

    constructor(
        private router: Router,
        private _productService: ProductService,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _location: Location,
        public platformLocation: PlatformLocation,
        public _barcodeScanner: barcodeScanner
    ) {

    }

    ngOnInit() {
        this.platformLocation.onPopState(() => {
            this.router.navigate(['/dispatcher/dispatcher-module']);
        });

        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.getProductById(params['id']);
            } else {
                this.successResponse = 'unable to get product details';
                this.submit = true
                this.showPopup.show();
            }
        })
    }

    checkList: any = [];
    getProductById(id) {
        this._productService.checkingBarcode(id).subscribe((data) => {
            if (data.data != null) {
                this.productData = data.data;
                this.checkListObj.inventoryItemId = {
                    id: data.data.id
                }
                this._productService.getCheckListBySKu(data.data.inventoryId.skuCode).subscribe((data) => {
                    if (data.data != null) {
                        this.checkList = data.data;
                        this.onChange()
                    }
                })
            } else {
                //this.successResponse = data.error.message;
                this.successResponse = "Invoice already generated with this qrcode"
                this.submit = true
                this.showPopup.show();
            }
        })
    }



    checkListDefect;
    onChange() {
        this.checkListDefect = false;
        for (let i = 0; i < this.checkList.length; i++) {
            if (!this.checkList[i].conditionCheck) {
                this.checkListDefect = true;
                break;
            }
        }
    }

    resultQrcode;
    getInvoiceBybarcode() {
        this._barcodeScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.productData.invoiceId = this.resultQrcode.text
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }


    invoiceValidation;
    addProduct() {

        for (let i = 0; i < this.checkList.length; i++) {
            this.checkListObj.checkListArray.push({
                "accessoriesId": this.checkList[i].id,
                "accessoryCondition": this.checkList[i].conditionCheck
            })
        }

        if (this.productData.invoiceId != '' && this.productData.invoiceId !== undefined) {
            var obj = {
               // "id": this.productData.inventoryId.skuCode,
                "barcode": this.productData.barcode,
                "invoiceId": this.productData.invoiceId,
                "createdTime": new Date(),
                "comment": this.productData.comment
            }
            this._productService.addDispatch(obj).subscribe((data) => {
                if (data.error == null) {
                    if (this.checkList.length > 0) {
                        this._productService.addCheckList(this.checkListObj).subscribe((data) => {
                            if (data.error == null) {
                                this.successResponse = 'Invoice & CheckList added successfully ';
                                this.submit = true
                                this.showPopup.show();
                            } else {
                                this.successResponse = data.error.message;
                                this.submit = true
                                this.showPopup.show();
                            }
                        })
                    } else {
                        this.successResponse = 'Invoice generated successfully';
                        this.submit = true
                        this.showPopup.show();
                    }
                } else {
                    this.successResponse = data.error.message;
                    this.submit = true
                    this.showPopup.show();
                }
            })
        } else {
            this.invoiceValidation = 'please enter invoice number';
            setTimeout(() => {
                this.invoiceValidation = '';
            }, 3000);
        }
    }

    Okay() {
        this.showPopup.hide();
        this.router.navigate(['dispatcher/dispatcher-module']);
    }
    cancel() {
        this.router.navigate(['dispatcher/dispatcher-module']);
    }
}

