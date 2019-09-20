import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';

import { FadeInTop } from '../../shared/animations/fade-in-top.decorator';

import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormsModule, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { UserService } from '../user.service';





import { endponitConfig } from '../../environments/endpoints';
import { Global } from '../../shared/global';
declare var SockJS;
declare var Stomp;
declare var $;


@FadeInTop()
@Component({
  selector: 'datatables-users-edit',
  templateUrl: './edit-user.component.html',
  providers: []

})
export class EditUserComponent implements OnInit {
  public complexForm: FormGroup;
  public username: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;
  public roles: AbstractControl;
  public facility: AbstractControl;
  public notification: AbstractControl;
  selectedFacilityId: any = '';
  submitted = false;
  userRoles: string;
  userDetails: any = { facilityId: {} };
  userEditMessage;
  userEditerrorMessage;
  public serviceErrorResponse;
  public serviceErrorData;

  stompClient;


  constructor(
    //private activitiesComponent: ActivitiesComponent, private alertNotificationService: AlertNotificationService,
    private readonly userService: UserService, private readonly route: ActivatedRoute, private readonly fb: FormBuilder,
    private readonly router: Router, private readonly cdr: ChangeDetectorRef) {
    this.userRoles = '';
    this.complexForm = fb.group({
      username: [null, Validators.compose([Validators.required,
      Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z*" "]+')])],
      email: [null, Validators.compose([Validators.required,
      Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
      //    phone: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]{10,16}$')])],
      roles: [null, Validators.compose([Validators.required])],
      facility: [null, Validators.compose([Validators.required])],
      // notification: [false, Validators.compose([Validators.requiredTrue])],
    })
   
    this.username = this.complexForm.controls['username'];
    this.email = this.complexForm.controls['email'];
    this.roles = this.complexForm.controls['roles'];
    this.facility = this.complexForm.controls['facility'];
    // this.notification = this.complexForm.controls['notification'];
  }
  facilityList = [{ id: 1, name: 'MBB_Hyderabad' }, { id: 2, name: 'MBB_Bangalore' }, { id: 3, name: 'Amazon_flex' }]
  userRole; loginId;
  disableSelect = false;
  ngOnInit() {
    this.userRole = sessionStorage.getItem('userRole')
    this.loginId = sessionStorage.getItem('userData')
    this.getUserTypeRoles();
    this.route.params.forEach((params: Params) => {
      if (params['userId'] !== undefined) {
        const userId: string = +params['userId'] + '';
        this.userService.getUserDetailsByID(userId).then(user => {
          this.userDetails = user;
          if (this.userDetails.notificationStatus) {
            this.chk = true
            this.yes = true;
          } else {
            this.no = true;
            this.chk = true
          }
          if (this.userDetails.id == this.loginId) {
            this.disableSelect = true
          }
          this.selectedFacilityId = user.facilityId.id ? user.facilityId.id : 1;
          if (this.userDetails.roles) {
            for (const uRoles of this.userDetails.roles) {
              this.userRoles = uRoles.name;
            }
            if (this.userRoles === undefined) {
              this.userRoles = 'USER';
            }
          }
          this.cdr.detectChanges();
        }).catch(this.handleError);
      }
    });

  }

  no = false; yes = false; chk = false
  notificationChecked(e) {
    if (e.target.checked) {
      this.chk = true
      this.no = false;
      this.yes = true;
    } else {
      this.yes = false;
      this.chk = false
    }
  }
  notificationChecked1(e) {
    if (e.target.checked) {
      this.chk = true
      this.yes = false;
      this.no = true;
    } else {
      this.no = false;
      this.chk = false
    }
  }

  userTypeRoles
  getUserTypeRoles() {
    this.userService.getAllUserRoleTypes().subscribe(
      data => {
        this.userTypeRoles = data.data;
      },
      error => {
        console.log('Unable to get user roles types')
      });
  }


  private handleError(error: any) {
    if (error.status === 500 || error.status === 404) {
      error = error.json();
      this.serviceErrorResponse = error.exception;
      this.serviceErrorData = true;
      return Observable.throwError(error._body);
    } else {
      sessionStorage.setItem('status', '401')
      // 401 unauthorized response so log user out of client
      window.location.href = '/#/error';
      return Observable.throwError(error._body);
    }
  }
  updateUser() {
    if (this.complexForm.valid && this.chk) {
      if (this.userDetails.roles.length !== 0) {
        this.userDetails.roles[0].name = this.userRoles;
      } else {
        const userRolesrDetails = {
          'name': this.userRoles
        }
        this.userDetails.roles.push(userRolesrDetails)
      }
      this.userDetails.facilityId = { id: this.selectedFacilityId }
      if (this.yes == true) {
        this.userDetails.notificationStatus = true;
      } else if (this.no == true) {
        this.userDetails.notificationStatus = false;
      }
      this.userService.updateUser(this.userDetails).subscribe(
        (data: any) => {
          if (data.error === null) {
            this.userEditMessage = '';

            if (this.userDetails.id === Number(sessionStorage.getItem('userData'))) {
              this.showPopup();


            } else {
              this.userEditMessage = "User Updated Successfully";
              setTimeout(() => {
                this.userEditMessage = '';
                this.router.navigate(['/users'])
              }, 3000);
            }


          } else {
            this.userEditerrorMessage = data.error.message;
            setTimeout(() => {
              this.userEditerrorMessage = '';
            }, 3000);
          }
        },
        error => {
          this.serviceErrorResponse = error.exception;
          this.serviceErrorData = true;
          this.userEditMessage = 'Failed to Update User';
          sessionStorage.setItem('status', '401')
          this.router.navigate(['/error']);
        });
    } else {
      this.submitted = true;
    }
  }

  showPopup() {
    alert('user details updated successfully please re-login for authentication purpose')
    //this.router.navigate(['/auth/login'])
    sessionStorage.clear()
    window.location.href = "/auth/login";


  }
  // cancel user edit button
  cancelEditUser() {
    this.userEditMessage = '';
    this.router.navigate(['/users']);
  }
  // notificationExample7() {
  //   this.alertNotificationService.smallBox({
  //     // title: "James Simmons liked your comment",
  //     content: 'User Edit Successfully',
  //     color: "#296191",
  //     //iconSmall: "",
  //     timeout: 4000
  //   });
  // }

}
