import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
declare var escape: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService],

})
export class LoginComponent implements OnInit {
    public complexForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public otpNotification: string;
    submitted: boolean;
    userLogin = new UserLoginModel('', '');
    loading: any;
    loginErrorMessage: any;

    constructor(private readonly router: Router, private readonly authService: AuthService, private readonly fb: FormBuilder, ) {
        this.complexForm = fb.group({
            email: [null, Validators.compose([Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
            password: [null, Validators.compose([Validators.required])]
        })
        this.email = this.complexForm.controls['email'];
        this.password = this.complexForm.controls['password'];
    }

    ngOnInit() {
        sessionStorage.clear()
        localStorage.clear();

    }

    doLogin() {
        if (this.complexForm.valid) {
            this.login()
        } else {
            this.submitted = true;
        }
    }
    show;
    showHidePassword() {
        this.show = !this.show;
    }
    rolesName;
    login() {
        this.submitted = true;
        this.loading = true;
        this.authService.login(this.userLogin.username, this.userLogin.password).subscribe(
            (data: any) => {
                if (data.data != null) {
                    sessionStorage.setItem('userName', data.data.name)
                    sessionStorage.setItem('userRole', data.data.roles[0].name);
                    sessionStorage.setItem('currentUser', data.data.email);
                    sessionStorage.setItem('userData', data.data.id);
                    sessionStorage.setItem('facilityId', data.data.facilityId.id);
                    this.rolesName = data.data.roles[0].name
                    if (this.rolesName === 'ADMIN' || this.rolesName === 'SUPERADMIN') {
                        this.router.navigate(['/analytics/inventory-graphs']);
                    } else if (this.rolesName === 'ACCOUNTANT_MANAG') {
                        this.router.navigate(['/vendors'])
                    } else if (this.rolesName === 'INVENTORY_MANAG' || this.rolesName === 'RETURN_MANAG' || this.rolesName === 'PRODUCT_VERIFIER') {
                        this.router.navigate(['/dashboard/reports/inventory']);
                    } else if (this.rolesName === 'DISPATCHER') {
                        this.router.navigate(['/dashboard/reports/dispatch']);
                    } else if (this.rolesName === 'ACCOUNTANT') {
                        this.router.navigate(['/vendors']);
                    }
                } else {
                    this.loading = false;
                    this.loginErrorMessage = 'Please enter valid credentials';
                    setTimeout(() => {
                        this.loginErrorMessage = ''
                    }, 3000);
                }
                this.loading = false;
            }, error => {
                this.loading = false;
                this.router.navigate(['/error']);
                this.loading = false;
                this.loginErrorMessage = 'Please enter valid credential';
                setTimeout(() => {
                    this.loginErrorMessage = ''
                }, 3000);
            });
    }

}


export class UserLoginModel {
    constructor(
        public username: string,
        public password: string
    ) { }
}
