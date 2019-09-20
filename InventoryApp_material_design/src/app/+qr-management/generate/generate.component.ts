import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'generate-QR',
    templateUrl: './generate.component.html',
    styleUrls: ['./generate.component.css']
})

export class GenerateQrComponent {

    public generateSKUForm: FormGroup;
    formValidate: boolean;

    public skucode: AbstractControl;
    public noofProducts: AbstractControl;
    successMsg='QR Codes generated successfully'
    errorMsg='Failed to Generate QR Codes'


    skuCodeList: any;
    generateObj: any = {};
    constructor(
        public dialog: MatDialog,
        private readonly router: Router,
        public appService: AppService,
        private readonly fb: FormBuilder,

    ) {
        this.generateSKUForm = this.fb.group({
            SKUCODE: [null, [Validators.required]],
            NO_OF_PROD: [null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]],

        })
        this.skucode = this.generateSKUForm.controls['SKUCODE'];
        this.noofProducts = this.generateSKUForm.controls['NO_OF_PROD'];

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
        this.appService.getAllPovendorbyStatus(0).subscribe((data: any) => {
            this.posList = data.data;
        })
    }

    filteredPOSList: any = [];
    getPOSbasedonSearch() {
        this.poSelection = false;
        this.filteredPOSList = [];
        this.skuListPo =[];
        
        if (this.generateObj.purchaseOrderNumber) {
            this.posList.find((data) => {
                if ((data.purchaseOrderNumber.toLowerCase()).includes(this.generateObj.purchaseOrderNumber.toLowerCase())) {
                    this.filteredPOSList.push(data)
                }
            })
        }
    }

    poSelection = false;
    selectPO(obj) {
        this.poSelection = true;
        this.generateObj.purchaseOrderNumber = obj.purchaseOrderNumber;
        this.filteredPOSList = [];
    }

    skuListPo: any = []
    getSKUSBasedOnPO() {
        if (this.poSelection) {
            this.appService.getSKUSBasedonPO(this.generateObj.purchaseOrderNumber).subscribe((data: any) => {
                this.skuListPo = data.data;
            })
        } else {
            this.formValidate = true
        }
    }


    getQRsBasedOnPo() {
        this.appService.getQRBasedOnPo(this.generateObj.purchaseOrderNumber).subscribe((data:any) => {
            if (data.data != null) {
                this.openDialog(this.successMsg)
            } else {
                this.openDialog(this.errorMsg)
            }
        })
    }


    /**
     ** Barcodes generation
    */
    GenerateQRcodes(skuObj) {
        this.appService.GenerateQRcodes(skuObj.skuCode, skuObj.quantity).subscribe(data => {
            const qrRes: any = data;
            if (qrRes.data != null) {
                this.openDialog(this.successMsg)
            } else {
                this.openDialog(this.errorMsg)
            }
        })
    }


    openDialog(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.gotoPreviousPage()
            }
        });
    }


    gotoPreviousPage() {
        this.generateSKUForm.reset();
        setTimeout(() => {
            this.router.navigate(['./inventory'])
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
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>) { }
    ngOnInit() {
        this.msgText = localStorage.getItem('msg');
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
}

