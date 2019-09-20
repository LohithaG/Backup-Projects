(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispatch-view-dispatch-view-module"],{

/***/ "./src/app/+dispatch/+dispatch-view/dispatch-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-view/dispatch-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\" style=\"padding:0px;margin:0px\">\n        <div class=\"row scan-btn\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4 col-xs-4 col-md-4 col-12\">\n                <button class=\"btn btn-info btn-block btn-fill\" (click)=\"getProductDetails()\"> Scan </button>\n            </div>\n            <div class=\"col-sm-4\"></div>\n        </div>\n        <br><br>\n        <div class=\"row\" *ngIf=\"productInfo\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Product Details</h4>\n                    </div>\n                    <div class=\"card-body\" style=\"padding-top:13px;padding-left:11px;padding-right:0px\">\n                        <div class=\"row\">\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                <b>QR Code</b>\n                            </p>\n                            <p class=\"col-sm-1 col-md-1 col-1\">:</p>\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                {{productInfo.barcode}}\n                            </p>\n                           \n                           \n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                <b> Invoice </b>\n                            </p>\n                            <p class=\"col-sm-1 col-md-1 col-1\">:</p>\n\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                {{productInfo.invoiceId}}\n                            </p>\n\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                <b> Created By</b>\n                            </p>\n                            <p class=\"col-sm-1 col-md-1 col-1\">:</p>\n\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                {{productInfo.createdUser}}\n                            </p>\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                <b>Date</b>\n                            </p>\n                            <p class=\"col-sm-1 col-md-1 col-1\">:</p>\n\n                            <p class=\"col-sm-5 col-md-5 col-5\">\n                                {{productInfo.createdTime|date}}\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn btn-info btn-block btn-fill\" (click)=\"addToDispatch()\"> DISPATCH </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+dispatch/+dispatch-view/dispatch-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-view/dispatch-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: DispatchViewComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchViewComponent", function() { return DispatchViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DispatchViewComponent = /** @class */ (function () {
    function DispatchViewComponent(dialog, _qrScanner, _appService, _router) {
        this.dialog = dialog;
        this._qrScanner = _qrScanner;
        this._appService = _appService;
        this._router = _router;
    }
    DispatchViewComponent.prototype.ngOnInit = function () {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    DispatchViewComponent.prototype.getProductDetails = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                _this._appService.dataFromUnicommerce(_this.resultQrcode.text).subscribe(function (data) {
                    if (data.data != null) {
                        _this.productInfo = data.data;
                    }
                    else {
                        _this.openDialog('Before dispatch add Manifest');
                    }
                });
            }
            else {
                _this.goToHomePage();
            }
        });
    };
    DispatchViewComponent.prototype.addToDispatch = function () {
        var _this = this;
        this._appService.addToDispatch(this.productInfo).subscribe(function (data) {
            if (data.data != null) {
                _this.openDialog('Dispatched product successfully');
            }
            else {
                _this.openDialog('data.error.message');
                //this.openDialog(data.error.message)
            }
        });
    };
    DispatchViewComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.goToHomePage();
            }
        });
    };
    DispatchViewComponent.prototype.goToHomePage = function () {
        this._router.navigate(['./dispatch']);
    };
    DispatchViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dispatch-view',
            template: __webpack_require__(/*! ./dispatch-view.component.html */ "./src/app/+dispatch/+dispatch-view/dispatch-view.component.html"),
            styles: [
                "\n        md-checkbox .md-icon {\n    background: red;\n}\nmd-checkbox.md-default-theme.md-checked .md-icon {\n    background: orange;\n}\n.mat-focused .placeholder {    \n    color: #AAAAAA;\n    }\n  .placeholder {\n     color:#AAAAAA;\n    }\n        \n        "
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__["QRCodeScanner"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DispatchViewComponent);
    return DispatchViewComponent;
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

/***/ "./src/app/+dispatch/+dispatch-view/dispatch-view.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-view/dispatch-view.module.ts ***!
  \******************************************************************/
/*! exports provided: DispatchViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchViewModule", function() { return DispatchViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dispatch_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch-view.component */ "./src/app/+dispatch/+dispatch-view/dispatch-view.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
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
        component: _dispatch_view_component__WEBPACK_IMPORTED_MODULE_4__["DispatchViewComponent"]
    }
];
var DispatchViewModule = /** @class */ (function () {
    function DispatchViewModule() {
    }
    DispatchViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            ],
            declarations: [_dispatch_view_component__WEBPACK_IMPORTED_MODULE_4__["DispatchViewComponent"], _dispatch_view_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_dispatch_view_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], DispatchViewModule);
    return DispatchViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=dispatch-view-dispatch-view-module.js.map