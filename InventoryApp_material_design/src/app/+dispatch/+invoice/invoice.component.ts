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
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
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

export class InvoiceComponent implements OnInit {
    public invoiceForm: FormGroup;
    formValidate: boolean
    resultQrcode: any;
    invoiceId;
    productData: any;
    noofProducts



    constructor(
        private readonly router: Router,
        private readonly _qrScanner: QRCodeScanner,
        private readonly fb: FormBuilder,
        private readonly appservice: AppService,
        public dialog: MatDialog,


    ) {
        this.invoiceForm = this.fb.group({
            invoice: [null, [Validators.required]],
            noofProducts: [null, [Validators.required]]
        })
        // this.invoiceId = this.invoiceForm.controls['INVOICE']
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

    getInvoiceBybarcode() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.invoiceId = this.resultQrcode.text
                localStorage.setItem('invoiceId', this.resultQrcode.text)
            }
        });
    }
    navigatetoInvoice() {

        if (this.invoiceForm.valid) {
            localStorage.setItem('invoiceId', this.invoiceId)
            localStorage.setItem('noofProducts', this.noofProducts)
            this.appservice.getDetailsByDispatchInvoice(this.invoiceId).subscribe((data: any) => {
                if (data.error == null) {
                    // localStorage.setItem('QRCode', '0174-0000005')
                    // this.router.navigate(['/dispatch/invoice-view'])
                    this._qrScanner.promiseScan().then(result => {
                        this.resultQrcode = result;
                        if (!this.resultQrcode.cancelled) {
                            localStorage.setItem('QRCode', this.resultQrcode.text)
                            this.router.navigate(['/dispatch/invoice-view'])
                        }
                    })
                }
                else {
                    this.openDialog(data.error.message)
                }

            })

        }
        else {
            this.formValidate = true
        }

    }
    navigatetoHomePage() {

        this.router.navigate(['./dispatch']);

    }
    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {

            }
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
