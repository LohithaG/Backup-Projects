import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    public loginForm: FormGroup;
    public email: AbstractControl;
    public password: AbstractControl;
    public otpNotification: string;
    submitted: boolean;
    userLogin = new UserLoginModel('', '');
    loading: any;
    loginErrorMessage: any;


    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly fb: FormBuilder) {
        this.loginForm = fb.group({
            email: [null, Validators.compose([Validators.required,
            Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
            password: [null, Validators.compose([Validators.required])]
        })
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }


    ngOnInit() {
        localStorage.clear();
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    }

    /**
     * Login
     */
    doLogin() {
        if (this.loginForm.valid) {
            this.userAuthentication()
        } else {
            this.submitted = true;
        }
    }



    userAuthentication() {

        this.submitted = true;
        this.loading = true;
        this.authService.login(this.userLogin.username, this.userLogin.password).subscribe(
            (data: any) => {
                if (data.data != null) {
                    localStorage.setItem('userName', data.data.name)
                    localStorage.setItem('userRole', data.data.roles[0].name);
                    localStorage.setItem('currentUser', data.data.email);
                    localStorage.setItem('userData', data.data.id);
                    if (data.data.roles[0].name === 'INVENTORY_MANAG' || data.data.roles[0].name=== 'RETURN_MANAG' || data.data.roles[0].name=== 'PRODUCT_VERIFIER') {
                        this.router.navigate(['/inventory']);
                    } else if (data.data.roles[0].name === 'DISPATCHER') {
                        this.router.navigate(['/dispatch']);
                    }else{
                        this.loading = false;
                        this.loginErrorMessage = "You Don't have access";
                        setTimeout(() => {
                            this.loginErrorMessage = ''
                        }, 3000);
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
