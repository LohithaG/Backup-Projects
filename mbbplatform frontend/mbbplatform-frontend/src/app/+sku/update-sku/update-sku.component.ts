import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

import { SKUService } from '../sku.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;
@Component({
    selector: 'update-sku',
    templateUrl: './update-sku.component.html'
})

export class UpdateSKUComponent {
    private readonly skuCodeList;
    public updateSKUForm: FormGroup;
    public skuObj: any = {}
    formValidate: boolean;
    successResponse;
    errorResponse;
    skuDetails = false;
    skuValue;
    submitted = true;
    constructor(public skuService: SKUService, private readonly route: ActivatedRoute, private readonly _sanitizer: DomSanitizer, private readonly fb: FormBuilder,
        private readonly router: Router) {
        this.updateSKUForm = new FormGroup({
            'skucode': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
            'productName': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            'serialNumber': new FormControl(null),
            'notification': new FormControl(false, [Validators.requiredTrue]),
            'description': new FormControl(null),
            'items': new FormArray([])
        })
    }
    hasItems: any; hasItem: boolean;
    onChange(index) {
        if (index == 0) {
            this.details[index].check = true;
            this.skuService.getSKUStatusCheck(this.skuObj.inventory.skuCode, this.details[index].check).subscribe((data: any) => {
                if (data.data != null) {
                } else {
                    this.hasItem = true;
                    this.hasItems = data.error.message;
                    setTimeout(() => {
                        this.hasItems = ''
                    }, 2500)
                }
            })
            this.details[index + 1].check = false;
        } else if (index == 1) {
            this.details[index].check = true;
            this.skuService.getSKUStatusCheck(this.skuObj.inventory.skuCode, false).subscribe((data: any) => {
                if (data.data != null) {
                } else {
                    this.updateSKUForm.get('notification').setValue(true)
                    this.details[index - 1].check = true;
                    this.details[index].check = false;
                    this.hasItem = true;
                    this.hasItems = data.error.message;
                    setTimeout(() => {
                        this.hasItems = ''
                    }, 2500)
                }
            })
            this.details[index - 1].check = false;
        }
    }
    details: any = [{ name: "ACTIVE", check: false }, { name: "IN-ACTIVE", check: false }]


    userRole; isReadOnly = true;

    ngOnInit() {

        this.userRole = sessionStorage.getItem('userRole');
        if (this.userRole === 'SUPERADMIN') {
            this.isReadOnly = false;
        }
        this.route.params.forEach((params: Params) => {
            if (params['skuCode'] !== undefined) {
                this.skuService.getSKUDetails(params['skuCode']).subscribe((data: any) => {
                    if (data.data != null) {
                        this.skuDetails = true;
                        this.skuObj = data.data;
                        if (this.skuObj.inventory.active) {
                            this.details[0].check = true;
                            this.updateSKUForm.get('notification').setValue(true)
                        } else {
                            this.details[1].check = true;
                            this.updateSKUForm.get('notification').setValue(true)
                        }
                        for (const i of this.skuObj.facilityWiseThreshold) {
                            (this.updateSKUForm.get('items') as FormArray).push(this.createItem(i));
                        }
                    } else {
                        alert("No details added for this sku")
                    }
                })
            } else {
                this.router.navigate(['/sku'])
            }
        })
    }
    createItem(obj) {
        if (obj) {
            return new FormGroup({
                'facility': new FormControl(obj.facility.facility, [Validators.required]),
                'thresholdLevel': new FormControl(obj.thresholdLevel, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]),
            })
        }
        else {
            return new FormGroup({
                'thresholdLevel': new FormControl(obj.thresholdLevel, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]),
            })
        }
    }
    existSKUMessage;
    successMessage = 'SKU details updated successfully';
    existSku: boolean;
    isok: boolean; imageT; spin = false; validate = true;
    updateSkuDetails() {
        const formData: FormData = new FormData();
        const updateObj: any = { facilitiesThreshold: [] }
        if (this.updateSKUForm.valid) {
            if(this.skuObj.inventory.description==null){
                this.skuObj.inventory.description=null;
            }
            if (this.skuObj.inventory.serialNumberStatus == null) {
                this.skuObj.inventory.serialNumberStatus = false;
            }
            for (let i = 0; i < this.updateSKUForm.get('items').value.length; i++) {
                updateObj.facilitiesThreshold.push({
                    facility: { id: i + 1, facility: this.updateSKUForm.value.items[i].facility, facilityName: this.updateSKUForm.value.items[i].facility },
                    thresholdLevel: this.updateSKUForm.value.items[i].thresholdLevel
                })
            }
            updateObj.inventory = {
                "id": this.skuObj.inventory.id,
                "skuCode": this.skuObj.inventory.skuCode,
                "productName": this.skuObj.inventory.productName,
                "description": this.skuObj.inventory.description,
                "serialNumberStatus": this.skuObj.inventory.serialNumberStatus,
            }
            if (this.details[0].check == true) {
                updateObj.inventory.active = true
            }
            else if (this.details[1].check == true) {
                updateObj.inventory.active = false
            }
            updateObj.createdTime = new Date();
            formData.append('inventory', JSON.stringify(updateObj))
            updateObj.createdTime = new Date();
            let userId = sessionStorage.getItem('userData')
            this.skuService.updateSku(updateObj, updateObj.inventory.id, userId).subscribe((data: any) => {
                if (data.data != null) {
                    this.validate = false;
                    this.spin = true;
                    this.isok = true
                    setTimeout(() => {
                        this.router.navigate(['./sku'])
                    }, 1000)

                } else {
                    this.existSKUMessage = data.error.message;
                    this.existSku = true;
                    setTimeout(() => {
                        this.router.navigate(['./sku'])
                    }, 2000)
                }
            })
        } else {
            this.formValidate = true;
        }
    }

    gotoPreviousPage() {
        setTimeout(() => {
            this.router.navigate(['./sku'])
        })
    }

}



