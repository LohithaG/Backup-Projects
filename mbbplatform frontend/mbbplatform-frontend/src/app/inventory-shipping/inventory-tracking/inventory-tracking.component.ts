import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { InventoryShippingService } from '../inventory-shipping.service';

@Component({
    selector: 'inventory-tracking',
    templateUrl: './inventory-tracking.component.html'
})

export class InventoryTrackingComponent {

    constructor(
        public shippingService: InventoryShippingService,
        private readonly route: ActivatedRoute,
        private readonly router: Router
    ) {

    }
    packageId: any;
    trackingObj: any;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['trackingId'] !== undefined) {
                this.packageId = params['packageId'];
                this.shippingService.getTrackingDetails(params['trackingId']).subscribe((data: any) => {
                    if (data.data != null) {
                        this.trackingObj = data.data;
                    } else {
                        alert("No tracking details added for this package ")
                    }
                })
            } else {
                this.router.navigate(['/shipping'])
            }
        })
    }

}
