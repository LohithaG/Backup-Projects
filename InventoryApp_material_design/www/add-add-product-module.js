(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-add-product-module"],{

/***/ "./src/app/+product-management/add/add-product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/+product-management/add/add-product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Add Inventory</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"complexForm\" method=\"post\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"QR Code\" name=\"barcode\" formControlName=\"barcode\" [(ngModel)]=\"addProductObj.barcode\" type=\"text\"\n                                            readonly>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"SKU Code\" type=\"text\" name=\"skucode\" formControlName=\"skuCode\" [(ngModel)]=\"addProductObj.skuCode\"\n                                            readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"Product Name\" type=\"text\" name=\"productName\" formControlName=\"productName\" [(ngModel)]=\"addProductObj.productName\"\n                                            readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput placeholder=\"P.O Number\" type=\"text\" name=\"productName\" formControlName=\"povendor\" [(ngModel)]=\"addProductObj.purchaseOrderNumber\"\n                                            readonly>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n                            <div class=\"row\" *ngIf=\"serialStatus==1\">\n                                <div class=\"col-sm-10 col-10\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"text\" name=\"serialNumber\" formControlName=\"serialNumber\" [(ngModel)]=\"addProductObj.serialNumber\">\n                                        <mat-placeholder class=\"placeholder\">Serial Number</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"complexForm.controls['serialNumber'].hasError('required') && formValidate \" class=\"text-danger\">Please\n                                        enter Serial Number\n                                    </span>\n                                    <span *ngIf=\"complexForm.controls['serialNumber'].hasError('maxlength') \" class=\"text-danger\">Please\n                                        enter maxlength should be 32 chars\n                                    </span>\n                                    <span *ngIf=\"errorMessage\" class=\"text-danger\">\n                                            {{errorMessage}}\n                                         </span>\n                                </div>\n                                <div class=\"col-sm-2 col-2\" (click)=\"getInvoiceBybarcode()\" style=\"margin: auto\"><img src=\"assets/img/qr-code.png\">\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Facility</label>\n                                        <mat-select matInput formControlName=\"facility\" [(ngModel)]=\"addProductObj.facilityId\" required>\n                                            <mat-option *ngFor=\"let item of facilitiesList\" [value]=\"item.id\">{{item.facility}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Condition</label>\n                                        <mat-select matInput formControlName=\"inventoryConditionId\" [(ngModel)]=\"addProductObj.condId\" (selectionChange)=\"getStatusChange()\"\n                                            required>\n                                            <mat-option *ngFor=\"let condition of conditionsList\" [value]=\"condition.id\">{{condition.inventoryCondition}}</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field>\n                                        <label>Product Status</label>\n                                        <mat-select matInput formControlName=\"itemStatusId\" [(ngModel)]=\"addProductObj.stasId\" required>\n                                            <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">{{status.itemStatus}}</mat-option>\n                                        </mat-select>\n\n                                    </mat-form-field>\n                                    <span *ngIf=\"complexForm.controls['itemStatusId'].hasError('required') \" class=\"text-danger\">Please\n                                        select item status\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <label>Date</label>\n                                        <input matInput type=\"text\" [ngModel]=\"productCreatedDate| date: 'dd-MMM-yyyy'\" readonly [ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n\n\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"addProduct()\">Submit</button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"navigatetoHomePage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+product-management/add/add-product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+product-management/add/add-product.component.ts ***!
  \******************************************************************/
/*! exports provided: AddProductComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
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







var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(fb, router, _qrScanner, appService, dialog) {
        this.fb = fb;
        this.router = router;
        this._qrScanner = _qrScanner;
        this.appService = appService;
        this.dialog = dialog;
        this.addProductObj = {};
        this.productCreatedDate = new Date();
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.appService.getAllQrcodes_prod().subscribe(function (data) {
            var resData = data;
            var status = resData.data.find(function (obj) { return obj === localStorage.getItem('QRCode'); });
            if (status) {
                //QRcode as per service call we dont change name
                _this.addProductObj.barcode = localStorage.getItem('QRCode');
                _this.getDetailsByQrcode(_this.addProductObj.barcode);
                _this.getAllProductConditionList();
                _this.getAllProductStatusList();
                _this.getFacilitiesList();
                _this.getAllPovendors();
            }
            else {
                _this.openDialog("QR Code does not exist or Product already exist in inventory");
            }
        });
    };
    AddProductComponent.prototype.getFacilitiesList = function () {
        var _this = this;
        this.appService.getFacilities().subscribe(function (data) {
            var facilityRes = data;
            if (facilityRes.data != null) {
                _this.facilitiesList = facilityRes.data;
                var facilityObj = _this.facilitiesList.find(function (status) { return 1 === status.id; });
                _this.addProductObj.facilityId = facilityObj.id;
            }
        });
    };
    AddProductComponent.prototype.getAllPovendors = function () {
        var _this = this;
        this.appService.getAllPovendors().subscribe(function (data) {
            var poVendors = data;
            if (poVendors.data != null) {
                _this.poVendorsList = poVendors.data;
            }
        });
    };
    AddProductComponent.prototype.getDetailsByQrcode = function (QRCode) {
        var _this = this;
        this.appService.getProductDetailsfromInventory_prod(QRCode).subscribe(function (data) {
            var detailsRes = data;
            if (detailsRes.data != null) {
                _this.inventoryId = detailsRes.data.inventoryId;
                _this.addProductObj.productName = detailsRes.data.productName;
                _this.addProductObj.skuCode = detailsRes.data.skuCode;
                _this.addProductObj.purchaseOrderNumber = detailsRes.data.poNumber.purchaseOrderNumber;
                _this.addProductObj.purchaseOrderId = detailsRes.data.poNumber.id;
                _this.serialStatus = detailsRes.data.serial;
            }
            else {
                _this.openDialog('Unable to get Product Details');
            }
        });
    };
    AddProductComponent.prototype.getAllProductConditionList = function () {
        var _this = this;
        this.appService.getProductConditionList().subscribe(function (data) {
            var condRes = data;
            if (condRes.data != null) {
                _this.conditionsList = condRes.data;
                var condObj = _this.conditionsList.find(function (status) { return 1 === status.id; });
                _this.addProductObj.condId = condObj.id;
                if (_this.addProductObj.condId) {
                    _this.appService.getStatusByInventoryCondition(_this.addProductObj.condId).subscribe(function (data) {
                        var condRes = data;
                        _this.statusList = condRes.data;
                    });
                }
            }
        });
    };
    AddProductComponent.prototype.getAllProductStatusList = function () {
        var _this = this;
        this.appService.getAllProductStatusTypes().subscribe(function (data) {
            var statusRes = data;
            if (statusRes.data != null) {
                _this.statusList = statusRes.data;
                var statusObj = _this.statusList.find(function (status) { return 1 === status.id; });
                _this.addProductObj.stasId = statusObj.id;
            }
        });
    };
    AddProductComponent.prototype.getStatusChange = function () {
        var _this = this;
        if (this.addProductObj.condId) {
            this.appService.getStatusByInventoryCondition(this.addProductObj.condId).subscribe(function (data) {
                var condRes = data;
                _this.statusList = condRes.data;
            });
        }
        this.addProductObj.stasId = '';
    };
    AddProductComponent.prototype.getInvoiceBybarcode = function () {
        var _this = this;
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                _this.addProductObj.serialNumber = _this.resultQrcode.text;
            }
        });
    };
    AddProductComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.serialStatus == 0) {
            this.complexForm.controls.serialNumber.setValue(1);
        }
        if (this.complexForm.valid) {
            var todayDate = new Date();
            this.facilitiesList.find(function (status) { return status.id === _this.addProductObj.facilityId; });
            this.statusList.find(function (status) { return status.id === _this.addProductObj.stasId; });
            this.conditionsList.find(function (status) { return status.id === _this.addProductObj.condId; });
            var postObj = {};
            postObj.facilityId = this.facilitiesList.find(function (status) { return status.id === _this.addProductObj.facilityId; });
            postObj.inventoryConditionId = this.conditionsList.find(function (status) { return status.id === _this.addProductObj.condId; });
            postObj.itemStatusId = this.statusList.find(function (status) { return status.id === _this.addProductObj.stasId; });
            postObj.poVendorId = this.poVendorsList.find(function (status) { return status.purchaseOrderNumber === _this.addProductObj.purchaseOrderNumber; });
            postObj.inventoryId = {
                "id": this.inventoryId,
                "enabled": null,
                "inventory": 2,
                "skuCode": this.addProductObj.skuCode,
                "productName": this.addProductObj.productName,
                "createdTime": moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format(),
                "updatedTime": null,
                "badInventory": null,
                "blockedInventory": 0,
                "pendingQcAccessment": null,
                "thresholdLevel": null,
                "returnProduct": null,
                "inventoryConditionId": this.conditionsList.find(function (status) { return status.id === _this.addProductObj.condId; }),
                "description": null,
                "dispatch": null,
                "barcodeId": null,
            };
            postObj.itemStatusId.inventoryConditionId = this.conditionsList.find(function (status) { return status.id === _this.addProductObj.condId; });
            postObj.barcode = this.addProductObj.barcode;
            postObj.purchaseOrderNumber = this.addProductObj.purchaseOrderNumber;
            postObj.poVendorId = {
                "id": this.addProductObj.purchaseOrderId
            };
            postObj.productImage = null;
            postObj.createdUser = localStorage.getItem('userName');
            postObj.updatedTime = moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format();
            postObj.createdTime = moment__WEBPACK_IMPORTED_MODULE_4__(todayDate).format();
            if (this.serialStatus == 1) {
                postObj.serialNumber = this.addProductObj.serialNumber;
            }
            var postObjArray = [];
            postObjArray.push(postObj);
            this.submitted = true;
            this.appService.addProduct_prod(postObjArray).subscribe(function (data) {
                if (data.error == null) {
                    _this.openDialog('Product Added Successfully');
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
    AddProductComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.router.navigate(['./inventory']);
            }
        });
    };
    AddProductComponent.prototype.openDialogError = function (text) {
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
    AddProductComponent.prototype.navigatetoHomePage = function () {
        var _this = this;
        this.complexForm.reset();
        setTimeout(function () {
            _this.router.navigate(['./inventory']);
        });
    };
    AddProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/+product-management/add/add-product.component.html"),
            styles: ["\n    .mat-focused .placeholder {    \n        color: #AAAAAA;\n        }\n      .placeholder {\n         color:#AAAAAA;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_6__["QRCodeScanner"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AddProductComponent);
    return AddProductComponent;
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

/***/ "./src/app/+product-management/add/add-product.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/+product-management/add/add-product.module.ts ***!
  \***************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-product.component */ "./src/app/+product-management/add/add-product.component.ts");
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
        component: _add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"]
    }
];
var AddProductModule = /** @class */ (function () {
    function AddProductModule() {
    }
    AddProductModule = __decorate([
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
            declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"],
                _add_product_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_add_product_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], AddProductModule);
    return AddProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-add-product-module.js.map