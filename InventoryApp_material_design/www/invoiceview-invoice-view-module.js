(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoiceview-invoice-view-module"],{

/***/ "./src/app/+dispatch/+invoiceview/invoice-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/+dispatch/+invoiceview/invoice-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div>\n                    <!-- <span *ngIf=\"errorMessage\" style=\"text-align:center\"  class=\"text-danger\">{{errorMessage}}</span> -->\n\n                    <div>\n                        <form>\n\n                            <div *ngFor=\"let item of productArray;let i=index\">\n                                <div class=\"card\" [ngStyle]=\"{'background':!item.cardStatus ? 'none': '#fff','box-shadow':!item.cardStatus ? 'none': '0 1px 4px 0 rgba(0, 0, 0, 0.14)'}\">\n                                    <div class=\"card-header card-header-info\">\n                                        <div>\n                                            <h4 class=\"card-title\" style=\"text-align:center;display: inline; cursor: pointer;\"\n                                                (click)=\"expand(i)\">{{item.barcode}}</h4>\n                                            <span style=\"float: right;cursor: pointer;\" (click)=\"delete(i)\">\n                                                <mat-icon>delete</mat-icon>\n                                            </span>\n                                            <span style=\"float: right;cursor: pointer;\" (click)=\"expand(i)\">\n                                                <mat-icon>remove_red_eye</mat-icon>\n                                            </span>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"card-body\" *ngIf=\"item.cardStatus\">\n\n                                        <div *ngIf=\"item.cardStatus\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"QR Code\" name=\"barcode\"\n                                                            [(ngModel)]=\"item.barcode\" type=\"text\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"SKU Code\" type=\"text\" name=\"skucode\"\n                                                            [(ngModel)]=\"item.inventoryId.skuCode\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"Product Name\" type=\"text\" name=\"productName\"\n                                                            [(ngModel)]=\"item.inventoryId.productName\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"Facility\" type=\"text\" name=\"facility\"\n                                                            [(ngModel)]=\"item.facilityId.facility\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"P.O Number\" type=\"text\" name=\"poNumber\"\n                                                            [(ngModel)]=\"item.poVendorId.purchaseOrderNumber\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n                                            <div class=\"row\" *ngIf=\"item.serialNumber !=null\">\n                                                <div class=\"col-md-12\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <input matInput placeholder=\"Serial Number\" type=\"text\" name=\"serialNumber\"\n                                                            [(ngModel)]=\"item.serialNumber\" readonly\n                                                            [ngModelOptions]=\"{standalone: true}\">\n                                                    </mat-form-field>\n                                                </div>\n                                            </div>\n\n\n                                            <!--                                             \n                                                  <mat-slide-toggle>\n                                                    Slide me!\n                                                  </mat-slide-toggle> -->\n\n\n\n                                            <div>\n                                                <div class=\"row\" style=\"margin-top:1px\">\n                                                    <div class=\"col-sm-6 col-xs-12\" *ngFor=\"let data of item.check;let j=index\">\n                                                        <div class=\"row\">\n                                                            <mat-slide-toggle class=\"primary col-sm-6 col-xs-12\"\n                                                                [(ngModel)]=\"data.conditionCheck\" [ngModelOptions]=\"{standalone: true}\"\n                                                                (ngModelChange)=\"onChange(i,j)\">\n\n\n                                                                <input matInput type=\"number\" style=\"border:1px solid #AAAAAA; width:20%; border-top: 2px solid #AAAAAA;text-align:center;width:31px\"\n                                                                    value={{data.quantity}} [(ngModel)]=\"data.quantity\"\n                                                                    [disabled]=\"!data.conditionCheck\" [ngModelOptions]=\"{standalone: true}\"\n                                                                    required pattern=\"^(?:[1-9]|0[1-9]|10)$\" #quant=\"ngModel\">\n                                                                {{data.accessory}}\n                                                            </mat-slide-toggle>\n                                                            <div>\n                                                                <span *ngIf=\"quant.errors && quant.errors.required\"\n                                                                    class=\" text-danger\">\n                                                                    Please enter quantity</span>\n                                                                <span *ngIf=\"quant.errors && quant.errors.pattern\"\n                                                                    class=\" text-danger\">\n                                                                    Please enter only 1-10 numbers</span>\n                                                            </div>\n\n\n\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n\n\n\n                                            <!-- <div *ngIf=\"checkList.length>0\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-6 col-xs-12\" formArrayName=\"items\" *ngFor=\"let item of dispatchForm.get('items').controls ; let i = index;\">\n                                                    <div class=\"row\" [formGroupName]=\"i\">\n                                                        <mat-checkbox class=\"primary col-sm-6 col-xs-12\" formControlName=\"conditionCheck\"\n                                                            name=\"checkbox\" value=\"{{dispatchForm.controls.items.controls[i].controls.conditionCheck.value}}\"\n                                                            (selectionChange)=\"onChange(i)\">\n                                                            <input matInput type=\"number\" [attr.disabled]=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value ? null :true\"\n                                                                [value]=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value ?  \n                                                        dispatchForm.controls.items.controls[i].controls.quantity.value : 0\"\n                                                                formControlName=\"quantity\" style=\"border:1px solid #AAAAAA;text-align:center;width:31px\">\n                                                            {{dispatchForm.controls.items.controls[i].controls.accessory.value}}\n                                                        </mat-checkbox>\n            \n                                                        <div *ngIf=\"dispatchForm.controls.items.controls[i].controls.conditionCheck.value\">\n                                                            <span *ngIf=\"item.get('quantity').hasError('required') && formValidate \"\n                                                                class=\" text-danger\">Please enter quantity</span>\n                                                            <span *ngIf=\"item.get('quantity').hasError('pattern') \" class=\" text-danger\">\n                                                                Please enter only 1-10 numbers</span>\n                                                        </div>\n            \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div> -->\n\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n\n\n\n\n                            <div class=\"card\">\n                                <div class=\"card-body\">\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <input matInput placeholder=\"Invoice ID\" type=\"text\" name=\"invoiceId\"\n                                                    [(ngModel)]=\"invoiceId\" readonly [ngModelOptions]=\"{standalone: true}\">\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field>\n                                                <label>Expected Delivery Days</label>\n                                                <mat-select matInput [(ngModel)]=\"expectedDeliveryDates\"\n                                                    [ngModelOptions]=\"{standalone: true}\" required>\n                                                    <mat-option *ngFor=\"let item of deliveryDateslist\" [value]=\"item\">{{item}}</mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"col-md-12\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                <textarea matInput [(ngModel)]=\"comment\" [ngModelOptions]=\"{standalone: true}\"\n                                                    required></textarea>\n                                                <mat-placeholder class=\"placeholder\">Comments</mat-placeholder>\n                                            </mat-form-field>\n                                            <span *ngIf=\"formValidate && (comment==null || comment=='')\" class=\" text-danger\">please\n                                                enter comments</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </form>\n\n                        <div>\n                            <div *ngIf=\"loaderBtn\">\n\n                                <div class=\"ui-overlay-c\">\n                                    <div class=\"loading\" style=\" margin: 0;\n                                        position: absolute;\n                                        top: 50%;\n                                        left: 50%;\n                                        transform: translate(-50%, -50%);\">\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <div class=\"loading-bar\"></div>\n                                        <h4 style=\"color: #e0dcd4\">Loading....</h4>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\" footer-copyright\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <button *ngIf=\"!(productArray.length < noofProducts)\" [disabled]=\"loaderBtn\" mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\"\n                    style=\" bottom: 0;\" (click)=\"addtoDispatch()\">Dispatch</button>\n                <button *ngIf=\"productArray.length < noofProducts\" mat-raised-button type=\"button\" class=\"btn btn-success pull-right\"\n                    (click)=\"addNextProduct()\">\n                    Next\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger pull-right\" [disabled]=\"loaderBtn\" style=\" bottom: 0;\" (click)=\"gotoPreviousPage()\">cancel\n                </button>\n\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/+dispatch/+invoiceview/invoice-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+dispatch/+invoiceview/invoice-view.component.ts ***!
  \******************************************************************/
/*! exports provided: InvoiceViewComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewComponent", function() { return InvoiceViewComponent; });
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






var InvoiceViewComponent = /** @class */ (function () {
    function InvoiceViewComponent(fb, dialog, _appService, _qrScanner, router, route) {
        this.fb = fb;
        this.dialog = dialog;
        this._appService = _appService;
        this._qrScanner = _qrScanner;
        this.router = router;
        this.route = route;
        this.productData = { comment: null, expectedDeliveryDates: null };
        this.productArray = [];
        this.formValidate = false;
        this.checkList = [];
        this.deliveryDateslist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.expectedDeliveryDates = 4;
        this.checkListObj = {
            checkListArray: []
        };
        this.checklistPostObj = {
            array: []
        };
        this.loaderBtn = false;
    }
    InvoiceViewComponent.prototype.ngOnInit = function () {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.invoiceId = localStorage.getItem("invoiceId");
        this.getDetailsByQrcodeId(localStorage.getItem('QRCode'));
        this.noofProducts = localStorage.getItem('noofProducts');
    };
    InvoiceViewComponent.prototype.getDetailsByQrcodeId = function (id) {
        var _this = this;
        this._appService.checkingBarcode(id).subscribe(function (data) {
            if (data.data != null) {
                _this.productData = data.data;
                _this.productData.cardStatus = true;
                _this.productData.expectedDeliveryDates = 4;
                _this.getChecklistData();
            }
            else {
                _this.openDialog(data.error.message);
            }
        });
    };
    InvoiceViewComponent.prototype.getChecklistData = function () {
        var _this = this;
        this._appService.getCheckListBySKu(this.productData.inventoryId.skuCode).subscribe(function (data) {
            if (data.data != null) {
                var detailRes = data.data;
                var details = [];
                for (var _i = 0, detailRes_1 = detailRes; _i < detailRes_1.length; _i++) {
                    var i = detailRes_1[_i];
                    details.push({
                        id: i.id,
                        skuCode: i.skuCode,
                        accessory: i.accessory,
                        quantity: i.quantity,
                        conditionCheck: i.conditionCheck,
                    });
                }
                _this.checkList = details;
                if (_this.checkList.length > 0) {
                    _this.productData.check = _this.checkList;
                }
                _this.productArray.push(_this.productData);
            }
            else {
                _this.openDialog(data.error.message);
            }
        });
    };
    InvoiceViewComponent.prototype.addNextProduct = function () {
        var _this = this;
        if (this.productArray.length < this.noofProducts) {
            this._qrScanner.promiseScan().then(function (result) {
                _this.resultQrcode = result;
                if (!_this.resultQrcode.cancelled) {
                    for (var i = 0; i < _this.productArray.length; i++) {
                        _this.productArray[i].cardStatus = false;
                    }
                    _this._appService.checkingBarcode(_this.resultQrcode.text).subscribe(function (data) {
                        var response = data;
                        if (response.data != null) {
                            var barcodeStatus = _this.productArray.find(function (obj) { return obj.barcode === response.data.barcode; });
                            if (!barcodeStatus) {
                                var facilityStatus = _this.productArray.find(function (obj) { return obj.facilityId.facility === response.data.facilityId.facility; });
                                if (facilityStatus) {
                                    _this.productData = response.data;
                                    //  this.productData.cardStatus=true
                                    _this.getNextChecklistData();
                                }
                                else {
                                    _this.openDialogadd('Products should be in same facility');
                                }
                            }
                            else {
                                _this.openDialogadd('Product already attached with this QR Code');
                            }
                        }
                        else {
                            _this.openDialogadd(response.error.message);
                        }
                    });
                }
            });
        }
    };
    InvoiceViewComponent.prototype.getNextChecklistData = function () {
        var _this = this;
        this._appService.getCheckListBySKu(this.productData.inventoryId.skuCode).subscribe(function (data) {
            if (data.data != null) {
                var details = [];
                var detailRes = data.data;
                for (var _i = 0, detailRes_2 = detailRes; _i < detailRes_2.length; _i++) {
                    var i = detailRes_2[_i];
                    details.push({
                        id: i.id,
                        skuCode: i.skuCode,
                        accessory: i.accessory,
                        quantity: i.quantity,
                        conditionCheck: i.conditionCheck
                    });
                }
                _this.productData.cardStatus = true;
                _this.checkList = details;
                if (_this.checkList.length > 0) {
                    _this.productData.check = _this.checkList;
                }
                _this.productArray.push(_this.productData);
            }
            else {
                _this.openDialogadd(data.error.message);
            }
        });
    };
    InvoiceViewComponent.prototype.delete = function (index) {
        this.productArray.splice(index, 1);
        if (this.productArray == '') {
            this.router.navigate(['./dispatch']);
        }
    };
    InvoiceViewComponent.prototype.addtoDispatch = function () {
        var _this = this;
        this.formValidate = true;
        var postObj = [];
        var data = [];
        for (var i = 0; i < this.productArray.length; i++) {
            postObj.push({
                id: this.productArray[i].id,
                barcode: this.productArray[i].barcode,
                invoiceId: this.invoiceId,
                createdTime: new Date(),
                updatedTime: new Date(),
                comment: this.comment,
                createdUser: localStorage.getItem('userName'),
                expectedDeliveryDates: this.expectedDeliveryDates,
                productReturn: this.productArray[i].returnProduct
            });
            if (this.productArray[i].check) {
                var checklist = { checkListArray: [] };
                for (var j = 0; j < this.productArray[i].check.length; j++) {
                    checklist.checkListArray.push({
                        "accessoriesId": this.productArray[i].check[j].id,
                        "accessoryCondition": this.productArray[i].check[j].conditionCheck,
                        "quantity": this.productArray[i].check[j].conditionCheck ? this.productArray[i].check[j].quantity : 0
                    });
                    checklist.inventoryItemId = {
                        id: this.productArray[i].id
                    };
                }
                data.push(checklist);
            }
            this.checklistPostObj.array = data;
        }
        if (this.expectedDeliveryDates != null && this.expectedDeliveryDates != '' && this.comment != null && this.comment != '') {
            this.loaderBtn = true;
            this._appService.addDispatch(postObj).subscribe(function (data) {
                if (data.error == null) {
                    if (_this.checklistPostObj.array.length > 0) {
                        _this._appService.addCheckList(_this.checklistPostObj).subscribe(function (data) {
                            if (data.data != null) {
                                _this.loaderBtn = false;
                                _this.openDialog('Invoice & Checklist added successfully ');
                            }
                            else {
                                _this.loaderBtn = false;
                                _this.openDialog(data.error.message);
                            }
                        });
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
        }
    };
    InvoiceViewComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.gotoPreviousPage();
            }
        });
    };
    InvoiceViewComponent.prototype.openDialogadd = function (msgText) {
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    InvoiceViewComponent.prototype.onChange = function (i, j) {
        if (this.productArray[i].check[j].conditionCheck) {
            this.productArray[i].check[j].quantity = 1;
        }
        else {
            this.productArray[i].check[j].quantity = 0;
        }
    };
    InvoiceViewComponent.prototype.gotoPreviousPage = function () {
        this.router.navigate(['./dispatch']);
    };
    InvoiceViewComponent.prototype.expand = function (i) {
        if (this.productArray[i].cardStatus) {
            this.productArray[i].cardStatus = false;
        }
        else {
            this.productArray[i].cardStatus = true;
        }
    };
    InvoiceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dispatch-invoice-view',
            template: __webpack_require__(/*! ./invoice-view.component.html */ "./src/app/+dispatch/+invoiceview/invoice-view.component.html"),
            styles: [
                "\n        .ui-overlay-c {\n            background-color: rgba(0, 0, 0, 0.5);\n            position: fixed;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            text-align: center;\n        }\n        .loading {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n        }\n        .loading-bar {\n         \n          display: inline-block;\n          width: 4px;\n          height: 18px;\n          border-radius: 4px;\n          animation: loading 1s ease-in-out infinite;\n        }\n        .loading-bar:nth-child(1) {\n          background-color: #3498db;\n          animation-delay: 0;\n        }\n        .loading-bar:nth-child(2) {\n          background-color: #c0392b;\n          animation-delay: 0.09s;\n        }\n        .loading-bar:nth-child(3) {\n          background-color: #f1c40f;\n          animation-delay: .18s;\n        }\n        .loading-bar:nth-child(4) {\n          background-color: #27ae60;\n          animation-delay: .27s;\n        }\n        \n        @keyframes loading {\n          0% {\n            transform: scale(1);\n          }\n          20% {\n            transform: scale(1, 2.2);\n          }\n          40% {\n            transform: scale(1);\n          }\n        }\n        md-checkbox .md-icon {\n    background: red;\n}\nmd-checkbox.md-default-theme.md-checked .md-icon {\n    background: orange;\n}\n.mat-focused .placeholder {    \n    color: #AAAAAA;\n    }\n  .placeholder {\n     color:#AAAAAA;\n    }\n        \n        "
            ]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__["QRCodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], InvoiceViewComponent);
    return InvoiceViewComponent;
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

/***/ "./src/app/+dispatch/+invoiceview/invoice-view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/+dispatch/+invoiceview/invoice-view.module.ts ***!
  \***************************************************************/
/*! exports provided: InvoiceViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceViewModule", function() { return InvoiceViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _invoice_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-view.component */ "./src/app/+dispatch/+invoiceview/invoice-view.component.ts");
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
        component: _invoice_view_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceViewComponent"]
    }
];
var InvoiceViewModule = /** @class */ (function () {
    function InvoiceViewModule() {
    }
    InvoiceViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            ],
            declarations: [_invoice_view_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceViewComponent"], _invoice_view_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_invoice_view_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], InvoiceViewModule);
    return InvoiceViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=invoiceview-invoice-view-module.js.map