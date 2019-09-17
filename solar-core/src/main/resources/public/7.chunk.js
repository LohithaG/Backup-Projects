webpackJsonp([7,19,49],{

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

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__(1076);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loads_routing__ = __webpack_require__(1247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_list_loads_list_component__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_add_load_add_component__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_update_load_update_component__ = __webpack_require__(1207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_pipes_loaddata_filter_pipe__ = __webpack_require__(1255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_mydatepicker__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_select__ = __webpack_require__(1091);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_smartadmin_module__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_error_error500_error500_module__ = __webpack_require__(1008);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadsModule", function() { return LoadsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var LoadsModule = (function () {
    function LoadsModule() {
    }
    return LoadsModule;
}());
LoadsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__loads_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_9_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_10_angular2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_13__auth_error_error500_error500_module__["Error500Module"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__components_list_loads_list_component__["a" /* LoadsListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_add_load_add_component__["a" /* LoadAddComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_update_load_update_component__["a" /* LoadUpdateComponent */],
            __WEBPACK_IMPORTED_MODULE_8__shared_pipes_loaddata_filter_pipe__["a" /* LoadDataFilterPipe */],
        ]
    })
], LoadsModule);

//# sourceMappingURL=loads.module.js.map

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

/***/ 1059:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var _ = __webpack_require__(1060);
var Rx_1 = __webpack_require__(57);
var DataTable = (function () {
    function DataTable(differs) {
        this.differs = differs;
        this.inputData = [];
        this.sortBy = "";
        this.sortOrder = "asc";
        this.sortByChange = new core_1.EventEmitter();
        this.sortOrderChange = new core_1.EventEmitter();
        this.rowsOnPage = 1000;
        this.activePage = 1;
        this.mustRecalculateData = false;
        this.onSortChange = new Rx_1.ReplaySubject(1);
        this.onPageChange = new core_1.EventEmitter();
        this.diff = differs.find([]).create(null);
    }
    DataTable.prototype.getSort = function () {
        return { sortBy: this.sortBy, sortOrder: this.sortOrder };
    };
    DataTable.prototype.setSort = function (sortBy, sortOrder) {
        if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
            this.sortBy = sortBy;
            this.sortOrder = _.includes(["asc", "desc"], sortOrder) ? sortOrder : "asc";
            this.mustRecalculateData = true;
            this.onSortChange.next({ sortBy: sortBy, sortOrder: sortOrder });
            this.sortByChange.emit(this.sortBy);
            this.sortOrderChange.emit(this.sortOrder);
        }
    };
    DataTable.prototype.getPage = function () {
        return { activePage: this.activePage, rowsOnPage: this.rowsOnPage, dataLength: this.inputData.length };
    };
    DataTable.prototype.setPage = function (activePage, rowsOnPage) {
        if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
            this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
            this.rowsOnPage = rowsOnPage;
            this.mustRecalculateData = true;
            this.onPageChange.emit({
                activePage: this.activePage,
                rowsOnPage: this.rowsOnPage,
                dataLength: this.inputData ? this.inputData.length : 0
            });
        }
    };
    DataTable.prototype.calculateNewActivePage = function (previousRowsOnPage, currentRowsOnPage) {
        var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
        var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
        return newActivePage;
    };
    DataTable.prototype.recalculatePage = function () {
        var lastPage = Math.ceil(this.inputData.length / this.rowsOnPage);
        this.activePage = lastPage < this.activePage ? lastPage : this.activePage;
        this.activePage = this.activePage || 1;
        this.onPageChange.emit({
            activePage: this.activePage,
            rowsOnPage: this.rowsOnPage,
            dataLength: this.inputData.length
        });
    };
    DataTable.prototype.ngOnChanges = function (changes) {
        if (changes["rowsOnPage"]) {
            this.rowsOnPage = changes["rowsOnPage"].previousValue;
            this.setPage(this.activePage, changes["rowsOnPage"].currentValue);
            this.mustRecalculateData = true;
        }
        if (changes["sortBy"] || changes["sortOrder"]) {
            if (!_.includes(["asc", "desc"], this.sortOrder)) {
                console.warn("angular2-datatable: value for input mfSortOrder must be one of ['asc', 'desc'], but is:", this.sortOrder);
                this.sortOrder = "asc";
            }
            if (this.sortBy) {
                this.onSortChange.next({ sortBy: this.sortBy, sortOrder: this.sortOrder });
            }
            this.mustRecalculateData = true;
        }
        if (changes["inputData"]) {
            this.inputData = changes["inputData"].currentValue || [];
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
    };
    DataTable.prototype.ngDoCheck = function () {
        var changes = this.diff.diff(this.inputData);
        if (changes) {
            this.recalculatePage();
            this.mustRecalculateData = true;
        }
        if (this.mustRecalculateData) {
            this.fillData();
            this.mustRecalculateData = false;
        }
    };
    DataTable.prototype.fillData = function () {
        this.activePage = this.activePage;
        this.rowsOnPage = this.rowsOnPage;
        var offset = (this.activePage - 1) * this.rowsOnPage;
        var data = this.inputData;
        var sortBy = this.sortBy;
        if (typeof sortBy === 'string' || sortBy instanceof String) {
            data = _.orderBy(data, this.caseInsensitiveIteratee(sortBy), [this.sortOrder]);
        }
        else {
            data = _.orderBy(data, sortBy, [this.sortOrder]);
        }
        data = _.slice(data, offset, offset + this.rowsOnPage);
        this.data = data;
    };
    DataTable.prototype.caseInsensitiveIteratee = function (sortBy) {
        return function (row) {
            var value = row;
            for (var _i = 0, _a = sortBy.split('.'); _i < _a.length; _i++) {
                var sortByProperty = _a[_i];
                if (value) {
                    value = value[sortByProperty];
                }
            }
            if (value && typeof value === 'string' || value instanceof String) {
                return value.toLowerCase();
            }
            return value;
        };
    };
    return DataTable;
}());
__decorate([
    core_1.Input("mfData"),
    __metadata("design:type", Array)
], DataTable.prototype, "inputData", void 0);
__decorate([
    core_1.Input("mfSortBy"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortBy", void 0);
__decorate([
    core_1.Input("mfSortOrder"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrder", void 0);
__decorate([
    core_1.Output("mfSortByChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortByChange", void 0);
__decorate([
    core_1.Output("mfSortOrderChange"),
    __metadata("design:type", Object)
], DataTable.prototype, "sortOrderChange", void 0);
__decorate([
    core_1.Input("mfRowsOnPage"),
    __metadata("design:type", Object)
], DataTable.prototype, "rowsOnPage", void 0);
__decorate([
    core_1.Input("mfActivePage"),
    __metadata("design:type", Object)
], DataTable.prototype, "activePage", void 0);
DataTable = __decorate([
    core_1.Directive({
        selector: 'table[mfData]',
        exportAs: 'mfDataTable'
    }),
    __metadata("design:paramtypes", [core_1.IterableDiffers])
], DataTable);
exports.DataTable = DataTable;
//# sourceMappingURL=DataTable.js.map

/***/ }),

/***/ 1060:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.17.4';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Error message constants. */
  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;

  /** Used to compose bitmasks for value comparisons. */
  var COMPARE_PARTIAL_FLAG = 1,
      COMPARE_UNORDERED_FLAG = 2;

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;

  /** Used as default options for `_.truncate`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2,
      LAZY_WHILE_FLAG = 3;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991,
      MAX_INTEGER = 1.7976931348623157e+308,
      NAN = 0 / 0;

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295,
      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG],
    ['bind', WRAP_BIND_FLAG],
    ['bindKey', WRAP_BIND_KEY_FLAG],
    ['curry', WRAP_CURRY_FLAG],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
    ['flip', WRAP_FLIP_FLAG],
    ['partial', WRAP_PARTIAL_FLAG],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
    ['rearg', WRAP_REARG_FLAG]
  ];

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      asyncTag = '[object AsyncFunction]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      domExcTag = '[object DOMException]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      nullTag = '[object Null]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      proxyTag = '[object Proxy]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      undefinedTag = '[object Undefined]',
      weakMapTag = '[object WeakMap]',
      weakSetTag = '[object WeakSet]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
      reUnescapedHtml = /[&<>"']/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
      reHasRegExpChar = RegExp(reRegExpChar.source);

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g,
      reTrimStart = /^\s+/,
      reTrimEnd = /\s+$/;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;

  /** Used to match words composed of alphanumeric characters. */
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Used to match
   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to match Latin Unicode letters (excluding mathematical operators). */
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to compose unicode character classes. */
  var rsAstralRange = '\\ud800-\\udfff',
      rsComboMarksRange = '\\u0300-\\u036f',
      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
      rsComboSymbolsRange = '\\u20d0-\\u20ff',
      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
      rsDingbatRange = '\\u2700-\\u27bf',
      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      rsPunctuationRange = '\\u2000-\\u206f',
      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      rsVarRange = '\\ufe0e\\ufe0f',
      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

  /** Used to compose unicode capture groups. */
  var rsApos = "['\u2019]",
      rsAstral = '[' + rsAstralRange + ']',
      rsBreak = '[' + rsBreakRange + ']',
      rsCombo = '[' + rsComboRange + ']',
      rsDigits = '\\d+',
      rsDingbat = '[' + rsDingbatRange + ']',
      rsLower = '[' + rsLowerRange + ']',
      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
      rsFitz = '\\ud83c[\\udffb-\\udfff]',
      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
      rsNonAstral = '[^' + rsAstralRange + ']',
      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      rsUpper = '[' + rsUpperRange + ']',
      rsZWJ = '\\u200d';

  /** Used to compose unicode regexes. */
  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
      reOptMod = rsModifier + '?',
      rsOptVar = '[' + rsVarRange + ']?',
      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
      rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
      rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
      rsSeq = rsOptVar + reOptMod + rsOptJoin,
      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

  /** Used to match apostrophes. */
  var reApos = RegExp(rsApos, 'g');

  /**
   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
   */
  var reComboMark = RegExp(rsCombo, 'g');

  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

  /** Used to match complex or compound words. */
  var reUnicodeWord = RegExp([
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    rsOrdUpper,
    rsOrdLower,
    rsDigits,
    rsEmoji
  ].join('|'), 'g');

  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

  /** Used to detect strings that need a more robust regexp to match words. */
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map Latin Unicode letters to basic Latin letters. */
  var deburredLetters = {
    // Latin-1 Supplement block.
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss',
    // Latin Extended-A block.
    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
    '\u0134': 'J',  '\u0135': 'j',
    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
    '\u0174': 'W',  '\u0175': 'w',
    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
    '\u0132': 'IJ', '\u0133': 'ij',
    '\u0152': 'Oe', '\u0153': 'oe',
    '\u0149': "'n", '\u017f': 's'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Built-in method references without a dependency on `root`. */
  var freeParseFloat = parseFloat,
      freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
      nodeIsDate = nodeUtil && nodeUtil.isDate,
      nodeIsMap = nodeUtil && nodeUtil.isMap,
      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
      nodeIsSet = nodeUtil && nodeUtil.isSet,
      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
  function arrayAggregator(array, setter, iteratee, accumulator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      var value = array[index];
      setter(accumulator, value, iteratee(value), array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEachRight(array, iteratee) {
    var length = array == null ? 0 : array.length;

    while (length--) {
      if (iteratee(array[length], length, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
  function arrayEvery(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (!predicate(array[index], index, array)) {
        return false;
      }
    }
    return true;
  }

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludesWith(array, value, comparator) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
    var length = array == null ? 0 : array.length;
    if (initAccum && length) {
      accumulator = array[--length];
    }
    while (length--) {
      accumulator = iteratee(accumulator, array[length], length, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  var asciiSize = baseProperty('length');

  /**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function asciiToArray(string) {
    return string.split('');
  }

  /**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }

  /**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
  function baseFindKey(collection, predicate, eachFunc) {
    var result;
    eachFunc(collection, function(value, key, collection) {
      if (predicate(value, key, collection)) {
        result = key;
        return false;
      }
    });
    return result;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOfWith(array, value, fromIndex, comparator) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (comparator(array[index], value)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
  function baseMean(array, iteratee) {
    var length = array == null ? 0 : array.length;
    return length ? (baseSum(array, iteratee) / length) : NAN;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyOf(object) {
    return function(key) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function(value, index, collection) {
      accumulator = initAccum
        ? (initAccum = false, value)
        : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
  function baseSortBy(array, comparer) {
    var length = array.length;

    array.sort(comparer);
    while (length--) {
      array[length] = array[length].value;
    }
    return array;
  }

  /**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
  function baseSum(array, iteratee) {
    var result,
        index = -1,
        length = array.length;

    while (++index < length) {
      var current = iteratee(array[index]);
      if (current !== undefined) {
        result = result === undefined ? current : (result + current);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
  function baseToPairs(object, props) {
    return arrayMap(props, function(key) {
      return [key, object[key]];
    });
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
  function baseValues(object, props) {
    return arrayMap(props, function(key) {
      return object[key];
    });
  }

  /**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function cacheHas(cache, key) {
    return cache.has(key);
  }

  /**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
  function charsStartIndex(strSymbols, chrSymbols) {
    var index = -1,
        length = strSymbols.length;

    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
  function charsEndIndex(strSymbols, chrSymbols) {
    var index = strSymbols.length;

    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
    return index;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
   * letters to basic Latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  var deburrLetter = basePropertyOf(deburredLetters);

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  var escapeHtmlChar = basePropertyOf(htmlEscapes);

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }

  /**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }

  /**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
  function iteratorToArray(iterator) {
    var data,
        result = [];

    while (!(data = iterator.next()).done) {
      result.push(data.value);
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
  function setToPairs(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = [value, value];
    });
    return result;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictLastIndexOf(array, value, fromIndex) {
    var index = fromIndex + 1;
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return index;
  }

  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
  function stringSize(string) {
    return hasUnicode(string)
      ? unicodeSize(string)
      : asciiSize(string);
  }

  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function stringToArray(string) {
    return hasUnicode(string)
      ? unicodeToArray(string)
      : asciiToArray(string);
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

  /**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
  function unicodeSize(string) {
    var result = reUnicode.lastIndex = 0;
    while (reUnicode.test(string)) {
      ++result;
    }
    return result;
  }

  /**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }

  /**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the `context` object.
   *
   * @static
   * @memberOf _
   * @since 1.1.0
   * @category Util
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // Create a suped-up `defer` in Node.js.
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  var runInContext = (function runInContext(context) {
    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

    /** Built-in constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for built-in method references. */
    var arrayProto = Array.prototype,
        funcProto = Function.prototype,
        objectProto = Object.prototype;

    /** Used to detect overreaching core-js shims. */
    var coreJsData = context['__core-js_shared__'];

    /** Used to resolve the decompiled source of functions. */
    var funcToString = funcProto.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /** Used to detect methods masquerading as native. */
    var maskSrcKey = (function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
      return uid ? ('Symbol(src)_1.' + uid) : '';
    }());

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var nativeObjectToString = objectProto.toString;

    /** Used to infer the `Object` constructor. */
    var objectCtorString = funcToString.call(Object);

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Built-in value references. */
    var Buffer = moduleExports ? context.Buffer : undefined,
        Symbol = context.Symbol,
        Uint8Array = context.Uint8Array,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined,
        getPrototype = overArg(Object.getPrototypeOf, Object),
        objectCreate = Object.create,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        splice = arrayProto.splice,
        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined,
        symIterator = Symbol ? Symbol.iterator : undefined,
        symToStringTag = Symbol ? Symbol.toStringTag : undefined;

    var defineProperty = (function() {
      try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
      } catch (e) {}
    }());

    /** Mocked built-ins. */
    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
        ctxNow = Date && Date.now !== root.Date.now && Date.now,
        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeFloor = Math.floor,
        nativeGetSymbols = Object.getOwnPropertySymbols,
        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
        nativeIsFinite = context.isFinite,
        nativeJoin = arrayProto.join,
        nativeKeys = overArg(Object.keys, Object),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = Date.now,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random,
        nativeReverse = arrayProto.reverse;

    /* Built-in method references that are verified to be native. */
    var DataView = getNative(context, 'DataView'),
        Map = getNative(context, 'Map'),
        Promise = getNative(context, 'Promise'),
        Set = getNative(context, 'Set'),
        WeakMap = getNative(context, 'WeakMap'),
        nativeCreate = getNative(Object, 'create');

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /** Used to detect maps, sets, and weakmaps. */
    var dataViewCtorString = toSource(DataView),
        mapCtorString = toSource(Map),
        promiseCtorString = toSource(Promise),
        setCtorString = toSource(Set),
        weakMapCtorString = toSource(WeakMap);

    /** Used to convert symbols to primitives and strings. */
    var symbolProto = Symbol ? Symbol.prototype : undefined,
        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
        symbolToString = symbolProto ? symbolProto.toString : undefined;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} proto The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
      };
    }());

    /**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = undefined;
    }

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
        '_': lodash
      }
    };

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = copyArray(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = copyArray(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = copyArray(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
        return baseWrapperValue(array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    // Ensure `LazyWrapper` is an instance of `baseLodash`.
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : undefined;
    }

    /**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    }

    /**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
      return this;
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function listCacheDelete(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }

    /**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function listCacheGet(key) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      return index < 0 ? undefined : data[index][1];
    }

    /**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }

    /**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
    function listCacheSet(key, value) {
      var data = this.__data__,
          index = assocIndexOf(data, key);

      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
      var index = -1,
          length = entries == null ? 0 : entries.length;

      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }

    /**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
      };
    }

    /**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function mapCacheDelete(key) {
      var result = getMapData(this, key)['delete'](key);
      this.size -= result ? 1 : 0;
      return result;
    }

    /**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }

    /**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }

    /**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
    function mapCacheSet(key, value) {
      var data = getMapData(this, key),
          size = data.size;

      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var index = -1,
          length = values == null ? 0 : values.length;

      this.__data__ = new MapCache;
      while (++index < length) {
        this.add(values[index]);
      }
    }

    /**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }

    /**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
    function setCacheHas(value) {
      return this.__data__.has(value);
    }

    // Add methods to `SetCache`.
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;

    /*------------------------------------------------------------------------*/

    /**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }

    /**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
    function stackClear() {
      this.__data__ = new ListCache;
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
    function stackDelete(key) {
      var data = this.__data__,
          result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
    function stackGet(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function stackHas(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }

    // Add methods to `Stack`.
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value),
          isArg = !isArr && isArguments(value),
          isBuff = !isArr && !isArg && isBuffer(value),
          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
          skipIndexes = isArr || isArg || isBuff || isType,
          result = skipIndexes ? baseTimes(value.length, String) : [],
          length = result.length;

      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
               // Safari 9 has enumerable `arguments.length` in strict mode.
               key == 'length' ||
               // Node.js 0.10 has enumerable non-index properties on buffers.
               (isBuff && (key == 'offset' || key == 'parent')) ||
               // PhantomJS 2 has enumerable non-index properties on typed arrays.
               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
               // Skip index properties.
               isIndex(key, length)
            ))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
    function arraySample(array) {
      var length = array.length;
      return length ? array[baseRandom(0, length - 1)] : undefined;
    }

    /**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function arraySampleSize(array, n) {
      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
    }

    /**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function arrayShuffle(array) {
      return shuffleSelf(copyArray(array));
    }

    /**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignMergeValue(object, key, value) {
      if ((value !== undefined && !eq(object[key], value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
          (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
      }
    }

    /**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection) {
        setter(accumulator, value, iteratee(value), collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }

    /**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }

    /**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
    function baseAssignValue(object, key, value) {
      if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
          'configurable': true,
          'enumerable': true,
          'value': value,
          'writable': true
        });
      } else {
        object[key] = value;
      }
    }

    /**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
    function baseAt(object, paths) {
      var index = -1,
          length = paths.length,
          result = Array(length),
          skip = object == null;

      while (++index < length) {
        result[index] = skip ? undefined : get(object, paths[index]);
      }
      return result;
    }

    /**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== undefined) {
          number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }

    /**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
          isDeep = bitmask & CLONE_DEEP_FLAG,
          isFlat = bitmask & CLONE_FLAT_FLAG,
          isFull = bitmask & CLONE_SYMBOLS_FLAG;

      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
            isFunc = tag == funcTag || tag == genTag;

        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = (isFlat || isFunc) ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      // Check for circular references and return its corresponding clone.
      stack || (stack = new Stack);
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);

      var keysFunc = isFull
        ? (isFlat ? getAllKeysIn : getAllKeys)
        : (isFlat ? keysIn : keys);

      var props = isArr ? undefined : keysFunc(value);
      arrayEach(props || value, function(subValue, key) {
        if (props) {
          key = subValue;
          subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    /**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
    function baseConforms(source) {
      var props = keys(source);
      return function(object) {
        return baseConformsTo(object, source, props);
      };
    }

    /**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
    function baseConformsTo(object, source, props) {
      var length = props.length;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (length--) {
        var key = props[length],
            predicate = source[key],
            value = object[key];

        if ((value === undefined && !(key in object)) || !predicate(value)) {
          return false;
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          isCommon = true,
          length = array.length,
          result = [],
          valuesLength = values.length;

      if (!length) {
        return result;
      }
      if (iteratee) {
        values = arrayMap(values, baseUnary(iteratee));
      }
      if (comparator) {
        includes = arrayIncludesWith;
        isCommon = false;
      }
      else if (values.length >= LARGE_ARRAY_SIZE) {
        includes = cacheHas;
        isCommon = false;
        values = new SetCache(values);
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee == null ? value : iteratee(value);

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === computed) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (!includes(values, computed, comparator)) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(array, iteratee, comparator) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index],
            current = iteratee(value);

        if (current != null && (computed === undefined
              ? (current === current && !isSymbol(current))
              : comparator(current, computed)
            )) {
          var computed = current,
              result = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = toInteger(start);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : toInteger(end);
      if (end < 0) {
        end += length;
      }
      end = start > end ? 0 : toLength(end);
      while (start < end) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
          length = array.length;

      predicate || (predicate = isFlattenable);
      result || (result = []);

      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForOwn` which iterates over `object`
     * properties returned by `keysFunc` and invokes `iteratee` for each property.
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return object && baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
    function baseFunctions(object, props) {
      return arrayFilter(props, function(key) {
        return isFunction(object[key]);
      });
    }

    /**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path) {
      path = castPath(path, object);

      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @param {Function} symbolsFunc The function to get the symbols of `object`.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }

    /**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    function baseGetTag(value) {
      if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
      }
      return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
    }

    /**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
    function baseGt(value, other) {
      return value > other;
    }

    /**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHas(object, key) {
      return object != null && hasOwnProperty.call(object, key);
    }

    /**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }

    /**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
    function baseInRange(number, start, end) {
      return number >= nativeMin(start, end) && number < nativeMax(start, end);
    }

    /**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
    function baseIntersection(arrays, iteratee, comparator) {
      var includes = comparator ? arrayIncludesWith : arrayIncludes,
          length = arrays[0].length,
          othLength = arrays.length,
          othIndex = othLength,
          caches = Array(othLength),
          maxLength = Infinity,
          result = [];

      while (othIndex--) {
        var array = arrays[othIndex];
        if (othIndex && iteratee) {
          array = arrayMap(array, baseUnary(iteratee));
        }
        maxLength = nativeMin(array.length, maxLength);
        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
          ? new SetCache(othIndex && array)
          : undefined;
      }
      array = arrays[0];

      var index = -1,
          seen = caches[0];

      outer:
      while (++index < length && result.length < maxLength) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (!(seen
              ? cacheHas(seen, computed)
              : includes(result, computed, comparator)
            )) {
          othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if (!(cache
                  ? cacheHas(cache, computed)
                  : includes(arrays[othIndex], computed, comparator))
                ) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
    function baseInverter(object, setter, iteratee, accumulator) {
      baseForOwn(object, function(value, key, object) {
        setter(accumulator, iteratee(value), key, object);
      });
      return accumulator;
    }

    /**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function baseInvoke(object, path, args) {
      path = castPath(path, object);
      object = parent(object, path);
      var func = object == null ? object : object[toKey(last(path))];
      return func == null ? undefined : apply(func, object, args);
    }

    /**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }

    /**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
    function baseIsArrayBuffer(value) {
      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
    }

    /**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
    function baseIsDate(value) {
      return isObjectLike(value) && baseGetTag(value) == dateTag;
    }

    /**
     * The base implementation of `_.isEqual` which supports partial comparisons
     * and tracks traversed objects.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Unordered comparison
     *  2 - Partial comparison
     * @param {Function} [customizer] The function to customize comparisons.
     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = objIsArr ? arrayTag : getTag(object),
          othTag = othIsArr ? arrayTag : getTag(other);

      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;

      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return (objIsArr || isTypedArray(object))
          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object,
              othUnwrapped = othIsWrapped ? other.value() : other;

          stack || (stack = new Stack);
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack);
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }

    /**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }

    /**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack;
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === undefined
                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
                : result
              )) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }

    /**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
    function baseIsRegExp(value) {
      return isObjectLike(value) && baseGetTag(value) == regexpTag;
    }

    /**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }

    /**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
    function baseIsTypedArray(value) {
      return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }

    /**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
    function baseIteratee(value) {
      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
      if (typeof value == 'function') {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == 'object') {
        return isArray(value)
          ? baseMatchesProperty(value[0], value[1])
          : baseMatches(value);
      }
      return property(value);
    }

    /**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object),
          result = [];

      for (var key in object) {
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
    function baseLt(value, other) {
      return value < other;
    }

    /**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return (objValue === undefined && objValue === srcValue)
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }

    /**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        if (isObject(srcValue)) {
          stack || (stack = new Stack);
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        }
        else {
          var newValue = customizer
            ? customizer(object[key], srcValue, (key + ''), object, source, stack)
            : undefined;

          if (newValue === undefined) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = object[key],
          srcValue = source[key],
          stacked = stack.get(srcValue);

      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer
        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
        : undefined;

      var isCommon = newValue === undefined;

      if (isCommon) {
        var isArr = isArray(srcValue),
            isBuff = !isArr && isBuffer(srcValue),
            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray(objValue)) {
            newValue = objValue;
          }
          else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          }
          else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          }
          else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          }
          else {
            newValue = [];
          }
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          }
          else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
            newValue = initCloneObject(srcValue);
          }
        }
        else {
          isCommon = false;
        }
      }
      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack['delete'](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }

    /**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
    function baseNth(array, n) {
      var length = array.length;
      if (!length) {
        return;
      }
      n += n < 0 ? length : 0;
      return isIndex(n, length) ? array[n] : undefined;
    }

    /**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseOrderBy(collection, iteratees, orders) {
      var index = -1;
      iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));

      var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
    function basePick(object, paths) {
      return basePickBy(object, paths, function(value, path) {
        return hasIn(object, path);
      });
    }

    /**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
    function basePickBy(object, paths, predicate) {
      var index = -1,
          length = paths.length,
          result = {};

      while (++index < length) {
        var path = paths[index],
            value = baseGet(object, path);

        if (predicate(value, path)) {
          baseSet(result, castPath(path, object), value);
        }
      }
      return result;
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }

    /**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
    function basePullAll(array, values, iteratee, comparator) {
      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
          index = -1,
          length = values.length,
          seen = array;

      if (array === values) {
        values = copyArray(values);
      }
      if (iteratee) {
        seen = arrayMap(array, baseUnary(iteratee));
      }
      while (++index < length) {
        var fromIndex = 0,
            value = values[index],
            computed = iteratee ? iteratee(value) : value;

        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
          if (seen !== array) {
            splice.call(seen, fromIndex, 1);
          }
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0,
          lastIndex = length - 1;

      while (length--) {
        var index = indexes[length];
        if (length == lastIndex || index !== previous) {
          var previous = index;
          if (isIndex(index)) {
            splice.call(array, index, 1);
          } else {
            baseUnset(array, index);
          }
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
    function baseRandom(lower, upper) {
      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
    }

    /**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
    function baseRange(start, end, step, fromRight) {
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }

    /**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    /**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity), func + '');
    }

    /**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
    function baseSample(collection) {
      return arraySample(values(collection));
    }

    /**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
    function baseSampleSize(collection, n) {
      var array = values(collection);
      return shuffleSelf(array, baseClamp(n, 0, array.length));
    }

    /**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseSet(object, path, value, customizer) {
      if (!isObject(object)) {
        return object;
      }
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = toKey(path[index]),
            newValue = value;

        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : undefined;
          if (newValue === undefined) {
            newValue = isObject(objValue)
              ? objValue
              : (isIndex(path[index + 1]) ? [] : {});
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }

    /**
     * The base implementation of `setData` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `setToString` without support for hot loop shorting.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
      });
    };

    /**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
    function baseShuffle(collection) {
      return shuffleSelf(values(collection));
    }

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndex(array, value, retHighest) {
      var low = 0,
          high = array == null ? low : array.length;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if (computed !== null && !isSymbol(computed) &&
              (retHighest ? (computed <= value) : (computed < value))) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return baseSortedIndexBy(array, value, identity, retHighest);
    }

    /**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function baseSortedIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array == null ? 0 : array.length,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsSymbol = isSymbol(value),
          valIsUndefined = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            othIsDefined = computed !== undefined,
            othIsNull = computed === null,
            othIsReflexive = computed === computed,
            othIsSymbol = isSymbol(computed);

        if (valIsNaN) {
          var setLow = retHighest || othIsReflexive;
        } else if (valIsUndefined) {
          setLow = othIsReflexive && (retHighest || othIsDefined);
        } else if (valIsNull) {
          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
        } else if (valIsSymbol) {
          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
        } else if (othIsNull || othIsSymbol) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseSortedUniq(array, iteratee) {
      var index = -1,
          length = array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        if (!index || !eq(computed, seen)) {
          var seen = computed;
          result[resIndex++] = value === 0 ? 0 : value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
    function baseToNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      return +value;
    }

    /**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
    function baseToString(value) {
      // Exit early for strings to avoid a performance hit in some environments.
      if (typeof value == 'string') {
        return value;
      }
      if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
    function baseUniq(array, iteratee, comparator) {
      var index = -1,
          includes = arrayIncludes,
          length = array.length,
          isCommon = true,
          result = [],
          seen = result;

      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      }
      else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache;
      }
      else {
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value) : value;

        value = (comparator || value !== 0) ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
    function baseUnset(object, path) {
      path = castPath(path, object);
      object = parent(object, path);
      return object == null || delete object[toKey(last(path))];
    }

    /**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
    function baseUpdate(object, path, updater, customizer) {
      return baseSet(object, path, updater(baseGet(object, path)), customizer);
    }

    /**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) {}

      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      return arrayReduce(actions, function(result, action) {
        return action.func.apply(action.thisArg, arrayPush([result], action.args));
      }, result);
    }

    /**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
    function baseXor(arrays, iteratee, comparator) {
      var length = arrays.length;
      if (length < 2) {
        return length ? baseUniq(arrays[0]) : [];
      }
      var index = -1,
          result = Array(length);

      while (++index < length) {
        var array = arrays[index],
            othIndex = -1;

        while (++othIndex < length) {
          if (othIndex != index) {
            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
          }
        }
      }
      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
    }

    /**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
    function baseZipObject(props, values, assignFunc) {
      var index = -1,
          length = props.length,
          valsLength = values.length,
          result = {};

      while (++index < length) {
        var value = index < valsLength ? values[index] : undefined;
        assignFunc(result, props[index], value);
      }
      return result;
    }

    /**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
    function castArrayLikeObject(value) {
      return isArrayLikeObject(value) ? value : [];
    }

    /**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
    function castFunction(value) {
      return typeof value == 'function' ? value : identity;
    }

    /**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }

    /**
     * A `baseRest` alias which can be replaced with `identity` by module
     * replacement plugins.
     *
     * @private
     * @type {Function}
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    var castRest = baseRest;

    /**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === undefined ? length : end;
      return (!start && end >= length) ? array : baseSlice(array, start, end);
    }

    /**
     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
     *
     * @private
     * @param {number|Object} id The timer id or timeout object of the timer to clear.
     */
    var clearTimeout = ctxClearTimeout || function(id) {
      return root.clearTimeout(id);
    };

    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

      buffer.copy(result);
      return result;
    }

    /**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
      return result;
    }

    /**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }

    /**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor);
    }

    /**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }

    /**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor);
    }

    /**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }

    /**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }

    /**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== undefined,
            valIsNull = value === null,
            valIsReflexive = value === value,
            valIsSymbol = isSymbol(value);

        var othIsDefined = other !== undefined,
            othIsNull = other === null,
            othIsReflexive = other === other,
            othIsSymbol = isSymbol(other);

        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
            (valIsNull && othIsDefined && othIsReflexive) ||
            (!valIsDefined && othIsReflexive) ||
            !valIsReflexive) {
          return 1;
        }
        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
            (othIsNull && valIsDefined && valIsReflexive) ||
            (!othIsDefined && valIsReflexive) ||
            !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }

    /**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
    function compareMultiple(object, other, orders) {
      var index = -1,
          objCriteria = object.criteria,
          othCriteria = other.criteria,
          length = objCriteria.length,
          ordersLength = orders.length;

      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == 'desc' ? -1 : 1);
        }
      }
      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
      // that causes it, under certain circumstances, to provide the same value for
      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
      // for more details.
      //
      // This also ensures a stable sort in V8 and other engines.
      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
      return object.index - other.index;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersLength = holders.length,
          leftIndex = -1,
          leftLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(leftLength + rangeLength),
          isUncurried = !isCurried;

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1,
          argsLength = args.length,
          holdersIndex = -1,
          holdersLength = holders.length,
          rightIndex = -1,
          rightLength = partials.length,
          rangeLength = nativeMax(argsLength - holdersLength, 0),
          result = Array(rangeLength + rightLength),
          isUncurried = !isCurried;

      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function copyArray(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];

        var newValue = customizer
          ? customizer(object[key], source[key], key, object, source)
          : undefined;

        if (newValue === undefined) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }

    /**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }

    /**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }

    /**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator,
            accumulator = initializer ? initializer() : {};

        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
      };
    }

    /**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1,
            length = sources.length,
            customizer = length > 1 ? sources[length - 1] : undefined,
            guard = length > 2 ? sources[2] : undefined;

        customizer = (assigner.length > 3 && typeof customizer == 'function')
          ? (length--, customizer)
          : undefined;

        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length,
            index = fromRight ? length : -1,
            iterable = Object(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1,
            iterable = Object(object),
            props = keysFunc(object),
            length = props.length;

        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);

        var strSymbols = hasUnicode(string)
          ? stringToArray(string)
          : undefined;

        var chr = strSymbols
          ? strSymbols[0]
          : string.charAt(0);

        var trailing = strSymbols
          ? castSlice(strSymbols, 1).join('')
          : string.slice(1);

        return chr[methodName]() + trailing;
      };
    }

    /**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtor(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length,
            placeholder = getHolder(wrapper);

        while (index--) {
          args[index] = arguments[index];
        }
        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
          ? []
          : replaceHolders(args, placeholder);

        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, undefined,
            args, holders, undefined, undefined, arity - length);
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = getIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return flatRest(function(funcs) {
        var length = funcs.length,
            index = length,
            prereq = LodashWrapper.prototype.thru;

        if (fromRight) {
          funcs.reverse();
        }
        while (index--) {
          var func = funcs[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
            var wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? index : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) &&
                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
                !data[4].length && data[9] == 1
              ) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func))
              ? wrapper[funcName]()
              : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value)) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      });
    }

    /**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG,
          isBind = bitmask & WRAP_BIND_FLAG,
          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
          isFlip = bitmask & WRAP_FLIP_FLAG,
          Ctor = isBindKey ? undefined : createCtor(func);

      function wrapper() {
        var length = arguments.length,
            args = Array(length),
            index = length;

        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper),
              holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
            args, newHolders, argPos, ary, arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
    function createInverter(setter, toIteratee) {
      return function(object, iteratee) {
        return baseInverter(object, setter, toIteratee(iteratee), {});
      };
    }

    /**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
    function createMathOperation(operator, defaultValue) {
      return function(value, other) {
        var result;
        if (value === undefined && other === undefined) {
          return defaultValue;
        }
        if (value !== undefined) {
          result = value;
        }
        if (other !== undefined) {
          if (result === undefined) {
            return other;
          }
          if (typeof value == 'string' || typeof other == 'string') {
            value = baseToString(value);
            other = baseToString(other);
          } else {
            value = baseToNumber(value);
            other = baseToNumber(other);
          }
          result = operator(value, other);
        }
        return result;
      };
    }

    /**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
    function createOver(arrayFunc) {
      return flatRest(function(iteratees) {
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        return baseRest(function(args) {
          var thisArg = this;
          return arrayFunc(iteratees, function(iteratee) {
            return apply(iteratee, thisArg, args);
          });
        });
      });
    }

    /**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
    function createPadding(length, chars) {
      chars = chars === undefined ? ' ' : baseToString(chars);

      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars)
        ? castSlice(stringToArray(result), 0, length).join('')
        : result.slice(0, length);
    }

    /**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG,
          Ctor = createCtor(func);

      function wrapper() {
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength),
            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
          end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }

    /**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
    function createRelationalOperation(operator) {
      return function(value, other) {
        if (!(typeof value == 'string' && typeof other == 'string')) {
          value = toNumber(value);
          other = toNumber(other);
        }
        return operator(value, other);
      };
    }

    /**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG,
          newHolders = isCurry ? holders : undefined,
          newHoldersRight = isCurry ? undefined : holders,
          newPartials = isCurry ? partials : undefined,
          newPartialsRight = isCurry ? undefined : partials;

      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
        newHoldersRight, argPos, ary, arity
      ];

      var result = wrapFunc.apply(undefined, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }

    /**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        number = toNumber(number);
        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
        if (precision) {
          // Shift with exponential notation to avoid floating-point issues.
          // See [MDN](https://mdn.io/round#Examples) for more details.
          var pair = (toString(number) + 'e').split('e'),
              value = func(pair[0] + 'e' + (+pair[1] + precision));

          pair = (toString(value) + 'e').split('e');
          return +(pair[0] + 'e' + (+pair[1] - precision));
        }
        return func(number);
      };
    }

    /**
     * Creates a set object of `values`.
     *
     * @private
     * @param {Array} values The values to add to the set.
     * @returns {Object} Returns the new set.
     */
    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
      return new Set(values);
    };

    /**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
    function createToPairs(keysFunc) {
      return function(object) {
        var tag = getTag(object);
        if (tag == mapTag) {
          return mapToArray(object);
        }
        if (tag == setTag) {
          return setToPairs(object);
        }
        return baseToPairs(object, keysFunc(object));
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === undefined ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;

      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func);

      var newData = [
        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
        argPos, ary, arity
      ];

      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === undefined
        ? (isBindKey ? 0 : func.length)
        : nativeMax(newData[9] - length, 0);

      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }

    /**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsAssignIn(objValue, srcValue, key, object) {
      if (objValue === undefined ||
          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        return srcValue;
      }
      return objValue;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
      if (isObject(objValue) && isObject(srcValue)) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        stack.set(srcValue, objValue);
        baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
        stack['delete'](srcValue);
      }
      return objValue;
    }

    /**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
    function customOmitClone(value) {
      return isPlainObject(value) ? undefined : value;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `array` and `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1,
          result = true,
          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

      stack.set(array, other);
      stack.set(other, array);

      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, arrValue, index, other, array, stack)
            : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
          if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
            result = false;
            break;
          }
        } else if (!(
              arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
            )) {
          result = false;
          break;
        }
      }
      stack['delete'](array);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if ((object.byteLength != other.byteLength) ||
              (object.byteOffset != other.byteOffset)) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;

        case arrayBufferTag:
          if ((object.byteLength != other.byteLength) ||
              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;

        case boolTag:
        case dateTag:
        case numberTag:
          // Coerce booleans to `1` or `0` and dates to milliseconds.
          // Invalid dates are coerced to `NaN`.
          return eq(+object, +other);

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings, primitives and objects,
          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
          // for more details.
          return object == (other + '');

        case mapTag:
          var convert = mapToArray;

        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);

          if (object.size != other.size && !isPartial) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;

          // Recursively compare objects (susceptible to call stack limits).
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack['delete'](object);
          return result;

        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
     * @param {Function} customizer The function to customize comparisons.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Object} stack Tracks traversed `object` and `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
          objProps = getAllKeys(object),
          objLength = objProps.length,
          othProps = getAllKeys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);

      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key];

        if (customizer) {
          var compared = isPartial
            ? customizer(othValue, objValue, key, other, object, stack)
            : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
              : compared
            )) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack['delete'](object);
      stack['delete'](other);
      return result;
    }

    /**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
    function flatRest(func) {
      return setToString(overRest(func, undefined, flatten), func + '');
    }

    /**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }

    /**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = (func.name + ''),
          array = realNames[result],
          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
    function getHolder(func) {
      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
      return object.placeholder;
    }

    /**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
    function getIteratee() {
      var result = lodash.iteratee || iteratee;
      result = result === iteratee ? baseIteratee : result;
      return arguments.length ? result(arguments[0], arguments[1]) : result;
    }

    /**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key)
        ? data[typeof key == 'string' ? 'string' : 'hash']
        : data.map;
    }

    /**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = keys(object),
          length = result.length;

      while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : undefined;
    }

    /**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag),
          tag = value[symToStringTag];

      try {
        value[symToStringTag] = undefined;
        var unmasked = true;
      } catch (e) {}

      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

    /**
     * Creates an array of the own and inherited enumerable symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of symbols.
     */
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };

    /**
     * Gets the `toStringTag` of `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
    var getTag = baseGetTag;

    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
        (Map && getTag(new Map) != mapTag) ||
        (Promise && getTag(Promise.resolve()) != promiseTag) ||
        (Set && getTag(new Set) != setTag) ||
        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
      getTag = function(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString: return dataViewTag;
            case mapCtorString: return mapTag;
            case promiseCtorString: return promiseTag;
            case setCtorString: return setTag;
            case weakMapCtorString: return weakMapTag;
          }
        }
        return result;
      };
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }

    /**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);

      var index = -1,
          length = path.length,
          result = false;

      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) &&
        (isArray(object) || isArguments(object));
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = array.constructor(length);

      // Add properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      return (typeof object.constructor == 'function' && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case dataViewTag:
          return cloneDataView(object, isDeep);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          return cloneTypedArray(object, isDeep);

        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          return cloneRegExp(object);

        case setTag:
          return cloneSet(object, isDeep, cloneFunc);

        case symbolTag:
          return cloneSymbol(object);
      }
    }

    /**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
      details = details.join(length > 2 ? ', ' : ' ');
      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
    }

    /**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) ||
        !!(spreadableSymbol && value && value[spreadableSymbol]);
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length &&
        (typeof value == 'number' || reIsUint.test(value)) &&
        (value > -1 && value % 1 == 0 && value < length);
    }

    /**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
            ? (isArrayLike(object) && isIndex(index, object.length))
            : (type == 'string' && index in object)
          ) {
        return eq(object[index], value);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
          value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
        (object != null && value in Object(object));
    }

    /**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
    function isKeyable(value) {
      var type = typeof value;
      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
        ? (value !== '__proto__')
        : (value === null);
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func),
          other = lodash[funcName];

      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
    function isMasked(func) {
      return !!maskSrcKey && (maskSrcKey in func);
    }

    /**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
    var isMaskable = coreJsData ? isFunction : stubFalse;

    /**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
    function isPrototype(value) {
      var Ctor = value && value.constructor,
          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

      return value === proto;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue &&
          (srcValue !== undefined || (key in Object(object)));
      };
    }

    /**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });

      var cache = result.cache;
      return result;
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

      var isCombo =
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = value;
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }

    /**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
    function overRest(func, start, transform) {
      start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);

        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }

    /**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
    function parent(object, path) {
      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = copyArray(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity
     * function to avoid garbage collection pauses in V8. See
     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = shortOut(baseSetData);

    /**
     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
    var setTimeout = ctxSetTimeout || function(func, wait) {
      return root.setTimeout(func, wait);
    };

    /**
     * Sets the `toString` method of `func` to return `string`.
     *
     * @private
     * @param {Function} func The function to modify.
     * @param {Function} string The `toString` result.
     * @returns {Function} Returns `func`.
     */
    var setToString = shortOut(baseSetToString);

    /**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
    function setWrapToString(wrapper, reference, bitmask) {
      var source = (reference + '');
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }

    /**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
    function shortOut(func) {
      var count = 0,
          lastCalled = 0;

      return function() {
        var stamp = nativeNow(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(undefined, arguments);
      };
    }

    /**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
    function shuffleSelf(array, size) {
      var index = -1,
          length = array.length,
          lastIndex = length - 1;

      size = size === undefined ? length : size;
      while (++index < size) {
        var rand = baseRandom(index, lastIndex),
            value = array[rand];

        array[rand] = array[index];
        array[index] = value;
      }
      array.length = size;
      return array;
    }

    /**
     * Converts `string` to a property path array.
     *
     * @private
     * @param {string} string The string to convert.
     * @returns {Array} Returns the property path array.
     */
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (reLeadingDot.test(string)) {
        result.push('');
      }
      string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    });

    /**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
    function toKey(value) {
      if (typeof value == 'string' || isSymbol(value)) {
        return value;
      }
      var result = (value + '');
      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
    }

    /**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {}
        try {
          return (func + '');
        } catch (e) {}
      }
      return '';
    }

    /**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = '_.' + pair[0];
        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__  = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if ((guard ? isIterateeCall(array, size, guard) : size === undefined)) {
        size = 1;
      } else {
        size = nativeMax(toInteger(size), 0);
      }
      var length = array == null ? 0 : array.length;
      if (!length || size < 1) {
        return [];
      }
      var index = 0,
          resIndex = 0,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[resIndex++] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array == null ? 0 : array.length,
          resIndex = 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[resIndex++] = value;
        }
      }
      return result;
    }

    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    function concat() {
      var length = arguments.length;
      if (!length) {
        return [];
      }
      var args = Array(length - 1),
          array = arguments[0],
          index = length;

      while (index--) {
        args[index - 1] = arguments[index];
      }
      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
    }

    /**
     * Creates an array of `array` values not included in the other given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * **Note:** Unlike `_.pullAll`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.without, _.xor
     * @example
     *
     * _.difference([2, 1], [2, 3]);
     * // => [1]
     */
    var difference = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `iteratee` which
     * is invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var differenceBy = baseRest(function(array, values) {
      var iteratee = last(values);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.difference` except that it accepts `comparator`
     * which is invoked to compare elements of `array` to `values`. The order and
     * references of result values are determined by the first array. The comparator
     * is invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The values to exclude.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     *
     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }]
     */
    var differenceWith = baseRest(function(array, values) {
      var comparator = last(values);
      if (isArrayLikeObject(comparator)) {
        comparator = undefined;
      }
      return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
    function fill(array, value, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index);
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
          ? nativeMax(length + index, 0)
          : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
    }

    /**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }

    /**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
    function flattenDeep(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, INFINITY) : [];
    }

    /**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
    function flattenDepth(array, depth) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(array, depth);
    }

    /**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
    function fromPairs(pairs) {
      var index = -1,
          length = pairs == null ? 0 : pairs.length,
          result = {};

      while (++index < length) {
        var pair = pairs[index];
        result[pair[0]] = pair[1];
      }
      return result;
    }

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
    function head(array) {
      return (array && array.length) ? array[0] : undefined;
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
    function indexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseIndexOf(array, value, index);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 0, -1) : [];
    }

    /**
     * Creates an array of unique values that are included in all given arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. The order and references of result values are
     * determined by the first array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersection([2, 1], [2, 3]);
     * // => [2]
     */
    var intersection = baseRest(function(arrays) {
      var mapped = arrayMap(arrays, castArrayLikeObject);
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped)
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `iteratee`
     * which is invoked for each element of each `arrays` to generate the criterion
     * by which they're compared. The order and references of result values are
     * determined by the first array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [2.1]
     *
     * // The `_.property` iteratee shorthand.
     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }]
     */
    var intersectionBy = baseRest(function(arrays) {
      var iteratee = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      if (iteratee === last(mapped)) {
        iteratee = undefined;
      } else {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, getIteratee(iteratee, 2))
        : [];
    });

    /**
     * This method is like `_.intersection` except that it accepts `comparator`
     * which is invoked to compare elements of `arrays`. The order and references
     * of result values are determined by the first array. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of intersecting values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.intersectionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }]
     */
    var intersectionWith = baseRest(function(arrays) {
      var comparator = last(arrays),
          mapped = arrayMap(arrays, castArrayLikeObject);

      comparator = typeof comparator == 'function' ? comparator : undefined;
      if (comparator) {
        mapped.pop();
      }
      return (mapped.length && mapped[0] === arrays[0])
        ? baseIntersection(mapped, undefined, comparator)
        : [];
    });

    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
    function join(array, separator) {
      return array == null ? '' : nativeJoin.call(array, separator);
    }

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length;
      if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return value === value
        ? strictLastIndexOf(array, value, index)
        : baseFindIndex(array, baseIsNaN, index, true);
    }

    /**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
    function nth(array, n) {
      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined;
    }

    /**
     * Removes all given values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
     * to remove elements from an array by predicate.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pull(array, 'a', 'c');
     * console.log(array);
     * // => ['b', 'b']
     */
    var pull = baseRest(pullAll);

    /**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
    function pullAll(array, values) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values)
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
    function pullAllBy(array, values, iteratee) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, getIteratee(iteratee, 2))
        : array;
    }

    /**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
    function pullAllWith(array, values, comparator) {
      return (array && array.length && values && values.length)
        ? basePullAll(array, values, undefined, comparator)
        : array;
    }

    /**
     * Removes elements from `array` corresponding to `indexes` and returns an
     * array of removed elements.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     * var pulled = _.pullAt(array, [1, 3]);
     *
     * console.log(array);
     * // => ['a', 'c']
     *
     * console.log(pulled);
     * // => ['b', 'd']
     */
    var pullAt = flatRest(function(array, indexes) {
      var length = array == null ? 0 : array.length,
          result = baseAt(array, indexes);

      basePullAt(array, arrayMap(indexes, function(index) {
        return isIndex(index, length) ? +index : index;
      }).sort(compareAscending));

      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getIteratee(predicate, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function reverse(array) {
      return array == null ? array : nativeReverse.call(array);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      else {
        start = start == null ? 0 : toInteger(start);
        end = end === undefined ? length : toInteger(end);
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
    function sortedIndex(array, value) {
      return baseSortedIndex(array, value);
    }

    /**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
    function sortedIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
    }

    /**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
    function sortedIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value);
        if (index < length && eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
    function sortedLastIndex(array, value) {
      return baseSortedIndex(array, value, true);
    }

    /**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
    function sortedLastIndexBy(array, value, iteratee) {
      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
    }

    /**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
    function sortedLastIndexOf(array, value) {
      var length = array == null ? 0 : array.length;
      if (length) {
        var index = baseSortedIndex(array, value, true) - 1;
        if (eq(array[index], value)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
    function sortedUniq(array) {
      return (array && array.length)
        ? baseSortedUniq(array)
        : [];
    }

    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
    function sortedUniqBy(array, iteratee) {
      return (array && array.length)
        ? baseSortedUniq(array, getIteratee(iteratee, 2))
        : [];
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
    function tail(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseSlice(array, 1, length) : [];
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      if (!(array && array.length)) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return [];
      }
      n = (guard || n === undefined) ? 1 : toInteger(n);
      n = length - n;
      return baseSlice(array, n < 0 ? 0 : n, length);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
    function takeRightWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
    function takeWhile(array, predicate) {
      return (array && array.length)
        ? baseWhile(array, getIteratee(predicate, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all given arrays using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([2], [1, 2]);
     * // => [2, 1]
     */
    var union = baseRest(function(arrays) {
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
    });

    /**
     * This method is like `_.union` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which uniqueness is computed. Result values are chosen from the first
     * array in which the value occurs. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    var unionBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.union` except that it accepts `comparator` which
     * is invoked to compare elements of `arrays`. Result values are chosen from
     * the first array in which the value occurs. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.unionWith(objects, others, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var unionWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
    function uniq(array) {
      return (array && array.length) ? baseUniq(array) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniqBy(array, iteratee) {
      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
    }

    /**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
    function uniqWith(array, comparator) {
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var length = 0;
      array = arrayFilter(array, function(group) {
        if (isArrayLikeObject(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      return baseTimes(length, function(index) {
        return arrayMap(array, baseProperty(index));
      });
    }

    /**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee) {
      if (!(array && array.length)) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      return arrayMap(result, function(group) {
        return apply(iteratee, undefined, group);
      });
    }

    /**
     * Creates an array excluding all given values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.pull`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.xor
     * @example
     *
     * _.without([2, 1, 2, 3], 1, 2);
     * // => [3]
     */
    var without = baseRest(function(array, values) {
      return isArrayLikeObject(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the
     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the given arrays. The order of result values is determined by the order
     * they occur in the arrays.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of filtered values.
     * @see _.difference, _.without
     * @example
     *
     * _.xor([2, 1], [2, 3]);
     * // => [1, 3]
     */
    var xor = baseRest(function(arrays) {
      return baseXor(arrayFilter(arrays, isArrayLikeObject));
    });

    /**
     * This method is like `_.xor` except that it accepts `iteratee` which is
     * invoked for each element of each `arrays` to generate the criterion by
     * which by which they're compared. The order of result values is determined
     * by the order they occur in the arrays. The iteratee is invoked with one
     * argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
     * // => [1.2, 3.4]
     *
     * // The `_.property` iteratee shorthand.
     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 2 }]
     */
    var xorBy = baseRest(function(arrays) {
      var iteratee = last(arrays);
      if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
      }
      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
    });

    /**
     * This method is like `_.xor` except that it accepts `comparator` which is
     * invoked to compare elements of `arrays`. The order of result values is
     * determined by the order they occur in the arrays. The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.xorWith(objects, others, _.isEqual);
     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
     */
    var xorWith = baseRest(function(arrays) {
      var comparator = last(arrays);
      comparator = typeof comparator == 'function' ? comparator : undefined;
      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
    });

    /**
     * Creates an array of grouped elements, the first of which contains the
     * first elements of the given arrays, the second of which contains the
     * second elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     */
    var zip = baseRest(unzip);

    /**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
    function zipObject(props, values) {
      return baseZipObject(props || [], values || [], assignValue);
    }

    /**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
    function zipObjectDeep(props, values) {
      return baseZipObject(props || [], values || [], baseSet);
    }

    /**
     * This method is like `_.zip` except that it accepts `iteratee` to specify
     * how grouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  grouped values.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
     *   return a + b + c;
     * });
     * // => [111, 222]
     */
    var zipWith = baseRest(function(arrays) {
      var length = arrays.length,
          iteratee = length > 1 ? arrays[length - 1] : undefined;

      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
      return unzipWith(arrays, iteratee);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor) {
      return interceptor(value);
    }

    /**
     * This method is the wrapper version of `_.at`.
     *
     * @name at
     * @memberOf _
     * @since 1.0.0
     * @category Seq
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _(object).at(['a[0].b.c', 'a[1]']).value();
     * // => [3, 4]
     */
    var wrapperAt = flatRest(function(paths) {
      var length = paths.length,
          start = length ? paths[0] : 0,
          value = this.__wrapped__,
          interceptor = function(object) { return baseAt(object, paths); };

      if (length > 1 || this.__actions__.length ||
          !(value instanceof LazyWrapper) || !isIndex(start)) {
        return this.thru(interceptor);
      }
      value = value.slice(start, +start + (length ? 1 : 0));
      value.__actions__.push({
        'func': thru,
        'args': [interceptor],
        'thisArg': undefined
      });
      return new LodashWrapper(value, this.__chain__).thru(function(array) {
        if (length && !array.length) {
          array.push(undefined);
        }
        return array;
      });
    });

    /**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
    function wrapperNext() {
      if (this.__values__ === undefined) {
        this.__values__ = toArray(this.value());
      }
      var done = this.__index__ >= this.__values__.length,
          value = done ? undefined : this.__values__[this.__index__++];

      return { 'done': done, 'value': value };
    }

    /**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
    function wrapperToIterator() {
      return this;
    }

    /**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        clone.__index__ = 0;
        clone.__values__ = undefined;
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({
          'func': thru,
          'args': [reverse],
          'thisArg': undefined
        });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(reverse);
    }

    /**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the number of times the key was returned by `iteratee`. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': 1, '6': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        ++result[key];
      } else {
        baseAssignValue(result, key, 1);
      }
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, guard) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
    function filter(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.find(users, function(o) { return o.age < 40; });
     * // => object for 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.find(users, { 'age': 1, 'active': true });
     * // => object for 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.find(users, ['active', false]);
     * // => object for 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.find(users, 'active');
     * // => object for 'barney'
     */
    var find = createFind(findIndex);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=collection.length-1] The index to search from.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(findLastIndex);

    /**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMap(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), 1);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
    function flatMapDeep(collection, iteratee) {
      return baseFlatten(map(collection, iteratee), INFINITY);
    }

    /**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
    function flatMapDepth(collection, iteratee, depth) {
      depth = depth === undefined ? 1 : toInteger(depth);
      return baseFlatten(map(collection, iteratee), depth);
    }

    /**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forEach(collection, iteratee) {
      var func = isArray(collection) ? arrayEach : baseEach;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
    function forEachRight(collection, iteratee) {
      var func = isArray(collection) ? arrayEachRight : baseEachRight;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The order of grouped values
     * is determined by the order they occur in `collection`. The corresponding
     * value of each key is an array of elements responsible for generating the
     * key. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
     * // => { '4': [4.2], '6': [6.1, 6.3] }
     *
     * // The `_.property` iteratee shorthand.
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });

    /**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
    function includes(collection, value, fromIndex, guard) {
      collection = isArrayLike(collection) ? collection : values(collection);
      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

      var length = collection.length;
      if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
      }
      return isString(collection)
        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
    }

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `path` is a function, it's invoked
     * for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke each method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invokeMap([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invokeMap = baseRest(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
      });
      return result;
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` thru `iteratee`. The corresponding value of
     * each key is the last element responsible for generating the key. The
     * iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var array = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.keyBy(array, function(o) {
     *   return String.fromCharCode(o.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.keyBy(array, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     */
    var keyBy = createAggregator(function(result, value, key) {
      baseAssignValue(result, key, value);
    });

    /**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee) {
      var func = isArray(collection) ? arrayMap : baseMap;
      return func(collection, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
    function orderBy(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      orders = guard ? undefined : orders;
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseOrderBy(collection, iteratees, orders);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, the second of which
     * contains elements `predicate` returns falsey for. The predicate is
     * invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * _.partition(users, function(o) { return o.active; });
     * // => objects for [['fred'], ['barney', 'pebbles']]
     *
     * // The `_.matches` iteratee shorthand.
     * _.partition(users, { 'age': 1, 'active': false });
     * // => objects for [['pebbles'], ['barney', 'fred']]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.partition(users, ['active', false]);
     * // => objects for [['barney', 'pebbles'], ['fred']]
     *
     * // The `_.property` iteratee shorthand.
     * _.partition(users, 'active');
     * // => objects for [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
    function reduce(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduce : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, iteratee, accumulator) {
      var func = isArray(collection) ? arrayReduceRight : baseReduce,
          initAccum = arguments.length < 3;

      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
    }

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
    function reject(collection, predicate) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      return func(collection, negate(getIteratee(predicate, 3)));
    }

    /**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
    function sample(collection) {
      var func = isArray(collection) ? arraySample : baseSample;
      return func(collection);
    }

    /**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
    function sampleSize(collection, n, guard) {
      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
      return func(collection, n);
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      var func = isArray(collection) ? arrayShuffle : baseShuffle;
      return func(collection);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      if (collection == null) {
        return 0;
      }
      if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
      }
      var tag = getTag(collection);
      if (tag == mapTag || tag == setTag) {
        return collection.size;
      }
      return baseKeys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, guard) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = undefined;
      }
      return func(collection, getIteratee(predicate, 3));
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection thru each iteratee. This method
     * performs a stable sort, that is, it preserves the original sort order of
     * equal elements. The iteratees are invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.sortBy(users, [function(o) { return o.user; }]);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     *
     * _.sortBy(users, ['user', 'age']);
     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
     */
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = ctxNow || function() {
      return root.Date.now();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
    function after(n, func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      n = guard ? undefined : n;
      n = (func && n == null) ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and `partials` prepended to the arguments it receives.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * function greet(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * }
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = baseRest(function(func, thisArg, partials) {
      var bitmask = WRAP_BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Creates a function that invokes the method at `object[key]` with `partials`
     * prepended to the arguments it receives.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist. See
     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Function
     * @param {Object} object The object to invoke the method on.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // Bound with placeholders.
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = baseRest(function(object, key, partials) {
      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
      }
      return createWrap(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    function curry(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curry.placeholder;
      return result;
    }

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    function curryRight(func, arity, guard) {
      arity = guard ? undefined : arity;
      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
      result.placeholder = curryRight.placeholder;
      return result;
    }

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // => Logs 'deferred' after one millisecond.
     */
    var defer = baseRest(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => Logs 'later' after one second.
     */
    var delay = baseRest(function(func, wait, args) {
      return baseDelay(func, toNumber(wait) || 0, args);
    });

    /**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
    function flip(func) {
      return createWrap(func, WRAP_FLIP_FLAG);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache);
      return memoized;
    }

    // Expose `MapCache`.
    memoize.Cache = MapCache;

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0: return !predicate.call(this);
          case 1: return !predicate.call(this, args[0]);
          case 2: return !predicate.call(this, args[0], args[1]);
          case 3: return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
    var overArgs = castRest(function(func, transforms) {
      transforms = (transforms.length == 1 && isArray(transforms[0]))
        ? arrayMap(transforms[0], baseUnary(getIteratee()))
        : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));

      var funcsLength = transforms.length;
      return baseRest(function(args) {
        var index = -1,
            length = nativeMin(args.length, funcsLength);

        while (++index < length) {
          args[index] = transforms[index].call(this, args[index]);
        }
        return apply(func, this, args);
      });
    });

    /**
     * Creates a function that invokes `func` with `partials` prepended to the
     * arguments it receives. This method is like `_.bind` except it does **not**
     * alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 0.2.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // Partially applied with placeholders.
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partial));
      return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
    });

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to the arguments it receives.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method doesn't set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * function greet(greeting, name) {
     *   return greeting + ' ' + name;
     * }
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // Partially applied with placeholders.
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = baseRest(function(func, partials) {
      var holders = replaceHolders(partials, getHolder(partialRight));
      return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
    });

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified `indexes` where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, [2, 0, 1]);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     */
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function rest(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start === undefined ? start : toInteger(start);
      return baseRest(func, start);
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = start == null ? 0 : nativeMax(toInteger(start), 0);
      return baseRest(function(args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);

        if (array) {
          arrayPush(otherArgs, array);
        }
        return apply(func, this, otherArgs);
      });
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        'leading': leading,
        'maxWait': wait,
        'trailing': trailing
      });
    }

    /**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
    function unary(func) {
      return ary(func, 1);
    }

    /**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      return partial(castFunction(wrapper), value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
    function castArray() {
      if (!arguments.length) {
        return [];
      }
      var value = arguments[0];
      return isArray(value) ? value : [value];
    }

    /**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
    function cloneWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
    function cloneDeep(value) {
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
    }

    /**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
    function cloneDeepWith(value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
    }

    /**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
    function conformsTo(object, source) {
      return source == null || baseConformsTo(object, source, keys(source));
    }

    /**
     * Performs a
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * comparison between two values to determine if they are equivalent.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.eq(object, object);
     * // => true
     *
     * _.eq(object, other);
     * // => false
     *
     * _.eq('a', 'a');
     * // => true
     *
     * _.eq('a', Object('a'));
     * // => false
     *
     * _.eq(NaN, NaN);
     * // => true
     */
    function eq(value, other) {
      return value === other || (value !== value && other !== other);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     * @see _.lt
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    var gt = createRelationalOperation(baseGt);

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to
     *  `other`, else `false`.
     * @see _.lte
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    var gte = createRelationalOperation(function(value, other) {
      return value >= other;
    });

    /**
     * Checks if `value` is likely an `arguments` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     *  else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee');
    };

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(document.body.children);
     * // => false
     *
     * _.isArray('abc');
     * // => false
     *
     * _.isArray(_.noop);
     * // => false
     */
    var isArray = Array.isArray;

    /**
     * Checks if `value` is classified as an `ArrayBuffer` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     * @example
     *
     * _.isArrayBuffer(new ArrayBuffer(2));
     * // => true
     *
     * _.isArrayBuffer(new Array(2));
     * // => false
     */
    var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

    /**
     * Checks if `value` is array-like. A value is considered array-like if it's
     * not a function and has a `value.length` that's an integer greater than or
     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     * @example
     *
     * _.isArrayLike([1, 2, 3]);
     * // => true
     *
     * _.isArrayLike(document.body.children);
     * // => true
     *
     * _.isArrayLike('abc');
     * // => true
     *
     * _.isArrayLike(_.noop);
     * // => false
     */
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }

    /**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        (isObjectLike(value) && baseGetTag(value) == boolTag);
    }

    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */
    var isBuffer = nativeIsBuffer || stubFalse;

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

    /**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
    }

    /**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) &&
          (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
            isBuffer(value) || isTypedArray(value) || isArguments(value))) {
        return !value.length;
      }
      var tag = getTag(value);
      if (tag == mapTag || tag == setTag) {
        return !value.size;
      }
      if (isPrototype(value)) {
        return !baseKeys(value).length;
      }
      for (var key in value) {
        if (hasOwnProperty.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }

    /**
     * This method is like `_.isEqual` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with up to
     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, othValue) {
     *   if (isGreeting(objValue) && isGreeting(othValue)) {
     *     return true;
     *   }
     * }
     *
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqualWith(array, other, customizer);
     * // => true
     */
    function isEqualWith(value, other, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag ||
        (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in Safari 9 which returns 'object' for typed arrays and other constructors.
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }

    /**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
    function isInteger(value) {
      return typeof value == 'number' && value == toInteger(value);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This method is loosely based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     * @example
     *
     * _.isLength(3);
     * // => true
     *
     * _.isLength(Number.MIN_VALUE);
     * // => false
     *
     * _.isLength(Infinity);
     * // => false
     *
     * _.isLength('3');
     * // => false
     */
    function isLength(value) {
      return typeof value == 'number' &&
        value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return value != null && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Map` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     * @example
     *
     * _.isMap(new Map);
     * // => true
     *
     * _.isMap(new WeakMap);
     * // => false
     */
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

    /**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
    function isMatch(object, source) {
      return object === source || baseIsMatch(object, source, getMatchData(source));
    }

    /**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
    function isMatchWith(object, source, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return baseIsMatch(object, source, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some
      // ActiveX objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (isMaskable(value)) {
        throw new Error(CORE_ERROR_TEXT);
      }
      return baseIsNative(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    function isNil(value) {
      return value == null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        (isObjectLike(value) && baseGetTag(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
      return typeof Ctor == 'function' && Ctor instanceof Ctor &&
        funcToString.call(Ctor) == objectCtorString;
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

    /**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
    function isSafeInteger(value) {
      return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is classified as a `Set` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     * @example
     *
     * _.isSet(new Set);
     * // => true
     *
     * _.isSet(new WeakSet);
     * // => false
     */
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' ||
        (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }

    /**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
    function isWeakSet(value) {
      return isObjectLike(value) && baseGetTag(value) == weakSetTag;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     * @see _.gt
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    var lt = createRelationalOperation(baseLt);

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @since 3.9.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to
     *  `other`, else `false`.
     * @see _.gte
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    var lte = createRelationalOperation(function(value, other) {
      return value <= other;
    });

    /**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
    function toArray(value) {
      if (!value) {
        return [];
      }
      if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
      }
      if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
      }
      var tag = getTag(value),
          func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

      return func(value);
    }

    /**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }

    /**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;

      return result === result ? (remainder ? result - remainder : result) : 0;
    }

    /**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
    function toLength(value) {
      return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }

    /**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
    function toSafeInteger(value) {
      return value
        ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
        : (value === 0 ? value : 0);
    }

    /**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
    function toString(value) {
      return value == null ? '' : baseToString(value);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable string keyed properties of source objects to the
     * destination object. Source objects are applied from left to right.
     * Subsequent sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object` and is loosely based on
     * [`Object.assign`](https://mdn.io/Object/assign).
     *
     * @static
     * @memberOf _
     * @since 0.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assignIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assign({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'c': 3 }
     */
    var assign = createAssigner(function(object, source) {
      if (isPrototype(source) || isArrayLike(source)) {
        copyObject(source, keys(source), object);
        return;
      }
      for (var key in source) {
        if (hasOwnProperty.call(source, key)) {
          assignValue(object, key, source[key]);
        }
      }
    });

    /**
     * This method is like `_.assign` except that it iterates over own and
     * inherited source properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.assign
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * function Bar() {
     *   this.c = 3;
     * }
     *
     * Foo.prototype.b = 2;
     * Bar.prototype.d = 4;
     *
     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
     */
    var assignIn = createAssigner(function(object, source) {
      copyObject(source, keysIn(source), object);
    });

    /**
     * This method is like `_.assignIn` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias extendWith
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignInWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keysIn(source), object, customizer);
    });

    /**
     * This method is like `_.assign` except that it accepts `customizer`
     * which is invoked to produce the assigned values. If `customizer` returns
     * `undefined`, assignment is handled by the method instead. The `customizer`
     * is invoked with five arguments: (objValue, srcValue, key, object, source).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @see _.assignInWith
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   return _.isUndefined(objValue) ? srcValue : objValue;
     * }
     *
     * var defaults = _.partialRight(_.assignWith, customizer);
     *
     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
      copyObject(source, keys(source), object, customizer);
    });

    /**
     * Creates an array of values corresponding to `paths` of `object`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Array} Returns the picked values.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
     *
     * _.at(object, ['a[0].b.c', 'a[1]']);
     * // => [3, 4]
     */
    var at = flatRest(baseAt);

    /**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties == null ? result : baseAssign(result, properties);
    }

    /**
     * Assigns own and inherited enumerable string keyed properties of source
     * objects to the destination object for all destination properties that
     * resolve to `undefined`. Source objects are applied from left to right.
     * Once a property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaultsDeep
     * @example
     *
     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
     * // => { 'a': 1, 'b': 2 }
     */
    var defaults = baseRest(function(args) {
      args.push(undefined, customDefaultsAssignIn);
      return apply(assignInWith, undefined, args);
    });

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @see _.defaults
     * @example
     *
     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
     * // => { 'a': { 'b': 2, 'c': 3 } }
     */
    var defaultsDeep = baseRest(function(args) {
      args.push(undefined, customDefaultsMerge);
      return apply(mergeWith, undefined, args);
    });

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    function findKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    function findLastKey(object, predicate) {
      return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
    }

    /**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
    function forIn(object, iteratee) {
      return object == null
        ? object
        : baseFor(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
    function forInRight(object, iteratee) {
      return object == null
        ? object
        : baseForRight(object, getIteratee(iteratee, 3), keysIn);
    }

    /**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
    function forOwn(object, iteratee) {
      return object && baseForOwn(object, getIteratee(iteratee, 3));
    }

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
    function forOwnRight(object, iteratee) {
      return object && baseForOwnRight(object, getIteratee(iteratee, 3));
    }

    /**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
    function functions(object) {
      return object == null ? [] : baseFunctions(object, keys(object));
    }

    /**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
    function functionsIn(object) {
      return object == null ? [] : baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, path);
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
    function has(object, path) {
      return object != null && hasPath(object, path, baseHas);
    }

    /**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite
     * property assignments of previous values.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Object
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     */
    var invert = createInverter(function(result, value, key) {
      result[value] = key;
    }, constant(identity));

    /**
     * This method is like `_.invert` except that the inverted object is generated
     * from the results of running each element of `object` thru `iteratee`. The
     * corresponding inverted value of each inverted key is an array of keys
     * responsible for generating the inverted value. The iteratee is invoked
     * with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Object
     * @param {Object} object The object to invert.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invertBy(object);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     *
     * _.invertBy(object, function(value) {
     *   return 'group' + value;
     * });
     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
     */
    var invertBy = createInverter(function(result, value, key) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }, getIteratee);

    /**
     * Invokes the method at `path` of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
     *
     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
     * // => [2, 3]
     */
    var invoke = baseRest(baseInvoke);

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    function mapKeys(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, iteratee(value, key, object), value);
      });
      return result;
    }

    /**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = getIteratee(iteratee, 3);

      baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
      });
      return result;
    }

    /**
     * This method is like `_.assign` except that it recursively merges own and
     * inherited enumerable string keyed properties of source objects into the
     * destination object. Source properties that resolve to `undefined` are
     * skipped if a destination value exists. Array and plain object properties
     * are merged recursively. Other objects and value types are overridden by
     * assignment. Source objects are applied from left to right. Subsequent
     * sources overwrite property assignments of previous sources.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {
     *   'a': [{ 'b': 2 }, { 'd': 4 }]
     * };
     *
     * var other = {
     *   'a': [{ 'c': 3 }, { 'e': 5 }]
     * };
     *
     * _.merge(object, other);
     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
     */
    var merge = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });

    /**
     * This method is like `_.merge` except that it accepts `customizer` which
     * is invoked to produce the merged values of the destination and source
     * properties. If `customizer` returns `undefined`, merging is handled by the
     * method instead. The `customizer` is invoked with six arguments:
     * (objValue, srcValue, key, object, source, stack).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} sources The source objects.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function customizer(objValue, srcValue) {
     *   if (_.isArray(objValue)) {
     *     return objValue.concat(srcValue);
     *   }
     * }
     *
     * var object = { 'a': [1], 'b': [2] };
     * var other = { 'a': [3], 'b': [4] };
     *
     * _.mergeWith(object, other, customizer);
     * // => { 'a': [1, 3], 'b': [2, 4] }
     */
    var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
      baseMerge(object, source, srcIndex, customizer);
    });

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable property paths of `object` that are not omitted.
     *
     * **Note:** This method is considerably slower than `_.pick`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to omit.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omit(object, ['a', 'c']);
     * // => { 'b': '2' }
     */
    var omit = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });

    /**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
    function omitBy(object, predicate) {
      return pickBy(object, negate(getIteratee(predicate)));
    }

    /**
     * Creates an object composed of the picked `object` properties.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {...(string|string[])} [paths] The property paths to pick.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pick(object, ['a', 'c']);
     * // => { 'a': 1, 'c': 3 }
     */
    var pick = flatRest(function(object, paths) {
      return object == null ? {} : basePick(object, paths);
    });

    /**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
    function pickBy(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = getIteratee(predicate);
      return basePickBy(object, props, function(value, path) {
        return predicate(value, path[0]);
      });
    }

    /**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      path = castPath(path, object);

      var index = -1,
          length = path.length;

      // Ensure the loop is entered when path is empty.
      if (!length) {
        length = 1;
        object = undefined;
      }
      while (++index < length) {
        var value = object == null ? undefined : object[toKey(path[index])];
        if (value === undefined) {
          index = length;
          value = defaultValue;
        }
        object = isFunction(value) ? value.call(object) : value;
      }
      return object;
    }

    /**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }

    /**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
    function setWith(object, path, value, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseSet(object, path, value, customizer);
    }

    /**
     * Creates an array of own enumerable string keyed-value pairs for `object`
     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
     * entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entries
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairs(new Foo);
     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
     */
    var toPairs = createToPairs(keys);

    /**
     * Creates an array of own and inherited enumerable string keyed-value pairs
     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
     * or set, its entries are returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @alias entriesIn
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the key-value pairs.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.toPairsIn(new Foo);
     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
     */
    var toPairsIn = createToPairs(keysIn);

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function transform(object, iteratee, accumulator) {
      var isArr = isArray(object),
          isArrLike = isArr || isBuffer(object) || isTypedArray(object);

      iteratee = getIteratee(iteratee, 4);
      if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
          accumulator = isArr ? new Ctor : [];
        }
        else if (isObject(object)) {
          accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        }
        else {
          accumulator = {};
        }
      }
      (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
    function unset(object, path) {
      return object == null ? true : baseUnset(object, path);
    }

    /**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
    function update(object, path, updater) {
      return object == null ? object : baseUpdate(object, path, castFunction(updater));
    }

    /**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
    function updateWith(object, path, updater, customizer) {
      customizer = typeof customizer == 'function' ? customizer : undefined;
      return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
    }

    /**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return object == null ? [] : baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return object == null ? [] : baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
    function clamp(number, lower, upper) {
      if (upper === undefined) {
        upper = lower;
        lower = undefined;
      }
      if (upper !== undefined) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== undefined) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }

    /**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
    function inRange(number, start, end) {
      start = toFinite(start);
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }
      number = toNumber(number);
      return baseInRange(number, start, end);
    }

    /**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(lower, upper, floating) {
      if (floating && typeof floating != 'boolean' && isIterateeCall(lower, upper, floating)) {
        upper = floating = undefined;
      }
      if (floating === undefined) {
        if (typeof upper == 'boolean') {
          floating = upper;
          upper = undefined;
        }
        else if (typeof lower == 'boolean') {
          floating = lower;
          lower = undefined;
        }
      }
      if (lower === undefined && upper === undefined) {
        lower = 0;
        upper = 1;
      }
      else {
        lower = toFinite(lower);
        if (upper === undefined) {
          upper = lower;
          lower = 0;
        } else {
          upper = toFinite(upper);
        }
      }
      if (lower > upper) {
        var temp = lower;
        lower = upper;
        upper = temp;
      }
      if (floating || lower % 1 || upper % 1) {
        var rand = nativeRandom();
        return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
      }
      return baseRandom(lower, upper);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar--');
     * // => 'fooBar'
     *
     * _.camelCase('__FOO_BAR__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });

    /**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }

    /**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = toString(string);
      target = baseToString(target);

      var length = string.length;
      position = position === undefined
        ? length
        : baseClamp(toInteger(position), 0, length);

      var end = position;
      position -= target.length;
      return position >= 0 && string.slice(position, end) == target;
    }

    /**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      string = toString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
    function escapeRegExp(string) {
      string = toString(string);
      return (string && reHasRegExpChar.test(string))
        ? string.replace(reRegExpChar, '\\$&')
        : string;
    }

    /**
     * Converts `string` to
     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__FOO_BAR__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Converts `string`, as space separated words, to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.lowerCase('--Foo-Bar--');
     * // => 'foo bar'
     *
     * _.lowerCase('fooBar');
     * // => 'foo bar'
     *
     * _.lowerCase('__FOO_BAR__');
     * // => 'foo bar'
     */
    var lowerCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toLowerCase();
    });

    /**
     * Converts the first character of `string` to lower case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.lowerFirst('Fred');
     * // => 'fred'
     *
     * _.lowerFirst('FRED');
     * // => 'fRED'
     */
    var lowerFirst = createCaseFirst('toLowerCase');

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      if (!length || strLength >= length) {
        return string;
      }
      var mid = (length - strLength) / 2;
      return (
        createPadding(nativeFloor(mid), chars) +
        string +
        createPadding(nativeCeil(mid), chars)
      );
    }

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
    function padEnd(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (string + createPadding(length - strLength, chars))
        : string;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);

      var strLength = length ? stringSize(string) : 0;
      return (length && strLength < length)
        ? (createPadding(length - strLength, chars) + string)
        : string;
    }

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      if (guard || radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    /**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
    function replace() {
      var args = arguments,
          string = toString(args[0]);

      return args.length < 3 ? string : string.replace(args[1], args[2]);
    }

    /**
     * Converts `string` to
     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--FOO-BAR--');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
    function split(string, separator, limit) {
      if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
        separator = limit = undefined;
      }
      limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
      if (!limit) {
        return [];
      }
      string = toString(string);
      if (string && (
            typeof separator == 'string' ||
            (separator != null && !isRegExp(separator))
          )) {
        separator = baseToString(separator);
        if (!separator && hasUnicode(string)) {
          return castSlice(stringToArray(string), 0, limit);
        }
      }
      return string.split(separator, limit);
    }

    /**
     * Converts `string` to
     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @since 3.1.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar--');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__FOO_BAR__');
     * // => 'FOO BAR'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + upperFirst(word);
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = toString(string);
      position = position == null
        ? 0
        : baseClamp(toInteger(position), 0, string.length);

      target = baseToString(target);
      return string.slice(position, position + target.length) == target;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, guard) {
      // Based on John Resig's `tmpl` implementation
      // (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      string = toString(string);
      options = assignInWith({}, options, settings, customDefaultsAssignIn);

      var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products needs `match` returned in
        // order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source)
          .apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
    function toLower(value) {
      return toString(value).toLowerCase();
    }

    /**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
    function toUpper(value) {
      return toString(value).toUpperCase();
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrim, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          chrSymbols = stringToArray(chars),
          start = charsStartIndex(strSymbols, chrSymbols),
          end = charsEndIndex(strSymbols, chrSymbols) + 1;

      return castSlice(strSymbols, start, end).join('');
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimEnd(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimEnd, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;

      return castSlice(strSymbols, 0, end).join('');
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimStart(string, chars, guard) {
      string = toString(string);
      if (string && (guard || chars === undefined)) {
        return string.replace(reTrimStart, '');
      }
      if (!string || !(chars = baseToString(chars))) {
        return string;
      }
      var strSymbols = stringToArray(string),
          start = charsStartIndex(strSymbols, stringToArray(chars));

      return castSlice(strSymbols, start).join('');
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function truncate(string, options) {
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (isObject(options)) {
        var separator = 'separator' in options ? options.separator : separator;
        length = 'length' in options ? toInteger(options.length) : length;
        omission = 'omission' in options ? baseToString(options.omission) : omission;
      }
      string = toString(string);

      var strLength = string.length;
      if (hasUnicode(string)) {
        var strSymbols = stringToArray(string);
        strLength = strSymbols.length;
      }
      if (length >= strLength) {
        return string;
      }
      var end = length - stringSize(omission);
      if (end < 1) {
        return omission;
      }
      var result = strSymbols
        ? castSlice(strSymbols, 0, end).join('')
        : string.slice(0, end);

      if (separator === undefined) {
        return result + omission;
      }
      if (strSymbols) {
        end += (result.length - end);
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              substring = result;

          if (!separator.global) {
            separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            var newEnd = match.index;
          }
          result = result.slice(0, newEnd === undefined ? end : newEnd);
        }
      } else if (string.indexOf(baseToString(separator), end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = toString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Converts `string`, as space separated words, to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.upperCase('--foo-bar');
     * // => 'FOO BAR'
     *
     * _.upperCase('fooBar');
     * // => 'FOO BAR'
     *
     * _.upperCase('__foo_bar__');
     * // => 'FOO BAR'
     */
    var upperCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + word.toUpperCase();
    });

    /**
     * Converts the first character of `string` to upper case.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.upperFirst('fred');
     * // => 'Fred'
     *
     * _.upperFirst('FRED');
     * // => 'FRED'
     */
    var upperFirst = createCaseFirst('toUpperCase');

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? undefined : pattern;

      if (pattern === undefined) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it's invoked.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Function} func The function to attempt.
     * @param {...*} [args] The arguments to invoke `func` with.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // Avoid throwing errors for invalid selectors.
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = baseRest(function(func, args) {
      try {
        return apply(func, undefined, args);
      } catch (e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method.
     *
     * **Note:** This method doesn't set the "length" property of bound functions.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} methodNames The object method names to bind.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'click': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view, ['click']);
     * jQuery(element).on('click', view.click);
     * // => Logs 'clicked docs' when clicked.
     */
    var bindAll = flatRest(function(object, methodNames) {
      arrayEach(methodNames, function(key) {
        key = toKey(key);
        baseAssignValue(object, key, bind(object[key], object));
      });
      return object;
    });

    /**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
    function cond(pairs) {
      var length = pairs == null ? 0 : pairs.length,
          toIteratee = getIteratee();

      pairs = !length ? [] : arrayMap(pairs, function(pair) {
        if (typeof pair[1] != 'function') {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        return [toIteratee(pair[0]), pair[1]];
      });

      return baseRest(function(args) {
        var index = -1;
        while (++index < length) {
          var pair = pairs[index];
          if (apply(pair[0], this, args)) {
            return apply(pair[1], this, args);
          }
        }
      });
    }

    /**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
    function conforms(source) {
      return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
    function defaultTo(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value;
    }

    /**
     * Creates a function that returns the result of invoking the given functions
     * with the `this` binding of the created function, where each successive
     * invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flowRight
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow([_.add, square]);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the given functions from right to left.
     *
     * @static
     * @since 3.0.0
     * @memberOf _
     * @category Util
     * @param {...(Function|Function[])} [funcs] The functions to invoke.
     * @returns {Function} Returns the new composite function.
     * @see _.flow
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight([square, _.add]);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
    function iteratee(func) {
      return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
    }

    /**
     * Creates a function that invokes the method at `path` of a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': _.constant(2) } },
     *   { 'a': { 'b': _.constant(1) } }
     * ];
     *
     * _.map(objects, _.method('a.b'));
     * // => [2, 1]
     *
     * _.map(objects, _.method(['a', 'b']));
     * // => [2, 1]
     */
    var method = baseRest(function(path, args) {
      return function(object) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path of `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Util
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new invoker function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = baseRest(function(object, args) {
      return function(path) {
        return baseInvoke(object, path, args);
      };
    });

    /**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      var props = keys(source),
          methodNames = baseFunctions(source, props);

      if (options == null &&
          !(isObject(source) && (methodNames.length || !props.length))) {
        options = source;
        source = object;
        object = this;
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
          isFunc = isFunction(object);

      arrayEach(methodNames, function(methodName) {
        var func = source[methodName];
        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = function() {
            var chainAll = this.__chain__;
            if (chain || chainAll) {
              var result = object(this.__wrapped__),
                  actions = result.__actions__ = copyArray(this.__actions__);

              actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
              result.__chain__ = chainAll;
              return result;
            }
            return func.apply(object, arrayPush([this.value()], arguments));
          };
        }
      });

      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      if (root._ === this) {
        root._ = oldDash;
      }
      return this;
    }

    /**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
    function nthArg(n) {
      n = toInteger(n);
      return baseRest(function(args) {
        return baseNth(args, n);
      });
    }

    /**
     * Creates a function that invokes `iteratees` with the arguments it receives
     * and returns their results.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [iteratees=[_.identity]]
     *  The iteratees to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.over([Math.max, Math.min]);
     *
     * func(1, 2, 3, 4);
     * // => [4, 1]
     */
    var over = createOver(arrayMap);

    /**
     * Creates a function that checks if **all** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overEvery([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => false
     *
     * func(NaN);
     * // => false
     */
    var overEvery = createOver(arrayEvery);

    /**
     * Creates a function that checks if **any** of the `predicates` return
     * truthy when invoked with the arguments it receives.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {...(Function|Function[])} [predicates=[_.identity]]
     *  The predicates to check.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var func = _.overSome([Boolean, isFinite]);
     *
     * func('1');
     * // => true
     *
     * func(null);
     * // => true
     *
     * func(NaN);
     * // => false
     */
    var overSome = createOver(arraySome);

    /**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return object == null ? undefined : baseGet(object, path);
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
     * `start` is specified without an `end` or `step`. If `end` is not specified,
     * it's set to `start` with `start` then set to `0`.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.rangeRight
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(-4);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    var range = createRange();

    /**
     * This method is like `_.range` except that it populates values in
     * descending order.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the range of numbers.
     * @see _.inRange, _.range
     * @example
     *
     * _.rangeRight(4);
     * // => [3, 2, 1, 0]
     *
     * _.rangeRight(-4);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 5);
     * // => [4, 3, 2, 1]
     *
     * _.rangeRight(0, 20, 5);
     * // => [15, 10, 5, 0]
     *
     * _.rangeRight(0, -4, -1);
     * // => [-3, -2, -1, 0]
     *
     * _.rangeRight(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.rangeRight(0);
     * // => []
     */
    var rangeRight = createRange(true);

    /**
     * This method returns a new empty array.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Array} Returns the new empty array.
     * @example
     *
     * var arrays = _.times(2, _.stubArray);
     *
     * console.log(arrays);
     * // => [[], []]
     *
     * console.log(arrays[0] === arrays[1]);
     * // => false
     */
    function stubArray() {
      return [];
    }

    /**
     * This method returns `false`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `false`.
     * @example
     *
     * _.times(2, _.stubFalse);
     * // => [false, false]
     */
    function stubFalse() {
      return false;
    }

    /**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
    function stubObject() {
      return {};
    }

    /**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
    function stubString() {
      return '';
    }

    /**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
    function stubTrue() {
      return true;
    }

    /**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
    function times(n, iteratee) {
      n = toInteger(n);
      if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
      }
      var index = MAX_ARRAY_LENGTH,
          length = nativeMin(n, MAX_ARRAY_LENGTH);

      iteratee = getIteratee(iteratee);
      n -= MAX_ARRAY_LENGTH;

      var result = baseTimes(length, iteratee);
      while (++index < n) {
        iteratee(index);
      }
      return result;
    }

    /**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }

    /**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return toString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {number} augend The first number in an addition.
     * @param {number} addend The second number in an addition.
     * @returns {number} Returns the total.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    var add = createMathOperation(function(augend, addend) {
      return augend + addend;
    }, 0);

    /**
     * Computes `number` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Divide two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} dividend The first number in a division.
     * @param {number} divisor The second number in a division.
     * @returns {number} Returns the quotient.
     * @example
     *
     * _.divide(6, 4);
     * // => 1.5
     */
    var divide = createMathOperation(function(dividend, divisor) {
      return dividend / divisor;
    }, 1);

    /**
     * Computes `number` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
    function max(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseGt)
        : undefined;
    }

    /**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
    function maxBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseGt)
        : undefined;
    }

    /**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
    function mean(array) {
      return baseMean(array, identity);
    }

    /**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
    function meanBy(array, iteratee) {
      return baseMean(array, getIteratee(iteratee, 2));
    }

    /**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
    function min(array) {
      return (array && array.length)
        ? baseExtremum(array, identity, baseLt)
        : undefined;
    }

    /**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
    function minBy(array, iteratee) {
      return (array && array.length)
        ? baseExtremum(array, getIteratee(iteratee, 2), baseLt)
        : undefined;
    }

    /**
     * Multiply two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {number} multiplier The first number in a multiplication.
     * @param {number} multiplicand The second number in a multiplication.
     * @returns {number} Returns the product.
     * @example
     *
     * _.multiply(6, 4);
     * // => 24
     */
    var multiply = createMathOperation(function(multiplier, multiplicand) {
      return multiplier * multiplicand;
    }, 1);

    /**
     * Computes `number` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @since 3.10.0
     * @category Math
     * @param {number} number The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Subtract two numbers.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {number} minuend The first number in a subtraction.
     * @param {number} subtrahend The second number in a subtraction.
     * @returns {number} Returns the difference.
     * @example
     *
     * _.subtract(6, 4);
     * // => 2
     */
    var subtract = createMathOperation(function(minuend, subtrahend) {
      return minuend - subtrahend;
    }, 0);

    /**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
    function sum(array) {
      return (array && array.length)
        ? baseSum(array, identity)
        : 0;
    }

    /**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
    function sumBy(array, iteratee) {
      return (array && array.length)
        ? baseSum(array, getIteratee(iteratee, 2))
        : 0;
    }

    /*------------------------------------------------------------------------*/

    // Add methods that return wrapped values in chain sequences.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.assignIn = assignIn;
    lodash.assignInWith = assignInWith;
    lodash.assignWith = assignWith;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.castArray = castArray;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.concat = concat;
    lodash.cond = cond;
    lodash.conforms = conforms;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.differenceBy = differenceBy;
    lodash.differenceWith = differenceWith;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatMap = flatMap;
    lodash.flatMapDeep = flatMapDeep;
    lodash.flatMapDepth = flatMapDepth;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flattenDepth = flattenDepth;
    lodash.flip = flip;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.fromPairs = fromPairs;
    lodash.functions = functions;
    lodash.functionsIn = functionsIn;
    lodash.groupBy = groupBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.intersectionBy = intersectionBy;
    lodash.intersectionWith = intersectionWith;
    lodash.invert = invert;
    lodash.invertBy = invertBy;
    lodash.invokeMap = invokeMap;
    lodash.iteratee = iteratee;
    lodash.keyBy = keyBy;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.mergeWith = mergeWith;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.negate = negate;
    lodash.nthArg = nthArg;
    lodash.omit = omit;
    lodash.omitBy = omitBy;
    lodash.once = once;
    lodash.orderBy = orderBy;
    lodash.over = over;
    lodash.overArgs = overArgs;
    lodash.overEvery = overEvery;
    lodash.overSome = overSome;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pickBy = pickBy;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAll = pullAll;
    lodash.pullAllBy = pullAllBy;
    lodash.pullAllWith = pullAllWith;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rangeRight = rangeRight;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.reverse = reverse;
    lodash.sampleSize = sampleSize;
    lodash.set = set;
    lodash.setWith = setWith;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortedUniq = sortedUniq;
    lodash.sortedUniqBy = sortedUniqBy;
    lodash.split = split;
    lodash.spread = spread;
    lodash.tail = tail;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.toArray = toArray;
    lodash.toPairs = toPairs;
    lodash.toPairsIn = toPairsIn;
    lodash.toPath = toPath;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.unary = unary;
    lodash.union = union;
    lodash.unionBy = unionBy;
    lodash.unionWith = unionWith;
    lodash.uniq = uniq;
    lodash.uniqBy = uniqBy;
    lodash.uniqWith = uniqWith;
    lodash.unset = unset;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.update = update;
    lodash.updateWith = updateWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.without = without;
    lodash.words = words;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.xorBy = xorBy;
    lodash.xorWith = xorWith;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipObjectDeep = zipObjectDeep;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.entries = toPairs;
    lodash.entriesIn = toPairsIn;
    lodash.extend = assignIn;
    lodash.extendWith = assignInWith;

    // Add methods to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add methods that return unwrapped values in chain sequences.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clamp = clamp;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.cloneDeepWith = cloneDeepWith;
    lodash.cloneWith = cloneWith;
    lodash.conformsTo = conformsTo;
    lodash.deburr = deburr;
    lodash.defaultTo = defaultTo;
    lodash.divide = divide;
    lodash.endsWith = endsWith;
    lodash.eq = eq;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.floor = floor;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.hasIn = hasIn;
    lodash.head = head;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.invoke = invoke;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isArrayBuffer = isArrayBuffer;
    lodash.isArrayLike = isArrayLike;
    lodash.isArrayLikeObject = isArrayLikeObject;
    lodash.isBoolean = isBoolean;
    lodash.isBuffer = isBuffer;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isEqualWith = isEqualWith;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isInteger = isInteger;
    lodash.isLength = isLength;
    lodash.isMap = isMap;
    lodash.isMatch = isMatch;
    lodash.isMatchWith = isMatchWith;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNil = isNil;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isObjectLike = isObjectLike;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isSafeInteger = isSafeInteger;
    lodash.isSet = isSet;
    lodash.isString = isString;
    lodash.isSymbol = isSymbol;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.isWeakMap = isWeakMap;
    lodash.isWeakSet = isWeakSet;
    lodash.join = join;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lowerCase = lowerCase;
    lodash.lowerFirst = lowerFirst;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.maxBy = maxBy;
    lodash.mean = mean;
    lodash.meanBy = meanBy;
    lodash.min = min;
    lodash.minBy = minBy;
    lodash.stubArray = stubArray;
    lodash.stubFalse = stubFalse;
    lodash.stubObject = stubObject;
    lodash.stubString = stubString;
    lodash.stubTrue = stubTrue;
    lodash.multiply = multiply;
    lodash.nth = nth;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padEnd = padEnd;
    lodash.padStart = padStart;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.replace = replace;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.sample = sample;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedIndexBy = sortedIndexBy;
    lodash.sortedIndexOf = sortedIndexOf;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.sortedLastIndexBy = sortedLastIndexBy;
    lodash.sortedLastIndexOf = sortedLastIndexOf;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.subtract = subtract;
    lodash.sum = sum;
    lodash.sumBy = sumBy;
    lodash.template = template;
    lodash.times = times;
    lodash.toFinite = toFinite;
    lodash.toInteger = toInteger;
    lodash.toLength = toLength;
    lodash.toLower = toLower;
    lodash.toNumber = toNumber;
    lodash.toSafeInteger = toSafeInteger;
    lodash.toString = toString;
    lodash.toUpper = toUpper;
    lodash.trim = trim;
    lodash.trimEnd = trimEnd;
    lodash.trimStart = trimStart;
    lodash.truncate = truncate;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.upperCase = upperCase;
    lodash.upperFirst = upperFirst;

    // Add aliases.
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.first = head;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!hasOwnProperty.call(lodash.prototype, methodName)) {
          source[methodName] = func;
        }
      });
      return source;
    }()), { 'chain': false });

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);

        var result = (this.__filtered__ && !index)
          ? new LazyWrapper(this)
          : this.clone();

        if (result.__filtered__) {
          result.__takeCount__ = nativeMin(n, result.__takeCount__);
        } else {
          result.__views__.push({
            'size': nativeMin(n, MAX_ARRAY_LENGTH),
            'type': methodName + (result.__dir__ < 0 ? 'Right' : '')
          });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee) {
        var result = this.clone();
        result.__iteratees__.push({
          'iteratee': getIteratee(iteratee, 3),
          'type': type
        });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.head` and `_.last`.
    arrayEach(['head', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.tail`.
    arrayEach(['initial', 'tail'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.find = function(predicate) {
      return this.filter(predicate).head();
    };

    LazyWrapper.prototype.findLast = function(predicate) {
      return this.reverse().find(predicate);
    };

    LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
      if (typeof path == 'function') {
        return new LazyWrapper(this);
      }
      return this.map(function(value) {
        return baseInvoke(value, path, args);
      });
    });

    LazyWrapper.prototype.reject = function(predicate) {
      return this.filter(negate(getIteratee(predicate)));
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = toInteger(start);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = toInteger(end);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate) {
      return this.reverse().takeWhile(predicate).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(MAX_ARRAY_LENGTH);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName),
          isTaker = /^(?:head|last)$/.test(methodName),
          lodashFunc = lodash[isTaker ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName],
          retUnwrapped = isTaker || /^find/.test(methodName);

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            args = isTaker ? [1] : arguments,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        var interceptor = function(value) {
          var result = lodashFunc.apply(lodash, arrayPush([value], args));
          return (isTaker && chainAll) ? result[0] : result;
        };

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var chainAll = this.__chain__,
            isHybrid = !!this.__actions__.length,
            isUnwrapped = retUnwrapped && !chainAll,
            onlyLazy = isLazy && !isHybrid;

        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
          return new LodashWrapper(result, chainAll);
        }
        if (isUnwrapped && onlyLazy) {
          return func.apply(this, args);
        }
        result = this.thru(interceptor);
        return isUnwrapped ? (isTaker ? result.value()[0] : result.value()) : result;
      };
    });

    // Add `Array` methods to `lodash.prototype`.
    arrayEach(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayProto[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:pop|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          var value = this.value();
          return func.apply(isArray(value) ? value : [], args);
        }
        return this[chainName](function(value) {
          return func.apply(isArray(value) ? value : [], args);
        });
      };
    });

    // Map minified method names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = (lodashFunc.name + ''),
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
      'name': 'wrapper',
      'func': undefined
    }];

    // Add methods to `LazyWrapper`.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chain sequence methods to the `lodash` wrapper.
    lodash.prototype.at = wrapperAt;
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.next = wrapperNext;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add lazy aliases.
    lodash.prototype.first = lodash.prototype.head;

    if (symIterator) {
      lodash.prototype[symIterator] = wrapperToIterator;
    }
    return lodash;
  });

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers, like r.js, check for condition patterns like:
  if (true) {
    // Expose Lodash on the global object to prevent errors when Lodash is
    // loaded by a script tag in the presence of an AMD loader.
    // See http://requirejs.org/docs/errors.html#mismatch for more details.
    // Use `_.noConflict` to remove Lodash from the global object.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  // Check for `exports` after `define` in case a build optimizer adds it.
  else if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = _)._ = _;
    // Export for CommonJS support.
    freeExports._ = _;
  }
  else {
    // Export to the global object.
    root._ = _;
  }
}.call(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93), __webpack_require__(485)(module)))

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

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1059);
var _ = __webpack_require__(1060);
var BootstrapPaginator = (function () {
    function BootstrapPaginator() {
        this.rowsOnPageSet = [];
        this.minRowsOnPage = 0;
    }
    BootstrapPaginator.prototype.ngOnChanges = function (changes) {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = _.min(this.rowsOnPageSet);
        }
    };
    return BootstrapPaginator;
}());
__decorate([
    core_1.Input("rowsOnPageSet"),
    __metadata("design:type", Object)
], BootstrapPaginator.prototype, "rowsOnPageSet", void 0);
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], BootstrapPaginator.prototype, "mfTable", void 0);
BootstrapPaginator = __decorate([
    core_1.Component({
        selector: "mfBootstrapPaginator",
        template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <ul class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li class=\"page-item\" [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"page-item active\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </ul>\n        <ul class=\"pagination pull-right float-sm-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li class=\"page-item\" *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </ul>\n    </mfPaginator>\n    "
    })
], BootstrapPaginator);
exports.BootstrapPaginator = BootstrapPaginator;
//# sourceMappingURL=BootstrapPaginator.js.map

/***/ }),

/***/ 1069:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1059);
var DefaultSorter = (function () {
    function DefaultSorter(mfTable) {
        this.mfTable = mfTable;
        this.isSortedByMeAsc = false;
        this.isSortedByMeDesc = false;
    }
    DefaultSorter.prototype.ngOnInit = function () {
        var _this = this;
        this.mfTable.onSortChange.subscribe(function (event) {
            _this.isSortedByMeAsc = (event.sortBy == _this.sortBy && event.sortOrder == "asc");
            _this.isSortedByMeDesc = (event.sortBy == _this.sortBy && event.sortOrder == "desc");
        });
    };
    DefaultSorter.prototype.sort = function () {
        if (this.isSortedByMeAsc) {
            this.mfTable.setSort(this.sortBy, "desc");
        }
        else {
            this.mfTable.setSort(this.sortBy, "asc");
        }
    };
    return DefaultSorter;
}());
__decorate([
    core_1.Input("by"),
    __metadata("design:type", String)
], DefaultSorter.prototype, "sortBy", void 0);
DefaultSorter = __decorate([
    core_1.Component({
        selector: "mfDefaultSorter",
        template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
    }),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], DefaultSorter);
exports.DefaultSorter = DefaultSorter;
//# sourceMappingURL=DefaultSorter.js.map

/***/ }),

/***/ 1070:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = __webpack_require__(0);
var DataTable_1 = __webpack_require__(1059);
var Paginator = (function () {
    function Paginator(injectMfTable) {
        var _this = this;
        this.injectMfTable = injectMfTable;
        this.dataLength = 0;
        this.onPageChangeSubscriber = function (event) {
            _this.activePage = event.activePage;
            _this.rowsOnPage = event.rowsOnPage;
            _this.dataLength = event.dataLength;
            _this.lastPage = Math.ceil(_this.dataLength / _this.rowsOnPage);
        };
    }
    Paginator.prototype.ngOnChanges = function (changes) {
        this.mfTable = this.inputMfTable || this.injectMfTable;
        this.onPageChangeSubscriber(this.mfTable.getPage());
        this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    };
    Paginator.prototype.setPage = function (pageNumber) {
        this.mfTable.setPage(pageNumber, this.rowsOnPage);
    };
    Paginator.prototype.setRowsOnPage = function (rowsOnPage) {
        this.mfTable.setPage(this.activePage, rowsOnPage);
    };
    return Paginator;
}());
__decorate([
    core_1.Input("mfTable"),
    __metadata("design:type", DataTable_1.DataTable)
], Paginator.prototype, "inputMfTable", void 0);
Paginator = __decorate([
    core_1.Component({
        selector: "mfPaginator",
        template: "<ng-content></ng-content>"
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [DataTable_1.DataTable])
], Paginator);
exports.Paginator = Paginator;
//# sourceMappingURL=Paginator.js.map

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

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var dataTable_directive = __webpack_require__(1059);
var defaultSorter_directive = __webpack_require__(1069);
var paginator_component = __webpack_require__(1070);
var bootstrapPaginator_component = __webpack_require__(1068);
var dataTable_module = __webpack_require__(1077);

exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.DataTableModule = dataTable_module.DataTableModule;


/***/ }),

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(8);
var DataTable_1 = __webpack_require__(1059);
var DefaultSorter_1 = __webpack_require__(1069);
var Paginator_1 = __webpack_require__(1070);
var BootstrapPaginator_1 = __webpack_require__(1068);
var DataTableModule = (function () {
    function DataTableModule() {
    }
    return DataTableModule;
}());
DataTableModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ],
        exports: [
            DataTable_1.DataTable,
            DefaultSorter_1.DefaultSorter,
            Paginator_1.Paginator,
            BootstrapPaginator_1.BootstrapPaginator
        ]
    })
], DataTableModule);
exports.DataTableModule = DataTableModule;
//# sourceMappingURL=DataTableModule.js.map

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

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
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
 * This is drivers service class which does Rest service calls for all drivers operations
 */
var DriverService = (function () {
    function DriverService(http) {
        this.http = http;
        this.diversUrl = 'app/drivers';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
        // this.headers.set('X-Auth-Token', localStorage.getItem('token'));
    }
    /**
     * This method gets all drivers details
     */
    DriverService.prototype.getDrivers = function () {
        var getDriversURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'getDrivers';
        return this.http.get(getDriversURL, { headers: this.headers })
            .map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
     * This method gets  driver details based on driver Id
     */
    DriverService.prototype.getDriverDetailsByID = function (id) {
        return this.getDrivers().toPromise().then(function (drivers) { return drivers.find(function (driver) { return driver.id == id; }); }).catch(this.handleError);
    };
    /**
    * This method updates  existing driver details
    */
    DriverService.prototype.updateDriver = function (driver) {
        var _this = this;
        var driverUpdateURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'updateDriver?id=';
        var url = "" + driverUpdateURL + driver.id;
        return this.http
            .put(url, driver, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            _this.handleError;
            console.error('error occured updating driver details' + error);
        });
    };
    /**
    * This method adds  a new  driver details
    */
    DriverService.prototype.addDriver = function (driver) {
        var _this = this;
        var driverAddURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'addDriver';
        var url = "" + driverAddURL;
        return this.http
            .post(url, JSON.stringify(driver), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            _this.handleError;
            console.error('error occured in adding new driver details' + error);
        });
    };
    /**
       * This method gets all vendors info
       */
    DriverService.prototype.getVendorsInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].VENDORS_API_ENDPOINT + 'getVendors', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    /**
     * This method  deletes  driver details based on driver Id
     */
    DriverService.prototype.deletedriver = function (driver) {
        var _this = this;
        var deleteDriverURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'deleteDriver/';
        var url = "" + deleteDriverURL + driver.id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            _this.handleError;
            console.error('error occured in deleting driver details' + error);
        });
    };
    DriverService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
        }
        else {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
        }
    };
    return DriverService;
}());
DriverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DriverService);

var _a;
//# sourceMappingURL=driver.service.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadsService; });
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
 * This is a service class which makes Rest service calls to PALS dash board to get loads details
 */
var LoadsService = (function () {
    function LoadsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", localStorage.getItem('Authentication'));
    }
    /**
     * This method get all locations data
     */
    LoadsService.prototype.getAlllocationsInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOCATIONS_API_ENDPOINT + 'getAllLocations', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    /**
     * This method gets all trucks info
     */
    LoadsService.prototype.getTrucksInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].TRUCK_API_ENDPOINT + 'getTruck', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    /**
     * This method gets all vendors info
     */
    LoadsService.prototype.getVendorsInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].VENDORS_API_ENDPOINT + 'getVendors', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    /**
     * This method gets Appointments Type
     */
    LoadsService.prototype.getAppointmentTypesInfo = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_APPOINTMENT_API_ENDPOINT + 'getLoadAppointmentTypes', { headers: this.headers })
            .map(function (response) {
            return response.json().data;
        }).catch(this.handleError);
    };
    /**
     * This method gets all Loads data
     */
    LoadsService.prototype.getAllLoads = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getAllLoadAppointments', { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
     * This method gets Load data based on LoadNUmber
     */
    LoadsService.prototype.getLoadDetailsByLoadNum = function (loadNum) {
        var getLoadDetailsURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getLoadAppointments/';
        var url = "" + getLoadDetailsURL + loadNum;
        return this.http.get(url, { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
    * This method adds  a new  Load details
    */
    LoadsService.prototype.addLoad = function (load) {
        var _this = this;
        var loadAddURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'addLoadAppointment';
        var url = "" + loadAddURL;
        return this.http
            .post(url, load, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            _this.handleError;
            console.log("error occured in adding new Load details" + error);
        });
    };
    /**
    * This method updates  existing Load details
    */
    LoadsService.prototype.updateLoad = function (load) {
        var _this = this;
        var loadUpdateURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'updateLoadAppointment';
        var url = "" + loadUpdateURL;
        return this.http
            .put(url, load, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            _this.handleError;
            console.log("error occured updating load details" + error);
        });
    };
    /**
    * This method  deletes  dealer details based  on dealerCd
    */
    LoadsService.prototype.deleteLoad = function (load) {
        var deleteLoadsURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'deleteLoadAppointment/';
        var url = "" + deleteLoadsURL + load.apptNbr;
        return this.http
            .delete(url, { headers: this.headers })
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    /**
     * This methos get all driver names list
     */
    LoadsService.prototype.getDriverNameList = function () {
        var driverURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'getDrivers';
        return this.http.get(driverURL, { headers: this.headers }).map(function (response) { return response.json().data; }).catch(this.handleError);
    };
    /**
    * This method updates  existing Load details
    */
    LoadsService.prototype.updateLoadStatus = function (loadNumber, loadStatus) {
        var _this = this;
        var loadUpdateURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'updateLoad/' + loadNumber + '/' + loadStatus;
        var url = "" + loadUpdateURL;
        return this.http
            .put(url, loadNumber, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(function (error) {
            _this.handleError;
            console.log("error occured updating load details" + error);
        });
    };
    LoadsService.prototype.handleError = function (error) {
        if (error.status == 404) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
        }
        else {
            localStorage.setItem('status', '401');
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.json());
        }
    };
    /**
    * This methos get all driver names list
    */
    LoadsService.prototype.getDriverNameListBasedOnVendors = function (vendorNbr) {
        var driverURL = __WEBPACK_IMPORTED_MODULE_4__environments_endpoints__["a" /* endponitConfig */].DRIVER_API_ENDPOINT + 'getDriversByVendorNum/' + vendorNbr;
        var url = "" + driverURL;
        return this.http
            .get(url, { headers: this.headers })
            .map(function (response) { return response.json(); }).catch(this.handleError);
    };
    return LoadsService;
}());
LoadsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoadsService);

var _a;
//# sourceMappingURL=load.service.js.map

/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_load_service__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadAddComponent; });
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
 * This component adds new Load
 */
var LoadAddComponent = (function () {
    function LoadAddComponent(router, loadService, fb) {
        this.router = router;
        this.loadService = loadService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navigated = true; // true if navigated here
        this.load = {};
        this.load.driverId = '';
        this.load.originNum = '';
        this.load.destinNum = '';
        this.load.vendorNum = '';
        this.load.appointmentye = '';
        this.load.highValueLoad = 0;
        this.load.highPriorityLoad = 0;
        this.formValidate = false;
        this.complexForm = fb.group({
            'loadNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]+')])],
            'driverId': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'originNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'destinNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'vendorNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            // 'truckNum': [null, Validators.compose([Validators.required, Validators.pattern('[a-z A-Z 0-9]+')])],
            'appointmentye': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'cartons': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')])],
            'geomile': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[5-9])$')])]
        });
        this.loadNum = this.complexForm.controls['loadNum'];
        this.driverId = this.complexForm.controls['driverId'];
        this.originNum = this.complexForm.controls['originNum'];
        this.destinNum = this.complexForm.controls['destinNum'];
        // this.truckNum = this.complexForm.controls['truckNum'];
        this.vendorNum = this.complexForm.controls['vendorNum'];
        this.appointmentye = this.complexForm.controls['appointmentye'];
        this.cartons = this.complexForm.controls['cartons'];
        this.geomile = this.complexForm.controls['geomile'];
    }
    LoadAddComponent.prototype.ngOnInit = function () {
        // alert(localStorage.getItem('userData'))
        this.getAlllocations();
        this.getVendors();
        this.getAppointments();
        // this.driverNameDetails();
        this.dealerNameDetails();
        // $.ajaxSetup({ headers: { "X-Auth-Token": localStorage.getItem('token') } })
    };
    /**
     * Get All locations
     */
    LoadAddComponent.prototype.getAlllocations = function () {
        var _this = this;
        this.loadService.getAlllocationsInfo().subscribe(function (response) {
            _this.locationList = response;
        }, function (error) {
            return console.log(error);
        });
    };
    /**
    * Vendors List
    */
    LoadAddComponent.prototype.getVendors = function () {
        var _this = this;
        this.loadService.getVendorsInfo().subscribe(function (response) {
            _this.vendorsList = response;
        }, function (error) {
            return console.log(error);
        });
    };
    /**
    * Drivers List Based on Vendors
    */
    LoadAddComponent.prototype.getDriversByVendorNum = function (vendorNbr) {
        var _this = this;
        this.load.driverId = '';
        this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(function (response) {
            _this.driverNameListData = response.data;
        }, function (error) {
            return console.log(error);
        });
    };
    /**
    * AppointmentTypes
    */
    LoadAddComponent.prototype.getAppointments = function () {
        var _this = this;
        this.loadService.getAppointmentTypesInfo().subscribe(function (response) {
            _this.appointmentTypesList = response;
        }, function (error) {
            return console.log(error);
        });
    };
    /**
     * Drivers List
     */
    // driverNameDetails() {
    //     this.loadService.getDriverNameList().subscribe(response => {
    //         let driverNameDetailsList = new Array(response.length);
    //         for (let i = 0; i < response.length; i++) {
    //             driverNameDetailsList[i] = {
    //                 //id: response[i].id,
    //                 id: response[i].id,
    //                 firstName: response[i].firstName
    //             };
    //         }
    //         this.driverNameListData = driverNameDetailsList.slice(0);
    //     }, error => console.error(error),
    //         () => console.info('Getting  driverMailId complete in LoadAddComponent'));
    // }
    /**
     * dealerNameDetails is used as vendorsDetailsList
     */
    LoadAddComponent.prototype.dealerNameDetails = function () {
        var _this = this;
        this.loadService.getDriverNameList().subscribe(function (response) {
            var dealerNameDetailsList = new Array(response.length);
            for (var i = 0; i < response.length; i++) {
                dealerNameDetailsList[i] = {
                    id: response[i].vendorNbr,
                    text: response[i].vendorName
                };
            }
            _this.dealerNameListData = dealerNameDetailsList.slice(0);
        }, function (error) { return console.error(error); });
    };
    /**
    * This method sets submitted property to true to hide form in view .
    */
    LoadAddComponent.prototype.submitForm = function (value) {
        var _this = this;
        if (this.complexForm.valid && value.loadNum != '' && value.driverId != '' && value.originNum != ''
            && value.destinNum != '' && value.appointmentye != '' && value.vendorNum != '' && this.geomiles != '' && this.complexForm.valid) {
            if (value.originNum != value.destinNum) {
                var today_Date = new Date();
                var userID = localStorage.getItem('userData');
                var addLoadObject = {
                    'apptNbr': value.loadNum,
                    'originLocNbr': {
                        'locNbr': value.originNum
                    },
                    'destLocNbr': {
                        'locNbr': value.destinNum
                    },
                    'createdTS': __WEBPACK_IMPORTED_MODULE_4_moment__(today_Date).format(),
                    'createdUser': {
                        'id': userID
                    },
                    'lastUpdatedTS': __WEBPACK_IMPORTED_MODULE_4_moment__(today_Date).format(),
                    'lastUpdatedUser': {
                        'id': userID
                    },
                    'scheduledArrivalDate': null,
                    'actualArrivalDate': null,
                    'startDate': null,
                    'endDate': null,
                    'cartons': value.cartons,
                    'driver': {
                        'id': value.driverId
                    },
                    'vndNbr': {
                        'vendorNbr': value.vendorNum
                    },
                    'apptTypNbr': {
                        'id': value.appointmentye
                    },
                    'apptStatNbr': {
                        'id': 1
                    },
                    'geomiles': this.geomiles,
                    'highValueLoad': this.load.highValueLoad,
                    'highPriorityLoad': this.load.highPriorityLoad
                };
                this.loadService.addLoad(addLoadObject).then(function (response) {
                    if (response.data != null) {
                        _this.loadAddSuccess = 'Load created sucessfully';
                        var that = _this;
                        setTimeout(function () {
                            _this.loadAddSuccess = '';
                            _this.router.navigate(['/loads']);
                        }, 3000);
                    }
                    else {
                        _this.loadAddFailure = response.error.message;
                        setTimeout(function () {
                            _this.loadAddFailure = '';
                        }, 3000);
                    }
                }, function (error) {
                    _this.serviceErrorResponse = error.exception;
                    _this.serviceErrorData = true;
                    _this.loadAddFailure = ' Failed to create load';
                });
            }
            else {
                this.loadAddFailure = 'Please select different destination locations';
                setTimeout(function () {
                    _this.loadAddFailure = '';
                }, 3000);
            }
        }
        else {
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }
    };
    /**
     * This method navigates screen to previous page
     */
    LoadAddComponent.prototype.goBack = function () {
        this.close.emit();
        this.router.navigate(['/loads']);
    };
    /**
   * This method navigates screen to dash board page
   */
    LoadAddComponent.prototype.goToHome = function () {
        var link = ['/dashboard'];
        this.router.navigate(link);
    };
    return LoadAddComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoadAddComponent.prototype, "close", void 0);
LoadAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1322),
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object])
], LoadAddComponent);

var _a, _b, _c;
//# sourceMappingURL=load.add.component.js.map

/***/ }),

/***/ 1206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_load_service__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drivers_services_driver_service__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_endpoints__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadsListComponent; });
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
 * This component gets all loads data.
 */
var LoadsListComponent = (function () {
    function LoadsListComponent(http, cdr, driverService, loadsService, router) {
        var _this = this;
        this.http = http;
        this.cdr = cdr;
        this.driverService = driverService;
        this.loadsService = loadsService;
        this.router = router;
        this.driverNamesList = [{ value: '', label: '' }];
        this.driverListArray = [];
        this.model = { date: { year: 2018, month: 10, day: 9 } };
        this.loadnumprefix = '';
        this.startplaceholder = 'Select Start Date';
        this.endplaceholder = 'Select End Date';
        this.pseudoServer = [];
        this.loadStartEnddates = { startDate: '', endDate: '' };
        this.loadQueryData = {
            startDate: '', endDate: '', loadStatus: '', empID: '', vinNumber: '',
            loadNumber: '', highValue: '0', highPriority: '0'
        };
        this.dealerList = [{
                city: '', contactName: '', dealerName: '', dealerNumber: '',
                latitude: '', longtitude: '', seq: '', status: '', vinCount: ''
            }];
        this.vinList = [{
                id: '', vin: '', vinSeq: '', yardId: '', loadSeq: '', divCd: '', scac: '', loadNum: '', affil: '',
                shipId: '', dealerCd: '', colorDesc: '', vinDesc: '',
                lotLocation: '', parkingSpot: ''
            }];
        this.myDatePickerOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
        };
        // collapse content
        this.isCollapsedContent = false;
        this.loadListQueryArray = [];
        this.loadNumberList = [{ value: '', label: '' }];
        this.vinsListQueryArray = [];
        this.vinsNumberList = [{ value: '', label: '' }];
        this.filterQuery = '';
        this.rowsOnPage = 10;
        this.sortBy = 'loadNum';
        this.sortOrder = 'asc';
        this.options = {
            dom: 'Bfrtip',
            buttons: [
                {
                    text: '<i class="fa fa-refresh"></i> Refresh',
                    className: 'btn bg-color-blueLight  txt-color-white btn-sm dataTableCustomButtonMargin',
                    action: function (e, dt, node, config) {
                        if (__WEBPACK_IMPORTED_MODULE_5_jquery__["fn"].DataTable.isDataTable('#DataTable table')) {
                            var table = __WEBPACK_IMPORTED_MODULE_5_jquery__('#DataTable table').DataTable();
                            table.ajax.reload();
                        }
                    }
                }
            ],
            ajax: function (data, callback, settings) {
                _this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_endpoints__["a" /* endponitConfig */].LOAD_API_ENDPOINT + 'getAllLoadAppointments', { headers: _this.loadsHeader })
                    .map(_this.extractData)
                    .catch(function (error) {
                    // In a real world app, we might use a remote logging infrastructure
                    // We'd also dig deeper into the error to get a better message
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    if (error.status == 404) {
                        error = error.json();
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__["Observable"].throw(error);
                    }
                    else {
                        // this.navigateToLogin( this.errorMessage)
                        localStorage.setItem('status', '401');
                        // 401 unauthorized response so log user out of client
                        window.location.href = '/#/error';
                        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__["Observable"].throw(errMsg);
                    }
                })
                    .subscribe(function (dataa) {
                    callback({
                        aaData: dataa,
                    });
                });
            },
            columns: [
                {
                    data: 'apptNbr',
                    responsivePriority: 1
                },
                {
                    data: 'destLocNbr.locAddrName',
                    responsivePriority: 2
                },
                {
                    data: 'driver.firstName',
                    responsivePriority: 3
                },
                // {
                //     data: "scheduledArrivalDate",
                //     render: (data, type, row) => {
                //         if (data) {
                //             data = moment(data).format('DD/MM/YYYY');
                //             return data
                //         } else {
                //             return ''
                //         }
                //     },
                //     responsivePriority: 3
                // },
                {
                    data: 'vndNbr.vendorName',
                    responsivePriority: 5
                },
                {
                    data: 'apptStatNbr.status',
                    responsivePriority: 6
                },
                {
                    data: 'apptStatNbr',
                    className: 'editcenter',
                    responsivePriority: 2,
                    orderable: false,
                    render: function (data, type, row) {
                        if (data.id != 1) {
                            return "<a class=\" editor_view\" ><i class=\"fa fa-eye\" (click)=\"mypopup()\"></i></a>";
                        }
                        else {
                            return "<a class=\" editor_edit \"  (click)=\"goToUpdateLoadDetial(load.loadNum)\"><i class=\"fa fa-edit\"></i>/</a>\n                                <a class=\" editor_view\" ><i class=\"fa fa-eye\" (click)=\"mypopup()\"></i></a>\n                                <a class=\" editor_remove\" >/<i class=\"fa fa-trash-o\"></i></a>\n                                <a class=\" load_push\" >/<i class=\"fa fa-arrow-right\"></i></a>";
                        }
                    }
                }
            ],
            rowCallback: function (row, data, index) {
                var self = _this;
                __WEBPACK_IMPORTED_MODULE_5_jquery__('td', row).unbind('click');
                __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_edit', row).bind('click', function () {
                    // self.editUser(data);
                    self.goToUpdateLoadDetial(data);
                });
                __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_view', row).bind('click', function () {
                    self.gotoViewLoadDetails(data);
                });
                __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_complete', row).bind('click', function () {
                    // self.editUser(data);
                    // alert('Load Successfully Delivered.....')
                });
                __WEBPACK_IMPORTED_MODULE_5_jquery__('a.load_push', row).bind('click', function () {
                    // load push status code is 2
                    _this.loadsService.updateLoadStatus(data.apptNbr, 2).then(function (response) {
                        if (response != null) {
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('a.load_push', row).hide();
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_edit', row).hide();
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_remove', row).hide();
                            __WEBPACK_IMPORTED_MODULE_5_jquery__('td:eq(4)', row).text('Load Assigned');
                            _this.loadDeleteSuccess = 'Load details pushed successfully';
                            setTimeout(function () {
                                _this.loadDeleteSuccess = '';
                            }, 1000);
                        }
                        else {
                            _this.loadDeleteFailure = response.error.message;
                        }
                    }, function (error) {
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                    });
                });
                __WEBPACK_IMPORTED_MODULE_5_jquery__('a.editor_remove', row).bind('click', function () {
                    _this.loadsService
                        .deleteLoad(data)
                        .subscribe(function (response) {
                        if (response.data != null) {
                            if (__WEBPACK_IMPORTED_MODULE_5_jquery__["fn"].DataTable.isDataTable('#DataTable table')) {
                                var table = __WEBPACK_IMPORTED_MODULE_5_jquery__('#DataTable table').DataTable();
                                var info = table.page.info();
                                __WEBPACK_IMPORTED_MODULE_5_jquery__('td', row).parents('tr').remove();
                                table.ajax.reload();
                                //    setTimeout(()=>{
                                //     table.page(info.page).draw('page'); 
                                //    },500)
                            }
                            _this.loadDeleteSuccess = 'Load deleted successfully';
                            setTimeout(function () {
                                _this.loadDeleteSuccess = '';
                            }, 1000);
                            //  this.getAllLoadsList();
                        }
                        else {
                            // this.loadDeleteFailure = response.error.message;
                            _this.loadDeleteFailure = response.error.message;
                            setTimeout(function () {
                                _this.loadDeleteFailure = '';
                            }, 3000);
                        }
                    }, function (error) { _this.error = error; });
                });
                return row;
            },
        };
        this.activePageTitle = 'Loads';
        this.isLoadSearchQuerySubmitted = false;
        this.loadQueryData.highValue = 0;
        this.loadQueryData.highPriority = 0;
        this.loadDeleteResponse = '';
        this.loadsHeader = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* Headers */]();
        this.loadsHeader.append('Content-Type', 'application/json');
        this.loadsHeader.append('Authorization', localStorage.getItem('Authentication'));
    }
    LoadsListComponent.prototype.showChildModal = function () {
        this.loadviewPopup.show();
    };
    LoadsListComponent.prototype.extractData = function (res) {
        var body = res.json();
        if (body) {
            return body.data;
        }
        else {
            return {};
        }
    };
    LoadsListComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__["Observable"].throw(errMsg);
    };
    LoadsListComponent.prototype.ngOnInit = function () {
        this.getAllLoadsList();
        this.getAllDrivers();
    };
    /**
   * This method gets all loads
   */
    LoadsListComponent.prototype.getAllLoadsList = function () {
        var _this = this;
        try {
            this.loadsService.getAllLoads().toPromise().then(function (load) {
                _this.allLoads = load;
            });
        }
        catch (error) {
            console.error('error occured in getting all load details' + error);
        }
    };
    /**
     * View Load
     */
    LoadsListComponent.prototype.gotoViewLoadDetails = function (viewObj) {
        this.loadListView = viewObj;
        this.loadviewPopup.show();
    };
    /**
     * Update Load
     */
    LoadsListComponent.prototype.goToUpdateLoadDetial = function (loadNum) {
        var link = ['/loads/updateLoad', loadNum.apptNbr];
        this.router.navigate(link);
    };
    /**
     * back to load page
     */
    LoadsListComponent.prototype.goToAddLoad = function () {
        var link = ['/loads/addLoad'];
        this.router.navigate(link);
    };
    /**
   * This method gets all driver details
   */
    LoadsListComponent.prototype.getAllDrivers = function () {
        var _this = this;
        this.driverService.getDrivers().subscribe(function (drivers) {
            _this.driverListArray = drivers;
            var driverNamesList = new Array(_this.driverListArray.length);
            for (var i = 0; i < _this.driverListArray.length; i++) {
                driverNamesList[i] = {
                    value: _this.driverListArray[i].empID,
                    label: _this.driverListArray[i].firstName + ' ' + _this.driverListArray[i].lastName
                };
            }
            _this.driverNamesList = driverNamesList.slice(0);
        });
    };
    return LoadsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loadviewPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _a || Object)
], LoadsListComponent.prototype, "loadviewPopup", void 0);
LoadsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1323),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_load_service__["a" /* LoadsService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_6__drivers_services_driver_service__["a" /* DriverService */]],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: ["\n    .popup-header,\n    .popup-body,\n    .popup-footer {\n        padding: 15px;\n        text-align: center;\n    }\n\n    .popup-header {\n        font-weight: bold;\n        font-size: 18px;\n        border-bottom: 1px solid #ccc;\n    }\n\n    .ng2-popup-overlay {\n        display: flex;\n        position: fixed;\n        background-color: rgba(0, 0, 0, 0.2);\n        top: 0px;\n        left: 0px;\n        bottom: 0px;\n        right: 0px;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n        align-items: center;\n        display: none;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__drivers_services_driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__drivers_services_driver_service__["a" /* DriverService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__services_load_service__["a" /* LoadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_load_service__["a" /* LoadsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object])
], LoadsListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=loads.list.component.js.map

/***/ }),

/***/ 1207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_load_service__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadUpdateComponent; });
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
 * This component deals with loads update operation
 */
var LoadUpdateComponent = (function () {
    function LoadUpdateComponent(router, route, loadService, fb, cdr) {
        this.router = router;
        this.route = route;
        this.loadService = loadService;
        this.cdr = cdr;
        this.selectedDealerList = [];
        this.load = {};
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navigated = true;
        this.driversList = [];
        this.dealersList = [];
        this.activePageTitle = 'Update Load';
        this.loadUpdateResponse = '';
        this.formValidate = false;
        this.complexForm = fb.group({
            'loadNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]+')])],
            'driverId': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'originNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'destinNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'vendorNum': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            // 'truckNum': [null, Validators.compose([Validators.required, Validators.pattern('[a-z A-Z 0-9]+')])],
            'appointmentye': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'cartons': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[1-9])$')])],
            'geomile': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^(15[0]|1[0-4][0-9]|[0-9][0-9]|[5-9])$')])]
        });
        this.loadNum = this.complexForm.controls['loadNum'];
        this.driverId = this.complexForm.controls['driverId'];
        this.originNum = this.complexForm.controls['originNum'];
        this.destinNum = this.complexForm.controls['destinNum'];
        // this.truckNum = this.complexForm.controls['truckNum'];
        this.vendorNum = this.complexForm.controls['vendorNum'];
        this.appointmentye = this.complexForm.controls['appointmentye'];
        this.cartons = this.complexForm.controls['cartons'];
        this.geomile = this.complexForm.controls['geomile'];
    }
    LoadUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['loadNum'] !== undefined) {
                var loadNum = +params['loadNum'] + '';
                _this.navigated = true;
                _this.loadService.getLoadDetailsByLoadNum(loadNum).toPromise().then(function (loads) {
                    _this.load = loads;
                    // this.driverNameDetails(loadNum);
                    _this.getAppointments();
                    _this.getAlllocations();
                    _this.getVendors();
                    _this.getDriversByVendorNum(_this.load.vndNbr.vendorNbr);
                    _this.cdr.detectChanges();
                });
            }
            else {
                _this.navigated = false;
            }
        });
    };
    /**
    * Get All locations
    */
    LoadUpdateComponent.prototype.getAlllocations = function () {
        var _this = this;
        this.loadService.getAlllocationsInfo().subscribe(function (response) {
            _this.locationList = response;
            for (var i = 0; i < _this.locationList.length; i++) {
                if (_this.locationList[i].locNbr == _this.load.originLocNbr.locNbr) {
                    _this.orignlocAddrName = _this.locationList[i].locNbr;
                    break;
                }
            }
            for (var i = 0; i < _this.locationList.length; i++) {
                if (_this.locationList[i].locNbr == _this.load.destLocNbr.locNbr) {
                    _this.destAddrName = _this.locationList[i].locNbr;
                    break;
                }
            }
        }, function (error) {
            return console.log(error);
        });
    };
    /**
    * Vendors List
    */
    LoadUpdateComponent.prototype.getVendors = function () {
        var _this = this;
        this.loadService.getVendorsInfo().subscribe(function (response) {
            _this.vendorsList = response;
            for (var v = 0; v < _this.vendorsList.length; v++) {
                if (_this.vendorsList[v].vendorNbr == _this.load.vndNbr.vendorNbr) {
                    _this.vendorId = _this.vendorsList[v].vendorNbr;
                }
            }
        }, function (error) {
            return console.log(error);
        });
    };
    /**
     * Drivers List Based on Vendors
     */
    LoadUpdateComponent.prototype.getDriversByVendorNum = function (vendorNbr) {
        var _this = this;
        this.driverNum = '';
        this.loadService.getDriverNameListBasedOnVendors(vendorNbr).subscribe(function (response) {
            _this.driverList = response.data;
            for (var _i = 0, _a = _this.driverList; _i < _a.length; _i++) {
                var driver = _a[_i];
                if (_this.load.driver.id == driver.id) {
                    _this.driverNum = _this.load.driver.id;
                }
            }
        }, function (error) {
            return console.log(error);
        });
    };
    /**
    * AppointmentTypes
    */
    LoadUpdateComponent.prototype.getAppointments = function () {
        var _this = this;
        this.loadService.getAppointmentTypesInfo().subscribe(function (response) {
            _this.appointmentTypesList = response;
            for (var a = 0; a < _this.appointmentTypesList.length; a++) {
                if (_this.appointmentTypesList[a].id == _this.load.apptTypNbr.id) {
                    _this.appointmentypeId = _this.appointmentTypesList[a].id;
                }
            }
        }, function (error) {
            return console.log(error);
        });
    };
    /**
     * Driver Info
     */
    /**
    * This method sets submitted property to true to hide form in view .
    */
    LoadUpdateComponent.prototype.updateLoadData = function (value) {
        var _this = this;
        if (this.complexForm.valid && value.loadNum != '' && value.driverId != '' && value.originNum != ''
            && value.destinNum != '' && value.geomile != '' && value.appointmentye != '' && this.complexForm.valid) {
            if (value.originNum != value.destinNum) {
                var today_Date = new Date();
                var userID = localStorage.getItem('userData');
                var updateLoadObject = {
                    'apptNbr': value.loadNum,
                    'originLocNbr': {
                        'locNbr': value.originNum
                    },
                    'destLocNbr': {
                        'locNbr': value.destinNum
                    },
                    'lastUpdatedTS': __WEBPACK_IMPORTED_MODULE_5_moment__(today_Date).format(),
                    'lastUpdatedUser': {
                        'id': userID
                    },
                    'cartons': value.cartons,
                    'driver': {
                        'id': value.driverId
                    },
                    'vndNbr': {
                        'vendorNbr': value.vendorNum
                    },
                    'apptTypNbr': {
                        'id': value.appointmentye
                    },
                    'apptStatNbr': {
                        'id': this.load.apptStatNbr.id
                    },
                    'highValueLoad': this.load.highValueLoad,
                    'highPriorityLoad': this.load.highPriorityLoad,
                    'geomiles': value.geomile
                };
                this.loadService.updateLoad(updateLoadObject).then(function (response) {
                    if (response.data != null) {
                        // this.loadService = response.message
                        _this.loadUpdateSuccess = 'Load updated successfully';
                        setTimeout(function () {
                            _this.loadUpdateSuccess = '';
                            _this.router.navigate(['/loads']);
                        }, 2000);
                    }
                    else {
                        _this.loadUpdateFailure = response.error.message;
                        setTimeout(function () {
                            _this.loadUpdateFailure = '';
                        }, 2000);
                    }
                }, function (error) {
                    _this.serviceErrorResponse = error.exception;
                    _this.serviceErrorData = true;
                });
            }
            else {
                this.loadUpdateFailure = 'Please select different destination locations';
                setTimeout(function () {
                    _this.loadUpdateFailure = '';
                }, 2000);
            }
        }
        else {
            console.log('error');
            this.formValidate = true;
            this.complexForm != this.complexForm;
        }
    };
    LoadUpdateComponent.prototype.goBack = function () {
        this.router.navigate(['/loads']);
    };
    LoadUpdateComponent.prototype.goToHome = function () {
        var link = ['/dashboard'];
        this.router.navigate(link);
    };
    return LoadUpdateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoadUpdateComponent.prototype, "load", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoadUpdateComponent.prototype, "close", void 0);
LoadUpdateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(1324),
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_load_service__["a" /* LoadsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], LoadUpdateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=load.update.component.js.map

/***/ }),

/***/ 1247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_list_loads_list_component__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_add_load_add_component__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_update_load_update_component__ = __webpack_require__(1207);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_list_loads_list_component__["a" /* LoadsListComponent */], data: { pageTitle: 'Loads Details' }
    },
    {
        path: 'addLoad', component: __WEBPACK_IMPORTED_MODULE_2__components_add_load_add_component__["a" /* LoadAddComponent */], data: { pageTitle: 'Add Load' }
    },
    {
        path: 'updateLoad/:loadNum', component: __WEBPACK_IMPORTED_MODULE_3__components_update_load_update_component__["a" /* LoadUpdateComponent */], data: { pageTitle: 'Update Load' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=loads.routing.js.map

/***/ }),

/***/ 1255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadDataFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoadDataFilterPipe = (function () {
    function LoadDataFilterPipe() {
    }
    LoadDataFilterPipe.prototype.transform = function (array, query) {
        if (query) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) { return ((row.loadNum.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
                (row.driverName.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
                (row.trkNum.toLowerCase().indexOf(query.toLowerCase()) > -1) ||
                (row.loadStatus.toLowerCase().indexOf(query.toLowerCase()) > -1)); });
        }
        return array;
    };
    return LoadDataFilterPipe;
}());
LoadDataFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: "loadDataFilter"
    })
], LoadDataFilterPipe);

//# sourceMappingURL=loaddata-filter.pipe.js.map

/***/ }),

/***/ 1322:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]=\"serviceErrorData\"  id=\"content\">\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header>\n            <span class=\"widget-icon\">\n              <i class=\"fa fa-table\"></i>\n            </span>\n            <h2>Add Load</h2>\n          </header>\n          <div class=\"widget-body  \">\n\n            <section *ngIf=\"loadAddSuccess\" class=\"text-success text-center\"> {{loadAddSuccess}} </section>\n            <section *ngIf=\"loadAddFailure\" class=\"icon-color-bad text-center\"> {{loadAddFailure}} </section>\n            <br>\n            <fieldset>\n              <form class=\"form truckAddForm\" [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\" name=\"truckAddForm\"\n                id=\"truckAddForm\" action=\"javascript:void(0)\" method=\"post\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"loadNum\">\n                        Load Number\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <input class=\"form-control\" type=\"text\" id=\"loadNum\" name=\"loadNum\" placeholder=\"Load number\" [(ngModel)]=\"load.loadNum\"\n                          [formControl]=\" this.loadNum\">\n                        <span *ngIf=\" this.loadNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please enter load number </span>\n                        <span *ngIf=\"this.loadNum.hasError('maxlength') ||this.loadNum.hasError('pattern') \" class=\"icon-color-bad\">Please enter valid load number with 10 digits only</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <label class=\"form-control highLoad\">\n                      <input id=\"load_high_value\" type=\"checkbox\" class=\"i-checks\" [(ngModel)]=\"load.highValueLoad\" [ngModelOptions]=\"{standalone: true}\"\n                        name='highValueLoad' (ngModelChange)=\"load.highValueLoad=$event?'1':'0'\"> High Value\n                    </label>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"vendorNum\" [ngClass]=\"{'has-error':! this.vendorNum.valid &&  this.vendorNum}\">\n                        Vendor\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <select class=\"form-control\" id=\"vendorNum\" name=\"vendorNum\" (change)=\"getDriversByVendorNum(load.vendorNum)\" [formControl]=\"this.vendorNum\"\n                          [(ngModel)]=\"load.vendorNum\">\n                          <option value='' disabled>Select vendor</option>\n                          <option *ngFor=\"let vendor of vendorsList\" [value]=\"vendor.vendorNbr\">{{vendor.vendorName}}</option>\n                        </select>\n                        <span *ngIf=\"this.vendorNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select vendor name</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <label class=\"form-control highPriority\">\n                      <input id=\"load_high_priority\" type=\"checkbox\" class=\"i-checks\" [(ngModel)]=\"load.highPriorityLoad\" [ngModelOptions]=\"{standalone: true}\"\n                        name='highPriorityLoad' (ngModelChange)=\"load.highPriorityLoad=$event?'1':'0'\"> High Priority\n                    </label>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"driverId\" [ngClass]=\"{'has-error':! this.driverId.valid &&  this.driverId}\">\n                        Driver\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <select class=\"form-control\" id=\"driverId\" name=\"driverId\" [formControl]=\"this.driverId\" [(ngModel)]=\"load.driverId\">\n                          <option value='' disabled>Select driver</option>\n                          <option *ngFor=\"let driver of driverNameListData\" [value]=\"driver.id\">{{driver.firstName}}</option>\n                        </select>\n                        <span *ngIf=\"this.driverId.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select driver name</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"originNum\" [ngClass]=\"{'has-error':! this.originNum.valid &&  this.originNum}\">\n                        Pickup Location\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <select class=\"form-control\" id=\"originNum\" name=\"originNum\" [formControl]=\"this.originNum\" [(ngModel)]=\"load.originNum\">\n                          <option value='' disabled>Select pickup location</option>\n                          <option *ngFor=\"let location of locationList\" [value]=\"location.locNbr\">{{location.locAddrName}}</option>\n                        </select>\n                        <span *ngIf=\"this.originNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select pickup location</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"destinNum\" [ngClass]=\"{'has-error':! this.destinNum.valid &&  this.destinNum}\">\n                        Destination Location\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <select class=\"form-control\" id=\"destinNum\" name=\"destinNum\" [formControl]=\"this.destinNum\" [(ngModel)]=\"load.destinNum\">\n                          <option value='' disabled>Select destination location</option>\n                          <option *ngFor=\"let location of locationList\" [value]=\"location.locNbr\">{{location.locAddrName}}</option>\n                        </select>\n                        <span *ngIf=\"this.destinNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select destination location</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"appointmentye\" [ngClass]=\"{'has-error':! this.appointmentye.valid &&  this.appointmentye}\">\n                        Appointment Type\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <select class=\"form-control\" id=\"appointmentye\" name=\"appointmentye\" [formControl]=\"this.appointmentye\" [(ngModel)]=\"load.appointmentye\">\n                          <option value='' disabled>Select appointment type</option>\n                          <option *ngFor=\"let appointment of appointmentTypesList\" [value]=\"appointment.id\">{{appointment.type}}</option>\n                        </select>\n                        <span *ngIf=\"this.appointmentye.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select appointment type</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"geomile\" [ngClass]=\"{'has-error':! this.geomile.valid &&  this.geomile}\">\n                        Geofence Miles\n                        <font class=\"icon-color-bad\">*</font>\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <input placeholder=\"Geofence Miles\" class=\"form-control\" type=\"number\" id=\"geomile\" name=\"geomile\" [(ngModel)]=\"geomiles\"\n                          [formControl]=\" this.geomile\">\n                        <span *ngIf=\" this.geomile.hasError('pattern')\" class=\"icon-color-bad\">Please enter valid number between 5 to 150 only</span>\n                        <span *ngIf=\" this.geomile.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please enter geofence miles </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <br>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"row\">\n                      <label class=\"col-sm-4 control-label\" for=\"cartons\" [ngClass]=\"{'has-error':! this.cartons.valid &&  this.cartons}\">\n                        No.of cartons\n                      </label>\n                      <div class=\"controls col-sm-6\">\n                        <input class=\"form-control\" type=\"number\" id=\"cartons\" name=\"cartons\" placeholder=\"No.of cartons\" [(ngModel)]=\"load.cartons\"\n                          [formControl]=\" this.cartons\">\n                        <span *ngIf=\" this.cartons.hasError('pattern')\" class=\"icon-color-bad\">Please enter valid number between 1 and 150 only</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <br>\n                <div class=\"smart-form\">\n                  <footer>\n                    <div class=\"row\">\n                      <div class=\"control-group col-sm-6 col-sm-offset-6\">\n                        <button (click)=\"goBack()\" class=\"btn btn-success\">Cancel</button>\n                        <button type=\"submit\" id=\"vin_submit\" class=\"btn btn-warning\"> ADD\n                        </button>\n\n                      </div>\n                    </div>\n                  </footer>\n                </div>\n              </form>\n            </fieldset>\n\n          </div>\n        </sa-widget>\n      </div>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1323:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]=\"serviceErrorData\"  id=\"content\">\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-table\"></i> </span>\n            <h2>Loads Details </h2>\n            <div class=\"widget-toolbar\" role=\"menu\">\n              <a class=\"btn btn-primary\" routerLink=\"/loads/addLoad\"> Add Load</a>\n            </div>\n          </header>\n          <div>\n\n            <div class=\"widget-body  \">\n              <section *ngIf=\"loadDeleteSuccess\" class=\"text-success text-center\"> {{loadDeleteSuccess}} </section>\n              <section *ngIf=\"loadDeleteFailure\" class=\"icon-color-bad text-center\"> {{loadDeleteFailure}} </section>\n\n              <sa-datatable id=\"DataTable\" [options]=\"options\" tableClass=\"table table-striped table-bordered table-hover\" paginationLength=\"true\"\n                width=\"100%\">\n                <thead>\n                  <tr>\n                    <th>Load Number</th>\n                    <th>Destination</th>\n                    <th>Driver </th>\n                    <th>Vendor Name</th>\n                    <th>Load Status</th>\n                    <th> Edit / View/ Delete/ Push</th>\n                  </tr>\n                </thead>\n\n                <tfoot>\n                  <tr>\n                    <th>Load Number</th>\n                    <th>Destination</th>\n                    <th>Driver </th>\n                    <th>Vendor Name</th>\n                    <th>Load Status</th>\n                    <th> Edit / View / Delete/ Push</th>\n                  </tr>\n                </tfoot>\n              </sa-datatable>\n            </div>\n          </div>\n        </sa-widget>\n\n      </div>\n    </div>\n\n  </sa-widgets-grid>\n</div>\n\n<div bsModal #loadviewPopup=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" *ngIf=\"loadListView\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"loadviewPopup.hide()\" aria-label=\"Close\">\n           <span aria-hidden=\"true\">&times;</span>\n          </button>\n        <h4 class=\"modal-title\">View Load</h4>\n      </div>\n      <div class=\"modal-body \">\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6\">\n            <div class=\"row\">\n              <div class=\" col-xs-5 col-sm-5 padding-5 \">\n                <b>Load Number</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.apptNbr}}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\" col-xs-5 col-sm-5 padding-5  \">\n                <b>Pickup Location</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\" col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.originLocNbr.locAddrName}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>Destination Location</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.destLocNbr.locAddrName}}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>Driver Name</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.driver.firstName}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>High Value</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                 <label><input type=\"checkbox\" [(ngModel)]=\"loadListView.highValueLoad\" onclick=\"return false;\"/></label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>High Priority</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                <label><input type=\"checkbox\" [(ngModel)]=\"loadListView.highPriorityLoad\" onclick=\"return false;\"/></label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>Vendor Name</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.vndNbr.vendorName}}\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 \">\n            <div class=\"row\">\n              <div class=\"col-xs-5 col-sm-5 padding-5 \">\n                <b>Geofence Miles</b>\n              </div>\n              <div class=\"col-xs-1 col-sm-1 padding-5\">:</div>\n              <div class=\"col-xs-6 col-sm-5 padding-5\">\n                {{loadListView?.geomiles}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"loadviewPopup.hide()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1324:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n<div [hidden]=\"serviceErrorData\"  id=\"content\">\n    <sa-widgets-grid>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <sa-widget [editbutton]=\"false\" color=\"blueDark\">\n                    <header>\n                        <span class=\"widget-icon\">\n                            <i class=\"fa fa-table\"></i>\n                        </span>\n                        <h2>Update Load</h2>\n                    </header>\n                    <div class=\"widget-body  \">\n                        <fieldset>\n                            <section *ngIf=\"loadUpdateSuccess\" class=\"text-success text-center\"> {{loadUpdateSuccess}} </section>\n                            <section *ngIf=\"loadUpdateFailure\" class=\"icon-color-bad text-center\"> {{loadUpdateFailure}} </section>\n                            <br>\n\n                            <form class=\"form truckUpdateForm\" [formGroup]=\"complexForm\" (ngSubmit)=\"updateLoadData(complexForm.value)\" name=\"truckUpdateForm\"\n                                id=\"truckUpdateForm\" method=\"post\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\">\n                                                Load Number\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <input class=\"form-control\" placeholder=\"Load number\" type=\"text\" id=\"loadNum\" name=\"loadNum\" [(ngModel)]=\"load.apptNbr\"\n                                                    [formControl]=\" this.loadNum\" readonly>\n                                                <span *ngIf=\" this.loadNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please enter load number </span>\n                                                <span *ngIf=\" this.loadNum.hasError('pattern') \" class=\"icon-color-bad\">Please enter numbers only</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-sm-6\">\n                                        <label class=\"form-control highLoad\">\n                                            <input id=\"load_high_value\" type=\"checkbox\" class=\"i-checks\" [(ngModel)]=\"load.highValueLoad\" [ngModelOptions]=\"{standalone: true}\"\n                                                name='highValueLoad' (ngModelChange)=\"load.highValueLoad=$event?'1':'0'\"> High Value\n                                        </label>\n                                    </div>\n                                </div>\n                                <br>\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"vendorNum\">\n                                                Vendor\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <select class=\"form-control\" id=\"vendorNum\" name=\"vendorNum\" (change)=\"getDriversByVendorNum(vendorId)\" [formControl]=\"this.vendorNum\"\n                                                    [(ngModel)]=\"vendorId\">\n                                                    <option value='' disabled>Select vendor</option>\n                                                    <option *ngFor=\"let vendor of vendorsList\" [value]=\"vendor.vendorNbr\">{{vendor.vendorName}}</option>\n                                                </select>\n                                                <span *ngIf=\"this.vendorNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select vendor name</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <label class=\"form-control highPriority\">\n                                            <input id=\"load_high_priority\" type=\"checkbox\" class=\"i-checks\" [(ngModel)]=\"load.highPriorityLoad\" [ngModelOptions]=\"{standalone: true}\"\n                                                name='highPriorityLoad' (ngModelChange)=\"load.highPriorityLoad=$event?'1':'0'\"> High Priority\n                                        </label>\n                                    </div>\n                                </div>\n                                <br>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"driverId\">\n                                                Driver\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <select class=\"form-control\" id=\"driverId\" name=\"driverId\" [formControl]=\"this.driverId\" [(ngModel)]=\"driverNum\">\n                                                    <option value='' disabled>Select driver</option>\n                                                    <option *ngFor=\"let driver of driverList\" [value]=\"driver.id\">{{driver.firstName}}</option>\n                                                </select>\n                                                <span *ngIf=\"this.driverId.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select driver name</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"originNum\">\n                                                Pickup Location\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <select class=\"form-control\" id=\"originNum\" name=\"originNum\" [formControl]=\"this.originNum\" [(ngModel)]=\"orignlocAddrName\">\n                                                    <option value='' disabled>Select pickup location</option>\n                                                    <option *ngFor=\"let location of locationList\" [value]=\"location.locNbr\">{{location.locAddrName}}</option>\n                                                </select>\n                                                <span *ngIf=\"this.originNum.hasError('pattern') &&  this.formValidate\" class=\"icon-color-bad \">Please select pickup location</span>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n                                <br>\n\n\n\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"destinNum\">\n                                                Destination Location\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <select class=\"form-control\" id=\"destinNum\" name=\"destinNum\" [formControl]=\"this.destinNum\" [(ngModel)]=\"destAddrName\">\n                                                    <option value='' disabled>Select destination location</option>\n                                                    <option *ngFor=\"let location of locationList\" [value]=\"location.locNbr\">{{location.locAddrName}}</option>\n                                                </select>\n                                                <span *ngIf=\"this.destinNum.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select destination location</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n\n\n\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"appointmentye\">\n                                                Appointment Type\n                                                <font class=\"icon-color-bad\">*</font>\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <select class=\"form-control\" id=\"appointmentye\" name=\"appointmentye\" [formControl]=\"this.appointmentye\" [(ngModel)]=\"appointmentypeId\">\n                                                    <option value='' disabled>Select appointment type</option>\n                                                    <option *ngFor=\"let appointment of appointmentTypesList\" [value]=\"appointment.id\">{{appointment.type}}</option>\n                                                </select>\n                                                <span *ngIf=\"this.appointmentye.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select appointment type</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"geomile\">\n                                                Geofence Miles\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <input class=\"form-control\" type=\"text\" id=\"geomile\" name=\"geomile\" size=\"30\" [(ngModel)]=\"load.geomiles\" [formControl]=\" this.geomile\"\n                                                    placeholder=\"Geofence miles\">\n                                                <span *ngIf=\" this.geomile.hasError('pattern')\" class=\"icon-color-bad\">Please enter valid number between 5 and 150 only</span>\n                                                <span *ngIf=\" this.geomile.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please enter geofence miles </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"row\">\n                                            <label class=\"col-sm-4 control-label\" for=\"cartons\">\n                                                No.of cartons\n                                            </label>\n                                            <div class=\"controls col-sm-6\">\n                                                <input class=\"form-control\" type=\"text\" id=\"cartons\" placeholder=\"No.of cartons\" name=\"cartons\" size=\"30\" [(ngModel)]=\"load.cartons\"\n                                                    [formControl]=\" this.cartons\">\n                                                <span *ngIf=\" this.cartons.hasError('pattern')\" class=\"icon-color-bad\">Please enter valid number between 1 and 150 only</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br>\n\n\n                                <div class=\"smart-form\">\n                                    <footer>\n                                        <div class=\"row\">\n\n                                            <div class=\"control-group col-sm-5 col-sm-offset-5\">\n                                                <button (click)=\"goBack()\" class=\"btn btn-warning\">Cancel</button>\n                                                <button type=\"submit\" class=\"btn btn-success\">\n                                                    Update</button>\n\n                                            </div>\n                                        </div>\n                                    </footer>\n                                </div>\n                            </form>\n                        </fieldset>\n                    </div>\n                </sa-widget>\n            </div>\n        </div>\n    </sa-widgets-grid>\n</div>\n"

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
//# sourceMappingURL=7.chunk.js.map