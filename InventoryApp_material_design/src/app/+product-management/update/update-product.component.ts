import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';


@Component({
    selector: 'inventory-update',
    templateUrl: './update-product.component.html',
    styles: [`
    .mat-focused .placeholder {    
        color: #AAAAAA;
        }
      .placeholder {
         color:#AAAAAA;
        }
    `]
})

export class UpdateProductComponent implements OnInit {
    public complexForm: FormGroup;
    formValidate: boolean;

    inventoryConditionId: AbstractControl;
    itemStatusId: AbstractControl;
    productName: AbstractControl;
    barcode: AbstractControl
    skuCode: AbstractControl
    povendor: AbstractControl
    serialNumber: AbstractControl
    resultQrcode: any;
    invoiceId;



    updateProductObj: any = {}
    productUpdatedDate = new Date()
    constructor(private readonly fb: FormBuilder,
        private readonly router: Router,
        public appService: AppService,
        private readonly _qrScanner: QRCodeScanner,
        public dialog: MatDialog
    ) {

    }

    conditionsList;
    facilitiesList
    statusList;
    inventoryId
    skuCodedata;
    ProductName
    id
    poVendorsList;

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
            serialNumber: [null, [Validators.required, Validators.maxLength(32)]]
        })
        this.barcode = this.complexForm.controls["barcode"];
        this.skuCode = this.complexForm.controls["skuCode"];
        this.productName = this.complexForm.controls["productName"];
        this.inventoryConditionId = this.complexForm.controls["inventoryConditionId"];
        this.itemStatusId = this.complexForm.controls["itemStatusId"];
        this.povendor = this.complexForm.controls["povendor"]
        this.serialNumber = this.complexForm.controls["serialNumber"]
        const QRCodeId = localStorage.getItem('QRCode')
        this.getDetailsByQrcodeId(QRCodeId);
    }

    getDetailsByQrcodeId(QRId) {
        this.appService.getProductByQrId_prod(QRId).subscribe((data: any) => {
            if (data.data != null) {
                this.updateProductObj = data.data;
                this.skuCodedata = this.updateProductObj.inventoryId.skuCode
                this.ProductName = this.updateProductObj.inventoryId.productName
                this.inventoryId = data.data.inventoryId.id
                this.updateProductObj.purchaseOrderNumber = data.data.poVendorId.purchaseOrderNumber;
                this.updateProductObj.purchaseOrderId = data.data.poVendorId.id;
                this.updateProductObj.serialNumber = data.data.serialNumber
                this.id = data.data.id
                this.getFacilitiesList()
                this.getAllProductConditionList();
                this.getAllProductStatusList();
                this.getAllPovendors()

            } else {
                this.openDialog(data.error.message)
            }
        })
    }
    getFacilitiesList() {
        this.appService.getFacilities().subscribe((data) => {
            const facilityRes: any = data;
            if (facilityRes.data != null) {
                this.facilitiesList = facilityRes.data;
                const facilityObj: any = this.facilitiesList.find(status => this.updateProductObj.facilityId.id === status.id)
                this.updateProductObj.facilityId = facilityObj.id;
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

    getInvoiceBybarcode() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.updateProductObj.serialNumber = this.resultQrcode.text
            }
        });
    }

    getAllProductConditionList() {
        this.appService.getProductConditionList().subscribe(data => {
            const condRes: any = data;
            if (condRes.data != null) {
                this.conditionsList = condRes.data;
                const condObj: any = this.conditionsList.find(status => this.updateProductObj.inventoryConditionId.id === status.id)
                this.updateProductObj.condId = condObj.id;
                if (this.updateProductObj.condId) {
                    this.appService.getStatusByInventoryCondition(this.updateProductObj.condId).subscribe((data) => {
                        const condRes: any = data;
                        this.statusList = condRes.data;
                    })
                }
            }
        })
    }
    getStatusChange() {

        if (this.updateProductObj.condId) {
            this.appService.getStatusByInventoryCondition(this.updateProductObj.condId).subscribe((data) => {
                const condRes: any = data;
                this.statusList = condRes.data;
            })
        }
        this.updateProductObj.stasId = ''
    }
    getAllProductStatusList() {

        this.appService.getAllProductStatusTypes().subscribe(data => {
            const statusRes: any = data;
            if (statusRes.data != null) {
                this.statusList = statusRes.data;
                const statusObj: any = this.statusList.find(status => this.updateProductObj.itemStatusId.id === status.id)
                this.updateProductObj.stasId = statusObj.id
            }
        })
    }

    submitted
    errorMessage;
    updateUser() {
        if (this.updateProductObj.serialNumber == null) {
            this.complexForm.controls.serialNumber.setValue(1)
        }
        if (this.complexForm.valid) {
            this.submitted = true;

            const todayDate = new Date();
            this.facilitiesList.find(status => status.id === this.updateProductObj.facilityId)
            this.statusList.find(status => status.id === this.updateProductObj.stasId)
            this.conditionsList.find(status => status.id === this.updateProductObj.condId)

            const postObj: any = {}
            postObj.id = this.id
            postObj.facilityId = this.facilitiesList.find(status => status.id === this.updateProductObj.facilityId)
            postObj.inventoryConditionId = this.conditionsList.find(status => status.id === this.updateProductObj.condId)
            postObj.itemStatusId = this.statusList.find(status => status.id === this.updateProductObj.stasId)
            postObj.inventoryId = {
                "id": this.inventoryId,
                "enabled": null,
                "inventory": 2,
                "skuCode": this.updateProductObj.inventoryId.skuCode,
                "productName": this.updateProductObj.inventoryId.productName,
                "createdTime": moment(todayDate).format(),
                "updatedTime": null,
                "badInventory": null,
                "blockedInventory": 0,
                "pendingQcAccessment": null,
                "thresholdLevel": null,
                "returnProduct": null,
                "inventoryConditionId": this.conditionsList.find(status => status.id === this.updateProductObj.condId),

            }
            postObj.poVendorId = this.poVendorsList.find(status => status.purchaseOrderNumber === this.updateProductObj.purchaseOrderNumber)

            postObj.itemStatusId.inventoryConditionId = this.conditionsList.find(status => status.id === this.updateProductObj.condId)
            postObj.barcode = this.updateProductObj.barcode;
            postObj.poVendorId = {
                "id": this.updateProductObj.purchaseOrderId
            }
            postObj.productImage = null;
            postObj.createdUser = localStorage.getItem('userName');
            postObj.updatedTime = moment(todayDate).format();
            postObj.createdTime = moment(todayDate).format();

            if (this.updateProductObj.serialNumber) {
                postObj.serialNumber = this.updateProductObj.serialNumber
            }

            this.appService.updateProduct_prod(postObj).subscribe((data: any) => {
                if (data.error == null) {
                    this.openDialog('Product Updated Successfully')
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

    gotoHomePage() {
        this.complexForm.reset();
        setTimeout(() => {
            this.router.navigate(['./inventory']);
        });
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



