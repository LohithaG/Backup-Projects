import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product-services.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

import { PlatformLocation } from '@angular/common'

@Component({
    selector: 'app-update-sku-management',
    templateUrl: './update-sku-management.component.html',
    styleUrls: ['./update-sku-management.component.css']
})
export class UpdateSkuManagementComponent implements OnInit {

    @ViewChild('skuAlert') public showPopup: ModalDirective;
    submit: boolean = false;


    private skuCodeList;
    public updateSKUForm: FormGroup;
    public skuObj: any = {}
    formValidate: boolean;
    successResponse;
    errorResponse;

    skuValue;
    submitted;

    public skucode: AbstractControl;
    public productName: AbstractControl;
    public inventoryConditionId: AbstractControl;
    public descrption: AbstractControl;
    public threshold: AbstractControl;


    constructor(private route: ActivatedRoute, public platformLocation: PlatformLocation, private productService: ProductService, private fb: FormBuilder, private router: Router) {
        this.updateSKUForm = this.fb.group({
            SKUCODE: [null, [Validators.required]],
            PROD_NAME: [null, [Validators.required]],
            DESCRIPTION: [null, [Validators.required]],
            THRESHOLD: [null, [Validators.required, Validators.pattern('^[0-9]+$')]]
        })
        this.skucode = this.updateSKUForm.controls['SKUCODE'];
        this.productName = this.updateSKUForm.controls['PROD_NAME'];
        this.descrption = this.updateSKUForm.controls['DESCRIPTION'];
        this.threshold = this.updateSKUForm.controls['THRESHOLD'];
    }

    skuDetails = false;
    getSkuDetails() {
        if (this.skuValue != undefined) {
            this.productService.getDetailsBySkuId(this.skuValue).subscribe((data) => {
                if (data.data != null) {
                    this.skuDetails = true;
                    this.skuObj = data.data;
                } else {
                    this.successResponse = 'No details added to this sku';
                    this.showPopup.show();
                }
            })
        } else {
            this.submitted = true;
            setTimeout(() => {
                this.submitted = false;
            }, 3000)
        }
    }

    productData;
    ngOnInit() {
        this.platformLocation.onPopState(() => {
            this.router.navigate(['inventory/inventory-manager'])
        });
    }


    updateSkuDetails() {
        if (this.updateSKUForm.valid) {
            this.skuObj.createdTime = new Date()
            this.productService.updateSku(this.skuObj).subscribe(data => {
                if (data.data != null) {
                    this.updateSKUForm.reset();
                    setTimeout(() => {
                        this.skuObj = {}
                    }, 500)
                    this.successResponse = 'SKU details updated successfully';
                    this.submit = true
                    this.showPopup.show();
                } else {
                    this.successResponse = data.error.message;
                    this.showPopup.show();
                }
            })
        } else {
            this.formValidate = true;
        }
    }

    Cancel() {
        this.router.navigate(['inventory/inventory-manager'])
    }

    Okay() {
        this.showPopup.hide();
        if (this.submit) {
            this.router.navigate(['inventory/inventory-manager'])
        }
    }
}

