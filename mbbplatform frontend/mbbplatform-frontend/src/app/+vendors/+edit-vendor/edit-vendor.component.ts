import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray, FormsModule } from '@angular/forms';
import { VendorService } from '../vendors.service';
import { endponitConfig } from '../../environments/endpoints';
import { Global } from '../../shared/global';
declare var $;


@Component({
    selector: 'datatables-users-edit',
    templateUrl: './edit-vendor.component.html',
    providers: []

})
export class EditVendorComponent implements OnInit {

    public complexForm: FormGroup;
    public vendorname: AbstractControl;

    submitted = false;

    vendorDetails: any = {};
    vendorEditMessage;
    vendorEditerrorMessage;
    public serviceErrorResponse;
    public serviceErrorData;

    constructor(
        private readonly vendorService: VendorService, private readonly route: ActivatedRoute, private readonly fb: FormBuilder,
        private readonly router: Router, private readonly cdr: ChangeDetectorRef) {
        this.complexForm = fb.group({
            vendorname: [null, Validators.compose([Validators.required,
            Validators.minLength(3), Validators.maxLength(64), Validators.pattern('[-,.()a-zA-Z0-9_*" "]+')])],
        })
        this.vendorname = this.complexForm.controls['vendorname'];
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['vendorId'] !== undefined) {
                const vendorId: string = +params['vendorId'] + '';
                this.vendorService.getVendorDetailsByID(vendorId).subscribe((vendorData: any) => {
                    if (vendorData.error == null) {
                        this.vendorDetails = vendorData.data;
                        this.cdr.detectChanges();
                    }
                })
            }
        });
    }


    updateUser() {
        this.vendorService.updateVendor(this.vendorDetails).subscribe(
            (data: any) => {
                if (data.error == null) {
                    this.vendorEditMessage = 'Vendor Name updated successfully';
                    setTimeout(() => {
                        this.vendorEditMessage = '';
                        this.router.navigate(['/vendors']);
                    }, 3000);
                } else {
                    this.vendorEditerrorMessage = data.error.message;
                    setTimeout(() => {
                        this.vendorEditerrorMessage = '';

                    }, 3000);
                }
            },
            error => {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                this.vendorEditerrorMessage = 'Failed to Update Vendor';
                sessionStorage.setItem('status', '401')
                this.router.navigate(['/error']);
            });
    }


    // cancel user edit button
    cancelEditVendor() {
        this.vendorEditMessage = '';
        this.router.navigate(['/vendors']);
    }


}
