webpackJsonp([6,19,49],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error500_routing_module__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error500_component__ = __webpack_require__(1037);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_layout_layout_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_stats_stats_module__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_module__ = __webpack_require__(1026);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Module", function() { return Error500Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Error500Module = (function () {
    function Error500Module() {
    }
    return Error500Module;
}());
Error500Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__error500_routing_module__["a" /* Error500RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_layout_layout_module__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_stats_stats_module__["a" /* StatsModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_smartadmin_module__["a" /* SmartadminModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__error500_component__["a" /* Error500Component */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__error500_component__["a" /* Error500Component */]]
    })
], Error500Module);

//# sourceMappingURL=error500.module.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__ = __webpack_require__(1243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__(1242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_liveTracking_liveTracking_component__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_driverLocations_driverLocations_component__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_dashboards_services__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_driverLocations_services__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_analytics_analytics_component__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dcLoadAnalysis1_dcLoadAnalysis1_component__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dcLoadAnalysis2_dcLoadAnalysis2_component__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_select__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_smartadmin_module__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_mydatepicker__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_error_error500_error500_module__ = __webpack_require__(1008);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_14__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_15__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_13_angular2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_16_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_17__auth_error_error500_error500_module__["Error500Module"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_6__components_driverLocations_driverLocations_component__["a" /* DriverLocationsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_liveTracking_liveTracking_component__["a" /* LiveTrackingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dcLoadAnalysis1_dcLoadAnalysis1_component__["a" /* dcLoadAnalysis1Component */],
            __WEBPACK_IMPORTED_MODULE_12__components_dcLoadAnalysis2_dcLoadAnalysis2_component__["a" /* dcLoadAnalysis2Component */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_dashboards_services__["a" /* DashboardsServices */],
            __WEBPACK_IMPORTED_MODULE_9__services_driverLocations_services__["a" /* DashboardDriverService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__ = __webpack_require__(1030);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineGraphsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
    })
], InlineGraphsModule);

//# sourceMappingURL=inline-graphs.module.js.map

/***/ }),

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_component__ = __webpack_require__(1031);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__ = __webpack_require__(1024);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
    })
], StatsModule);

//# sourceMappingURL=stats.module.js.map

/***/ }),

/***/ 1026:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout__ = __webpack_require__(1050);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_module__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stats_stats_module__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphs_inline_inline_graphs_module__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_smartadmin_forms_lite_module__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_smart_progressbar_smart_progressbar_module__ = __webpack_require__(1055);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    return SmartadminModule;
}());
SmartadminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["g" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
            __WEBPACK_IMPORTED_MODULE_7__layout__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_15__forms_smartadmin_forms_lite_module__["a" /* SmartadminFormsLiteModule */],
            __WEBPACK_IMPORTED_MODULE_16__ui_smart_progressbar_smart_progressbar_module__["a" /* SmartProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */],
            __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_12__chat_chat_module__["a" /* ChatModule */],
            __WEBPACK_IMPORTED_MODULE_13__stats_stats_module__["a" /* StatsModule */],
            __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__["a" /* VoiceControlModule */],
        ]
    })
], SmartadminModule);

//# sourceMappingURL=smartadmin.module.js.map

/***/ }),

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]]
    })
], OnOffSwitchModule);

//# sourceMappingURL=on-off-switch.module.js.map

/***/ }),

/***/ 1028:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select2_directive__ = __webpack_require__(1039);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
    })
], Select2Module);

//# sourceMappingURL=select2.module.js.map

/***/ }),

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__ = __webpack_require__(1035);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPieChartContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EasyPieChartContainer = (function () {
    function EasyPieChartContainer(container) {
        this.container = container;
        this.counter = 0;
    }
    EasyPieChartContainer.prototype.render = function () {
        $('.easy-pie-chart', this.container.nativeElement).each(function (idx, element) {
            var $this = $(element), barColor = $this.css('color') || $this.data('pie-color'), trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)', size = parseInt($this.data('pie-size')) || 25;
            $this.easyPieChart({
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: size / 8.5,
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    };
    EasyPieChartContainer.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var counter = $('.easy-pie-chart').length;
        if (counter != this.counter) {
            this.counter = counter;
            setTimeout(function () {
                _this.render();
            }, 25);
        }
    };
    EasyPieChartContainer.prototype.ngAfterContentInit = function () {
        this.render();
    };
    return EasyPieChartContainer;
}());
EasyPieChartContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saEasyPieChartContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasyPieChartContainer);

var _a;
//# sourceMappingURL=easy-pie-chart-container.directive.js.map

/***/ }),

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__ = __webpack_require__(1036);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparklineContainer = (function () {
    function SparklineContainer(el) {
        this.el = el;
        this.container = this.el.nativeElement;
    }
    SparklineContainer.prototype.ngOnInit = function () {
        this.drawSparklines();
    };
    SparklineContainer.prototype.barChart = function ($el) {
        var barColor = $el.data('sparkline-bar-color') || $el.css('color') || '#0000f0';
        var sparklineHeight = $el.data('sparkline-height') || '26px';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 5;
        var sparklineBarSpacing = $el.data('sparkline-barspacing') || 2;
        var sparklineNegBarColor = $el.data('sparkline-negbar-color') || '#A90329';
        var sparklineStackedColor = $el.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
        $el.sparkline('html', {
            barColor: barColor,
            type: 'bar',
            height: sparklineHeight,
            barWidth: sparklineBarWidth,
            barSpacing: sparklineBarSpacing,
            stackedBarColor: sparklineStackedColor,
            negBarColor: sparklineNegBarColor,
            zeroAxis: 'false',
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.lineChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '90px';
        var thisLineColor = $el.data('sparkline-line-color') || $el.css('color') || '#0000f0';
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisFill = $el.data('fill-color') || '#c0d0f0';
        var thisSpotColor = $el.data('sparkline-spot-color') || '#f08000';
        var thisMinSpotColor = $el.data('sparkline-minspot-color') || '#ed1c24';
        var thisMaxSpotColor = $el.data('sparkline-maxspot-color') || '#f08000';
        var thishighlightSpotColor = $el.data('sparkline-highlightspot-color') || '#50f050';
        var thisHighlightLineColor = $el.data('sparkline-highlightline-color') || 'f02020';
        var thisSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisChartMinYRange = $el.data('sparkline-min-y');
        var thisChartMaxYRange = $el.data('sparkline-max-y');
        var thisChartMinXRange = $el.data('sparkline-min-x');
        var thisChartMaxXRange = $el.data('sparkline-max-x');
        var thisMinNormValue = $el.data('min-val');
        var thisMaxNormValue = $el.data('max-val');
        var thisNormColor = $el.data('norm-color') || '#c0c0c0';
        var thisDrawNormalOnTop = $el.data('draw-normal') || false;
        $el.sparkline('html', {
            type: 'line',
            width: sparklineWidth,
            height: sparklineHeight,
            lineWidth: thisLineWidth,
            lineColor: thisLineColor,
            fillColor: thisFill,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor,
            maxSpotColor: thisMaxSpotColor,
            highlightSpotColor: thishighlightSpotColor,
            highlightLineColor: thisHighlightLineColor,
            spotRadius: thisSpotRadius,
            chartRangeMin: thisChartMinYRange,
            chartRangeMax: thisChartMaxYRange,
            chartRangeMinX: thisChartMinXRange,
            chartRangeMaxX: thisChartMaxXRange,
            normalRangeMin: thisMinNormValue,
            normalRangeMax: thisMaxNormValue,
            normalRangeColor: thisNormColor,
            drawNormalOnTop: thisDrawNormalOnTop,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.pieChart = function ($el) {
        var pieColors = $el.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
        var pieWidthHeight = $el.data('sparkline-piesize') || 90;
        var pieBorderColor = $el.data('border-color') || '#45494C';
        var pieOffset = $el.data('sparkline-offset') || 0;
        $el.sparkline('html', {
            type: 'pie',
            width: pieWidthHeight,
            height: pieWidthHeight,
            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
            sliceColors: pieColors,
            borderWidth: 1,
            offset: pieOffset,
            borderColor: pieBorderColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.boxChart = function ($el) {
        var thisBoxWidth = $el.data('sparkline-width') || 'auto';
        var thisBoxHeight = $el.data('sparkline-height') || 'auto';
        var thisBoxRaw = $el.data('sparkline-boxraw');
        var thisBoxTarget = $el.data('sparkline-targetval');
        var thisBoxMin = $el.data('sparkline-min');
        var thisBoxMax = $el.data('sparkline-max');
        var thisShowOutlier = $el.data('sparkline-showoutlier') || true;
        var thisIQR = $el.data('sparkline-outlier-iqr') || 1.5;
        var thisBoxSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisBoxLineColor = $el.css('color') || '#000000';
        var thisBoxFillColor = $el.data('fill-color') || '#c0d0f0';
        var thisBoxWhisColor = $el.data('sparkline-whis-color') || '#000000';
        var thisBoxOutlineColor = $el.data('sparkline-outline-color') || '#303030';
        var thisBoxOutlineFill = $el.data('sparkline-outlinefill-color') || '#f0f0f0';
        var thisBoxMedianColor = $el.data('sparkline-outlinemedian-color') || '#f00000';
        var thisBoxTargetColor = $el.data('sparkline-outlinetarget-color') || '#40a020';
        $el.sparkline('html', {
            type: 'box',
            width: thisBoxWidth,
            height: thisBoxHeight,
            raw: thisBoxRaw,
            target: thisBoxTarget,
            minValue: thisBoxMin,
            maxValue: thisBoxMax,
            showOutliers: thisShowOutlier,
            outlierIQR: thisIQR,
            spotRadius: thisBoxSpotRadius,
            boxLineColor: thisBoxLineColor,
            boxFillColor: thisBoxFillColor,
            whiskerColor: thisBoxWhisColor,
            outlierLineColor: thisBoxOutlineColor,
            outlierFillColor: thisBoxOutlineFill,
            medianColor: thisBoxMedianColor,
            targetColor: thisBoxTargetColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.bulletChart = function ($el) {
        var thisBulletHeight = $el.data('sparkline-height') || 'auto';
        var thisBulletWidth = $el.data('sparkline-width') || 2;
        var thisBulletColor = $el.data('sparkline-bullet-color') || '#ed1c24';
        var thisBulletPerformanceColor = $el.data('sparkline-performance-color') || '#3030f0';
        var thisBulletRangeColors = $el.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
        $el.sparkline('html', {
            type: 'bullet',
            height: thisBulletHeight,
            targetWidth: thisBulletWidth,
            targetColor: thisBulletColor,
            performanceColor: thisBulletPerformanceColor,
            rangeColors: thisBulletRangeColors,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.discreteChart = function ($el) {
        var thisDiscreteHeight = $el.data('sparkline-height') || 26;
        var thisDiscreteWidth = $el.data('sparkline-width') || 50;
        var thisDiscreteLineColor = $el.css('color');
        var thisDiscreteLineHeight = $el.data('sparkline-line-height') || 5;
        var thisDiscreteThrushold = $el.data('sparkline-threshold');
        var thisDiscreteThrusholdColor = $el.data('sparkline-threshold-color') || '#ed1c24';
        $el.sparkline('html', {
            type: 'discrete',
            width: thisDiscreteWidth,
            height: thisDiscreteHeight,
            lineColor: thisDiscreteLineColor,
            lineHeight: thisDiscreteLineHeight,
            thresholdValue: thisDiscreteThrushold,
            thresholdColor: thisDiscreteThrusholdColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.tristaneChart = function ($el) {
        var thisTristateHeight = $el.data('sparkline-height') || 26;
        var thisTristatePosBarColor = $el.data('sparkline-posbar-color') || '#60f060';
        var thisTristateNegBarColor = $el.data('sparkline-negbar-color') || '#f04040';
        var thisTristateZeroBarColor = $el.data('sparkline-zerobar-color') || '#909090';
        var thisTristateBarWidth = $el.data('sparkline-barwidth') || 5;
        var thisTristateBarSpacing = $el.data('sparkline-barspacing') || 2;
        var thisZeroAxis = $el.data('sparkline-zeroaxis');
        $el.sparkline('html', {
            type: 'tristate',
            height: thisTristateHeight,
            posBarColor: thisTristatePosBarColor,
            negBarColor: thisTristateNegBarColor,
            zeroBarColor: thisTristateZeroBarColor,
            barWidth: thisTristateBarWidth,
            barSpacing: thisTristateBarSpacing,
            zeroAxis: thisZeroAxis,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeBarChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '100%';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 3;
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisLineColor = $el.data('sparkline-color-top') || '#ed1c24';
        var thisBarColor = $el.data('sparkline-color-bottom') || '#333333';
        $el.sparkline($el.data('sparkline-bar-val'), {
            type: 'bar',
            width: sparklineWidth,
            height: sparklineHeight,
            barColor: thisBarColor,
            barWidth: sparklineBarWidth,
            tooltipContainer: this.container
            //barSpacing: 5
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor,
            lineWidth: thisLineWidth,
            composite: true,
            fillColor: false,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeLineChart = function ($el) {
        // @todo webpack gets stuck on chunk optimization if uncomment defaults
        var sparklineHeight = $el.data('sparkline-height'); // || '20px';
        var sparklineWidth = $el.data('sparkline-width'); // || '90px';
        var sparklineValue = $el.data('sparkline-bar-val');
        var sparklineValueSpots1 = $el.data('sparkline-bar-val-spots-top');
        var sparklineValueSpots2 = $el.data('sparkline-bar-val-spots-bottom');
        var thisLineWidth1 = $el.data('sparkline-line-width-top'); //  || 1;
        var thisLineWidth2 = $el.data('sparkline-line-width-bottom'); // || 1;
        var thisLineColor1 = $el.data('sparkline-color-top'); //  || '#333333';
        var thisLineColor2 = $el.data('sparkline-color-bottom'); //  || '#ed1c24';
        var thisSpotRadius1 = $el.data('sparkline-spotradius-top'); // || 1.5;
        var thisSpotRadius2 = $el.data('sparkline-spotradius-bottom'); // || thisSpotRadius1;
        var thisSpotColor = $el.data('sparkline-spot-color'); // || '#f08000';
        var thisMinSpotColor1 = $el.data('sparkline-minspot-color-top'); // || '#ed1c24';
        var thisMaxSpotColor1 = $el.data('sparkline-maxspot-color-top'); //  || '#f08000';
        var thisMinSpotColor2 = $el.data('sparkline-minspot-color-bottom'); // || thisMinSpotColor1;
        var thisMaxSpotColor2 = $el.data('sparkline-maxspot-color-bottom'); //  || thisMaxSpotColor1;
        var thishighlightSpotColor1 = $el.data('sparkline-highlightspot-color-top'); //  || '#50f050';
        var thisHighlightLineColor1 = $el.data('sparkline-highlightline-color-top'); // || '#f02020';
        var thishighlightSpotColor2 = $el.data('sparkline-highlightspot-color-bottom'); // || thishighlightSpotColor1;
        var thisHighlightLineColor2 = $el.data('sparkline-highlightline-color-bottom'); // || thisHighlightLineColor1;
        var thisFillColor1 = $el.data('sparkline-fillcolor-top'); // || 'transparent';
        var thisFillColor2 = $el.data('sparkline-fillcolor-bottom'); // || 'transparent';
        $el.sparkline(sparklineValue, {
            type: 'line',
            spotRadius: thisSpotRadius1,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor1,
            maxSpotColor: thisMaxSpotColor1,
            highlightSpotColor: thishighlightSpotColor1,
            highlightLineColor: thisHighlightLineColor1,
            valueSpots: sparklineValueSpots1,
            lineWidth: thisLineWidth1,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor1,
            fillColor: thisFillColor1,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            type: 'line',
            spotRadius: thisSpotRadius2,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor2,
            maxSpotColor: thisMaxSpotColor2,
            highlightSpotColor: thishighlightSpotColor2,
            highlightLineColor: thisHighlightLineColor2,
            valueSpots: sparklineValueSpots2,
            lineWidth: thisLineWidth2,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor2,
            composite: true,
            fillColor: thisFillColor2,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.drawSparklines = function () {
        var _this = this;
        $('.sparkline:not(:has(>canvas))', this.container).each(function (i, el) {
            var $el = $(el), sparklineType = $el.data('sparkline-type') || 'bar';
            if (sparklineType == 'bar') {
                _this.barChart($el);
            }
            if (sparklineType == 'line') {
                _this.lineChart($el);
            }
            if (sparklineType == 'pie') {
                _this.pieChart($el);
            }
            if (sparklineType == 'box') {
                _this.boxChart($el);
            }
            if (sparklineType == 'bullet') {
                _this.bulletChart($el);
            }
            if (sparklineType == 'discrete') {
                _this.discreteChart($el);
            }
            if (sparklineType == 'tristate') {
                _this.tristaneChart($el);
            }
            if (sparklineType == 'compositebar') {
                _this.compositeBarChart($el);
            }
            if (sparklineType == 'compositeline') {
                _this.compositeLineChart($el);
            }
        });
    };
    return SparklineContainer;
}());
SparklineContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSparklineContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineContainer);

var _a;
//# sourceMappingURL=sparkline-container.directive.js.map

/***/ }),

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-stats',
        template: __webpack_require__(1034)
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ 1032:
/***/ (function(module, exports) {

module.exports = "/**!\n * easyPieChart\n * Lightweight plugin to render simple, animated and retina optimized pie charts\n *\n * @license \n * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)\n * @version 2.1.6\n **/\n!function(a,b){\"object\"==typeof exports?module.exports=b(require(\"jquery\")):\"function\"==typeof define&&define.amd?define([\"jquery\"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(\"canvas\");a.appendChild(d),\"undefined\"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(\"2d\");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,\"px\"].join(\"\"),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=\"function\"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:\"#ef1e25\",trackColor:\"#f9f9f9\",scaleColor:\"#dfe0e0\",scaleLength:5,lineCap:\"round\",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(\"undefined\"!=typeof b)d.renderer=b;else{if(\"undefined\"==typeof SVGRenderer)throw new Error(\"Please load either the SVG- or the CanvasRenderer\");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&\"undefined\"!=typeof c[b]?c[b]:d[b],\"function\"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=\"string\"==typeof e.easing&&\"undefined\"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,\"number\"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),\"boolean\"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(\"data-percent\")&&this.update(parseFloat(a.getAttribute(\"data-percent\")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,\"easyPieChart\")||(d=a.extend({},b,a(this).data()),a.data(this,\"easyPieChart\",new c(this,d)))})}});"

/***/ }),

/***/ 1033:
/***/ (function(module, exports) {

module.exports = "/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ \n Licensed under the New BSD License - see above site for details */\n!function(a,b,c){!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){\"use strict\";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:\"line\",lineColor:\"#00f\",fillColor:\"#cdf\",defaultPixelsPerValue:3,width:\"auto\",height:\"auto\",composite:!1,tagValuesAttribute:\"values\",tagOptionsPrefix:\"spark\",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:\"\",tooltipSuffix:\"\",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:\",\",numberDecimalMark:\".\",disableTooltips:!1,disableInteraction:!1},line:{spotColor:\"#f80\",highlightSpotColor:\"#5f5\",highlightLineColor:\"#f22\",spotRadius:1.5,minSpotColor:\"#f80\",maxSpotColor:\"#f80\",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:\"#ccc\",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:\"#3366cc\",negBarColor:\"#f44\",stackedBarColor:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:\"#6f6\",negBarColor:\"#f44\",zeroBarColor:\"#999\",colorMap:{},tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{\"-1\":\"Loss\",0:\"Draw\",1:\"Win\"}}},discrete:{lineHeight:\"auto\",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g(\"{{prefix}}{{value}}{{suffix}}\")},bullet:{targetColor:\"#f33\",targetWidth:3,performanceColor:\"#33f\",rangeColors:[\"#d3dafe\",\"#a8b6ff\",\"#7f94ff\"],base:c,tooltipFormat:new g(\"{{fieldkey:fields}} - {{value}}\"),tooltipValueLookups:{fields:{r:\"Range\",p:\"Performance\",t:\"Target\"}}},pie:{offset:0,sliceColors:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],borderWidth:0,borderColor:\"#000\",tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:\"#000\",boxFillColor:\"#cdf\",whiskerColor:\"#000\",outlierLineColor:\"#333\",outlierFillColor:\"#fff\",medianColor:\"#f00\",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:\"#4a2\",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g(\"{{field:fields}}: {{value}}\"),tooltipFormatFieldlistKey:\"field\",tooltipValueLookups:{fields:{lq:\"Lower Quartile\",med:\"Median\",uq:\"Upper Quartile\",lo:\"Left Outlier\",ro:\"Right Outlier\",lw:\"Left Whisker\",rw:\"Right Whisker\"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\\{\\{([\\w.]+?)(:(.+?))?\\}\\}/g,precre:/(\\w+)\\.(\\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?\"\":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get(\"numberFormatter\")?d.get(\"numberFormatter\")(h):r(h,i,d.get(\"numberDigitGroupCount\"),d.get(\"numberDigitGroupSep\"),d.get(\"numberDecimalMark\"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case\"undefined\":a=c;break;case\"null\":a=null;break;case\"true\":a=!0;break;case\"false\":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(\"\"),g=(g=d.inArray(\".\",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join(\"\")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+=\"number\"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c,d;if(a.createStyleSheet)try{return a.createStyleSheet().cssText=b,void 0}catch(e){d=!0}c=a.createElement(\"style\"),c.type=\"text/css\",a.getElementsByTagName(\"head\")[0].appendChild(c),d?a.styleSheets[a.styleSheets.length-1].cssText=b:c[\"string\"==typeof a.body.style.WebkitAppearance?\"innerText\":\"innerHTML\"]=b},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data(\"_jqs_vcanvas\")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement(\"canvas\");if(j.getContext&&j.getContext(\"2d\"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add(\"v\",\"urn:schemas-microsoft-com:vml\",\"#default#VML\"),d.fn.sparkline.canvas=function(a,b,c){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data(\"_jqs_mhandler\"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data(\"_jqs_vcanvas\");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&\"string\"==typeof b&&b.indexOf(\":\")>-1&&(c=b.split(\":\"),c[0]=0===c[0].length?-1/0:parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get(\"disableTooltips\"),this.highlightEnabled=!b.get(\"disableHighlight\")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event(\"sparklineClick\");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind(\"mousemove.jqs\"),d(a.body).bind(\"mousemove.jqs\",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind(\"mousemove.jqs\");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event(\"sparklineRegionChange\"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a=\"\",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:\"position: static !important;display: block !important;visibility: hidden !important;float: left !important;\",init:function(b){var c,e=b.get(\"tooltipClassname\",\"jqstooltip\"),f=this.sizeStyle;this.container=b.get(\"tooltipContainer\")||a.body,this.tooltipOffsetX=b.get(\"tooltipOffsetX\",10),this.tooltipOffsetY=b.get(\"tooltipOffsetY\",12),d(\"#jqssizetip\").remove(),d(\"#jqstooltip\").remove(),this.sizetip=d(\"<div/>\",{id:\"jqssizetip\",style:f,\"class\":e}),this.tooltip=d(\"<div/>\",{id:\"jqstooltip\",\"class\":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind(\"resize.jqs scroll.jqs\"),d(window).bind(\"resize.jqs scroll.jqs\",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:\"visible\"}),this.hidden&&(this.hidden=!1,this.updatePosition()),void 0):(this.tooltip.css(\"visibility\",\"hidden\"),this.hidden=!0,void 0)},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind(\"resize.jqs scroll.jqs\")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return\"html\"===b||b===c?(m=this.getAttribute(h.get(\"tagValuesAttribute\")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\\s*<!--)|(-->\\s*$)|\\s+/g,\"\").split(\",\")):e=b,f=\"auto\"===h.get(\"width\")?e.length*h.get(\"defaultPixelsPerValue\"):h.get(\"width\"),\"auto\"===h.get(\"height\")?h.get(\"composite\")&&d.data(this,\"_jqs_vcanvas\")||(j=a.createElement(\"span\"),j.innerHTML=\"a\",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get(\"height\"),h.get(\"disableInteraction\")?k=!1:(k=d.data(this,\"_jqs_mhandler\"),k?h.get(\"composite\")||k.reset():(k=new t(this,h),d.data(this,\"_jqs_mhandler\",k))),h.get(\"composite\")&&!d.data(this,\"_jqs_vcanvas\")?(d.data(this,\"_jqs_errnotify\")||(alert(\"Attempted to attach a composite sparkline to an element with no existing sparkline\"),d.data(this,\"_jqs_errnotify\",!0)),void 0):(l=new(d.fn.sparkline[h.get(\"type\")])(this,e,h,f,g),l.render(),k&&k.registerSparkline(l),void 0)},d(this).html()&&!h.get(\"disableHiddenCheck\")&&d(this).is(\":hidden\")||!d(this).parents(\"body\").length){if(!h.get(\"composite\")&&d.data(this,\"_jqs_pending\"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,\"_jqs_pending\",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(\":visible\")&&!d(a).parents().is(\":hidden\")?(J[b][1].call(a),d.data(J[b][0],\"_jqs_pending\",!1),e.push(b)):d(a).closest(\"html\").length||d.data(a,\"_jqs_pending\")||(d.data(J[b][0],\"_jqs_pending\",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting(\"type\"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if(\"[\"===b.substr(0,1))for(b=b.substr(1,b.length-2).split(\",\"),d=b.length;d--;)b[d]=j(b[d].replace(/(^\\s*)|(\\s*$)/g,\"\"));else if(\"{\"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(\",\"),b={},d=e.length;d--;)f=e[d].split(\":\",2),b[f[0].replace(/(^\\s*)|(\\s*$)/g,\"\")]=j(f[1].replace(/(^\\s*)|(\\s*$)/g,\"\"));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get(\"disableInteraction\");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get(\"composite\"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML=\"\",!1):!0},getRegion:function(){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get(\"disableHighlight\");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s=\"\",t=[];if(this.currentRegion===c)return\"\";if(a=this.getCurrentRegionFields(),n=r.get(\"tooltipFormatter\"))return n(this,r,a);if(r.get(\"tooltipChartTitle\")&&(s+='<div class=\"jqs jqstitle\">'+r.get(\"tooltipChartTitle\")+\"</div>\\n\"),b=this.options.get(\"tooltipFormat\"),!b)return\"\";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get(\"tooltipFormatFieldlist\"),k=this.options.get(\"tooltipFormatFieldlistKey\"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],\"string\"==typeof o&&(o=new g(o)),f=o.fclass||\"jqsfield\",q=0;p>q;q++)a[q].isNull&&r.get(\"tooltipSkipNull\")||(d.extend(a[q],{prefix:r.get(\"tooltipPrefix\"),suffix:r.get(\"tooltipSuffix\")}),h=o.render(a[q],r.get(\"tooltipValueLookups\"),r),t.push('<div class=\"'+f+'\">'+h+\"</div>\"));return t.length?s+t.join(\"\\n\"):\"\"},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get(\"highlightColor\"),j=c.get(\"highlightLighten\");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return\"rgb(\"+f.join(\",\")+\")\"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:\"line\",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b){var d,e=this.regionMap;for(d=e.length;d--;)if(null!==e[d]&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get(\"lineColor\"),fillColor:this.options.get(\"fillColor\"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get(\"spotRadius\"),i=g.get(\"highlightSpotColor\"),j=g.get(\"highlightLineColor\");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d=\"string\"==typeof g[a],e=\"object\"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(\":\"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||\"null\"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get(\"xvalues\")&&(i=this.options.get(\"xvalues\")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get(\"normalRangeMin\"),d=a.get(\"normalRangeMax\");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get(\"chartRangeMin\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMin\")<this.miny)&&(this.miny=a.get(\"chartRangeMin\")),a.get(\"chartRangeMax\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMax\")>this.maxy)&&(this.maxy=a.get(\"chartRangeMax\")),a.get(\"chartRangeMinX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMinX\")<this.minx)&&(this.minx=a.get(\"chartRangeMinX\")),a.get(\"chartRangeMaxX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMaxX\")>this.maxx)&&(this.maxx=a.get(\"chartRangeMaxX\"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get(\"normalRangeMin\"),i=this.options.get(\"normalRangeMax\"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get(\"normalRangeColor\")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get(\"spotRadius\"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get(\"highlightSpotColor\")&&!E.get(\"disableInteraction\"),(z||E.get(\"minSpotColor\")||E.get(\"spotColor\")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get(\"maxSpotColor\")||E.get(\"spotColor\")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get(\"minSpotColor\")||E.get(\"maxSpotColor\"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get(\"spotColor\")||E.get(\"minSpotColor\")||E.get(\"maxSpotColor\")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get(\"normalRangeMin\")===c||E.get(\"drawNormalOnTop\")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get(\"fillColor\")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get(\"fillColor\"),E.get(\"fillColor\")).append();for(E.get(\"normalRangeMin\")!==c&&E.get(\"drawNormalOnTop\")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get(\"lineColor\"),c,E.get(\"lineWidth\")).append();if(J&&E.get(\"valueSpots\"))for(y=E.get(\"valueSpots\"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get(\"spotColor\")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get(\"spotColor\")).append(),this.maxy!==this.minyorg&&(J&&E.get(\"minSpotColor\")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get(\"minSpotColor\")).append()),J&&E.get(\"maxSpotColor\")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get(\"maxSpotColor\")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:\"bar\",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get(\"barWidth\"),10),L=parseInt(f.get(\"barSpacing\"),10),M=f.get(\"chartRangeMin\"),N=f.get(\"chartRangeMax\"),O=f.get(\"chartRangeClip\"),P=1/0,Q=-1/0;for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m=\"string\"==typeof H&&H.indexOf(\":\")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(\":\"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-1/0:M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<y)&&(y=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>z)&&(z=f.get(\"chartRangeMax\")),this.zeroAxis=v=f.get(\"zeroAxis\",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get(\"colorMap\"))?(this.colorMapByIndex=f.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d){var e=b.floor(d/this.totalBarWidth);return 0>e||e>=this.values.length?c:e},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get(\"stackedBarColor\"):0>b?j.get(\"negBarColor\"):j.get(\"barColor\"),0===b&&j.get(\"zeroColor\")!==c&&(f=j.get(\"zeroColor\")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get(\"nullColor\")?(h=e?r.get(\"nullColor\"):this.calcHighlightColor(r.get(\"nullColor\"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:\"tristate\",init:function(a,b,e,f,g){var h=parseInt(e.get(\"barWidth\"),10),i=parseInt(e.get(\"barSpacing\"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get(\"colorMap\"))?(this.colorMapByIndex=e.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get(\"negBarColor\"):e[b]>0?f.get(\"posBarColor\"):f.get(\"zeroBarColor\")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:\"discrete\",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=\"auto\"===f.get(\"width\")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<this.min)&&(this.min=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>this.max)&&(this.max=f.get(\"chartRangeMax\")),this.initTarget(),this.target&&(this.lineHeight=\"auto\"===f.get(\"lineHeight\")?b.round(.3*this.canvasHeight):f.get(\"lineHeight\"))},getRegion:function(a,c){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get(\"thresholdColor\")&&e<j.get(\"thresholdValue\")?j.get(\"thresholdColor\"):j.get(\"lineColor\"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:\"bullet\",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get(\"base\")===c?0>h?h:0:e.get(\"base\"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=\"auto\"===e.get(\"width\")?\"4.0em\":f,this.target=this.$el.simpledraw(f,g,e.get(\"composite\")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case\"r\":b=this.renderRange(c.substr(1),a);break;case\"p\":b=this.renderPerformance(a);break;case\"t\":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get(\"rangeColors\")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get(\"performanceColor\");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get(\"targetWidth\")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get(\"targetColor\");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get(\"targetWidth\")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]=\"r\"+a,this.valueShapes[\"r\"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]=\"p1\",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]=\"t0\",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:\"pie\",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),\"auto\"===e.get(\"width\")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get(\"sliceColors\")[a%this.options.get(\"sliceColors\").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get(\"borderWidth\"),n=k.get(\"offset\"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get(\"sliceColors\")[g%k.get(\"sliceColors\").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);\nr=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get(\"borderWidth\");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get(\"borderColor\"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:\"box\",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=\"auto\"===c.get(\"width\")?\"4.0em\":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:\"lq\",value:this.quartiles[0]},{field:\"med\",value:this.quartiles[1]},{field:\"uq\",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:\"lo\",value:this.loutlier}),this.routlier!==c&&a.push({field:\"ro\",value:this.routlier}),this.lwhisker!==c&&a.push({field:\"lw\",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:\"rw\",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get(\"chartRangeMin\")===c?b.min.apply(b,p):r.get(\"chartRangeMin\"),v=r.get(\"chartRangeMax\")===c?b.max.apply(b,p):r.get(\"chartRangeMax\"),w=0;if(C._super.render.call(this)){if(r.get(\"raw\"))r.get(\"showOutliers\")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get(\"showOutliers\")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get(\"outlierIQR\")&&(a=p[l]),p[l]<h+e*r.get(\"outlierIQR\")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get(\"showOutliers\")&&(w=b.ceil(r.get(\"spotRadius\")),s-=2*b.ceil(r.get(\"spotRadius\")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get(\"boxLineColor\"),r.get(\"boxFillColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get(\"medianColor\")).append(),r.get(\"target\")&&(m=b.ceil(r.get(\"spotRadius\")),o.drawLine(b.round((r.get(\"target\")-u)*n+w),b.round(t/2-m),b.round((r.get(\"target\")-u)*n+w),b.round(t/2+m),r.get(\"targetColor\")).append(),o.drawLine(b.round((r.get(\"target\")-u)*n+w-m),b.round(t/2),b.round((r.get(\"target\")-u)*n+w+m),b.round(t/2),r.get(\"targetColor\")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\\d+)(px)?\\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,\"_jqs_vcanvas\",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape(\"Shape\",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape(\"Circle\",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape(\"PieSlice\",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape(\"Rect\",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert(\"reset not implemented\")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),this.pixelHeight=e?e[1]:d(c).height(),e=this._pxregex.exec(a),this.pixelWidth=e?e[1]:d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(){alert(\"appendShape not implemented\")},replaceWithShape:function(){alert(\"replaceWithShape not implemented\")},insertAfterShape:function(){alert(\"insertAfterShape not implemented\")},removeShapeId:function(){alert(\"removeShapeId not implemented\")},getShapeAt:function(){alert(\"getShapeAt not implemented\")},render:function(){alert(\"render not implemented\")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement(\"canvas\"),f[0]&&(f=f[0]),d.data(f,\"_jqs_vcanvas\",this),d(this.canvas).css({display:\"inline-block\",width:b,height:e,verticalAlign:\"top\"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext(\"2d\");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),this.shapes[b.id]=b,void 0},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this[\"_draw\"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,\"_jqs_vcanvas\",this),this.canvas=a.createElement(\"span\"),d(this.canvas).css({display:\"inline-block\",position:\"relative\",overflow:\"hidden\",width:b,height:c,margin:\"0px\",padding:\"0px\",verticalAlign:\"top\"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\" style=\"position:absolute;top:0;left:0;width:'+this.pixelWidth+\"px;height=\"+this.pixelHeight+'px;\"></v:group>',this.canvas.insertAdjacentHTML(\"beforeEnd\",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=\"\"},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=\"\"+b[m][0]+\",\"+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked=\"false\" ':' strokeWeight=\"'+f+'px\" strokeColor=\"'+d+'\" ',i=e===c?' filled=\"false\"':' fillColor=\"'+e+'\" filled=\"true\" ',j=n[0]===n[n.length-1]?\"x \":\"\",k='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+h+i+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+g+\" l \"+n.join(\", \")+\" \"+j+'e\"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked=\"false\" ':' strokeWeight=\"'+h+'px\" strokeColor=\"'+f+'\" ',j=g===c?' filled=\"false\"':' fillColor=\"'+g+'\" filled=\"true\" ',k='<v:oval  id=\"jqsshape'+a+'\" '+i+j+' style=\"position:absolute;top:'+d+\"px; left:\"+b+\"px; width:\"+2*e+\"px; height:\"+2*e+'px\"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return\"\";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return\"\";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?\"\":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked=\"false\" ':' strokeWeight=\"1px\" strokeColor=\"'+i+'\" ',q=j===c?' filled=\"false\"':' fillColor=\"'+j+'\" filled=\"true\" ',r='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+p+q+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+d+\",\"+e+\" wa \"+k.join(\", \")+' x e\"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=\"\"},appendShape:function(a){var b=this[\"_draw\"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML(\"beforeEnd\",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d(\"#jqsshape\"+a[0]),f=\"\",g=b.length;for(c=0;g>c;c++)f+=this[\"_draw\"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d(\"#jqsshape\"+a[c]).remove()},insertAfterShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].insertAdjacentHTML(\"afterEnd\",e)},removeShapeId:function(a){var b=d(\"#jqsshape\"+a);this.group.removeChild(b[0])},getShapeAt:function(a){var b=a.id.substr(8);return b},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);"

/***/ }),

/***/ 1034:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n      <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n        1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n      <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n      <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 1035:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(459)(__webpack_require__(1032))

/***/ }),

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(459)(__webpack_require__(1033))

/***/ }),

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1058);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error500Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Error500Component = (function () {
    function Error500Component() {
    }
    Error500Component.prototype.ngOnInit = function () {
    };
    return Error500Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], Error500Component.prototype, "errorname", void 0);
Error500Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error500',
        template: __webpack_require__(1065),
    }),
    __metadata("design:paramtypes", [])
], Error500Component);

//# sourceMappingURL=error500.component.js.map

/***/ }),

/***/ 1038:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnOffSwitchComponent = OnOffSwitchComponent_1 = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent_1.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = OnOffSwitchComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'on-off-switch',
        template: __webpack_require__(1057),
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);

var OnOffSwitchComponent_1;
//# sourceMappingURL=on-off-switch.component.js.map

/***/ }),

/***/ 1039:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__ = __webpack_require__(1056);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Directive; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["a" /* addClassName */])(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(30).then(__webpack_require__.bind(null, 1067)).then(function () {
            $(_this.el.nativeElement).select2();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["b" /* removeClassName */])(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Select2Directive);

var _a;
//# sourceMappingURL=select2.directive.js.map

/***/ }),

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__ = __webpack_require__(1027);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminFormsLiteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__["a" /* Select2Module */], __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__["a" /* OnOffSwitchModule */]
        ]
    })
], SmartadminFormsLiteModule);

//# sourceMappingURL=smartadmin-forms-lite.module.js.map

/***/ }),

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(464);
/* unused harmony reexport FooterComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_message_component__ = __webpack_require__(465);
/* unused harmony reexport ActivitiesMessageComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_notification_component__ = __webpack_require__(466);
/* unused harmony reexport ActivitiesNotificationComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1044:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_task_component__ = __webpack_require__(467);
/* unused harmony reexport ActivitiesTaskComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_component__ = __webpack_require__(462);
/* unused harmony reexport ActivitiesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_message__ = __webpack_require__(1042);
/* unused harmony reexport ActivitiesMessageComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_task__ = __webpack_require__(1044);
/* unused harmony reexport ActivitiesTaskComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_notification__ = __webpack_require__(1043);
/* unused harmony reexport ActivitiesNotificationComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_menu_component__ = __webpack_require__(468);
/* unused harmony reexport CollapseMenuComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_screen_component__ = __webpack_require__(469);
/* unused harmony reexport FullScreenComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(470);
/* unused harmony reexport HeaderComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module__ = __webpack_require__(471);
/* unused harmony reexport HeaderModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_screen__ = __webpack_require__(1047);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collapse_menu__ = __webpack_require__(1046);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recent_projects__ = __webpack_require__(1049);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activities__ = __webpack_require__(1045);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recent_projects_component__ = __webpack_require__(472);
/* unused harmony reexport RecentProjectsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(473);
/* unused harmony reexport RecentProjectsService */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_switcher_component__ = __webpack_require__(474);
/* unused harmony reexport LayoutSwitcherComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(34);
/* unused harmony reexport LayoutService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_module__ = __webpack_require__(460);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(1041);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header__ = __webpack_require__(1048);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation__ = __webpack_require__(1051);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon__ = __webpack_require__(1052);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut__ = __webpack_require__(1053);
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_component__ = __webpack_require__(477);
/* unused harmony reexport NavigationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__big_breadcrumbs_component__ = __webpack_require__(475);
/* unused harmony reexport BigBreadcrumbsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minify_menu_component__ = __webpack_require__(476);
/* unused harmony reexport MinifyMenuComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_menu_directive__ = __webpack_require__(479);
/* unused harmony reexport SmartMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_module__ = __webpack_require__(478);
/* unused harmony reexport NavigationModule */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ribbon_component__ = __webpack_require__(480);
/* unused harmony reexport RibbonComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcut_component__ = __webpack_require__(481);
/* unused harmony reexport ShortcutComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(45).then(__webpack_require__.bind(null, 1066)).then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ProgressbarDirective);

var _a;
//# sourceMappingURL=progressbar.directive.js.map

/***/ }),

/***/ 1055:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_directive__ = __webpack_require__(1054);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartProgressbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
    })
], SmartProgressbarModule);

//# sourceMappingURL=smart-progressbar.module.js.map

/***/ }),

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassName;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClassName;
/**
 * by griga
 */
/**
 * by griga
 */ function addClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return el;
}
function removeClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
    return el;
}
//# sourceMappingURL=dom-helpers.js.map

/***/ }),

/***/ 1057:
/***/ (function(module, exports) {

module.exports = "<div class=\"onoffswitch-container\">\n  <span class=\"onoffswitch-title\">{{title}}<ng-content></ng-content></span>\n  <span class=\"onoffswitch\">\n    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" [(ngModel)]=\"value\" [checked]=\"value\"\n           (ngModelChange)=\"onChange()\"\n           id=\"{{widgetId}}\"/>\n    <label class=\"onoffswitch-label\" htmlFor=\"{{widgetId}}\">\n      <span class=\"onoffswitch-inner\"  data-swchon-text=\"ON\"\n            data-swchoff-text=\"OFF\"></span>\n        <span class=\"onoffswitch-switch\"></span>\n    </label>\n  </span>\n</div>\n"

/***/ }),

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // metadata.animations = [fadeInTop()];
            // metadata.host = {"[@fadeInTop]": ''};
            //your logic here
            // mine was metadata.styles = [builtStyles]
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-in-top.decorator.js.map

/***/ }),

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error500_component__ = __webpack_require__(1037);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error500RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_2__error500_component__["a" /* Error500Component */]
    }];
var Error500RoutingModule = (function () {
    function Error500RoutingModule() {
    }
    return Error500RoutingModule;
}());
Error500RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], Error500RoutingModule);

//# sourceMappingURL=error500-routing.module.js.map

/***/ }),

/***/ 1062:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatatableComponent = (function () {
    function DatatableComponent(el) {
        this.el = el;
        this.width = '100%';
    }
    DatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        Promise.all([
            __webpack_require__.e/* import() */(28).then(__webpack_require__.bind(null, 1074)),
        ]).then(function () {
            _this.render();
        });
    };
    DatatableComponent.prototype.render = function () {
        var element = $(this.el.nativeElement.children[0]);
        var options = this.options || {};
        var toolbar = '';
        if (options.buttons)
            toolbar += 'B';
        if (this.paginationLength)
            toolbar += 'l';
        if (this.columnsHide)
            toolbar += 'C';
        if (typeof options.ajax === 'string') {
            var url = options.ajax;
            options.ajax = {
                url: url,
            };
        }
        options = $.extend(options, {
            "dom": "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
                "t" +
                "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
            oLanguage: {
                "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
                "sLengthMenu": "_MENU_"
            },
            "autoWidth": false,
            retrieve: true,
            responsive: true,
            initComplete: function (settings, json) {
                element.parent().find('.input-sm').removeClass("input-sm").addClass('input-md');
            }
        });
        var _dataTable = element.DataTable(options);
        if (this.filter) {
            // Apply the filter
            element.on('keyup change', 'thead th input[type=text]', function () {
                _dataTable
                    .column($(this).parent().index() + ':visible')
                    .search(this.value)
                    .draw();
            });
        }
        if (!toolbar) {
            element.parent().find(".dt-toolbar").append('<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>');
        }
        if (this.detailsFormat) {
            var format_1 = this.detailsFormat;
            element.on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = _dataTable.row(tr);
                if (row.child.isShown()) {
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    row.child(format_1(row.data())).show();
                    tr.addClass('shown');
                }
            });
        }
    };
    return DatatableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "detailsFormat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "paginationLength", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DatatableComponent.prototype, "columnsHide", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "tableClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DatatableComponent.prototype, "width", void 0);
DatatableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-datatable',
        template: "\n      <table class=\"dataTable responsive {{tableClass}}\" width=\"{{width}}\">\n        <ng-content></ng-content>\n      </table>\n",
        styles: [
            __webpack_require__(1064)
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DatatableComponent);

var _a;
//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datatable_component__ = __webpack_require__(1062);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminDatatableModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// require('smartadmin-plugins/bower_components/datatables.net-colreorder-bs/css/colReorder.bootstrap.min.css');
var SmartadminDatatableModule = (function () {
    function SmartadminDatatableModule() {
    }
    return SmartadminDatatableModule;
}());
SmartadminDatatableModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__datatable_component__["a" /* DatatableComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__datatable_component__["a" /* DatatableComponent */]],
    })
], SmartadminDatatableModule);

//# sourceMappingURL=smartadmin-datatable.module.js.map

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(461)(false);
// imports


// module
exports.push([module.i, "/*\n * This combined file was created by the DataTables downloader builder:\n *   https://datatables.net/download\n *\n * To rebuild or modify this file with the latest versions of the included\n * software please visit:\n *   https://datatables.net/download/#bs/pdfmake-0.1.18/dt-1.10.13/b-1.2.4/b-colvis-1.2.4/b-flash-1.2.4/b-html5-1.2.4/b-print-1.2.4/cr-1.3.2/r-2.1.1/se-1.2.0\n *\n * Included libraries:\n *   pdfmake 0.1.18, DataTables 1.10.13, Buttons 1.2.4, Column visibility 1.2.4, Flash export 1.2.4, HTML5 export 1.2.4, Print view 1.2.4, ColReorder 1.3.2, Responsive 2.1.1, Select 1.2.0\n */\n\ntable.dataTable{clear:both;margin-top:6px !important;margin-bottom:6px !important;max-width:none !important;border-collapse:separate !important}table.dataTable td,table.dataTable th{box-sizing:content-box}table.dataTable td.dataTables_empty,table.dataTable th.dataTables_empty{text-align:center}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}div.dataTables_wrapper div.dataTables_length label{font-weight:normal;text-align:left;white-space:nowrap}div.dataTables_wrapper div.dataTables_length select{width:75px;display:inline-block}div.dataTables_wrapper div.dataTables_filter{text-align:right}div.dataTables_wrapper div.dataTables_filter label{font-weight:normal;white-space:nowrap;text-align:left}div.dataTables_wrapper div.dataTables_filter input{margin-left:0.5em;display:inline-block;width:auto}div.dataTables_wrapper div.dataTables_info{padding-top:8px;white-space:nowrap}div.dataTables_wrapper div.dataTables_paginate{margin:0;white-space:nowrap;text-align:right}div.dataTables_wrapper div.dataTables_paginate ul.pagination{margin:2px 0;white-space:nowrap}div.dataTables_wrapper div.dataTables_processing{position:absolute;top:50%;left:50%;width:200px;margin-left:-100px;margin-top:-26px;text-align:center;padding:1em 0}table.dataTable thead>tr>th.sorting_asc,table.dataTable thead>tr>th.sorting_desc,table.dataTable thead>tr>th.sorting,table.dataTable thead>tr>td.sorting_asc,table.dataTable thead>tr>td.sorting_desc,table.dataTable thead>tr>td.sorting{padding-right:30px}table.dataTable thead>tr>th:active,table.dataTable thead>tr>td:active{outline:none}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;position:relative}table.dataTable thead .sorting:after,table.dataTable thead .sorting_asc:after,table.dataTable thead .sorting_desc:after,table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{position:absolute;bottom:8px;right:8px;display:block;font-family:'Glyphicons Halflings';opacity:0.5}table.dataTable thead .sorting:after{opacity:0.2;content:\"\\E150\"}table.dataTable thead .sorting_asc:after{content:\"\\E155\"}table.dataTable thead .sorting_desc:after{content:\"\\E156\"}table.dataTable thead .sorting_asc_disabled:after,table.dataTable thead .sorting_desc_disabled:after{color:#eee}div.dataTables_scrollHead table.dataTable{margin-bottom:0 !important}div.dataTables_scrollBody table{border-top:none;margin-top:0 !important;margin-bottom:0 !important}div.dataTables_scrollBody table thead .sorting:after,div.dataTables_scrollBody table thead .sorting_asc:after,div.dataTables_scrollBody table thead .sorting_desc:after{display:none}div.dataTables_scrollBody table tbody tr:first-child th,div.dataTables_scrollBody table tbody tr:first-child td{border-top:none}div.dataTables_scrollFoot table{margin-top:0 !important;border-top:none}@media screen and (max-width: 767px){div.dataTables_wrapper div.dataTables_length,div.dataTables_wrapper div.dataTables_filter,div.dataTables_wrapper div.dataTables_info,div.dataTables_wrapper div.dataTables_paginate{text-align:center}}table.dataTable.table-condensed>thead>tr>th{padding-right:20px}table.dataTable.table-condensed .sorting:after,table.dataTable.table-condensed .sorting_asc:after,table.dataTable.table-condensed .sorting_desc:after{top:6px;right:6px}table.table-bordered.dataTable th,table.table-bordered.dataTable td{border-left-width:0}table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable th:last-child,table.table-bordered.dataTable td:last-child,table.table-bordered.dataTable td:last-child{border-right-width:0}table.table-bordered.dataTable tbody th,table.table-bordered.dataTable tbody td{border-bottom-width:0}div.dataTables_scrollHead table.table-bordered{border-bottom-width:0}div.table-responsive>div.dataTables_wrapper>div.row{margin:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:first-child{padding-left:0}div.table-responsive>div.dataTables_wrapper>div.row>div[class^=\"col-\"]:last-child{padding-right:0}\n\n\ndiv.dt-button-info{position:fixed;top:50%;left:50%;width:400px;margin-top:-100px;margin-left:-200px;background-color:white;border:2px solid #111;box-shadow:3px 3px 8px rgba(0,0,0,0.3);border-radius:3px;text-align:center;z-index:21}div.dt-button-info h2{padding:0.5em;margin:0;font-weight:normal;border-bottom:1px solid #ddd;background-color:#f3f3f3}div.dt-button-info>div{padding:1em}ul.dt-button-collection.dropdown-menu{display:block;z-index:2002;-webkit-column-gap:8px;-ms-column-gap:8px;-o-column-gap:8px;column-gap:8px}ul.dt-button-collection.dropdown-menu.fixed{position:fixed;top:50%;left:50%;margin-left:-75px;border-radius:0}ul.dt-button-collection.dropdown-menu.fixed.two-column{margin-left:-150px}ul.dt-button-collection.dropdown-menu.fixed.three-column{margin-left:-225px}ul.dt-button-collection.dropdown-menu.fixed.four-column{margin-left:-300px}ul.dt-button-collection.dropdown-menu>*{-webkit-column-break-inside:avoid;break-inside:avoid}ul.dt-button-collection.dropdown-menu.two-column{width:300px;padding-bottom:1px;-webkit-column-count:2;-ms-column-count:2;-o-column-count:2;column-count:2}ul.dt-button-collection.dropdown-menu.three-column{width:450px;padding-bottom:1px;-webkit-column-count:3;-ms-column-count:3;-o-column-count:3;column-count:3}ul.dt-button-collection.dropdown-menu.four-column{width:600px;padding-bottom:1px;-webkit-column-count:4;-ms-column-count:4;-o-column-count:4;column-count:4}div.dt-button-background{position:fixed;top:0;left:0;width:100%;height:100%;z-index:2001}@media screen and (max-width: 767px){div.dt-buttons{float:none;width:100%;text-align:center;margin-bottom:0.5em}div.dt-buttons a.btn{float:none}}\n\n\ntable.DTCR_clonedTable.dataTable{position:absolute !important;background-color:rgba(255,255,255,0.7);z-index:202}div.DTCR_pointer{width:1px;background-color:#337ab7;z-index:201}\n\n\ntable.dataTable.dtr-inline.collapsed>tbody>tr>td.child,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty{cursor:default !important}table.dataTable.dtr-inline.collapsed>tbody>tr>td.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th.child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>td.dataTables_empty:before{display:none !important}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child{position:relative;padding-left:30px;cursor:pointer}table.dataTable.dtr-inline.collapsed>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr>th:first-child:before{top:9px;left:4px;height:14px;width:14px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}table.dataTable.dtr-inline.collapsed>tbody>tr.parent>td:first-child:before,table.dataTable.dtr-inline.collapsed>tbody>tr.parent>th:first-child:before{content:'-';background-color:#d33333}table.dataTable.dtr-inline.collapsed>tbody>tr.child td:before{display:none}table.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child{padding-left:27px}table.dataTable.dtr-inline.collapsed.compact>tbody>tr>td:first-child:before,table.dataTable.dtr-inline.collapsed.compact>tbody>tr>th:first-child:before{top:5px;left:4px;height:14px;width:14px;border-radius:14px;line-height:14px;text-indent:3px}table.dataTable.dtr-column>tbody>tr>td.control,table.dataTable.dtr-column>tbody>tr>th.control{position:relative;cursor:pointer}table.dataTable.dtr-column>tbody>tr>td.control:before,table.dataTable.dtr-column>tbody>tr>th.control:before{top:50%;left:50%;height:16px;width:16px;margin-top:-10px;margin-left:-10px;display:block;position:absolute;color:white;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;font-family:'Courier New', Courier, monospace;line-height:14px;content:'+';background-color:#337ab7}table.dataTable.dtr-column>tbody>tr.parent td.control:before,table.dataTable.dtr-column>tbody>tr.parent th.control:before{content:'-';background-color:#d33333}table.dataTable>tbody>tr.child{padding:0.5em 1em}table.dataTable>tbody>tr.child:hover{background:transparent !important}table.dataTable>tbody>tr.child ul.dtr-details{display:inline-block;list-style-type:none;margin:0;padding:0}table.dataTable>tbody>tr.child ul.dtr-details li{border-bottom:1px solid #efefef;padding:0.5em 0}table.dataTable>tbody>tr.child ul.dtr-details li:first-child{padding-top:0}table.dataTable>tbody>tr.child ul.dtr-details li:last-child{border-bottom:none}table.dataTable>tbody>tr.child span.dtr-title{display:inline-block;min-width:75px;font-weight:bold}div.dtr-modal{position:fixed;box-sizing:border-box;top:0;left:0;height:100%;width:100%;z-index:100;padding:10em 1em}div.dtr-modal div.dtr-modal-display{position:absolute;top:0;left:0;bottom:0;right:0;width:50%;height:50%;overflow:auto;margin:auto;z-index:102;overflow:auto;background-color:#f5f5f7;border:1px solid black;border-radius:0.5em;box-shadow:0 12px 30px rgba(0,0,0,0.6)}div.dtr-modal div.dtr-modal-content{position:relative;padding:1em}div.dtr-modal div.dtr-modal-close{position:absolute;top:6px;right:6px;width:22px;height:22px;border:1px solid #eaeaea;background-color:#f9f9f9;text-align:center;border-radius:3px;cursor:pointer;z-index:12}div.dtr-modal div.dtr-modal-close:hover{background-color:#eaeaea}div.dtr-modal div.dtr-modal-background{position:fixed;top:0;left:0;right:0;bottom:0;z-index:101;background:rgba(0,0,0,0.6)}@media screen and (max-width: 767px){div.dtr-modal div.dtr-modal-display{width:95%}}div.dtr-bs-modal table.table tr:first-child td{border-top:none}\n\n\ntable.dataTable tbody>tr.selected,table.dataTable tbody>tr>.selected{background-color:#08C}table.dataTable.stripe tbody>tr.odd.selected,table.dataTable.stripe tbody>tr.odd>.selected,table.dataTable.display tbody>tr.odd.selected,table.dataTable.display tbody>tr.odd>.selected{background-color:#0085c7}table.dataTable.hover tbody>tr.selected:hover,table.dataTable.hover tbody>tr>.selected:hover,table.dataTable.display tbody>tr.selected:hover,table.dataTable.display tbody>tr>.selected:hover{background-color:#0083c5}table.dataTable.order-column tbody>tr.selected>.sorting_1,table.dataTable.order-column tbody>tr.selected>.sorting_2,table.dataTable.order-column tbody>tr.selected>.sorting_3,table.dataTable.order-column tbody>tr>.selected,table.dataTable.display tbody>tr.selected>.sorting_1,table.dataTable.display tbody>tr.selected>.sorting_2,table.dataTable.display tbody>tr.selected>.sorting_3,table.dataTable.display tbody>tr>.selected{background-color:#0085c8}table.dataTable.display tbody>tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_1{background-color:#0081c1}table.dataTable.display tbody>tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_2{background-color:#0082c2}table.dataTable.display tbody>tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.odd.selected>.sorting_3{background-color:#0083c4}table.dataTable.display tbody>tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_1{background-color:#0085c8}table.dataTable.display tbody>tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_2{background-color:#0086ca}table.dataTable.display tbody>tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody>tr.even.selected>.sorting_3{background-color:#0087cb}table.dataTable.display tbody>tr.odd>.selected,table.dataTable.order-column.stripe tbody>tr.odd>.selected{background-color:#0081c1}table.dataTable.display tbody>tr.even>.selected,table.dataTable.order-column.stripe tbody>tr.even>.selected{background-color:#0085c8}table.dataTable.display tbody>tr.selected:hover>.sorting_1,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_1{background-color:#007dbb}table.dataTable.display tbody>tr.selected:hover>.sorting_2,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_2{background-color:#007ebd}table.dataTable.display tbody>tr.selected:hover>.sorting_3,table.dataTable.order-column.hover tbody>tr.selected:hover>.sorting_3{background-color:#007fbf}table.dataTable.display tbody>tr:hover>.selected,table.dataTable.display tbody>tr>.selected:hover,table.dataTable.order-column.hover tbody>tr:hover>.selected,table.dataTable.order-column.hover tbody>tr>.selected:hover{background-color:#007dbb}table.dataTable td.select-checkbox{position:relative}table.dataTable td.select-checkbox:before,table.dataTable td.select-checkbox:after{display:block;position:absolute;top:1.2em;left:50%;width:12px;height:12px;box-sizing:border-box}table.dataTable td.select-checkbox:before{content:' ';margin-top:-6px;margin-left:-6px;border:1px solid black;border-radius:3px}table.dataTable tr.selected td.select-checkbox:after{content:'\\2714';margin-top:-11px;margin-left:-4px;text-align:center;text-shadow:1px 1px #B0BED9, -1px -1px #B0BED9, 1px -1px #B0BED9, -1px 1px #B0BED9}div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0.5em}@media screen and (max-width: 640px){div.dataTables_wrapper span.select-info,div.dataTables_wrapper span.select-item{margin-left:0;display:block}}table.dataTable tbody tr.selected,table.dataTable tbody th.selected,table.dataTable tbody td.selected{color:white}table.dataTable tbody tr.selected a,table.dataTable tbody th.selected a,table.dataTable tbody td.selected a{color:#a2d4ed}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1065:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"animated fadeInDown\">\n  <div id=\"content\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"text-center error-box\">\n              <h6 class=\"error-text tada animated\" style=\"font-size:350%\">\n                <i class=\"fa fa-times-circle text-danger error-icon-shadow\"></i> Service Unavailable</h6>\n              <h2 class=\"font-xl\">\n                <strong>Oooops, Something went wrong!</strong>\n              </h2>\n              <br>\n              <p>{{errorname}}</p>\n              <p class=\"lead semi-bold\">\n                <strong>You have experienced a technical error. We apologize.</strong>\n                <br>\n                <br>\n                <small>\n                  We are working hard to correct this issue. Please wait a few moments and try your search again.\n                </small>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>"

/***/ }),

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_my_date_picker_locale_service__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_util_service__ = __webpack_require__(1110);
/* unused harmony export MYDP_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDatePicker; });




var MYDP_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MyDatePicker; }),
    multi: true
};
var CalToggle;
(function (CalToggle) {
    CalToggle[CalToggle["Open"] = 1] = "Open";
    CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
    CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
    CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
    CalToggle[CalToggle["CloseByEsc"] = 5] = "CloseByEsc";
    CalToggle[CalToggle["CloseByApi"] = 6] = "CloseByApi";
})(CalToggle || (CalToggle = {}));
var Year;
(function (Year) {
    Year[Year["min"] = 1000] = "min";
    Year[Year["max"] = 9999] = "max";
})(Year || (Year = {}));
var InputFocusBlur;
(function (InputFocusBlur) {
    InputFocusBlur[InputFocusBlur["focus"] = 1] = "focus";
    InputFocusBlur[InputFocusBlur["blur"] = 2] = "blur";
})(InputFocusBlur || (InputFocusBlur = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["esc"] = 27] = "esc";
    KeyCode[KeyCode["space"] = 32] = "space";
})(KeyCode || (KeyCode = {}));
var MonthId;
(function (MonthId) {
    MonthId[MonthId["prev"] = 1] = "prev";
    MonthId[MonthId["curr"] = 2] = "curr";
    MonthId[MonthId["next"] = 3] = "next";
})(MonthId || (MonthId = {}));
var MM = "mm";
var MMM = "mmm";
var DD = "dd";
var YYYY = "yyyy";
var MyDatePicker = (function () {
    function MyDatePicker(elem, renderer, cdr, localeService, utilService) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.localeService = localeService;
        this.utilService = utilService;
        this.dateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFieldChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarViewChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFocusBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.showSelector = false;
        this.visibleMonth = { monthTxt: "", monthNbr: 0, year: 0 };
        this.selectedMonth = { monthTxt: "", monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.months = [];
        this.years = [];
        this.selectionDayTxt = "";
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.selectMonth = false;
        this.selectYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevYearsDisabled = false;
        this.nextYearsDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.opts = {
            dayLabels: {},
            monthLabels: {},
            dateFormat: "",
            showTodayBtn: true,
            todayBtnTxt: "",
            firstDayOfWeek: "",
            satHighlight: false,
            sunHighlight: true,
            highlightDates: [],
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDays: [],
            enableDays: [],
            markDates: [],
            markWeekends: {},
            disableDateRanges: [],
            disableWeekends: false,
            disableWeekdays: [],
            showWeekNumbers: false,
            height: "34px",
            width: "100%",
            selectionTxtFontSize: "14px",
            selectorHeight: "232px",
            selectorWidth: "252px",
            allowDeselectDate: false,
            inline: false,
            showClearDateBtn: true,
            showDecreaseDateBtn: false,
            showIncreaseDateBtn: false,
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            indicateInvalidDate: true,
            editableDateField: true,
            monthSelector: true,
            yearSelector: true,
            disableHeaderButtons: true,
            minYear: Year.min,
            maxYear: Year.max,
            componentDisabled: false,
            showSelectorArrow: true,
            showInputField: true,
            openSelectorOnInputClick: false,
            ariaLabelInputField: "Date input field",
            ariaLabelClearDate: "Clear Date",
            ariaLabelDecreaseDate: "Decrease Date",
            ariaLabelIncreaseDate: "Increase Date",
            ariaLabelOpenCalendar: "Open Calendar",
            ariaLabelPrevMonth: "Previous Month",
            ariaLabelNextMonth: "Next Month",
            ariaLabelPrevYear: "Previous Year",
            ariaLabelNextYear: "Next Year"
        };
        this.setLocaleOptions();
        renderer.listenGlobal("document", "click", function (event) {
            if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.showSelector = false;
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (_this.opts.monthSelector || _this.opts.yearSelector) {
                _this.resetMonthYearSelect();
            }
        });
    }
    MyDatePicker.prototype.setLocaleOptions = function () {
        var _this = this;
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    MyDatePicker.prototype.setOptions = function () {
        var _this = this;
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
            });
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
    };
    MyDatePicker.prototype.getSelectorTopPosition = function () {
        if (this.opts.openSelectorTopOfInput) {
            return this.elem.nativeElement.children[0].offsetHeight + "px";
        }
    };
    MyDatePicker.prototype.resetMonthYearSelect = function () {
        this.selectMonth = false;
        this.selectYear = false;
    };
    MyDatePicker.prototype.onSelectMonthClicked = function (event) {
        event.stopPropagation();
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();
        if (this.selectMonth) {
            var today = this.getToday();
            this.months.length = 0;
            for (var i = 1; i <= 12; i += 3) {
                var row = [];
                for (var j = i; j < i + 3; j++) {
                    var disabled = this.utilService.isMonthDisabledByDisableUntil({ year: this.visibleMonth.year, month: j, day: this.daysInMonth(j, this.visibleMonth.year) }, this.opts.disableUntil)
                        || this.utilService.isMonthDisabledByDisableSince({ year: this.visibleMonth.year, month: j, day: 1 }, this.opts.disableSince);
                    row.push({ nbr: j, name: this.opts.monthLabels[j], currMonth: j === today.month && this.visibleMonth.year === today.year, selected: j === this.visibleMonth.monthNbr, disabled: disabled });
                }
                this.months.push(row);
            }
        }
    };
    MyDatePicker.prototype.onMonthCellClicked = function (cell) {
        var mc = cell.nbr !== this.visibleMonth.monthNbr;
        this.visibleMonth = { monthTxt: this.monthText(cell.nbr), monthNbr: cell.nbr, year: this.visibleMonth.year };
        this.generateCalendar(cell.nbr, this.visibleMonth.year, mc);
        this.selectMonth = false;
        this.selectorEl.nativeElement.focus();
    };
    MyDatePicker.prototype.onMonthCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onMonthCellClicked(cell);
        }
    };
    MyDatePicker.prototype.onSelectYearClicked = function (event) {
        event.stopPropagation();
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();
        if (this.selectYear) {
            this.generateYears(this.visibleMonth.year);
        }
    };
    MyDatePicker.prototype.onYearCellClicked = function (cell) {
        var yc = cell.year !== this.visibleMonth.year;
        this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: cell.year };
        this.generateCalendar(this.visibleMonth.monthNbr, cell.year, yc);
        this.selectYear = false;
        this.selectorEl.nativeElement.focus();
    };
    MyDatePicker.prototype.onYearCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onYearCellClicked(cell);
        }
    };
    MyDatePicker.prototype.onPrevYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(year - 25);
    };
    MyDatePicker.prototype.onNextYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(year + 25);
    };
    MyDatePicker.prototype.generateYears = function (year) {
        this.years.length = 0;
        var today = this.getToday();
        for (var i = year; i <= 20 + year; i += 5) {
            var row = [];
            for (var j = i; j < i + 5; j++) {
                var disabled = this.utilService.isMonthDisabledByDisableUntil({ year: j, month: this.visibleMonth.monthNbr, day: this.daysInMonth(this.visibleMonth.monthNbr, j) }, this.opts.disableUntil)
                    || this.utilService.isMonthDisabledByDisableSince({ year: j, month: this.visibleMonth.monthNbr, day: 1 }, this.opts.disableSince);
                var minMax = j < this.opts.minYear || j > this.opts.maxYear;
                row.push({ year: j, currYear: j === today.year, selected: j === this.visibleMonth.year, disabled: disabled || minMax });
            }
            this.years.push(row);
        }
        this.prevYearsDisabled = this.years[0][0].year <= this.opts.minYear || this.utilService.isMonthDisabledByDisableUntil({ year: this.years[0][0].year - 1, month: this.visibleMonth.monthNbr, day: this.daysInMonth(this.visibleMonth.monthNbr, this.years[0][0].year - 1) }, this.opts.disableUntil);
        this.nextYearsDisabled = this.years[4][4].year >= this.opts.maxYear || this.utilService.isMonthDisabledByDisableSince({ year: this.years[4][4].year + 1, month: this.visibleMonth.monthNbr, day: 1 }, this.opts.disableSince);
    };
    MyDatePicker.prototype.onUserDateInput = function (value) {
        if (value.length === 0) {
            if (this.utilService.isInitializedDate(this.selectedDate)) {
                this.clearDate();
            }
            else {
                this.invalidInputFieldChanged(value);
            }
        }
        else {
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (date.day !== 0 && date.month !== 0 && date.year !== 0) {
                if (!this.utilService.isSameDate(date, this.selectedDate)) {
                    this.selectDate(date, CalToggle.CloseByDateSel);
                }
                else {
                    this.updateDateValue(date, false);
                }
            }
            else {
                this.invalidInputFieldChanged(value);
            }
        }
    };
    MyDatePicker.prototype.onFocusInput = function (event) {
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
    };
    MyDatePicker.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    MyDatePicker.prototype.onCloseSelector = function (event) {
        if (event.keyCode === KeyCode.esc && this.showSelector && !this.opts.inline) {
            this.calendarToggle.emit(CalToggle.CloseByEsc);
            this.showSelector = false;
        }
    };
    MyDatePicker.prototype.invalidInputFieldChanged = function (value) {
        this.invalidDate = value.length > 0;
        this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: false });
        this.onChangeCb(null);
        this.onTouchedCb();
    };
    MyDatePicker.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    MyDatePicker.prototype.parseOptions = function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        var weekDays = this.utilService.getWeekDays();
        this.isTodayDisabled();
        this.dayIdx = weekDays.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var idx = this.dayIdx;
            for (var i = 0; i < weekDays.length; i++) {
                this.weekDays.push(this.opts.dayLabels[weekDays[idx]]);
                idx = weekDays[idx] === "sa" ? 0 : idx + 1;
            }
        }
    };
    MyDatePicker.prototype.writeValue = function (value) {
        if (value && (value["date"] || value["jsdate"] || value["formatted"])) {
            this.selectedDate = value["date"] ? this.parseSelectedDate(value["date"]) : value["jsdate"] ? this.parseSelectedDate(this.jsDateToMyDate(value["jsdate"])) : this.parseSelectedDate(value["formatted"]);
            var cvc = this.visibleMonth.year !== this.selectedDate.year || this.visibleMonth.monthNbr !== this.selectedDate.month;
            if (cvc) {
                this.visibleMonth = { monthTxt: this.opts.monthLabels[this.selectedDate.month], monthNbr: this.selectedDate.month, year: this.selectedDate.year };
                this.generateCalendar(this.selectedDate.month, this.selectedDate.year, cvc);
            }
            if (!this.opts.inline) {
                this.updateDateValue(this.selectedDate, false);
            }
        }
        else if (value === null || value === "") {
            if (!this.opts.inline) {
                this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
            }
            else {
                this.selectedDate = { year: 0, month: 0, day: 0 };
            }
        }
    };
    MyDatePicker.prototype.setDisabledState = function (disabled) {
        this.opts.componentDisabled = disabled;
    };
    MyDatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    MyDatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    MyDatePicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty("selector")) {
            var s = changes["selector"].currentValue;
            if (typeof s === "object") {
                if (s.open) {
                    this.showSelector = true;
                    this.openSelector(CalToggle.Open);
                }
                else {
                    this.showSelector = false;
                    this.closeSelector(CalToggle.CloseByApi);
                }
            }
            else if (s > 0) {
                this.openBtnClicked();
            }
        }
        if (changes.hasOwnProperty("placeholder")) {
            this.placeholder = changes["placeholder"].currentValue;
        }
        if (changes.hasOwnProperty("locale")) {
            this.locale = changes["locale"].currentValue;
        }
        if (changes.hasOwnProperty("disabled")) {
            this.disabled = changes["disabled"].currentValue;
        }
        if (changes.hasOwnProperty("options")) {
            this.options = changes["options"].currentValue;
        }
        this.weekDays.length = 0;
        this.parseOptions();
        var dmChange = false;
        if (changes.hasOwnProperty("defaultMonth")) {
            var dm = changes["defaultMonth"].currentValue;
            if (typeof dm === "object") {
                dm = dm.defMonth;
            }
            if (dm !== null && dm !== undefined && dm !== "") {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: "", monthNbr: 0, year: 0 };
            }
            dmChange = true;
        }
        if (changes.hasOwnProperty("selDate")) {
            var sd = changes["selDate"];
            if (sd.currentValue !== null && sd.currentValue !== undefined && sd.currentValue !== "" && Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                });
            }
            else {
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.visibleMonth.year === 0 && this.visibleMonth.monthNbr === 0 || dmChange) {
            this.setVisibleMonth();
        }
        else {
            this.visibleMonth.monthTxt = this.opts.monthLabels[this.visibleMonth.monthNbr];
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    MyDatePicker.prototype.removeBtnClicked = function () {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.showSelector = false;
    };
    MyDatePicker.prototype.onDecreaseBtnClicked = function () {
        this.decreaseIncreaseDate(true);
    };
    MyDatePicker.prototype.onIncreaseBtnClicked = function () {
        this.decreaseIncreaseDate(false);
    };
    MyDatePicker.prototype.openBtnClicked = function () {
        this.showSelector = !this.showSelector;
        this.cdr.detectChanges();
        if (this.showSelector) {
            this.openSelector(CalToggle.Open);
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
    };
    MyDatePicker.prototype.openSelector = function (reason) {
        this.setVisibleMonth();
        this.calendarToggle.emit(reason);
    };
    MyDatePicker.prototype.closeSelector = function (reason) {
        this.calendarToggle.emit(reason);
    };
    MyDatePicker.prototype.setVisibleMonth = function () {
        var y = 0, m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onPrevMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onNextMonth = function () {
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onPrevYear = function () {
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MyDatePicker.prototype.onNextYear = function () {
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MyDatePicker.prototype.onTodayClicked = function () {
        var today = this.getToday();
        this.selectDate(today, CalToggle.CloseByDateSel);
        if (this.opts.inline && today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    MyDatePicker.prototype.onCellClicked = function (cell) {
        if (cell.cmo === this.prevMonthId) {
            this.onPrevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            if (this.opts.allowDeselectDate && this.utilService.isSameDate(cell.dateObj, this.selectedDate)) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj, CalToggle.CloseByDateSel);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            this.onNextMonth();
        }
        this.resetMonthYearSelect();
    };
    MyDatePicker.prototype.onCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onCellClicked(cell);
        }
    };
    MyDatePicker.prototype.clearDate = function () {
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: "", epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.setFocusToInputBox();
    };
    MyDatePicker.prototype.decreaseIncreaseDate = function (decrease) {
        var date = this.selectedDate;
        if (this.utilService.isInitializedDate(date)) {
            var d = this.getDate(date.year, date.month, date.day);
            d.setDate(decrease ? d.getDate() - 1 : d.getDate() + 1);
            date = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        }
        else {
            date = this.getToday();
        }
        this.selectDate(date, CalToggle.CloseByCalBtn);
    };
    MyDatePicker.prototype.selectDate = function (date, closeReason) {
        var dateModel = this.getDateModel(date);
        this.dateChanged.emit(dateModel);
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(closeReason);
        }
        this.showSelector = false;
        this.setFocusToInputBox();
    };
    MyDatePicker.prototype.setFocusToInputBox = function () {
        var _this = this;
        if (!this.opts.inline && this.opts.showInputField) {
            setTimeout(function () {
                _this.inputBoxEl.nativeElement.focus();
            }, 100);
        }
    };
    MyDatePicker.prototype.updateDateValue = function (date, clear) {
        this.selectedDate = date;
        this.selectionDayTxt = clear ? "" : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    };
    MyDatePicker.prototype.getDateModel = function (date) {
        return { date: date, jsdate: this.getDate(date.year, date.month, date.day), formatted: this.formatDate(date), epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0) };
    };
    MyDatePicker.prototype.preZero = function (val) {
        return parseInt(val) < 10 ? "0" + val : val;
    };
    MyDatePicker.prototype.formatDate = function (val) {
        var formatted = this.opts.dateFormat.replace(YYYY, val.year).replace(DD, this.preZero(val.day));
        return this.opts.dateFormat.indexOf(MMM) !== -1 ? formatted.replace(MMM, this.monthText(val.month)) : formatted.replace(MM, this.preZero(val.month));
    };
    MyDatePicker.prototype.monthText = function (m) {
        return this.opts.monthLabels[m];
    };
    MyDatePicker.prototype.monthStartIdx = function (y, m) {
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    MyDatePicker.prototype.daysInMonth = function (m, y) {
        return new Date(y, m, 0).getDate();
    };
    MyDatePicker.prototype.daysInPrevMonth = function (m, y) {
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    MyDatePicker.prototype.isCurrDay = function (d, m, y, cmo, today) {
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    MyDatePicker.prototype.getToday = function () {
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MyDatePicker.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    MyDatePicker.prototype.getWeekday = function (date) {
        var weekDays = this.utilService.getWeekDays();
        return weekDays[this.utilService.getDayNumber(date)];
    };
    MyDatePicker.prototype.getDate = function (year, month, day) {
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    MyDatePicker.prototype.sundayIdx = function () {
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    MyDatePicker.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var today = this.getToday();
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var dayNbr = 1;
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                var pm = dInPrevM - monthStart + 1;
                for (var j = pm; j <= dInPrevM; j++) {
                    var date = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                }
                cmo = this.currMonthId;
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                    dayNbr++;
                }
            }
            else {
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    var date = { year: cmo === this.nextMonthId && m === 12 ? y + 1 : y, month: cmo === this.currMonthId ? m : cmo === this.nextMonthId && m < 12 ? m + 1 : 1, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                    dayNbr++;
                }
            }
            var weekNbr = this.opts.showWeekNumbers && this.opts.firstDayOfWeek === "mo" ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            this.calendarViewChanged.emit({ year: y, month: m, first: { number: 1, weekday: this.getWeekday({ year: y, month: m, day: 1 }) }, last: { number: dInThisM, weekday: this.getWeekday({ year: y, month: m, day: dInThisM }) } });
        }
    };
    MyDatePicker.prototype.parseSelectedDate = function (selDate) {
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === "string") {
            var sd = selDate;
            var df = this.opts.dateFormat;
            date.month = df.indexOf(MMM) !== -1
                ? this.utilService.parseDatePartMonthName(df, sd, MMM, this.opts.monthLabels)
                : this.utilService.parseDatePartNumber(df, sd, MM);
            if (df.indexOf(MMM) !== -1 && this.opts.monthLabels[date.month]) {
                df = this.utilService.changeDateFormat(df, this.opts.monthLabels[date.month].length);
            }
            date.day = this.utilService.parseDatePartNumber(df, sd, DD);
            date.year = this.utilService.parseDatePartNumber(df, sd, YYYY);
        }
        else if (typeof selDate === "object") {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    MyDatePicker.prototype.jsDateToMyDate = function (date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MyDatePicker.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    MyDatePicker.prototype.setHeaderBtnDisabledState = function (m, y) {
        var dpm = false;
        var dpy = false;
        var dnm = false;
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({ year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y) }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({ year: y - 1, month: m, day: this.daysInMonth(m, y - 1) }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({ year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1 }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    MyDatePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: "my-date-picker",
                    exportAs: "mydatepicker",
                    styles: [".mydp .headertodaybtn,.mydp .monthcell,.mydp .selection,.mydp .weekdaytitle{overflow:hidden;white-space:nowrap}.mydp{line-height:1.1;display:inline-block;position:relative}.mydp *{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;padding:0;margin:0}.mydp,.mydp .headertodaybtn,.mydp .selection,.mydp .selectiongroup,.mydp .selector{border-radius:4px}.mydp .header{border-radius:4px 4px 0 0}.mydp .caltable,.mydp .monthtable,.mydp .yeartable{border-radius:0 0 4px 4px}.mydp .caltable tbody tr:nth-child(6) td:first-child,.mydp .monthtable tbody tr:nth-child(4) td:first-child,.mydp .yeartable tbody tr:nth-child(7) td:first-child{border-bottom-left-radius:4px}.mydp .caltable tbody tr:nth-child(6) td:last-child,.mydp .monthtable tbody tr:nth-child(4) td:last-child,.mydp .yeartable tbody tr:nth-child(7) td:last-child{border-bottom-right-radius:4px}.mydp .btnpicker{border-radius:0 4px 4px 0}.mydp .btnleftborderradius{border-top-left-radius:4px;border-bottom-left-radius:4px}.mydp .selector{margin-top:2px;margin-left:-1px;position:absolute;padding:0;border:1px solid #CCC;z-index:100;animation:selectorfadein .1s}.mydp .selector:focus{border:1px solid #ADD8E6;outline:0}@keyframes selectorfadein{from{opacity:0}to{opacity:1}}.mydp .selectorarrow{background:#FAFAFA;margin-top:12px;padding:0}.mydp .selectorarrow:after,.mydp .selectorarrow:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute}.mydp .selectorarrow:after{border-color:rgba(250,250,250,0);border-bottom-color:#FAFAFA;border-width:10px;margin-left:-10px}.mydp .selectorarrow:before{border-color:rgba(204,204,204,0);border-bottom-color:#CCC;border-width:11px;margin-left:-11px}.mydp .selectorarrow:focus:before{border-bottom-color:#ADD8E6}.mydp .selectorarrowleft:after,.mydp .selectorarrowleft:before{left:24px}.mydp .selectorarrowright:after,.mydp .selectorarrowright:before{left:86%}.mydp .alignselectorright{right:-1px}.mydp .selectiongroup{position:relative;display:table;border:none;border-spacing:0;background-color:#FFF}.mydp .selection{width:100%;outline:0;background-color:#FFF;display:table-cell;position:absolute;text-overflow:ellipsis;padding-left:6px;border:none;color:#555}.mydp .invaliddate{background-color:#F1DEDE}.mydp ::-ms-clear{display:none}.mydp .headerbtncell,.mydp .selbtngroup{display:table-cell;vertical-align:middle}.mydp .selbtngroup{position:relative;white-space:nowrap;width:1%;font-size:0}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker{height:100%;width:26px;border:none;padding:0;outline:0;font:inherit;-moz-user-select:none}.mydp .btnleftborder{border-left:1px solid #CCC}.mydp .btnclearenabled,.mydp .btndecreaseenabled,.mydp .btnincreaseenabled,.mydp .btnpickerenabled,.mydp .headerbtnenabled,.mydp .headertodaybtnenabled,.mydp .yearchangebtnenabled{cursor:pointer}.mydp .btncleardisabled,.mydp .btndecreasedisabled,.mydp .btnincreasedisabled,.mydp .btnpickerdisabled,.mydp .headerbtndisabled,.mydp .headertodaybtndisabled,.mydp .selectiondisabled,.mydp .yearchangebtndisabled{cursor:not-allowed;opacity:.65}.mydp .selectiondisabled{background-color:#EEE}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker,.mydp .headertodaybtn{background:#FFF}.mydp .header{width:100%;height:30px;background-color:#FAFAFA}.mydp .header td{vertical-align:middle;border:none;line-height:0}.mydp .header td:nth-child(1){padding-left:4px}.mydp .header td:nth-child(2){text-align:center}.mydp .header td:nth-child(3){padding-right:4px}.mydp .caltable,.mydp .monthtable,.mydp .yeartable{table-layout:fixed;width:100%;height:calc(100% - 30px);background-color:#FFF;font-size:14px}.mydp .caltable,.mydp .daycell,.mydp .monthcell,.mydp .monthtable,.mydp .weekdaytitle,.mydp .yearcell,.mydp .yeartable{border-collapse:collapse;color:#036;line-height:1.1}.mydp .daycell,.mydp .monthcell,.mydp .weekdaytitle,.mydp .yearcell{padding:4px;text-align:center}.mydp .weekdaytitle{background-color:#DDD;font-size:11px;font-weight:400;vertical-align:middle;max-width:36px}.mydp .weekdaytitleweeknbr{width:20px;border-right:1px solid #BBB}.mydp .monthcell{background-color:#FAFAFA}.mydp .yearcell{background-color:#FAFAFA;width:20%}.mydp .daycell .datevalue{background-color:inherit;vertical-align:middle}.mydp .daycell .datevalue span{vertical-align:middle}.mydp .daycellweeknbr{font-size:10px;border-right:1px solid #CCC;cursor:default;color:#000}.mydp .inlinedp{position:relative;margin-top:-1px}.mydp .nextmonth,.mydp .prevmonth{color:#CCC}.mydp .disabled{cursor:default!important;color:#CCC;background:#FBEFEF}.mydp .highlight{color:#C30000}.mydp .dimday{opacity:.5}.mydp .currmonth{background-color:#F6F6F6;font-weight:400}.mydp .markdate{position:absolute;width:4px;height:4px;border-radius:4px}.mydp .markcurrday,.mydp .markcurrmonth,.mydp .markcurryear{text-decoration:underline}.mydp .selectedday .datevalue,.mydp .selectedmonth .monthvalue,.mydp .selectedyear .yearvalue{border:none;background-color:#8EBFFF;border-radius:2px}.mydp .headerbtncell{background-color:#FAFAFA}.mydp .yearchangebtncell{text-align:center;background-color:#FAFAFA}.mydp .headerbtn,.mydp .headerlabelbtn,.mydp .yearchangebtn{background:#FAFAFA;border:none;height:22px}.mydp .headerbtn{width:16px}.mydp .headerlabelbtn{font-size:14px;outline:0;cursor:default}.mydp,.mydp .headertodaybtn{border:1px solid #CCC}.mydp .btnclear,.mydp .btndecrease,.mydp .btnincrease,.mydp .btnpicker,.mydp .headerbtn,.mydp .headermonthtxt,.mydp .headertodaybtn,.mydp .headeryeartxt,.mydp .yearchangebtn{color:#000}.mydp .headertodaybtn{padding:0 4px;font-size:11px;height:22px;min-width:60px;max-width:84px}.mydp button::-moz-focus-inner{border:0}.mydp .headermonthtxt,.mydp .headeryeartxt{text-align:center;display:table-cell;vertical-align:middle;font-size:14px;height:26px;width:40px;max-width:40px;overflow:hidden;white-space:nowrap}.mydp .btnclear:focus,.mydp .btndecrease:focus,.mydp .btnincrease:focus,.mydp .btnpicker:focus,.mydp .headertodaybtn:focus{background:#ADD8E6}.mydp .headerbtn:focus,.mydp .monthlabel:focus,.mydp .yearchangebtn:focus,.mydp .yearlabel:focus{color:#ADD8E6;outline:0}.mydp .daycell:focus,.mydp .monthcell:focus,.mydp .yearcell:focus{outline:#CCC solid 1px}.mydp .icon-mydpcalendar,.mydp .icon-mydpremove{font-size:16px}.mydp .icon-mydpdown,.mydp .icon-mydpleft,.mydp .icon-mydpright,.mydp .icon-mydpup{color:#222;font-size:20px}.mydp .btndecrease .icon-mydpleft,.mydp .btnincrease .icon-mydpright{font-size:16px}.mydp .icon-mydptoday{color:#222;font-size:11px}.mydp table{display:table;border-spacing:0}.mydp table td{padding:0}.mydp table,.mydp td,.mydp th{border:none}.mydp .btnclearenabled:hover,.mydp .btndecreaseenabled:hover,.mydp .btnincreaseenabled:hover,.mydp .btnpickerenabled:hover,.mydp .headertodaybtnenabled:hover{background-color:#E6E6E6}.mydp .tablesingleday:hover,.mydp .tablesinglemonth:hover,.mydp .tablesingleyear:hover{background-color:#DDD}.mydp .daycell,.mydp .inputnoteditable,.mydp .monthcell,.mydp .monthlabel,.mydp .yearcell,.mydp .yearlabel{cursor:pointer}.mydp .headerbtnenabled:hover,.mydp .monthlabel:hover,.mydp .yearchangebtnenabled:hover,.mydp .yearlabel:hover{color:#777}@font-face{font-family:mydatepicker;src:url(data:application/octet-stream;base64,AAEAAAAPAIAAAwBwR1NVQiCMJXkAAAD8AAAAVE9TLzI+IEhNAAABUAAAAFZjbWFw6UKcfwAAAagAAAHEY3Z0IAbV/wQAAAz8AAAAIGZwZ22KkZBZAAANHAAAC3BnYXNwAAAAEAAADPQAAAAIZ2x5Zqbn7ycAAANsAAAFXGhlYWQNX0bLAAAIyAAAADZoaGVhBzwDWQAACQAAAAAkaG10eBXB//8AAAkkAAAAIGxvY2EGNATEAAAJRAAAABJtYXhwAXgMOgAACVgAAAAgbmFtZZKUFgMAAAl4AAAC/XBvc3R9NuZlAAAMeAAAAHpwcmVw5UErvAAAGIwAAACGAAEAAAAKADAAPgACbGF0bgAOREZMVAAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAECuAGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQOgA6AYDUv9qAFoDUgCWAAAAAQAAAAAAAAAAAAUAAAADAAAALAAAAAQAAAFgAAEAAAAAAFoAAwABAAAALAADAAoAAAFgAAQALgAAAAQABAABAADoBv//AADoAP//AAAAAQAEAAAAAQACAAMABAAFAAYABwAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAZAAAAAAAAAAHAADoAAAA6AAAAAABAADoAQAA6AEAAAACAADoAgAA6AIAAAADAADoAwAA6AMAAAAEAADoBAAA6AQAAAAFAADoBQAA6AUAAAAGAADoBgAA6AYAAAAHAAEAAAAAAUECfQAOAAq3AAAAZhQBBRUrARQPAQYiJjURND4BHwEWAUEK+gscFhYcC/oKAV4OC/oLFg4B9A8UAgz6CgAAAQAAAAABZwJ8AA0AF0AUAAEAAQFHAAEAAW8AAABmFxMCBRYrAREUBiIvASY0PwE2MhYBZRQgCfoKCvoLHBgCWP4MDhYL+gscC/oLFgAAAAAFAAD/agOhA1IAFAAYACgAOABcALdAECoaAgoFMiICBgoNAQABA0dLsApQWEA/DgwCCgUGBgplAAIEAQQCAW0AAQAEAQBrAAADBAADawgBBgAEAgYEXwcBBQULWA0BCwsMSAADAwlYAAkJDQlJG0BADgwCCgUGBQoGbQACBAEEAgFtAAEABAEAawAAAwQAA2sIAQYABAIGBF8HAQUFC1gNAQsLDEgAAwMJWAAJCQ0JSVlAGFtZVlNQT0xJRkQ/PCYmJiQRFRQXEg8FHSsJAQYiLwEmND8BNjIfATc2Mh8BFhQBIREhNzU0JisBIgYdARQWOwEyNiU1NCYrASIGHQEUFjsBMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhYC1/7iBQ4GoQUFGgUOBnv3Bg4GGQX9awMS/O7XCggkCAoKCCQICgGsCggjCAoKCCMICtcsHPzuHSoqHUg0JSQlNNY2JCMlNgFHHSoBOP7iBQWhBg4FGgUFe/gFBRoFDv5zAjxroQgKCgihCAoKCKEICgoIoQgKCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAAPAAD/agOhA1IAAwAHAAsADwATABcAGwAfACMAMwA3ADsAPwBPAHMAmECVQSUCHRJJLSQDEx0CRyEfAh0TCR1UGwETGRcNAwkIEwlfGBYMAwgVEQcDBQQIBV4UEAYDBA8LAwMBAAQBXhoBEhIeWCABHh4MSA4KAgMAABxYABwcDRxJcnBtamdmY2BdW1ZTTUxFRD8+PTw7Ojk4NzY1NDEvKScjIiEgHx4dHBsaGRgXFhUUExIRERERERERERAiBR0rFzM1IxczNSMnMzUjFzM1IyczNSMBMzUjJzM1IwEzNSMnMzUjAzU0JicjIgYHFRQWNzMyNgEzNSMnMzUjFzM1Izc1NCYnIyIGFxUUFjczMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhZHoaHFsrLFoaHFsrLFoaEBm7Oz1rKyAayhodazs8QMBiQHCgEMBiQHCgGboaHWs7PWoaESCggjBwwBCggjCArXLBz87h0qKh1INCUkJTTWNiQjJTYBRx0qT6GhoSSysrIkof3Eofqh/cShJLIBMKEHCgEMBqEHDAEK/iayJKGhoWuhBwoBDAahBwwBCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAH//wAAAjsByQAOABFADgABAAFvAAAAZhUyAgUWKyUUBichIi4BPwE2Mh8BFgI7FA/+DA8UAgz6Ch4K+gqrDhYBFB4L+goK+gsAAAABAAAAAAI8Ae0ADgAXQBQAAQABAUcAAQABbwAAAGY1FAIFFisBFA8BBiIvASY0NjMhMhYCOwr6CxwL+gsWDgH0DhYByQ4L+gsL+gscFhYAAAEAAP/vAtQChgAkAB5AGyIZEAcEAAIBRwMBAgACbwEBAABmFBwUFAQFGCslFA8BBiIvAQcGIi8BJjQ/AScmND8BNjIfATc2Mh8BFhQPARcWAtQPTBAsEKSkECwQTBAQpKQQEEwQLBCkpBAsEEwPD6SkD3AWEEwPD6WlDw9MECwQpKQQLBBMEBCkpBAQTA8uD6SkDwABAAAAAQAAbdyczV8PPPUACwPoAAAAANUsgZUAAAAA1SyBlf///2oD6ANSAAAACAACAAAAAAAAAAEAAANS/2oAAAPo/////gPoAAEAAAAAAAAAAAAAAAAAAAAIA+gAAAFlAAABZQAAA+gAAAOgAAACO///AjsAAAMRAAAAAAAAACIASgEoAhYCPAJkAq4AAAABAAAACAB0AA8AAAAAAAIARABUAHMAAACpC3AAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEADAA1AAEAAAAAAAIABwBBAAEAAAAAAAMADABIAAEAAAAAAAQADABUAAEAAAAAAAUACwBgAAEAAAAAAAYADABrAAEAAAAAAAoAKwB3AAEAAAAAAAsAEwCiAAMAAQQJAAAAagC1AAMAAQQJAAEAGAEfAAMAAQQJAAIADgE3AAMAAQQJAAMAGAFFAAMAAQQJAAQAGAFdAAMAAQQJAAUAFgF1AAMAAQQJAAYAGAGLAAMAAQQJAAoAVgGjAAMAAQQJAAsAJgH5Q29weXJpZ2h0IChDKSAyMDE3IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21teWRhdGVwaWNrZXJSZWd1bGFybXlkYXRlcGlja2VybXlkYXRlcGlja2VyVmVyc2lvbiAxLjBteWRhdGVwaWNrZXJHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADEANwAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AbQB5AGQAYQB0AGUAcABpAGMAawBlAHIAUgBlAGcAdQBsAGEAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAbQB5AGQAYQB0AGUAcABpAGMAawBlAHIARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAQMBBAEFAQYBBwEIAQkACW15ZHByaWdodAhteWRwbGVmdAlteWRwdG9kYXkMbXlkcGNhbGVuZGFyBm15ZHB1cAhteWRwZG93bgpteWRwcmVtb3ZlAAAAAAABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAYABgAGAAYA1L/agNS/2qwACwgsABVWEVZICBLuAAOUUuwBlNaWLA0G7AoWWBmIIpVWLACJWG5CAAIAGNjI2IbISGwAFmwAEMjRLIAAQBDYEItsAEssCBgZi2wAiwgZCCwwFCwBCZasigBCkNFY0VSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQpDRWNFYWSwKFBYIbEBCkNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ABK1lZI7AAUFhlWVktsAMsIEUgsAQlYWQgsAVDUFiwBSNCsAYjQhshIVmwAWAtsAQsIyEjISBksQViQiCwBiNCsQEKQ0VjsQEKQ7ABYEVjsAMqISCwBkMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZISCwQFNYsAErGyGwQFkjsABQWGVZLbAFLLAHQyuyAAIAQ2BCLbAGLLAHI0IjILAAI0JhsAJiZrABY7ABYLAFKi2wBywgIEUgsAtDY7gEAGIgsABQWLBAYFlmsAFjYESwAWAtsAgssgcLAENFQiohsgABAENgQi2wCSywAEMjRLIAAQBDYEItsAosICBFILABKyOwAEOwBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAssICBFILABKyOwAEOwBCVgIEWKI2EgZLAkUFiwABuwQFkjsABQWGVZsAMlI2FERLABYC2wDCwgsAAjQrILCgNFWCEbIyFZKiEtsA0ssQICRbBkYUQtsA4ssAFgICCwDENKsABQWCCwDCNCWbANQ0qwAFJYILANI0JZLbAPLCCwEGJmsAFjILgEAGOKI2GwDkNgIIpgILAOI0IjLbAQLEtUWLEEZERZJLANZSN4LbARLEtRWEtTWLEEZERZGyFZJLATZSN4LbASLLEAD0NVWLEPD0OwAWFCsA8rWbAAQ7ACJUKxDAIlQrENAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAOKiEjsAFhIIojYbAOKiEbsQEAQ2CwAiVCsAIlYbAOKiFZsAxDR7ANQ0dgsAJiILAAUFiwQGBZZrABYyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wEywAsQACRVRYsA8jQiBFsAsjQrAKI7ABYEIgYLABYbUQEAEADgBCQopgsRIGK7ByKxsiWS2wFCyxABMrLbAVLLEBEystsBYssQITKy2wFyyxAxMrLbAYLLEEEystsBkssQUTKy2wGiyxBhMrLbAbLLEHEystsBwssQgTKy2wHSyxCRMrLbAeLACwDSuxAAJFVFiwDyNCIEWwCyNCsAojsAFgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHIrGyJZLbAfLLEAHistsCAssQEeKy2wISyxAh4rLbAiLLEDHistsCMssQQeKy2wJCyxBR4rLbAlLLEGHistsCYssQceKy2wJyyxCB4rLbAoLLEJHistsCksIDywAWAtsCosIGCwEGAgQyOwAWBDsAIlYbABYLApKiEtsCsssCorsCoqLbAsLCAgRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOCMgilVYIEcgILALQ2O4BABiILAAUFiwQGBZZrABY2AjYTgbIVktsC0sALEAAkVUWLABFrAsKrABFTAbIlktsC4sALANK7EAAkVUWLABFrAsKrABFTAbIlktsC8sIDWwAWAtsDAsALABRWO4BABiILAAUFiwQGBZZrABY7ABK7ALQ2O4BABiILAAUFiwQGBZZrABY7ABK7AAFrQAAAAAAEQ+IzixLwEVKi2wMSwgPCBHILALQ2O4BABiILAAUFiwQGBZZrABY2CwAENhOC2wMiwuFzwtsDMsIDwgRyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsABDYbABQ2M4LbA0LLECABYlIC4gR7AAI0KwAiVJiopHI0cjYSBYYhshWbABI0KyMwEBFRQqLbA1LLAAFrAEJbAEJUcjRyNhsAlDK2WKLiMgIDyKOC2wNiywABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyCwCEMgiiNHI0cjYSNGYLAEQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBENgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA3LLAAFiAgILAFJiAuRyNHI2EjPDgtsDgssAAWILAII0IgICBGI0ewASsjYTgtsDkssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA6LLAAFiCwCEMgLkcjRyNhIGCwIGBmsAJiILAAUFiwQGBZZrABYyMgIDyKOC2wOywjIC5GsAIlRlJYIDxZLrErARQrLbA8LCMgLkawAiVGUFggPFkusSsBFCstsD0sIyAuRrACJUZSWCA8WSMgLkawAiVGUFggPFkusSsBFCstsD4ssDUrIyAuRrACJUZSWCA8WS6xKwEUKy2wPyywNiuKICA8sAQjQoo4IyAuRrACJUZSWCA8WS6xKwEUK7AEQy6wKystsEAssAAWsAQlsAQmIC5HI0cjYbAJQysjIDwgLiM4sSsBFCstsEEssQgEJUKwABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyBHsARDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxKwEUKy2wQiywNSsusSsBFCstsEMssDYrISMgIDywBCNCIzixKwEUK7AEQy6wKystsEQssAAVIEewACNCsgABARUUEy6wMSotsEUssAAVIEewACNCsgABARUUEy6wMSotsEYssQABFBOwMiotsEcssDQqLbBILLAAFkUjIC4gRoojYTixKwEUKy2wSSywCCNCsEgrLbBKLLIAAEErLbBLLLIAAUErLbBMLLIBAEErLbBNLLIBAUErLbBOLLIAAEIrLbBPLLIAAUIrLbBQLLIBAEIrLbBRLLIBAUIrLbBSLLIAAD4rLbBTLLIAAT4rLbBULLIBAD4rLbBVLLIBAT4rLbBWLLIAAEArLbBXLLIAAUArLbBYLLIBAEArLbBZLLIBAUArLbBaLLIAAEMrLbBbLLIAAUMrLbBcLLIBAEMrLbBdLLIBAUMrLbBeLLIAAD8rLbBfLLIAAT8rLbBgLLIBAD8rLbBhLLIBAT8rLbBiLLA3Ky6xKwEUKy2wYyywNyuwOystsGQssDcrsDwrLbBlLLAAFrA3K7A9Ky2wZiywOCsusSsBFCstsGcssDgrsDsrLbBoLLA4K7A8Ky2waSywOCuwPSstsGossDkrLrErARQrLbBrLLA5K7A7Ky2wbCywOSuwPCstsG0ssDkrsD0rLbBuLLA6Ky6xKwEUKy2wbyywOiuwOystsHAssDorsDwrLbBxLLA6K7A9Ky2wciyzCQQCA0VYIRsjIVlCK7AIZbADJFB4sAEVMC0AS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAVCsgABACqxAAVCswoCAQgqsQAFQrMOAAEIKrEABkK6AsAAAQAJKrEAB0K6AEAAAQAJKrEDAESxJAGIUViwQIhYsQNkRLEmAYhRWLoIgAABBECIY1RYsQMARFlZWVmzDAIBDCq4Af+FsASNsQIARAAA) format('truetype');font-weight:400;font-style:normal}.mydp .mydpicon{font-family:mydatepicker;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mydp .icon-mydpright:before{content:\"\\e800\"}.mydp .icon-mydpleft:before{content:\"\\e801\"}.mydp .icon-mydptoday:before{content:\"\\e802\"}.mydp .icon-mydpcalendar:before{content:\"\\e803\"}.mydp .icon-mydpup:before{content:\"\\e804\"}.mydp .icon-mydpdown:before{content:\"\\e805\"}.mydp .icon-mydpremove:before{content:\"\\e806\"}"],
                    template: "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\"><div class=\"selectiongroup\" *ngIf=\"!opts.inline\"><input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\" placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\" (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\"><div class=\"selbtngroup\" [style.height]=\"opts.height\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpleft\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpright\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpremove\"></span></button> <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\"><span class=\"mydpicon icon-mydpcalendar\"></span></button></div></div><div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\"><table class=\"header\"><tr><td><div style=\"float:left\"><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div><div class=\"headermonthtxt\"><button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button></div><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div></div></td><td><button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\"><span class=\"mydpicon icon-mydptoday\"></span> <span>{{opts.todayBtnTxt}}</span></button></td><td><div style=\"float:right\"><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div><div class=\"headeryeartxt\"><button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button></div><div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div></div></td></tr></table><table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\"><thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead><tbody><tr *ngFor=\"let w of dates\"><td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td><td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\"><div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div><div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\"><span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span></div></td></tr></tbody></table><table class=\"monthtable\" *ngIf=\"selectMonth\"><tbody><tr *ngFor=\"let mr of months\"><td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\"><div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div></td></tr></tbody></table><table class=\"yeartable\" *ngIf=\"selectYear\"><tbody><tr><td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\"><button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button></td></tr><tr *ngFor=\"let yr of years\"><td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\"><div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div></td></tr><tr><td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\"><button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button></td></tr></tbody></table></div></div>",
                    providers: [__WEBPACK_IMPORTED_MODULE_2__services_my_date_picker_locale_service__["a" /* LocaleService */], __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_util_service__["a" /* UtilService */], MYDP_VALUE_ACCESSOR],
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    MyDatePicker.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__services_my_date_picker_locale_service__["a" /* LocaleService */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_util_service__["a" /* UtilService */], },
    ];
    MyDatePicker.propDecorators = {
        'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'locale': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'defaultMonth': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selDate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'selector': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'disabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'inputFieldChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'calendarViewChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'calendarToggle': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'inputFocusBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'selectorEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["selectorEl",] },],
        'inputBoxEl': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ["inputBoxEl",] },],
    };
    return MyDatePicker;
}());
//# sourceMappingURL=my-date-picker.component.js.map

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var forms_1 = __webpack_require__(20);
var select_component_1 = __webpack_require__(1090);
var select_dropdown_component_1 = __webpack_require__(1087);
var SelectModule = (function () {
    function SelectModule() {
    }
    SelectModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        select_component_1.SelectComponent,
                        select_dropdown_component_1.SelectDropdownComponent
                    ],
                    exports: [
                        select_component_1.SelectComponent
                    ],
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule
                    ]
                },] },
    ];
    /** @nocollapse */
    SelectModule.ctorParameters = function () { return []; };
    return SelectModule;
}());
exports.SelectModule = SelectModule;


/***/ }),

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Diacritics = (function () {
    function Diacritics() {
    }
    Diacritics.strip = function (text) {
        var _this = this;
        var match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    Diacritics.DIACRITICS = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    return Diacritics;
}());
exports.Diacritics = Diacritics;


/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var option_1 = __webpack_require__(1084);
var diacritics_1 = __webpack_require__(1082);
var OptionList = (function () {
    function OptionList(options) {
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        this._highlightedOption = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            var o = new option_1.Option(option.value, option.label);
            if (option.disabled) {
                o.disable();
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
    };
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.filter = function (term) {
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                var l = diacritics_1.Diacritics.strip(option.label).toUpperCase();
                var t = diacritics_1.Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        var toEmpty = this.hasShown && !anyShown;
        this.highlight();
        this._hasShown = anyShown;
        return toEmpty;
    };
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.highlight = function () {
        var option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    OptionList.prototype.highlightNextOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    OptionList.prototype.highlightPreviousOption = function () {
        var shownOptions = this.filtered;
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /** Util. **/
        get: function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    OptionList.prototype.hasSelected = function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        return null;
    };
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        return null;
    };
    // v0 and v1 are assumed not to be undefined or null.
    OptionList.equalValues = function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        var a = v0.slice().sort();
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    return OptionList;
}());
exports.OptionList = OptionList;


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Option = (function () {
    function Option(value, label) {
        this.value = value;
        this.label = label;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
    }
    Option.prototype.show = function () {
        this.shown = true;
    };
    Option.prototype.hide = function () {
        this.shown = false;
    };
    Option.prototype.disable = function () {
        this.disabled = true;
    };
    Option.prototype.enable = function () {
        this.disabled = false;
    };
    Option.prototype.undecoratedCopy = function () {
        return {
            label: this.label,
            value: this.value
        };
    };
    return Option;
}());
exports.Option = Option;


/***/ }),

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.STYLE = "select-dropdown {\n  box-sizing: border-box;\n  font-family: Sans-Serif; }\n  select-dropdown * {\n    box-sizing: border-box;\n    font-family: Sans-Serif; }\n  select-dropdown > div {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    border-top: none;\n    box-sizing: border-box;\n    position: absolute;\n    z-index: 1; }\n    select-dropdown > div .filter {\n      padding: 3px;\n      width: 100%; }\n      select-dropdown > div .filter input {\n        border: 1px solid #eee;\n        box-sizing: border-box;\n        padding: 4px;\n        width: 100%; }\n    select-dropdown > div .options {\n      max-height: 200px;\n      overflow-y: auto; }\n      select-dropdown > div .options ul {\n        list-style: none;\n        margin: 0;\n        padding: 0; }\n        select-dropdown > div .options ul li {\n          padding: 4px 8px;\n          cursor: pointer;\n          user-select: none; }\n  select-dropdown .selected {\n    background-color: #e0e0e0; }\n    select-dropdown .selected.highlighted {\n      background-color: #2196F3;\n      color: #fff; }\n  select-dropdown .highlighted {\n    background-color: #2196F3;\n    color: #fff; }\n  select-dropdown .disabled {\n    background-color: #fff;\n    color: #9e9e9e;\n    cursor: default;\n    pointer-events: none; }\n";


/***/ }),

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.TEMPLATE = "<div\n    [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\">\n\n    <div class=\"filter\"\n        *ngIf=\"!multiple && filterEnabled\">\n        <input\n            #filterInput\n            (click)=\"onSingleFilterClick($event)\"\n            (input)=\"onSingleFilterInput($event)\"\n            (keydown)=\"onSingleFilterKeydown($event)\">\n    </div>\n\n    <div class=\"options\"\n        #optionsList>\n        <ul\n            (wheel)=\"onOptionsWheel($event)\">\n            <li *ngFor=\"let option of optionList.filtered\"\n                [ngClass]=\"{'highlighted': option.highlighted, 'selected': option.selected, 'disabled': option.disabled}\"\n                [ngStyle]=\"getOptionStyle(option)\"\n                (click)=\"onOptionClick(option)\"\n                (mouseover)=\"onOptionMouseover(option)\">\n                {{option.label}}\n            </li>\n            <li\n                *ngIf=\"!optionList.hasShown\"\n                class=\"message\">\n                {{notFoundMsg}}\n            </li>\n        </ul>\n    </div>\n</div>\n";


/***/ }),

/***/ 1087:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var select_dropdown_component_css_1 = __webpack_require__(1085);
var select_dropdown_component_html_1 = __webpack_require__(1086);
var SelectDropdownComponent = (function () {
    function SelectDropdownComponent() {
        this.close = new core_1.EventEmitter();
        this.optionClicked = new core_1.EventEmitter();
        this.singleFilterClick = new core_1.EventEmitter();
        this.singleFilterInput = new core_1.EventEmitter();
        this.singleFilterKeydown = new core_1.EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
    }
    /** Event handlers. **/
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.ngOnInit = function () {
        this.optionsReset();
    };
    SelectDropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
    };
    SelectDropdownComponent.prototype.ngAfterViewInit = function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    // Filter input (single select).
    SelectDropdownComponent.prototype.onSingleFilterClick = function (event) {
        this.singleFilterClick.emit(null);
    };
    SelectDropdownComponent.prototype.onSingleFilterInput = function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    SelectDropdownComponent.prototype.onSingleFilterKeydown = function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    SelectDropdownComponent.prototype.onOptionsWheel = function (event) {
        this.handleOptionsWheel(event);
    };
    SelectDropdownComponent.prototype.onOptionMouseover = function (option) {
        this.optionList.highlightOption(option);
    };
    SelectDropdownComponent.prototype.onOptionClick = function (option) {
        this.optionClicked.emit(option);
    };
    /** Initialization. **/
    SelectDropdownComponent.prototype.optionsReset = function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    SelectDropdownComponent.prototype.getOptionStyle = function (option) {
        if (option.highlighted) {
            var style = {};
            if (typeof this.highlightColor !== 'undefined') {
                style['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style['color'] = this.highlightTextColor;
            }
            return style;
        }
        else {
            return {};
        }
    };
    SelectDropdownComponent.prototype.clearFilterInput = function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    SelectDropdownComponent.prototype.moveHighlightedIntoView = function () {
        var list = this.optionsList.nativeElement;
        var listHeight = list.offsetHeight;
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            var item = list.children[0].children[itemIndex];
            var itemHeight = item.offsetHeight;
            var itemTop = itemIndex * itemHeight;
            var itemBottom = itemTop + itemHeight;
            var viewTop = list.scrollTop;
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    SelectDropdownComponent.prototype.handleOptionsWheel = function (e) {
        var div = this.optionsList.nativeElement;
        var atTop = div.scrollTop === 0;
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    SelectDropdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'select-dropdown',
                    template: select_dropdown_component_html_1.TEMPLATE,
                    styles: [select_dropdown_component_css_1.STYLE],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SelectDropdownComponent.ctorParameters = function () { return []; };
    SelectDropdownComponent.propDecorators = {
        'filterEnabled': [{ type: core_1.Input },],
        'highlightColor': [{ type: core_1.Input },],
        'highlightTextColor': [{ type: core_1.Input },],
        'left': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'notFoundMsg': [{ type: core_1.Input },],
        'optionList': [{ type: core_1.Input },],
        'top': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'close': [{ type: core_1.Output },],
        'optionClicked': [{ type: core_1.Output },],
        'singleFilterClick': [{ type: core_1.Output },],
        'singleFilterInput': [{ type: core_1.Output },],
        'singleFilterKeydown': [{ type: core_1.Output },],
        'filterInput': [{ type: core_1.ViewChild, args: ['filterInput',] },],
        'optionsList': [{ type: core_1.ViewChild, args: ['optionsList',] },],
    };
    return SelectDropdownComponent;
}());
exports.SelectDropdownComponent = SelectDropdownComponent;


/***/ }),

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.STYLE = "ng-select {\n  display: inline-block;\n  margin: 0;\n  position: relative;\n  vertical-align: middle;\n  width: 100%; }\n  ng-select * {\n    box-sizing: border-box;\n    font-family: Sans-Serif; }\n  ng-select > div {\n    border: 1px solid #ddd;\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none;\n    width: 100%; }\n    ng-select > div.disabled {\n      background-color: #eee;\n      color: #aaa;\n      cursor: default;\n      pointer-events: none; }\n    ng-select > div > div.single {\n      display: flex;\n      height: 30px;\n      width: 100%; }\n      ng-select > div > div.single > div.value,\n      ng-select > div > div.single > div.placeholder {\n        flex: 1;\n        line-height: 30px;\n        overflow: hidden;\n        padding: 0 10px;\n        white-space: nowrap; }\n      ng-select > div > div.single > div.placeholder {\n        color: #a9a9a9; }\n      ng-select > div > div.single > div.clear,\n      ng-select > div > div.single > div.toggle {\n        color: #aaa;\n        line-height: 30px;\n        text-align: center;\n        width: 30px; }\n        ng-select > div > div.single > div.clear:hover,\n        ng-select > div > div.single > div.toggle:hover {\n          background-color: #ececec; }\n      ng-select > div > div.single > div.clear {\n        font-size: 18px; }\n      ng-select > div > div.single > div.toggle {\n        font-size: 14px; }\n    ng-select > div > div.multiple {\n      display: flex;\n      flex-flow: row wrap;\n      height: 100%;\n      min-height: 30px;\n      padding: 0 10px;\n      width: 100%; }\n      ng-select > div > div.multiple > div.option {\n        background-color: #eee;\n        border: 1px solid #aaa;\n        border-radius: 4px;\n        color: #333;\n        cursor: default;\n        display: inline-block;\n        flex-shrink: 0;\n        font-size: 14px;\n        line-height: 22px;\n        margin: 3px 5px 3px 0;\n        padding: 0 4px; }\n        ng-select > div > div.multiple > div.option span.deselect-option {\n          color: #aaa;\n          cursor: pointer;\n          font-size: 14px;\n          height: 20px;\n          line-height: 20px; }\n          ng-select > div > div.multiple > div.option span.deselect-option:hover {\n            color: #555; }\n      ng-select > div > div.multiple input {\n        background-color: transparent;\n        border: none;\n        height: 30px;\n        line-height: 30px;\n        padding: 0; }\n        ng-select > div > div.multiple input:focus {\n          outline: none; }\n";


/***/ }),

/***/ 1089:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.TEMPLATE = "<div\n    #selection\n    [attr.tabindex]=\"disabled ? null : 0\"\n    [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n    (click)=\"onSelectContainerClick($event)\"\n    (focus)=\"onSelectContainerFocus()\"\n    (keydown)=\"onSelectContainerKeydown($event)\"\n    (window:click)=\"onWindowClick()\"\n    (window:resize)=\"onWindowResize()\">\n\n    <div class=\"single\"\n        *ngIf=\"!multiple\">\n        <div class=\"value\"\n            *ngIf=\"optionList.hasSelected()\">\n            {{optionList.selection[0].label}}\n        </div>\n        <div class=\"placeholder\"\n            *ngIf=\"!optionList.hasSelected()\">\n            {{placeholderView}}\n        </div>\n        <div class=\"clear\"\n            *ngIf=\"allowClear && hasSelected\"\n            (click)=\"onClearSelectionClick($event)\">\n            &#x2715;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"isOpen\">\n            &#x25B2;\n        </div>\n        <div class=\"toggle\"\n            *ngIf=\"!isOpen\">\n            &#x25BC;\n        </div>\n    </div>\n\n    <div class=\"multiple\"\n        *ngIf=\"multiple\">\n        <div class=\"option\"\n            *ngFor=\"let option of optionList.selection\">\n            <span class=\"deselect-option\"\n                (click)=onDeselectOptionClick(option)>\n                &#x2715;\n            </span>\n            {{option.label}}\n        </div>\n        <input\n            *ngIf=\"filterEnabled\"\n            #filterInput\n            tabindex=\"-1\"\n            [placeholder]=\"placeholderView\"\n            [ngStyle]=\"{'width.px': filterInputWidth}\"\n            (input)=\"onMultipleFilterInput($event)\"\n            (keydown)=\"onMultipleFilterKeydown($event)\"/>\n    </div>\n\n</div>\n<select-dropdown\n    *ngIf=\"isOpen\"\n    #dropdown\n    [multiple]=\"multiple\"\n    [optionList]=\"optionList\"\n    [notFoundMsg]=\"notFoundMsg\"\n    [highlightColor]=\"highlightColor\"\n    [highlightTextColor]=\"highlightTextColor\"\n    [filterEnabled]=\"filterEnabled\"\n    [width]=\"width\"\n    [top]=\"top\"\n    [left]=\"left\"\n    (close)=\"onDropdownClose($event)\"\n    (optionClicked)=\"onDropdownOptionClicked($event)\"\n    (singleFilterClick)=\"onSingleFilterClick()\"\n    (singleFilterInput)=\"onSingleFilterInput($event)\"\n    (singleFilterKeydown)=\"onSingleFilterKeydown($event)\">\n</select-dropdown>\n";


/***/ }),

/***/ 1090:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(20);
var select_component_css_1 = __webpack_require__(1088);
var select_component_html_1 = __webpack_require__(1089);
var option_list_1 = __webpack_require__(1083);
exports.SELECT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = (function () {
    function SelectComponent() {
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.opened = new core_1.EventEmitter();
        this.closed = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.deselected = new core_1.EventEmitter();
        this.noOptionsFound = new core_1.EventEmitter();
        this._value = [];
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.filterEnabled = true;
        this.filterInputWidth = 1;
        this.hasFocus = false;
        this.isBelow = true;
        this.isDisabled = false;
        this.isOpen = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Keys. **/
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
    }
    /** Event handlers. **/
    // Angular lifecycle hooks.
    SelectComponent.prototype.ngOnInit = function () {
        this.placeholderView = this.placeholder;
    };
    SelectComponent.prototype.ngAfterViewInit = function () {
        this.updateFilterWidth();
    };
    SelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes['options'].isFirstChange());
        }
        if (changes.hasOwnProperty('noFilter')) {
            var numOptions = this.optionList.options.length;
            var minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
    };
    // Window.
    SelectComponent.prototype.onWindowClick = function () {
        if (!this.selectContainerClicked) {
            this.closeDropdown();
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
    };
    SelectComponent.prototype.onWindowResize = function () {
        this.updateWidth();
    };
    // Select container.
    SelectComponent.prototype.onSelectContainerClick = function (event) {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    SelectComponent.prototype.onSelectContainerFocus = function () {
        this.onTouched();
    };
    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
        this.handleSelectContainerKeydown(event);
    };
    // Dropdown container.
    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
        this.multiple ?
            this.toggleSelectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.onDropdownClose = function (focus) {
        this.closeDropdown(focus);
    };
    // Single filter input.
    SelectComponent.prototype.onSingleFilterClick = function () {
        this.selectContainerClicked = true;
    };
    SelectComponent.prototype.onSingleFilterInput = function (term) {
        var toEmpty = this.optionList.filter(term);
        if (toEmpty) {
            this.noOptionsFound.emit(null);
        }
    };
    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
        this.handleSingleFilterKeydown(event);
    };
    // Multiple filter input.
    SelectComponent.prototype.onMultipleFilterInput = function (event) {
        var _this = this;
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        setTimeout(function () {
            var toEmpty = _this.optionList.filter(event.target.value);
            if (toEmpty) {
                _this.noOptionsFound.emit(null);
            }
        });
    };
    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    // Single clear select.
    SelectComponent.prototype.onClearSelectionClick = function (event) {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    // Multiple deselect option.
    SelectComponent.prototype.onDeselectOptionClick = function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /** API. **/
    // TODO fix issues with global click/key handler that closes the dropdown.
    SelectComponent.prototype.open = function () {
        this.openDropdown();
    };
    SelectComponent.prototype.close = function () {
        this.closeDropdown();
    };
    SelectComponent.prototype.clear = function () {
        this.clearSelection();
    };
    SelectComponent.prototype.select = function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach(function (option) {
            _this.selectOption(option);
        });
    };
    /** ControlValueAccessor interface methods. **/
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /** Value. **/
        get: function () {
            return this.multiple ? this._value : this._value[0];
        },
        set: function (v) {
            if (typeof v === 'undefined' || v === null || v === '') {
                v = [];
            }
            else if (typeof v === 'string') {
                v = [v];
            }
            else if (!Array.isArray(v)) {
                throw new TypeError('Value must be a string or an array.');
            }
            if (!option_list_1.OptionList.equalValues(v, this._value)) {
                this.optionList.value = v;
                this.valueChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.valueChanged = function () {
        this._value = this.optionList.value;
        this.hasSelected = this._value.length > 0;
        this.placeholderView = this.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
        this.onChange(this.value);
    };
    /** Initialization. **/
    SelectComponent.prototype.updateOptionsList = function (firstTime) {
        var v;
        if (!firstTime) {
            v = this.optionList.value;
        }
        this.optionList = new option_list_1.OptionList(this.options);
        if (!firstTime) {
            this.optionList.value = v;
            this.valueChanged();
        }
    };
    /** Dropdown. **/
    SelectComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    SelectComponent.prototype.openDropdown = function () {
        if (!this.isOpen) {
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    };
    SelectComponent.prototype.closeDropdown = function (focus) {
        if (focus === void 0) { focus = false; }
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(null);
        }
    };
    /** Select. **/
    SelectComponent.prototype.selectOption = function (option) {
        if (!option.selected) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.undecoratedCopy());
        }
    };
    SelectComponent.prototype.deselectOption = function (option) {
        var _this = this;
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.undecoratedCopy());
            setTimeout(function () {
                if (_this.multiple) {
                    _this.updatePosition();
                    _this.optionList.highlight();
                    if (_this.isOpen) {
                        _this.dropdown.moveHighlightedIntoView();
                    }
                }
            });
        }
    };
    SelectComponent.prototype.clearSelection = function () {
        var selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].undecoratedCopy());
            }
            else {
                this.deselected.emit(selection.map(function (option) {
                    return option.undecoratedCopy();
                }));
            }
        }
    };
    SelectComponent.prototype.toggleSelectOption = function (option) {
        option.selected ?
            this.deselectOption(option) : this.selectOption(option);
    };
    SelectComponent.prototype.selectHighlightedOption = function () {
        var option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    SelectComponent.prototype.deselectLast = function () {
        var sel = this.optionList.selection;
        if (sel.length > 0) {
            var option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /** Filter. **/
    SelectComponent.prototype.clearFilterInput = function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
        else {
            this.dropdown.clearFilterInput();
        }
    };
    SelectComponent.prototype.setMultipleFilterInput = function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
        var _this = this;
        var key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC ||
                (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                 *
                 * The setTimeout is added to prevent the enter keydown event
                 * to be triggered for the filter input field, which causes
                 * the dropdown to be closed again.
                 */
                setTimeout(function () { _this.openDropdown(); });
            }
        }
    };
    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
        var key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /** View. **/
    SelectComponent.prototype.focus = function () {
        this.hasFocus = true;
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
        else {
            this.selectionSpan.nativeElement.focus();
        }
    };
    SelectComponent.prototype.blur = function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    SelectComponent.prototype.updateWidth = function () {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    };
    SelectComponent.prototype.updatePosition = function () {
        var e = this.selectionSpan.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    };
    SelectComponent.prototype.updateFilterWidth = function () {
        if (typeof this.filterInput !== 'undefined') {
            var value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    SelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-select',
                    template: select_component_html_1.TEMPLATE,
                    styles: [select_component_css_1.STYLE],
                    providers: [exports.SELECT_VALUE_ACCESSOR],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        'options': [{ type: core_1.Input },],
        'allowClear': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'highlightColor': [{ type: core_1.Input },],
        'highlightTextColor': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'noFilter': [{ type: core_1.Input },],
        'notFoundMsg': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'opened': [{ type: core_1.Output },],
        'closed': [{ type: core_1.Output },],
        'selected': [{ type: core_1.Output },],
        'deselected': [{ type: core_1.Output },],
        'noOptionsFound': [{ type: core_1.Output },],
        'selectionSpan': [{ type: core_1.ViewChild, args: ['selection',] },],
        'dropdown': [{ type: core_1.ViewChild, args: ['dropdown',] },],
        'filterInput': [{ type: core_1.ViewChild, args: ['filterInput',] },],
    };
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;


/***/ }),

/***/ 1091:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1081));


/***/ }),

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusDirective; });

var FocusDirective = (function () {
    function FocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    FocusDirective.prototype.ngAfterViewInit = function () {
        if (this.value === "0") {
            return;
        }
        this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
    };
    FocusDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: "[mydpfocus]"
                },] },
    ];
    FocusDirective.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    ];
    FocusDirective.propDecorators = {
        'value': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ["mydpfocus",] },],
    };
    return FocusDirective;
}());
//# sourceMappingURL=my-date-picker.focus.directive.js.map

/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

//# sourceMappingURL=my-calendar-view-changed.interface.js.map

/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

//# sourceMappingURL=my-date-model.interface.js.map

/***/ }),

/***/ 1096:
/***/ (function(module, exports) {

//# sourceMappingURL=my-date-range.interface.js.map

/***/ }),

/***/ 1097:
/***/ (function(module, exports) {

//# sourceMappingURL=my-date.interface.js.map

/***/ }),

/***/ 1098:
/***/ (function(module, exports) {

//# sourceMappingURL=my-day-labels.interface.js.map

/***/ }),

/***/ 1099:
/***/ (function(module, exports) {

//# sourceMappingURL=my-default-month.interface.js.map

/***/ }),

/***/ 1100:
/***/ (function(module, exports) {

//# sourceMappingURL=my-input-field-changed.interface.js.map

/***/ }),

/***/ 1101:
/***/ (function(module, exports) {

//# sourceMappingURL=my-input-focus-blur.interface.js.map

/***/ }),

/***/ 1102:
/***/ (function(module, exports) {

//# sourceMappingURL=my-marked-date.interface.js.map

/***/ }),

/***/ 1103:
/***/ (function(module, exports) {

//# sourceMappingURL=my-marked-dates.interface.js.map

/***/ }),

/***/ 1104:
/***/ (function(module, exports) {

//# sourceMappingURL=my-month-labels.interface.js.map

/***/ }),

/***/ 1105:
/***/ (function(module, exports) {

//# sourceMappingURL=my-options.interface.js.map

/***/ }),

/***/ 1106:
/***/ (function(module, exports) {

//# sourceMappingURL=my-selector.interface.js.map

/***/ }),

/***/ 1107:
/***/ (function(module, exports) {

//# sourceMappingURL=my-weekday.interface.js.map

/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__ = __webpack_require__(1075);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__ = __webpack_require__(1093);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDatePickerModule; });





var MyDatePickerModule = (function () {
    function MyDatePickerModule() {
    }
    MyDatePickerModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__["a" /* MyDatePicker */], __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__["a" /* FocusDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__["a" /* MyDatePicker */], __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__["a" /* FocusDirective */]]
                },] },
    ];
    MyDatePickerModule.ctorParameters = [];
    return MyDatePickerModule;
}());
//# sourceMappingURL=my-date-picker.module.js.map

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocaleService; });

var LocaleService = (function () {
    function LocaleService() {
        this.locales = {
            "en": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "mm/dd/yyyy",
                todayBtnTxt: "Today",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "he": {
                dayLabels: { su: "רא", mo: "שנ", tu: "של", we: "רב", th: "חמ", fr: "שי", sa: "שב" },
                monthLabels: { 1: "ינו", 2: "פבר", 3: "מרץ", 4: "אפר", 5: "מאי", 6: "יונ", 7: "יול", 8: "אוג", 9: "ספט", 10: "אוק", 11: "נוב", 12: "דצמ" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "היום",
                firstDayOfWeek: "su",
                sunHighlight: false
            },
            "ja": {
                dayLabels: { su: "日", mo: "月", tu: "火", we: "水", th: "木", fr: "金", sa: "土" },
                monthLabels: { 1: "１月", 2: "２月", 3: "３月", 4: "４月", 5: "５月", 6: "６月", 7: "７月", 8: "８月", 9: "９月", 10: "１０月", 11: "１１月", 12: "１２月" },
                dateFormat: "yyyy.mm.dd",
                todayBtnTxt: "今日",
                sunHighlight: false
            },
            "fr": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Aujourd'hui",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "fi": {
                dayLabels: { su: "Su", mo: "Ma", tu: "Ti", we: "Ke", th: "To", fr: "Pe", sa: "La" },
                monthLabels: { 1: "Tam", 2: "Hel", 3: "Maa", 4: "Huh", 5: "Tou", 6: "Kes", 7: "Hei", 8: "Elo", 9: "Syy", 10: "Lok", 11: "Mar", 12: "Jou" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Tänään",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "es": {
                dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
                monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Hoy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "hu": {
                dayLabels: { su: "Vas", mo: "Hét", tu: "Kedd", we: "Sze", th: "Csü", fr: "Pén", sa: "Szo" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Már", 4: "Ápr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Szep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Ma",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "sv": {
                dayLabels: { su: "Sön", mo: "Mån", tu: "Tis", we: "Ons", th: "Tor", fr: "Fre", sa: "Lör" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Idag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "nl": {
                dayLabels: { su: "Zon", mo: "Maa", tu: "Din", we: "Woe", th: "Don", fr: "Vri", sa: "Zat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "Vandaag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "ru": {
                dayLabels: { su: "Вс", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Янв", 2: "Фев", 3: "Март", 4: "Апр", 5: "Май", 6: "Июнь", 7: "Июль", 8: "Авг", 9: "Сент", 10: "Окт", 11: "Ноя", 12: "Дек" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Сегодня",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "uk": {
                dayLabels: { su: "Нд", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Січ", 2: "Лют", 3: "Бер", 4: "Кві", 5: "Тра", 6: "Чер", 7: "Лип", 8: "Сер", 9: "Вер", 10: "Жов", 11: "Лис", 12: "Гру" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Сьогодні",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "no": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "I dag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "tr": {
                dayLabels: { su: "Paz", mo: "Pzt", tu: "Sal", we: "Çar", th: "Per", fr: "Cum", sa: "Cmt" },
                monthLabels: { 1: "Oca", 2: "Şub", 3: "Mar", 4: "Nis", 5: "May", 6: "Haz", 7: "Tem", 8: "Ağu", 9: "Eyl", 10: "Eki", 11: "Kas", 12: "Ara" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Bugün",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "pt-br": {
                dayLabels: { su: "Dom", mo: "Seg", tu: "Ter", we: "Qua", th: "Qui", fr: "Sex", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Set", 10: "Out", 11: "Nov", 12: "Dez" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Hoje",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "de": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Heute",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Oggi",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it-ch": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Oggi",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "pl": {
                dayLabels: { su: "Nie", mo: "Pon", tu: "Wto", we: "Śro", th: "Czw", fr: "Pią", sa: "Sob" },
                monthLabels: { 1: "Sty", 2: "Lut", 3: "Mar", 4: "Kwi", 5: "Maj", 6: "Cze", 7: "Lip", 8: "Sie", 9: "Wrz", 10: "Paź", 11: "Lis", 12: "Gru" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Dzisiaj",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "my": {
                dayLabels: { su: "တနင်္ဂနွေ", mo: "တနင်္လာ", tu: "အင်္ဂါ", we: "ဗုဒ္ဓဟူး", th: "ကြသပတေး", fr: "သောကြာ", sa: "စနေ" },
                monthLabels: { 1: "ဇန်နဝါရီ", 2: "ဖေဖော်ဝါရီ", 3: "မတ်", 4: "ဧပြီ", 5: "မေ", 6: "ဇွန်", 7: "ဇူလိုင်", 8: "ဩဂုတ်", 9: "စက်တင်ဘာ", 10: "အောက်တိုဘာ", 11: "နိုဝင်ဘာ", 12: "ဒီဇင်ဘာ" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "ယနေ့",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sk": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ut", we: "St", th: "Št", fr: "Pi", sa: "So" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Dnes",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sl": {
                dayLabels: { su: "Ned", mo: "Pon", tu: "Tor", we: "Sre", th: "Čet", fr: "Pet", sa: "Sob" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Avg", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd. mm. yyyy",
                todayBtnTxt: "Danes",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "zh-cn": {
                dayLabels: { su: "日", mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六" },
                monthLabels: { 1: "1月", 2: "2月", 3: "3月", 4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月", 10: "10月", 11: "11月", 12: "12月" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "今天",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ro": {
                dayLabels: { su: "du", mo: "lu", tu: "ma", we: "mi", th: "jo", fr: "vi", sa: "sa" },
                monthLabels: { 1: "ian", 2: "feb", 3: "mart", 4: "apr", 5: "mai", 6: "iun", 7: "iul", 8: "aug", 9: "sept", 10: "oct", 11: "nov", 12: "dec" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Astăzi",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ca": {
                dayLabels: { su: "dg", mo: "dl", tu: "dt", we: "dc", th: "dj", fr: "dv", sa: "ds" },
                monthLabels: { 1: "Gen", 2: "Febr", 3: "Març", 4: "Abr", 5: "Maig", 6: "Juny", 7: "Jul", 8: "Ag", 9: "Set", 10: "Oct", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Avui",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "id": {
                dayLabels: { su: "Min", mo: "Sen", tu: "Sel", we: "Rab", th: "Kam", fr: "Jum", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Ags", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "Hari ini",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "en-au": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Today",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "am-et": {
                dayLabels: { su: "እሑድ", mo: "ሰኞ", tu: "ማክሰኞ", we: "ረቡዕ", th: "ሐሙስ", fr: "ዓርብ", sa: "ቅዳሜ" },
                monthLabels: { 1: "ጃንዩ", 2: "ፌብሩ", 3: "ማርች", 4: "ኤፕረ", 5: "ሜይ", 6: "ጁን", 7: "ጁላይ", 8: "ኦገስ", 9: "ሴፕቴ", 10: "ኦክተ", 11: "ኖቬም", 12: "ዲሴም" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "ዛሬ",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "cs": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Út", we: "St", th: "Čt", fr: "Pá", sa: "So" },
                monthLabels: { 1: "Led", 2: "Úno", 3: "Bře", 4: "Dub", 5: "Kvě", 6: "Čvn", 7: "Čvc", 8: "Srp", 9: "Zář", 10: "Říj", 11: "Lis", 12: "Pro" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Dnes",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "el": {
                dayLabels: { su: "Κυρ", mo: "Δευ", tu: "Τρι", we: "Τετ", th: "Πεμ", fr: "Παρ", sa: "Σαβ" },
                monthLabels: { 1: "Ιαν", 2: "Φεβ", 3: "Μαρ", 4: "Απρ", 5: "Μαι", 6: "Ιουν", 7: "Ιουλ", 8: "Αυγ", 9: "Σεπ", 10: "Οκτ", 11: "Νοε", 12: "Δεκ" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Σήμερα",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "kk": {
                dayLabels: { su: "Жк", mo: "Дс", tu: "Сс", we: "Ср", th: "Бс", fr: "Жм", sa: "Сб" },
                monthLabels: { 1: "Қаң", 2: "Ақп", 3: "Нау", 4: "Сәу", 5: "Мам", 6: "Мау", 7: "Шіл", 8: "Там", 9: "Қырк", 10: "Қаз", 11: "Қар", 12: "Желт" },
                dateFormat: "dd-mmm-yyyy",
                todayBtnTxt: "Бүгін",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "th": {
                dayLabels: { su: "อา", mo: "จ", tu: "อ", we: "พ", th: "พฤ", fr: "ศ", sa: "ส" },
                monthLabels: { 1: "ม.ค", 2: "ก.พ.", 3: "มี.ค.", 4: "เม.ย.", 5: "พ.ค.", 6: "มิ.ย.", 7: "ก.ค.", 8: "ส.ค.", 9: "ก.ย.", 10: "ต.ค.", 11: "พ.ย.", 12: "ธ.ค." },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "วันนี้",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ko-kr": {
                dayLabels: { su: "일", mo: "월", tu: "화", we: "수", th: "목", fr: "금", sa: "토" },
                monthLabels: { 1: "1월", 2: "2월", 3: "3월", 4: "4월", 5: "5월", 6: "6월", 7: "7월", 8: "8월", 9: "9월", 10: "10월", 11: "11월", 12: "12월" },
                dateFormat: "yyyy mm dd",
                todayBtnTxt: "오늘",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "da": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "I dag",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "lt": {
                dayLabels: { su: "Sk", mo: "Pr", tu: "An", we: "Tr", th: "Kt", fr: "Pn", sa: "Št" },
                monthLabels: { 1: "Saus.", 2: "Vas.", 3: "Kov.", 4: "Bal.", 5: "Geg.", 6: "Birž.", 7: "Liep.", 8: "Rugp.", 9: "Rugs.", 10: "Sapl.", 11: "Lapkr.", 12: "Gruod." },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Šianien",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "vi": {
                dayLabels: { su: "CN", mo: "T2", tu: "T3", we: "T4", th: "T5", fr: "T6", sa: "T7" },
                monthLabels: { 1: "THG 1", 2: "THG 2", 3: "THG 3", 4: "THG 4", 5: "THG 5", 6: "THG 6", 7: "THG 7", 8: "THG 8", 9: "THG 9", 10: "THG 10", 11: "THG 11", 12: "THG 12" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Hôm nay",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "bn": {
                dayLabels: { su: "রবি", mo: "সোম", tu: "মঙ্গল", we: "বুধ", th: "বৃহঃ", fr: "শুক্র", sa: "শনি" },
                monthLabels: { 1: "জানু", 2: "ফেব্রু", 3: "মার্চ", 4: "এপ্রিল", 5: "মে", 6: "জুন", 7: "জুলাই", 8: "আগস্ট", 9: "সেপ্টে", 10: "অক্টো", 11: "নভে", 12: "ডিসে" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "আজ",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "bg": {
                dayLabels: { su: "нд", mo: "пн", tu: "вт", we: "ср", th: "чт", fr: "пт", sa: "сб" },
                monthLabels: { 1: "яну.", 2: "фев.", 3: "март", 4: "апр.", 5: "май", 6: "юни", 7: "юли", 8: "авг.", 9: "сеп.", 10: "окт.", 11: "ное.", 12: "дек." },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "днес",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "hr": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ul", we: "Sr", th: "Če", fr: "Pe", sa: "Su" },
                monthLabels: { 1: "Sij", 2: "Vel", 3: "Ožu", 4: "Tra", 5: "Svi", 6: "Lip", 7: "Srp", 8: "Kol", 9: "Ruj", 10: "Lis", 11: "Stu", 12: "Pro" },
                dateFormat: "dd.mm.yyyy.",
                todayBtnTxt: "danas",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ar": {
                dayLabels: { su: "الأحد", mo: "الاثنين", tu: "الثلاثاء", we: "الاربعاء", th: "الخميس", fr: "الجمعة", sa: "السبت" },
                monthLabels: { 1: "يناير", 2: "فبراير", 3: "مارس", 4: "ابريل", 5: "مايو", 6: "يونيو", 7: "يوليو", 8: "أغسطس", 9: "سبتمبر", 10: "أكتوبر", 11: "نوفمبر", 12: "ديسمبر" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "اليوم",
                firstDayOfWeek: "sa",
                sunHighlight: true
            },
            "is": {
                dayLabels: { su: "sun", mo: "mán", tu: "þri", we: "mið", th: "fim", fr: "fös", sa: "lau" },
                monthLabels: { 1: "jan", 2: "feb", 3: "mar", 4: "apr", 5: "maí", 6: "jún", 7: "júl", 8: "ágú", 9: "sep", 10: "okt", 11: "nóv", 12: "des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Í dag",
                firstDayOfWeek: "su",
                sunHighlight: true
            }
        };
    }
    LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            return this.locales[locale];
        }
        return this.locales["en"];
    };
    LocaleService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    LocaleService.ctorParameters = [];
    return LocaleService;
}());
//# sourceMappingURL=my-date-picker.locale.service.js.map

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });

var M = "m";
var MM = "mm";
var MMM = "mmm";
var DD = "dd";
var YYYY = "yyyy";
var UtilService = (function () {
    function UtilService() {
        this.weekDays = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    }
    UtilService.prototype.isDateValid = function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, monthLabels, enableDays) {
        var returnDate = { day: 0, month: 0, year: 0 };
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var isMonthStr = dateFormat.indexOf(MMM) !== -1;
        var separators = this.getDateFormatSeparators(dateFormat);
        var month = isMonthStr ? this.parseDatePartMonthName(dateFormat, dateStr, MMM, monthLabels) : this.parseDatePartNumber(dateFormat, dateStr, MM);
        if (isMonthStr && monthLabels[month]) {
            dateFormat = this.changeDateFormat(dateFormat, monthLabels[month].length);
        }
        if (dateStr.length !== dateFormat.length) {
            return returnDate;
        }
        if (dateFormat.indexOf(separators[0]) !== dateStr.indexOf(separators[0]) || dateFormat.lastIndexOf(separators[1]) !== dateStr.lastIndexOf(separators[1])) {
            return returnDate;
        }
        var day = this.parseDatePartNumber(dateFormat, dateStr, DD);
        var year = this.parseDatePartNumber(dateFormat, dateStr, YYYY);
        if (month !== -1 && day !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            var date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            return date;
        }
        return returnDate;
    };
    UtilService.prototype.getDateFormatSeparators = function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    };
    UtilService.prototype.changeDateFormat = function (dateFormat, len) {
        var mp = "";
        for (var i = 0; i < len; i++) {
            mp += M;
        }
        return dateFormat.replace(MMM, mp);
    };
    UtilService.prototype.isMonthLabelValid = function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    UtilService.prototype.isYearLabelValid = function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    UtilService.prototype.parseDatePartNumber = function (dateFormat, dateString, datePart) {
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value);
        }
        return -1;
    };
    UtilService.prototype.parseDatePartMonthName = function (dateFormat, dateString, datePart, monthLabels) {
        var monthLabel = "";
        var start = dateFormat.indexOf(datePart);
        if (dateFormat.substr(dateFormat.length - 3) === MMM) {
            monthLabel = dateString.substring(start);
        }
        else {
            var end = dateString.indexOf(dateFormat.charAt(start + datePart.length), start);
            monthLabel = dateString.substring(start, end);
        }
        return this.isMonthLabelValid(monthLabel, monthLabels);
    };
    UtilService.prototype.getDatePartIndex = function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    UtilService.prototype.parseDefaultMonth = function (monthString) {
        var month = { monthTxt: "", monthNbr: 0, year: 0 };
        if (monthString !== "") {
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0]) : parseInt(split[1]);
            month.year = split[0].length === 2 ? parseInt(split[1]) : parseInt(split[0]);
        }
        return month;
    };
    UtilService.prototype.isDisabledDay = function (date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays) {
        for (var _i = 0, enableDays_1 = enableDays; _i < enableDays_1.length; _i++) {
            var e = enableDays_1[_i];
            if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        var dn = this.getDayNumber(date);
        if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
            return true;
        }
        var dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        if (disableWeekDays.length > 0) {
            for (var _a = 0, disableWeekDays_1 = disableWeekDays; _a < disableWeekDays_1.length; _a++) {
                var wd = disableWeekDays_1[_a];
                if (dn === this.getWeekdayIndex(wd)) {
                    return true;
                }
            }
        }
        for (var _b = 0, disableDays_1 = disableDays; _b < disableDays_1.length; _b++) {
            var d = disableDays_1[_b];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (var _c = 0, disableDateRanges_1 = disableDateRanges; _c < disableDateRanges_1.length; _c++) {
            var d = disableDateRanges_1[_c];
            if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) && dateMs >= this.getTimeInMilliseconds(d.begin) && dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    };
    UtilService.prototype.isMarkedDate = function (date, markedDates, markWeekends) {
        for (var _i = 0, markedDates_1 = markedDates; _i < markedDates_1.length; _i++) {
            var md = markedDates_1[_i];
            for (var _a = 0, _b = md.dates; _a < _b.length; _a++) {
                var d = _b[_a];
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: "" };
    };
    UtilService.prototype.isHighlightedDate = function (date, sunHighlight, satHighlight, highlightDates) {
        var dayNbr = this.getDayNumber(date);
        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
            return true;
        }
        for (var _i = 0, highlightDates_1 = highlightDates; _i < highlightDates_1.length; _i++) {
            var d = highlightDates_1[_i];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        return false;
    };
    UtilService.prototype.getWeekNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    UtilService.prototype.isMonthDisabledByDisableUntil = function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    UtilService.prototype.isMonthDisabledByDisableSince = function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    UtilService.prototype.isInitializedDate = function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    UtilService.prototype.isSameDate = function (d1, d2) {
        return d1.year === d2.year && d1.month === d2.month && d1.day === d2.day;
    };
    UtilService.prototype.getTimeInMilliseconds = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    UtilService.prototype.getDayNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    UtilService.prototype.getWeekDays = function () {
        return this.weekDays;
    };
    UtilService.prototype.getWeekdayIndex = function (wd) {
        return this.weekDays.indexOf(wd);
    };
    UtilService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    UtilService.ctorParameters = [];
    return UtilService;
}());
//# sourceMappingURL=my-date-picker.util.service.js.map

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_my_date_picker_module__ = __webpack_require__(1108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "MyDatePickerModule", function() { return __WEBPACK_IMPORTED_MODULE_0__dist_my_date_picker_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dist_my_date_picker_component__ = __webpack_require__(1075);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_interfaces_my_date_interface__ = __webpack_require__(1097);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dist_interfaces_my_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dist_interfaces_my_date_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dist_interfaces_my_date_model_interface__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dist_interfaces_my_date_model_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dist_interfaces_my_date_model_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist_interfaces_my_input_field_changed_interface__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dist_interfaces_my_input_field_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dist_interfaces_my_input_field_changed_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dist_interfaces_my_calendar_view_changed_interface__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dist_interfaces_my_calendar_view_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__dist_interfaces_my_calendar_view_changed_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dist_interfaces_my_input_focus_blur_interface__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dist_interfaces_my_input_focus_blur_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__dist_interfaces_my_input_focus_blur_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_interfaces_my_date_range_interface__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dist_interfaces_my_date_range_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__dist_interfaces_my_date_range_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dist_interfaces_my_day_labels_interface__ = __webpack_require__(1098);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dist_interfaces_my_day_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__dist_interfaces_my_day_labels_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dist_interfaces_my_month_labels_interface__ = __webpack_require__(1104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dist_interfaces_my_month_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__dist_interfaces_my_month_labels_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dist_interfaces_my_options_interface__ = __webpack_require__(1105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dist_interfaces_my_options_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__dist_interfaces_my_options_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dist_interfaces_my_weekday_interface__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dist_interfaces_my_weekday_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__dist_interfaces_my_weekday_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dist_interfaces_my_marked_date_interface__ = __webpack_require__(1102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dist_interfaces_my_marked_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__dist_interfaces_my_marked_date_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dist_interfaces_my_marked_dates_interface__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dist_interfaces_my_marked_dates_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__dist_interfaces_my_marked_dates_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dist_interfaces_my_default_month_interface__ = __webpack_require__(1099);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dist_interfaces_my_default_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__dist_interfaces_my_default_month_interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dist_interfaces_my_selector_interface__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dist_interfaces_my_selector_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__dist_interfaces_my_selector_interface__);
/* unused harmony namespace reexport */

















/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardsServices; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardsServices = (function () {
    function DashboardsServices(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
    }
    DashboardsServices.prototype.getAnalyticsData = function () {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].ANALYTICS_API_ENDPOINT + 'getAnalyticsData';
        return this.http.get(url, { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    DashboardsServices.prototype.getAllAppointments = function (startDate, endDate) {
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].ANALYTICS_API_ENDPOINT + 'getAnalyticsData/' + startDate + '/' + endDate;
        return this.http.get(url, { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    DashboardsServices.prototype.generateReportsData = function (analyticsName, dateRange) {
        var reportsHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        reportsHeaders.append('Authorization', localStorage.getItem('Authentication'));
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].SOLAR_API_ENDPOINT + 'reports/' + analyticsName;
        return this.http.post(url, dateRange, {
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Blob, headers: reportsHeaders
        }).map(function (response) { return response.blob(); });
    };
    DashboardsServices.prototype.getLoadAppointmentById = function (loadNum) {
        var getLoadDetailsURL = __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getLoadAppointments/';
        var url = "" + getLoadDetailsURL + loadNum;
        return this.http.get(url, { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    DashboardsServices.prototype.updateHighvalues = function (loadAppointment, loadHigh, loadPriority) {
        var getdealersURL = __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'updateHighValue/';
        var url = "" + getdealersURL + loadAppointment + "/" + loadHigh + "/" + loadPriority;
        return this.http.get(url, { headers: this.headers }).map(function (response) { return response; }).catch(this.handleError);
    };
    DashboardsServices.prototype.handleError = function (error) {
        if (error.status == 404) {
            console.log('error 404');
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json());
        }
        else {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            //this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error._body);
        }
    };
    return DashboardsServices;
}());
DashboardsServices = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardsServices);

var _a, _b;
//# sourceMappingURL=dashboards.services.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDriverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This is locations service class which does Rest service calls for  all locations operations
 */
// let getdetails:any;
var DashboardDriverService = (function () {
    function DashboardDriverService(_http, router) {
        this._http = _http;
        this.router = router;
        this.getacceptloadurl = 'app/getAcceptedLoadDetails';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
    }
    DashboardDriverService.prototype.getloadsbyloadnumber = function (loadNum) {
        var _this = this;
        var getDocumentDetailsByLoadNumberURL = __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getLoadAppointments/';
        var url = "" + getDocumentDetailsByLoadNumberURL + loadNum;
        return this._http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(function (error) {
            _this.handleError(error);
            console.log('error occured updating driver details' + error);
        });
    };
    /**
     * This method gets all Loads Numbers data for Select dropdown
     */
    DashboardDriverService.prototype.getAcceptedloadNumbers = function () {
        var getLoadsListURL = __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getAcceptedLoadList';
        var url = "" + getLoadsListURL;
        return this._http.get(url, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    DashboardDriverService.prototype.getdistanceandTime = function (orginLat, originLng, destLat, destLng) {
        var ggetdistanceandTimeURL = __WEBPACK_IMPORTED_MODULE_6__environments_endpoints__["a" /* endponitConfig */].SOLAR_API_ENDPOINT + 'locations/distance/'
            + orginLat + '/' + originLng + '/' + destLat + '/' + destLng + '/';
        var url = "" + ggetdistanceandTimeURL;
        return this._http.get(url, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    DashboardDriverService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error.json());
        }
        else {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            //this.router.navigate(['/error']);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error._body);
        }
    };
    return DashboardDriverService;
}());
DashboardDriverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], DashboardDriverService);

var _a, _b;
//# sourceMappingURL=driverLocations.services.js.map

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(1339) !== null) && (__webpack_require__(1340) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ 1194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * This component deals with rendering charts in dashboard
 */
var AnalyticsComponent = (function () {
    function AnalyticsComponent(dashboardServices) {
        this.dashboardServices = dashboardServices;
        this.QueryData = { startDate: '', endDate: '' };
        this.model = { date: { year: 2018, month: 10, day: 9 } };
        this.myDatePickerOptions = {
            // other options...
            // dateFormat: 'mm-dd-yyyy',
            dateFormat: 'yyyy-mm-dd',
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };
        this.activePageTitle = 'Analytics';
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#noData').hide();
        // default date for get all apointments
        // this.startDate = '2017-01-01';
        // this.endDate = '2017-01-28';
        this.QueryData.startDate = '2017-01-01';
        this.QueryData.endDate = '2017-01-28';
        this.QueryData.endDate = { 'date': { 'day': 28, 'month': 1, 'year': 2017 } };
        this.QueryData.startDate = { 'date': { 'day': 1, 'month': 1, 'year': 2017 } };
        // get all analytics data
        this.dashboardServices.getAnalyticsData().toPromise().then(function (response) {
            _this.renderDashBoardAnalyticsCharts(response);
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
    };
    /**
    *  This method gets all filtered dealers details
    */
    AnalyticsComponent.prototype.QuerySubmit = function () {
        var _this = this;
        if (this.QueryData.startDate !== '') {
            var st_year = this.QueryData.startDate.date.year;
            var st_month = this.QueryData.startDate.date.month;
            var st_day = this.QueryData.startDate.date.day;
            var startDate = st_year + '-' + st_month + '-' + st_day;
            this.QueryDataStartDate = __WEBPACK_IMPORTED_MODULE_3_moment__(startDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataStartDate = '';
        }
        if (this.QueryData.endDate !== '') {
            var end_year = this.QueryData.endDate.date.year;
            var end_month = this.QueryData.endDate.date.month;
            var end_day = this.QueryData.endDate.date.day;
            var endDate = end_year + '-' + end_month + '-' + end_day;
            this.QueryDataEndDate = __WEBPACK_IMPORTED_MODULE_3_moment__(endDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataEndDate = '';
        }
        if (this.QueryDataStartDate === '' && this.QueryDataEndDate === '') {
            this.isSearchQuerySubmitted = true;
        }
        else {
            // this.loading = true;
            try {
                if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                    this.errorMessage = 'End date should be greater than start date';
                }
                else {
                    this.errorMessage = '';
                    // this.loading = true;
                    this.dashboardServices.getAllAppointments(this.QueryDataStartDate, this.QueryDataEndDate).toPromise().then(function (response) {
                        _this.renderDashBoardAnalyticsCharts(response);
                    });
                }
            }
            catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }
    };
    ;
    AnalyticsComponent.prototype.generateReports = function () {
        if (this.QueryData.startDate !== '') {
            var st_year = this.QueryData.startDate.date.year;
            var st_month = this.QueryData.startDate.date.month;
            var st_day = this.QueryData.startDate.date.day;
            var startDate = st_year + '-' + st_month + '-' + st_day;
            this.QueryDataStartDate = __WEBPACK_IMPORTED_MODULE_3_moment__(startDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataStartDate = '';
        }
        if (this.QueryData.endDate !== '') {
            var end_year = this.QueryData.endDate.date.year;
            var end_month = this.QueryData.endDate.date.month;
            var end_day = this.QueryData.endDate.date.day;
            var endDate = end_year + '-' + end_month + '-' + end_day;
            this.QueryDataEndDate = __WEBPACK_IMPORTED_MODULE_3_moment__(endDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataEndDate = '';
        }
        if (this.QueryDataStartDate === '' && this.QueryDataEndDate === '') {
            this.isSearchQuerySubmitted = true;
        }
        else {
            // this.loading = true;
            try {
                if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                    this.errorMessage = 'End date should be greater than start date';
                }
                else {
                    this.errorMessage = '';
                    // this.loading = true;
                    var dateRangeObject = {
                        'RP_startdate': this.QueryDataStartDate,
                        'RP_enddate': this.QueryDataEndDate
                    };
                    this.dashboardServices.generateReportsData('Analytics_Report', dateRangeObject).toPromise().then(function (response) {
                        // this.renderDashBoardAnalyticsCharts(response)
                        var blob = new Blob([response], { type: 'application/pdf' });
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"])(blob, 'Analytics.pdf');
                        var fileURL = URL.createObjectURL(blob);
                        window.open(fileURL);
                    });
                }
            }
            catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }
    };
    AnalyticsComponent.prototype.QueryReset = function () {
        var _this = this;
        this.errorMessage = '';
        this.isSearchQuerySubmitted = false;
        // this.loading = true;
        this.QueryData.endDate = { 'date': { 'day': 28, 'month': 1, 'year': 2017 } };
        this.QueryData.startDate = { 'date': { 'day': 1, 'month': 1, 'year': 2017 } };
        this.QueryDataStartDate = '2017-01-01';
        this.QueryDataEndDate = '2017-01-28';
        this.dashboardServices.getAllAppointments(this.QueryDataStartDate, this.QueryDataEndDate).toPromise().then(function (response) {
            _this.renderDashBoardAnalyticsCharts(response);
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
    };
    ;
    AnalyticsComponent.prototype.renderDashBoardAnalyticsCharts = function (data) {
        if (data.length === 0) {
            $('#data').hide();
            $('#noData').show();
        }
        else {
            $('#noData').hide();
            $('#data').show();
            // this.loading = false;
            var loadsChart_1 = dc.barChart('#dc-vs-loads-chart');
            var statusChart_1 = dc.pieChart('#status-chart');
            var appttypeChart_1 = dc.pieChart('#appointment-type-chart');
            var dcChart_1 = dc.barChart('#dc-chart');
            var dataCount = dc.dataCount('#dc-data-count');
            var dataTable = dc.dataTable('.dc-data-table');
            var colorScale = d3.scale.category20b();
            var dateFormat_1 = d3.time.format('%Y-%m-%d');
            var numberFormat = d3.format('.2f');
            data.forEach(function (d) {
                d.cd = dateFormat_1.parse(d.createDate);
                d.sad = dateFormat_1.parse(d.scheduledArrivalDate);
                d.aad = dateFormat_1.parse(d.actualArrivalDate);
            });
            var mdx = crossfilter(data);
            var all = mdx.groupAll();
            var scheduleArrivalDateDim = mdx.dimension(function (d) {
                return d.sad;
            });
            var loadsGroup = scheduleArrivalDateDim.group();
            var minDate = scheduleArrivalDateDim.bottom(1)[0].sad;
            var maxDate = scheduleArrivalDateDim.top(1)[0].sad;
            var width = $('#chartWidth').width();
            loadsChart_1.width(990 - 30)
                .height(150)
                .dimension(scheduleArrivalDateDim)
                .group(loadsGroup)
                .brushOn(true)
                .elasticX(true)
                .elasticY(true)
                .x(d3.time.scale().domain([minDate, maxDate]))
                .xUnits(d3.time.days)
                .colors(colorScale);
            var statusDim = mdx.dimension(function (d) {
                return d.appointmentStatus;
            });
            var statusGroup = statusDim.group();
            statusChart_1
                .width(500 - 30)
                .height(200)
                .radius(100)
                .dimension(statusDim)
                .group(statusGroup)
                .on('pretransition', function (chart) {
                chart.selectAll('text.pie-slice').text(function (d) {
                    var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                    if (percent > 10) {
                        return d.data.key + '-' + dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                    }
                    else {
                        return '';
                    }
                });
            })
                .legend(dc.legend())
                .colors(colorScale);
            var appttypeDim = mdx.dimension(function (d) {
                return d.apptTypNbr;
            });
            var appttypeGroup = appttypeDim.group();
            appttypeChart_1
                .width(500 - 20)
                .height(200)
                .radius(100)
                .dimension(appttypeDim)
                .group(appttypeGroup)
                .legend(dc.legend())
                .colors(colorScale);
            var getApptTypeName_1 = function (apptType) {
                var name = '';
                switch (apptType) {
                    case '4':
                        name = 'Store to DC';
                        break;
                    case '2':
                        name = 'Carrier to DC';
                        break;
                    case '5':
                        name = 'DC to DC';
                        break;
                    case '11':
                        name = 'Merge Center to DC';
                        break;
                    default:
                        name = apptType;
                }
                return name;
            };
            appttypeChart_1.on('pretransition', function (chart) {
                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text(function (d) {
                    return getApptTypeName_1(d.name);
                });
                chart.selectAll('text.pie-slice').text(function (d) {
                    var percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                    if (percent > 10) {
                        return getApptTypeName_1(d.data.key) + '-' +
                            dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                    }
                    else {
                        return '';
                    }
                });
            });
            var destinationDim = mdx.dimension(function (d) {
                return d.destination;
            });
            var destinationGroup = destinationDim.group();
            var classInstance = this;
            dcChart_1.width(990 - 30)
                .height(250)
                .margins({ top: 20, right: 10, bottom: 80, left: 80 })
                .dimension(destinationDim)
                .group(destinationGroup)
                .brushOn(true)
                .elasticY(true)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .renderlet(function (chart) {
                chart.selectAll('g.x text')
                    .style('text-anchor', 'end')
                    .attr('transform', 'translate(-10,0)rotate(315)');
            });
            dataCount
                .dimension(mdx)
                .group(all)
                .html({
                some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> loads' +
                    ' | <a href="javascript:dc.filterAll(); dc.renderAll();">Reset All</a>',
                all: 'All loads selected. Please click on the graph to apply filters.'
            });
            dataTable
                .dimension(scheduleArrivalDateDim)
                .group(function (d) {
                var format = d3.format('02d');
                return d.destination;
            })
                .size(100)
                .columns([
                {
                    label: 'Load Number',
                    format: function (d) { return d.apptNbr; }
                },
                {
                    label: 'Arrival Date',
                    format: function (d) { return d.actualArrivalDate; }
                },
                {
                    label: 'Cartons',
                    format: function (d) { return d.cartons; }
                },
                {
                    label: 'Locn Name',
                    format: function (d) { return d.locnName; }
                },
                {
                    label: 'Trailer',
                    format: function (d) { return d.trlrNbr; }
                },
                {
                    label: 'Freight Type',
                    format: function (d) { return d.frgtTypNbr; }
                },
                {
                    label: 'Yard',
                    format: function (d) { return d.yardNbr + '-' + d.yardAreaNbr; }
                },
                {
                    label: 'Vendor',
                    format: function (d) { return d.vndName; }
                }
            ])
                .sortBy(function (d) {
                return d.destination;
            })
                .order(d3.ascending)
                .on('renderlet', function (table) {
                table.selectAll('.dc-table-group').classed('info', true);
            });
            dc.renderAll();
            // Re-rendering all charts on reset
            $('#status-chart .reset').on('click', function () {
                statusChart_1.filterAll();
                dc.redrawAll();
            });
            $('#appointment-type-chart .reset').on('click', function () {
                appttypeChart_1.filterAll();
                dc.redrawAll();
            });
            $('#dc-vs-loads-chart .reset').on('click', function () {
                loadsChart_1.filterAll();
                dc.redrawAll();
            });
            $('#dc-chart .reset').on('click', function () {
                dcChart_1.filterAll();
                dc.redrawAll();
            });
            // changing the text color on charts based on smart admin theme
            if (localStorage.getItem('sm-skin') === 'smart-style-5') {
                d3.selectAll('text').style('fill', 'white');
            }
            /* window.onresize = function () {
                 var width = $('#chartDrawWIdth').width();
                 loadsChart
                     .width(width - 25)
                     .height(150)
                     .rescale()
                     .redraw();
                 dcChart
                     .width(width - 25)
                     .height(300)
                     .rescale()
                     .redraw();
                 dataTable
                     .width(width - 25)
                     .rescale()
                     .redraw();
                 if (width <= 847) {
                     width = width;
                 } else {
                     width = width / 2;
                 }

                 statusChart
                     .width((width) - 25)
                     .height(300)
                     .redraw();

                 appttypeChart
                     .width((width) - 25)
                     .height(300)
                     .redraw();
             };*/
        }
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1313),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */]) === "function" && _a || Object])
], AnalyticsComponent);

var _a;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ 1195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__(1338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dcLoadAnalysis1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * This component deals with rendering charts in dashboard
 */
var dcLoadAnalysis1Component = (function () {
    function dcLoadAnalysis1Component(dashboardServices) {
        this.dashboardServices = dashboardServices;
        this.QueryData = { startDate: '', endDate: '' };
        this.myDatePickerOptions = {
            // other options...
            // dateFormat: 'mm-dd-yyyy',
            dateFormat: 'yyyy-mm-dd',
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };
        this.activePageTitle = 'dcLoadAnalysis1';
    }
    dcLoadAnalysis1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.QueryData.startDate = '2017-01-01';
        this.QueryData.endDate = '2017-01-28';
        this.QueryData.endDate = { 'date': { 'day': 28, 'month': 1, 'year': 2017 } };
        this.QueryData.startDate = { 'date': { 'day': 1, 'month': 1, 'year': 2017 } };
        this.dashboardServices.getAnalyticsData().toPromise().then(function (response) {
            _this.renderDashBoardAnalyticsCharts(response);
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
    };
    dcLoadAnalysis1Component.prototype.renderDashBoardAnalyticsCharts = function (data) {
        var onTimeDeliveryStatsCharts = dc.barChart('#on-time-delivery-stats-chart');
        var priorityChart = dc.rowChart('#priority-chart');
        var earlyvsLateLoadsChart = dc.pieChart('#early-vs-late-loads-chart');
        var colorScale = d3.scale.category20b();
        var dateFormat = d3.time.format('%Y-%m-%d');
        var numberFormat = d3.format('.2f');
        data.forEach(function (d) {
            d.cd = dateFormat.parse(d.createDate);
            d.sad = dateFormat.parse(d.scheduledArrivalDate);
            d.aad = dateFormat.parse(d.actualArrivalDate);
        });
        var mdx = crossfilter(data);
        var all = mdx.groupAll();
        var scheduleArrivalDateDim = mdx.dimension(function (d) {
            return d.sad;
        });
        var loadsGroup = scheduleArrivalDateDim.group();
        var minDate = scheduleArrivalDateDim.bottom(1)[0].sad;
        var maxDate = scheduleArrivalDateDim.top(1)[0].sad;
        mdx = crossfilter(data);
        all = mdx.groupAll();
        var dcDim = mdx.dimension(function (d) {
            return d.destination;
        });
        var dcGroup = dcDim.group();
        onTimeDeliveryStatsCharts
            .width(1000 - 30)
            .height(300)
            .margins({ top: 10, right: 10, bottom: 100, left: 50 })
            .dimension(dcDim)
            .group(dcGroup)
            .brushOn(true)
            .centerBar(true)
            .elasticY(true)
            .valueAccessor(function (d) {
            return d.value;
        })
            .x(d3.scale.ordinal().domain(dcDim.top(Infinity).map(function (d) { return d.destination; })))
            .xUnits(dc.units.ordinal)
            .colors(colorScale)
            .renderlet(function (chart) {
            chart.selectAll('g.x text')
                .style('text-anchor', 'end')
                .attr('transform', 'translate(-10,0)rotate(315)');
        });
        // WHEN la.high_value = 1 THEN 1 '
        // + ' WHEN la.high_priority = 1 THEN     2
        var priorityDim = mdx.dimension(function (d) {
            var priority;
            if (d.highValue == 1) {
                priority = 'High Value';
            }
            else if (d.highPriority == 1) {
                priority = 'High Priority';
            }
            else {
                priority = 'Normal Load';
            }
            return priority;
        });
        var priorityGroup = priorityDim.group();
        priorityChart
            .width(500 - 20)
            .height(300)
            .dimension(priorityDim)
            .group(priorityGroup)
            .x(d3.scale.linear())
            .elasticX(true)
            .ordinalColors(['maroon', 'orange', 'green'])
            .gap(25);
        var earlyDim = mdx.dimension(function (d) {
            var dateOne = new Date(d.sad);
            var dateTwo = new Date(d.aad);
            var earlyLoads;
            if (dateOne <= dateTwo) {
                earlyLoads = 'Early Loads';
            }
            else if (dateOne > dateTwo) {
                earlyLoads = 'Late Loads';
            }
            return earlyLoads;
        });
        var earlyGroup = earlyDim.group();
        earlyvsLateLoadsChart
            .width(500 - 20)
            .height(300)
            .radius(100)
            .dimension(earlyDim)
            .group(earlyGroup)
            .legend(dc.legend())
            .colors(colorScale)
            .label(function (d) {
            if (earlyvsLateLoadsChart.hasFilter() && !earlyvsLateLoadsChart.hasFilter(d.key)) {
                return d.key + ' (0%)';
            }
            var label = d.key;
            if (all.value()) {
                label += ' (' + Math.round(d.value / all.value() * 100) + '%)';
            }
            return label;
        });
        dc.renderAll();
        // Re-rendering all charts on reset
        $('#on-time-delivery-stats-chart .reset').on('click', function () {
            onTimeDeliveryStatsCharts.filterAll();
            dc.redrawAll();
        });
        $('#priority-chart .reset').on('click', function () {
            priorityChart.filterAll();
            dc.redrawAll();
        });
        $('#early-vs-late-loads-chart .reset').on('click', function () {
            earlyvsLateLoadsChart.filterAll();
            dc.redrawAll();
        });
        // changing the text color on charts based on smart admin theme
        if (localStorage.getItem('sm-skin') === 'smart-style-5') {
            d3.selectAll('text').style('fill', 'white');
        }
    };
    dcLoadAnalysis1Component.prototype.openReportsDropDown = function () {
        this.DropDownTooglePopup = 'open';
    };
    dcLoadAnalysis1Component.prototype.onReportsEventCancel = function () {
        // closing the dropdown view
        this.DropDownTooglePopup = '';
    };
    dcLoadAnalysis1Component.prototype.onReportsEventSubmit = function () {
        var _this = this;
        if (this.QueryData.startDate != '') {
            var st_year = this.QueryData.startDate.date.year;
            var st_month = this.QueryData.startDate.date.month;
            var st_day = this.QueryData.startDate.date.day;
            var startDate = st_year + '-' + st_month + '-' + st_day;
            this.QueryDataStartDate = __WEBPACK_IMPORTED_MODULE_3_moment__(startDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataStartDate = '';
        }
        if (this.QueryData.endDate != '') {
            var end_year = this.QueryData.endDate.date.year;
            var end_month = this.QueryData.endDate.date.month;
            var end_day = this.QueryData.endDate.date.day;
            var endDate = end_year + '-' + end_month + '-' + end_day;
            this.QueryDataEndDate = __WEBPACK_IMPORTED_MODULE_3_moment__(endDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataEndDate = '';
        }
        if (this.QueryDataStartDate === '' && this.QueryDataEndDate === '') {
            this.isSearchQuerySubmitted = true;
        }
        else {
            // this.loading = true;
            try {
                if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                    this.errorMessage = 'End date should be greater than start date';
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_timers__["setTimeout"])(function () {
                        _this.errorMessage = '';
                    }, 2000);
                }
                else {
                    this.errorMessage = '';
                    var dateRangeObject = {
                        'RP_startdate': this.QueryDataStartDate,
                        'RP_enddate': this.QueryDataEndDate
                    };
                    // this.loading = true;
                    this.dashboardServices.generateReportsData('Analysis', dateRangeObject).toPromise().then(function (response) {
                        _this.DropDownTooglePopup = '';
                        var blob = new Blob([response], { type: 'application/pdf' });
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_file_saver__["saveAs"])(blob, 'Performance_Analysis.pdf');
                        var fileURL = URL.createObjectURL(blob);
                        window.open(fileURL);
                    }, function (error) {
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                    });
                }
            }
            catch (error) {
                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }
    };
    return dcLoadAnalysis1Component;
}());
dcLoadAnalysis1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1314),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */]],
        styles: ["\n    .FilterDropDownAnimation {\n        -webkit-animation-name: none !important;\n        -moz-animation-name: flipInX !important;\n        -o-animation-name: flipInX !important;\n        animation-name: none !important;\n        -webkit-animation-duration: 0s !important;\n        -moz-animation-duration: .4s !important;\n        -o-animation-duration: .4s !important;\n        animation-duration: 0s !important;\n        -webkit-animation-fill-mode: none !important;\n        -moz-animation-fill-mode: both !important;\n        -o-animation-fill-mode: both !important;\n        animation-fill-mode: none !important;\n    }\n\n    .filterFormAlign {\n        margin-top: 5px !important;\n    }\n\n    .filterDropwdownViewAlign {\n        width: 280px !important;\n        color: black;\n        padding: 0px !important;\n    }\n\n    @media only screen and (min-width:768px) {\n        .filterDropwdownViewAlign {\n            left: -160px !important;\n        }\n    }\n\n    @media only screen and (max-width: 479px) and (min-width: 320px) {\n        .filterDropwdownViewAlign {\n            left: -200px !important;\n        }\n    }\n\n    @media only screen and (min-width:479px) and (max-width:768px) {\n        .filterDropwdownViewAlign {\n            min-width: 335px !important;\n            left: -280px !important;\n        }\n    }\n\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dashboards_services__["a" /* DashboardsServices */]) === "function" && _a || Object])
], dcLoadAnalysis1Component);

var _a;
//# sourceMappingURL=dcLoadAnalysis1.component.js.map

/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dashboards_services__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_endpoints__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dcLoadAnalysis2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var self = this;
/**
 * This component deals with rendering charts in dashboard
 */
var dcLoadAnalysis2Component = (function () {
    function dcLoadAnalysis2Component(dashboardServices, http, route) {
        var _this = this;
        this.dashboardServices = dashboardServices;
        this.http = http;
        this.route = route;
        this.QueryData = { startDate: '', endDate: '' };
        this.myDatePickerOptions = {
            // other options...
            // dateFormat: 'mm-dd-yyyy',
            dateFormat: 'yyyy-mm-dd',
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };
        this.options = {
            dom: 'Bfrtip',
            buttons: [
                {
                    text: '<i class="fa fa-refresh"></i> Refresh',
                    className: 'btn bg-color-blueLight  txt-color-white btn-sm dataTableCustomButtonMargin',
                    action: function (e, dt, node, config) {
                        if ($.fn.DataTable.isDataTable('#DataTable table')) {
                            var table = $('#DataTable table').DataTable();
                            table.ajax.reload();
                        }
                    }
                }
            ],
            ajax: function (responseData, callback, settings) {
                var url;
                if (_this.vendorName) {
                    url = __WEBPACK_IMPORTED_MODULE_8__environments_endpoints__["a" /* endponitConfig */].ANALYTICS_API_ENDPOINT + 'getVendorRelatedLoadAppointments/' +
                        _this.vendorNumber + '/' + _this.vendorName;
                }
                else {
                    url = __WEBPACK_IMPORTED_MODULE_8__environments_endpoints__["a" /* endponitConfig */].ANALYTICS_API_ENDPOINT + 'getVendorRelatedLoadAppointments/' +
                        _this.vendorNumber;
                }
                _this.http.get(url, { headers: _this.headers })
                    .map(_this.extractData)
                    .catch(function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    // this.navigateToLogin( this.errorMessage)
                    localStorage.setItem('status', '401');
                    // 401 unauthorized response so log user out of client
                    window.location.href = '/#/error';
                    return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
                })
                    .subscribe(function (respData) {
                    callback({
                        aaData: respData,
                    });
                });
            },
            columns: [
                { data: 'apptNbr', responsivePriority: 5 }, { data: 'destination', responsivePriority: 2 },
                { data: 'scheduledArrivalDate', responsivePriority: 1 }, { data: 'actualArrivalDate', responsivePriority: 4 }, {
                    data: 'vndName', responsivePriority: 6,
                }, {
                    data: 'apptTypNbr',
                    responsivePriority: 3,
                    render: function (data, type, row) {
                        data = +data;
                        var statusName;
                        if (data === 1) {
                            statusName = 'Load Created';
                        }
                        else if (data === 2) {
                            statusName = 'Load Assigned';
                        }
                        else if (data === 3) {
                            statusName = 'Driver Login';
                        }
                        else if (data === 4) {
                            statusName = 'Load Accepted';
                        }
                        else if (data === 5) {
                            statusName = 'Load Completed';
                        }
                        else {
                            statusName = 'No Status';
                        }
                        return statusName;
                    }
                }
            ],
        };
        this.activePageTitle = 'dcLoadAnalysis2';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
        this.headers.append('Content-Type', 'application/json');
    }
    dcLoadAnalysis2Component.prototype.showChildModal = function () {
        this.analyticspopup.show();
    };
    dcLoadAnalysis2Component.prototype.hideChildModal = function () {
        this.analyticspopup.hide();
    };
    dcLoadAnalysis2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.QueryData.startDate = '2017-01-01';
        this.QueryData.endDate = '2017-01-28';
        this.QueryData.endDate = { 'date': { 'day': 28, 'month': 1, 'year': 2017 } };
        this.QueryData.startDate = { 'date': { 'day': 1, 'month': 1, 'year': 2017 } };
        this.dashboardServices.getAnalyticsData().toPromise().then(function (response) {
            _this.renderDashBoardAnalyticsCharts(response);
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
    };
    dcLoadAnalysis2Component.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data;
        }
        else {
            return {};
        }
    };
    dcLoadAnalysis2Component.prototype.dispalyDate = function (cellvalue, options, rowObject) {
        if (cellvalue === '1900-01-01') {
            return '';
        }
        else {
            return cellvalue;
        }
    };
    // replace icons with FontAwesome icons like above
    dcLoadAnalysis2Component.prototype.updatePagerIcons = function (table) {
        var replacement = {
            'ui-icon-seek-first': 'ace-icon fa fa-angle-double-left bigger-140',
            'ui-icon-seek-prev': 'ace-icon fa fa-angle-left bigger-140',
            'ui-icon-seek-next': 'ace-icon fa fa-angle-right bigger-140',
            'ui-icon-seek-end': 'ace-icon fa fa-angle-double-right bigger-140'
        };
        $('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function () {
            var icon = $(this);
            var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
            if ($class in replacement) {
                icon.attr('class', 'ui-icon ' + replacement[$class]);
            }
        });
    };
    dcLoadAnalysis2Component.prototype.renderDashBoardAnalyticsCharts = function (data) {
        var bubbleCloud = dc.bubbleCloud('#dc-loads-size-chart');
        var vendorsChart = dc.barChart('#vendor-loads-chart');
        var dcCompositeChart = dc.compositeChart('#dc-composite-chart');
        // const appType: any;
        var colorScale = d3.scale.category20b();
        var dateFormat = d3.time.format('%Y-%m-%d');
        var numberFormat = d3.format('.2f');
        data.forEach(function (d) {
            d.cd = dateFormat.parse(d.createDate);
            d.sad = dateFormat.parse(d.scheduledArrivalDate);
            d.aad = dateFormat.parse(d.actualArrivalDate);
        });
        var mdx = crossfilter(data);
        var all = mdx.groupAll();
        var dcDim = mdx.dimension(function (d) {
            return d.destination;
        });
        var dcGroup = dcDim.group().reduceSum(function (d) { return d.cartons; });
        bubbleCloud.
            width(1000 - 200)
            .height(450)
            .elasticRadius(true)
            .r(d3.scale.linear().domain([0, 500]))
            .maxBubbleRelativeSize(0.12)
            .radiusValueAccessor(function (d) {
            return d.value;
        })
            .dimension(dcDim)
            .group(dcGroup)
            .colors(colorScale)
            .x(d3.scale.ordinal());
        var vendorDim = mdx.dimension(function (d) {
            return d.vndName;
        });
        var vendorGroup = vendorDim.group();
        var classInstance = this;
        vendorsChart.width(1000 - 30)
            .height(300)
            .margins({ top: 10, right: 10, bottom: 100, left: 20 })
            .dimension(vendorDim)
            .group(vendorGroup)
            .elasticY(true)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .colors(colorScale)
            .renderlet(function (chart) {
            chart.selectAll('g.x text')
                .style('text-anchor', 'end')
                .attr('transform', 'translate(-10,0)rotate(315)');
        })
            .on('renderlet.somename', function (chart) {
            chart.selectAll('rect').on('click', function (d) {
                var array = bubbleCloud.filters();
                classInstance.vendorNumber = d.x;
                var dcName;
                array.forEach(function (dcData) {
                    if (dcName) {
                        dcName = dcName + ',' + dcData;
                    }
                    else {
                        dcName = dcData;
                    }
                });
                classInstance.vendorName = dcName;
                classInstance.analyticspopup.show();
            });
        });
        var dcDimension = mdx.dimension(function (d) { return d.destination; });
        var earlyLoadsGroup = dcDimension.group().reduce(function (p, v) {
            var dateOne = new Date(v.sad);
            var dateTwo = new Date(v.aad);
            if (dateTwo.getDate() <= dateOne.getDate()) {
                ++p.count;
            }
            return p;
        }, function (p, v) {
            var dateOne = new Date(v.sad);
            var dateTwo = new Date(v.aad);
            if (dateTwo.getDate() <= dateOne.getDate()) {
                --p.count;
            }
            return p;
        }, function () {
            return { count: 0 };
        });
        var lateLoadsGroup = dcDimension.group().reduce(function (p, v) {
            var dateOne = new Date(v.sad);
            var dateTwo = new Date(v.aad);
            if (dateTwo.getDate() > dateOne.getDate()) {
                ++p.count;
            }
            return p;
        }, function (p, v) {
            var dateOne = new Date(v.sad);
            var dateTwo = new Date(v.aad);
            if (dateTwo.getDate() > dateOne.getDate()) {
                --p.count;
            }
            return p;
        }, function () {
            return { count: 0 };
        });
        dcCompositeChart.width(1000 - 30)
            .height(400)
            .margins({ top: 10, right: 10, bottom: 100, left: 20 })
            .dimension(dcDimension)
            .transitionDuration(500)
            .elasticY(true)
            .brushOn(true)
            .title(function (d) {
            return d.key + ' : ' + d.value.count;
        })
            .legend(dc.legend().x(800).y(10).itemHeight(13).gap(5))
            .renderlet(function (chart) {
            chart.selectAll('g.x text')
                .style('text-anchor', 'end')
                .attr('transform', 'translate(-10,0)rotate(315)');
        })
            .x(d3.scale.ordinal().domain(dcDimension.top(Infinity).map(function (d) { return d.destination; })))
            .xUnits(dc.units.ordinal)
            .compose([
            dc.lineChart(dcCompositeChart)
                .group(earlyLoadsGroup, 'Early Loads')
                .valueAccessor(function (d) { return d.value.count; }),
            dc.lineChart(dcCompositeChart)
                .group(lateLoadsGroup, 'Late Loads')
                .valueAccessor(function (d) { return d.value.count; })
                .colors('red')
        ]);
        dc.renderAll();
        $('#dc-loads-size-chart .reset').on('click', function () {
            bubbleCloud.filterAll();
            dc.redrawAll();
        });
        $('#vendor-loads-chart .reset').on('click', function () {
            vendorsChart.filterAll();
            dc.redrawAll();
        });
        $('#dc-composite-chart .reset').on('click', function () {
            dcCompositeChart.filterAll();
            dc.redrawAll();
        });
        // changing the text color on charts based on smart admin theme
        if (localStorage.getItem('sm-skin') === 'smart-style-5') {
            d3.selectAll('text').style('fill', 'white');
        }
    };
    dcLoadAnalysis2Component.prototype.openReportsDropDown = function () {
        this.DropDownTooglePopup = 'open';
    };
    dcLoadAnalysis2Component.prototype.onReportsEventCancel = function () {
        // closing the dropdown view
        this.DropDownTooglePopup = '';
    };
    dcLoadAnalysis2Component.prototype.onReportsEventSubmit = function () {
        var _this = this;
        if (this.QueryData.startDate != '') {
            var st_year = this.QueryData.startDate.date.year;
            var st_month = this.QueryData.startDate.date.month;
            var st_day = this.QueryData.startDate.date.day;
            var startDate = st_year + '-' + st_month + '-' + st_day;
            this.QueryDataStartDate = __WEBPACK_IMPORTED_MODULE_9_moment__(startDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataStartDate = '';
        }
        if (this.QueryData.endDate != '') {
            var end_year = this.QueryData.endDate.date.year;
            var end_month = this.QueryData.endDate.date.month;
            var end_day = this.QueryData.endDate.date.day;
            var endDate = end_year + '-' + end_month + '-' + end_day;
            this.QueryDataEndDate = __WEBPACK_IMPORTED_MODULE_9_moment__(endDate).format('YYYY-MM-DD');
        }
        else {
            this.QueryDataEndDate = '';
        }
        if (this.QueryDataStartDate == '' && this.QueryDataEndDate == '') {
            this.isSearchQuerySubmitted = true;
        }
        else {
            // this.loading = true;
            try {
                if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                    this.errorMessage = 'End date should be greater than start date';
                    setTimeout(function () {
                        _this.errorMessage = '';
                    }, 3000);
                }
                else {
                    this.errorMessage = '';
                    var dateRangeObject = {
                        'RP_startdate': this.QueryDataStartDate,
                        'RP_enddate': this.QueryDataEndDate
                    };
                    // this.loading = true;
                    this.dashboardServices.generateReportsData('Dc_analysis', dateRangeObject).toPromise().then(function (response) {
                        _this.DropDownTooglePopup = '';
                        var blob = new Blob([response], { type: 'application/pdf' });
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_file_saver__["saveAs"])(blob, 'Vendor_vs_LoadAnalysis.pdf');
                        var fileURL = URL.createObjectURL(blob);
                        window.open(fileURL);
                    });
                }
            }
            catch (error) {
                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }
    };
    return dcLoadAnalysis2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('analyticspopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _a || Object)
], dcLoadAnalysis2Component.prototype, "analyticspopup", void 0);
dcLoadAnalysis2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1315),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_dashboards_services__["a" /* DashboardsServices */]],
        styles: ["\n    .FilterDropDownAnimation {\n    -webkit-animation-name: none !important;\n    -moz-animation-name: flipInX !important;\n    -o-animation-name: flipInX !important;\n    animation-name: none !important;\n    -webkit-animation-duration: 0s !important;\n    -moz-animation-duration: .4s !important;\n    -o-animation-duration: .4s !important;\n    animation-duration: 0s !important;\n    -webkit-animation-fill-mode: none !important;\n    -moz-animation-fill-mode: both !important;\n    -o-animation-fill-mode: both !important;\n    animation-fill-mode: none !important;\n}\n\n    .filterFormAlign{\n    margin-top: 5px !important;\n    }\n\n  .filterDropwdownViewAlign{\n    width: 280px !important;\n  color:black;\n  padding:0px !important;\n  }\n  @media only screen and (min-width:768px){\n    .filterDropwdownViewAlign{\n    left: -160px !important;\n    }\n    }\n    @media only screen and (max-width: 479px) and (min-width: 320px){\n      .filterDropwdownViewAlign{\n      left:-200px !important;\n      }\n    }\n    @media only screen and (min-width:479px) and (max-width:768px){\n      .filterDropwdownViewAlign{\n      min-width: 335px !important;\n      left: -280px !important;\n      }\n      }"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_dashboards_services__["a" /* DashboardsServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_dashboards_services__["a" /* DashboardsServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], dcLoadAnalysis2Component);

var _a, _b, _c, _d;
//# sourceMappingURL=dcLoadAnalysis2.component.js.map

/***/ }),

/***/ 1197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driverLocations_services__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverLocationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DriverLocationsComponent = (function () {
    function DriverLocationsComponent(el, dashboardService, router, weatherComponent) {
        this.el = el;
        this.dashboardService = dashboardService;
        this.router = router;
        this.weatherComponent = weatherComponent;
        this.getloadsdetails = 123;
        this.dealerImage = '././assets/img/map/dealer_icon.png';
        this.driverImage = '././assets/img/map/PickupInspector.png';
        this.pickupInspectorImage = 'resources/theme/img/map/truck-icon.png';
        this.weatherIcon = '././assets/img/map/weather.png';
        this.pcpUpInSP_lat = '33.881315';
        this.pcpUpInSP_lang = '-84.255382';
        this.pcpUpInspName = 'Terminal Manager';
        this.directions = L.mapbox.directions();
        this.origin = [];
        this.loadListQueryArray = [];
        this.loadNumberList = [{ value: '', label: '' }];
        this.drivermarker = [];
        this.dealermarker = [];
        this.waypointmarker = [];
        this.weatherDriverlat = '';
        this.weatherDriverlng = '';
        this.loadQueryData = { loadNumber: '' };
    }
    DriverLocationsComponent.prototype.showChildModal = function () {
        this.weatherDetailsModal.show();
    };
    DriverLocationsComponent.prototype.hideChildModal = function () {
        this.weatherDetailsModal.hide();
    };
    DriverLocationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        L.mapbox.accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw';
        this.map = L.mapbox.map('map', 'mapbox.streets', {
            zoomControl: true,
            minZoom: 2,
            maxZoom: 6
        }).setView([39.428893, -103.397667], 4);
        this.getAcceptedLoads();
        this.clearIntervalListData = window.setInterval(function () {
            _this.getAcceptedLoads();
        }, 100 * __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].AUTO_REFRESH_SERVICE_TIME);
    };
    DriverLocationsComponent.prototype.getloadDetailsbyLoadnum = function (loadNum) {
        var _this = this;
        this.getLoadDetailsById(this.loadQueryData.loadNumber);
        // tracking the driver location for every 30 seconds
        this.clearIntervalData = window.setInterval(function () {
            _this.updateLoadDetailsById(_this.loadQueryData.loadNumber);
        }, 1000 * __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].AUTO_REFRESH_SERVICE_TIME);
    };
    DriverLocationsComponent.prototype.getLoadDetailsById = function (loadNum) {
        var _this = this;
        // get loads by id
        this.dashboardService.getloadsbyloadnumber(loadNum).then(function (response) {
            _this.loaddetails = response;
            // set map
            _this.setMapDirections(response);
            // driver marker
            _this.driverMarker(response);
            _this.getTimeandDistanceData(_this.loaddetails.driver.latitude, _this.loaddetails.driver.longitude, _this.loaddetails.destLocNbr.latitude, _this.loaddetails.destLocNbr.longitude);
        }, function (error) { return error; });
    };
    // for updating the driver locations and latlong values
    DriverLocationsComponent.prototype.updateLoadDetailsById = function (loadNum) {
        var _this = this;
        // get loads by id
        this.dashboardService.getloadsbyloadnumber(loadNum).then(function (response) {
            _this.loaddetails = response;
            // driver marker
            _this.driverMarker(response);
            _this.getTimeandDistanceData(_this.loaddetails.driver.latitude, _this.loaddetails.driver.longitude, _this.loaddetails.destLocNbr.latitude, _this.loaddetails.destLocNbr.longitude);
        }, function (error) { return error; });
    };
    DriverLocationsComponent.prototype.getAcceptedLoads = function () {
        var _this = this;
        this.dashboardService.getAcceptedloadNumbers().subscribe(function (response) {
            _this.loadErrorData = false;
            _this.getLoadserrorResponse = '';
            _this.loadListQueryArray = response.data;
        }, function (error) {
            error;
            if (error.status == 404) {
                _this.getLoadserrorResponse = error.exception;
                _this.loadErrorData = true;
            }
            else {
                _this.router.navigate(['/error']);
            }
        });
    };
    // get time and distance
    DriverLocationsComponent.prototype.getTimeandDistanceData = function (orginLat, originLng, destLat, destLng) {
        var _this = this;
        this.dashboardService.getdistanceandTime(orginLat, originLng, destLat, destLng).subscribe(function (response) {
            _this.loaddetails.setEstimateTime = response.rows[0].elements[0].duration.text;
            var seconds = response.rows[0].elements[0].duration.value;
            var finalDateInMiliSeconds = new Date().getTime() + (seconds * 1000);
            _this.loaddetails.setEstimateArrivalTime = new Date(finalDateInMiliSeconds);
            _this.loaddetails.setEstimateDest = response.rows[0].elements[0].distance.text;
        }, function (error) {
            error;
        });
    };
    // laod map data
    DriverLocationsComponent.prototype.setMapDirections = function (loadData) {
        // let direction = L.mapbox.directions();
        this.map.remove();
        this.directions = new L.mapbox.directions();
        this.map = L.mapbox.map('map', 'mapbox.streets', {
            zoomControl: true,
            minZoom: 2,
            maxZoom: 20
        }).setView([loadData.driver.latitude, loadData.driver.longitude], 7);
        this.directionsLayer = L.mapbox.directions.layer(this.directions)
            .addTo(this.map);
        var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', this.directions)
            .addTo(this.map);
        var directionsRoutesControl = L.mapbox.directions.routesControl('routes', this.directions)
            .addTo(this.map);
        this.directions.setOrigin(L.latLng(loadData.originLocNbr.latitude, loadData.originLocNbr.longitude));
        this.directions.setDestination(L.latLng(loadData.destLocNbr.latitude, loadData.destLocNbr.longitude));
        this.directions.query();
        var directionsLayer = L.mapbox.directions.layer(this.directions, { 'readonly': true }).addTo(this.map);
        directionsRoutesControl = L.mapbox.directions.routesControl('routes', this.directions)
            .addTo(this.map);
    };
    // driver marker update
    DriverLocationsComponent.prototype.driverMarker = function (loadData) {
        if (this.drivermarker !== [] || this.dealermarker !== [] || this.waypointmarker !== []) {
            this.map.removeLayer(this.drivermarker);
        }
        var drivermarker = '';
        drivermarker = L.icon({
            iconUrl: '../../../../assets/img/map/truck-icon.png',
            iconAnchor: [0, 0]
        });
        this.drivermarker = L.marker([loadData.driver.latitude, loadData.driver.longitude], { icon: drivermarker })
            .bindPopup('Driver : ' + loadData.driver.firstName + ' ' + loadData.driver.lastName)
            .addTo(this.map);
    };
    // get weather details
    DriverLocationsComponent.prototype.viewWeather = function (driverLat, driverLng) {
        var _this = this;
        this.weatherLoader = true;
        this.weatherComponent.getWeatherReport(driverLat, driverLng).subscribe(function (data) {
            if (data != null) {
                _this.weatherResponse = data;
                var tempF = _this.weatherResponse.temp;
                var tempC = (tempF - 32) * 5 / 9;
                _this.weatherResponse.tempC = Math.round(tempC);
                var windDirection = void 0;
                var windDirectionAngle = _this.weatherResponse.windd, windSpeed = _this.weatherResponse.winds, gust = _this.weatherResponse.gust;
                if ((windDirectionAngle >= 0 && windDirectionAngle < 22.5)) {
                    windDirection = 'N';
                }
                else if (windDirectionAngle === 22.5) {
                    windDirection = 'NNE';
                }
                else if ((windDirectionAngle > 22.5 && windDirectionAngle < 67.5)) {
                    windDirection = 'NE';
                }
                else if (windDirectionAngle === 67.5) {
                    windDirection = 'ENE';
                }
                else if ((windDirectionAngle > 67.5 && windDirectionAngle < 112.5)) {
                    windDirection = 'E';
                }
                else if (windDirectionAngle === 112.5) {
                    windDirection = 'ESE';
                }
                else if ((windDirectionAngle > 112.5 && windDirectionAngle < 157.5)) {
                    windDirection = 'SE';
                }
                else if (windDirectionAngle === 157.5) {
                    windDirection = 'SSE';
                }
                else if ((windDirectionAngle > 157.5 && windDirectionAngle < 202.5)) {
                    windDirection = 'S';
                }
                else if (windDirectionAngle === 202.5) {
                    windDirection = 'SSW';
                }
                else if ((windDirectionAngle > 202.5 && windDirectionAngle < 247.5)) {
                    windDirection = 'SW';
                }
                else if (windDirectionAngle === 247.5) {
                    windDirection = 'WSW';
                }
                else if ((windDirectionAngle > 247.5 && windDirectionAngle < 292.5)) {
                    windDirection = 'W';
                }
                else if (windDirectionAngle === 292.5) {
                    windDirection = 'WNW';
                }
                else if ((windDirectionAngle > 292.5 && windDirectionAngle < 337.5)) {
                    windDirection = 'NW';
                }
                else if (windDirectionAngle === 337.5) {
                    windDirection = 'NNW';
                }
                else if ((windDirectionAngle > 337.5 && windDirectionAngle <= 360)) {
                    windDirection = 'N';
                }
                if (windSpeed === '0' && windDirectionAngle === '0') {
                    _this.weatherResponse.wind_speed = 'calm';
                }
                else if (windSpeed === 0 && windDirectionAngle === 'NA') {
                    _this.weatherResponse.wind_speed = 'NA';
                }
                else {
                    if (gust === '0' || gust === 'NA') {
                        _this.weatherResponse.wind_speed = windDirection + ' ' + _this.weatherResponse.winds + ' MPH';
                    }
                    else {
                        _this.weatherResponse.wind_speed = windDirection + ' ' + _this.weatherResponse.winds + ' G ' + gust + ' MPH';
                    }
                }
                var altimeter = _this.weatherResponse.altimeter;
                if (altimeter === '0') {
                    _this.weatherResponse.barometer = _this.weatherResponse.slp;
                }
                else {
                    _this.weatherResponse.barometer = _this.weatherResponse.slp + ' in (' + _this.weatherResponse.altimeter + ' mb)';
                }
                var dewpF = _this.weatherResponse.dewp;
                var dewpC = (dewpF - 32) * 5 / 9;
                dewpC = Math.round(dewpC);
                _this.weatherResponse.dewPOintInDeg = dewpC;
                var humidity = _this.weatherResponse.relh;
                var heatIndexF = void 0, heatIndexC = void 0;
                if (tempF > 80 && humidity > 40 && dewpF > 60) {
                    heatIndexF = -42.379
                        + 2.04901523 * tempF
                        + 10.14333127 * humidity
                        - .22475541 * tempF * humidity
                        - .00683783 * tempF * tempF
                        - .05481717 * humidity * humidity
                        + .00122874 * tempF * tempF * humidity
                        + .00085282 * tempF * humidity * humidity
                        - .00000199 * tempF * tempF * humidity * humidity;
                    heatIndexF = Math.round(heatIndexF);
                    heatIndexC = (heatIndexF - 32) * 5 / 9;
                    heatIndexC = Math.round(heatIndexC);
                    _this.weatherResponse.heatIndexF = heatIndexF;
                    _this.weatherResponse.heatIndexC = heatIndexC;
                }
                _this.weatherLoader = false;
            }
            else {
                _this.weatherLoader = false;
                _this.weatherResponse = null;
                // this.DriverLocationErrorDetails = 'Unable to get weather details';
                console.log('Unable to get user details');
            }
        }, function (error) {
            _this.weatherLoader = false;
            _this.weatherErrorResponse = error;
        });
        this.weatherDetailsModal.show();
    };
    DriverLocationsComponent.prototype.ngOnDestroy = function () {
        window.clearInterval(this.clearIntervalData);
        window.clearInterval(this.clearIntervalListData);
    };
    return DriverLocationsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('weatherDetailsModal'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _a || Object)
], DriverLocationsComponent.prototype, "weatherDetailsModal", void 0);
DriverLocationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1316),
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_driverLocations_services__["a" /* DashboardDriverService */], __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__["a" /* WeatherComponent */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: ["\n   .weather-parameters > b{\n   font-family: Verdana;\n   font-size: 14px;\n   line-height: 2.1;\n      }\n      .weather-parameters > span {\n   font-family: Verdana;\n   font-size: 14px;\n   line-height: 2.1;\n      }\n    .loader {\n     border: 16px solid #f3f3f3;\n     border-radius: 50%;\n     border-top: 16px solid #3498db;\n     width: 60px;\n     height: 60px;\n     left:42%;\n    -webkit-animation: spin 2s linear infinite;\n     animation: spin 2s linear infinite;\n    }\n\n    .weather-img{\n        padding:6%;\n    }\n\n@-webkit-keyframes spin {\n 0% { -webkit-transform: rotate(0deg); }\n 100% { -webkit-transform: rotate(360deg); }\n}\n\n@keyframes spin {\n 0% { transform: rotate(0deg); }\n 100% { transform: rotate(360deg); }\n}"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_driverLocations_services__["a" /* DashboardDriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_driverLocations_services__["a" /* DashboardDriverService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__["a" /* WeatherComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__weather_weather_component__["a" /* WeatherComponent */]) === "function" && _e || Object])
], DriverLocationsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=driverLocations.component.js.map

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dashboards_services__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_driverLocations_services__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveTrackingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LiveTrackingComponent = (function () {
    function LiveTrackingComponent(router, dashboardsServices, cdr, dashboardservice, weatherComponent) {
        this.router = router;
        this.dashboardsServices = dashboardsServices;
        this.cdr = cdr;
        this.dashboardservice = dashboardservice;
        this.weatherComponent = weatherComponent;
        this.addMarker = [];
        this.globalmarkers = new L.MarkerClusterGroup();
        this.GloabalHighvalueLoadGroup = new L.MarkerClusterGroup();
        this.GloabalHighPriorityLoadGroup = new L.MarkerClusterGroup();
        this.GloabalNormalLoadGroup = new L.MarkerClusterGroup();
        this.markers3 = new L.MarkerClusterGroup();
        this.setAttribute = true;
        this.activePageTitle = 'Live Tracking';
    }
    LiveTrackingComponent.prototype.showChildModal = function () {
        this.loadviewPopup.show();
    };
    LiveTrackingComponent.prototype.ngOnInit = function () {
        this.renderLiveTrackingMap();
        this.normalloadSelected = true;
        this.highvalueSelected = true;
        this.highprioritySelected = true;
    };
    LiveTrackingComponent.prototype.renderLiveTrackingMap = function () {
        var _this = this;
        L.mapbox.accessToken = __WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].MAPBOX_ACCESSTOKEN;
        this.map = L.mapbox.map('map', 'mapbox.streets')
            .setView([39.428893, -103.397667], 4);
        this.setMarkerData(this.map);
        // update markers position every 30 sec
        this.clearInterval = window.setInterval(function () {
            for (var _i = 0, _a = _this.loads; _i < _a.length; _i++) {
                var load = _a[_i];
                _this.markers.removeLayer(_this.addMarker[load.apptNbr]);
            }
            _this.setMarkerData(_this.map);
        }, 1000 * __WEBPACK_IMPORTED_MODULE_7__environments_endpoints__["a" /* endponitConfig */].AUTO_REFRESH_SERVICE_TIME);
        this.globalMap = this.map;
    };
    LiveTrackingComponent.prototype.setMarkerData = function (mapInstance) {
        var _this = this;
        this.dashboardservice.getAcceptedloadNumbers().subscribe(function (loadList) {
            _this.loads = loadList.data;
            _this.markers = new L.MarkerClusterGroup();
            // for loop close
            _this.addMarkersOnMap(mapInstance);
            _this.globalmarkers = _this.markers;
            var HighvalueLoadGroup = new L.MarkerClusterGroup();
            var HighPriorityLoadGroup = new L.MarkerClusterGroup();
            var NormalLoadGroup = new L.MarkerClusterGroup();
            _this.markers.eachLayer(function (mark) {
                if (mark.options.icon.options.className === 'highValueLoadMarker') {
                    HighvalueLoadGroup.addLayer(mark);
                }
                else if (mark.options.icon.options.className === 'highPriorityLoadMarker') {
                    HighPriorityLoadGroup.addLayer(mark);
                }
                else {
                    NormalLoadGroup.addLayer(mark);
                }
            });
            _this.GloabalHighvalueLoadGroup = HighvalueLoadGroup;
            _this.GloabalHighPriorityLoadGroup = HighPriorityLoadGroup;
            _this.GloabalNormalLoadGroup = NormalLoadGroup;
            if (!_this.normalloadSelected) {
                _this.LoadFilter(_this.normalloadSelected, 3);
            }
            if (!_this.highvalueSelected) {
                _this.LoadFilter(_this.highvalueSelected, 2);
            }
            if (!_this.highprioritySelected) {
                _this.LoadFilter(_this.highprioritySelected, 1);
            }
        }, function (error) {
            error;
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
    };
    LiveTrackingComponent.prototype.addMarkersOnMap = function (mapInstance) {
        var classInstance = this;
        var _loop_1 = function (load) {
            var myIcon = void 0;
            if (load.highPriorityLoad === 1) {
                myIcon = L.divIcon({
                    className: 'highPriorityLoadMarker',
                    iconSize: 20
                });
            }
            else if (load.highValueLoad === 1) {
                myIcon = L.divIcon({
                    className: 'highValueLoadMarker',
                    iconSize: 20
                });
            }
            else {
                myIcon = L.divIcon({
                    className: 'normalLoadMarker',
                    iconSize: 20
                });
            }
            this_1.addMarker[load.apptNbr] = L.marker([load.driver.latitude, load.driver.longitude], {
                icon: myIcon
            })
                .on('mouseover', function (e) {
                var popup = L.popup()
                    .setLatLng(e.latlng)
                    .setContent('<html><b>DriverName : </b>' + load.driver.firstName +
                    '<br><b>Load Number : </b>' + load.apptNbr + '</html>')
                    .openOn(mapInstance);
            })
                .on('mouseout', function () {
                mapInstance.closePopup();
            })
                .on('click', function (e) {
                classInstance.currentMarker = this;
                classInstance.showLoadDetails(load.apptNbr, classInstance.currentMarker);
            });
            this_1.markers.addLayer(this_1.addMarker[load.apptNbr]);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.loads; _i < _a.length; _i++) {
            var load = _a[_i];
            _loop_1(load);
        }
        this.map.addLayer(this.markers);
    };
    LiveTrackingComponent.prototype.showLoadDetails = function (loadNum, marker) {
        this.getLoadDetailsById(loadNum);
    };
    LiveTrackingComponent.prototype.getLoadDetailsById = function (loadNum) {
        var _this = this;
        this.dashboardsServices.getLoadAppointmentById(loadNum).subscribe(function (loadData) {
            _this.loadViewData = loadData;
            _this.loadviewPopup.show();
            // this.cdr.detectChanges();
            _this.dummyPreview = loadData;
        });
    };
    LiveTrackingComponent.prototype.LoadFilter = function (status, val) {
        var HighPriorityLoadCGroup = new L.MarkerClusterGroup();
        if (val === 2) {
            status === true ? (this.highvalueSelected = true) : (this.highvalueSelected = false);
            HighPriorityLoadCGroup = this.GloabalHighvalueLoadGroup;
        }
        else if (val === 1) {
            status === true ? (this.highprioritySelected = true) : (this.highprioritySelected = false);
            HighPriorityLoadCGroup = this.GloabalHighPriorityLoadGroup;
        }
        else {
            status === true ? (this.normalloadSelected = true) : (this.normalloadSelected = false);
            HighPriorityLoadCGroup = this.GloabalNormalLoadGroup;
        }
        this.markers3 = this.globalmarkers;
        this.globalMap.removeLayer(this.globalmarkers);
        if (!status) {
            this.markers3.removeLayer(HighPriorityLoadCGroup);
        }
        else {
            this.markers3.addLayer(HighPriorityLoadCGroup);
        }
        this.globalMap.addLayer(this.markers3);
    };
    LiveTrackingComponent.prototype.ngOnDestroy = function () {
        // this.cdr.detach();
        window.clearInterval(this.clearInterval);
    };
    LiveTrackingComponent.prototype.updateMarkerData = function () {
        var _this = this;
        this.dashboardservice.getAcceptedloadNumbers().subscribe(function (loadList) {
            _this.loads = loadList.data;
            _this.markers = new L.MarkerClusterGroup();
            for (var _i = 0, _a = _this.loads; _i < _a.length; _i++) {
                var load = _a[_i];
                var newLatLng = new L.LatLng(load.driver.latitude, load.driver.longitude);
                _this.addMarker[load.apptNbr].setLatLng(newLatLng).update();
            }
            if (_this.normalloadSelected) {
                _this.LoadFilter(true, 3);
            }
            else {
                _this.LoadFilter(false, 3);
            }
            if (_this.highvalueSelected) {
                _this.LoadFilter(true, 2);
            }
            else {
                _this.LoadFilter(false, 2);
            }
            if (_this.highprioritySelected) {
                _this.LoadFilter(true, 1);
            }
            else {
                _this.LoadFilter(false, 1);
            }
            // this.map.addLayer(this.markers);
        });
    };
    return LiveTrackingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadviewPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _a || Object)
], LiveTrackingComponent.prototype, "loadviewPopup", void 0);
LiveTrackingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1317),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_dashboards_services__["a" /* DashboardsServices */], __WEBPACK_IMPORTED_MODULE_4__services_driverLocations_services__["a" /* DashboardDriverService */], __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */]],
        styles: ["/* Live Tracking */\n\t.normalLoadMarker,\n\t.highPriorityLoadMarker,\n\t.highValueLoadMarker {\n\t\tbox-sizing: border-box;\n\t\tbox-shadow: 2px 2px 4px #333;\n\t\tborder: 5px solid #346FF7;\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tborder-radius: 10px;\n\t\tfloat: left;\n\t}\n\n\t.normalLoadMarker {\n\t\tbackground: #05F24C;\n\t}\n\n\t.highPriorityLoadMarker {\n\t\tbackground: #FFFF00;\n\t}\n\n\t.highValueLoadMarker {\n\t\tbackground: red;\n\t}\n\n\t.markers input {\n\t\tdisplay: none;\n\t}\n\n\t.markers label {\n\t\tfont-weight: bold;\n\t\tcolor: #fff\n\t}\n"]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dashboards_services__["a" /* DashboardsServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dashboards_services__["a" /* DashboardsServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_driverLocations_services__["a" /* DashboardDriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_driverLocations_services__["a" /* DashboardDriverService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__weather_weather_component__["a" /* WeatherComponent */]) === "function" && _f || Object])
], LiveTrackingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=liveTracking.component.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherComponent = (function () {
    function WeatherComponent(router, http) {
        this.router = router;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        // this.headers.set('X-Auth-Token', localStorage.getItem('token'));
        // this.headers.set('X-Auth-Token', localStorage.getItem('token'));
        this.headers.append("Authorization", localStorage.getItem('Authentication'));
    }
    WeatherComponent.prototype.getWeatherReport = function (latitude, longitude) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_endpoints__["a" /* endponitConfig */].SOLAR_API_ENDPOINT
            + 'locations/weatherinfo/' + latitude + '/' + longitude + '/', { headers: this.headers })
            .map(function (res) { return res.json().data; }).catch(this.handleError);
    };
    WeatherComponent.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error._body);
    };
    return WeatherComponent;
}());
WeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], WeatherComponent);

var _a, _b;
//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ 1242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard = (function () {
    function Dashboard() {
    }
    return Dashboard;
}());
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboards',
        styles: [],
        template: ""
    }),
    __metadata("design:paramtypes", [])
], Dashboard);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_liveTracking_liveTracking_component__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_driverLocations_driverLocations_component__ = __webpack_require__(1197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_analytics_analytics_component__ = __webpack_require__(1194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dcLoadAnalysis1_dcLoadAnalysis1_component__ = __webpack_require__(1195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dcLoadAnalysis2_dcLoadAnalysis2_component__ = __webpack_require__(1196);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






// noinspection TypeScriptValidateTypes
var routes = [
    { path: '', redirectTo: 'driverLocation', pathMatch: 'full' },
    { path: 'driverLocation', component: __WEBPACK_IMPORTED_MODULE_2__components_driverLocations_driverLocations_component__["a" /* DriverLocationsComponent */], data: { pageTitle: 'Driver Location' }, },
    { path: 'liveTracking', component: __WEBPACK_IMPORTED_MODULE_1__components_liveTracking_liveTracking_component__["a" /* LiveTrackingComponent */], data: { pageTitle: 'Live Tracking' }, },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_3__components_analytics_analytics_component__["a" /* AnalyticsComponent */], data: { pageTitle: 'Analytics' }, },
    { path: 'dcLoadAnalysis1', component: __WEBPACK_IMPORTED_MODULE_4__components_dcLoadAnalysis1_dcLoadAnalysis1_component__["a" /* dcLoadAnalysis1Component */], data: { pageTitle: 'Performance Analysis' }, },
    { path: 'dcLoadAnalysis2', component: __WEBPACK_IMPORTED_MODULE_5__components_dcLoadAnalysis2_dcLoadAnalysis2_component__["a" /* dcLoadAnalysis2Component */], data: { pageTitle: 'Vendor vs Load Analysis' }, },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=dashboard.routing.js.map

/***/ }),

/***/ 1270:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),

/***/ 1271:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 1313:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]='serviceErrorData' id=\"content\">\n    <sa-widgets-grid>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                    <header>\n\n                        <span class=\"widget-icon\">\n                            <i class=\"fa fa-bar-chart-o\"></i>\n                        </span>\n                        <h2>Analytics</h2>\n\n                    </header>\n                    <div>\n                        <div class=\"widget-body\">\n                            <form class=\"smart-form\" id=\"dealer-filter-form\">\n                                <fieldset style=\"padding:0px\">\n                                    <section class=\"form-group col-sm-4 padding-5\" *ngIf=\"QueryData\">\n                                        <label class=\"control-label\">Start Date</label>\n                                        <my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"startDate\" [(ngModel)]=\"QueryData.startDate\" name=\"startDate\"></my-date-picker>\n                                    </section>\n\n                                    <section class=\"form-group col-sm-4 padding-5\" *ngIf=\"QueryData\">\n                                        <label class=\"control-label\">End Date</label>\n                                        <my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"endDate\" [(ngModel)]=\"QueryData.endDate\" name=\"endDate\"></my-date-picker>\n                                        <div class=\"icon-color-bad\">{{errorMessage}}</div>\n                                    </section>\n                                </fieldset>\n\n\n\n                                <footer style=\"padding:0px\">\n                                    <section class=\"col col-8\">\n                                        <button class=\"btn btn-default\" title=\"Reset\" type=\"button\" id=\"filter-reset\" (click)=\"QueryReset()\">Reset</button>\n                                        <button class=\"btn btn-success\" title=\"generate Reports\" type=\"button\" (click)=\"generateReports()\">Reports</button>\n                                        <input type=\"button\" title=\"Submit\" class=\"btn btn-sm btn-primary\" id=\"filter-submit\" value=\"Submit\" (click)=\"QuerySubmit()\">\n                                    </section>\n\n                                </footer>\n\n                            </form>\n                        </div>\n                    </div>\n                </sa-widget>\n            </div>\n        </div>\n\n        <div class=\"row\" id=\"noData\">\n            <div class=\"col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div class=\"row text-center\">\n                            No data to display\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id=\"data\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-bar-chart-o\"></i>\n                            </span>\n                            <h2>Daily Loads Chart</h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body\">\n                                <div id=\"dc-vs-loads-chart\" class=\"dc-chart\">\n                                    <a class=\"reset\" style=\"display: none;\">reset</a>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                                <!-- <sa-chart-js type=\"bar\"></sa-chart-js>-->\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-bar-chart-o\"></i>\n                            </span>\n                            <h2>Loads Status Chart</h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body\">\n                                <div id=\"status-chart\" class=\"dc-chart\">\n                                    <a class=\"reset\" style=\"display: none;\">reset</a>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-bar-chart-o\"></i>\n                            </span>\n                            <h2>Load Appointment Type Chart</h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body\">\n                                <div id=\"appointment-type-chart\" class=\"dc-chart\">\n                                    <a class=\"reset\" style=\"display: none;\">reset</a>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-bar-chart-o\"></i>\n                            </span>\n                            <h2>Distribution Centers Chart</h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body\">\n                                <div id=\"dc-chart\" class=\"dc-chart\">\n                                    <a class=\"reset\" style=\"display: none;\">reset</a>\n                                    <div class=\"clearfix\"></div>\n                                </div>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-bar-chart-o\"></i>\n                            </span>\n                            <h2>Total Loads w.r.t their Distribution Centers</h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body\">\n                                <div id=\"dc-data-count\" class=\"dc-chart\" style=\"color:#38397b\">\n                                    <span class=\"filter-count\"></span> selected out of\n                                    <span class=\"total-count\"></span> loads |\n                                    <a href=\"javascript:dc.filterAll(); dc.renderAll();\">Reset All</a>\n                                </div>\n                                <table class=\"table table-hover dc-data-table\">\n                                </table>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n        </div>\n    </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1314:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]=\"serviceErrorData\" id=\"content\">\n\t<sa-widgets-grid color=\"blueDark\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<!--<div class=\"well well-light\">-->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t\t\t\t<div class=\"panel panel-success pricing-big\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\tLoads</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body no-padding text-align-center\">\n\t\t\t\t\t\t\t\t<div class=\"the-price\">\n\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t1,82,865</h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t\t\t\t<div class=\"panel panel-teal pricing-big\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\tCartons</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body no-padding text-align-center\">\n\t\t\t\t\t\t\t\t<div class=\"the-price\">\n\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t8,14,68,954</h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t\t\t\t<div class=\"panel panel-primary pricing-big\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\tTrailer Performance</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body no-padding text-align-center\">\n\t\t\t\t\t\t\t\t<div class=\"the-price\">\n\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t98%</h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3\">\n\t\t\t\t\t\t<div class=\"panel panel-blueLight pricing-big\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\tVendors</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body no-padding text-align-center\">\n\t\t\t\t\t\t\t\t<div class=\"the-price\">\n\t\t\t\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t\t\t\t255</h1>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- </div>-->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<span class=\"widget-icon\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bar-chart-o\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h2>DC vs LoadsCount</h2>\n\n\t\t\t\t\t\t<div class=\"widget-toolbar\" role=\"menu\" (click)=\"openReportsDropDown()\" dropdown [ngClass]=\"DropDownTooglePopup\">\n\t\t\t\t\t\t\t<a class=\"btn btn-success btn-xs\" title=\"Reports\" dropdownToggle style=\"color:#fff;\">Reports</a>\n\t\t\t\t\t\t\t<div class=\"FilterDropDownAnimation dropdown-menu dropdown-menu-large filterDropwdownViewAlign \" role=\"menu\" (click)=\"$event.stopPropagation()\">\n\t\t\t\t\t\t\t\t<div id=\"checkout-form\" class=\"smart-form\">\n\t\t\t\t\t\t\t\t\t<header style=\"padding:2px\">Reports</header>\n\t\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"errorMessage\" class=\"icon-color-bad\">{{errorMessage}}</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"col col-xs-4 filterFormAlign\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label\">Start Date</label>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"col col-xs-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-control\" style=\"border:0px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"startDate\" [(ngModel)]=\"QueryData.startDate\" name=\"startDate\"></my-date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"col col-xs-4 filterFormAlign\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"label\">End Date</label>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t\t<section class=\"col col-xs-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"form-control\" style=\"border:0px\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"endDate\" [(ngModel)]=\"QueryData.endDate\" name=\"endDate\"></my-date-picker>\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t\t\t<fieldset style=\"padding:5px\">\n\t\t\t\t\t\t\t\t\t\t<div style=\"float:right;\">\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn  btn-warning btn-sm\" type=\"submit\" (click)=\"onReportsEventCancel()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn  btn-success btn-sm\" type=\"submit\" (click)=\"onReportsEventSubmit()\">Submit</button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</header>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"widget-body\">\n\t\t\t\t\t\t\t<div id=\"on-time-delivery-stats-chart\" class=\"dc-chart\" style=\"width:100%\">\n\t\t\t\t\t\t\t\t<a class=\"reset\" style=\"display: none;\">reset</a>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</sa-widget>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<span class=\"widget-icon\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bar-chart-o\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h2>Priority Load Analytics</h2>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"widget-body\">\n\t\t\t\t\t\t\t<div id=\"priority-chart\" class=\"dc-chart\">\n\t\t\t\t\t\t\t\t<a class=\"reset\" style=\"display: none;\">reset</a>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</sa-widget>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<span class=\"widget-icon\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bar-chart-o\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h2>Early Loads vs Late Loads</h2>\n\t\t\t\t\t</header>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"widget-body\">\n\t\t\t\t\t\t\t<div id=\"early-vs-late-loads-chart\" class=\"dc-chart\">\n\t\t\t\t\t\t\t\t<a class=\"reset\" style=\"display: none;\">reset</a>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</sa-widget>\n\t\t\t</div>\n\t\t</div>\n\t</sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1315:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n\n<div [hidden]=\"serviceErrorData\" id=\"content\">\n    <sa-widgets-grid color=\"blueDark\">\n\n        <div bsModal #analyticspopup=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n            aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" (click)=\"analyticspopup.hide()\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                        <h4 class=\"modal-title\">Vendor Details</h4>\n                    </div>\n\n                    <div class=\"row\" *ngIf=\"analyticspopup.isShown\">\n                        <div class=\"col-lg-12\">\n                            <sa-datatable id=\"DataTable\" [options]=\"options\" tableClass=\"table table-striped table-bordered table-hover\" paginationLength=\"true\" width=\"100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Load Number</th>\n                                        <th>Destination</th>\n                                        <th>Sch. Arrival Date</th>\n                                        <th>Act. Arrival Date</th>\n                                        <th>Vendor Name </th>\n                                        <th>Appointment Status </th>\n                                    </tr>\n                                </thead>\n\n                                <tfoot>\n                                    <tr>\n                                        <th>Load Number</th>\n                                        <th>Destination</th>\n                                        <th>Sch. Arrival Date</th>\n                                        <th>Act. Arrival Date</th>\n                                        <th>Vendor Name </th>\n                                        <th>Appointment Status </th>\n                                    </tr>\n                                </tfoot>\n                            </sa-datatable>\n\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-default\" (click)=\"analyticspopup.hide()\">Close</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--<modal #loadModal>\n\t\t\t<modal-header [show-close]=\"true\" class='loadDetailsPopHeader'>\n\t\t\t\t<h1 class=\"modal-title\">Vendor Details</h1>\n\t\t\t</modal-header>\n\t\t\t<modal-body>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<div class=\"jqgrid-ui-popup\">\n\t\t\t\t\t\t\t<table id=\"vendor-grid-table\" class=\"table table-striped\"></table>\n\t\t\t\t\t\t\t<div id=\"vendor-grid-pager\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</modal-body>\n\t\t</modal>-->\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                    <header>\n                        <span class=\"widget-icon\">\n                            <i class=\"fa fa-bar-chart-o\"></i>\n                        </span>\n                        <h2>Load size(sum of cartons for all loads) across DC's</h2>\n\n                        <div class=\"widget-toolbar\" role=\"menu\" (click)=\"openReportsDropDown()\" dropdown [ngClass]=\"DropDownTooglePopup\">\n                            <a class=\"btn btn-success btn-xs\" title=\"Reports\" dropdownToggle style=\"color:#fff;\">Reports</a>\n                            <div class=\"FilterDropDownAnimation dropdown-menu dropdown-menu-large filterDropwdownViewAlign \" role=\"menu\" (click)=\"$event.stopPropagation()\">\n                                <div id=\"checkout-form\" class=\"smart-form\">\n                                    <header style=\"padding:2px\">Reports</header>\n                                    <fieldset>\n                                        <span *ngIf=\"errorMessage\" class=\"icon-color-bad\">{{errorMessage}}</span>\n                                        <div class=\"row form-group\">\n                                            <section class=\"col col-xs-4 filterFormAlign\">\n                                                <label class=\"label\">Start Date</label>\n                                            </section>\n                                            <section class=\"col col-xs-8\">\n                                                <label class=\"form-control\" style=\"border:0px\">\n                                                    <my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"startDate\" [(ngModel)]=\"QueryData.startDate\" name=\"startDate\"></my-date-picker>\n                                                </label>\n                                            </section>\n                                        </div>\n\n                                        <div class=\"row form-group\">\n                                            <section class=\"col col-xs-4 filterFormAlign\">\n                                                <label class=\"label\">End Date</label>\n                                            </section>\n                                            <section class=\"col col-xs-8\">\n                                                <label class=\"form-control\" style=\"border:0px\">\n                                                    <my-date-picker [options]=\"myDatePickerOptions\" [selDate]=\"endDate\" [(ngModel)]=\"QueryData.endDate\" name=\"endDate\"></my-date-picker>\n                                                </label>\n                                            </section>\n                                        </div>\n\n                                    </fieldset>\n\n                                    <fieldset style=\"padding:5px\">\n                                        <div style=\"float:right;\">\n                                            <button class=\"btn  btn-warning btn-sm\" type=\"submit\" (click)=\"onReportsEventCancel()\">Cancel</button>\n                                            <button class=\"btn  btn-success btn-sm\" type=\"submit\" (click)=\"onReportsEventSubmit()\">Submit</button>\n                                        </div>\n                                    </fieldset>\n                                </div>\n                            </div>\n                        </div>\n\n                    </header>\n                    <div>\n                        <div class=\"widget-body\">\n                            <div id=\"dc-loads-size-chart\" class=\"dc-chart\">\n                                <a class=\"reset\" style=\"display: none;\">reset</a>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </sa-widget>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                    <header>\n                        <span class=\"widget-icon\">\n                            <i class=\"fa fa-bar-chart-o\"></i>\n                        </span>\n                        <h2>Vendor vs Loads Count</h2>\n                    </header>\n                    <div>\n                        <div class=\"widget-body\">\n                            <div id=\"vendor-loads-chart\" class=\"dc-chart\">\n                                <a class=\"reset\" style=\"display: none;\">reset</a>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </sa-widget>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                    <header>\n                        <span class=\"widget-icon\">\n                            <i class=\"fa fa-bar-chart-o\"></i>\n                        </span>\n                        <h2>EarlyLoads and LateLoads Count for each DC</h2>\n                    </header>\n                    <div>\n                        <div class=\"widget-body\">\n                            <div id=\"dc-composite-chart\" class=\"dc-chart\">\n                                <a class=\"reset\" style=\"display: none;\">reset</a>\n                                <div class=\"clearfix\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </sa-widget>\n            </div>\n        </div>\n\n    </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1316:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"getLoadserrorResponse\" *ngIf=\"loadErrorData\"></app-error500>\n\n    <div [hidden]=\"loadErrorData\" id=\"content\">\n        <sa-widgets-grid>\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" [fullscreenbutton]=\"false\" [collapsed]=\"false\" [colorbutton]=\"false\" [togglebutton]=\"false\"\n                        color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-table\"></i>\n                            </span>\n                            <h2>Select Load Number </h2>\n                        </header>\n\n                        <div class=\"widget-body\" style=\"min-height:48px;\">\n                            <div class=\"smart-form  col-sm-4\">\n                                <label class=\"select\">\n                                    <select name=\"view\" class=\"input-sm\" [(ngModel)]=\"loadQueryData.loadNumber\" (ngModelChange)=\"getloadDetailsbyLoadnum(loadQueryData.loadNumber)\"\n                                        placeholder=\"'Select Load'\">\n                                        <option value=\"\" disabled>\n                                            <strong> Select load</strong>\n                                        </option>\n                                        <option *ngFor=\"let loadValue of loadListQueryArray\" [value]=\"loadValue.apptNbr\">{{loadValue.apptNbr}}</option>\n                                    </select>\n                                    <i></i>\n                                </label>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-table\"></i>\n                            </span>\n                            <h2>Current Drop Load Details </h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body no-padding \">\n                                <table id=\"LoadDetails\" class=\"table text-center table-striped table-bordered table-hover dataTables-example dataTable dtr-inline display custom-font\"\n                                    cellspacing=\"0\" width=\"100%\">\n                                    <thead>\n                                        <tr>\n                                            <th>Driver Name</th>\n                                            <th>Pickup Location</th>\n                                            <th>Destination</th>\n                                            <th>Estimated Distance</th>\n                                            <th>Estimated Time</th>\n                                            <th>Estimated Arrival Time</th>\n                                            <th>Weather Report</th>\n                                        </tr>\n                                    </thead>\n\n                                    <tbody>\n                                        <tr>\n                                            <td colspan=\"7\" *ngIf=\"!loaddetails\" class=\"text-center\">No loads selected</td>\n                                        </tr>\n                                        <tr *ngIf=\"loaddetails\">\n                                            <td>{{loaddetails.driver.firstName}} &nbsp; {{loaddetails.driver.lastName}}</td>\n                                            <td>{{loaddetails.originLocNbr.locAddrName}}</td>\n                                            <td>{{loaddetails.destLocNbr.locAddrName}}</td>\n                                            <td>{{loaddetails.setEstimateDest}}</td>\n                                            <td>{{loaddetails.setEstimateTime}} </td>\n                                            <td>\n                                                <span *ngIf=\"loaddetails.setEstimateTime\">{{loaddetails.setEstimateArrivalTime|moment:\"ddd, MMM Do YYYY, h:mm a\" }}</span>\n                                            </td>\n                                            <td>\n                                                <div id=\"imageDiv\" style=\"cursor:pointer\">\n                                                    <img src='../../../../assets/img/map/weather.png' class='view_weather_details' (click)=\"viewWeather(loaddetails.driver.latitude,loaddetails.driver.longitude)\"\n                                                    />\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                        <header>\n                            <span class=\"widget-icon\">\n                                <i class=\"fa fa-table\"></i>\n                            </span>\n                            <h2>Load Routing </h2>\n                        </header>\n                        <div>\n                            <div class=\"widget-body no-padding \">\n                                <div id=\"map\"></div>\n                            </div>\n                        </div>\n                    </sa-widget>\n                </div>\n            </div>\n        </sa-widgets-grid>\n    </div>\n\n\n\n    <div bsModal #weatherDetailsModal=\"bs-modal\" top='10%' class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content status\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" (click)=\"weatherDetailsModal.hide()\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                    <b>Weather Report</b>\n                </div>\n\n                <div class=\"modal-body loader\" *ngIf=\"weatherLoader\" align=\"center\">\n                </div>\n                <div class=\"modal-body\" *ngIf=\"!weatherLoader && !weatherResponse && weatherErrorResponse\" align=\"center\">\n                    <div>{{weatherErrorResponse}}</div>\n                </div>\n\n                <div class=\"modal-body\" *ngIf=\"!weatherLoader && weatherResponse\">\n                    <!--<div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 weatherTitle\" style=\"color:rgb(244,128,36)\">\n                        <b>{{weatherResponse?.name }} ( {{weatherResponse?.id}})</b>\n                    </div>\n                </div>-->\n                    <div class=\"row\" style=\"margin-top:2%\">\n                        <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4 weather-img\" align=\"center\">\n                            <img src=\"http://forecast.weather.gov/newimages/medium/{{weatherResponse?.weatherimage}}\" alt=\"Cinque Terre\" width=\"80\" height=\"80\">\n                            <div class=\"padding-5\">\n                                <b>{{weatherResponse?.weather}}</b>\n                            </div>\n                            <div>{{weatherResponse?.temp}} &deg;F &nbsp; {{weatherResponse?.tempC}} &deg;C</div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\" align=\"left\">\n                            <div class=\"weather-info\">\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Humidity</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n\n                                            <span>{{weatherResponse?.relh}} % </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Wind Speed</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n\n                                            <span>{{weatherResponse?.wind_speed}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Barometer</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n\n                                            <span>{{weatherResponse?.barometer}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Dew Point</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n\n                                            <span>{{weatherResponse?.dewp}}\n                                                <label>&deg;F</label>\n                                                <label>({{weatherResponse?.dewPOintInDeg}}</label>\n                                                <label>&deg;C)</label>\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Visibility</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n\n                                            <span>{{weatherResponse?.visibility}} mi</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row list\">\n                                    <div class=\"col-xs-5 col-sm-6 col-md-6 col-lg-6  no-padding\">\n                                        <div class=\"weather-parameters\" align=\"right\">\n                                            <b>Last Updated</b>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-xs-7 col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"weather-parameters\">\n                                            <span>{{weatherResponse?.date}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"weatherDetailsModal.hide()\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ 1317:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]=\"serviceErrorData\" id=\"content\">\n\t<sa-widgets-grid>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<sa-widget [editbutton]=\"false\" color=\"blueDark\">\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<span class=\"widget-icon\">\n\t\t\t\t\t\t\t<i class=\"fa fa-table\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h2>Live Tracking - Driver Current Locations </h2>\n\t\t\t\t\t</header>\n\n\n\n\t\t\t\t\t<div class=\"widget-body-toolbar markers\" style=\"padding-left:8%\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-6\">\n\t\t\t\t\t\t\t\t<div class=\"highPriorityLoadMarker\"></div>&nbsp;\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"chkHighPriorityLoad\" [(ngModel)]=\"highprioritySelected\" (change)=\"LoadFilter(highprioritySelected,1)\">\n\t\t\t\t\t\t\t\t<label for=\"chkHighPriorityLoad\">{{highprioritySelected?'✔ High Priority Load':'X High Priority Load'}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-6\">\n\t\t\t\t\t\t\t\t<div class=\"highValueLoadMarker\"></div>&nbsp;\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"chkHighValueLoad\" [(ngModel)]=\"highvalueSelected\" (change)=\"LoadFilter(highvalueSelected,2)\">\n\t\t\t\t\t\t\t\t<label for=\"chkHighValueLoad\">{{highvalueSelected?'✔ High Value Load':'X High Value Load'}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4 col-xs-6\">\n\t\t\t\t\t\t\t\t<div class=\"normalLoadMarker\"></div>&nbsp;\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"chkNormalLoad\" [(ngModel)]=\"normalloadSelected\" (change)=\"LoadFilter(normalloadSelected,3)\">\n\t\t\t\t\t\t\t\t<label for=\"chkNormalLoad\">{{normalloadSelected?'✔ Normal Load':'X Normal Load'}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"widget-body no-padding \">\n\t\t\t\t\t\t\t<div class=\"map\" id=\"map\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</sa-widget>\n\t\t\t</div>\n\t\t</div>\n\n\n\n\t\t<!--popup-->\n\t\t<div bsModal #loadviewPopup=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n\t\t    aria-hidden=\"true\">\n\t\t\t<div class=\"modal-dialog modal-lg\">\n\t\t\t\t<div class=\"modal-content\">\n\t\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" (click)=\"loadviewPopup.hide()\" aria-label=\"Close\">\n\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<h4 class=\"modal-title\">Load Details</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-body\" *ngIf=\"loadViewData\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>Load Number </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t{{loadViewData?.apptNbr}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>Pickup Location </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t{{loadViewData?.originLocNbr.locAddrName}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>Destination Location </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t{{loadViewData?.destLocNbr.locAddrName}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>Driver Name </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t{{loadViewData?.driver.firstName}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>Vendor Name </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t{{loadViewData?.vndNbr.vendorName}}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>High Value </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"loadViewData.highValueLoad\" onclick=\"return false;\" />\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-sm-6 padding-10\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\" col-xs-5 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<b>High Priority </b>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-1 col-sm-1\">:</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6 col-sm-5\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"loadViewData.highPriorityLoad\" onclick=\"return false;\" />\n\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"loadviewPopup.hide()\">Close</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1337:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93), __webpack_require__(1271)))

/***/ }),

/***/ 1338:
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(1337);
var global = __webpack_require__(1270);
exports.setImmediate = global.setImmediate;
exports.clearImmediate = global.clearImmediate;


/***/ }),

/***/ 1339:
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ 1340:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 461:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

});
//# sourceMappingURL=6.chunk.js.map