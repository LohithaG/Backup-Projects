(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispatch-manifest-dispatch-manifest-module"],{

/***/ "./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Dispatch Product</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"dispatchForm\" method=\"post\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"QR Code\" name=\"barcode\" [(ngModel)]=\"productData.barcode\"\n                                            type=\"text\" readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SKU Code\" type=\"text\" name=\"skucode\" [(ngModel)]=\"productData.inventoryId.skuCode\"\n                                            readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Product Name\" type=\"text\" name=\"productName\"\n                                            [(ngModel)]=\"productData.inventoryId.productName\" readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Facility\" type=\"text\" name=\"facility\" [(ngModel)]=\"productData.facilityId.facility\"\n                                            readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <!-- <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Invoice Id *</label>\n                                        <mat-select matInput name=\"mySelect\" [formControl]=\"this.invoice\" [(ngModel)]=\"productData.invoiceId\" >\n                                            <mat-option selected=\"true\" [disabled]=\"true\" value=\"null\">Please select SKU code\n                                            </mat-option>\n                                            <mat-option *ngFor=\"let item of inVoiceDetails \" [value]=item>{{item}}</mat-option>\n                                        </mat-select>\n        \n        \n                                    </mat-form-field>\n                                    <span *ngIf=\"this.invoice.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter Invoice Id</span>\n                                </div>\n                            </div> -->\n\n                            <div class=\"row\">\n                                <div class=\"col-sm-10 col-10\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"text\" name=\"invoiceId\" [formControl]=\"this.invoice\"\n                                            [(ngModel)]=\"productData.invoiceId\">\n                                        <mat-placeholder class=\"placeholder\">Invoice Id *</mat-placeholder>\n                                    </mat-form-field>\n\n                                    <span *ngIf=\"this.invoice.hasError('required') &&formValidate \" class=\"text-danger \">Please\n                                        enter Invoice Id</span>\n                                    <span *ngIf=\"this.invoice.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter 30 letters only</span>\n                                </div>\n                                <div class=\"col-sm-2 col-2\" (click)=\"getInvoiceBybarcode()\" style=\"margin: auto\"><img\n                                        src=\"assets/img/qr-code.png\">\n                                </div>\n                            </div>\n                            <div *ngIf=\"checkList.length>0\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6 col-xs-12\" formArrayName=\"items\" *ngFor=\"let item of dispatchForm.get('items').controls ; let i = index;\">\n                                        <div class=\"row\" [formGroupName]=\"i\">\n                                            <mat-checkbox class=\"primary col-sm-6 col-xs-12\" formControlName=\"conditionCheck\"\n                                                name=\"checkbox\" value=\"{{dispatchForm.controls.items.controls[i].controls.conditionCheck.value}}\"\n                                                (ngModelChange)=\"onChange(i)\">\n                                                <input matInput type=\"number\" [attr.disabled]=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value ? null :true\"\n                                                    [value]=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value ?  \n                                            dispatchForm.controls.items.controls[i].controls.quantity.value : 0\"\n                                                    formControlName=\"quantity\" style=\"border:1px solid #AAAAAA;text-align:center;width:31px\">\n                                                {{dispatchForm.controls.items.controls[i].controls.accessory.value}}\n                                            </mat-checkbox>\n\n                                            <div *ngIf=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value\">\n                                                <span *ngIf=\"item.get('quantity').hasError('required') && formValidate \"\n                                                    class=\" text-danger\">Please enter quantity</span>\n                                                <span *ngIf=\"item.get('quantity').hasError('pattern') \" class=\" text-danger\">\n                                                    Please enter only 1-10 numbers</span>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput [(ngModel)]=\"productData.comment\" [formControl]=\"this.comment\"></textarea>\n                                        <mat-placeholder class=\"placeholder\">Please enter some comments *</mat-placeholder>\n\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.comment.hasError('required') &&formValidate \" class=\"text-danger \">Please\n                                        enter comments</span>\n                                    <span *ngIf=\"this.comment.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter only 200 letters only</span>\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"doDispatch()\">Submit<i\n                                   *ngIf=\"loaderBtn\"></i>\n                            </button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"gotoPreviousPage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                        <div>\n                            <div *ngIf=\"loaderBtn\">\n\n                                <div class=\"ui-overlay-c\">\n                                    <div class=\"loading\" style=\" margin: 0;\n                                    position: absolute;\n                                    top: 50%;\n                                    left: 50%;\n                                    transform: translate(-50%, -50%);\">\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <h4 style=\"color: #e0dcd4\">Loading....</h4>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DispatchManifestComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchManifestComponent", function() { return DispatchManifestComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DispatchManifestComponent = /** @class */ (function () {
    function DispatchManifestComponent(dialog, _appService, _qrScanner, router, route, fb) {
        this.dialog = dialog;
        this._appService = _appService;
        this._qrScanner = _qrScanner;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.formValidate = false;
        this.inVoiceDetails = [];
        this.productData = {
            inventoryId: {},
            facilityId: {}
        };
        this.checkListObj = {
            checkListArray: []
        };
        this.checkList = [];
        this.loaderBtn = false;
    }
    DispatchManifestComponent.prototype.data = function () {
        this.dispatchForm = this.fb.group({
            INVOICE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
            COMMENT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            items: this.fb.array([this.createItem()])
        });
        if (this.checkList.length > 0) {
            this.items = this.dispatchForm.get('items');
            this.addItem();
            this.dispatchForm.controls["items"].setValue(this.checkList);
        }
        this.invoice = this.dispatchForm.controls['INVOICE'];
        this.comment = this.dispatchForm.controls['COMMENT'];
    };
    DispatchManifestComponent.prototype.ngOnInit = function () {
        /**  * Back Button event trigger
                */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.dispatchForm = this.fb.group({
            INVOICE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(30)]],
            COMMENT: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]]
        });
        this.invoice = this.dispatchForm.controls['INVOICE'];
        this.comment = this.dispatchForm.controls['COMMENT'];
        this.getDetailsByQrcodeId(localStorage.getItem('QRCode'));
    };
    DispatchManifestComponent.prototype.getInvoiceId = function () {
        var _this = this;
        this._appService.getAllInvoices().subscribe(function (data) {
            if (data.data != null) {
                _this.inVoiceDetails = data.data;
            }
        });
    };
    DispatchManifestComponent.prototype.getDetailsByQrcodeId = function (id) {
        var _this = this;
        this._appService.checkingBarcode(id).subscribe(function (data) {
            if (data.data != null) {
                _this.productData = data.data;
                _this.checkListObj.inventoryItemId = {
                    id: data.data.id
                };
                _this._appService.getCheckListBySKu(data.data.inventoryId.skuCode).subscribe(function (data) {
                    if (data.data != null) {
                        _this.checkList = data.data;
                        if (_this.checkList.length > 0) {
                            _this.data();
                        }
                    }
                });
            }
            else {
                _this.openDialog(data.error.message);
            }
        });
    };
    DispatchManifestComponent.prototype.createItem = function () {
        if (this.checkList.length > 0) {
            return this.fb.group({
                quantity: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?:[1-9]|0[1-9]|10)$')])],
                id: '',
                accessory: '',
                skuCode: '',
                conditionCheck: ''
            });
        }
        else {
            return this.fb.group({});
        }
    };
    DispatchManifestComponent.prototype.addItem = function () {
        for (var i = 0; i < this.checkList.length - 1; i++) {
            this.items.push(this.createItem());
        }
    };
    DispatchManifestComponent.prototype.onChange = function (value) {
        var controlArray = this.dispatchForm.get('items');
        for (var i = 0; i < this.checkList.length; i++) {
            if (i === value) {
                controlArray.controls[i].get('quantity').setValue(1);
            }
        }
    };
    DispatchManifestComponent.prototype.getInvoiceBybarcode = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                _this.productData.invoiceId = _this.resultQrcode.text;
            }
        });
    };
    DispatchManifestComponent.prototype.doDispatch = function () {
        if (this.dispatchForm.valid) {
            this.loaderBtn = true;
            this.checkList = this.dispatchForm.value;
            this.serviceIntegration();
        }
        else {
            this.loaderBtn = false;
            this.formValidate = true;
        }
    };
    DispatchManifestComponent.prototype.serviceIntegration = function () {
        var obj = {
            "barcode": this.productData.barcode,
            "invoiceId": this.productData.invoiceId,
            "createdTime": new Date(),
            "comment": this.productData.comment,
            "createdUser": localStorage.getItem('currentUser')
        };
        this.dispatchServiceCall(obj);
    };
    DispatchManifestComponent.prototype.dispatchServiceCall = function (obj) {
        var _this = this;
        this._appService.addDispatch(obj).subscribe(function (data) {
            if (data.error == null) {
                if (_this.checkList.items) {
                    for (var _i = 0, _a = _this.checkList.items; _i < _a.length; _i++) {
                        var i = _a[_i];
                        _this.checkListObj.checkListArray.push({
                            "accessoriesId": i.id,
                            "accessoryCondition": i.conditionCheck,
                            "quantity": i.conditionCheck ? i.quantity : 0
                        });
                    }
                    _this.checklistServiceCall();
                }
                else {
                    _this.loaderBtn = false;
                    _this.openDialog('Invoice generated successfully');
                }
            }
            else {
                _this.loaderBtn = false;
                _this.openDialog(data.error.message);
            }
        });
    };
    DispatchManifestComponent.prototype.checklistServiceCall = function () {
        var _this = this;
        this._appService.addCheckList(this.checkListObj).subscribe(function (data) {
            if (data.data != null) {
                _this.loaderBtn = false;
                _this.openDialog('Invoice & Checklist added successfully ');
            }
            else {
                _this.loaderBtn = false;
                _this.openDialog(data.error.message);
            }
        });
    };
    DispatchManifestComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.gotoPreviousPage();
            }
        });
    };
    DispatchManifestComponent.prototype.gotoPreviousPage = function () {
        this.router.navigate(['./dispatch']);
    };
    DispatchManifestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dispatch-manifest',
            template: __webpack_require__(/*! ./dispatch-manifest.component.html */ "./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.html"),
            styles: [
                "\n        .ui-overlay-c {\n            background-color: rgba(0, 0, 0, 0.5);\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            text-align: center;\n        }\n        .loading {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n        }\n        .loading-bar {\n         \n          display: inline-block;\n          width: 4px;\n          height: 18px;\n          border-radius: 4px;\n          animation: loading 1s ease-in-out infinite;\n        }\n        .loading-bar:nth-child(1) {\n          background-color: #3498db;\n          animation-delay: 0;\n        }\n        .loading-bar:nth-child(2) {\n          background-color: #c0392b;\n          animation-delay: 0.09s;\n        }\n        .loading-bar:nth-child(3) {\n          background-color: #f1c40f;\n          animation-delay: .18s;\n        }\n        .loading-bar:nth-child(4) {\n          background-color: #27ae60;\n          animation-delay: .27s;\n        }\n        \n        @keyframes loading {\n          0% {\n            transform: scale(1);\n          }\n          20% {\n            transform: scale(1, 2.2);\n          }\n          40% {\n            transform: scale(1);\n          }\n        }\n        md-checkbox .md-icon {\n    background: red;\n}\nmd-checkbox.md-default-theme.md-checked .md-icon {\n    background: orange;\n}\n.mat-focused .placeholder {    \n    color: #AAAAAA;\n    }\n  .placeholder {\n     color:#AAAAAA;\n    }\n        \n        "
            ]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__["QRCodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DispatchManifestComponent);
    return DispatchManifestComponent;
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

/***/ "./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.module.ts ***!
  \**************************************************************************/
/*! exports provided: DispatchManifestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchManifestModule", function() { return DispatchManifestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dispatch_manifest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch-manifest.component */ "./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.component.ts");
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
        component: _dispatch_manifest_component__WEBPACK_IMPORTED_MODULE_4__["DispatchManifestComponent"]
    }
];
var DispatchManifestModule = /** @class */ (function () {
    function DispatchManifestModule() {
    }
    DispatchManifestModule = __decorate([
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
            declarations: [_dispatch_manifest_component__WEBPACK_IMPORTED_MODULE_4__["DispatchManifestComponent"], _dispatch_manifest_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_dispatch_manifest_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], DispatchManifestModule);
    return DispatchManifestModule;
}());



/***/ })

}]);
//# sourceMappingURL=dispatch-manifest-dispatch-manifest-module.js.map