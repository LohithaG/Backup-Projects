import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformLocation } from '@angular/common'
import { AppService } from '../../app.service';
import { MatDialog } from '@angular/material';


@Component({
    selector: 'app-update-sku-management',
    templateUrl: './update-sku-management.component.html',
    styleUrls: ['./update-sku-management.component.css']
})
export class UpdateSkuManagementComponent implements OnInit {

    @ViewChild("updateForm") formUpdate: any;


    private skuCodeList;
    public updateSKUForm: FormGroup;
    public skuObj: any = {}
    formValidate: boolean;
    successResponse;
    errorResponse;
    skuDetails = false;

    skuValue;
    submitted = true;

    public skucode: AbstractControl;
    public productName: AbstractControl;
    public inventoryConditionId: AbstractControl;
    public descrption: AbstractControl;
    public threshold: AbstractControl;


    constructor(
        public dialog: MatDialog,
        public _appService: AppService,
        private readonly route: ActivatedRoute,
        public platformLocation: PlatformLocation,
        private readonly fb: FormBuilder,
        private readonly router: Router) {
        this.updateSKUForm = this.fb.group({
            SKUCODE: [null, [Validators.required]],
            PROD_NAME: [null, [Validators.required, Validators.maxLength(100)]],
            DESCRIPTION: [null, [Validators.required, Validators.maxLength(200)]],
            THRESHOLD: [null, [Validators.required, Validators.maxLength(3), Validators.pattern('^([1-9][0-9]{0,2})$')]]
        })
        this.skucode = this.updateSKUForm.controls['SKUCODE'];
        this.productName = this.updateSKUForm.controls['PROD_NAME'];
        this.descrption = this.updateSKUForm.controls['DESCRIPTION'];
        this.threshold = this.updateSKUForm.controls['THRESHOLD'];
    }


    getSkuDetails() {
        if (this.formUpdate.valid && this.skuSelection) {
            this._appService.getDetailsBySkuId(this.skuValue).subscribe((data: any) => {
                if (data.data != null) {
                    this.skuDetails = true;
                    this.skuObj = data.data;
                    this.formValidate = false;

                } else {
                    this.openDialog("No details added for this SKU")
                }
            })
        }
        else{
            this.formValidate=true
        }
    }

    ngOnInit() {
        /**
     * Back Button event trigger
     */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.getAllSkuCodes()
    }

    getAllSkuCodes() {
        this._appService.getAllSkuCodes().subscribe(data => {
            const resData: any = data;
            this.skuCodeList = resData.data;
        })
    }

    updateSkuDetails() {
        if (this.updateSKUForm.valid) {
            this.skuObj.createdTime = new Date();
            this._appService.updateSku(this.skuObj).subscribe((data: any) => {
                if (data.data != null) {
                    this.openDialog('SKU details updated successfully')
                    this.updateSKUForm.reset();
                    setTimeout(() => {
                        this.skuObj = {}
                    }, 500)

                } else {
                    this.openDialog(data.error.message)
                }
            })
        } else {
            this.formValidate = true;
        }
    }

    gotoHomePage() {
            this.router.navigate(['./inventory'])
    }

    openDialog(msgText) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['./inventory'])
            }
        });
    }

    filteredSkusList: any = [];
    skuSelection = false;
    getSKUSbasedonSearch() {
        this.skuSelection = false;
        this.filteredSkusList = [];
        if (this.skuValue) {
            this.skuCodeList.find((data) => {
                if ((data.skuCode + "").includes(this.skuValue) || (data.productName.toLowerCase()).includes(this.skuValue.toLowerCase())) {
                    this.filteredSkusList.push(data)
                }
            })
        }
    }

    selectSKU(obj) {
        this.skuSelection = true;
        this.skuValue = obj.skuCode;
        this.filteredSkusList = [];
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
