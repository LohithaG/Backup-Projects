import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';

@Component({
    selector: 'app-product',
    templateUrl: './add-product.component.html',
    styles: [`
    .mat-focused .placeholder {    
        color: #AAAAAA;
        }
      .placeholder {
         color:#AAAAAA;
        }
    `]
})

export class AddProductComponent implements OnInit {

    public complexForm: FormGroup;
    formValidate: boolean;

    inventoryConditionId: AbstractControl;
    itemStatusId: AbstractControl;
    productName: AbstractControl;
    barcode: AbstractControl
    skuCode: AbstractControl;
    povendor: AbstractControl;
    serialNumber: AbstractControl
    id;
    resultQrcode: any;
    invoiceId;


    addProductObj: any = {}
    productCreatedDate = new Date()
    constructor(private readonly fb: FormBuilder,
        private readonly router: Router,
        private readonly _qrScanner: QRCodeScanner,
        public appService: AppService,
        public dialog: MatDialog,
    ) {

    }


    ngOnInit() {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };


        this.complexForm = this.fb.group({
            barcode: [null, [Validators.required]],
            skuCode: [null, [Validators.required]],
            productName: [null, [Validators.required]],
            inventoryConditionId: [null, [Validators.required]],
            itemStatusId: [null, [Validators.required]],
            facility: [null, [Validators.required]],
            povendor: [null, [Validators.required]],
            serialNumber: [null, [Validators.required,Validators.maxLength(32)]]
        })
        this.barcode = this.complexForm.controls["barcode"];
        this.skuCode = this.complexForm.controls["skuCode"];
        this.productName = this.complexForm.controls["productName"];
        this.inventoryConditionId = this.complexForm.controls["inventoryConditionId"];
        this.itemStatusId = this.complexForm.controls["itemStatusId"];
        this.povendor = this.complexForm.controls["povendor"];
        this.serialNumber = this.complexForm.controls["serialNumber"]


        this.appService.getAllQrcodes_prod().subscribe(data => {
            const resData: any = data;

            const status = resData.data.find(obj => obj === localStorage.getItem('QRCode'));
            if (status) {
                //QRcode as per service call we dont change name
                this.addProductObj.barcode = localStorage.getItem('QRCode');
                this.getDetailsByQrcode(this.addProductObj.barcode);
                this.getAllProductConditionList();
                this.getAllProductStatusList()
                this.getFacilitiesList();
                this.getAllPovendors()
            } else {
                this.openDialog("QR Code does not exist or Product already exist in inventory")
            }

        })
    }

    conditionsList;
    facilitiesList
    statusList;
    inventoryId;
    poVendorsList;
    getFacilitiesList() {
        this.appService.getFacilities().subscribe((data) => {
            const facilityRes: any = data;
            if (facilityRes.data != null) {
                this.facilitiesList = facilityRes.data;
                const facilityObj: any = this.facilitiesList.find(status => 1 === status.id)
                this.addProductObj.facilityId = facilityObj.id;
            }
        })
    }
    getAllPovendors() {
        this.appService.getAllPovendors().subscribe((data) => {
            const poVendors: any = data;
            if (poVendors.data != null) {
                this.poVendorsList = poVendors.data;
            }
        })
    }
    serialStatus;
    getDetailsByQrcode(QRCode) {
        this.appService.getProductDetailsfromInventory_prod(QRCode).subscribe((data) => {
            const detailsRes: any = data;
            if (detailsRes.data != null) {
                this.inventoryId = detailsRes.data.inventoryId
                this.addProductObj.productName = detailsRes.data.productName;
                this.addProductObj.skuCode = detailsRes.data.skuCode;
                this.addProductObj.purchaseOrderNumber = detailsRes.data.poNumber.purchaseOrderNumber;
                this.addProductObj.purchaseOrderId = detailsRes.data.poNumber.id
                this.serialStatus = detailsRes.data.serial
            } else {
                this.openDialog('Unable to get Product Details')
            }
        })
    }


    getAllProductConditionList() {
        this.appService.getProductConditionList().subscribe(data => {
            const condRes: any = data;
            if (condRes.data != null) {
                this.conditionsList = condRes.data;
                const condObj: any = this.conditionsList.find(status => 1 === status.id)
                this.addProductObj.condId = condObj.id;

                if (this.addProductObj.condId) {
                    this.appService.getStatusByInventoryCondition(this.addProductObj.condId).subscribe((data) => {
                        const condRes: any = data;
                        this.statusList = condRes.data;
                    })
                }
            }
        })
    }

    getAllProductStatusList() {
        this.appService.getAllProductStatusTypes().subscribe(data => {
            const statusRes: any = data;
            if (statusRes.data != null) {
                this.statusList = statusRes.data;
                const statusObj: any = this.statusList.find(status => 1 === status.id)
                this.addProductObj.stasId = statusObj.id
            }

        })
    }

    getStatusChange() {
        if (this.addProductObj.condId) {
            this.appService.getStatusByInventoryCondition(this.addProductObj.condId).subscribe((data) => {
                const condRes: any = data;
                this.statusList = condRes.data;
            })
        }
        this.addProductObj.stasId = ''

    }

    getInvoiceBybarcode() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.addProductObj.serialNumber = this.resultQrcode.text
            }
        });
    }
    submitted;
    addProduct() {

        if (this.serialStatus == 0) {
            this.complexForm.controls.serialNumber.setValue(1)
        }

        if (this.complexForm.valid) {
            const todayDate = new Date();
            this.facilitiesList.find(status => status.id === this.addProductObj.facilityId)
            this.statusList.find(status => status.id === this.addProductObj.stasId)
            this.conditionsList.find(status => status.id === this.addProductObj.condId)

            const postObj: any = {}
            postObj.facilityId = this.facilitiesList.find(status => status.id === this.addProductObj.facilityId)
            postObj.inventoryConditionId = this.conditionsList.find(status => status.id === this.addProductObj.condId)
            postObj.itemStatusId = this.statusList.find(status => status.id === this.addProductObj.stasId)
            postObj.poVendorId = this.poVendorsList.find(status => status.purchaseOrderNumber === this.addProductObj.purchaseOrderNumber)
            postObj.inventoryId = {
                "id": this.inventoryId,
                "enabled": null,
                "inventory": 2,
                "skuCode": this.addProductObj.skuCode,
                "productName": this.addProductObj.productName,
                "createdTime": moment(todayDate).format(),
                "updatedTime": null,
                "badInventory": null,
                "blockedInventory": 0,
                "pendingQcAccessment": null,
                "thresholdLevel": null,
                "returnProduct": null,
                "inventoryConditionId": this.conditionsList.find(status => status.id === this.addProductObj.condId),
                "description": null,
                "dispatch": null,
                "barcodeId": null,
            }

            postObj.itemStatusId.inventoryConditionId = this.conditionsList.find(status => status.id === this.addProductObj.condId)
            postObj.barcode = this.addProductObj.barcode;
            postObj.purchaseOrderNumber = this.addProductObj.purchaseOrderNumber;
            postObj.poVendorId = {
                "id": this.addProductObj.purchaseOrderId
            }
            postObj.productImage = null;
            postObj.createdUser = localStorage.getItem('userName');
            postObj.updatedTime = moment(todayDate).format();
            postObj.createdTime = moment(todayDate).format();
            if (this.serialStatus == 1) {
                postObj.serialNumber = this.addProductObj.serialNumber
            }

            const postObjArray: any = [];
            postObjArray.push(postObj)
            this.submitted = true;
            this.appService.addProduct_prod(postObjArray).subscribe((data: any) => {
                if (data.error == null) {
                    this.openDialog('Product Added Successfully')
                } else {
                    this.openDialogError(data.error.message);
                }
            })
        }
        else {
            this.formValidate = true;
        }
    }


    openDialog(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['./inventory'])
            }
        });
    }
    errorMessage;
    openDialogError(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text)
        dialogRef.afterClosed().subscribe(result => {
            this.errorMessage = "Serial Number already exists"
            setTimeout(() => {
                this.errorMessage = ""
            },3000);
        });
    }

    navigatetoHomePage() {
        this.complexForm.reset();
        setTimeout(() => {
            this.router.navigate(['./inventory']);
        })
    }
}

@Component({
    selector: 'dialog-content-example-dialog',
    template: `<img class="mat-typography img1" src="assets/img/logom.png" alt="MedicalBulkBuy" width="90%"   >
    <mat-dialog-content class="mat-typography" style="border-bottom:1px solid #ddd;border-top:1px solid #ddd; text-align:center">
     
    <h5 style="padding: 18px;margin: 0px;font-size: 14px;font-family: sans-serif;">{{msgText}}</h5>
    </mat-dialog-content>
   
    <mat-dialog-actions align="center" >
    <button mat-stroked-button [mat-dialog-close]="true" cdkFocusInitial > 
    <mat-icon>done</mat-icon>
    Ok
</button>
    </mat-dialog-actions>
  `,
})
export class DialogComponent {
    msgText: any;
    ngOnInit() {
        this.msgText = localStorage.getItem('msg');
    }
}

