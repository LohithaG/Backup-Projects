import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { endponitConfig } from '../../../../environments/endpoints';

declare var $;

@Component({
  selector: 'datatables-users-edit',
  templateUrl: './edit-user.component.html',
  providers: []

})
export class EditUserComponent implements OnInit {
  public complexForm: FormGroup;
  public username: AbstractControl;
  public empId: AbstractControl;
  public password: AbstractControl;
  public roles: AbstractControl;
  submitted = false;
  public userTypeRoles;
  userError;
  public serviceErrorResponse;
  public serviceErrorData;
  userEditMessage
  userSuccess: any = '';
  userRoles = new Array<{ name: string }>();
  userDetails: any = {
    "userName": '',
    "password": '',
    "role": '',
    "empCode": ''
  };

  stompClient;


  constructor(private userService: UserService,
    private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private cdr: ChangeDetectorRef) {

    this.complexForm = fb.group({
      username: [null, Validators.compose([Validators.required,
      Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z*" "]+')])],
      password: [null, Validators.compose([Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[~!@#$%^&+=]).{6,32}$')])],
      employeId: [null],
      roles: [null, Validators.compose([Validators.required])]
    })
    this.username = this.complexForm.controls['username'];
    this.empId = this.complexForm.controls['employeId'];
    this.password = this.complexForm.controls['password'];
    this.roles = this.complexForm.controls['roles'];
    this.userError = '';
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['userId'] !== undefined) {
        const userId: string = +params['userId'] + '';
        this.userService.getUserDetailsByID(userId).subscribe((user: any) => {
          this.userDetails = user;
          this.userDetails.role = this.userDetails.roles[0].name;
          this.userDetails.password = "";
          if (this.userDetails.empCode === null) {
            this.empId.setValidators(Validators.compose([Validators.required]));
          } else {
            this.empId.clearValidators()
            this.empId.updateValueAndValidity()
          }
        });
      } else {
        // this.navigated = false;
      }
    });
    window.scrollTo(0, 0)

  }

  getRoleType() {
    if (this.userDetails.role === 'ADMIN') {
      this.empId.clearValidators()
      this.empId.updateValueAndValidity()
    } else {
      this.empId.setValidators(Validators.compose([Validators.required]));
    }
  }
  // cancel user button
  cancelUser() {
    this.userError = '';
    this.router.navigate(['/admin/users'])
  }


  updateUser() {
    console.log(this.userDetails)
    this.userService.updateUser(this.userDetails).subscribe(
      data => {
        if (data.error === null) {
          this.router.navigate(['/admin/users', { data: 'USuccess' }])
        } else {
          this.userError = data.error.message;
          setTimeout(() => {
            this.userError = '';
          }, 5000);
        }
      });
  }

  showPopup() {
    alert('To view updated changes you need to re-login')
  }
  // cancel user edit button
  cancelEditUser() {
    this.userEditMessage = '';
    this.router.navigate(['/admin/users']);
  }

}
