import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product-services.service';
import { Location } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformLocation } from '@angular/common';
import * as moment from 'moment';
@Component({
    selector: 'app-update-inventory-page',
    templateUrl: './update-inventory-page.component.html',
    styleUrls: ['./update-inventory-page.component.css']
})
export class UpdateInventoryPageComponent implements OnInit {
    @ViewChild('UpdateAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    public complexForm: FormGroup;
    barcode;
    productDetails;
    ItemStatusType;
    productConditionList;
    productFacilityList;
    facilityId;
    inventoryConditionId;
    itemStatusId;
    errorResponse;
    successResponse;
    submitted;
    productDetailsError;

    constructor(
        private fb: FormBuilder,
        public platformLocation: PlatformLocation,
        private productService: ProductService,
        private _location: Location,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.platformLocation.onPopState(() => {
            this.router.navigate(['inventory/inventory-manager'])
        });
        this.productDetailsError = '';
        this.complexForm = this.fb.group({
            inventoryConditionId: [null, [Validators.required]],
            inventoryId: this.fb.group({
                productName: [null, [Validators.required]],
            }),
            itemStatusId: [null, [Validators.required]],
            barcode: [null, [Validators.required]],
            skucode: [null, [Validators.required]]
        })


        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.getProductDetails(params['id']);
            }
        })
    }

    getProductDetails(id) {
        this.productService.getProductByBarcodeId(id).subscribe(data => {
            if (data.data != null) {
                this.productDetails = data.data;
                this.getAllProductStatusList();
                this.getAllProductConditionList();

            } else {
                //      this.successResponse = 'failed to get product details'
                this.successResponse = data.error.message
                this.submit = true
                this.showPopup.show();
            }
        })
    }

    getAllProductStatusList() {
        this.productService.getAllProductStatusTypes().subscribe(data => {
            if (data.data != null) {
                this.ItemStatusType = data.data;
                this.productDetails.itemStatusId = this.ItemStatusType.find(status => this.productDetails.itemStatusId.id == status.id);
            }
        })
    }

    myMethod() {
        if (this.productDetails.inventoryConditionId.id) {
            this.productService.getStatusByInventoryCondition(this.productDetails.inventoryConditionId.id).subscribe((data) => {
                this.ItemStatusType = data.data;
                this.productDetails.itemStatusId = this.ItemStatusType.find(status => this.productDetails.itemStatusId.id == status.id);
            })
        }
    }

    getAllProductConditionList() {
        this.productService.getProductConditionList().subscribe(data => {
            if (data.data != null) {
                this.productConditionList = data.data;
                this.productDetails.inventoryConditionId = this.productConditionList.find(status => this.productDetails.inventoryConditionId.id == status.id);
            }
        })
    }

    getAllProductFacilityList() {
        this.productService.getProductFacilityList().subscribe(data => {
            if (data.data != null) {
                this.productFacilityList = data.data;
                this.productDetails.facilityId = this.productFacilityList.find(status => this.productDetails.facilityId.id == status.id);
            }
        })
    }



    updateProduct() {
        if (this.complexForm.valid) {
            const today_Date = new Date();
            this.productDetails.updatedTime = moment(today_Date).format();
            this.productService.updateProduct(this.productDetails).subscribe(data => {
                if (data.error == null) {
                    this.submitted = true;
                    this.complexForm.reset();
                    this.successResponse = 'Product updated successfully';
                    this.submit = true
                    this.showPopup.show();
                } else {
                    this.successResponse = data.error.message;
                    this.showPopup.show();
                }
            })
        } else {
            this.submitted = false;
        }
    }

    cancelUser() {
        this._location.back();
    }
    Okay() {
        this.showPopup.hide();
        if (this.submit) {
            this.router.navigate(['inventory/inventory-manager'])
        }
    }

}
