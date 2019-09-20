(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-view-inventory-view-module"],{

/***/ "./src/app/+inventory/+inventory-view/inventory-view.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/+inventory/+inventory-view/inventory-view.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"userType=='INVENTORY_MANAG'\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">INVENTORY<br>MANAGEMENT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center\" (click)=\"navigateToAddProduct()\">\n                            Add\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center;border-right:1px solid #ddd;border-left:1px solid #ddd\"\n                            (click)=\"navigateToUpdateProduct()\">\n                            Update\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center\" (click)=\"navigateToReturnProduct()\">\n                            Return\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">QR CODE\n                            <br>MANAGEMENT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center;\" (click)=\"navigateToGenerateQrCodes()\">\n                            Generate\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center;border-right:1px solid #ddd;border-left:1px solid #ddd\"\n                            (click)=\"navigateToRetrieveQrCodes()\">\n                            Retrieve\n                        </div>\n                        <div class=\"col-lg-4 col-md-4 col-sm-4 col-4 footer-text\" style=\"text-align:center\" (click)=\"navigateToSearchQrCode()\">\n                            Search\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">INVENTORY<br>TRANSFER</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 footer-text\" style=\"text-align:center;border-right:1px solid #ddd\" (click)=\"navigateToTransfers()\">\n                            Transfers\n                        </div>\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 footer-text\" style=\"text-align:center\" (click)=\"navigateToRestore()\">\n                            Restore\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <!--<div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">SKU<br>MANAGEMENT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 footer-text\" style=\"text-align:center;border-right:1px solid #ddd\"\n                            (click)=\"navigateToAddSKU()\">\n                            Add\n                        </div>\n                        <div class=\"col-lg-6 col-md-6 col-sm-6 col-6 footer-text\" style=\"text-align:center\" (click)=\"navigateToUpdateSKU()\">\n                            Update\n                        </div>\n                    </div>\n                </div>\n            </div>-->\n\n        </div>\n    </div>\n</div>\n\n<div class=\"main-content\" *ngIf=\"userType=='PRODUCT_VERIFIER'\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">VIEW<br>PRODUCT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 footer-text\" style=\"text-align:center;\" (click)=\"navigateToView()\">\n                            View\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"main-content\" *ngIf=\"userType=='RETURN_MANAG'\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header card-header-info card-header-icon\">\n                        <div class=\"card-icon\" style=\"float:none;text-align:center;font-size:17px;margin-right:0px\">RETURN<br>MANAGEMENT</div>\n                    </div>\n                    <div class=\"row card-footer\">\n                        <div class=\"col-lg-12 col-md-12 col-sm-12 col-12 footer-text\" style=\"text-align:center\" (click)=\"navigateToReturn()\">\n                            Return\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+inventory/+inventory-view/inventory-view.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/+inventory/+inventory-view/inventory-view.component.ts ***!
  \************************************************************************/
/*! exports provided: InventoryManagerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryManagerViewComponent", function() { return InventoryManagerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryManagerViewComponent = /** @class */ (function () {
    function InventoryManagerViewComponent(router, _qrScanner) {
        this.router = router;
        this._qrScanner = _qrScanner;
    }
    InventoryManagerViewComponent.prototype.ngOnInit = function () {
        /**
         * Back Button event trigger
         */
        this.userType = localStorage.getItem('userRole');
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    /**
    * navigate to Add SKU page
    */
    InventoryManagerViewComponent.prototype.navigateToAddSKU = function () {
        this.router.navigate(['/sku/add']);
    };
    /**
     * navigate to Update SKU page
    */
    InventoryManagerViewComponent.prototype.navigateToUpdateSKU = function () {
        this.router.navigate(['/sku/update']);
    };
    InventoryManagerViewComponent.prototype.navigateToView = function () {
        this.router.navigate(['/product/view']);
    };
    InventoryManagerViewComponent.prototype.navigateToReturn = function () {
        this.router.navigate(['/product/return-product']);
    };
    /**
     * navigate to Add Product page 0155-0000058
    */
    //0140-0000184
    InventoryManagerViewComponent.prototype.navigateToAddProduct = function () {
        var _this = this;
        // localStorage.setItem('QRCode', '0175-0000005')
        // this.router.navigate(['/product/add'])
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', _this.resultQrcode.text);
                _this.router.navigate(['/product/add']);
            }
        });
    };
    /**
     * navigate to Update product page
    */
    InventoryManagerViewComponent.prototype.navigateToUpdateProduct = function () {
        var _this = this;
        //  localStorage.setItem('QRCode', '0175-0000005')
        // this.router.navigate(['/product/update'])
        this._qrScanner.promiseScan().then(function (result) {
            _this.resultQrcode = result;
            if (!_this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', _this.resultQrcode.text);
                _this.router.navigate(['/product/update']);
            }
        });
    };
    /**
     * Navigate to Transfers Page
     */
    InventoryManagerViewComponent.prototype.navigateToTransfers = function () {
        this.router.navigate(['/product/shipping']);
    };
    /**
        * Navigate to Restore Page
        */
    InventoryManagerViewComponent.prototype.navigateToRestore = function () {
        this.router.navigate(['/product/delete']);
    };
    /**
     * navigate to return Product Page
     */
    InventoryManagerViewComponent.prototype.navigateToReturnProduct = function () {
        this.router.navigate(['/product/return-product']);
    };
    /**
       * navigate to generate QR Code page
      */
    InventoryManagerViewComponent.prototype.navigateToGenerateQrCodes = function () {
        this.router.navigate(['/qr/generate']);
    };
    /**
     * navigate to retrieve QR Code page
    */
    InventoryManagerViewComponent.prototype.navigateToRetrieveQrCodes = function () {
        this.router.navigate(['/qr/retrieve']);
    };
    /**
     * Navigate to Search page
     */
    InventoryManagerViewComponent.prototype.navigateToSearchQrCode = function () {
        this.router.navigate(['/qr/search']);
    };
    InventoryManagerViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-module',
            template: __webpack_require__(/*! ./inventory-view.component.html */ "./src/app/+inventory/+inventory-view/inventory-view.component.html"),
            styles: ["\n    .footer-text{\n        font-weight:bold\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_2__["QRCodeScanner"]])
    ], InventoryManagerViewComponent);
    return InventoryManagerViewComponent;
}());



/***/ }),

/***/ "./src/app/+inventory/+inventory-view/inventory-view.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+inventory/+inventory-view/inventory-view.module.ts ***!
  \*********************************************************************/
/*! exports provided: InventoryViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryViewModule", function() { return InventoryViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inventory_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-view.component */ "./src/app/+inventory/+inventory-view/inventory-view.component.ts");
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
        component: _inventory_view_component__WEBPACK_IMPORTED_MODULE_4__["InventoryManagerViewComponent"]
    }
];
var InventoryViewModule = /** @class */ (function () {
    function InventoryViewModule() {
    }
    InventoryViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_inventory_view_component__WEBPACK_IMPORTED_MODULE_4__["InventoryManagerViewComponent"]],
            providers: [],
            entryComponents: []
        })
    ], InventoryViewModule);
    return InventoryViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-view-inventory-view-module.js.map