(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-generate-module"],{

/***/ "./src/app/+qr-management/generate/generate.component.css":
/*!****************************************************************!*\
  !*** ./src/app/+qr-management/generate/generate.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-focused .placeholder {    \n  color: #AAAAAA;\n  }\n.placeholder {\n   color:#AAAAAA;\n  }\n.img1\n  {\n    height: 120px;\n  }\n/* ::-webkit-scrollbar-thumb {\n    background: grey;\n    border-radius: 10px;\n    } */\n.height-skus{\n    max-height: 100px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    display: block;\n    }\n  "

/***/ }),

/***/ "./src/app/+qr-management/generate/generate.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/+qr-management/generate/generate.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"padding:30px 1px\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-info\">\n                <h4 class=\"card-title\" style=\"text-align:center\">Generate QRCodes</h4>\n            </div>\n            <div class=\"card-body\">\n\n                <form [formGroup]=\"generateSKUForm\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput [formControl]=\"this.skucode\" [(ngModel)]=\"generateObj.purchaseOrderNumber\"\n                                    (keyup)=\"getPOSbasedonSearch()\" autocomplete=\"off\">\n                                <mat-placeholder class=\"placeholder\">P.O Number</mat-placeholder>\n                            </mat-form-field>\n\n                            <div class=\"height-skus\">\n                                <div *ngFor=\"let key of filteredPOSList\" (click)=\"selectPO(key)\" style=\"border-bottom:1px solid #AAAAAA;padding: 3px\">\n                                    {{key.purchaseOrderNumber}} </div>\n                            </div>\n                            <span *ngIf=\"formValidate&&!poSelection\" class=\" text-danger \">Please select P.O Number</span>\n                        </div>\n                    </div>\n\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"getSKUSBasedOnPO()\"\n                        *ngIf=\"posList.length>0\">Get SKUS</button>\n                    <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoPreviousPage()\">Cancel</button>\n                    <div class=\"clearfix\"></div>\n                </form>\n            </div>\n            <div class=\"card-body\" *ngIf=\"posList.length==0\">\n                P.O's not available to generate QR Codes\n            </div>\n        </div>\n        <div *ngFor=\"let sku of skuListPo\">\n            <mat-accordion>\n                <mat-expansion-panel style=\"border-left: 2px solid #26c6da;margin-bottom:8px\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <b>{{sku.itemName}}</b>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <div class=\"row\">\n                        <div class=\"col-6\"><b>SKU : </b></div>\n                        <div class=\"col-6\">{{sku.skuCode}}</div>\n                        <div class=\"col-6\"><b>Quantity : </b></div>\n                        <div class=\"col-6\">{{sku.quantity}}</div>\n                    </div>\n                    <!--<button mat-raised-button color=\"warn\" class=\"pull-right\" (click)=\"GenerateQRcodes(sku)\">Print</button>-->\n                </mat-expansion-panel>\n            </mat-accordion>\n        </div>\n        <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"getQRsBasedOnPo()\" *ngIf=\"skuListPo?.length\">Get\n            All QR Codes</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+qr-management/generate/generate.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/+qr-management/generate/generate.component.ts ***!
  \***************************************************************/
/*! exports provided: GenerateQrComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateQrComponent", function() { return GenerateQrComponent; });
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





var GenerateQrComponent = /** @class */ (function () {
    function GenerateQrComponent(dialog, router, appService, fb) {
        this.dialog = dialog;
        this.router = router;
        this.appService = appService;
        this.fb = fb;
        this.successMsg = 'QR Codes generated successfully';
        this.errorMsg = 'Failed to Generate QR Codes';
        this.generateObj = {};
        this.posList = [];
        this.filteredPOSList = [];
        this.poSelection = false;
        this.skuListPo = [];
        this.generateSKUForm = this.fb.group({
            SKUCODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            NO_OF_PROD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^([1-9][0-9]{0,2})$')]],
        });
        this.skucode = this.generateSKUForm.controls['SKUCODE'];
        this.noofProducts = this.generateSKUForm.controls['NO_OF_PROD'];
    }
    GenerateQrComponent.prototype.ngOnInit = function () {
        /**
       * Back Button event trigger
       */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.getAllPos();
    };
    GenerateQrComponent.prototype.getAllPos = function () {
        var _this = this;
        this.appService.getAllPovendorbyStatus(0).subscribe(function (data) {
            _this.posList = data.data;
        });
    };
    GenerateQrComponent.prototype.getPOSbasedonSearch = function () {
        var _this = this;
        this.poSelection = false;
        this.filteredPOSList = [];
        this.skuListPo = [];
        if (this.generateObj.purchaseOrderNumber) {
            this.posList.find(function (data) {
                if ((data.purchaseOrderNumber.toLowerCase()).includes(_this.generateObj.purchaseOrderNumber.toLowerCase())) {
                    _this.filteredPOSList.push(data);
                }
            });
        }
    };
    GenerateQrComponent.prototype.selectPO = function (obj) {
        this.poSelection = true;
        this.generateObj.purchaseOrderNumber = obj.purchaseOrderNumber;
        this.filteredPOSList = [];
    };
    GenerateQrComponent.prototype.getSKUSBasedOnPO = function () {
        var _this = this;
        if (this.poSelection) {
            this.appService.getSKUSBasedonPO(this.generateObj.purchaseOrderNumber).subscribe(function (data) {
                _this.skuListPo = data.data;
            });
        }
        else {
            this.formValidate = true;
        }
    };
    GenerateQrComponent.prototype.getQRsBasedOnPo = function () {
        var _this = this;
        this.appService.getQRBasedOnPo(this.generateObj.purchaseOrderNumber).subscribe(function (data) {
            if (data.data != null) {
                _this.openDialog(_this.successMsg);
            }
            else {
                _this.openDialog(_this.errorMsg);
            }
        });
    };
    /**
     ** Barcodes generation
    */
    GenerateQrComponent.prototype.GenerateQRcodes = function (skuObj) {
        var _this = this;
        this.appService.GenerateQRcodes(skuObj.skuCode, skuObj.quantity).subscribe(function (data) {
            var qrRes = data;
            if (qrRes.data != null) {
                _this.openDialog(_this.successMsg);
            }
            else {
                _this.openDialog(_this.errorMsg);
            }
        });
    };
    GenerateQrComponent.prototype.openDialog = function (text) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', text);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.gotoPreviousPage();
            }
        });
    };
    GenerateQrComponent.prototype.gotoPreviousPage = function () {
        var _this = this;
        this.generateSKUForm.reset();
        setTimeout(function () {
            _this.router.navigate(['./inventory']);
        });
    };
    GenerateQrComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'generate-QR',
            template: __webpack_require__(/*! ./generate.component.html */ "./src/app/+qr-management/generate/generate.component.html"),
            styles: [__webpack_require__(/*! ./generate.component.css */ "./src/app/+qr-management/generate/generate.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], GenerateQrComponent);
    return GenerateQrComponent;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogComponent.prototype.ngOnInit = function () {
        this.msgText = localStorage.getItem('msg');
    };
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-content-example-dialog',
            template: "<img class=\"mat-typography img1\" src=\"assets/img/logom.png\" alt=\"MedicalBulkBuy\" width=\"90%\"   >\n    <mat-dialog-content class=\"mat-typography\" style=\"border-bottom:1px solid #ddd;border-top:1px solid #ddd; text-align:center\">\n     \n    <h5 style=\"padding: 18px;margin: 0px;font-size: 14px;font-family: sans-serif;\">{{msgText}}</h5>\n    </mat-dialog-content>\n   \n    <mat-dialog-actions align=\"center\" >\n    <button mat-stroked-button [mat-dialog-close]=\"true\" cdkFocusInitial > \n    <mat-icon>done</mat-icon>\n    Ok\n</button>\n    </mat-dialog-actions>\n  ",
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/+qr-management/generate/generate.module.ts":
/*!************************************************************!*\
  !*** ./src/app/+qr-management/generate/generate.module.ts ***!
  \************************************************************/
/*! exports provided: GenerateQrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateQrModule", function() { return GenerateQrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _generate_generate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generate/generate.component */ "./src/app/+qr-management/generate/generate.component.ts");
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
        component: _generate_generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateQrComponent"]
    }
];
var GenerateQrModule = /** @class */ (function () {
    function GenerateQrModule() {
    }
    GenerateQrModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_generate_generate_component__WEBPACK_IMPORTED_MODULE_4__["GenerateQrComponent"], _generate_generate_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_generate_generate_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], GenerateQrModule);
    return GenerateQrModule;
}());



/***/ })

}]);
//# sourceMappingURL=generate-generate-module.js.map