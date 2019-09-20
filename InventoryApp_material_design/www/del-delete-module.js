(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["del-delete-module"],{

/***/ "./src/app/+product-management/del/delete.component.html":
/*!***************************************************************!*\
  !*** ./src/app/+product-management/del/delete.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding:30px 1px\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header card-header-info\">\r\n                <h4 class=\"card-title\" style=\"text-align:center\">Inventory Restore</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <form [formGroup]=\"PackageForm\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <mat-form-field class=\"example-full-width\">\r\n                                <input matInput [formControl]=\"this.packageName\" [(ngModel)]=\"packageObj.packageName\" (keyup)=\"getPackagebasedonSearch()\"\r\n                                    autocomplete=\"off\">\r\n                                <mat-placeholder class=\"placeholder\">Package Name</mat-placeholder>\r\n                            </mat-form-field>\r\n\r\n                            <div class=\"height-skus\">\r\n                                <div *ngFor=\"let key of filteredPackageList\" (click)=\"selectPackage(key)\" style=\"background-color:white;padding: 6px;border-bottom:1px solid #ddd\">\r\n                                    {{key.packageName}} </div>\r\n                            </div>\r\n                            <span *ngIf=\"formValidate&&!packageSelection\" class=\" text-danger \">Please select package name</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </form>\r\n                <div *ngFor=\"let sku of skuList\">\r\n                    <mat-accordion>\r\n                        <mat-expansion-panel style=\"border-left: 2px solid #26c6da;margin-bottom:8px\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    <b>{{sku.productName}}</b>\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\"><b>SKU : </b></div>\r\n                                <div class=\"col-6\">{{sku.skuCode}}</div>\r\n                                <div class=\"col-6\"><b>Quantity : </b></div>\r\n                                <div class=\"col-6\">{{sku.totalQuantity}}</div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                    </mat-accordion>\r\n                </div>\r\n                <br>\r\n                <!--<div class=\"row\" *ngIf=\"scannedDetails\">\r\n                    <div class=\"col-6\" *ngIf=\"scannedDetails?.overalRemainingCount!=0\">\r\n                        Pending : {{scannedDetails.overalRemainingCount}}\r\n                    </div>\r\n                    <div class=\"col-6\" *ngIf=\"scannedDetails?.overalRemainingCount!=0\">\r\n                        Scanned Count : {{scannedDetails.overalScannedCount}}\r\n                    </div>\r\n                    <div class=\"col-sm-12\" *ngIf=\"scannedDetails?.overalRemainingCount==0\">\r\n                        Total Products Scanned for this package\r\n                    </div>\r\n                </div>-->\r\n                <div *ngIf=\"packageList.length!=0\">\r\n                    <button class=\"btn btn-primary\" (click)=\"restoreProduct()\">Scan & Restore</button>\r\n                </div>\r\n                <button class=\"btn btn-warning\" (click)=\"goToHomePage()\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Back &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\r\n                <h6 style=\"text-align:center;margin-bottom:0px\" *ngIf=\"packageList.length==0\">No Packages Available for Scanning</h6>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/+product-management/del/delete.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/+product-management/del/delete.component.ts ***!
  \*************************************************************/
/*! exports provided: DeleteShippingComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteShippingComponent", function() { return DeleteShippingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteShippingComponent = /** @class */ (function () {
    function DeleteShippingComponent(dialog, _qrScanner, _appService, _router, fb) {
        this.dialog = dialog;
        this._qrScanner = _qrScanner;
        this._appService = _appService;
        this._router = _router;
        this.fb = fb;
        this.packageObj = {};
        this.packageList = [];
        this.packageSelection = false;
        this.skuList = [];
        this.filteredPackageList = [];
        this.formValidate = false;
        this.pageRedirection = 'home';
    }
    DeleteShippingComponent.prototype.ngOnInit = function () {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.PackageForm = this.fb.group({
            PACKAGENAME: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.packageName = this.PackageForm.controls['PACKAGENAME'];
        this.getAllCompletedPackges();
    };
    DeleteShippingComponent.prototype.getAllCompletedPackges = function () {
        var _this = this;
        this._appService.getAllCompletePackes().subscribe(function (data) {
            if (data.error == null) {
                _this.packageList = data.data;
            }
        });
    };
    DeleteShippingComponent.prototype.selectPackage = function (obj) {
        var _this = this;
        this.packageSelection = true;
        this.packageObj.packageName = obj.packageName;
        this.packageObj.packageId = obj.id;
        this.filteredPackageList = [];
        this.skuList = [];
        this._appService.getPackageSKUDetails(this.packageObj.packageId).subscribe(function (data) {
            if (data.error == null) {
                _this.skuList = data.data.skuDetails;
                _this.scannedDetails = data.data.scannedDetails;
            }
        });
    };
    DeleteShippingComponent.prototype.getPackagebasedonSearch = function () {
        var _this = this;
        if (this.packageList.length > 0) {
            this.packageSelection = false;
            this.filteredPackageList = [];
            this.skuList = [];
            this.scannedDetails = {};
            if (this.packageObj.packageName) {
                this.packageList.find(function (data) {
                    if ((data.packageName.toLowerCase()).includes(_this.packageObj.packageName.toLowerCase())) {
                        _this.filteredPackageList.push(data);
                    }
                });
            }
        }
    };
    DeleteShippingComponent.prototype.restoreProduct = function () {
        var _this = this;
        if (this.PackageForm.valid) {
            // this._appService.removeItemFromPackge('0140-0000060', this.packageObj.packageId).subscribe((data: any) => {
            //     if (data.data != null) {
            //         this.productInfo = data.data;
            //         this.openDialog('Qrcode Restored Successfully')
            //         this.selectPackage({ id: this.packageObj.packageId, packageName: this.packageObj.packageName })
            //     } else {
            //         this.openDialog(data.error.message)
            //     }
            // })
            this._qrScanner.promiseScan().then(function (result) {
                _this.resultQrcode = result;
                if (!_this.resultQrcode.cancelled) {
                    _this._appService.removeItemFromPackge(_this.resultQrcode.text, _this.packageObj.packageId).subscribe(function (data) {
                        if (data.data != null) {
                            _this.productInfo = data.data;
                            _this.openDialog('Qrcode Restored Successfully');
                            _this.selectPackage({ id: _this.packageObj.packageId, packageName: _this.packageObj.packageName });
                            // this._appService.qrCodeMoving(this.resultQrcode.text, this.packageObj.packageId).subscribe((data: any) => {
                            //     this.openDialog('Qrcode Scanned Successfully')
                            // })
                        }
                        else {
                            _this.openDialog(data.error.message);
                        }
                    });
                }
                else {
                    _this.goToHomePage();
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    DeleteShippingComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.goToDeletePage();
            }
        });
    };
    DeleteShippingComponent.prototype.moveToPackage = function () {
        alert('inventory moved successfully');
        this.productInfo = null;
    };
    DeleteShippingComponent.prototype.goToDeletePage = function () {
        this._router.navigate(['./product/delete']);
    };
    DeleteShippingComponent.prototype.goToHomePage = function () {
        this._router.navigate(['./inventory']);
    };
    DeleteShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shiping-delete',
            template: __webpack_require__(/*! ./delete.component.html */ "./src/app/+product-management/del/delete.component.html"),
            styles: ["\n    .mat-focused .placeholder {    \n        color: #AAAAAA;\n        }\n      .placeholder {\n         color:#AAAAAA;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__["QRCodeScanner"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DeleteShippingComponent);
    return DeleteShippingComponent;
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

/***/ "./src/app/+product-management/del/delete.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/+product-management/del/delete.module.ts ***!
  \**********************************************************/
/*! exports provided: DeleteProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteProductModule", function() { return DeleteProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete.component */ "./src/app/+product-management/del/delete.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteShippingComponent"]
    }
];
var DeleteProductModule = /** @class */ (function () {
    function DeleteProductModule() {
    }
    DeleteProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_delete_component__WEBPACK_IMPORTED_MODULE_4__["DeleteShippingComponent"], _delete_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_delete_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], DeleteProductModule);
    return DeleteProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=del-delete-module.js.map