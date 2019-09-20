(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./+auth/login/login.module": [
		"./src/app/+auth/login/login.module.ts",
		"auth-login-login-module"
	],
	"./+dispatch-details/dispatch-details.module": [
		"./src/app/+dispatch/+dispatch-details/dispatch-details.module.ts",
		"dispatch-details-dispatch-details-module"
	],
	"./+dispatch-home/dispatch-home.module": [
		"./src/app/+dispatch/+dispatch-home/dispatch-home.module.ts",
		"dispatch-home-dispatch-home-module"
	],
	"./+dispatch-manifest/dispatch-manifest.module": [
		"./src/app/+dispatch/+dispatch-manifest/dispatch-manifest.module.ts",
		"dispatch-manifest-dispatch-manifest-module"
	],
	"./+dispatch-view/dispatch-view.module": [
		"./src/app/+dispatch/+dispatch-view/dispatch-view.module.ts",
		"dispatch-view-dispatch-view-module"
	],
	"./+dispatch/dispatch-manager.module": [
		"./src/app/+dispatch/dispatch-manager.module.ts",
		"dispatch-dispatch-manager-module"
	],
	"./+inventory-details/inventory-details.module": [
		"./src/app/+inventory/+inventory-details/inventory-details.module.ts",
		"inventory-details-inventory-details-module"
	],
	"./+inventory-view/inventory-view.module": [
		"./src/app/+inventory/+inventory-view/inventory-view.module.ts",
		"inventory-view-inventory-view-module"
	],
	"./+inventory/inventory-manager.module": [
		"./src/app/+inventory/inventory-manager.module.ts",
		"inventory-inventory-manager-module"
	],
	"./+invoice/invoice.module": [
		"./src/app/+dispatch/+invoice/invoice.module.ts",
		"invoice-invoice-module"
	],
	"./+invoiceview/invoice-view.module": [
		"./src/app/+dispatch/+invoiceview/invoice-view.module.ts",
		"invoiceview-invoice-view-module"
	],
	"./+product-management/product-management.module": [
		"./src/app/+product-management/product-management.module.ts",
		"product-management-product-management-module"
	],
	"./+qr-management/qr-management.module": [
		"./src/app/+qr-management/qr-management.module.ts",
		"qr-management-qr-management-module"
	],
	"./+sku-management/sku-management.module": [
		"./src/app/+sku-management/sku-management.module.ts",
		"sku-management-sku-management-module"
	],
	"./+version-details/version-details.module": [
		"./src/app/+version-details/version-details.module.ts",
		"version-details-version-details-module"
	],
	"./add/add-product.module": [
		"./src/app/+product-management/add/add-product.module.ts",
		"add-add-product-module~update-update-product-module",
		"add-add-product-module"
	],
	"./add/add-sku-management.module": [
		"./src/app/+sku-management/add/add-sku-management.module.ts",
		"add-add-sku-management-module"
	],
	"./del/delete.module": [
		"./src/app/+product-management/del/delete.module.ts",
		"del-delete-module"
	],
	"./generate/generate.module": [
		"./src/app/+qr-management/generate/generate.module.ts",
		"generate-generate-module"
	],
	"./retrieve/retrieve.module": [
		"./src/app/+qr-management/retrieve/retrieve.module.ts",
		"retrieve-retrieve-module"
	],
	"./return-invoice/return-invoice.module": [
		"./src/app/+product-management/return-invoice/return-invoice.module.ts",
		"return-invoice-return-invoice-module"
	],
	"./return/return.module": [
		"./src/app/+product-management/return/return.module.ts",
		"return-return-module"
	],
	"./search/qr-search.module": [
		"./src/app/+qr-management/search/qr-search.module.ts",
		"search-qr-search-module"
	],
	"./shipping/shipping.module": [
		"./src/app/+product-management/shipping/shipping.module.ts",
		"shipping-shipping-module"
	],
	"./update/update-product.module": [
		"./src/app/+product-management/update/update-product.module.ts",
		"add-add-product-module~update-update-product-module",
		"update-update-product-module"
	],
	"./update/update-sku-management.module": [
		"./src/app/+sku-management/update/update-sku-management.module.ts",
		"update-update-sku-management-module"
	],
	"./view/view-product.module": [
		"./src/app/+product-management/view/view-product.module.ts",
		"view-view-product-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/+qrcode-scanner/qrcode-scanner.service.ts ***!
  \***********************************************************/
/*! exports provided: QRCodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeScanner", function() { return QRCodeScanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QRCodeScanner = /** @class */ (function () {
    function QRCodeScanner() {
    }
    QRCodeScanner.prototype.promiseScan = function () {
        return new Promise(function (resolve, reject) {
            cordova.plugins.barcodeScanner.scan(function (result) {
                return resolve(result);
            }, function (error) {
                return reject('ERROR');
            }, {
                prompt: "Place a qr inside the scan area",
            });
        });
    };
    QRCodeScanner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], QRCodeScanner);
    return QRCodeScanner;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n<div bsModal #showOfflineAlert=\"bs-modal\" data-backdrop=\"static\" class=\"modal fade\" tabindex=\"-1\" [config]=\"{'backdrop':'static', 'keyboard': false}\"\n    role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" style=\"top:35%\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\"><img src=\"assets/img/logom.png\" alt=\"MedicalBulkBuy\" width=\"90%\"></h4>\n            </div>\n            <div class=\"modal-body\" style=\"text-align: center\">\n                Check your internet connection and try again\n            </div>\n            <div class=\"modal-footer padding-10\" style=\"text-align:center\">\n                <button class=\"btn btn-danger\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n                <button class=\"btn btn-success\" type=\"button\" (click)=\"connectivityListners()\">Retry</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.connectivityListners();
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userRole') == 'INVENTORY_MANAG') {
            this.router.navigate(['/inventory']);
        }
        else if (localStorage.getItem('userRole') == 'DISPATCHER') {
            this.router.navigate(['/dispatch']);
        }
        else {
            this.router.navigate(['/loginUrl']);
        }
    };
    AppComponent.prototype.showChildModal = function () {
        this.showOfflineAlert.show();
    };
    AppComponent.prototype.connectivityListners = function () {
        document.addEventListener('offline', this.offlineFunction.bind(this), false);
        document.addEventListener('online', this.onlineFunction.bind(this), false);
    };
    AppComponent.prototype.offlineFunction = function () {
        this.checkonline = false;
        this.showOffileAlert();
    };
    AppComponent.prototype.onlineFunction = function () {
        this.checkonline = true;
        this.showOfflineAlert.hide();
    };
    AppComponent.prototype.showOffileAlert = function () {
        if (!this.checkonline) {
            this.showOfflineAlert.show();
        }
    };
    AppComponent.prototype.onCancel = function () {
        this.showOfflineAlert.hide();
        this.router.navigate(['/loginUrl']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('showOfflineAlert'),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"])
    ], AppComponent.prototype, "showOfflineAlert", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+qrcode-scanner/qrcode-scanner.service */ "./src/app/+qrcode-scanner/qrcode-scanner.service.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"], _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _qrcode_scanner_qrcode_scanner_service__WEBPACK_IMPORTED_MODULE_10__["QRCodeScanner"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'loginUrl',
        loadChildren: './+auth/login/login.module#LoginModule'
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            { path: 'inventory', loadChildren: './+inventory/inventory-manager.module#InventoryManagerModule' },
            { path: 'sku', loadChildren: './+sku-management/sku-management.module#SKUModule' },
            { path: 'product', loadChildren: './+product-management/product-management.module#ProductManagementModule' },
            { path: 'qr', loadChildren: './+qr-management/qr-management.module#QrManagementModule' },
            { path: 'dispatch', loadChildren: './+dispatch/dispatch-manager.module#DispatchManagerModule' },
            { path: 'version', loadChildren: './+version-details/version-details.module#VersionModule' }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', JSON.parse(localStorage.getItem("Autherization")));
        this.array = [];
        this.messageSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.array);
        this.currentMessage = this.messageSource.asObservable();
    }
    AppService.prototype.setMessage = function (value) {
        this.messageSource.next(value);
    };
    AppService.prototype.getMessage = function () {
        return this.messageSource.value;
    };
    AppService.prototype.add = function (value) {
        this.array.push(value);
    };
    AppService.prototype.getAllDispatchDetails = function (startDate, endDate) {
        var url = "" + _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT;
        return this.http.get(url + ("getDispatchDetails" + startDate + "/" + endDate), { headers: this._headers }).map(function (response) {
            return response;
        });
    };
    AppService.prototype.getInventoryDetails = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'getAllInventories'), { headers: this._headers }).map(function (response) {
            return response;
        });
    };
    AppService.prototype.getAllQrcodes = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getAllBarcodes/'), { headers: this._headers })
            .map(function (response) {
            return response;
        });
    };
    AppService.prototype.getProductByQrId = function (id) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'getDetailsByBarcodeId/') + id, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllSkuCodes = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].MBB_INVENTORY + 'inventory/getAllSkusBasedOnSorting'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.GenerateQRcodes = function (sku, count) {
        var url = "" + _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT;
        return this.http.get(url + ("zixing/" + sku + "/" + count), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.retrieveQrCodes = function (skuCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT + 'reprint/') + skuCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.printQrcode = function (qrCodesdata) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT + 'qrcodeList'), qrCodesdata, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getProductConditionList = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getAllConditions'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllProductStatusTypes = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getAllInventoryStatuses'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getProductDetailsfromDispatch = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'getDetailsByBarcode/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getInventoryItemDetails = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getInventoryItemDetails/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getProductDetailsfromInventory = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'getDetailsByBarcodeId/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getReturnProdDetails = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].RETURN_ENDPOINT + 'getItemDetails/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getCheckList = function (id) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].CHECKLIST_ENDPONT + 'getChecklist/') + id, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.updateChecklist = function (object) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].CHECKLIST_ENDPONT + 'updateChecklist'), object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addReturnItemToInventory = function (prodObj) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].RETURN_ENDPOINT + 'addReturnItem/'), prodObj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getStatusByInventoryCondition = function (id) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getStatusBasedONCondition/') + id, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getFacilities = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getAllFacilities'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addProduct = function (object) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'addNewInventoryItem'), object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addingSku = function (obj) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'addInventory'), obj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getDetailsBySkuId = function (skuValue) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'getInventoryBySkuCode/') + skuValue, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.updateSku = function (obj) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'updateSku/') + obj.id, obj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.checkingBarcode = function (id) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'getDetailsByBarcode/') + id, { headers: this._headers })
            .map(function (response) { return response; });
    };
    // getCheckListByBarcode(barcode) {
    //     return this.http.get(`${endponitConfig.DISPATCH_ENDPONT + 'getChecklistData/'}${barcode}`, { headers: this._headers })
    //         .map((response) => response);
    // }
    AppService.prototype.getCheckListBySKu = function (sku) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'getAccessoriesBySkuCode/') + sku, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addDispatch = function (obj) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'addDispatch'), obj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addCheckList = function (obj) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].CHECKLIST_ENDPONT + 'addNewChecklist'), obj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.updateProduct = function (object) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'updateInventoryItem/') + object.id, object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllQrcodes_prod = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ENDPOINT + 'getAllBarcodes/'), { headers: this._headers })
            .map(function (response) {
            return response;
        });
    };
    AppService.prototype.getProductDetailsfromInventory_prod = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getItemDetailsByBarcode/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addProduct_prod = function (object) {
        return this.http.post("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'addNewInventoryItem'), object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getProductByQrId_prod = function (id) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'getDetailsByBarcode/') + id, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.updateProduct_prod = function (object) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTORY_ITEM_ENDPOINT + 'updateInventoryItem/') + object.id, object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllInvoices = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].ORDER_DETAILS + 'getAllInvoiceNumbers/'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.dataFromUnicommerce = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'getUnicommercePendingData/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.addToDispatch = function (dispatchObj) {
        return this.http.put("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'updateStatusToDispatch/') + dispatchObj.id, dispatchObj, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getDetailsByInvoice = function (object) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].RETURN_ENDPOINT + 'getDetailsByInvoice/') + object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getDetailsByDispatchInvoice = function (object) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].DISPATCH_ENDPONT + 'getDetailsByInvoice/') + object, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllPovendors = function () {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PO_VENDOR + 'getAllPovendors'), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllPovendorbyStatus = function (status) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PO_VENDOR + 'getBasedOnStatus/') + status, { headers: this._headers })
            .map(function (response) { return response; });
    };
    //    localhost:2020/mbb/poVendor/getAllPoVendors
    AppService.prototype.getSKUSBasedonPO = function (po) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PO_VENDOR_ITEM + 'getSkuCodesByPONumber/') + po, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getQRBasedOnPo = function (po) {
        return this.http.get("" + _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT + po, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getQrcbasedOnSKUPO = function (sku, po) {
        var url = "" + _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT;
        return this.http.get(url + ("reprint/" + sku + "/" + po), { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getQrCode = function (qrCode) {
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].BARCODES_ENDPOINT + 'qrcode/') + qrCode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllPackageDetails = function () {
        return this.http.get(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PORT_ADDRESS + 'transferInventory/getAllTransferInventory', { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getAllCompletePackes = function () {
        return this.http.get(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PORT_ADDRESS + 'transferInventory/getPakCompleted', { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.CheckingQRWithPackage = function (qrCode, packageId) {
        return this.http.get(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PACKAGE_DETAILS + qrCode + '/' + packageId, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.removeItemFromPackge = function (qrcode, packageId) {
        return this.http.get(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTOTY_TRANSFER + 'getScanForRemove/' + packageId + '/' + qrcode, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.getPackageSKUDetails = function (packageId) {
        return this.http.get(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].INVENTOTY_TRANSFER + 'getAllPackageDetailsByTransferInventoryId/' + packageId, { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService.prototype.qrCodeMoving = function (qrCode, packageId) {
        return this.http.put(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].PACKAGE_DETAILS + 'updateQrcode/' + qrCode + '/' + packageId, '', { headers: this._headers })
            .map(function (response) { return response; });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/endpoints */ "./src/environments/endpoints.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (username, password) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.headers = this.headers.append('Content-Type', 'application/json');
        this.headers = this.headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].USER_API_ENDPOINT + 'getUserByEmail/') + username, { headers: this.headers })
            .map(function (response) {
            localStorage.setItem("Autherization", JSON.stringify("Basic " + btoa(username + ":" + password)));
            return response;
        });
    };
    /** User Authentication */
    AuthService.prototype.userAuthentication = function (username, password) {
        var headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "username=" + username + "&password=" + password;
        return this.http.post(_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].USER_LOGIN, body, { headers: headers1 }).map(function (response) {
            return response;
        });
    };
    AuthService.prototype.getUserDetailsByEmail = function (email) {
        var headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers1.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get("" + (_environments_endpoints__WEBPACK_IMPORTED_MODULE_2__["endponitConfig"].USER_API_ENDPOINT + 'getUserByEmail/') + email, { headers: headers1 }).map(function (response) {
            return response;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"navbar-wrapper\">\n            <a class=\"navbar-brand\">{{getTitle()}}</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form>\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobileMenuVisible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobileMenuVisible = 0;
            }
        });
    };
    NavbarComponent.prototype.disable = function () {
        this.ashok = localStorage.getItem("ashok");
        alert(this.ashok);
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobileMenuVisible === 1) {
            body.classList.remove('nav-open');
            this.mobileMenuVisible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer_1 = document.createElement('div');
            $layer_1.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer_1);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer_1);
            }
            setTimeout(function () {
                $layer_1.classList.add('visible');
            }, 100);
            $layer_1.onclick = function () {
                body.classList.remove('nav-open');
                this.mobileMenuVisible = 0;
                $layer_1.classList.remove('visible');
                setTimeout(function () {
                    $layer_1.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobileMenuVisible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var _i = 0, _a = this.listTitles; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.path === titlee) {
                return item.title;
            }
        }
        return titlee.toUpperCase();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <!--<a class=\"simple-text\">\n        MEDICALBULKBUY\n    </a>-->\n    <img _ngcontent-c2=\"\" src=\"assets/img/logom.png\" width=\"100%\" style=\"padding: 0px 19px;\n\">\n</div>\n<div class=\"sidebar-wrapper\">\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='INVENTORY_MANAG' || userType=='PRODUCT_VERIFIER' || userType=='RETURN_MANAG' \">\n            <a class=\"nav-link\" routerLink=\"/inventory/view\">\n                <i class=\"material-icons\">home</i>\n                <p>Home</p>\n            </a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='DISPATCHER'\">\n            <a class=\"nav-link\" routerLink=\"/dispatch/home\">\n                <i class=\"material-icons\">home</i>\n                <p>Home</p>\n            </a>\n        </li>\n\n        <!--<li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='INVENTORY_MANAG'\">\n            <a class=\"nav-link\" routerLink=\"/product/shipping\">\n                <i class=\"material-icons\">swap_calls</i>\n                <p>Inventory Transfers</p>\n            </a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='INVENTORY_MANAG'\">\n            <a class=\"nav-link\" routerLink=\"/product/delete\">\n                <i class=\"material-icons\">import_export</i>\n                <p>Restore Inventory</p>\n            </a>\n        </li>-->\n        <!--<li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='Inventory'\">\n            <a class=\"nav-link\" routerLink=\"/inventory/details\">\n                <i class=\"material-icons\">table</i>\n                <p>Details</p>\n            </a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='Dispatch'\">\n            <a class=\"nav-link\" routerLink=\"/dispatch/details\">\n                <i class=\"material-icons\">table</i>\n                <p>Details</p>\n            </a>\n        </li>-->\n        <li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='INVENTORY_MANAG'\">\n            <a class=\"nav-link\" routerLink=\"/product/view\">\n                <i class=\"material-icons\">visibility</i>\n                <p>View Product</p>\n            </a>\n        </li>\n        <!--<li routerLinkActive=\"active\" class=\"nav-item\" *ngIf=\"userType=='Inventory'\">\n            <a class=\"nav-link\" routerLink=\"/product/return-product\">\n                <i class=\"material-icons\">table</i>\n                <p>Return Product</p>\n            </a>\n        </li>-->\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/version\">\n                <i class=\"material-icons\">info</i>\n                <p>Version</p>\n            </a>\n        </li>\n        <li routerLinkActive=\"active\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/loginUrl\">\n                <i class=\"material-icons\">logout</i>\n                <p>Logout</p>\n            </a>\n        </li>\n\n\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/inventory/view', title: 'HOME', icon: 'home', class: '' },
    { path: '/inventory/details', title: 'Inventory Details', icon: 'table', class: '' },
    { path: '/product/view', title: 'product View', icon: 'table', class: '' },
    { path: '/product/return', title: 'product return', icon: 'table', class: '' },
    { path: '/loginUrl', title: 'Sign out', icon: 'table', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.userType = localStorage.getItem('userRole');
        // if (localStorage.getItem('userRole') === 'INVENTORY_MANAG') {
        //     this.userType = 'Inventory';
        // } else {
        //     this.userType = 'Dispatch';
        // }
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"azure\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  z-index: auto; }\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.routingMethod();
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
    };
    AdminLayoutComponent.prototype.routingMethod = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url !== _this.lastPoppedUrl) {
                    _this.yScrollStack.push(window.scrollY);
                }
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url === _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else {
                    window.scrollTo(0, 0);
                }
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path === titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-overlay-c {\n    background-color: rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    text-align: center;\n}\n.loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.loading-bar {\n \n  display: inline-block;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  -webkit-animation: loading 1s ease-in-out infinite;\n          animation: loading 1s ease-in-out infinite;\n}\n.loading-bar:nth-child(1) {\n  background-color: #3498db;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n.loading-bar:nth-child(2) {\n  background-color: #c0392b;\n  -webkit-animation-delay: 0.09s;\n          animation-delay: 0.09s;\n}\n.loading-bar:nth-child(3) {\n  background-color: #f1c40f;\n  -webkit-animation-delay: .18s;\n          animation-delay: .18s;\n}\n.loading-bar:nth-child(4) {\n  background-color: #27ae60;\n  -webkit-animation-delay: .27s;\n          animation-delay: .27s;\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\n\n    <div class=\"ui-overlay-c\">\n        <div class=\"loading\">\n            <div class=\"loading-bar\"></div>\n            <div class=\"loading-bar\"></div>\n            <div class=\"loading-bar\"></div>\n            <div class=\"loading-bar\"></div>\n            <h4 style=\"color: #e0dcd4\">Loading,please wait...</h4>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.loading = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "loading", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "`<img class=\"mat-typography img1\" src=\"assets/img/logom.png\" alt=\"MedicalBulkBuy\" width=\"90%\"   >\n    <mat-dialog-content class=\"mat-typography\" style=\"border-bottom:1px solid #ddd;border-top:1px solid #ddd; text-align:center\">\n     \n    <h5 style=\"padding: 18px;margin: 0px;font-size: 14px;font-family: sans-serif;\">Please check your Internet Connection</h5>\n    </mat-dialog-content>\n   \n    <mat-dialog-actions align=\"center\" >\n    <button mat-stroked-button [mat-dialog-close]=\"true\" cdkFocusInitial > \n    Ok\n</button>\n<button (click)=\"click()\">retry</button>\n    </mat-dialog-actions>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpComponent = /** @class */ (function () {
    function PopUpComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    PopUpComponent.prototype.click = function () {
        // alert("Hi")
        this.dialogRef.close();
    };
    PopUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], PopUpComponent);
    return PopUpComponent;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"]],
            exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"]],
            imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            entryComponents: [_popup_popup_component__WEBPACK_IMPORTED_MODULE_2__["PopUpComponent"]],
            providers: [
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], useValue: {} },
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/endpoints.ts":
/*!***************************************!*\
  !*** ./src/environments/endpoints.ts ***!
  \***************************************/
/*! exports provided: endponitConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endponitConfig", function() { return endponitConfig; });
var endponitConfig = {
    USER_LOGIN: 'http://192.168.1.202:3030/login',
    USER_API_ENDPOINT: 'http://192.168.1.202:3030/api/users/',
    INVENTORY_ENDPOINT: 'http://192.168.1.202:3030/mbb/inventory/',
    INVENTORY_ITEM_ENDPOINT: 'http://192.168.1.202:3030/mbb/inventoryItem/',
    MBB_INVENTORY: 'http://192.168.1.202:3030/mbb/',
    DISPATCH_ENDPONT: 'http://192.168.1.202:3030/mbb/dispatch/',
    BARCODES_ENDPOINT: 'http://192.168.1.202:3030/mbb/barcodes/',
    CHECKLIST_ENDPONT: 'http://192.168.1.202:3030/mbb/checklist/',
    RETURN_ENDPOINT: 'http://192.168.1.202:3030/mbb/returns/',
    ORDER_DETAILS: 'http://192.168.1.202:3030/mbb/orderDetails/',
    PO_VENDOR: 'http://192.168.1.202:3030/mbb/poVendor/',
    PO_VENDOR_ITEM: 'http://192.168.1.202:3030/mbb/vendorItemDetails/',
    PORT_ADDRESS: 'http://192.168.1.202:3030/mbb/',
    INVENTOTY_TRANSFER: 'http://192.168.1.202:3030/mbb/transferInventory/',
    PACKAGE_DETAILS: 'http://192.168.1.202:3030/mbb/packageDetails/',
};
//http://192.168.1.202:3030


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WORKSPACE\MOBILE\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map