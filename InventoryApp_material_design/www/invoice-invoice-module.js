(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "./src/app/+dispatch/+invoice/invoice.component.html":
/*!***********************************************************!*\
  !*** ./src/app/+dispatch/+invoice/invoice.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Dispatch Product</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"invoiceForm\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10 col-10\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput name=\"invoiceId\" formControlName=\"invoice\" [(ngModel)]=\"invoiceId\"\n                                            type=\"text\">\n                                        <mat-placeholder class=\"placeholder\">Invoice Id</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"invoiceForm.controls['invoice'].hasError('required') &&formValidate \"\n                                        class=\"text-danger\">Please\n                                        enter InvoiceId</span>\n                                </div>\n                                <div class=\"col-sm-2 col-2\" (click)=\"getInvoiceBybarcode()\" style=\"margin: auto\"><img\n                                        src=\"assets/img/qr-code.png\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10 col-10\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput formControlName=\"noofProducts\" type=\"number\" [(ngModel)]=\"noofProducts\">\n                                        <mat-placeholder class=\"placeholder\">No.of Products</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"invoiceForm.controls['noofProducts'].hasError('required') &&formValidate \"\n                                        class=\" text-danger \">\n                                        Please enter no.of products</span>\n                                  \n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"navigatetoInvoice()\">Submit</button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"navigatetoHomePage()\">Cancel</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+dispatch/+invoice/invoice.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/+dispatch/+invoice/invoice.component.ts ***!
  \*********************************************************/
/*! exports provided: InvoiceComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent(router, _qrScanner, fb, appservice, dialog) {
        this.router = router;
        this._qrScanner = _qrScanner;
        this.fb = fb;
        this.appservice = appservice;
        this.dialog = dialog;
        this.invoiceForm = this.fb.group({
            invoice: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            noofProducts: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        // this.invoiceId = this.invoiceForm.controls['INVOICE']
    }
    InvoiceComponent.prototype.ngOnInit = function () {
        /**
         * Back Button event trigger
         */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    InvoiceComponent.prototype.getInvoiceBybarcode = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                _this.invoiceId = _this.resultQrcode.text;
                localStorage.setItem('invoiceId', _this.resultQrcode.text);
            }
        });
    };
    InvoiceComponent.prototype.navigatetoInvoice = function () {
        var _this = this;
        if (this.invoiceForm.valid) {
            localStorage.setItem('invoiceId', this.invoiceId);
            localStorage.setItem('noofProducts', this.noofProducts);
            this.appservice.getDetailsByDispatchInvoice(this.invoiceId).subscribe(function (data) {
                if (data.error == null) {
                    // localStorage.setItem('QRCode', '0174-0000005')
                    // this.router.navigate(['/dispatch/invoice-view'])
                    _this._qrScanner.promiseScan().then(function (result) {
                        _this.resultQrcode = result;
                        if (!_this.resultQrcode.cancelled) {
                            localStorage.setItem('QRCode', _this.resultQrcode.text);
                            _this.router.navigate(['/dispatch/invoice-view']);
                        }
                    });
                }
                else {
                    _this.openDialog(data.error.message);
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    InvoiceComponent.prototype.navigatetoHomePage = function () {
        this.router.navigate(['./dispatch']);
    };
    InvoiceComponent.prototype.openDialog = function (msgText) {
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
            }
        });
    };
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/+dispatch/+invoice/invoice.component.html"),
            styles: ["\n    .footer-text{\n        font-weight:bold\n    }\n    .mat-focused .placeholder {    \n        color: #AAAAAA;\n        }\n      .placeholder {\n         color:#AAAAAA;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_5__["QRCodeScanner"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], InvoiceComponent);
    return InvoiceComponent;
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

/***/ "./src/app/+dispatch/+invoice/invoice.module.ts":
/*!******************************************************!*\
  !*** ./src/app/+dispatch/+invoice/invoice.module.ts ***!
  \******************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice.component */ "./src/app/+dispatch/+invoice/invoice.component.ts");
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
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"]
    }
];
var InvoiceModule = /** @class */ (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceComponent"], _invoice_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_invoice_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module.js.map