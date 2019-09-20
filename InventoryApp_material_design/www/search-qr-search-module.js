(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-qr-search-module"],{

/***/ "./src/app/+qr-management/search/qr-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/+qr-management/search/qr-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+qr-management/search/qr-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/+qr-management/search/qr-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding:30px 1px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"example-form\">\r\n                    <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"QR Code\" [(ngModel)]=\"qrCode\">\r\n                    </mat-form-field>\r\n                    <div style=\"color:red\" *ngIf=\"submitted\">Please enter QR Code</div><br>\r\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"getQrCode()\">Get QR</button>\r\n                    <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoPreviousPage()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/+qr-management/search/qr-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/+qr-management/search/qr-search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchQrComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQrComponent", function() { return SearchQrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchQrComponent = /** @class */ (function () {
    function SearchQrComponent(dialog, router, _appService) {
        this.dialog = dialog;
        this.router = router;
        this._appService = _appService;
        this.qrCode = '';
        this.submitted = false;
    }
    SearchQrComponent.prototype.getQrCode = function () {
        var _this = this;
        if (this.qrCode.length > 0) {
            this._appService.getQrCode(this.qrCode).subscribe(function (data) {
                if (data.data != null) {
                    _this.qrCode = '';
                    _this.openDialog('QR Code reprinted successfully');
                }
                else {
                    _this.openDialog("Please enter valid QR Code");
                }
            });
        }
        else {
            this.submitted = true;
            setTimeout(function () {
                _this.submitted = false;
            }, 2000);
        }
    };
    SearchQrComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.qrCode = '';
        });
        localStorage.setItem('msg', text);
    };
    SearchQrComponent.prototype.gotoPreviousPage = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['./inventory']);
        });
    };
    SearchQrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'generate-QR',
            template: __webpack_require__(/*! ./qr-search.component.html */ "./src/app/+qr-management/search/qr-search.component.html"),
            styles: [__webpack_require__(/*! ./qr-search.component.css */ "./src/app/+qr-management/search/qr-search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SearchQrComponent);
    return SearchQrComponent;
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
            template: "<img class=\"mat-typography img1\" src=\"assets/img/logom.png\" alt=\"MedicalBulkBuy\" width=\"90%\"   >\n    <mat-dialog-content class=\"mat-typography\" style=\"border-bottom:1px solid #ddd;border-top:1px solid #ddd; text-align:center\">\n     \n    <h5 style=\"padding: 18px;margin: 0px;font-size: 14px;font-family: sans-serif;\">{{msgText}}</h5>\n    </mat-dialog-content>\n   \n    <mat-dialog-actions align=\"center\" >\n    <button mat-stroked-button [mat-dialog-close]=\"true\" cdkFocusInitial > \n    <mat-icon>done</mat-icon>\n    Ok\n</button>\n    </mat-dialog-actions>\n  ",
        })
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/+qr-management/search/qr-search.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/+qr-management/search/qr-search.module.ts ***!
  \***********************************************************/
/*! exports provided: SearchQrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchQrModule", function() { return SearchQrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_qr_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/qr-search.component */ "./src/app/+qr-management/search/qr-search.component.ts");
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
        component: _search_qr_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchQrComponent"]
    }
];
var SearchQrModule = /** @class */ (function () {
    function SearchQrModule() {
    }
    SearchQrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_search_qr_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchQrComponent"], _search_qr_search_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_search_qr_search_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], SearchQrModule);
    return SearchQrModule;
}());



/***/ })

}]);
//# sourceMappingURL=search-qr-search-module.js.map