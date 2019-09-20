import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { endponitConfig } from '../../../../environments/endpoints';
import { Global } from '../../../shared/global';
import * as _ from 'lodash';

@Component({
    selector: 'datatables-users-add',
    templateUrl: './add-user.component.html',
    providers: []

})
export class AddUserComponent implements OnInit {
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
            employeId: [null, Validators.compose([Validators.required])],
            roles: [null, Validators.compose([Validators.required])]
        })
        this.username = this.complexForm.controls['username'];
        this.empId = this.complexForm.controls['employeId'];
        this.password = this.complexForm.controls['password'];
        this.roles = this.complexForm.controls['roles'];
        this.userError = '';
    }

    ngOnInit() {
        this.getUserTypeRoles();
        window.scrollTo(0,0)
    }


    getUserTypeRoles() {
        this.userTypeRoles = [];
        // this.userService.getAllUserRoleTypes().subscribe(
        //   data => {
        //     this.userTypeRoles = data;
        //   },
        //   error => {
        //     console.log('Unable to get user roles types' + error.error.message)
        //   });
    }


    getRoleType() {
        if (this.userDetails.role === 'ADMIN') {
            this.empId.setValue('asdf')
            return false;
        } else {
            this.empId.setValue(null)
            return true;
        }
    }

    addUser() {
        this.userDetails.empCode = this.userDetails.role === 'ADMIN' ? "" : this.userDetails.empCode;
        this.userService.addUser(this.userDetails).subscribe((data: any) => {
            if (data.error === null) {
                this.router.navigate(['/admin/users', { data: 'ASuccess' }]);
            } else {
                this.userError = data.error.message;
                setTimeout(() => {
                    this.userError = " "
                }, 3000);
            }
        });
    }

    // cancel user button
    cancelUser() {
        this.userError = '';
        this.router.navigate(['/admin/users'])
    }

    // notificationExample7(a) {
    //   this.alertNotificationService.smallBox({
    //     // title: "James Simmons liked your comment",
    //     content: a,
    //     color: "#296191",
    //     //iconSmall: "",
    //     timeout: 4000
    //   });
    // }

}
