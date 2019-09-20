(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-details-inventory-details-module"],{

/***/ "./src/app/+inventory/+inventory-details/inventory-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/+inventory/+inventory-details/inventory-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Search details by SKU\" [(ngModel)]=\"searchText\">\n        </mat-form-field>\n\n        <div *ngIf=\"Inventorydetails?.length==0\">\n            No Records found\n        </div>\n        <div *ngFor=\"let inventory of Inventorydetails  | sort | filter:searchText\">\n            <mat-accordion>\n                <mat-expansion-panel style=\"border-left: 2px solid #26c6da;\">\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            {{inventory.skuCode}}\n                        </mat-panel-title>\n                        <!--<mat-panel-description>\n\n                        </mat-panel-description>-->\n                    </mat-expansion-panel-header>\n                    <div class=\"row\">\n                        <div class=\"col-12\">{{inventory.productName}}</div>\n                        <div class=\"col-6\">Pending</div>\n                        <div class=\"col-6\">{{inventory.pendingQcAccessment==null ? '0' : inventory.pendingQcAccessment}}</div>\n                        <div class=\"col-6\">Dispatch</div>\n                        <div class=\"col-6\">{{inventory.dispatch==null ? '0':inventory.dispatch}}</div>\n                        <div class=\"col-6\">Available</div>\n                        <div class=\"col-6\">{{inventory.inventory ==null ? '0':inventory.inventory}}</div>\n                    </div>\n                </mat-expansion-panel>\n            </mat-accordion>\n            <div style=\"margin:6px\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/+inventory/+inventory-details/inventory-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/+inventory/+inventory-details/inventory-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: InventoryDetailsComponent, FilterPipe, SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsComponent", function() { return InventoryDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InventoryDetailsComponent = /** @class */ (function () {
    function InventoryDetailsComponent(appService) {
        this.appService = appService;
    }
    InventoryDetailsComponent.prototype.get = function (a, b) {
    };
    InventoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
        this.appService.getInventoryDetails().subscribe(function (data) {
            if (data.data != null) {
                _this.Inventorydetails = data.data;
            }
        });
    };
    InventoryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '',
            template: __webpack_require__(/*! ./inventory-details.component.html */ "./src/app/+inventory/+inventory-details/inventory-details.component.html")
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], InventoryDetailsComponent);
    return InventoryDetailsComponent;
}());

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.skuCode.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        if (!array || array === undefined || array.length === 0)
            return null;
        array.sort(function (a, b) {
            if (a.skuCode < b.skuCode) {
                return -1;
            }
            else if (a.skuCode > b.skuCode) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/+inventory/+inventory-details/inventory-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/+inventory/+inventory-details/inventory-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: InventoryDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryDetailsModule", function() { return InventoryDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inventory_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-details.component */ "./src/app/+inventory/+inventory-details/inventory-details.component.ts");
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
        component: _inventory_details_component__WEBPACK_IMPORTED_MODULE_4__["InventoryDetailsComponent"]
    }
];
var InventoryDetailsModule = /** @class */ (function () {
    function InventoryDetailsModule() {
    }
    InventoryDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_inventory_details_component__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _inventory_details_component__WEBPACK_IMPORTED_MODULE_4__["InventoryDetailsComponent"], _inventory_details_component__WEBPACK_IMPORTED_MODULE_4__["SortPipe"]],
            providers: [],
            entryComponents: []
        })
    ], InventoryDetailsModule);
    return InventoryDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-details-inventory-details-module.js.map