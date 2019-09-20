import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material';

@Component({
    selector: 'dispatch-view',
    templateUrl: 'dispatch-view.component.html',
    styles: [
        `
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

export class DispatchViewComponent implements OnInit {

    constructor(
        public dialog: MatDialog,
        public _qrScanner: QRCodeScanner,
        public _appService: AppService,
        public _router: Router
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
    }

    productInfo: any;
    inventoryProductInfo: any;
    resultQrcode: any;
    getProductDetails() {

        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this._appService.dataFromUnicommerce(this.resultQrcode.text).subscribe((data: any) => {
                    if (data.data != null) {
                        this.productInfo = data.data;
                    } else {
                        this.openDialog('Before dispatch add Manifest')
                    }
                })
            } else {
                this.goToHomePage()
            }
        })
    }

    addToDispatch() {
        this._appService.addToDispatch(this.productInfo).subscribe((data: any) => {
            if (data.data != null) {
                this.openDialog('Dispatched product successfully')
            } else {
                this.openDialog('data.error.message')
                //this.openDialog(data.error.message)
            }
        })
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
        this._router.navigate(['./dispatch'])
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
