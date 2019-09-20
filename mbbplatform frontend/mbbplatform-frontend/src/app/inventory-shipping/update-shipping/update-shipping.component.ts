import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { InventoryShippingService } from '../inventory-shipping.service'

@Component({
    selector: 'update-shipping',
    templateUrl: './update-shipping.component.html'
})

export class UpdateShippingComponent {

    constructor(
        public shippingService: InventoryShippingService,
        private readonly route: ActivatedRoute,
        private readonly router: Router
    ) {
        this.selectedSourceFacility = sessionStorage.getItem('facilityId')
    }

    packageObj: any = {};
    skuForm: FormGroup;
    skuCodeErrorMsg: any;
    selectedSourceFacility: any;

    poDetails: any;
    submitted: boolean = false;
    vendorDetails: any = {};
    vendorsNameList: any = [];
    successAlertMessages: any;
    errorAlertMessages: any;
    public poDate: Date;
    packageId: any = '';
    packageName:any='';
    ngOnInit() {
        this.skuForm = new FormGroup({
            'items': new FormArray([])
        });
        this.route.params.forEach((params: Params) => {
            if (params['packageId'] !== undefined) {
                this.packageId = params['packageId'];
                this.packageName = params['packageName'];
                this.shippingService.getPackageDetailsByPackageId(params['packageId']).subscribe((data: any) => {
                    if (data.data != null) {
                        this.packageObj = data.data;
                        this.packageObj.comments = data.data[0].comments ? data.data[0].comments : '';
                        this.packageObj.find((data) => {
                            this.onAddItem(data)
                        })
                    } else {
                        alert("No details added for this package ")
                    }
                })
            } else {
                this.router.navigate(['/shipping'])
            }
        })
    }

    ngAfterViewInit() {

    }


    itemsAddStatus: boolean = false;
    onAddItem(data) {
        this.itemsAddStatus = true;
        (<FormArray>this.skuForm.get('items')).push(this.createItem(data));
    }

    static compareValueValidators(formGroup) {
        const available = formGroup.controls.available;
        const available_t = formGroup.controls.available_t;
        let returnObj: any = {};
        if (available.value < available_t.value) {
            returnObj.AVAILABLE = true
        }
        if (formGroup.controls.qc.value < formGroup.controls.qc_t.value) {
            returnObj.QC = true
        }
        if (formGroup.controls.unavailble.value < formGroup.controls.unavailble_t.value) {
            returnObj.UNAVAILABLE = true
        }
        if (available.value > 0 && available_t.value == 0 && formGroup.controls.qc.value >= 0 && formGroup.controls.qc_t.value == 0 && formGroup.controls.unavailble.value >= 0 && formGroup.controls.unavailble_t.value == 0) {
            returnObj.EMPTYROW = true
        }

        return returnObj;
    }

    createItem(data) {
        return new FormGroup({
            'skuCode': new FormControl(data.skucode ? data.skucode : null, Validators.compose([Validators.required, Validators.maxLength(30)])),
            'itemName': new FormControl(data.productName ? data.productName : null, Validators.required),

            'available_t': new FormControl(data.available ? data.available : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),
            'available': new FormControl(data.availableExists ? data.availableExists : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),

            'qc_t': new FormControl(data.pendingQualityCheck ? data.pendingQualityCheck : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),
            'qc': new FormControl(data.pendingQualityCheckExists ? data.pendingQualityCheckExists : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),

            'unavailble_t': new FormControl(data.unAvailable ? data.unAvailable : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),
            'unavailble': new FormControl(data.unAvailableExists ? data.unAvailableExists : 0, [Validators.required, Validators.pattern('^[0-9]*$')]),

            'id': new FormControl(data.id ? data.id : 0, [Validators.required])

        }, UpdateShippingComponent.compareValueValidators);
    }
    deleteErrorMsg: any;
    deleteSuccessMsg: any;
    onDeleteItem(index) {
        if (this.skuForm.value.items[index].id != 0) {
            this.shippingService.deleteSKUFromPakage(this.packageObj[index].id).subscribe((data: any) => {
                if (data.data != null) {
                    this.deleteSuccessMsg = "SKU successfully deleted from package";
                    (<FormArray>this.skuForm.get('items')).removeAt(index);
                    if (this.skuForm.get('items').value.length == 0) {
                        this.itemsAddStatus = false;
                    }
                    this.msgsClear();
                } else {
                    this.deleteErrorMsg = data.error.message;
                    this.msgsClear();
                }
            })
        } else {
            this.deleteSuccessMsg = "SKU successfully deleted from package";
            (<FormArray>this.skuForm.get('items')).removeAt(index);
            this.msgsClear();
            if (this.skuForm.get('items').value.length == 0) {
                this.itemsAddStatus = false;
            }
        }

    }

    msgsClear() {
        setTimeout(() => {
            this.deleteErrorMsg = "";
            this.deleteSuccessMsg = "";
        }, 3000);
    }

    skuCheckingStatus = false;
    skuCheckingErrorMsg = '';
    productNameStatus = false;
    getSKUDetails(index) {
        this.skuCheckingStatus = true;
        this.productNameStatus = true;
        let formObj: any = <FormArray>this.skuForm.get('items');
        if (index) {
            for (let i = 0; i < this.skuForm.get('items').value.length; i++) {
                if (this.skuForm.value.items[index].skuCode == this.skuForm.value.items[i].skuCode && i != index) {
                    this.skuCheckingStatus = false;
                    this.skuCodeErrorMsg = "SKU already exists";
                    setTimeout(() => {
                        this.skuCodeErrorMsg = '';
                    }, 3000)
                }
            }
        }
        if (this.skuCheckingStatus) {
            this.shippingService.getSKUdetails(this.skuForm.value.items[index].skuCode, this.selectedSourceFacility).subscribe((data) => {
                if (data.error == null) {
                    if (data.data.available == 0 && data.data.pendingQualityCheck == 0 && data.data.unAvailable == 0) {
                        this.skuCodeErrorMsg = "Required Inventory not available for transfering for this SKU Id:" + this.skuForm.value.items[index].skuCode;
                        setTimeout(() => {
                            this.skuCodeErrorMsg = '';
                        }, 3000)
                    } else {
                        formObj.controls[index].get('itemName').setValue(data.data.productName)
                        formObj.controls[index].get('available').setValue(data.data.available)
                        formObj.controls[index].get('qc').setValue(data.data.pendingQualityCheck)
                        formObj.controls[index].get('unavailble').setValue(data.data.unAvailable)
                        formObj.controls[index].get('available_t').setValue(0)
                        formObj.controls[index].get('qc_t').setValue(0)
                        formObj.controls[index].get('unavailble_t').setValue(0)
                        this.productNameStatus = false;
                    }
                } else {
                    // this.skuCodeErrorMsg = "This SKU Id" + this.skuForm.value.items[index].skuCode + ' not available ';
                    this.skuCodeErrorMsg =data.error.message;
                    formObj.controls[index].get('skuCode').setValue('')
                    formObj.controls[index].get('itemName').setValue('')
                    formObj.controls[index].get('available').setValue('')
                    formObj.controls[index].get('qc').setValue('')
                    formObj.controls[index].get('unavailble').setValue('')
                    formObj.controls[index].get('available_t').setValue('')
                    formObj.controls[index].get('qc_t').setValue('')
                    formObj.controls[index].get('unavailble_t').setValue('')
                    setTimeout(() => {
                        this.skuCodeErrorMsg = '';
                    }, 3000)
                }
            })
        }

    }

    skusAddingStatus;
    updatePackage() {
        this.submitted = false;
        if (this.skuForm.valid) {
            if (this.itemsAddStatus) {
                let skuObj: any = []
                let formObj: any = <FormArray>this.skuForm.get('items');
                for (let i = 0; i < this.skuForm.value.items.length; i++) {
                    skuObj.push({
                        "skuCode": formObj.controls[i].get('skuCode').value,
                        "productName": formObj.controls[i].get('itemName').value,
                        "available": formObj.controls[i].get('available_t').value,
                        "pendingQualityCheck": formObj.controls[i].get('qc_t').value,
                        "unAvailable": formObj.controls[i].get('unavailble_t').value,
                        "enable": true,
                        "comments": this.packageObj.comments
                    })
                }

                this.shippingService.updateSkuDetails(skuObj, this.packageId).subscribe((data: any) => {
                    if (data.error == null) {
                        this.successAlertMessages = "Package updated successfully";
                        setTimeout(() => {
                            this.successAlertMessages = ''
                            this.skusAddingStatus = true;
                            this.router.navigate(['/shipping'])
                        }, 3000)
                    } else {
                        this.errorAlertMessages = data.error.message;
                        setTimeout(() => {
                            this.errorAlertMessages = ''
                        }, 3000)
                    }
                })
            } else {
                alert('Please add atleast one SKU')
            }
        } else {
            this.submitted = true;
        }
    }

    // HomePage
    gotoHomePage() {
        this.router.navigate(['/shipping'])
    }


}