import { Component, AfterViewInit, OnInit } from '@angular/core';
import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'product-return',
    templateUrl: 'return.component.html'
})

export class ReturnProductComponent implements OnInit {


    productArray
    conditionsList;
    statusList;
    statusList1
    inventoryId;
    addProductObj: any;
    facilitiesList;

    constructor(
        public _qrScanner: QRCodeScanner,
        public _appService: AppService,
        public _router: Router,
        public dialog: MatDialog,
        private readonly fb: FormBuilder
    ) {
        this._appService.currentMessage.subscribe(message => {
            for (const i of message) {
                this.productArray = i;
                this.getAllProductConditionList();
                this.getAllProductStatusList();
                this.getFacilitiesList()
            }
        })
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

    onChange(i, j) {

        if (this.productArray[i].checklist[j].accessoryCondition) {
            this.productArray[i].checklist[j].quantity = 1
        } else {
            this.productArray[i].checklist[j].quantity = 0
        }
    }

    getAllProductConditionList() {
        this._appService.getProductConditionList().subscribe(data => {
            const condRes: any = data;
            if (condRes.data != null) {
                this.conditionsList = condRes.data;
                for (const i of this.productArray) {
                    const condObj: any = this.conditionsList.find(status => 1 === status.id)
                    i.inventoryItem.inventoryConditionId.id = condObj.id;
                    if (i.inventoryItem.inventoryConditionId.id) {
                        this._appService.getStatusByInventoryCondition(i.inventoryItem.inventoryConditionId.id).subscribe((data) => {
                            const condRes: any = data;
                            this.statusList = condRes.data;
                        })
                    }
                }
            }
        })
    }

    getAllProductStatusList() {
        this._appService.getAllProductStatusTypes().subscribe(data => {
            const statusRes: any = data;
            if (statusRes.data != null) {
                this.statusList = statusRes.data;
                for (const i of this.productArray) {
                    const statusObj: any = this.statusList.find(status => 5 === status.id)
                    i.inventoryItem.itemStatusId.id = statusObj.id
                }
            }
        })
    }

    getFacilitiesList() {
        this._appService.getFacilities().subscribe((data) => {
            const facilityRes: any = data;
            if (facilityRes.data != null) {
                this.facilitiesList = facilityRes.data;
            }
        })
    }

    getStatusList(value) {
        if (value.inventoryConditionId.id == 1) {
            this._appService.getStatusByInventoryCondition(value.inventoryConditionId.id).subscribe((data) => {
                const condRes: any = data;
                this.statusList = condRes.data;
            })
            value.itemStatusId.id = ''
        }
        else {
            this._appService.getStatusByInventoryCondition(value.inventoryConditionId.id).subscribe((data) => {
                const condRes: any = data
                this.statusList1 = condRes.data;
            })
            value.itemStatusId.id = ''
        }
    }

    checklistPostObj: any = {
        array: []
    }
    formValid = false
    buttonStatus = false
    addToInventory() {
        this.buttonStatus = true
        const postObj: any = []
        const data: any = []
        for (let i = 0; i < this.productArray.length; i++) {
            //this.productArray[i].inventoryItem.comments=this.productArray[i].comments
            this.productArray[i].inventoryItem.createdUser = localStorage.getItem('userName')
            postObj.push(this.productArray[i].inventoryItem)
            if (this.productArray[i].inventoryItem.itemStatusId.id == '') {
                this.formValid = false
                break
            }
            else {
                this.formValid = true
            }

            if (this.productArray[i].checklist.length > 0) {
                const checklist: any = { checkListArray: [] }
                for (let j = 0; j < this.productArray[i].checklist.length; j++) {
                    checklist.checkListArray.push({
                        "accessoriesId": this.productArray[i].checklist[j].accessoriesId.id,
                        "accessoryCondition": this.productArray[i].checklist[j].accessoryCondition,
                        "quantity": this.productArray[i].checklist[j].accessoryCondition ? this.productArray[i].checklist[j].quantity : 0
                    })
                    checklist.inventoryItemId = {
                        id: this.productArray[i].inventoryItem.id
                    }
                }
                data.push(checklist)
            }
        }
        this.checklistPostObj.array = data
        if (this.formValid) {
            this._appService.addReturnItemToInventory(postObj).subscribe((data: any) => {
                const resReslt: any = data;
                if (resReslt.data != null) {
                    if (this.checklistPostObj.array.length > 0) {
                        this._appService.updateChecklist(this.checklistPostObj).subscribe((data: any) => {
                            if (data.data != null) {
                                this.openDialog('Product & Checklist Successfully Added to Inventory ')
                            } else {
                                this.openDialog(data.error.message)
                            }
                        })
                       
                    }

                    else {
                        this.openDialog('Product Successfully Added to Inventory')
                    }
                } else {
                    this.openDialog(data.error.message);
                }
            })
        }


    }

    expand(i) {
        if (this.productArray[i].condition) {
            this.productArray[i].condition = false;
        } else {
            this.productArray[i].condition = true;
        }
    }

    navigatetoHomePage() {
        this._router.navigate(['./inventory'])
    }
    openDialog(text) {
        const dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text)
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.navigatetoHomePage()
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

