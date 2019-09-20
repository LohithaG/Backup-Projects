(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispatch-home-dispatch-home-module"],{

/***/ "./src/app/+dispatch/+dispatch-home/dispatch-home.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-home/dispatch-home.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">DISPATCH<br>MANAGEMENT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 footer-text\" style=\"text-align:center\" (click)=\"navigateToInvoiceView()\">\n                            Invoice\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+dispatch/+dispatch-home/dispatch-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-home/dispatch-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: DispatchManagerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchManagerHomeComponent", function() { return DispatchManagerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DispatchManagerHomeComponent = /** @class */ (function () {
    function DispatchManagerHomeComponent(router, _qrScanner) {
        this.router = router;
        this._qrScanner = _qrScanner;
    }
    DispatchManagerHomeComponent.prototype.ngOnInit = function () {
        /**
         * Back Button event trigger
         */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    /**
    * navigate to Dispatch Details
    */
    DispatchManagerHomeComponent.prototype.navigateTodispatchView = function () {
        this.router.navigate(['/dispatch/view']);
    };
    DispatchManagerHomeComponent.prototype.navigateTomanifestView = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', _this.resultQrcode.text);
                _this.router.navigate(['/dispatch/manifest']);
            }
        });
    };
    DispatchManagerHomeComponent.prototype.navigateToInvoiceView = function () {
        this.router.navigate(['/dispatch/invoice']);
    };
    DispatchManagerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dispatch-home',
            template: __webpack_require__(/*! ./dispatch-home.component.html */ "./src/app/+dispatch/+dispatch-home/dispatch-home.component.html"),
            styles: ["\n    .footer-text{\n        font-weight:bold\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__["QRCodeScanner"]])
    ], DispatchManagerHomeComponent);
    return DispatchManagerHomeComponent;
}());



/***/ }),

/***/ "./src/app/+dispatch/+dispatch-home/dispatch-home.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-home/dispatch-home.module.ts ***!
  \******************************************************************/
/*! exports provided: DispatchHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchHomeModule", function() { return DispatchHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dispatch_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch-home.component */ "./src/app/+dispatch/+dispatch-home/dispatch-home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _dispatch_home_component__WEBPACK_IMPORTED_MODULE_4__["DispatchManagerHomeComponent"]
    }
];
var DispatchHomeModule = /** @class */ (function () {
    function DispatchHomeModule() {
    }
    DispatchHomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_dispatch_home_component__WEBPACK_IMPORTED_MODULE_4__["DispatchManagerHomeComponent"]],
            providers: [],
            entryComponents: []
        })
    ], DispatchHomeModule);
    return DispatchHomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=dispatch-home-dispatch-home-module.js.map