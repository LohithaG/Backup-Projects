import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product-services.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';

import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-add-sku-management',
  templateUrl: './add-sku-management.component.html',
  styleUrls: ['./add-sku-management.component.css']
})
export class AddSkuManagementComponent implements OnInit {

  @ViewChild('skuAlert') public showPopup: ModalDirective;
  submit: boolean = false;


  private skuCodeList;
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
    public platformLocation: PlatformLocation,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router) {
    this.addSKUForm = this.fb.group({
      SKUCODE: [null, [Validators.required]],
      PROD_NAME: [null, [Validators.required]],
      DESCRIPTION: [null, [Validators.required]],
      THRESHOLD: [null, [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.skucode = this.addSKUForm.controls['SKUCODE'];
    this.productName = this.addSKUForm.controls['PROD_NAME'];
    this.description = this.addSKUForm.controls['DESCRIPTION'];
    this.threshold = this.addSKUForm.controls['THRESHOLD'];
  }



  productData;
  ngOnInit() {
    this.skuObj.thresholdLevel = 5;
    this.platformLocation.onPopState(() => {
      this.router.navigate(['inventory/inventory-manager'])
    });
  }


  inventoryConditionsList;
  getAllInventoryCondtions() {
    this.productService.getAllInventoryCondtions().subscribe(data => {
      this.inventoryConditionsList = data.data;
    })
  }

  addSkuDetails() {
    if (this.addSKUForm.valid) {
      this.skuObj.createdTime = new Date()
      this.productService.addingSku(this.skuObj).subscribe(data => {
        if (data.data != null) {
          this.addSKUForm.reset();
          setTimeout(() => {
            this.skuObj = {}
          }, 500)
          this.successResponse = 'New SKU added successfully';
          this.submit = true
          this.showPopup.show();
        } else {
          // this.successResponse = data.error.message;
          this.successResponse = 'Sku to adding new sku';
          this.showPopup.show();
        }
      })
    } else { 
      this.formValidate = true;
    }
  }

  Okay() {
    this.showPopup.hide();
    if (this.submit) {
      this.router.navigate(['inventory/inventory-manager'])
    }
  }
}

