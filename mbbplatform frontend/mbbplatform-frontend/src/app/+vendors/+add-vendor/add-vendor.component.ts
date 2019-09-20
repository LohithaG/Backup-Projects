import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';

import { VendorService } from '../vendors.service';
import { endponitConfig } from '../../environments/endpoints';

@Component({
  selector: 'datatables-users-add',
  templateUrl: './add-vendor.component.html',
  providers: []

})
export class AddVendorComponent implements OnInit {
  public complexForm: FormGroup;
  public vendorname: AbstractControl;

  submitted = false;
  vendorError;
  vendorSuccess;
  public serviceErrorResponse;
  public serviceErrorData;

  userRoles = new Array<{ name: string }>();
  vendorDetails = new VendorModel('', this.userRoles);

  stompClient;
  loading = true;

  constructor(
    private readonly vendorService: VendorService,
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {

   

    this.complexForm = fb.group({
      vendorname: [null, Validators.compose([Validators.required,
      Validators.minLength(3), Validators.maxLength(64), Validators.pattern('[-,.()a-zA-Z0-9_*" "]+')])],
    })
    this.vendorname = this.complexForm.controls['vendorname'];

    this.vendorError = '';
  }

  ngOnInit() {

  }



  addUser() {
    if (this.complexForm.valid) {
     
      this.loading = false;
      this.vendorService.addVendor(this.vendorDetails).subscribe(
        (jsondata: any) => {
          if (jsondata.data) {
            this.loading = true;
            this.vendorSuccess = "Vendor Added Successfully";
            this.vendorError = '';
            setTimeout(() => {
              this.router.navigate(['/vendors'])
            }, 2000)
          } else if (jsondata.error) {
            this.loading = true;
            this.vendorError = jsondata.error.message;
            setTimeout(() => {
              this.vendorError = '';
            }, 5000);
          }
        },
        error => {
          this.serviceErrorResponse = error.exception;
          this.serviceErrorData = true;
          this.vendorError = 'Failed to Create Vendor';
        });
    } else {
      this.submitted = true;
    }

  }

  // cancel vendor button
  cancelVendor() {
    this.vendorError = '';
    this.router.navigate(['/vendors'])
  }
}


export class VendorModel {
  constructor(
    public name: string,

    public roles: UserRolesModel[]) { }
}
export class UserRolesModel {
  constructor(
    public name: string
  ) {
  }
}

