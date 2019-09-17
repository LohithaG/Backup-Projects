webpackJsonp([21,49],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_routing__ = __webpack_require__(1239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_component__ = __webpack_require__(1238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__auth_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__auth_component__["a" /* AuthComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 1238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: '<router-outlet></router-outlet>',
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ 1239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    {
        path: 'login',
        loadChildren: './+login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './+register/register.module#RegisterModule'
    },
    {
        path: 'forgot-password',
        loadChildren: './+forgot/forgot.module#ForgotModule'
    },
    {
        path: 'locked',
        loadChildren: './+locked/locked.module#LockedModule'
    },
    {
        path: 'otp',
        loadChildren: './+otp/otp.module#OtpModule'
    },
    {
        path: 'error',
        loadChildren: './+error/error.module#ErrorModule'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=auth.routing.js.map

/***/ })

});
//# sourceMappingURL=21.chunk.js.map