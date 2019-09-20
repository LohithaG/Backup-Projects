(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["retrieve-retrieve-module"],{

/***/ "./src/app/+qr-management/retrieve/retrieve.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/+qr-management/retrieve/retrieve.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-info\">\n                <h4 class=\"card-title\" style=\"text-align:center\">Retrieve QRCodes</h4>\n            </div>\n            <form [formGroup]=\"retrieveForm\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput [formControl]=\"this.skucode\" [(ngModel)]=\"retrieveObj.purchaseOrderNumber\" (keyup)=\"getPOSbasedonSearch()\"\n                                    autocomplete=\"off\">\n                                <mat-placeholder class=\"placeholder\">P.O Number</mat-placeholder>\n                            </mat-form-field>\n\n                            <div class=\"height-skus\">\n                                <div *ngFor=\"let key of filteredPOSList\" (click)=\"selectPO(key)\" style=\"border-bottom:1px solid #AAAAAA;padding: 3px\">\n                                    {{key.purchaseOrderNumber}} </div>\n                            </div>\n                            <span *ngIf=\"formValidate&&!poSelection\" class=\" text-danger \">Please select P.O Number</span>\n                        </div>\n                    </div>\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"getSKUSBasedOnPO()\">Get SKUS</button>\n                    <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoPreviousPage()\">Cancel</button>\n                    <div class=\"clearfix\"></div>\n                </div>\n            </form>\n        </div>\n\n\n\n        <div *ngFor=\"let sku of skuListPo\">\n            <mat-accordion>\n                <mat-expansion-panel style=\"border-left: 2px solid #26c6da;margin-bottom:8px\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <b>{{sku.itemName}}</b>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div class=\"row\">\n                        <div class=\"col-6\"><b>SKU : </b></div>\n                        <div class=\"col-6\">{{sku.skuCode}}</div>\n                        <div class=\"col-6\"><b>Quantity : </b></div>\n                        <div class=\"col-6\">{{sku.quantity}}</div>\n                    </div>\n                    <button mat-raised-button color=\"warn\" class=\"pull-right\" (click)=\"getQrcbasedOnSKU(sku)\">Get QR Codes</button>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n        <!--<button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"getQRsBasedOnPo()\" *ngIf=\"skuList_po.length\">Get All QR ' s</button>-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+qr-management/retrieve/retrieve.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+qr-management/retrieve/retrieve.component.ts ***!
  \***************************************************************/
/*! exports provided: RetrieveQrComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveQrComponent", function() { return RetrieveQrComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RetrieveQrComponent = /** @class */ (function () {
    function RetrieveQrComponent(router, appService, dialog, fb) {
        this.router = router;
        this.appService = appService;
        this.dialog = dialog;
        this.fb = fb;
        this.retrieveObj = {};
        this.displayMsg = '';
        this.successMsg = 'QR Codes Retrieved Successfully';
        this.errorMsg = 'No QR Codes Available to Reprint';
        this.posList = [];
        this.filteredPOSList = [];
        this.poSelection = false;
        this.skuListPo = [];
        /**
         * Retrieve QRcodes
         */
        this.reprintQRCodeList = [];
        this.dialogType = false;
        this.retrieveForm = this.fb.group({
            SKUCODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.skucode = this.retrieveForm.controls['SKUCODE'];
    }
    RetrieveQrComponent.prototype.ngOnInit = function () {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.getAllPos();
    };
    RetrieveQrComponent.prototype.getAllPos = function () {
        var _this = this;
        this.appService.getAllPovendorbyStatus(1).subscribe(function (data) {
            _this.posList = data.data;
        });
    };
    RetrieveQrComponent.prototype.getPOSbasedonSearch = function () {
        var _this = this;
        this.poSelection = false;
        this.filteredPOSList = [];
        if (this.retrieveObj.purchaseOrderNumber) {
            this.posList.find(function (data) {
                if ((data.purchaseOrderNumber.toLowerCase()).includes(_this.retrieveObj.purchaseOrderNumber.toLowerCase())) {
                    _this.filteredPOSList.push(data);
                }
            });
        }
    };
    RetrieveQrComponent.prototype.selectPO = function (obj) {
        this.poSelection = true;
        this.retrieveObj.purchaseOrderNumber = obj.purchaseOrderNumber;
        this.filteredPOSList = [];
    };
    RetrieveQrComponent.prototype.getSKUSBasedOnPO = function () {
        var _this = this;
        if (this.retrieveForm.valid && this.poSelection) {
            this.appService.getSKUSBasedonPO(this.retrieveObj.purchaseOrderNumber).subscribe(function (data) {
                _this.skuListPo = data.data;
            });
        }
        else {
            this.formValidate = true;
        }
    };
    RetrieveQrComponent.prototype.getQRsBasedOnPo = function () {
        var _this = this;
        this.appService.getQRBasedOnPo(this.retrieveObj.purchaseOrderNumber).subscribe(function (data) {
            if (data.data != null) {
                _this.openDialog(_this.successMsg);
            }
            else {
                _this.openDialog(_this.errorMsg);
            }
        });
    };
    /**
     * individual SKU's QR's
     */
    RetrieveQrComponent.prototype.getQrcbasedOnSKU = function (skuObj) {
        var _this = this;
        this.appService.getQrcbasedOnSKUPO(skuObj.skuCode, this.retrieveObj.purchaseOrderNumber).subscribe(function (data) {
            var qrRes = data;
            if (qrRes.data != null) {
                _this.openDialog(_this.successMsg);
            }
            else {
                _this.openDialog(_this.errorMsg);
            }
        });
    };
    RetrieveQrComponent.prototype.RetrieveQRcodes = function () {
        var _this = this;
        if (this.retrieveForm.valid && this.poSelection) {
            this.appService.retrieveQrCodes(this.retrieveObj.sku).subscribe(function (data) {
                var retriveRes = data;
                if (retriveRes.data != null) {
                    _this.dialogType = true;
                    var details = retriveRes.data;
                    if (details.length > 0) {
                        _this.openDialog(_this.successMsg);
                        _this.reprintQRCodeList = retriveRes.data;
                    }
                    else {
                        _this.dialogType = false;
                        _this.openDialog(_this.errorMsg);
                    }
                }
                else {
                    _this.dialogType = false;
                    _this.openDialog(_this.errorMsg);
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    RetrieveQrComponent.prototype.RePrintAllQRcodes = function () {
        var _this = this;
        this.appService.printQrcode(this.reprintQRCodeList).subscribe(function (data) {
            _this.dialogType = true;
            _this.openDialog('QR Codes is successfully sent to printer');
        });
    };
    RetrieveQrComponent.prototype.printQRrcode = function (barcode) {
        var _this = this;
        var array = [];
        array.push(barcode);
        this.appService.printQrcode(array).subscribe(function (data) {
            _this.dialogType = true;
            _this.openDialog('QRcode is successfully sent to printer');
        });
    };
    RetrieveQrComponent.prototype.clearMsgs = function () {
        var _this = this;
        setTimeout(function () {
            _this.displayMsg = "";
        }, 2000);
    };
    RetrieveQrComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            if (!_this.dialogType) {
                _this.router.navigate(['./inventory']);
            }
        });
    };
    RetrieveQrComponent.prototype.gotoPreviousPage = function () {
        this.router.navigate(['./inventory']);
    };
    RetrieveQrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'generate-QR',
            template: __webpack_require__(/*! ./retrieve.component.html */ "./src/app/+qr-management/retrieve/retrieve.component.html"),
            styles: ["\n    .height-skus{\n        max-height: 100px;\n        overflow-y: scroll;\n        overflow-x: hidden;\n        display: block;\n        }\n        .mat-focused .placeholder {    \n            color: #AAAAAA;\n            }\n          .placeholder {\n             color:#AAAAAA;\n            }\n            .img1\n            {\n              height: 120px;\n            }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RetrieveQrComponent);
    return RetrieveQrComponent;
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

/***/ "./src/app/+qr-management/retrieve/retrieve.module.ts":
/*!************************************************************!*\
  !*** ./src/app/+qr-management/retrieve/retrieve.module.ts ***!
  \************************************************************/
/*! exports provided: RetrieveQrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveQrModule", function() { return RetrieveQrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _retrieve_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retrieve.component */ "./src/app/+qr-management/retrieve/retrieve.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
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
        component: _retrieve_component__WEBPACK_IMPORTED_MODULE_4__["RetrieveQrComponent"]
    }
];
var RetrieveQrModule = /** @class */ (function () {
    function RetrieveQrModule() {
    }
    RetrieveQrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_retrieve_component__WEBPACK_IMPORTED_MODULE_4__["RetrieveQrComponent"], _retrieve_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_retrieve_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], RetrieveQrModule);
    return RetrieveQrModule;
}());



/***/ })

}]);
//# sourceMappingURL=retrieve-retrieve-module.js.map