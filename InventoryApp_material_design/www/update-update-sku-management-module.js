(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-update-sku-management-module"],{

/***/ "./src/app/+sku-management/update/update-sku-management.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/+sku-management/update/update-sku-management.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-focused .placeholder {    \n    color: #AAAAAA;\n    }\n  .placeholder {\n     color:#AAAAAA;\n    }\n  .height-skus{\n      max-height: 100px;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      display: block;\n      }"

/***/ }),

/***/ "./src/app/+sku-management/update/update-sku-management.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/+sku-management/update/update-sku-management.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\" style=\"padding-left:0px;padding-right:0px\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Update SKU</h4>\n                    </div>\n                    <div class=\"card-body\">\n\n                        <form (ngSubmit)=\"getSkuDetails()\" #updateForm=\"ngForm\">\n\n                            <div *ngIf=\"!skuDetails\">\n                                <div class=\"row\">\n                                    <!-- <div class=\"col-md-12\">\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [(ngModel)]=\"skuValue\" name=\"skuValue\" #sku=\"ngModel\" maxlength=\"30\" required>\n                                            <mat-placeholder class=\"placeholder\">SKU code</mat-placeholder>\n                                        </mat-form-field>\n                                        <div *ngIf=\"!submitted || sku.touched\">\n                                            <span class=\" text-danger\" *ngIf=\"(sku.errors && sku.errors.required)\">\n                                                Please enter SKU code </span>\n                                        </div>\n                                    </div> -->\n\n                                    <div class=\"col-md-12\">\n\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput [(ngModel)]=\"skuValue\" (keyup)=\"getSKUSbasedonSearch()\"\n                                                name=\"skuValue\" #sku=\"ngModel\" maxlength=\"30\" required autocomplete=\"off\">\n                                            <mat-placeholder class=\"placeholder\">SKU Code</mat-placeholder>\n\n                                        </mat-form-field>\n\n                                        <div class=\"height-skus\">\n                                            <div *ngFor=\"let key of filteredSkusList\" (click)=\"selectSKU(key)\" style=\"border-bottom:1px solid #AAAAAA;padding: 3px\">{{key.skuCode}}-{{key.productName}}</div>\n                                        </div>\n                                        <span *ngIf=\"formValidate&&!skuSelection\" class=\" text-danger \">Please\n                                            enter valid SKU code</span>\n                                    </div>\n                                </div>\n                                <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\">Submit</button>\n                                <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoHomePage()\">Cancel</button>\n                            </div>\n                        </form>\n\n\n\n                        <form [formGroup]=\"updateSKUForm\" method=\"post\" *ngIf=\"skuDetails\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"text\" [formControl]=\"this.skucode\" [(ngModel)]=\"skuObj.skuCode\"\n                                            readonly>\n                                        <mat-placeholder class=\"placeholder\">SKU code</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.skucode.hasError('required') &&formValidate \" class=\"text-danger\">Please\n                                        enter SKU code</span>\n                                </div>\n\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"text\" [formControl]=\"this.productName\" [(ngModel)]=\"skuObj.productName\">\n                                        <mat-placeholder class=\"placeholder\">Product Name</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.productName.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter product name</span>\n                                    <span *ngIf=\"this.productName.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter product name with 100 letters only</span>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput type=\"number\" [formControl]=\"this.threshold\" [(ngModel)]=\"skuObj.thresholdLevel\">\n                                        <mat-placeholder class=\"placeholder\">Threshold Level</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.threshold.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter\n                                        threshold level</span>\n                                    <span *ngIf=\"this.threshold.hasError('maxlength') ||this.threshold.hasError('pattern') \"\n                                        class=\"text-danger\">Please enter valid threshold level between 1-999 only\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput [formControl]=\"this.descrption\" [(ngModel)]=\"skuObj.description\"></textarea>\n                                        <mat-placeholder class=\"placeholder\">Description</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.descrption.hasError('required') &&formValidate \" class=\"text-danger \">Please\n                                        enter description</span>\n                                    <span *ngIf=\"this.descrption.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter only 200 letters only</span>\n                                </div>\n                            </div>\n\n                            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"updateSkuDetails()\">Update</button>\n                            <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoHomePage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+sku-management/update/update-sku-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/+sku-management/update/update-sku-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpdateSkuManagementComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSkuManagementComponent", function() { return UpdateSkuManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
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






var UpdateSkuManagementComponent = /** @class */ (function () {
    function UpdateSkuManagementComponent(dialog, _appService, route, platformLocation, fb, router) {
        this.dialog = dialog;
        this._appService = _appService;
        this.route = route;
        this.platformLocation = platformLocation;
        this.fb = fb;
        this.router = router;
        this.skuObj = {};
        this.skuDetails = false;
        this.submitted = true;
        this.filteredSkusList = [];
        this.skuSelection = false;
        this.updateSKUForm = this.fb.group({
            SKUCODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            PROD_NAME: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            DESCRIPTION: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            THRESHOLD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([1-9][0-9]{0,2})$')]]
        });
        this.skucode = this.updateSKUForm.controls['SKUCODE'];
        this.productName = this.updateSKUForm.controls['PROD_NAME'];
        this.descrption = this.updateSKUForm.controls['DESCRIPTION'];
        this.threshold = this.updateSKUForm.controls['THRESHOLD'];
    }
    UpdateSkuManagementComponent.prototype.getSkuDetails = function () {
        var _this = this;
        if (this.formUpdate.valid && this.skuSelection) {
            this._appService.getDetailsBySkuId(this.skuValue).subscribe(function (data) {
                if (data.data != null) {
                    _this.skuDetails = true;
                    _this.skuObj = data.data;
                    _this.formValidate = false;
                }
                else {
                    _this.openDialog("No details added for this SKU");
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    UpdateSkuManagementComponent.prototype.ngOnInit = function () {
        /**
     * Back Button event trigger
     */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.getAllSkuCodes();
    };
    UpdateSkuManagementComponent.prototype.getAllSkuCodes = function () {
        var _this = this;
        this._appService.getAllSkuCodes().subscribe(function (data) {
            var resData = data;
            _this.skuCodeList = resData.data;
        });
    };
    UpdateSkuManagementComponent.prototype.updateSkuDetails = function () {
        var _this = this;
        if (this.updateSKUForm.valid) {
            this.skuObj.createdTime = new Date();
            this._appService.updateSku(this.skuObj).subscribe(function (data) {
                if (data.data != null) {
                    _this.openDialog('SKU details updated successfully');
                    _this.updateSKUForm.reset();
                    setTimeout(function () {
                        _this.skuObj = {};
                    }, 500);
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
    UpdateSkuManagementComponent.prototype.gotoHomePage = function () {
        this.router.navigate(['./inventory']);
    };
    UpdateSkuManagementComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.router.navigate(['./inventory']);
            }
        });
    };
    UpdateSkuManagementComponent.prototype.getSKUSbasedonSearch = function () {
        var _this = this;
        this.skuSelection = false;
        this.filteredSkusList = [];
        if (this.skuValue) {
            this.skuCodeList.find(function (data) {
                if ((data.skuCode + "").includes(_this.skuValue) || (data.productName.toLowerCase()).includes(_this.skuValue.toLowerCase())) {
                    _this.filteredSkusList.push(data);
                }
            });
        }
    };
    UpdateSkuManagementComponent.prototype.selectSKU = function (obj) {
        this.skuSelection = true;
        this.skuValue = obj.skuCode;
        this.filteredSkusList = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("updateForm"),
        __metadata("design:type", Object)
    ], UpdateSkuManagementComponent.prototype, "formUpdate", void 0);
    UpdateSkuManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-sku-management',
            template: __webpack_require__(/*! ./update-sku-management.component.html */ "./src/app/+sku-management/update/update-sku-management.component.html"),
            styles: [__webpack_require__(/*! ./update-sku-management.component.css */ "./src/app/+sku-management/update/update-sku-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateSkuManagementComponent);
    return UpdateSkuManagementComponent;
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

/***/ "./src/app/+sku-management/update/update-sku-management.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/+sku-management/update/update-sku-management.module.ts ***!
  \************************************************************************/
/*! exports provided: UpdateSkuManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSkuManagementModule", function() { return UpdateSkuManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _update_sku_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-sku-management.component */ "./src/app/+sku-management/update/update-sku-management.component.ts");
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
        component: _update_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["UpdateSkuManagementComponent"]
    },
];
var UpdateSkuManagementModule = /** @class */ (function () {
    function UpdateSkuManagementModule() {
    }
    UpdateSkuManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            ],
            declarations: [_update_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["UpdateSkuManagementComponent"], _update_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: [],
            entryComponents: [_update_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]]
        })
    ], UpdateSkuManagementModule);
    return UpdateSkuManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=update-update-sku-management-module.js.map