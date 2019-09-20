(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-update-product-module"],{

/***/ "./src/app/+product-management/update/update-product.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/+product-management/update/update-product.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Update Inventory</h4>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <form [formGroup]=\"complexForm\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"QR Code\" formControlName=\"barcode\" [(ngModel)]=\"updateProductObj.barcode\" readonly type=\"text\">\n                                    </mat-form-field>\n\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SKU Code\" formControlName=\"skuCode\" [(ngModel)]=\"skuCodedata\" readonly type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Product Name\" type=\"text\" formControlName=\"productName\" [(ngModel)]=\"ProductName\" readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"P.O Number\" type=\"text\" formControlName=\"povendor\" [(ngModel)]=\"updateProductObj.purchaseOrderNumber\"\n                                            readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Facility</label>\n                                        <mat-select matInput formControlName=\"facility\" [(ngModel)]=\"updateProductObj.facilityId\" required>\n                                            <mat-option *ngFor=\"let item of facilitiesList\" [value]=\"item.id\">{{item.facility}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" *ngIf=\"this.updateProductObj.serialNumber !=null\">\n                                <div class=\"col-sm-10 col-10\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"text\" name=\"serialNumber\" formControlName=\"serialNumber\" [(ngModel)]=\"updateProductObj.serialNumber\">\n                                        <mat-placeholder class=\"placeholder\">Serial Number</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"complexForm.controls['serialNumber'].hasError('required') && formValidate \" class=\"text-danger\">Please\n                                        enter Serial Number\n                                    </span>\n                                    <span *ngIf=\"complexForm.controls['serialNumber'].hasError('maxlength') \" class=\"text-danger\">Please\n                                        enter maxlength should be 32 chars\n                                    </span>\n                                    <span *ngIf=\"errorMessage\" class=\"text-danger\">\n                                       {{errorMessage}}\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-2 col-2\" (click)=\"getInvoiceBybarcode()\" style=\"margin: auto\"><img src=\"assets/img/qr-code.png\">\n                                </div>\n                            </div>\n                            <!--<div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Vendors</label>\n                                        <mat-select matInput formControlName=\"povendor\" [(ngModel)]=\"updateProductObj.purchaseOrderNumber\" \n                                            required>\n                                            <mat-option *ngFor=\"let condition of poVendorsList\" [value]=\"condition.purchaseOrderNumber\" >{{condition.purchaseOrderNumber}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>-->\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Condition</label>\n                                        <mat-select matInput formControlName=\"inventoryConditionId\" [(ngModel)]=\"updateProductObj.condId\" (selectionChange)=\"getStatusChange()\"\n                                            required>\n                                            <mat-option *ngFor=\"let condition of conditionsList\" [value]=\"condition.id\">{{condition.inventoryCondition}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Status</label>\n                                        <mat-select matInput formControlName=\"itemStatusId\" [(ngModel)]=\"updateProductObj.stasId\" required>\n                                            <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">{{status.itemStatus}}</mat-option>\n                                        </mat-select>\n\n                                    </mat-form-field>\n                                    <span *ngIf=\"complexForm.controls['itemStatusId'].hasError('required') \" class=\"text-danger\">Please\n                                        select itemStatus\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Date</label>\n                                        <input matInput type=\"text\" [ngModel]=\"productUpdatedDate| date: 'dd-MMM-yyyy'\" readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"updateUser()\">Submit</button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\" gotoHomePage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n\n<!--<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Update Product</h4>\n                    </div>\n                    <div class=\"card-body\">\n                      \n                        <form [formGroup]=\"complexForm\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"QR Code\" formControlName=\"barcode\" [(ngModel)]=\"updateProductObj.barcodeId\"\n                                            readonly type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SKU Code\" formControlName=\"skuCode\" [(ngModel)]=\"updateProductObj.skuCode\"\n                                            readonly type=\"text\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Product Name\" type=\"text\" formControlName=\"productName\"\n                                            [(ngModel)]=\"updateProductObj.productName\" readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Facility</label>\n                                        <mat-select matInput formControlName=\"facility\" [(ngModel)]=\"updateProductObj.facilityId\"\n                                            required>\n                                            <mat-option *ngFor=\"let item of facilitiesList\" [value]=\"item.id\">{{item.facility}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Condition</label>\n                                        <mat-select matInput formControlName=\"inventoryConditionId\" [(ngModel)]=\"updateProductObj.condId\"\n                                            (ngModelChange)=\"getStatusList()\" required>\n                                            <mat-option *ngFor=\"let condition of conditionsList\" [value]=\"condition.id\">{{condition.inventoryCondition}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Status</label>\n                                        <mat-select matInput formControlName=\"itemStatusId\" [(ngModel)]=\"updateProductObj.stasId\"\n                                            required>\n                                            <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">{{status.itemStatus}}</mat-option>\n                                        </mat-select>\n\n                                    </mat-form-field>\n                                    <span *ngIf=\"complexForm.controls['itemStatusId'].hasError('required') \" class=\"text-danger\">Please\n                                        Select itemStatus\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"date\" type=\"text\" [ngModel]=\"productUpdatedDate| date: 'dd-MMM-yyyy'\"\n                                                readonly [ngModelOptions]=\"{standalone: true}\">\n                                        </mat-form-field>\n                                    </div>\n                                </div>\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"updateUser()\">Submit</button>\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\" gotoHomePage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>-->"

/***/ }),

/***/ "./src/app/+product-management/update/update-product.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/+product-management/update/update-product.component.ts ***!
  \************************************************************************/
/*! exports provided: UpdateProductComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function() { return UpdateProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateProductComponent = /** @class */ (function () {
    function UpdateProductComponent(fb, router, appService, _qrScanner, dialog) {
        this.fb = fb;
        this.router = router;
        this.appService = appService;
        this._qrScanner = _qrScanner;
        this.dialog = dialog;
        this.updateProductObj = {};
        this.productUpdatedDate = new Date();
    }
    UpdateProductComponent.prototype.ngOnInit = function () {
        /**
     * Back Button event trigger
     */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.complexForm = this.fb.group({
            barcode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            skuCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            productName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            inventoryConditionId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            itemStatusId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            facility: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            povendor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            serialNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32)]]
        });
        this.barcode = this.complexForm.controls["barcode"];
        this.skuCode = this.complexForm.controls["skuCode"];
        this.productName = this.complexForm.controls["productName"];
        this.inventoryConditionId = this.complexForm.controls["inventoryConditionId"];
        this.itemStatusId = this.complexForm.controls["itemStatusId"];
        this.povendor = this.complexForm.controls["povendor"];
        this.serialNumber = this.complexForm.controls["serialNumber"];
        var QRCodeId = localStorage.getItem('QRCode');
        this.getDetailsByQrcodeId(QRCodeId);
    };
    UpdateProductComponent.prototype.getDetailsByQrcodeId = function (QRId) {
        var _this = this;
        this.appService.getProductByQrId_prod(QRId).subscribe(function (data) {
            if (data.data != null) {
                _this.updateProductObj = data.data;
                _this.skuCodedata = _this.updateProductObj.inventoryId.skuCode;
                _this.ProductName = _this.updateProductObj.inventoryId.productName;
                _this.inventoryId = data.data.inventoryId.id;
                _this.updateProductObj.purchaseOrderNumber = data.data.poVendorId.purchaseOrderNumber;
                _this.updateProductObj.purchaseOrderId = data.data.poVendorId.id;
                _this.updateProductObj.serialNumber = data.data.serialNumber;
                _this.id = data.data.id;
                _this.getFacilitiesList();
                _this.getAllProductConditionList();
                _this.getAllProductStatusList();
                _this.getAllPovendors();
            }
            else {
                _this.openDialog(data.error.message);
            }
        });
    };
    UpdateProductComponent.prototype.getFacilitiesList = function () {
        var _this = this;
        this.appService.getFacilities().subscribe(function (data) {
            var facilityRes = data;
            if (facilityRes.data != null) {
                _this.facilitiesList = facilityRes.data;
                var facilityObj = _this.facilitiesList.find(function (status) { return _this.updateProductObj.facilityId.id === status.id; });
                _this.updateProductObj.facilityId = facilityObj.id;
            }
        });
    };
    UpdateProductComponent.prototype.getAllPovendors = function () {
        var _this = this;
        this.appService.getAllPovendors().subscribe(function (data) {
            var poVendors = data;
            if (poVendors.data != null) {
                _this.poVendorsList = poVendors.data;
            }
        });
    };
    UpdateProductComponent.prototype.getInvoiceBybarcode = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                _this.updateProductObj.serialNumber = _this.resultQrcode.text;
            }
        });
    };
    UpdateProductComponent.prototype.getAllProductConditionList = function () {
        var _this = this;
        this.appService.getProductConditionList().subscribe(function (data) {
            var condRes = data;
            if (condRes.data != null) {
                _this.conditionsList = condRes.data;
                var condObj = _this.conditionsList.find(function (status) { return _this.updateProductObj.inventoryConditionId.id === status.id; });
                _this.updateProductObj.condId = condObj.id;
                if (_this.updateProductObj.condId) {
                    _this.appService.getStatusByInventoryCondition(_this.updateProductObj.condId).subscribe(function (data) {
                        var condRes = data;
                        _this.statusList = condRes.data;
                    });
                }
            }
        });
    };
    UpdateProductComponent.prototype.getStatusChange = function () {
        var _this = this;
        if (this.updateProductObj.condId) {
            this.appService.getStatusByInventoryCondition(this.updateProductObj.condId).subscribe(function (data) {
                var condRes = data;
                _this.statusList = condRes.data;
            });
        }
        this.updateProductObj.stasId = '';
    };
    UpdateProductComponent.prototype.getAllProductStatusList = function () {
        var _this = this;
        this.appService.getAllProductStatusTypes().subscribe(function (data) {
            var statusRes = data;
            if (statusRes.data != null) {
                _this.statusList = statusRes.data;
                var statusObj = _this.statusList.find(function (status) { return _this.updateProductObj.itemStatusId.id === status.id; });
                _this.updateProductObj.stasId = statusObj.id;
            }
        });
    };
    UpdateProductComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.updateProductObj.serialNumber == null) {
            this.complexForm.controls.serialNumber.setValue(1);
        }
        if (this.complexForm.valid) {
            this.submitted = true;
            var todayDate = new Date();
            this.facilitiesList.find(function (status) { return status.id === _this.updateProductObj.facilityId; });
            this.statusList.find(function (status) { return status.id === _this.updateProductObj.stasId; });
            this.conditionsList.find(function (status) { return status.id === _this.updateProductObj.condId; });
            var postObj = {};
            postObj.id = this.id;
            postObj.facilityId = this.facilitiesList.find(function (status) { return status.id === _this.updateProductObj.facilityId; });
            postObj.inventoryConditionId = this.conditionsList.find(function (status) { return status.id === _this.updateProductObj.condId; });
            postObj.itemStatusId = this.statusList.find(function (status) { return status.id === _this.updateProductObj.stasId; });
            postObj.inventoryId = {
                "id": this.inventoryId,
                "enabled": null,
                "inventory": 2,
                "skuCode": this.updateProductObj.inventoryId.skuCode,
                "productName": this.updateProductObj.inventoryId.productName,
                "createdTime": moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format(),
                "updatedTime": null,
                "badInventory": null,
                "blockedInventory": 0,
                "pendingQcAccessment": null,
                "thresholdLevel": null,
                "returnProduct": null,
                "inventoryConditionId": this.conditionsList.find(function (status) { return status.id === _this.updateProductObj.condId; }),
            };
            postObj.poVendorId = this.poVendorsList.find(function (status) { return status.purchaseOrderNumber === _this.updateProductObj.purchaseOrderNumber; });
            postObj.itemStatusId.inventoryConditionId = this.conditionsList.find(function (status) { return status.id === _this.updateProductObj.condId; });
            postObj.barcode = this.updateProductObj.barcode;
            postObj.poVendorId = {
                "id": this.updateProductObj.purchaseOrderId
            };
            postObj.productImage = null;
            postObj.createdUser = localStorage.getItem('userName');
            postObj.updatedTime = moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format();
            postObj.createdTime = moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format();
            if (this.updateProductObj.serialNumber) {
                postObj.serialNumber = this.updateProductObj.serialNumber;
            }
            this.appService.updateProduct_prod(postObj).subscribe(function (data) {
                if (data.error == null) {
                    _this.openDialog('Product Updated Successfully');
                }
                else {
                    _this.openDialogError(data.error.message);
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    UpdateProductComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.router.navigate(['./inventory']);
            }
        });
    };
    UpdateProductComponent.prototype.openDialogError = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.errorMessage = "Serial Number already exists";
            setTimeout(function () {
                _this.errorMessage = "";
            }, 3000);
        });
    };
    UpdateProductComponent.prototype.gotoHomePage = function () {
        var _this = this;
        this.complexForm.reset();
        setTimeout(function () {
            _this.router.navigate(['./inventory']);
        });
    };
    UpdateProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-update',
            template: __webpack_require__(/*! ./update-product.component.html */ "./src/app/+product-management/update/update-product.component.html"),
            styles: ["\n    .mat-focused .placeholder {    \n        color: #AAAAAA;\n        }\n      .placeholder {\n         color:#AAAAAA;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_6__["QRCodeScanner"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UpdateProductComponent);
    return UpdateProductComponent;
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

/***/ "./src/app/+product-management/update/update-product.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+product-management/update/update-product.module.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProductModule", function() { return UpdateProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-product.component */ "./src/app/+product-management/update/update-product.component.ts");
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
        component: _update_product_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProductComponent"]
    }
];
var UpdateProductModule = /** @class */ (function () {
    function UpdateProductModule() {
    }
    UpdateProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
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
            declarations: [_update_product_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProductComponent"], _update_product_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_update_product_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], UpdateProductModule);
    return UpdateProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=update-update-product-module.js.map