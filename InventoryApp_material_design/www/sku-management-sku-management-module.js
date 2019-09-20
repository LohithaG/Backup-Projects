(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sku-management-sku-management-module"],{

/***/ "./src/app/+sku-management/sku-management.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/+sku-management/sku-management.module.ts ***!
  \**********************************************************/
/*! exports provided: SKUModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKUModule", function() { return SKUModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: 'add' },
    {
        path: 'add',
        loadChildren: './add/add-sku-management.module#AddSkuManagementModule'
    },
    {
        path: 'update',
        loadChildren: './update/update-sku-management.module#UpdateSkuManagementModule'
    }
];
var SKUModule = /** @class */ (function () {
    function SKUModule() {
    }
    SKUModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            declarations: [],
            exports: [],
            providers: [],
        })
    ], SKUModule);
    return SKUModule;
}());



/***/ })

}]);
//# sourceMappingURL=sku-management-sku-management-module.js.map