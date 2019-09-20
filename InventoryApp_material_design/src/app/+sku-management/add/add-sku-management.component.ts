import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformLocation } from '@angular/common'
declare var $: any;
import { AppService } from '../../app.service';
import { MatDialog } from '@angular/material';
import {PopUpComponent} from '../../popup/popup.component';

@Component({
    selector: 'app-add-sku-management',
    templateUrl: './add-sku-management.component.html',
    styleUrls: ['./add-sku-management.component.css']
})
export class AddSkuManagementComponent implements OnInit {

    public addSKUForm: FormGroup;
    public skuObj: any = {}
    formValidate: boolean;
    successResponse;
    errorResponse;

    public skucode: AbstractControl;
    public productName: AbstractControl;
    public inventoryConditionId: AbstractControl;
    public description: AbstractControl;
    public threshold: AbstractControl;

    constructor(
        public dialog: MatDialog,
        public platformLocation: PlatformLocation,
        private readonly fb: FormBuilder,
        private readonly router: Router,
        public appService: AppService
    ) {
        this.addSKUForm = this.fb.group({
            SKUCODE: [null, [Validators.required, Validators.maxLength(30)]],
            PROD_NAME: [null, [Validators.required, Validators.maxLength(100)]],
            DESCRIPTION: [null, [Validators.required, Validators.maxLength(200)]],
            THRESHOLD: [null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]]
        })
        this.skucode = this.addSKUForm.controls['SKUCODE'];
        this.productName = this.addSKUForm.controls['PROD_NAME'];
        this.description = this.addSKUForm.controls['DESCRIPTION'];
        this.threshold = this.addSKUForm.controls['THRESHOLD'];
    }
    @ViewChild(PopUpComponent) popup;

    productData;
    ngOnInit() {
        this.skuObj.thresholdLevel = 5;
        /**
     * Back Button event trigger
     */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
    }
   
    addSkuDetails() {
        if (this.addSKUForm.valid) {
            this.skuObj.createdTime = new Date();
            this.appService.addingSku(this.skuObj).subscribe(data => {
                const addRes: any = data;
                if (addRes.data != null) {
                    this.openDialog("SKU added successfully")
                    this.addSKUForm.reset();
                    setTimeout(() => {
                        this.skuObj = {}
                    }, 500)

                } else {
                    this.openDialog(addRes.error.message)
                }
            })
        }
        else {
            this.formValidate = true;
        }
    }

    gotoPreviousPage() {
        this.addSKUForm.reset();
        setTimeout(() => {
            this.router.navigate(['./inventory'])
        })
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

