webpackJsonp([5,49],{

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpComponent; });
/* unused harmony export UserOTPModel */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtpComponent = (function () {
    function OtpComponent(alertNotificationService, route, router, authService, fb) {
        this.alertNotificationService = alertNotificationService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.userRegisterModel = new UserOTPModel('', '');
        this.loading = false;
        this.complexForm = fb.group({
            otp: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('^[0-9]{6,6}$')])],
            password: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[~!@#$%^&+=]).{6,32}$')])],
            retypePassword: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        }, { validator: this.MatchPassword });
        this.otp = this.complexForm.controls['otp'];
        this.password = this.complexForm.controls['password'];
        this.retypePassword = this.complexForm.controls['retypePassword'];
    }
    OtpComponent.prototype.MatchPassword = function (control) {
        var password = control.get('password').value; // to get value in input tag
        var confirmPassword = control.get('retypePassword').value;
        // to get value in input tag
        if (confirmPassword != null) {
            if (password !== confirmPassword) {
                control.get('retypePassword').setErrors({ MatchPassword: true });
            }
            else {
                return null;
            }
        }
    };
    OtpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.data !== undefined) {
                if (params.data === 'Success') {
                    _this.forgotPasswordMessage = 'OTP has been sent to the registered Mobile Number/Email';
                }
            }
        });
    };
    OtpComponent.prototype.register = function (event) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.authService.userOTP(event.otp, event.password).subscribe(function (data) {
            if (data.data != null) {
                _this.errorMessage = '';
                localStorage.setItem('userRole', data.data.roles[0].name);
                //  localStorage.setItem('currentUser', data.data.email);
                localStorage.setItem('Authentication', btoa(data.data.email + ':' + event.password));
                //  this.router.navigate(['/login'])
                _this.loading = false;
                // this.notificationAlert('Now you can Login with valid Credentilas');
                _this.router.navigate(['/login', { data: 'Success' }]);
            }
            else {
                _this.loading = false;
                _this.errorMessage = data.error.message;
                console.log(data.error.message);
            }
        }, function (error) {
            _this.loading = false;
            _this.errorMessage = 'Enter  OTP and Password';
        });
        // if (event.otp == '123') {
        //    this.errorMessage=''
        //   this.router.navigate(['/login'])
        // }else if(event.otp != '123' && event.otp != ''){
        //    this.errorMessage='Invalid OTP'
        // }
        // else if(event.otp == ''){
        //    this.errorMessage='Enter  OTP and Password';
        // }
    };
    OtpComponent.prototype.notificationAlert = function (a) {
        this.alertNotificationService.smallBox({
            // title: 'James Simmons liked your comment',
            content: a,
            color: '#296191',
            // iconSmall: '',
            timeout: 4000
        });
    };
    return OtpComponent;
}());
OtpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-otp',
        template: __webpack_require__(1309),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* AlertNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* AlertNotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object])
], OtpComponent);

var UserOTPModel = (function () {
    function UserOTPModel(password, otp) {
        this.password = password;
        this.otp = otp;
    }
    return UserOTPModel;
}());

var _a, _b, _c, _d, _e;
//# sourceMappingURL=otp.component.js.map

/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_component__ = __webpack_require__(1191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__otp_component__["a" /* OtpComponent */]
    }];
var OtpRoutingModule = (function () {
    function OtpRoutingModule() {
    }
    return OtpRoutingModule;
}());
OtpRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], OtpRoutingModule);

//# sourceMappingURL=otp-routing.module.js.map

/***/ }),

/***/ 1309:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <p class=\"logoBox\">\n    <img alt=\"Solar\" class=\"logoImage\" src=\"assets/img/solar.png\">\n    <span class=\"logoName\">Solar</span>\n  </p>\n\n\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-6 col-md-offset-2 \">\n        <!--<div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">-->\n        <div class=\"well no-padding\">\n\n          <form [formGroup]=\"complexForm\" method=\"post\" *ngIf=\"userRegisterModel\" class=\"smart-form client-form\">\n            <header>\n              User Registration Confirmation with OTP\n            </header>\n            <fieldset>\n\n              <section *ngIf=\"errorMessage\" class=\"icon-color-bad text-center\"> {{errorMessage}} </section>\n              <section *ngIf=\"forgotPasswordMessage\" class=\"text-success text-center\">{{forgotPasswordMessage}}</section>\n              <section>\n                <label class=\"label\" for=\"otp\" [ngClass]=\"{'has-error':! this.otp.valid &&  this.otp}\">OTP</label>\n\n                <div class=\"form-group form-control  input\">\n                  <label class=\"input\">\n                    <i class=\"icon-append fa fa-user\"></i>\n                    <input type=\"text\" name=\"otp\" [formControl]=\"this.otp\" [(ngModel)]=\"userRegisterModel.otp\" placeholder=\"OTP\" />\n\n                    <span *ngIf=\" this.otp.hasError('required') &&submitted  \" class=\" icon-color-bad \">Please enter otp</span>\n\n                    <span *ngIf=\" this.otp.hasError('pattern') \" class=\" icon-color-bad \">Please enter only 6 numeric characters for OTP</span>\n\n                  </label>\n                </div>\n              </section>\n              <br />\n\n              <section>\n                <label class=\"label\" for=\"password\" [ngClass]=\"{'has-error':! this.password.valid &&  this.password}\">Password</label>\n\n                <div class=\"form-group form-control  input\">\n                  <label class=\"input\">\n                    <i class=\"icon-append fa fa-lock\"></i>\n                    <input type=\"password\" name=\"password\" [formControl]=\"this.password\" [(ngModel)]=\"userRegisterModel.password\" placeholder=\"Password\"\n                    />\n\n                    <span *ngIf=\" this.password.hasError('pattern') \" class=\" icon-color-bad \">Please enter atleast one number, one small letter, one capital letter and one special character for password</span>\n                    <span *ngIf=\" this.password.hasError('required')  && submitted\" class=\" icon-color-bad \">Please enter password</span>\n                  </label>\n                </div>\n              </section>\n              <br />\n              <br />\n              <section>\n                <label class=\"label\" for=\"retypePassword\" [ngClass]=\"{'has-error':! this.retypePassword.valid &&  this.retypePassword}\">Confirm Password</label>\n\n                <div class=\"form-group form-control  input\">\n                  <label class=\"input\">\n                    <i class=\"icon-append fa fa-lock\"></i>\n                    <input type=\"password\" name=\"retypePassword\" [formControl]=\"this.retypePassword\" [(ngModel)]=\"userRegisterModel.reTypepassword\"\n                      placeholder=\"Password\" />\n\n                    <!-- <span *ngIf=\" this.password.hasError('pattern') \" class=\" icon-color-bad \">Please Enter atleast one number, one small letter, one capital letter and one special character for password</span> -->\n                    <!--<span class=\" icon-color-bad \" *ngIf=\"complexForm.controls.retypePassword.errors?.MatchPassword \">Password not match.</span>-->\n\n                    <span class=\" icon-color-bad \" *ngIf=\" (userRegisterModel.reTypepassword) && (userRegisterModel.password != userRegisterModel.reTypepassword) \">Password miss match</span>\n                    <span *ngIf=\" this.retypePassword.hasError('required')  && submitted\" class=\" icon-color-bad \">Please Enter Re-Type Password</span>\n                  </label>\n                </div>\n              </section>\n\n            </fieldset>\n            <br>\n\n\n            <div class=\"row show-grid\">\n              <div class=\"col-xs-1 \"> </div>\n              <div class=\"col-xs-4 \">\n                <span class=\"hidden-mobile hiddex-xs\">Already registered?</span>\n                <a routerLink=\"/login\">\n                  <u>Sign In</u>\n                </a>\n              </div>\n            </div>\n            <br>\n\n            <footer>\n              <button (click)=\"register(userRegisterModel)\" [disabled]=\"!complexForm.valid\" class=\"btn btn-primary\">\n                Confirm\n                <i class=\"fa fa-cog fa-spin\" *ngIf=\"loading\"></i>\n                <span *ngIf=\"loading\">loading...</span>\n              </button>\n            </footer>\n          </form>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_routing_module__ = __webpack_require__(1236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__otp_component__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModule", function() { return OtpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OtpModule = (function () {
    function OtpModule() {
    }
    return OtpModule;
}());
OtpModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__otp_routing_module__["a" /* OtpRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__otp_component__["a" /* OtpComponent */]]
    })
], OtpModule);

//# sourceMappingURL=otp.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map