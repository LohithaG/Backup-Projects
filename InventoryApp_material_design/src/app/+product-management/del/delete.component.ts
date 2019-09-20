import { Component, OnInit } from '@angular/core';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'shiping-delete',
    templateUrl: 'delete.component.html',
    styles: [`
    .mat-focused .placeholder {    
        color: #AAAAAA;
        }
      .placeholder {
         color:#AAAAAA;
        }
    `]
})

export class DeleteShippingComponent implements OnInit {

    constructor(
        public dialog: MatDialog,
        public _qrScanner: QRCodeScanner,
        public _appService: AppService,
        public _router: Router,
        private fb: FormBuilder,
    ) {

    }
    packageObj: any = {};
    PackageForm: FormGroup;
    packageName: AbstractControl;
    ngOnInit() {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.PackageForm = this.fb.group({
            PACKAGENAME: [null, [Validators.required]],
        })
        this.packageName = this.PackageForm.controls['PACKAGENAME'];
        this.getAllCompletedPackges()
    }


    packageList: any = [];
    productInfo: any;
    getAllCompletedPackges() {
        this._appService.getAllCompletePackes().subscribe((data: any) => {
            if (data.error == null) {
                this.packageList = data.data;
            }
        })
    }

    packageSelection: boolean = false;
    skuList: any = [];
    scannedDetails: any;
    selectPackage(obj) {
        this.packageSelection = true;
        this.packageObj.packageName = obj.packageName;
        this.packageObj.packageId = obj.id;
        this.filteredPackageList = [];
        this.skuList = [];
        this._appService.getPackageSKUDetails(this.packageObj.packageId).subscribe((data: any) => {
            if (data.error == null) {
                this.skuList = data.data.skuDetails;
                this.scannedDetails = data.data.scannedDetails
            }
        })
    }



    filteredPackageList: any = [];
    getPackagebasedonSearch() {
        if (this.packageList.length > 0) {
            this.packageSelection = false;
            this.filteredPackageList = [];
            this.skuList = [];
            this.scannedDetails = {};
            if (this.packageObj.packageName) {
                this.packageList.find((data) => {
                    if ((data.packageName.toLowerCase()).includes(this.packageObj.packageName.toLowerCase())) {
                        this.filteredPackageList.push(data)
                    }
                })
            }
        }
    }



    formValidate = false;
    inventoryProductInfo: any;
    resultQrcode: any;
    pageRedirection: any = 'home';
    restoreProduct() {
        if (this.PackageForm.valid) {
            // this._appService.removeItemFromPackge('0140-0000060', this.packageObj.packageId).subscribe((data: any) => {
            //     if (data.data != null) {
            //         this.productInfo = data.data;
            //         this.openDialog('Qrcode Restored Successfully')
            //         this.selectPackage({ id: this.packageObj.packageId, packageName: this.packageObj.packageName })
            //     } else {
            //         this.openDialog(data.error.message)
            //     }
            // })

            this._qrScanner.promiseScan().then(result => {
                this.resultQrcode = result;
                if (!this.resultQrcode.cancelled) {
                    this._appService.removeItemFromPackge(this.resultQrcode.text, this.packageObj.packageId).subscribe((data: any) => {
                        if (data.data != null) {
                            this.productInfo = data.data;
                            this.openDialog('Qrcode Restored Successfully')
                            this.selectPackage({ id: this.packageObj.packageId, packageName: this.packageObj.packageName })
                            // this._appService.qrCodeMoving(this.resultQrcode.text, this.packageObj.packageId).subscribe((data: any) => {
                            //     this.openDialog('Qrcode Scanned Successfully')
                            // })
                        } else {
                            this.openDialog(data.error.message)
                        }
                    })
                } else {
                    this.goToHomePage()
                }
            })
        } else {
            this.formValidate = true;
        }
    }


    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.goToDeletePage();
            }
        });
    }

    moveToPackage() {
        alert('inventory moved successfully')
        this.productInfo = null;
    }

    goToDeletePage() {
        this._router.navigate(['./product/delete'])
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
