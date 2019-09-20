(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-add-sku-management-module"],{

/***/ "./src/app/+sku-management/add/add-sku-management.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/+sku-management/add/add-sku-management.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    \n\n\n   #ribbon {\n    min-height: 22px;\n    background: none;\n    padding: 0px -15px;\n    position: relative;\n   }\n\n   @media only screen and (max-width: 992px) and (min-width: 240px){\n   #ribbon {\n    background: none\n   }\n   }\n\n   .mat-focused .placeholder {    \n      color: #AAAAAA;\n      }\n\n   .placeholder {\n       color:#AAAAAA;\n      }\n\n\n   \n"

/***/ }),

/***/ "./src/app/+sku-management/add/add-sku-management.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/+sku-management/add/add-sku-management.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-info\">\n                        <h4 class=\"card-title\" style=\"text-align:center\">Add SKU</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <form [formGroup]=\"addSKUForm\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\" >\n                                        <input matInput  [formControl]=\"this.skucode\" [(ngModel)]=\"skuObj.skuCode\" type=\"text\">\n                                        <mat-placeholder class=\"placeholder\">SKU Code</mat-placeholder>\n                                    </mat-form-field>\n\n                                    <span *ngIf=\"this.skucode.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter SKU code</span>\n                                    <span *ngIf=\"this.skucode.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter valid SKU Code with 30 letters only</span>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput  type=\"text\" [formControl]=\"this.productName\" [(ngModel)]=\"skuObj.productName\">\n                                        <mat-placeholder class=\"placeholder\">Product Name</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.productName.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter product name</span>\n                                    <span *ngIf=\"this.productName.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter product name less than 100 letters only</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input matInput  type=\"number\" [formControl]=\"this.threshold\" [(ngModel)]=\"skuObj.thresholdLevel\">\n                                        <mat-placeholder class=\"placeholder\">Threshold Level</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.threshold.hasError('required') &&formValidate \" class=\" text-danger \">Please\n                                        enter\n                                        threshold level</span>\n                                    <span *ngIf=\"this.threshold.hasError('maxlength') ||this.threshold.hasError('pattern') \" class=\"text-danger\">Please enter valid threshold level between 1-999 only</span>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <mat-form-field class=\"example-full-width\">\n                                        <textarea matInput  [formControl]=\"this.description\" [(ngModel)]=\"skuObj.description\"></textarea>\n                                        <mat-placeholder class=\"placeholder\">Description</mat-placeholder>\n                                    </mat-form-field>\n                                    <span *ngIf=\"this.description.hasError('required') &&formValidate \" class=\"text-danger \">Please\n                                        enter description</span>\n                                    <span *ngIf=\"this.description.hasError('maxlength')\" class=\"text-danger\">Please\n                                        enter only 200 letters only</span>\n                                </div>\n\n                            </div>\n                            <button mat-raised-button class=\"btn btn-success pull-right\" (click)=\"addSkuDetails()\">Submit</button>\n                            <button mat-raised-button class=\"btn btn-danger pull-right\" (click)=\"gotoPreviousPage()\">Cancel</button>\n                            <div class=\"clearfix\"></div>\n\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <popup></popup> -->"

/***/ }),

/***/ "./src/app/+sku-management/add/add-sku-management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+sku-management/add/add-sku-management.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddSkuManagementComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSkuManagementComponent", function() { return AddSkuManagementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../popup/popup.component */ "./src/app/popup/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddSkuManagementComponent = /** @class */ (function () {
    function AddSkuManagementComponent(dialog, platformLocation, fb, router, appService) {
        this.dialog = dialog;
        this.platformLocation = platformLocation;
        this.fb = fb;
        this.router = router;
        this.appService = appService;
        this.skuObj = {};
        this.addSKUForm = this.fb.group({
            SKUCODE: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            PROD_NAME: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            DESCRIPTION: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)]],
            THRESHOLD: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^([1-9][0-9]{0,2})$')]]
        });
        this.skucode = this.addSKUForm.controls['SKUCODE'];
        this.productName = this.addSKUForm.controls['PROD_NAME'];
        this.description = this.addSKUForm.controls['DESCRIPTION'];
        this.threshold = this.addSKUForm.controls['THRESHOLD'];
    }
    AddSkuManagementComponent.prototype.ngOnInit = function () {
        this.skuObj.thresholdLevel = 5;
        /**
     * Back Button event trigger
     */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    AddSkuManagementComponent.prototype.addSkuDetails = function () {
        var _this = this;
        if (this.addSKUForm.valid) {
            this.skuObj.createdTime = new Date();
            this.appService.addingSku(this.skuObj).subscribe(function (data) {
                var addRes = data;
                if (addRes.data != null) {
                    _this.openDialog("SKU added successfully");
                    _this.addSKUForm.reset();
                    setTimeout(function () {
                        _this.skuObj = {};
                    }, 500);
                }
                else {
                    _this.openDialog(addRes.error.message);
                }
            });
        }
        else {
            this.formValidate = true;
        }
    };
    AddSkuManagementComponent.prototype.gotoPreviousPage = function () {
        var _this = this;
        this.addSKUForm.reset();
        setTimeout(function () {
            _this.router.navigate(['./inventory']);
        });
    };
    AddSkuManagementComponent.prototype.openDialog = function (msgText) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogComponent, { disableClose: true });
        localStorage.setItem('msg', msgText);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.gotoPreviousPage();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_popup_popup_component__WEBPACK_IMPORTED_MODULE_6__["PopUpComponent"]),
        __metadata("design:type", Object)
    ], AddSkuManagementComponent.prototype, "popup", void 0);
    AddSkuManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sku-management',
            template: __webpack_require__(/*! ./add-sku-management.component.html */ "./src/app/+sku-management/add/add-sku-management.component.html"),
            styles: [__webpack_require__(/*! ./add-sku-management.component.css */ "./src/app/+sku-management/add/add-sku-management.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], AddSkuManagementComponent);
    return AddSkuManagementComponent;
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

/***/ "./src/app/+sku-management/add/add-sku-management.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/+sku-management/add/add-sku-management.module.ts ***!
  \******************************************************************/
/*! exports provided: AddSkuManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSkuManagementModule", function() { return AddSkuManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_sku_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-sku-management.component */ "./src/app/+sku-management/add/add-sku-management.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
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
        component: _add_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["AddSkuManagementComponent"]
    }
];
var AddSkuManagementModule = /** @class */ (function () {
    function AddSkuManagementModule() {
    }
    AddSkuManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' })
            ],
            declarations: [_add_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["AddSkuManagementComponent"], _add_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            entryComponents: [_add_sku_management_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]],
            providers: []
        })
    ], AddSkuManagementModule);
    return AddSkuManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-add-sku-management-module.js.map