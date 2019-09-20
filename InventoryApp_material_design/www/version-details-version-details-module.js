(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["version-details-version-details-module"],{

/***/ "./src/app/+version-details/version-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/+version-details/version-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile\">\n                    <!--<div class=\"card-avatar\">\n                        <a>\n                            <img class=\"img\" src=\"./assets/img/icon.png\" />\n                        </a>\n                    </div>-->\n                    <div class=\"card-body\">\n                        <img class=\"img\" src=\"./assets/img/icon3.png\" width=\"25%\" />\n                        <!--<h6 class=\"card-category text-gray\">MedicalBulkBuy</h6>-->\n                        <h4 class=\"card-title\">{{userName}}</h4>\n                        <div class=\"card-description\">\n                            <div class=\"row\">\n                                <div class=\"col-6\">\n                                    <b> Size</b>\n                                </div>\n                                <div class=\"col-6\">\n                                    9.5 MB\n                                </div>\n                                <div class=\"col-6\">\n                                    <b> Version</b>\n                                </div>\n                                <div class=\"col-6\">\n                                    9.0.0_Production\n                                </div>\n                                <div class=\"col-6\">\n                                    <b> Updated on</b>\n                                </div>\n                                <div class=\"col-6\">\n                                    25/04/2019\n                                </div>\n                                <div class=\"col-6\">\n                                    <b>Port Address</b>\n                                </div>\n                                <div class=\"col-6\">\n                                    https://apis.medicalbulkbuy.com\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+version-details/version-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+version-details/version-details.component.ts ***!
  \***************************************************************/
/*! exports provided: VersionDetailsComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionDetailsComponent", function() { return VersionDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VersionDetailsComponent = /** @class */ (function () {
    function VersionDetailsComponent() {
    }
    VersionDetailsComponent.prototype.ngOnInit = function () {
        /**
       * Back Button event trigger
       */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.userName = localStorage.getItem('userName');
    };
    VersionDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-version',
            template: __webpack_require__(/*! ./version-details.component.html */ "./src/app/+version-details/version-details.component.html")
        })
    ], VersionDetailsComponent);
    return VersionDetailsComponent;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.msgText = localStorage.getItem('msg');
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: "<h2 mat-dialog-title>SKU</h2>\n<mat-dialog-content class=\"mat-typography\">\n  <h3>   {{msgText}}</h3>\n \n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>",
        })
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/+version-details/version-details.module.ts":
/*!************************************************************!*\
  !*** ./src/app/+version-details/version-details.module.ts ***!
  \************************************************************/
/*! exports provided: VersionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionModule", function() { return VersionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _version_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./version-details.component */ "./src/app/+version-details/version-details.component.ts");
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
        component: _version_details_component__WEBPACK_IMPORTED_MODULE_4__["VersionDetailsComponent"]
    }
];
var VersionModule = /** @class */ (function () {
    function VersionModule() {
    }
    VersionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_version_details_component__WEBPACK_IMPORTED_MODULE_4__["VersionDetailsComponent"], _version_details_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            entryComponents: [_version_details_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: []
        })
    ], VersionModule);
    return VersionModule;
}());



/***/ })

}]);
//# sourceMappingURL=version-details-version-details-module.js.map