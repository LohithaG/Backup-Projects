(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-return-module"],{

/***/ "./src/app/+product-management/return/return.component.html":
/*!******************************************************************!*\
  !*** ./src/app/+product-management/return/return.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div>\n                    <div>\n                        <form>\n                            <div *ngFor=\"let item of productArray;let i=index\">\n                                <div class=\"card\" [ngStyle]=\"{'background':!item.condition ? 'none': '#fff','box-shadow':!item.condition ? 'none': '0 1px 4px 0 rgba(0, 0, 0, 0.14)'}\">\n\n                                    <div class=\"card-header card-header-info\">\n                                        <div>\n                                            <h4 class=\"card-title\" style=\"text-align:center;display: inline;\" (click)=\"expand(i)\">{{item.inventoryItem.barcode}}</h4>\n\n                                            <span style=\"float: right;cursor: pointer;\" (click)=\"expand(i)\">\n                                                <mat-icon>remove_red_eye</mat-icon>\n                                            </span>\n                                        </div>\n                                    </div>\n                                    <div class=\"card-body\" *ngIf=\"item.condition\">\n\n                                        <div class=\"row\">\n                                            <div class=\"col-md-6\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"QR Code\" [(ngModel)]=\"item.inventoryItem.barcode\" type=\"text\" [ngModelOptions]=\"{standalone: true}\"\n                                                        readonly>\n                                                </mat-form-field>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Created User\" type=\"text\" [(ngModel)]=\"item.inventoryItem.createdUser\" [ngModelOptions]=\"{standalone: true}\"\n                                                        readonly>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Product Name\" type=\"text\" name=\"productName\" [(ngModel)]=\"item.inventoryItem.inventoryId.productName\"\n                                                        readonly [ngModelOptions]=\"{standalone: true}\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"P.O Number\" type=\"text\" name=\"ponumber\" [(ngModel)]=\"item.inventoryItem.poVendorId.purchaseOrderNumber\"\n                                                        readonly [ngModelOptions]=\"{standalone: true}\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\" *ngIf=\"item.inventoryItem.serialNumber !=null\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Serial Number\" type=\"text\" name=\"serialNumber\" [(ngModel)]=\"item.inventoryItem.serialNumber\"\n                                                        readonly [ngModelOptions]=\"{standalone: true}\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"SKU Code\" type=\"text\" name=\"skucode\" [(ngModel)]=\"item.inventoryItem.inventoryId.skuCode\" readonly\n                                                        [ngModelOptions]=\"{standalone: true}\">\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field>\n                                                    <label>Facility</label>\n                                                    <mat-select matInput [(ngModel)]=\"item.inventoryItem.facilityId.id\" [ngModelOptions]=\"{standalone: true}\" required>\n                                                        <mat-option *ngFor=\"let item of facilitiesList\" [value]=\"item.id\">{{item.facility}}</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field>\n                                                    <label>Product Condition</label>\n                                                    <mat-select matInput [(ngModel)]=\"item.inventoryItem.inventoryConditionId.id\" [ngModelOptions]=\"{standalone: true}\" (selectionChange)=\"getStatusList(item.inventoryItem)\">\n                                                        <mat-option *ngFor=\"let condition of conditionsList\" [value]=\"condition.id\">{{condition.inventoryCondition}}</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n                                        <div class=\"row\" *ngIf=\"item.inventoryItem.inventoryConditionId.id==1\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field>\n                                                    <label>Product Status</label>\n                                                    <mat-select matInput [(ngModel)]=\"item.inventoryItem.itemStatusId.id\" [ngModelOptions]=\"{standalone: true}\" #status1=\"ngModel\">\n                                                        <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">{{status.itemStatus}}</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                                <span *ngIf=\"item.inventoryItem.itemStatusId.id== ''\" class=\" text-danger\">Please\n                                                    enter Itemstatus</span>\n\n                                            </div>\n                                        </div>\n                                        <div class=\"row\" *ngIf=\"item.inventoryItem.inventoryConditionId.id==2\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field>\n                                                    <label>Product Status</label>\n                                                    <mat-select matInput [(ngModel)]=\"item.inventoryItem.itemStatusId.id\" [ngModelOptions]=\"{standalone: true}\" #status=\"ngModel\"\n                                                        required>\n                                                        <mat-option *ngFor=\"let status of statusList1\" [value]=\"status.id\">{{status.itemStatus}}</mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n\n                                                <span *ngIf=\"item.inventoryItem.itemStatusId.id== ''\" class=\" text-danger\">Please\n                                                    enter Itemstatus</span>\n                                            </div>\n                                        </div>\n                                        <div>\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-6 col-xs-12\" *ngFor=\"let data of item.checklist; let j=index\">\n                                                    <div class=\"row\">\n                                                        <mat-slide-toggle class=\"primary col-sm-6 col-xs-12\" [(ngModel)]=\"data.accessoryCondition\" [ngModelOptions]=\"{standalone: true}\"\n                                                            (ngModelChange)=\"onChange(i,j)\" name=\"checkbox\">\n\n                                                            <input matInput type=\"number\" style=\"border:1px solid #AAAAAA; border-top: 2px solid #AAAAAA;text-align:center;width:31px\"\n                                                                value={{data.quantity}} [disabled]=\"!data.accessoryCondition\"\n                                                                [(ngModel)]=\"data.quantity\" required pattern=\"^(?:[1-9]|0[1-9]|10)$\"\n                                                                #quant=\"ngModel\" [ngModelOptions]=\"{standalone: true}\">                                                            {{data.accessoriesId.accessory}}\n                                                        </mat-slide-toggle>\n\n                                                        <div>\n                                                            <span *ngIf=\"quant.errors && quant.errors.required\" class=\" text-danger\">\n                                                                Please enter quantity</span>\n                                                            <span *ngIf=\"quant.errors && quant.errors.pattern\" class=\" text-danger\">\n                                                                Please enter only 1-10 numbers</span>\n                                                        </div>\n\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"card\">\n                                    <div class=\"card-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-md-12\">\n                                                <mat-form-field class=\"example-full-width\">\n                                                    <textarea matInput [(ngModel)]=\"item.comments\" [ngModelOptions]=\"{standalone: true}\"\n                                                        required></textarea>\n                                                    <mat-placeholder class=\"placeholder\">Comments</mat-placeholder>\n                                                </mat-form-field>\n                                                <span *ngIf=\"formValidate && (comment==null || comment=='')\" class=\" text-danger\">please\n                                                    enter comments</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div> -->\n                            </div>\n\n\n\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" *ngIf=\"!buttonStatus\" (click)=\"addToInventory()\">Add\n                                to Inventory</button>\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"navigatetoHomePage()\">Cancel</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+product-management/return/return.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/+product-management/return/return.component.ts ***!
  \****************************************************************/
/*! exports provided: ReturnProductComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductComponent", function() { return ReturnProductComponent; });
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






var ReturnProductComponent = /** @class */ (function () {
    function ReturnProductComponent(_qrScanner, _appService, _router, dialog, fb) {
        var _this = this;
        this._qrScanner = _qrScanner;
        this._appService = _appService;
        this._router = _router;
        this.dialog = dialog;
        this.fb = fb;
        this.checklistPostObj = {
            array: []
        };
        this.formValid = false;
        this.buttonStatus = false;
        this._appService.currentMessage.subscribe(function (message) {
            for (var _i = 0, message_1 = message; _i < message_1.length; _i++) {
                var i = message_1[_i];
                _this.productArray = i;
                _this.getAllProductConditionList();
                _this.getAllProductStatusList();
                _this.getFacilitiesList();
            }
        });
    }
    ReturnProductComponent.prototype.ngOnInit = function () {
        /**
    * Back Button event trigger
    */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    ReturnProductComponent.prototype.onChange = function (i, j) {
        if (this.productArray[i].checklist[j].accessoryCondition) {
            this.productArray[i].checklist[j].quantity = 1;
        }
        else {
            this.productArray[i].checklist[j].quantity = 0;
        }
    };
    ReturnProductComponent.prototype.getAllProductConditionList = function () {
        var _this = this;
        this._appService.getProductConditionList().subscribe(function (data) {
            var condRes = data;
            if (condRes.data != null) {
                _this.conditionsList = condRes.data;
                for (var _i = 0, _a = _this.productArray; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var condObj = _this.conditionsList.find(function (status) { return 1 === status.id; });
                    i.inventoryItem.inventoryConditionId.id = condObj.id;
                    if (i.inventoryItem.inventoryConditionId.id) {
                        _this._appService.getStatusByInventoryCondition(i.inventoryItem.inventoryConditionId.id).subscribe(function (data) {
                            var condRes = data;
                            _this.statusList = condRes.data;
                        });
                    }
                }
            }
        });
    };
    ReturnProductComponent.prototype.getAllProductStatusList = function () {
        var _this = this;
        this._appService.getAllProductStatusTypes().subscribe(function (data) {
            var statusRes = data;
            if (statusRes.data != null) {
                _this.statusList = statusRes.data;
                for (var _i = 0, _a = _this.productArray; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var statusObj = _this.statusList.find(function (status) { return 5 === status.id; });
                    i.inventoryItem.itemStatusId.id = statusObj.id;
                }
            }
        });
    };
    ReturnProductComponent.prototype.getFacilitiesList = function () {
        var _this = this;
        this._appService.getFacilities().subscribe(function (data) {
            var facilityRes = data;
            if (facilityRes.data != null) {
                _this.facilitiesList = facilityRes.data;
            }
        });
    };
    ReturnProductComponent.prototype.getStatusList = function (value) {
        var _this = this;
        if (value.inventoryConditionId.id == 1) {
            this._appService.getStatusByInventoryCondition(value.inventoryConditionId.id).subscribe(function (data) {
                var condRes = data;
                _this.statusList = condRes.data;
            });
            value.itemStatusId.id = '';
        }
        else {
            this._appService.getStatusByInventoryCondition(value.inventoryConditionId.id).subscribe(function (data) {
                var condRes = data;
                _this.statusList1 = condRes.data;
            });
            value.itemStatusId.id = '';
        }
    };
    ReturnProductComponent.prototype.addToInventory = function () {
        var _this = this;
        this.buttonStatus = true;
        var postObj = [];
        var data = [];
        for (var i = 0; i < this.productArray.length; i++) {
            //this.productArray[i].inventoryItem.comments=this.productArray[i].comments
            this.productArray[i].inventoryItem.createdUser = localStorage.getItem('userName');
            postObj.push(this.productArray[i].inventoryItem);
            if (this.productArray[i].inventoryItem.itemStatusId.id == '') {
                this.formValid = false;
                break;
            }
            else {
                this.formValid = true;
            }
            if (this.productArray[i].checklist.length > 0) {
                var checklist = { checkListArray: [] };
                for (var j = 0; j < this.productArray[i].checklist.length; j++) {
                    checklist.checkListArray.push({
                        "accessoriesId": this.productArray[i].checklist[j].accessoriesId.id,
                        "accessoryCondition": this.productArray[i].checklist[j].accessoryCondition,
                        "quantity": this.productArray[i].checklist[j].accessoryCondition ? this.productArray[i].checklist[j].quantity : 0
                    });
                    checklist.inventoryItemId = {
                        id: this.productArray[i].inventoryItem.id
                    };
                }
                data.push(checklist);
            }
        }
        this.checklistPostObj.array = data;
        if (this.formValid) {
            this._appService.addReturnItemToInventory(postObj).subscribe(function (data) {
                var resReslt = data;
                if (resReslt.data != null) {
                    if (_this.checklistPostObj.array.length > 0) {
                        _this._appService.updateChecklist(_this.checklistPostObj).subscribe(function (data) {
                            if (data.data != null) {
                                _this.openDialog('Product & Checklist Successfully Added to Inventory ');
                            }
                            else {
                                _this.openDialog(data.error.message);
                            }
                        });
                    }
                    else {
                        _this.openDialog('Product Successfully Added to Inventory');
                    }
                }
                else {
                    _this.openDialog(data.error.message);
                }
            });
        }
    };
    ReturnProductComponent.prototype.expand = function (i) {
        if (this.productArray[i].condition) {
            this.productArray[i].condition = false;
        }
        else {
            this.productArray[i].condition = true;
        }
    };
    ReturnProductComponent.prototype.navigatetoHomePage = function () {
        this._router.navigate(['./inventory']);
    };
    ReturnProductComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.navigatetoHomePage();
            }
        });
    };
    ReturnProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-return',
            template: __webpack_require__(/*! ./return.component.html */ "./src/app/+product-management/return/return.component.html")
        }),
        __metadata("design:paramtypes", [_qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_1__["QRCodeScanner"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ReturnProductComponent);
    return ReturnProductComponent;
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

/***/ "./src/app/+product-management/return/return.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/+product-management/return/return.module.ts ***!
  \*************************************************************/
/*! exports provided: ReturnProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductModule", function() { return ReturnProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _return_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./return.component */ "./src/app/+product-management/return/return.component.ts");
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
        component: _return_component__WEBPACK_IMPORTED_MODULE_4__["ReturnProductComponent"]
    }
];
var ReturnProductModule = /** @class */ (function () {
    function ReturnProductModule() {
    }
    ReturnProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_return_component__WEBPACK_IMPORTED_MODULE_4__["ReturnProductComponent"], _return_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_return_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], ReturnProductModule);
    return ReturnProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=return-return-module.js.map