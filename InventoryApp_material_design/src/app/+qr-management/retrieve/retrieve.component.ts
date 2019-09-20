import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'generate-QR',
    templateUrl: './retrieve.component.html',
    styles: [`
    .height-skus{
        max-height: 100px;
        overflow-y: scroll;
        overflow-x: hidden;
        display: block;
        }
        .mat-focused .placeholder {    
            color: #AAAAAA;
            }
          .placeholder {
             color:#AAAAAA;
            }
            .img1
            {
              height: 120px;
            }
    `]
})

export class RetrieveQrComponent {
    public retrieveForm: FormGroup;
    formValidate: boolean
    skuCodeList: any;
    retrieveObj: any = {};
    displayMsg: any = '';
    public skucode: AbstractControl;
    successMsg='QR Codes Retrieved Successfully';
    errorMsg='No QR Codes Available to Reprint';


    constructor(
        private readonly router: Router,
        public appService: AppService,
        public dialog: MatDialog,
        private readonly fb: FormBuilder
    ) {
        this.retrieveForm = this.fb.group({
            SKUCODE: [null, [Validators.required]],
        })
        this.skucode = this.retrieveForm.controls['SKUCODE']
    }

    ngOnInit() {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.getAllPos()
    }
    posList: any = [];
    getAllPos() {
        this.appService.getAllPovendorbyStatus(1).subscribe((data: any) => {
            this.posList = data.data;
        })
    }

    filteredPOSList: any = [];
    getPOSbasedonSearch() {
        this.poSelection = false;
        this.filteredPOSList = [];
        if (this.retrieveObj.purchaseOrderNumber) {
            this.posList.find((data) => {
                if ((data.purchaseOrderNumber.toLowerCase()).includes(this.retrieveObj.purchaseOrderNumber.toLowerCase())) {
                    this.filteredPOSList.push(data)
                }
            })
        }
    }

    poSelection = false;
    selectPO(obj) {
        this.poSelection = true;
        this.retrieveObj.purchaseOrderNumber = obj.purchaseOrderNumber;
        this.filteredPOSList = [];
    }
    skuListPo: any = []
    getSKUSBasedOnPO() {
        if (this.retrieveForm.valid && this.poSelection) {
            this.appService.getSKUSBasedonPO(this.retrieveObj.purchaseOrderNumber).subscribe((data: any) => {
                this.skuListPo = data.data;
            })
        } else {
            this.formValidate = true
        }
    }

    getQRsBasedOnPo() {
        this.appService.getQRBasedOnPo(this.retrieveObj.purchaseOrderNumber).subscribe((data:any )=> {

            if (data.data != null) {
                this.openDialog(this.successMsg)
            } else {
                this.openDialog(this.errorMsg)
            }
        })
    }

    /**
     * individual SKU's QR's
     */

    getQrcbasedOnSKU(skuObj) {
        this.appService.getQrcbasedOnSKUPO(skuObj.skuCode, this.retrieveObj.purchaseOrderNumber).subscribe((data) => {
            const qrRes: any = data;
            if (qrRes.data != null) {
                this.openDialog(this.successMsg)
            } else {
                this.openDialog(this.errorMsg)
            }
        })
    }

    /**
     * Retrieve QRcodes
     */
    reprintQRCodeList: any = [];
    dialogType = false;
    RetrieveQRcodes() {
        if (this.retrieveForm.valid && this.poSelection) {
            this.appService.retrieveQrCodes(this.retrieveObj.sku).subscribe((data) => {
                const retriveRes: any = data;
                if (retriveRes.data != null) {
                    this.dialogType = true;
                    const details: any = retriveRes.data
                    if (details.length > 0) {
                        this.openDialog(this.successMsg)
                        this.reprintQRCodeList = retriveRes.data;
                    }
                    else {
                        this.dialogType = false;
                        this.openDialog(this.errorMsg)
                    }
                } else {
                    this.dialogType = false;
                    this.openDialog(this.errorMsg)
                }
            })
        } else {
            this.formValidate = true
        }
    }


    RePrintAllQRcodes() {
        this.appService.printQrcode(this.reprintQRCodeList).subscribe(data => {
            this.dialogType = true;
            this.openDialog('QR Codes is successfully sent to printer');
        })
    }

    printQRrcode(barcode) {
        const array = [];
        array.push(barcode);
        this.appService.printQrcode(array).subscribe(data => {
            this.dialogType = true
            this.openDialog('QRcode is successfully sent to printer');
        })
    }

    clearMsgs() {
        setTimeout(() => {
            this.displayMsg = "";
        }, 2000)
    }


    openDialog(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text)
        dialogRef.afterClosed().subscribe(result => {
            if (!this.dialogType) {
                this.router.navigate(['./inventory'])
            }
        });
    }


    gotoPreviousPage() {
        this.router.navigate(['./inventory'])
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
