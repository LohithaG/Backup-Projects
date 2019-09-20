(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispatch-dispatch-manager-module"],{

/***/ "./src/app/+dispatch/dispatch-manager.module.ts":
/*!******************************************************!*\
  !*** ./src/app/+dispatch/dispatch-manager.module.ts ***!
  \******************************************************/
/*! exports provided: DispatchManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchManagerModule", function() { return DispatchManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'home' },
    {
        path: 'view',
        loadChildren: './+dispatch-view/dispatch-view.module#DispatchViewModule'
    },
    {
        path: 'details',
        loadChildren: './+dispatch-details/dispatch-details.module#DispatchDetailsModule'
    },
    {
        path: 'home',
        loadChildren: './+dispatch-home/dispatch-home.module#DispatchHomeModule'
    },
    {
        path: 'manifest',
        loadChildren: './+dispatch-manifest/dispatch-manifest.module#DispatchManifestModule'
    },
    {
        path: 'invoice',
        loadChildren: './+invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'invoice-view',
        loadChildren: './+invoiceview/invoice-view.module#InvoiceViewModule'
    }
];
var DispatchManagerModule = /** @class */ (function () {
    function DispatchManagerModule() {
    }
    DispatchManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            declarations: [],
            exports: [],
            providers: [],
        })
    ], DispatchManagerModule);
    return DispatchManagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=dispatch-dispatch-manager-module.js.map