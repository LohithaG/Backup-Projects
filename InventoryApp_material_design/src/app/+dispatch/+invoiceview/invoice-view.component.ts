import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material';

@Component({
    selector: 'dispatch-invoice-view',
    templateUrl: 'invoice-view.component.html',
    styles: [
        `
        .ui-overlay-c {
            background-color: rgba(0, 0, 0, 0.5);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            text-align: center;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .loading-bar {
         
          display: inline-block;
          width: 4px;
          height: 18px;
          border-radius: 4px;
          animation: loading 1s ease-in-out infinite;
        }
        .loading-bar:nth-child(1) {
          background-color: #3498db;
          animation-delay: 0;
        }
        .loading-bar:nth-child(2) {
          background-color: #c0392b;
          animation-delay: 0.09s;
        }
        .loading-bar:nth-child(3) {
          background-color: #f1c40f;
          animation-delay: .18s;
        }
        .loading-bar:nth-child(4) {
          background-color: #27ae60;
          animation-delay: .27s;
        }
        
        @keyframes loading {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1, 2.2);
          }
          40% {
            transform: scale(1);
          }
        }
        md-checkbox .md-icon {
    background: red;
}
md-checkbox.md-default-theme.md-checked .md-icon {
    background: orange;
}
.mat-focused .placeholder {    
    color: #AAAAAA;
    }
  .placeholder {
     color:#AAAAAA;
    }
        
        `
    ]
})

export class InvoiceViewComponent implements OnInit {

    productData: any = { comment: null, expectedDeliveryDates: null }
    productArray: any = []
    public formValidate = false;
    public dispatchForm: FormGroup;
    resultQrcode: any;
    checkList: any = []
    invoiceId;
    comment;
    deliveryDateslist: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expectedDeliveryDates: any = 4
    noofProducts: any;


    constructor(
        private readonly fb: FormBuilder,
        public dialog: MatDialog,
        private readonly _appService: AppService,
        private readonly _qrScanner: QRCodeScanner,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };

        this.invoiceId = localStorage.getItem("invoiceId")
        this.getDetailsByQrcodeId(localStorage.getItem('QRCode'));
        this.noofProducts = localStorage.getItem('noofProducts')

    }


    getDetailsByQrcodeId(id) {
        this._appService.checkingBarcode(id).subscribe((data: any) => {
            if (data.data != null) {
                this.productData = data.data;
                this.productData.cardStatus = true
                this.productData.expectedDeliveryDates = 4
                this.getChecklistData()

            }
            else {
                this.openDialog(data.error.message)
            }
        })
    }

    getChecklistData() {
        this._appService.getCheckListBySKu(this.productData.inventoryId.skuCode).subscribe((data: any) => {
            if (data.data != null) {
                const detailRes: any = data.data;
                const details = []
                for (const i of detailRes) {
                    details.push({
                        id: i.id,
                        skuCode: i.skuCode,
                        accessory: i.accessory,
                        quantity: i.quantity,
                        conditionCheck: i.conditionCheck,
                    })
                }
                this.checkList = details
                if (this.checkList.length > 0) {
                    this.productData.check = this.checkList
                }
                this.productArray.push(this.productData)
            }
            else {
                this.openDialog(data.error.message)
            }
        })
    }

    addNextProduct(): void {

        if (this.productArray.length < this.noofProducts) {


            this._qrScanner.promiseScan().then(result => {
                this.resultQrcode = result;
                if (!this.resultQrcode.cancelled) {
                    for (let i = 0; i < this.productArray.length; i++) {
                        this.productArray[i].cardStatus = false;
                    }

                    this._appService.checkingBarcode(this.resultQrcode.text).subscribe((data) => {
                        const response: any = data;
                        if (response.data != null) {

                            const barcodeStatus = this.productArray.find(obj => obj.barcode === response.data.barcode);
                            if (!barcodeStatus) {
                                const facilityStatus = this.productArray.find(obj => obj.facilityId.facility === response.data.facilityId.facility);
                                if (facilityStatus) {
                                    this.productData = response.data;
                                    //  this.productData.cardStatus=true
                                    this.getNextChecklistData()
                                } else {
                                    this.openDialogadd('Products should be in same facility')
                                }
                            }
                            else {
                                this.openDialogadd('Product already attached with this QR Code')
                            }
                        }
                        else {
                            this.openDialogadd(response.error.message)
                        }
                    })
                }
            })
        }
    }

    getNextChecklistData() {
        this._appService.getCheckListBySKu(this.productData.inventoryId.skuCode).subscribe((data: any) => {
            if (data.data != null) {
                const details = []
                const detailRes: any = data.data;

                for (const i of detailRes) {
                    details.push({
                        id: i.id,
                        skuCode: i.skuCode,
                        accessory: i.accessory,
                        quantity: i.quantity,
                        conditionCheck: i.conditionCheck
                    })
                }
                this.productData.cardStatus = true
                this.checkList = details

                if (this.checkList.length > 0) {
                    this.productData.check = this.checkList
                }
                this.productArray.push(this.productData)
            }
            else {
                this.openDialogadd(data.error.message)
            }
        })
    }
    checkListObj: any = {
        checkListArray: []
    }
    checklistPostObj: any = {
        array: []
    }
    loaderBtn = false;
    delete(index) {
        this.productArray.splice(index, 1)
        if (this.productArray == '') {
            this.router.navigate(['./dispatch']);
        }
    }

    addtoDispatch() {

        this.formValidate = true
        const postObj = []
        const data: any = []
        for (let i = 0; i < this.productArray.length; i++) {

            postObj.push({
                id: this.productArray[i].id,
                barcode: this.productArray[i].barcode,
                invoiceId: this.invoiceId,
                createdTime: new Date(),
                updatedTime: new Date(),
                comment: this.comment,
                createdUser: localStorage.getItem('userName'),
                expectedDeliveryDates: this.expectedDeliveryDates,
                productReturn: this.productArray[i].returnProduct
            })
            if (this.productArray[i].check) {
                const checklist: any = { checkListArray: [] }
                for (let j = 0; j < this.productArray[i].check.length; j++) {
                    checklist.checkListArray.push({
                        "accessoriesId": this.productArray[i].check[j].id,
                        "accessoryCondition": this.productArray[i].check[j].conditionCheck,
                        "quantity": this.productArray[i].check[j].conditionCheck ? this.productArray[i].check[j].quantity : 0
                    })
                    checklist.inventoryItemId = {
                        id: this.productArray[i].id
                    }
                }
                data.push(checklist)
            }
            this.checklistPostObj.array = data
        }

        if (this.expectedDeliveryDates != null && this.expectedDeliveryDates != '' && this.comment != null && this.comment != '') {

            this.loaderBtn = true;
            this._appService.addDispatch(postObj).subscribe((data: any) => {
                if (data.error == null) {
                    if (this.checklistPostObj.array.length > 0) {
                        this._appService.addCheckList(this.checklistPostObj).subscribe((data: any) => {
                            if (data.data != null) {
                                this.loaderBtn = false;
                                this.openDialog('Invoice & Checklist added successfully ')
                            } else {
                                this.loaderBtn = false;
                                this.openDialog(data.error.message)
                            }
                        })
                    } else {
                        this.loaderBtn = false;
                        this.openDialog('Invoice generated successfully')
                    }
                } else {
                    this.loaderBtn = false;
                    this.openDialog(data.error.message);
                }
            })
        }

    }
    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.gotoPreviousPage();
            }
        });
    }
    openDialogadd(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {

        });
    }
    onChange(i, j) {

        if (this.productArray[i].check[j].conditionCheck) {
            this.productArray[i].check[j].quantity = 1
        } else {
            this.productArray[i].check[j].quantity = 0
        }

    }
    gotoPreviousPage() {
        this.router.navigate(['./dispatch']);
    }
    expand(i) {
        if (this.productArray[i].cardStatus) {
            this.productArray[i].cardStatus = false;
        } else {
            this.productArray[i].cardStatus = true;
        }
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


