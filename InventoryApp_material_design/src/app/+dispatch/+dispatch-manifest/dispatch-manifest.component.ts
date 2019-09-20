import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material';

@Component({
    selector: 'dispatch-manifest',
    templateUrl: 'dispatch-manifest.component.html',
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

export class DispatchManifestComponent implements OnInit {

    items: FormArray;
    quantity: AbstractControl


    constructor(
        public dialog: MatDialog,
        private readonly _appService: AppService,
        private readonly _qrScanner: QRCodeScanner,
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly fb: FormBuilder
    ) {

    }
    public formValidate = false;
    public dispatchForm: FormGroup;
    public invoice: AbstractControl;
    public comment: AbstractControl;
    data() {
        this.dispatchForm = this.fb.group({
            INVOICE: [null, [Validators.required, Validators.maxLength(30)]],
            COMMENT: [null, [Validators.required, Validators.maxLength(200)]],

            items: this.fb.array([this.createItem()])
        })

        if (this.checkList.length > 0) {
            this.items = this.dispatchForm.get('items') as FormArray;
            this.addItem();
            this.dispatchForm.controls["items"].setValue(this.checkList);
        }
        this.invoice = this.dispatchForm.controls['INVOICE'];
        this.comment = this.dispatchForm.controls['COMMENT'];

    }

    ngOnInit() {

        /**  * Back Button event trigger
                */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };

        this.dispatchForm = this.fb.group({
            INVOICE: [null, [Validators.required, Validators.maxLength(30)]],
            COMMENT: [null, [Validators.required, Validators.maxLength(200)]]
        })
        this.invoice = this.dispatchForm.controls['INVOICE'];
        this.comment = this.dispatchForm.controls['COMMENT'];

        this.getDetailsByQrcodeId(localStorage.getItem('QRCode'));
    }
    inVoiceDetails = [];
    getInvoiceId() {
        this._appService.getAllInvoices().subscribe((data: any) => {
            if (data.data != null) {
                this.inVoiceDetails = data.data
            }
        })
    }

    public productData: any = {
        inventoryId: {},
        facilityId: {}

    };
    checkListObj: any = {
        checkListArray: []
    }
    checkList: any = []
    getDetailsByQrcodeId(id) {
        this._appService.checkingBarcode(id).subscribe((data: any) => {
            if (data.data != null) {
                this.productData = data.data;
                this.checkListObj.inventoryItemId = {
                    id: data.data.id
                }
                this._appService.getCheckListBySKu(data.data.inventoryId.skuCode).subscribe((data: any) => {
                    if (data.data != null) {
                        this.checkList = data.data;
                        if (this.checkList.length > 0) {
                            this.data()
                        }
                    }
                })
            } else {
                this.openDialog(data.error.message)
            }
        })
    }




    createItem():FormGroup {
        if (this.checkList.length > 0) {
            return this.fb.group({
                quantity: [null, Validators.compose([Validators.required, Validators.pattern('^(?:[1-9]|0[1-9]|10)$')])],
                id: '',
                accessory: '',
                skuCode: '',
                conditionCheck: ''
            });
        }
        else{
            return this.fb.group({})
        }

    }
    addItem() {
        for (let i = 0; i < this.checkList.length - 1; i++) {
            this.items.push(this.createItem());
        }
    }

    onChange(value) {
        const controlArray: any = this.dispatchForm.get('items') as FormArray;

        for (let i = 0; i < this.checkList.length; i++) {
            if (i === value) {
                controlArray.controls[i].get('quantity').setValue(1);
            }

        }


    }

    resultQrcode;
    getInvoiceBybarcode() {
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.productData.invoiceId = this.resultQrcode.text
            }
        });
    }

    loaderBtn = false;
    doDispatch() {

        if (this.dispatchForm.valid) {
            this.loaderBtn = true;
            this.checkList = this.dispatchForm.value;
            this.serviceIntegration()

        }
        else {
            this.loaderBtn = false;
            this.formValidate = true
        }

    }

    serviceIntegration() {
        const obj = {
            "barcode": this.productData.barcode,
            "invoiceId": this.productData.invoiceId,
            "createdTime": new Date(),
            "comment": this.productData.comment,
            "createdUser": localStorage.getItem('currentUser')
        }
        this.dispatchServiceCall(obj)
    }

    dispatchServiceCall(obj){
        this._appService.addDispatch(obj).subscribe((data: any) => {
            if (data.error == null) {
                if (this.checkList.items) {
                    for (const i of this.checkList.items) {
                        this.checkListObj.checkListArray.push({
                            "accessoriesId": i.id,
                            "accessoryCondition": i.conditionCheck,
                            "quantity": i.conditionCheck ? i.quantity : 0
                        })
                    }
                    this.checklistServiceCall()
                    
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

    checklistServiceCall()
    {
        this._appService.addCheckList(this.checkListObj).subscribe((data: any) => {
            if (data.data != null) {
                this.loaderBtn = false;
                this.openDialog('Invoice & Checklist added successfully ')
            } else {
                this.loaderBtn = false;
                this.openDialog(data.error.message)
            }
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

    gotoPreviousPage() {
        this.router.navigate(['./dispatch']);
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


