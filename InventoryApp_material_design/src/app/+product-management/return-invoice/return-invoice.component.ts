import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatDialog } from '@angular/material';
declare var cordova: any;
import { PlatformLocation } from '@angular/common';

import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
@Component({
    selector: 'app-return-invoice',
    templateUrl: './return-invoice.component.html',
    styles: [`
    .footer-text{
        font-weight:bold
    }
    .mat-focused .placeholder {    
        color: #AAAAAA;
        }
      .placeholder {
         color:#AAAAAA;
        }
    `]
})

export class ReturnInvoiceComponent implements OnInit {
    invoiceId;
    public invoiceForm: FormGroup;
    formValidate: boolean
    productData: any
    status = false;

    constructor(
        private readonly router: Router,
        private readonly _qrScanner: QRCodeScanner,
        private readonly fb: FormBuilder,
        private readonly appService: AppService,
        public dialog: MatDialog,

    ) {
        this.invoiceForm = this.fb.group({
            invoice: [null, [Validators.required]],
        })


    }

    resultQrcode: any;
    array = []

    getInvoiceBybarcode() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.invoiceId = this.resultQrcode.text
                localStorage.setItem('invoiceId', this.resultQrcode.text)

            }
        });
    }

    ngOnInit() {
        /**
         * Back Button event trigger
         */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    }
    navigatetoInvoice() {
        if (this.invoiceForm.valid) {
            localStorage.setItem('invoiceId', this.invoiceId)

            this.appService.getDetailsByInvoice(this.invoiceForm.value.invoice).subscribe((data: any) => {

                if (data.data != null) {
                    this.productData = data.data
                    this.array = data.data;
                    this.status = true
                    for (const i  of this.productData) {
                        i.condition = false
                    }
                }
                if (data.data == "") {
                    this.openDialog(data.error.message)
                    this.invoiceForm.reset()
                }

            })



        } else {
            this.formValidate = true
        }
    }
    productArray: any = []


    navigatetoHomePage() {
        this.router.navigate(['./inventory']);
    }

    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
          
        });
    }



    submit() {
        const productArray: any = []
        for (let i = 0; i < this.productData.length; i++) {
            if (this.productData[i].condition) {
                productArray.push(this.productData[i])
            }
        }
        if (productArray.length > 0) {
            this.appService.add(productArray)
            this.router.navigate(['/product/return'])

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
    
