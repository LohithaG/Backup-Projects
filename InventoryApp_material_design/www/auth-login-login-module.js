(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/+auth/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/+auth/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('assets/img/background.jpg'); background-size: cover; background-position: top center;height: 100%;\">\n        <div class=\"container\">\n            <br><br><br><br>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\n                    <!--<form [formGroup]=\"complexForm\" method=\"post\" *ngIf=\"userLogin\" class=\"smart-form client-form\">-->\n                    <form [formGroup]=\"loginForm\" class=\"form ng-untouched ng-pristine ng-valid\" method=\"\" novalidate=\"\">\n                        <div class=\"card card-login\">\n                            <div class=\"card-header text-center\">\n                                <img src=\"assets/img/logom.png\" width=\"100%\">\n                            </div>\n                            <div class=\"card-body \">\n                                <span class=\"bmd-form-group\">\n                                    <div class=\"input-group\">\n                                        <input class=\"form-control\" placeholder=\"Username\" type=\"email\" [formControl]=\"this.email\"\n                                            [(ngModel)]=\"userLogin.username\">\n\n                                    </div>\n                                    <b *ngIf=\" this.email.hasError('required') &&submitted  \" class=\" text-danger \">Please\n                                        enter valid email</b>\n\n                                    <b *ngIf=\" this.email.hasError('pattern') \" class=\" text-danger \">Please enter\n                                        valid email</b>\n                                </span>\n                                <br>\n                                <span class=\"bmd-form-group\">\n                                    <div class=\"input-group\">\n                                        <input class=\"form-control\" placeholder=\"Password\" type=\"password\"\n                                            [formControl]=\"this.password\" [(ngModel)]=\"userLogin.password\">\n                                    </div>\n                                    <b *ngIf=\" this.password.hasError('required')  && submitted\" class=\" text-danger \">Please\n                                        enter valid Password</b>\n                                </span>\n\n                            </div>\n                            <br>\n                            <span style=\"color:red;text-align:center\">{{loginErrorMessage}}</span>\n                            <div class=\"card-footer justify-content-center\">\n                                <button mat-raised-button color=\"primary\" (click)=\"doLogin()\">Login</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer \">\n            <div class=\"container\">\n\n\n            </div>\n        </footer>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+auth/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/+auth/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent, UserLoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginModel", function() { return UserLoginModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, authService, fb) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.fb = fb;
        this.userLogin = new UserLoginModel('', '');
        this.loginForm = fb.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    /**
     * Login
     */
    LoginComponent.prototype.doLogin = function () {
        if (this.loginForm.valid) {
            this.userAuthentication();
        }
        else {
            this.submitted = true;
        }
    };
    LoginComponent.prototype.userAuthentication = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.authService.login(this.userLogin.username, this.userLogin.password).subscribe(function (data) {
            if (data.data != null) {
                localStorage.setItem('userName', data.data.name);
                localStorage.setItem('userRole', data.data.roles[0].name);
                localStorage.setItem('currentUser', data.data.email);
                localStorage.setItem('userData', data.data.id);
                if (data.data.roles[0].name === 'INVENTORY_MANAG' || data.data.roles[0].name === 'RETURN_MANAG' || data.data.roles[0].name === 'PRODUCT_VERIFIER') {
                    _this.router.navigate(['/inventory']);
                }
                else if (data.data.roles[0].name === 'DISPATCHER') {
                    _this.router.navigate(['/dispatch']);
                }
                else {
                    _this.loading = false;
                    _this.loginErrorMessage = "You Don't have access";
                    setTimeout(function () {
                        _this.loginErrorMessage = '';
                    }, 3000);
                }
            }
            else {
                _this.loading = false;
                _this.loginErrorMessage = 'Please enter valid credentials';
                setTimeout(function () {
                    _this.loginErrorMessage = '';
                }, 3000);
            }
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            _this.loginErrorMessage = 'Please enter valid credential';
            setTimeout(function () {
                _this.loginErrorMessage = '';
            }, 3000);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/+auth/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());

var UserLoginModel = /** @class */ (function () {
    function UserLoginModel(username, password) {
        this.username = username;
        this.password = password;
    }
    return UserLoginModel;
}());



/***/ }),

/***/ "./src/app/+auth/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/+auth/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/+auth/login/login.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map