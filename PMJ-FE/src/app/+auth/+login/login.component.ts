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
    userLogin = new UserLoginModel('admin', 'Test@123');
    loading: any;
    loginErrorMessage: any;

    constructor(private readonly router: Router, private readonly authService: AuthService, private readonly fb: FormBuilder, ) {
        this.complexForm = fb.group({
            email: [null, Validators.compose([Validators.required,
            Validators.minLength(3), Validators.maxLength(32), Validators.pattern('[a-zA-Z*" "]+')])],
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
        sessionStorage.removeItem('Authentication')
        this.authService.userAuthentication(this.userLogin.username, this.userLogin.password).subscribe(
            (data: any) => {
                if (data.status === 200) {
                    const authenticate: any = sessionStorage.getItem('Authentication');
                    if (authenticate !== 'null') {
                        this.authService.getUserDetailsByName(this.userLogin.username).subscribe((data: any) => {
                            const role: any = data.data.roles[0].name;
                            sessionStorage.setItem('userName', data.data.userName)
                            sessionStorage.setItem('userRole', data.data.roles[0].name);
                            sessionStorage.setItem('currentUser', data.data.email);
                            sessionStorage.setItem('userData', data.data.id);
                            this.loading = false;
                            if (role === 'ADMIN') {
                                this.router.navigate(['/admin/dashboard']);
                            } else {
                                alert('Only Admin can login')
                            }
                        })
                    } else {
                        alert('Invalid Credentials')
                    }
                } else {
                    sessionStorage.setItem('Authentication', '')
                }
                this.loading = false;
            },
            error => {
                //  alert(error)
                sessionStorage.setItem('Authentication', '')
                this.loading = false;
            });
    }
}


export class UserLoginModel {
    constructor(
        public username: string,
        public password: string
    ) { }
}
