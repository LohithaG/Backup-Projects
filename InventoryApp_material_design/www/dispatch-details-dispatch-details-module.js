(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dispatch-details-dispatch-details-module"],{

/***/ "./src/app/+dispatch/+dispatch-details/dispatch-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-details/dispatch-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <mat-form-field>\n                    <input matInput name=\"startDate\" [matDatepicker]=\"dp3\" placeholder=\"Start Date\" [min]=\"minDate\" [max]=\"maxDate\" [(ngModel)]=\"startDate\"\n                        disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n                    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n                <span *ngIf=\"submitted && startDate==null\" style='color:red'>Please select start Date\n            </span>\n            </div>\n\n            <div class=\"col-12\">\n                <mat-form-field>\n                    <input matInput name=\"endDate\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"dp4\" placeholder=\"End Date\" [(ngModel)]=\"endDate\"\n                        disabled>\n                    <mat-datepicker-toggle matSuffix [for]=\"dp4\"></mat-datepicker-toggle>\n                    <mat-datepicker #dp4 disabled=\"false\"></mat-datepicker>\n                </mat-form-field>\n                <span *ngIf=\"submitted && endDate==null\" style='color:red'>Please select end Date\n            </span>\n            </div>\n            <div class=\"col-12\">\n                <span *ngIf=\"errorMessage\" class=\"text-danger\" style=\"text-align:center\">{{errorMessage}}</span><br>\n            </div>\n            <button mat-raised-button type=\"submit\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit</button>\n        </div>\n        <div class=\"container-fluid\">\n            <mat-form-field class=\"example-full-width\" *ngIf=\"dispatachDetails?.length\">\n                <input matInput placeholder=\"QR Code\" [(ngModel)]=\"searchText\">\n            </mat-form-field>\n            <div *ngFor=\"let prod of dispatachDetails|filter : searchText\">\n                <mat-accordion>\n                    <mat-expansion-panel style=\"border-left: 2px solid #26c6da;\">\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n                                {{prod.barcode}}\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n                        <div class=\"row\">\n                            <div class=\"col-6\">Invoice</div>\n                            <div class=\"col-6\"> {{prod.invoiceId}}</div>\n                            <div class=\"col-6\">Dispatch Date</div>\n                            <div class=\"col-6\">{{prod.updatedTime|date}}</div>\n                            <div class=\"col-6\">Comment</div>\n                            <div class=\"col-6\">{{prod.comment}}</div>\n                        </div>\n                    </mat-expansion-panel>\n                </mat-accordion>\n                <div style=\"margin:3px\"></div>\n            </div>\n        </div>\n    </div>\n    <!-- <div>\n        <loader [loading]=\"loading\"></loader>\n      </div> -->\n</div>"

/***/ }),

/***/ "./src/app/+dispatch/+dispatch-details/dispatch-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-details/dispatch-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: DispatchDetailsComponent, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchDetailsComponent", function() { return DispatchDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
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


var DispatchDetailsComponent = /** @class */ (function () {
    function DispatchDetailsComponent(appService) {
        this.appService = appService;
        this.startDate = null;
        this.endDate = null;
        this.loading = false;
    }
    DispatchDetailsComponent.prototype.ngOnInit = function () {
        /**
        * Back Button event trigger
        */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    };
    DispatchDetailsComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        if (this.startDate != null && this.endDate != null) {
            if (new Date(this.startDate) > new Date(this.endDate)) {
                this.errorMessage = 'End date should be greater than start date';
                setTimeout(function () {
                    _this.errorMessage = '';
                }, 3000);
            }
            else {
                this.startDate = this.convert(this.startDate);
                this.endDate = this.convert(this.endDate);
                this.appService.getAllDispatchDetails(this.startDate, this.endDate).subscribe(function (data) {
                    if (data.data != null) {
                        _this.loading = false;
                        _this.dispatachDetails = data.data;
                        if (_this.dispatachDetails.length === 0) {
                            _this.errorMessage = 'No records found these selected dates';
                            setTimeout(function () {
                                _this.errorMessage = '';
                            }, 3000);
                        }
                    }
                });
            }
        }
    };
    DispatchDetailsComponent.prototype.convert = function (str) {
        var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    };
    DispatchDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dispatch-details-module',
            template: __webpack_require__(/*! ./dispatch-details.component.html */ "./src/app/+dispatch/+dispatch-details/dispatch-details.component.html"),
            styles: ["\n    .footer-text{\n        font-weight:bold\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DispatchDetailsComponent);
    return DispatchDetailsComponent;
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
            return it.barcode.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/+dispatch/+dispatch-details/dispatch-details.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/+dispatch/+dispatch-details/dispatch-details.module.ts ***!
  \************************************************************************/
/*! exports provided: DispatchDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchDetailsModule", function() { return DispatchDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dispatch_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dispatch-details.component */ "./src/app/+dispatch/+dispatch-details/dispatch-details.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
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
        component: _dispatch_details_component__WEBPACK_IMPORTED_MODULE_4__["DispatchDetailsComponent"]
    }
];
var DispatchDetailsModule = /** @class */ (function () {
    function DispatchDetailsModule() {
    }
    DispatchDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [_dispatch_details_component__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _dispatch_details_component__WEBPACK_IMPORTED_MODULE_4__["DispatchDetailsComponent"]],
            providers: [],
            entryComponents: []
        })
    ], DispatchDetailsModule);
    return DispatchDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=dispatch-details-dispatch-details-module.js.map