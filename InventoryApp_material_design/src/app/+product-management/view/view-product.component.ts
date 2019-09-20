import { Component, OnInit } from '@angular/core';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'product-view',
    templateUrl: 'view-product.component.html'
})

export class ViewProductComponent implements OnInit {

    constructor(
        public dialog: MatDialog,
        public _qrScanner: QRCodeScanner,
        public _appService: AppService,
        public _router: Router
    ) {

    }

    //0140-0000197
    ngOnInit() {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
    }

    productInfo: any;
    inventoryProductInfo: any;
    resultQrcode: any;
    serialNumber;
    getProductDetails() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this._appService.getInventoryItemDetails(this.resultQrcode.text).subscribe((data: any) => {
                    if (data.data != null) {
                        this.productInfo = data.data;
                        this.serialNumber=this.productInfo.serialNumber
                    } else {
                        this.openDialog('No details found for this Product')
                    }
                })
            } else {
                this.goToHomePage()
            }
        })
        // this._appService.getInventoryItemDetails('0280-0000013').subscribe((data: any) => {
        //     if (data.data != null) {
        //         this.productInfo = data.data;
        //         this.serialNumber=this.productInfo.serialNumber
        //         console.log(this.serialNumber)
        //     } else {
        //         this.openDialog('No details found for this Product')
        //     }
        // })
    }


    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.goToHomePage();
            }
        });
    }

    goToHomePage() {
        this._router.navigate(['./inventory'])
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
