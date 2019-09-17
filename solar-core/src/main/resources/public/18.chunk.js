webpackJsonp([18,19,49],{

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

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_widget_calendar_widget_component__ = __webpack_require__(1240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_events_service__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_component__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_smartadmin_module__ = __webpack_require__(1026);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendar_routing__ = __webpack_require__(1241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sharedmodules_grouping_pipe__ = __webpack_require__(1259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngui_datetime_picker__ = __webpack_require__(1261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngui_datetime_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__ngui_datetime_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_error_error500_error500_module__ = __webpack_require__(1008);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CalendarModule = (function () {
    function CalendarModule() {
    }
    return CalendarModule;
}());
CalendarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_5__calendar_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ngui_datetime_picker__["NguiDatetimePickerModule"],
            __WEBPACK_IMPORTED_MODULE_10__auth_error_error500_error500_module__["Error500Module"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__calendar_widget_calendar_widget_component__["a" /* CalendarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sharedmodules_grouping_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__calendar_widget_calendar_widget_component__["a" /* CalendarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_3__calendar_component__["a" /* CalendarComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_events_service__["a" /* EventsService */]]
    })
], CalendarModule);

//# sourceMappingURL=calendar.module.js.map

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

/***/ 1065:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"animated fadeInDown\">\n  <div id=\"content\">\n    <!-- row -->\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n            <div class=\"text-center error-box\">\n              <h6 class=\"error-text tada animated\" style=\"font-size:350%\">\n                <i class=\"fa fa-times-circle text-danger error-icon-shadow\"></i> Service Unavailable</h6>\n              <h2 class=\"font-xl\">\n                <strong>Oooops, Something went wrong!</strong>\n              </h2>\n              <br>\n              <p>{{errorname}}</p>\n              <p class=\"lead semi-bold\">\n                <strong>You have experienced a technical error. We apologize.</strong>\n                <br>\n                <br>\n                <small>\n                  We are working hard to correct this issue. Please wait a few moments and try your search again.\n                </small>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end row -->\n</div>"

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/**
 * Static variables that you can override
 *   1. days.           default 1,2,....31
 *   2. daysOfWeek,     default Sunday, Monday, .....
 *   3. firstDayOfWeek, default 0 as in Sunday
 *   4. months,         default January, February
 *   5. formatDate(d)   default returns YYYY-MM-DD HH:MM
 *   6. parseDate(str)  default returns date from YYYY-MM-DD HH:MM
 */
var NguiDatetime = (function () {
    function NguiDatetime() {
    }
    NguiDatetime.formatDate = function (d, format, dateOnly) {
        var ret;
        if (d && !format) {
            // return d.toLocaleString('en-us', hash); // IE11 does not understand this
            var pad0 = function (number) { return ("0" + number).slice(-2); };
            ret = d.getFullYear() + '-' + pad0(d.getMonth() + 1) + '-' + pad0(d.getDate());
            ret += dateOnly ? '' : ' ' + pad0(d.getHours()) + ':' + pad0(d.getMinutes());
            return ret;
        }
        else if (d && typeof moment !== 'undefined') {
            return moment(d).format(format);
        }
        else {
            return '';
        }
    };
    NguiDatetime.parseDate = function (dateStr, parseFormat, dateFormat) {
        if (typeof moment === 'undefined') {
            dateStr = NguiDatetime.removeTimezone(dateStr);
            dateStr = dateStr + NguiDatetime.addDSTOffset(dateStr);
            return NguiDatetime.parseFromDefaultFormat(dateStr);
        }
        else if (dateFormat || parseFormat) {
            // try parse using each format because changing format programmatically calls this twice,
            // once with string in parse format and once in date format
            var formats = [];
            if (parseFormat) {
                formats.push(parseFormat);
            }
            if (dateFormat) {
                formats.push(dateFormat);
            }
            var m = moment(dateStr, formats);
            var date = m.toDate();
            if (!m.isValid()) {
                date = moment(dateStr, moment.ISO_8601).toDate(); // parse as ISO format
            }
            return date;
        }
        else if (dateStr.length > 4) {
            var date = moment(dateStr, 'YYYY-MM-DD HH:mm').toDate();
            return date;
        }
        else {
            return new Date();
        }
    };
    NguiDatetime.getWeekNumber = function (date) {
        if (!(date instanceof Date))
            date = new Date();
        // ISO week date weeks start on Monday, so correct the day number
        var nDay = (date.getDay() + 6) % 7;
        // ISO 8601 states that week 1 is the week with the first Thursday of that year
        // Set the target date to the Thursday in the target week
        date.setDate(date.getDate() - nDay + 3);
        // Store the millisecond value of the target date
        var n1stThursday = date.valueOf();
        // Set the target to the first Thursday of the year
        // First, set the target to January 1st
        date.setMonth(0, 1);
        // Not a Thursday? Correct the date to the next Thursday
        if (date.getDay() !== 4) {
            date.setMonth(0, 1 + ((4 - date.getDay()) + 7) % 7);
        }
        // The week number is the number of weeks between the first Thursday of the year
        // and the Thursday in the target week (604800000 = 7 * 24 * 3600 * 1000)
        return 1 + Math.ceil((n1stThursday - date) / 604800000);
    };
    //remove timezone
    NguiDatetime.removeTimezone = function (dateStr) {
        // if no time is given, add 00:00:00 at the end
        var matches = dateStr.match(/[0-9]{2}:/);
        dateStr += matches ? '' : ' 00:00:00';
        return dateStr.replace(/([0-9]{2}-[0-9]{2})-([0-9]{4})/, '$2-$1') //mm-dd-yyyy to yyyy-mm-dd
            .replace(/([\/-][0-9]{2,4})\ ([0-9]{2}\:[0-9]{2}\:)/, '$1T$2') //reformat for FF
            .replace(/EDT|EST|CDT|CST|MDT|PDT|PST|UT|GMT/g, '') //remove timezone
            .replace(/\s*\(\)\s*/, '') //remove timezone
            .replace(/[\-\+][0-9]{2}:?[0-9]{2}$/, '') //remove timezone
            .replace(/000Z$/, '00'); //remove timezone
    };
    NguiDatetime.addDSTOffset = function (dateStr) {
        var date = NguiDatetime.parseFromDefaultFormat(dateStr);
        var jan = new Date(date.getFullYear(), 0, 1);
        var jul = new Date(date.getFullYear(), 6, 1);
        var stdTimezoneOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
        var isDST = date.getTimezoneOffset() < stdTimezoneOffset;
        var offset = isDST ? stdTimezoneOffset - 60 : stdTimezoneOffset;
        var diff = offset >= 0 ? '-' : '+';
        offset = Math.abs(offset);
        return diff +
            ('0' + (offset / 60)).slice(-2) + ':' +
            ('0' + (offset % 60)).slice(-2);
    };
    ;
    NguiDatetime.parseFromDefaultFormat = function (dateStr) {
        var tmp = dateStr.split(/[\+\-:\ T]/); // split by dash, colon or space
        return new Date(parseInt(tmp[0], 10), parseInt(tmp[1], 10) - 1, parseInt(tmp[2], 10), parseInt(tmp[3] || '0', 10), parseInt(tmp[4] || '0', 10), parseInt(tmp[5] || '0', 10));
    };
    NguiDatetime.prototype.getMonthData = function (year, month) {
        year = month > 11 ? year + 1 :
            month < 0 ? year - 1 : year;
        month = (month + 12) % 12;
        var firstDayOfMonth = new Date(year, month, 1);
        var lastDayOfMonth = new Date(year, month + 1, 0);
        var lastDayOfPreviousMonth = new Date(year, month, 0);
        var daysInMonth = lastDayOfMonth.getDate();
        var daysInLastMonth = lastDayOfPreviousMonth.getDate();
        var dayOfWeek = firstDayOfMonth.getDay();
        // Ensure there are always leading days to give context
        var leadingDays = (dayOfWeek - NguiDatetime.firstDayOfWeek + 7) % 7 || 7;
        var trailingDays = NguiDatetime.days.slice(0, 6 * 7 - (leadingDays + daysInMonth));
        if (trailingDays.length > 7) {
            trailingDays = trailingDays.slice(0, trailingDays.length - 7);
        }
        var firstDay = new Date(firstDayOfMonth);
        firstDay.setDate(firstDayOfMonth.getDate() - (leadingDays % 7));
        var firstWeekNumber = NguiDatetime.getWeekNumber(firstDay);
        var numWeeks = Math.ceil((daysInMonth + leadingDays % 7) / 7);
        var weekNumbers = Array(numWeeks).fill(0).map(function (el, ndx) {
            var weekNum = (ndx + firstWeekNumber + 52) % 52;
            return weekNum === 0 ? 52 : weekNum;
        });
        var localizedDaysOfWeek = NguiDatetime.daysOfWeek
            .concat(NguiDatetime.daysOfWeek)
            .splice(NguiDatetime.firstDayOfWeek, 7);
        var monthData = {
            year: year,
            month: month,
            weekends: NguiDatetime.weekends,
            firstDayOfWeek: NguiDatetime.firstDayOfWeek,
            fullName: NguiDatetime.months[month].fullName,
            shortName: NguiDatetime.months[month].shortName,
            localizedDaysOfWeek: localizedDaysOfWeek,
            days: NguiDatetime.days.slice(0, daysInMonth),
            leadingDays: NguiDatetime.days.slice(-leadingDays - (31 - daysInLastMonth), daysInLastMonth),
            trailingDays: trailingDays,
            weekNumbers: weekNumbers
        };
        return monthData;
    };
    NguiDatetime.locale = {
        date: 'date',
        time: 'time',
        year: 'year',
        month: 'month',
        day: 'day',
        hour: 'hour',
        minute: 'minute',
        currentTime: "current time"
    };
    NguiDatetime.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    NguiDatetime.weekends = [0, 6];
    NguiDatetime.daysOfWeek = typeof moment === 'undefined' ? [
        { fullName: 'Sunday', shortName: 'Su' },
        { fullName: 'Monday', shortName: 'Mo' },
        { fullName: 'Tuesday', shortName: 'Tu' },
        { fullName: 'Wednesday', shortName: 'We' },
        { fullName: 'Thursday', shortName: 'Th' },
        { fullName: 'Friday', shortName: 'Fr' },
        { fullName: 'Saturday', shortName: 'Sa' }
    ] : moment.weekdays().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment.weekdaysShort()[index].substr(0, 2)
        };
    });
    NguiDatetime.firstDayOfWeek = typeof moment === 'undefined' ? 0 : moment.localeData().firstDayOfWeek();
    NguiDatetime.months = typeof moment === 'undefined' ? [
        { fullName: 'January', shortName: 'Jan' },
        { fullName: 'February', shortName: 'Feb' },
        { fullName: 'March', shortName: 'Mar' },
        { fullName: 'April', shortName: 'Apr' },
        { fullName: 'May', shortName: 'May' },
        { fullName: 'June', shortName: 'Jun' },
        { fullName: 'July', shortName: 'Jul' },
        { fullName: 'August', shortName: 'Aug' },
        { fullName: 'September', shortName: 'Sep' },
        { fullName: 'October', shortName: 'Oct' },
        { fullName: 'November', shortName: 'Nov' },
        { fullName: 'December', shortName: 'Dec' }
    ] : moment.months().map(function (el, index) {
        return {
            fullName: el,
            shortName: moment['monthsShort']()[index]
        };
    });
    NguiDatetime.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NguiDatetime.ctorParameters = [];
    return NguiDatetime;
}());
exports.NguiDatetime = NguiDatetime;
//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var datetime_1 = __webpack_require__(1146);
//@TODO
// . display currently selected day
/**
 * show a selected date in monthly calendar
 */
var NguiDatetimePickerComponent = (function () {
    function NguiDatetimePickerComponent(elementRef, nguiDatetime, cdRef) {
        this.nguiDatetime = nguiDatetime;
        this.cdRef = cdRef;
        this.minuteStep = 1;
        this.showWeekNumbers = false;
        this.showTodayShortcut = false;
        this.showAmPm = false;
        this.selected$ = new core_1.EventEmitter();
        this.closing$ = new core_1.EventEmitter();
        this.locale = datetime_1.NguiDatetime.locale;
        this.showYearSelector = false;
        this.el = elementRef.nativeElement;
    }
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "yearsSelectable", {
        get: function () {
            var startYear = this.year - 100;
            var endYear = this.year + 50;
            var years = [];
            for (var year = startYear; year < endYear; year++) {
                years.push(year);
            }
            return years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "year", {
        get: function () {
            return this.selectedDate.getFullYear();
        },
        set: function (year) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "month", {
        get: function () {
            return this.selectedDate.getMonth();
        },
        set: function (month) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "day", {
        get: function () {
            return this.selectedDate.getDate();
        },
        set: function (day) { },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "monthData", {
        get: function () {
            return this._monthData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NguiDatetimePickerComponent.prototype, "today", {
        get: function () {
            var dt = new Date();
            dt.setHours(0);
            dt.setMinutes(0);
            dt.setSeconds(0);
            dt.setMilliseconds(0);
            return dt;
        },
        set: function (today) { },
        enumerable: true,
        configurable: true
    });
    NguiDatetimePickerComponent.prototype.ngOnInit = function () {
        if (!this.defaultValue || isNaN(this.defaultValue.getTime())) {
            this.defaultValue = new Date();
        }
        this.selectedDate = this.defaultValue;
        // set hour and minute using moment if available to avoid having Javascript change timezones
        if (typeof moment === 'undefined') {
            this.hour = this.selectedDate.getHours();
            this.minute = this.selectedDate.getMinutes();
        }
        else {
            var m = moment(this.selectedDate);
            this.hour = m.hours();
            this.minute = m.minute();
        }
        this._monthData = this.nguiDatetime.getMonthData(this.year, this.month);
    };
    NguiDatetimePickerComponent.prototype.isWeekend = function (dayNum, month) {
        if (typeof month === 'undefined') {
            return datetime_1.NguiDatetime.weekends.indexOf(dayNum % 7) !== -1; //weekday index
        }
        else {
            var weekday = this.toDate(dayNum, month).getDay();
            return datetime_1.NguiDatetime.weekends.indexOf(weekday) !== -1;
        }
    };
    NguiDatetimePickerComponent.prototype.selectYear = function (year) {
        this._monthData = this.nguiDatetime.getMonthData(year, this._monthData.month);
        this.showYearSelector = false;
    };
    NguiDatetimePickerComponent.prototype.toDate = function (day, month) {
        return new Date(this._monthData.year, month || this._monthData.month, day);
    };
    NguiDatetimePickerComponent.prototype.toDateOnly = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
    };
    NguiDatetimePickerComponent.prototype.selectCurrentTime = function () {
        this.hour = (new Date()).getHours();
        this.minute = (new Date()).getMinutes();
        this.selectDateTime();
    };
    /**
     * set the selected date and close it when closeOnSelect is true
     * @param date {Date}
     */
    NguiDatetimePickerComponent.prototype.selectDateTime = function (date) {
        var _this = this;
        this.selectedDate = date || this.selectedDate;
        if (this.isDateDisabled(this.selectedDate)) {
            return false;
        }
        // editing hours and minutes via javascript date methods causes date to lose timezone info,
        // so edit using moment if available
        var hour = parseInt('' + this.hour || '0', 10);
        var minute = parseInt('' + this.minute || '0', 10);
        if (typeof moment !== 'undefined') {
            // here selected date has a time of 00:00 in local time,
            // so build moment by getting year/month/day separately
            // to avoid it saving as a day earlier
            var m = moment([this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate()]);
            m.hours(hour);
            m.minutes(minute);
            this.selectedDate = m.toDate();
        }
        else {
            this.selectedDate.setHours(hour);
            this.selectedDate.setMinutes(minute);
        }
        //console.log('this.selectedDate', this.selectedDate)
        this.selectedDate.toString = function () {
            return datetime_1.NguiDatetime.formatDate(_this.selectedDate, _this.dateFormat, _this.dateOnly);
        };
        this.selected$.emit(this.selectedDate);
    };
    ;
    /**
     * show prev/next month calendar
     */
    NguiDatetimePickerComponent.prototype.updateMonthData = function (num) {
        this._monthData = this.nguiDatetime.getMonthData(this._monthData.year, this._monthData.month + num);
    };
    NguiDatetimePickerComponent.prototype.isDateDisabled = function (date) {
        var dateInTime = date.getTime();
        this.disabledDatesInTime =
            this.disabledDatesInTime || (this.disabledDates || []).map(function (d) { return d.getTime(); });
        if (this.minDate && (dateInTime < this.minDate.getTime())) {
            return true;
        }
        else if (this.maxDate && (dateInTime > this.maxDate.getTime())) {
            return true;
        }
        else if (this.disabledDatesInTime.indexOf(dateInTime) >= 0) {
            return true;
        }
        return false;
    };
    NguiDatetimePickerComponent.prototype.close = function () {
        this.closing$.emit(true);
    };
    NguiDatetimePickerComponent.prototype.selectToday = function () {
        this.selectDateTime(new Date());
    };
    NguiDatetimePickerComponent.prototype.convertHours = function (hours) {
        if (this.showAmPm) {
            this.timeSuffix = (hours >= 12) ? 'PM' : 'AM';
            hours = (hours == 0) ? 12 : (hours > 12) ? hours - 12 : hours;
        }
        else {
            this.timeSuffix = null;
        }
        return ("0" + hours).slice(-2);
    };
    NguiDatetimePickerComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [datetime_1.NguiDatetime],
                    selector: 'ngui-datetime-picker',
                    template: "\n  <div class=\"closing-layer\" (click)=\"close()\" *ngIf=\"showCloseLayer\" ></div>\n  <div class=\"ngui-datetime-picker\">\n    <div class=\"close-button\" *ngIf=\"showCloseButton\" (click)=\"close()\"></div>\n    \n    <!-- Month - Year  -->\n    <div class=\"month\" *ngIf=\"!timeOnly\">\n      <b class=\"prev_next prev year\" (click)=\"updateMonthData(-12)\">&laquo;</b>\n      <b class=\"prev_next prev month\" (click)=\"updateMonthData(-1)\">&lsaquo;</b>\n       <span title=\"{{monthData?.fullName}}\">\n         {{monthData?.shortName}}\n       </span>\n       <span (click)=\"showYearSelector = true\">\n        {{monthData.year}}\n       </span>\n      <b class=\"prev_next next year\" (click)=\"updateMonthData(+12)\">&raquo;</b>\n      <b class=\"prev_next next month\" (click)=\"updateMonthData(+1)\">&rsaquo;</b>\n    </div>\n\n    <!-- Week number / Days  -->\n    <div class=\"week-numbers-and-days\"\n      [ngClass]=\"{'show-week-numbers': !timeOnly && showWeekNumbers}\">\n      <!-- Week -->\n      <div class=\"week-numbers\" *ngIf=\"!timeOnly && showWeekNumbers\">\n        <div class=\"week-number\" *ngFor=\"let weekNumber of monthData.weekNumbers\">\n          {{weekNumber}}\n        </div>\n      </div>\n      \n      <!-- Date -->\n      <div class=\"days\" *ngIf=\"!timeOnly\">\n\n        <!-- Su Mo Tu We Th Fr Sa -->\n        <div class=\"day-of-week\"\n             *ngFor=\"let dayOfWeek of monthData.localizedDaysOfWeek; let ndx=index\"\n             [class.weekend]=\"isWeekend(ndx + monthData.firstDayOfWeek)\"\n             title=\"{{dayOfWeek.fullName}}\">\n          {{dayOfWeek.shortName}}\n        </div>\n\n        <!-- Fill up blank days for this month -->\n        <div *ngIf=\"monthData.leadingDays.length < 7\">\n          <div class=\"day\"\n              (click)=\"updateMonthData(-1)\"\n               *ngFor=\"let dayNum of monthData.leadingDays\">\n            {{dayNum}}\n          </div>\n        </div>\n\n        <div class=\"day\"\n             *ngFor=\"let dayNum of monthData.days\"\n             (click)=\"selectDateTime(toDate(dayNum))\"\n             title=\"{{monthData.year}}-{{monthData.month+1}}-{{dayNum}}\"\n             [ngClass]=\"{\n               selectable: !isDateDisabled(toDate(dayNum)),\n               selected: toDate(dayNum).getTime() === toDateOnly(selectedDate).getTime(),\n               today: toDate(dayNum).getTime() === today.getTime(),\n               weekend: isWeekend(dayNum, monthData.month)\n             }\">\n          {{dayNum}}\n        </div>\n\n        <!-- Fill up blank days for this month -->\n        <div *ngIf=\"monthData.trailingDays.length < 7\">\n          <div class=\"day\"\n               (click)=\"updateMonthData(+1)\"\n               *ngFor=\"let dayNum of monthData.trailingDays\">\n            {{dayNum}}\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"shortcuts\" *ngIf=\"showTodayShortcut\">\n      <a href=\"#\" (click)=\"selectToday()\">Today</a>\n    </div>\n\n    <!-- Hour Minute -->\n    <div class=\"time\" id=\"time\" *ngIf=\"!dateOnly\">\n      <div class=\"select-current-time\" (click)=\"selectCurrentTime()\">{{locale.currentTime}}</div>\n      <label class=\"timeLabel\">{{locale.time}}</label>\n      <span class=\"timeValue\">\n        {{convertHours(hour)}} : {{(\"0\"+minute).slice(-2)}} {{timeSuffix}}\n      </span><br/>\n      <div>\n        <label class=\"hourLabel\">{{locale.hour}}:</label>\n        <input #hours class=\"hourInput\"\n               tabindex=\"90000\"\n               (change)=\"selectDateTime()\"\n               type=\"range\"\n               min=\"{{minHour || 0}}\"\n               max=\"{{maxHour || 23}}\"\n               [(ngModel)]=\"hour\" />\n      </div>\n      <div>\n        <label class=\"minutesLabel\">{{locale.minute}}:</label>\n        <input #minutes class=\"minutesInput\"\n               tabindex=\"90000\"\n               step=\"{{minuteStep}}\"\n               (change)=\"selectDateTime()\"\n               type=\"range\" min=\"0\" max=\"59\" range=\"10\" [(ngModel)]=\"minute\"/>\n      </div>\n    </div>\n\n    <!-- Year Selector -->\n    <div class=\"year-selector\" *ngIf=\"showYearSelector\">\n      <div class=\"locale\">\n        <b>{{locale.year}}</b>\n      </div>\n      <span class=\"year\" \n        *ngFor=\"let year of yearsSelectable\"\n        (click)=\"selectYear(year)\">\n        {{year}}\n      </span>\n    </div>\n  </div>\n  ",
                    styles: [
                        "\n@keyframes slideDown {\n  0% {\n    transform:  translateY(-10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slideUp {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n.ngui-datetime-picker-wrapper {\n  position: relative;\n}\n\n.ngui-datetime-picker {\n  color: #333;\n  outline-width: 0;\n  font: normal 14px sans-serif;\n  border: 1px solid #ddd;\n  display: inline-block;\n  background: #fff;\n  animation: slideDown 0.1s ease-in-out;\n  animation-fill-mode: both;\n}\n.ngui-datetime-picker .days {\n  width: 210px; /* 30 x 7 days */\n  box-sizing: content-box;\n}\n.ngui-datetime-picker .close-button {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  right: 0;\n  z-index: 1;\n  padding: 0 5px;\n  box-sizing: content-box;\n}\n.ngui-datetime-picker .close-button:before {\n  content: 'X';\n  cursor: pointer;\n  color: #ff0000;\n}\n.ngui-datetime-picker > .month {\n  text-align: center;\n  line-height: 22px;\n  padding: 10px;\n  background: #fcfcfc;\n  text-transform: uppercase;\n  font-weight: bold;\n  border-bottom: 1px solid #ddd;\n  position: relative;\n}\n\n.ngui-datetime-picker > .month > .prev_next {\n  color: #555;\n  display: block;\n  font: normal 24px sans-serif;\n  outline: none;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  width: 25px;\n  text-align: center;\n  box-sizing: content-box;\n}\n.ngui-datetime-picker > .month > .prev_next:hover {\n  background-color: #333;\n  color: #fff;\n}\n.ngui-datetime-picker > .month > .prev_next.prev {\n  float: left;\n}\n.ngui-datetime-picker > .month > .prev_next.next {\n  float: right;\n}\n\n.ngui-datetime-picker .week-numbers-and-days {\n  text-align: center;\n}\n.ngui-datetime-picker .week-numbers {\n  line-height: 30px;\n  display: inline-block;\n  padding: 30px 0 0 0;\n  color: #ddd;\n  text-align: right;\n  width: 21px;\n  vertical-align: top;\n  box-sizing: content-box;\n}\n\n.ngui-datetime-picker  .days {\n  display: inline-block;\n  width: 210px; /* 30 x 7 */\n  text-align: center;\n  padding: 0 10px;\n  box-sizing: content-box;\n}\n.ngui-datetime-picker .days .day-of-week,\n.ngui-datetime-picker .days .day {\n  box-sizing: border-box;\n  border: 1px solid transparent;\n  width: 30px;\n  line-height: 28px;\n  float: left;\n}\n.ngui-datetime-picker .days .day-of-week {\n  font-weight: bold;\n}\n.ngui-datetime-picker .days .day-of-week.weekend {\n  color: #ccc;\n  background-color: inherit;\n}\n.ngui-datetime-picker .days .day:not(.selectable) {\n  color: #ccc;\n  cursor: default;\n}\n.ngui-datetime-picker .days .weekend {\n  color: #ccc;\n  background-color: #eee;\n}\n.ngui-datetime-picker .days .day.selectable  {\n  cursor: pointer;\n}\n.ngui-datetime-picker .days .day.selected {\n  background: gray;\n  color: #fff;\n}\n.ngui-datetime-picker .days .day:not(.selected).selectable:hover {\n  background: #eee;\n}\n.ngui-datetime-picker .days:after {\n  content: '';\n  display: block;\n  clear: left;\n  height: 0;\n}\n.ngui-datetime-picker .time {\n  position: relative;\n  padding: 10px;\n  text-transform: Capitalize;\n}\n.ngui-datetime-picker .year-selector {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #fff;\n  height: 100%;\n  overflow: auto; \n  padding: 5px;\n  z-index: 2;\n}\n.ngui-datetime-picker .year-selector .locale{\n  text-align: center;\n}\n.ngui-datetime-picker .year-selector .year {\n  display: inline-block;\n  cursor: pointer;\n  padding: 2px 5px;\n}\n.ngui-datetime-picker .year-selector .year:hover {\n  background-color: #ddd;\n}\n.ngui-datetime-picker .select-current-time {\n  position: absolute;\n  top: 1em;\n  right: 5px;\n  z-index: 1;\n  cursor: pointer;\n  color: #0000ff;\n}\n.ngui-datetime-picker .hourLabel,\n.ngui-datetime-picker .minutesLabel {\n  display: inline-block;\n  width: 45px;\n  vertical-align: top;\n  box-sizing: content-box;\n}\n.closing-layer {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(0,0,0,0);\n}\n\n.ngui-datetime-picker .shortcuts {\n  padding: 10px;\n  text-align: center;\n}\n\n.ngui-datetime-picker .shortcuts a {\n  font-family: Sans-serif;\n  margin: 0 0.5em;\n  text-decoration: none;\n}\n\n@media (max-width: 767px) {\n  .ngui-datetime-picker {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;    \n    width: auto !important;\n    animation: slideUp 0.1s ease-in-out;\n  }\n\n  .ngui-datetime-picker > .days {\n    display: block;\n    margin: 0 auto;\n  }\n\n  .closing-layer {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(0,0,0,0.2);\n  }\n}\n  "
                    ],
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    NguiDatetimePickerComponent.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: datetime_1.NguiDatetime, },
        { type: core_1.ChangeDetectorRef, },
    ];
    NguiDatetimePickerComponent.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'selectedDate': [{ type: core_1.Input, args: ['selected-date',] },],
        'hour': [{ type: core_1.Input, args: ['hour',] },],
        'minute': [{ type: core_1.Input, args: ['minute',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minuteStep',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseButton': [{ type: core_1.Input, args: ['show-close-button',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'showWeekNumbers': [{ type: core_1.Input, args: ['show-week-numbers',] },],
        'showTodayShortcut': [{ type: core_1.Input, args: ['show-today-shortcut',] },],
        'showAmPm': [{ type: core_1.Input, args: ['show-am-pm',] },],
        'selected$': [{ type: core_1.Output, args: ['selected$',] },],
        'closing$': [{ type: core_1.Output, args: ['closing$',] },],
        'hours': [{ type: core_1.ViewChild, args: ['hours',] },],
        'minutes': [{ type: core_1.ViewChild, args: ['minutes',] },],
    };
    return NguiDatetimePickerComponent;
}());
exports.NguiDatetimePickerComponent = NguiDatetimePickerComponent;
//# sourceMappingURL=datetime-picker.component.js.map

/***/ }),

/***/ 1193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-calendar',
        template: __webpack_require__(1312),
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(20);
var datetime_picker_component_1 = __webpack_require__(1152);
var datetime_1 = __webpack_require__(1146);
function isInteger(value) {
    if (Number.isInteger) {
        return Number.isInteger(value);
    }
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
}
;
function isNaN(value) {
    if (Number.isNaN) {
        return Number.isNaN(value);
    }
    return value !== value;
}
;
/**
 * If the given string is not a valid date, it defaults back to today
 */
var NguiDatetimePickerDirective = (function () {
    function NguiDatetimePickerDirective(resolver, viewContainerRef, parent) {
        var _this = this;
        this.resolver = resolver;
        this.viewContainerRef = viewContainerRef;
        this.parent = parent;
        this.closeOnSelect = true;
        this.showTodayShortcut = false;
        this.isDraggable = true;
        this.ngModelChange = new core_1.EventEmitter();
        this.valueChanged$ = new core_1.EventEmitter();
        this.popupClosed$ = new core_1.EventEmitter();
        this.userModifyingValue = false;
        this.handleKeyDown = function (event) {
            _this.userModifyingValue = true;
        };
        /* input element string value is changed */
        this.inputElValueChanged = function (date) {
            _this.setInputElDateValue(date);
            _this.el.value = date.toString();
            if (_this.ctrl) {
                _this.ctrl.patchValue(_this.el.value);
            }
            _this.ngModel = _this.el['dateValue'];
            if (_this.ngModel) {
                _this.ngModel.toString = function () { return _this.el.value; };
                _this.ngModelChange.emit(_this.ngModel);
            }
        };
        //show datetimePicker element below the current element
        this.showDatetimePicker = function (event) {
            if (_this.componentRef) {
                return;
            }
            var factory = _this.resolver.resolveComponentFactory(datetime_picker_component_1.NguiDatetimePickerComponent);
            _this.componentRef = _this.viewContainerRef.createComponent(factory);
            _this.nguiDatetimePickerEl = _this.componentRef.location.nativeElement;
            _this.nguiDatetimePickerEl.setAttribute('tabindex', '32767');
            _this.nguiDatetimePickerEl.setAttribute('draggable', String(_this.isDraggable));
            _this.nguiDatetimePickerEl.addEventListener('mousedown', function (event) {
                _this.clickedDatetimePicker = true;
            });
            _this.nguiDatetimePickerEl.addEventListener('mouseup', function (event) {
                _this.clickedDatetimePicker = false;
            });
            //This is for material design. MD has click event to make blur to happen
            _this.nguiDatetimePickerEl.addEventListener('click', function (event) {
                event.stopPropagation();
            });
            _this.nguiDatetimePickerEl.addEventListener('blur', function (event) {
                _this.hideDatetimePicker();
            });
            _this.nguiDatetimePickerEl.addEventListener('dragstart', _this.drag_start, false);
            document.body.addEventListener('dragover', _this.drag_over, false);
            document.body.addEventListener('drop', _this.drop, false);
            var component = _this.componentRef.instance;
            component.defaultValue = _this.defaultValue || _this.el['dateValue'];
            component.dateFormat = _this.dateFormat;
            component.dateOnly = _this.dateOnly;
            component.timeOnly = _this.timeOnly;
            component.minuteStep = _this.minuteStep;
            component.minDate = _this.minDate;
            component.maxDate = _this.maxDate;
            component.minHour = _this.minHour;
            component.maxHour = _this.maxHour;
            component.disabledDates = _this.disabledDates;
            component.showCloseButton = _this.closeOnSelect === false;
            component.showCloseLayer = _this.showCloseLayer;
            component.showTodayShortcut = _this.showTodayShortcut;
            component.showWeekNumbers = _this.showWeekNumbers;
            _this.styleDatetimePicker();
            component.selected$.subscribe(_this.dateSelected);
            component.closing$.subscribe(function () {
                _this.hideDatetimePicker();
            });
            //Hack not to fire tab keyup event
            // this.justShown = true;
            // setTimeout(() => this.justShown = false, 100);
        };
        this.dateSelected = function (date) {
            _this.el.tagName === 'INPUT' && _this.inputElValueChanged(date);
            _this.valueChanged$.emit(date);
            if (_this.closeOnSelect !== false) {
                _this.hideDatetimePicker();
            }
            else {
                _this.nguiDatetimePickerEl.focus();
            }
        };
        this.hideDatetimePicker = function (event) {
            if (_this.clickedDatetimePicker) {
                return false;
            }
            else {
                setTimeout(function () {
                    if (_this.componentRef) {
                        _this.componentRef.destroy();
                        _this.componentRef = undefined;
                    }
                    _this.popupClosed$.emit(true);
                });
            }
            event && event.stopPropagation();
        };
        this.getDate = function (arg) {
            var date = arg;
            if (typeof arg === 'string') {
                date = datetime_1.NguiDatetime.parseDate(arg, _this.parseFormat, _this.dateFormat);
            }
            return date;
        };
        this.drag_start = function (event) {
            if (document.activeElement.tagName == 'INPUT') {
                event.preventDefault();
                return false; // block dragging
            }
            var style = window.getComputedStyle(event.target, null);
            event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX)
                + ','
                + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
        };
        this.drop = function (event) {
            var offset = event.dataTransfer.getData("text/plain").split(',');
            _this.nguiDatetimePickerEl.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
            _this.nguiDatetimePickerEl.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
            _this.nguiDatetimePickerEl.style.bottom = '';
            event.preventDefault();
            return false;
        };
        this.el = this.viewContainerRef.element.nativeElement;
    }
    /**
     * convert defaultValue, minDate, maxDate, minHour, and maxHour to proper types
     */
    NguiDatetimePickerDirective.prototype.normalizeInput = function () {
        if (this.defaultValue && typeof this.defaultValue === 'string') {
            var d = datetime_1.NguiDatetime.parseDate(this.defaultValue);
            this.defaultValue = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minDate && typeof this.minDate == 'string') {
            var d = datetime_1.NguiDatetime.parseDate(this.minDate);
            this.minDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.maxDate && typeof this.maxDate == 'string') {
            var d = datetime_1.NguiDatetime.parseDate(this.maxDate);
            this.maxDate = isNaN(d.getTime()) ? new Date() : d;
        }
        if (this.minHour) {
            if (this.minHour instanceof Date) {
                this.minHour = this.minHour.getHours();
            }
            else {
                var hour = Number(this.minHour.toString());
                if (!isInteger(hour) || hour > 23 || hour < 0) {
                    this.minHour = undefined;
                }
            }
        }
        if (this.maxHour) {
            if (this.maxHour instanceof Date) {
                this.maxHour = this.maxHour.getHours();
            }
            else {
                var hour = Number(this.maxHour.toString());
                if (!isInteger(hour) || hour > 23 || hour < 0) {
                    this.maxHour = undefined;
                }
            }
        }
    };
    NguiDatetimePickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.parent && this.formControlName) {
            if (this.parent["form"]) {
                this.ctrl = this.parent["form"].get(this.formControlName);
            }
            else if (this.parent["name"]) {
                var formDir = this.parent.formDirective;
                if (formDir instanceof forms_1.FormGroupDirective && formDir.form.get(this.parent["name"])) {
                    this.ctrl = formDir.form.get(this.parent["name"]).get(this.formControlName);
                }
            }
            if (this.ctrl) {
                this.sub = this.ctrl.valueChanges.subscribe(function (date) {
                    _this.setInputElDateValue(date);
                    _this.updateDatepicker();
                });
            }
        }
        this.normalizeInput();
        //wrap this element with a <div> tag, so that we can position dynamic element correctly
        var wrapper = document.createElement("div");
        wrapper.className = 'ngui-datetime-picker-wrapper';
        this.el.parentElement.insertBefore(wrapper, this.el.nextSibling);
        wrapper.appendChild(this.el);
        if (this.ngModel && this.ngModel.getTime) {
            this.ngModel.toString = function () { return datetime_1.NguiDatetime.formatDate(_this.ngModel, _this.dateFormat, _this.dateOnly); };
        }
        setTimeout(function () {
            if (_this.el.tagName === 'INPUT') {
                _this.inputElValueChanged(_this.el.value); //set this.el.dateValue and reformat this.el.value
            }
            if (_this.ctrl) {
                _this.ctrl.markAsPristine();
            }
        });
    };
    NguiDatetimePickerDirective.prototype.ngAfterViewInit = function () {
        // if this element is not an input tag, move dropdown after input tag
        // so that it displays correctly
        this.inputEl = this.el.tagName === "INPUT" ?
            this.el : this.el.querySelector("input");
        if (this.inputEl) {
            this.inputEl.addEventListener('focus', this.showDatetimePicker);
            this.inputEl.addEventListener('blur', this.hideDatetimePicker);
            this.inputEl.addEventListener('keydown', this.handleKeyDown);
        }
    };
    NguiDatetimePickerDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var date;
        if (changes && changes['ngModel']) {
            date = changes['ngModel'].currentValue;
            if (date && typeof date !== 'string') {
                date.toString = function () { return datetime_1.NguiDatetime.formatDate(date, _this.dateFormat, _this.dateOnly); };
                this.setInputElDateValue(date);
                this.updateDatepicker();
            }
            else if (date && typeof date === 'string') {
                /** if program assigns a string value, then format to date later */
                if (!this.userModifyingValue) {
                    setTimeout(function () {
                        var dt = _this.getDate(date);
                        dt.toString = function () { return datetime_1.NguiDatetime.formatDate(dt, _this.dateFormat, _this.dateOnly); };
                        _this.ngModel = dt;
                        _this.inputEl.value = '' + dt;
                    });
                }
            }
        }
        this.userModifyingValue = false;
    };
    NguiDatetimePickerDirective.prototype.updateDatepicker = function () {
        if (this.componentRef) {
            var component = this.componentRef.instance;
            component.defaultValue = this.el['dateValue'];
        }
    };
    NguiDatetimePickerDirective.prototype.setInputElDateValue = function (date) {
        if (typeof date === 'string' && date) {
            this.el['dateValue'] = this.getDate(date);
        }
        else if (typeof date === 'object') {
            this.el['dateValue'] = date;
        }
        else if (typeof date === 'undefined') {
            this.el['dateValue'] = null;
        }
        if (this.ctrl) {
            this.ctrl.markAsDirty();
        }
    };
    NguiDatetimePickerDirective.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    NguiDatetimePickerDirective.prototype.elementIn = function (el, containerEl) {
        while (el = el.parentNode) {
            if (el === containerEl)
                return true;
        }
        return false;
    };
    NguiDatetimePickerDirective.prototype.styleDatetimePicker = function () {
        var _this = this;
        // setting position, width, and height of auto complete dropdown
        var thisElBCR = this.el.getBoundingClientRect();
        // this.nguiDatetimePickerEl.style.minWidth      = thisElBCR.width + 'px';
        this.nguiDatetimePickerEl.style.position = 'absolute';
        this.nguiDatetimePickerEl.style.zIndex = '1000';
        this.nguiDatetimePickerEl.style.left = '0';
        this.nguiDatetimePickerEl.style.transition = 'height 0.3s ease-in';
        this.nguiDatetimePickerEl.style.visibility = 'hidden';
        setTimeout(function () {
            var thisElBcr = _this.el.getBoundingClientRect();
            var nguiDatetimePickerElBcr = _this.nguiDatetimePickerEl.getBoundingClientRect();
            if (thisElBcr.bottom + nguiDatetimePickerElBcr.height > window.innerHeight) {
                _this.nguiDatetimePickerEl.style.bottom =
                    (thisElBcr.bottom - window.innerHeight + 15) + 'px';
            }
            else {
                // otherwise, show below
                _this.nguiDatetimePickerEl.style.top = thisElBcr.height + 'px';
            }
            _this.nguiDatetimePickerEl.style.visibility = 'visible';
        });
    };
    ;
    NguiDatetimePickerDirective.prototype.drag_over = function (event) {
        event.preventDefault();
        return false;
    };
    NguiDatetimePickerDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ngui-datetime-picker]',
                    providers: [datetime_1.NguiDatetime]
                },] },
    ];
    /** @nocollapse */
    NguiDatetimePickerDirective.ctorParameters = [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.ViewContainerRef, },
        { type: forms_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf },] },
    ];
    NguiDatetimePickerDirective.propDecorators = {
        'dateFormat': [{ type: core_1.Input, args: ['date-format',] },],
        'parseFormat': [{ type: core_1.Input, args: ['parse-format',] },],
        'dateOnly': [{ type: core_1.Input, args: ['date-only',] },],
        'timeOnly': [{ type: core_1.Input, args: ['time-only',] },],
        'closeOnSelect': [{ type: core_1.Input, args: ['close-on-select',] },],
        'defaultValue': [{ type: core_1.Input, args: ['default-value',] },],
        'minuteStep': [{ type: core_1.Input, args: ['minute-step',] },],
        'minDate': [{ type: core_1.Input, args: ['min-date',] },],
        'maxDate': [{ type: core_1.Input, args: ['max-date',] },],
        'minHour': [{ type: core_1.Input, args: ['min-hour',] },],
        'maxHour': [{ type: core_1.Input, args: ['max-hour',] },],
        'disabledDates': [{ type: core_1.Input, args: ['disabled-dates',] },],
        'showCloseLayer': [{ type: core_1.Input, args: ['show-close-layer',] },],
        'showTodayShortcut': [{ type: core_1.Input, args: ['show-today-shortcut',] },],
        'showWeekNumbers': [{ type: core_1.Input, args: ['show-week-numbers',] },],
        'formControlName': [{ type: core_1.Input },],
        'isDraggable': [{ type: core_1.Input, args: ['is-draggable',] },],
        'ngModel': [{ type: core_1.Input, args: ['ngModel',] },],
        'ngModelChange': [{ type: core_1.Output, args: ['ngModelChange',] },],
        'valueChanged$': [{ type: core_1.Output, args: ['valueChanged',] },],
        'popupClosed$': [{ type: core_1.Output, args: ['popupClosed',] },],
    };
    return NguiDatetimePickerDirective;
}());
exports.NguiDatetimePickerDirective = NguiDatetimePickerDirective;
//# sourceMappingURL=datetime-picker.directive.js.map

/***/ }),

/***/ 1240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_events_service__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalendarEvent = (function () {
    function CalendarEvent(eventType, active, title, description, start, end, createTime, lastUpdateTime, priority, id) {
        this.eventType = eventType;
        this.active = active;
        this.title = title;
        this.description = description;
        this.start = start;
        this.end = end;
        this.createTime = createTime;
        this.lastUpdateTime = lastUpdateTime;
        this.priority = priority;
        this.id = id;
    }
    return CalendarEvent;
}());
var CalendarWidgetComponent = (function () {
    function CalendarWidgetComponent(el, router, route, eventsService, fb, cdr) {
        this.el = el;
        this.router = router;
        this.route = route;
        this.eventsService = eventsService;
        this.fb = fb;
        this.cdr = cdr;
        this.properties = {};
        this.CalenderInputdefaultValue = new Date();
        this.CalenderInputEnddefaultValue = new Date();
        // public period = 'Showing';
        this.calendarView = 'month';
        this.createEventSubmit = false;
        this.updateEventSubmit = false;
        this.getallEvents = {};
        this.priorityOptions = [];
        this.calendarFilterDropDownToggle = '';
        this.activeEvents = false;
        this.propertySelected = false;
        // add event data
        this.eventAddStartEndTimeComparision = false;
        this.eventaddStartValidation = false;
        this.eventaddEndValidation = false;
        this.updateStartEndComparision = false;
        this.eventUpdateStartValidation = false;
        this.eventUpdateEndValidation = false;
        this.prioritySelectedValues = [];
        this.eventTypeSelectedValues = [];
        // modal wizard form steps
        this.steps = [
            {
                key: 'step1',
                title: 'Event information',
                valid: false,
                submitted: false,
            },
            {
                key: 'step2',
                title: 'Event Properties',
                valid: false,
                submitted: false,
            },
            {
                key: 'step3',
                title: 'Save Event',
                valid: true,
                submitted: false,
            },
        ];
        this.newProperty = {
            newPropertyKey: 'data',
            newPropertyValue: 'null'
        };
        this.options = {
            mode: 'inline',
            disabled: false,
            inline: true,
            emptytext: 'edit'
        };
        this.activeStep = this.steps[0];
        // priorities and color classes
        this.colorClassNames = [
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white',
                title: 'LOW'
            }, {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white',
                title: 'NORMAL'
            }, {
                bg: 'bg-color-red',
                txt: 'txt-color-white',
                title: 'HIGH'
            }
        ];
        this.todayDate = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD');
        this.PropertySelectData = '';
        this.eventType = '';
        // create form validations
        this.complexCreateEventForm = fb.group({
            createEventTitle: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)])],
            createEventDescription: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(1000)])],
            createEventStartValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            createEventEndValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            createEventType: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
        this.createEventTitle = this.complexCreateEventForm.controls['createEventTitle'];
        this.createEventDescription = this.complexCreateEventForm.controls['createEventDescription'];
        this.createEventStartValid = this.complexCreateEventForm.controls['createEventStartValid'];
        this.createEventEndValid = this.complexCreateEventForm.controls['createEventEndValid'];
        this.createEventType = this.complexCreateEventForm.controls['createEventType'];
        // update form validations
        this.complexupdateEventForm = fb.group({
            updateTitleValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(32)])],
            updateDescriptionValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(1000)])],
            updateEventStartValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            updateEventEndValid: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            updateEventType: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
        this.updateTitleValid = this.complexupdateEventForm.controls['updateTitleValid'];
        this.updateDescriptionValid = this.complexupdateEventForm.controls['updateDescriptionValid'];
        this.updateEventStartValid = this.complexupdateEventForm.controls['updateEventStartValid'];
        this.updateEventEndValid = this.complexupdateEventForm.controls['updateEventEndValid'];
        this.updateEventType = this.complexupdateEventForm.controls['updateEventType'];
        this.createPropertiesForm = fb.group({
            CreatePkey: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            CreatePvalue: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
        this.CreatePkey = this.createPropertiesForm.controls['CreatePkey'];
        this.CreatePvalue = this.createPropertiesForm.controls['CreatePvalue'];
        // dropdown prioritites options
        this.priorityOptions = [
            { id: 1, name: 'Low', value: 'LOW' },
            { id: 2, name: 'Normal', value: 'NORMAL' },
            { id: 3, name: 'High', value: 'HIGH' },
        ];
        // dropdown event type options
        this.Typeevents = [
            { id: 1, name: 'Meeting', value: 'fa-clock-o' },
            { id: 2, name: 'Event', value: 'fa-calendar-o' },
            { id: 3, name: 'Seminar', value: 'fa-clipboard' },
            { id: 6, name: 'Conference', value: 'fa-user' },
            { id: 7, name: 'Team Building', value: 'fa-cubes' },
            { id: 8, name: 'Product Launch', value: 'fa-folder-o' },
            { id: 9, name: 'Trade Shows', value: 'fa-laptop' },
            { id: 10, name: 'Birthday', value: 'fa-gift' },
            { id: 11, name: 'Leave', value: 'fa-pencil-square-o' },
        ];
    }
    CalendarWidgetComponent.prototype.addPropertyAttributes = function () {
        this.newProperty.newPropertyKey = '';
        this.newProperty.newPropertyValue = '';
        if (this.showPropertyAttributes) {
            this.showPropertyAttributes = false;
        }
        else {
            this.showPropertyAttributes = true;
        }
    };
    CalendarWidgetComponent.prototype.submitPropertyData = function (keyData, valueData) {
        var obj = this.properties;
        var name = keyData;
        obj[name] = valueData;
        this.showPropertyAttributes = false;
        keyData = null;
        valueData = null;
    };
    CalendarWidgetComponent.prototype.deleteProperty = function (propertyKey) {
        delete this.properties[propertyKey];
    };
    CalendarWidgetComponent.prototype.prevStep = function () {
        var idx = this.steps.indexOf(this.activeStep);
        if (idx > 0) {
            this.activeStep = this.steps[idx - 1];
        }
    };
    CalendarWidgetComponent.prototype.nextStepFunction = function (step) {
        var idx = this.steps.indexOf(step);
        this.activeStep = null;
        while (!this.activeStep) {
            idx = idx == this.steps.length - 1 ? 0 : idx + 1;
            if (!this.steps[idx].valid) {
                this.activeStep = this.steps[idx];
            }
        }
    };
    CalendarWidgetComponent.prototype.nextStep = function () {
        if (this.complexCreateEventForm.valid || this.complexupdateEventForm.valid) {
            this.activeStep.submitted = true;
            if (this.activeStep.key == 'step1') {
                if (this.popoverAddEvent.isShown) {
                    this.addEventData();
                }
                else if (this.popoverupdateEvent.isShown) {
                    this.updateEvent();
                }
                if (this.steps[0].valid) {
                    this.nextStepFunction(this.activeStep);
                }
            }
            else if (this.activeStep.key == 'step2') {
                this.activeStep = null;
                this.activeStep = this.steps[2];
            }
        }
        else {
            this.formValidate = true;
            this.complexCreateEventForm != this.complexCreateEventForm;
        }
    };
    // properties select
    CalendarWidgetComponent.prototype.onPropertySelect = function (event) {
        this.propertySelected = true;
    };
    // add event popover event declaration
    CalendarWidgetComponent.prototype.showChildModal = function () {
        this.popoverAddEvent.show();
    };
    CalendarWidgetComponent.prototype.hideChildModal = function () {
        this.popoverAddEvent.hide();
    };
    // update event popover event declaration
    CalendarWidgetComponent.prototype.showUpdateChildModal = function () {
        this.popoverupdateEvent.show();
    };
    CalendarWidgetComponent.prototype.hideUpdateChildModal = function () {
        this.popoverupdateEvent.hide();
    };
    // caleandar functionality
    CalendarWidgetComponent.prototype.render = function () {
        var _this = this;
        this.$calendarRef = $('#calendar', this.el.nativeElement);
        this.calendar = this.$calendarRef.fullCalendar({
            lang: 'en',
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            droppable: true,
            eventLimit: true,
            views: {
                agenda: {
                    eventLimit: 6 // adjust to 6 only for agendaWeek/agendaDay
                }
            },
            eventConstraint: {
                start: __WEBPACK_IMPORTED_MODULE_4_moment__().format(),
                end: '2400-01-01' // hard coded goodness unfortunately
            },
            header: {
                left: 'title',
                center: 'prev, next, today',
                right: 'month, agendaWeek, agendaDay, listMonth, listWeek' // month, agendaDay,
            },
            // showing all the events in calender
            events: function (startTime, endTime, timezone, callback) {
                if (_this.filterEventsObject && (_this.filterEventsObject.priorities.length ||
                    _this.filterEventsObject.eventTypes.length || _this.filterEventsObject.active)) {
                    _this.eventsService.getFilterEvents(_this.filterEventsObject).subscribe(function (response) {
                        var manuplatedData = _this.manuplateResponseData(response);
                        callback(manuplatedData.data);
                    }, function (error) {
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                    });
                }
                else {
                    _this.eventsService.getAllEvent().subscribe(function (response) {
                        var manuplatedData = _this.manuplateResponseData(response);
                        callback(manuplatedData.data);
                    }, function (error) {
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                    });
                }
            },
            timeFormat: 'hh:mma',
            textColor: '#fff',
            defaultView: this.changeView('Showing', 'notSelected'),
            // modifications in view calnders like css
            eventRender: function (event, element, icon) {
                element.find('.fc-list-item-time').css({ 'width': '30%' });
                element.find('.fc-scroller').css({ 'height': '100%' });
                if (event) {
                    element.find('.fc-list-item-marker').closest('td').remove();
                }
                if (event.eventType) {
                    element.find('.fc-title').css({ 'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'max-width': '100%' });
                    element.find('.fc-time').append('<i class="air air-top-right fa ' + event.eventType + '"></i>');
                    element.find('.fc-list-item-marker').append('<i class="fa ' + event.eventType + '"></i>');
                }
                if (event.description != '') {
                    element.find('.fc-event-title').append('<br/><strong>' + +'</strong>');
                }
            },
            eventAfterAllRender: function (view) {
            },
            // click on calendar to add event
            dayClick: function (date, jsEvent, view) {
                var check = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format('YYYY-MM-DD');
                var today = __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYY-MM-DD');
                _this.formValidate = false;
                if (check >= today) {
                    _this.activeStep = _this.steps[0];
                    _this.description = '';
                    _this.title = '';
                    _this.properties = {};
                    _this.activeColorClass = _this.colorClassNames[0];
                    _this.eventType = '';
                    _this.eventAddStartEndTimeComparision = false;
                    _this.eventaddStartValidation = false;
                    _this.eventaddEndValidation = false;
                    _this.eventStartDate = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format();
                    _this.CalenderInputdefaultValue = new Date(_this.eventStartDate);
                    if (_this.calendarView === 'Showing' || _this.calendarView === 'month' || _this.calendarView === 'Month') {
                        _this.eventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.eventStartDate).add(23, 'h').add(59, 'm').format();
                        _this.CalenderInputEnddefaultValue = new Date(_this.eventEnddate);
                    }
                    else if (_this.calendarView === 'agendaWeek' || _this.calendarView === 'Week') {
                        _this.eventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.eventStartDate).add(11, 'h').add(59, 'm').format();
                        _this.CalenderInputEnddefaultValue = new Date(_this.eventEnddate);
                    }
                    else if (_this.calendarView === 'agendaDay' || _this.calendarView === 'Day') {
                        _this.eventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(_this.eventStartDate).add(1, 'h').format();
                        _this.CalenderInputEnddefaultValue = new Date(_this.eventEnddate);
                    }
                    _this.active = true;
                    _this.popoverAddEvent.show();
                    _this.cdr.detectChanges();
                }
            },
            // update event
            eventClick: function (calEvent, jsEvent, view) {
                if (calEvent.title === 'Arrivals') {
                    _this.updateDisableFields = true;
                    _this.complexupdateEventForm.controls['updateEventType'].disable();
                    _this.complexupdateEventForm.controls['updateEventStartValid'].disable();
                    _this.complexupdateEventForm.controls['updateEventEndValid'].disable();
                }
                else {
                    _this.updateDisableFields = false;
                    _this.complexupdateEventForm.controls['updateEventType'].enable();
                    _this.complexupdateEventForm.controls['updateEventStartValid'].enable();
                    _this.complexupdateEventForm.controls['updateEventEndValid'].enable();
                }
                var check = __WEBPACK_IMPORTED_MODULE_4_moment__(calEvent.start).format();
                var today = __WEBPACK_IMPORTED_MODULE_4_moment__().format();
                if (check >= today) {
                    _this.activeStep = _this.steps[0];
                    _this.properties = JSON.parse(calEvent.properties);
                    _this.updateId = calEvent.id;
                    _this.updateActive = true;
                    _this.updateTitle = calEvent.title;
                    _this.updateCreateTime = calEvent.createTime;
                    _this.updateDescription = calEvent.description;
                    _this.updateStartEndComparision = false;
                    _this.eventUpdateStartValidation = false;
                    _this.eventUpdateEndValidation = false;
                    // priority select
                    if (calEvent.priority === 'NORMAL') {
                        _this.activeColorClass = _this.colorClassNames[1];
                    }
                    else if (calEvent.priority === 'HIGH') {
                        _this.activeColorClass = _this.colorClassNames[2];
                    }
                    else {
                        _this.activeColorClass = _this.colorClassNames[0];
                    }
                    // icons select
                    for (var i = 0; i < _this.Typeevents.length; i++) {
                        if (_this.Typeevents[i].value === calEvent.eventType) {
                            _this.eventType = calEvent.eventType;
                            break;
                        }
                    }
                    _this.updatePriority = calEvent.priority;
                    _this.updateEventStartdate = __WEBPACK_IMPORTED_MODULE_4_moment__(calEvent.start).local().format();
                    _this.CalenderInputdefaultValue = new Date(_this.updateEventStartdate);
                    if (calEvent.end === null) {
                        _this.updateEventEnddate = _this.updateEventStartdate;
                    }
                    else {
                        _this.updateEventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(calEvent.end).local().format();
                    }
                    _this.CalenderInputEnddefaultValue = new Date(_this.updateEventEnddate);
                    _this.popoverupdateEvent.show();
                    _this.cdr.detectChanges();
                }
            },
            eventDragStart: function (event, jsEvent, ui, view) {
                console.log('Start dragg Event');
            },
            eventDragStop: function (event, jsEvent, ui, view) {
                console.log('stop drag Event');
            },
            eventAllow: function (dropLocation, draggedEvent) {
                var check = __WEBPACK_IMPORTED_MODULE_4_moment__(draggedEvent.start).format();
                var today = __WEBPACK_IMPORTED_MODULE_4_moment__().format();
                if (check > today) {
                    return true;
                }
                else {
                    return false;
                }
            },
            eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
                // Allowing the dragging event for non geofence events
                if (event.title != 'Arrivals') {
                    var date = new Date();
                    var updateTime = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format();
                    if (event.end === null) {
                        event.end = event.start;
                    }
                    var StartDate = __WEBPACK_IMPORTED_MODULE_4_moment__(event.start.format()).local().format();
                    var endDate = __WEBPACK_IMPORTED_MODULE_4_moment__(event.end).local().format();
                    // let splitDate = StartDate.split('+');
                    // let minutes = moment.duration(splitDate[1]).asMinutes();
                    // let newStartDate = moment(StartDate).subtract(minutes, 'minutes').format();
                    // let newEndDate = moment(endDate).subtract(minutes, 'minutes').format();
                    var draggedEvent = new CalendarEvent(event.eventType, event.active, event.title, event.description, StartDate, // newStartDate
                    endDate, // newEndDate
                    event.createTime, updateTime, event.priority, event.id);
                    var draggedEventDetails = draggedEvent;
                    if (Object.keys(event.properties).length != 0) {
                        draggedEventDetails.properties = event.properties;
                    }
                    _this.eventsService.updateEvent(event.id, draggedEventDetails).subscribe(function (data) {
                        _this.$calendarRef.fullCalendar('refetchEvents');
                    }, function (error) {
                        _this.serviceErrorResponse = error.exception;
                        _this.serviceErrorData = true;
                    });
                }
                else {
                    revertFunc();
                }
            }
        });
        $('.fc-header-right, .fc-header-center', this.$calendarRef).hide();
        $('.fc-left', this.$calendarRef).addClass('fc-header-title');
        $('.fc-today', this.$calendarRef).addClass('fc-state-highlight');
        $('.fc-more-popover', this.$calendarRef).addClass('fc-widget-content');
        // local storage custom view loaders
    };
    // modifying response data
    CalendarWidgetComponent.prototype.manuplateResponseData = function (response) {
        this.getallEvents = response;
        for (var i = 0; i < this.getallEvents.data.length; i++) {
            if (this.getallEvents.data[i].hasOwnProperty('start') ||
                this.getallEvents.data[i].hasOwnProperty('end') || this.getallEvents.data[i].hasOwnProperty('createTime') ||
                this.getallEvents.data[i].hasOwnProperty('lastUpdateTime')) {
                //  moment.parseZone(this.getallEvents.data[i].lastUpdateTime).local().format();
                this.getallEvents.data[i].start = __WEBPACK_IMPORTED_MODULE_4_moment__(this.getallEvents.data[i].start).format();
                this.getallEvents.data[i].end = __WEBPACK_IMPORTED_MODULE_4_moment__(this.getallEvents.data[i].end).format();
                ;
                this.getallEvents.data[i].createTime = __WEBPACK_IMPORTED_MODULE_4_moment__(this.getallEvents.data[i].createTime).format();
                this.getallEvents.data[i].lastUpdateTime = __WEBPACK_IMPORTED_MODULE_4_moment__(this.getallEvents.data[i].lastUpdateTime).format();
            }
            // event custom colors based on priority
            if (this.getallEvents.data[i].hasOwnProperty('priority')) {
                if (this.getallEvents.data[i].priority === 'LOW') {
                    this.getallEvents.data[i].className = 'bg-color-blue txt-color-white calendar-EventFont';
                }
                else if (this.getallEvents.data[i].priority === 'NORMAL') {
                    this.getallEvents.data[i].className = 'bg-color-greenLight txt-color-white calendar-EventFont';
                }
                else if (this.getallEvents.data[i].priority === 'HIGH') {
                    this.getallEvents.data[i].className = 'bg-color-red txt-color-white calendar-EventFont';
                }
            }
        }
        return this.getallEvents;
    };
    CalendarWidgetComponent.prototype.changeView = function (viewperiod, selectStatus) {
        if (selectStatus === 'notSelected') {
            var calendarViewData = localStorage.getItem('CalendarView');
            if (calendarViewData != null && calendarViewData != '') {
                viewperiod = calendarViewData;
            }
            else {
                viewperiod = 'month';
            }
        }
        this.calendarView = viewperiod;
        if (selectStatus === 'selected') {
            this.calendar.fullCalendar('changeView', viewperiod);
        }
        localStorage.setItem('CalendarView', viewperiod);
        return this.calendarView;
    };
    CalendarWidgetComponent.prototype.next = function () {
        $('.fc-next-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.prev = function () {
        $('.fc-prev-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.today = function () {
        $('.fc-today-button', this.el.nativeElement).click();
    };
    // setting priority color
    CalendarWidgetComponent.prototype.setColorClass = function (colorClassName) {
        this.activeColorClass = colorClassName;
        this.createPriority = colorClassName.title;
        this.updatePriority = colorClassName.title;
    };
    CalendarWidgetComponent.prototype.addEventData = function () {
        this.cdr.detectChanges();
        this.eventAddStartEndTimeComparision = false;
        if (this.createPriority == undefined || this.createPriority == '') {
            this.createPriority = this.colorClassNames[0].title;
        }
        if (!__WEBPACK_IMPORTED_MODULE_4_moment__(this.eventStartDate).isValid()) {
            this.eventaddStartValidation = true;
        }
        else if (!__WEBPACK_IMPORTED_MODULE_4_moment__(this.eventEnddate).isValid()) {
            this.eventaddStartValidation = false;
            this.eventaddEndValidation = true;
        }
        else {
            this.eventaddStartValidation = false;
            this.eventaddEndValidation = false;
            this.eventStartDate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.eventStartDate).format();
            this.eventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.eventEnddate).format();
            if (this.eventStartDate < this.eventEnddate) {
                this.eventAddStartEndTimeComparision = false;
                var date = new Date();
                this.createTime = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format();
                // this.updateEventEnddate=this.updateEventStartdate;
                this.lastUpdateTime = this.createTime;
                var event = new CalendarEvent(this.eventType, this.active, this.title, this.description, this.eventStartDate, this.eventEnddate, this.createTime, this.lastUpdateTime, this.createPriority);
                this.steps[0].valid = true;
                this.createEventData = event;
            }
            else {
                this.eventAddStartEndTimeComparision = true;
            }
        }
    };
    // click button add event on modal page
    CalendarWidgetComponent.prototype.AddEventDetailsWithProperties = function () {
        var _this = this;
        if (Object.keys(this.properties).length != 0) {
            this.createEventData.properties = JSON.stringify(this.properties);
        }
        this.eventsService.addEvent(this.createEventData).subscribe(function (data) {
            _this.popoverAddEvent.hide();
            _this.$calendarRef.fullCalendar('refetchEvents');
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
        this.description = '';
        this.title = '';
        this.eventEnddate = '';
        this.createPriority = '';
        this.eventType = '';
        this.activeColorClass = this.colorClassNames[0];
    };
    // update event data
    CalendarWidgetComponent.prototype.updateEvent = function () {
        this.updateStartEndComparision = false;
        if (!__WEBPACK_IMPORTED_MODULE_4_moment__(this.updateEventStartdate).isValid()) {
            this.eventUpdateStartValidation = true;
        }
        else if (!__WEBPACK_IMPORTED_MODULE_4_moment__(this.updateEventEnddate).isValid()) {
            this.eventUpdateStartValidation = false;
            this.eventUpdateEndValidation = true;
        }
        else {
            this.eventUpdateStartValidation = false;
            this.eventUpdateEndValidation = false;
            this.updateEventStartdate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.updateEventStartdate).format();
            this.updateEventEnddate = __WEBPACK_IMPORTED_MODULE_4_moment__(this.updateEventEnddate).format();
            if (this.updateEventStartdate < this.updateEventEnddate) {
                this.updateStartEndComparision = false;
                var date = new Date();
                this.updateLastUpdateTime = __WEBPACK_IMPORTED_MODULE_4_moment__(date).format();
                var updateEvent = new CalendarEvent(this.eventType, this.updateActive, this.updateTitle, this.updateDescription, this.updateEventStartdate, this.updateEventEnddate, this.updateCreateTime, this.updateLastUpdateTime, this.updatePriority, this.updateId);
                this.updateEventData = updateEvent;
                this.steps[0].valid = true;
            }
            else {
                this.updateStartEndComparision = true;
            }
        }
    };
    // click button update event on modal page
    CalendarWidgetComponent.prototype.updateEventDetailsProperties = function () {
        var _this = this;
        if (Object.keys(this.properties).length != 0) {
            this.updateEventData.properties = JSON.stringify(this.properties);
        }
        this.eventsService.updateEvent(this.updateEventData.id, this.updateEventData).subscribe(function (data) {
            _this.popoverupdateEvent.hide();
            _this.$calendarRef.fullCalendar('refetchEvents');
        }, function (error) {
            _this.serviceErrorResponse = error.exception;
            _this.serviceErrorData = true;
        });
        this.description = '';
        this.title = '';
        this.updatePriority = '';
        this.eventType = '';
        this.activeColorClass = this.colorClassNames[0];
    };
    // filter setting icons click button
    CalendarWidgetComponent.prototype.openFilterDropDown = function () {
        this.calendarFilterDropDownToggle = 'open';
    };
    // filter dropdown submit button
    CalendarWidgetComponent.prototype.onFilterEventSubmit = function () {
        // closing the dropdwon
        this.calendarFilterDropDownToggle = '';
        //changing the calendar view by caling changeView function
        this.changeView(this.calendarView, 'selected');
        // priorities values and event type values are binded in ngAfterViewInit()
        var filterSubmitData = {
            'priorities': this.prioritySelectedValues,
            'eventTypes': this.eventTypeSelectedValues,
            'active': this.activeEvents
        };
        // if objects are selected in filter
        if (this.prioritySelectedValues.length || this.eventTypeSelectedValues.length || this.activeEvents) {
            localStorage.setItem('filterObjectData', JSON.stringify(filterSubmitData));
            this.filterEventsObject = filterSubmitData;
            this.$calendarRef.fullCalendar('refetchEvents');
        }
    };
    // filter dropdown cancel button
    CalendarWidgetComponent.prototype.onFilterEventCancel = function () {
        // clearing the filter event object
        this.filterEventsObject = undefined;
        $('#priorityMultipleSelect').val('').trigger('change');
        $('#evntTypeMultipleSelect').val('').trigger('change');
        this.activeEvents = false;
        localStorage.removeItem('filterObjectData');
        this.$calendarRef.fullCalendar('refetchEvents');
        // closing the dropdown view
        this.calendarFilterDropDownToggle = '';
    };
    CalendarWidgetComponent.prototype.notificationNavigation = function (navigationdate) {
        setTimeout(function () {
            $('#calendar').fullCalendar('changeView', 'agendaDay');
            $('#calendar').fullCalendar('gotoDate', navigationdate);
        }, 100);
        this.calendarView = 'Day';
    };
    CalendarWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(33).then(__webpack_require__.bind(null, 1333)).then(function () {
            _this.activeColorClass = _this.colorClassNames[0];
            // notification route params to calendar
            _this.route.params.subscribe(function (params) {
                _this.notificationDate = params;
                if (_this.notificationDate.date != undefined) {
                    _this.notificationNavigation(_this.notificationDate.date);
                }
            });
            if (_this.notificationDate.date === undefined) {
                var filterLocalStorageObject = localStorage.getItem('filterObjectData');
                if (filterLocalStorageObject) {
                    filterLocalStorageObject = JSON.parse(filterLocalStorageObject);
                    if (filterLocalStorageObject.priorities.length || filterLocalStorageObject.eventTypes.length ||
                        filterLocalStorageObject.active) {
                        _this.filterEventsObject = filterLocalStorageObject;
                        $('#priorityMultipleSelect').val(filterLocalStorageObject.priorities).trigger('change');
                        $('#evntTypeMultipleSelect').val(filterLocalStorageObject.eventTypes).trigger('change');
                        _this.activeEvents = filterLocalStorageObject.active;
                    }
                }
            }
            // calling the calendar 
            _this.render();
        });
    };
    // for filter multiple events input values handling
    CalendarWidgetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // priority
        $('#priorityMultipleSelect').on('change', function (eventValues) {
            _this.prioritySelectedValues = $(eventValues.target).val();
            if (_this.prioritySelectedValues === null) {
                _this.prioritySelectedValues = [];
            }
        });
        // Event Type
        $('#evntTypeMultipleSelect').on('change', function (eventValues) {
            _this.eventTypeSelectedValues = $(eventValues.target).val();
            if (_this.eventTypeSelectedValues === null) {
                _this.eventTypeSelectedValues = [];
            }
        });
    };
    ;
    return CalendarWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "eventStartDate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "eventEnddate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CalendarWidgetComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "createTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "lastUpdateTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateDescription", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateEventStartdate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateEventEnddate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CalendarWidgetComponent.prototype, "updateActive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateCreateTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CalendarWidgetComponent.prototype, "updateLastUpdateTime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CalendarWidgetComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverAddEvent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _a || Object)
], CalendarWidgetComponent.prototype, "popoverAddEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popoverupdateEvent'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["h" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["h" /* ModalDirective */]) === "function" && _b || Object)
], CalendarWidgetComponent.prototype, "popoverupdateEvent", void 0);
CalendarWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calendar-widget',
        template: __webpack_require__(1311),
        styles: ["\n  .FilterDropDownAnimation {\n      -webkit-animation-name: none !important;\n      -moz-animation-name: flipInX !important;\n      -o-animation-name: flipInX !important;\n      animation-name: none !important;\n      -webkit-animation-duration: 0s !important;\n      -moz-animation-duration: .4s !important;\n      -o-animation-duration: .4s !important;\n      animation-duration: 0s !important;\n      -webkit-animation-fill-mode: none !important;\n      -moz-animation-fill-mode: both !important;\n      -o-animation-fill-mode: both !important;\n      animation-fill-mode: none !important;\n  }\n\n  .tooglePosition {\n      float: left !important;\n  }\n\n  .filterFormAlign {\n      margin-bottom: 0px !important;\n      margin-top: 5px !important;\n      padding-right: 0px;\n  }\n\n  .filterDropwdownViewAlign {\n      color: black;\n      position: relative !important;\n      top: 3px;\n      padding: 0px !important;\n  }\n\n  @media only screen and (min-width:768px) {\n      .filterDropwdownViewAlign {\n          min-width: 335px !important;\n          left: -296px !important;\n      }\n  }\n\n  @media only screen and (max-width: 479px) and (min-width: 320px) {\n      .filterDropwdownViewAlign {\n          min-width: 310px !important;\n          left: -255px !important;\n      }\n  }\n\n  @media only screen and (min-width:479px) and (max-width:768px) {\n      .filterDropwdownViewAlign {\n          min-width: 335px !important;\n          left: -280px !important;\n      }\n  }\n"
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _h || Object])
], CalendarWidgetComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=calendar-widget.component.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_component__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guards_index__ = __webpack_require__(94);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__calendar_component__["a" /* CalendarComponent */],
        data: { pageTitle: 'Calendar' },
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__auth_guards_index__["a" /* AuthGuard */]]
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=calendar.routing.js.map

/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value); //.map(key => value[key]);
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys', pure: false })
], KeysPipe);

//# sourceMappingURL=grouping.pipe.js.map

/***/ }),

/***/ 1260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var forms_1 = __webpack_require__(20);
var common_1 = __webpack_require__(8);
var datetime_1 = __webpack_require__(1146);
var datetime_picker_component_1 = __webpack_require__(1152);
var datetime_picker_directive_1 = __webpack_require__(1216);
var NguiDatetimePickerModule = (function () {
    function NguiDatetimePickerModule() {
    }
    NguiDatetimePickerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    declarations: [datetime_picker_component_1.NguiDatetimePickerComponent, datetime_picker_directive_1.NguiDatetimePickerDirective],
                    exports: [datetime_picker_component_1.NguiDatetimePickerComponent, datetime_picker_directive_1.NguiDatetimePickerDirective],
                    entryComponents: [datetime_picker_component_1.NguiDatetimePickerComponent],
                    providers: [datetime_1.NguiDatetime]
                },] },
    ];
    /** @nocollapse */
    NguiDatetimePickerModule.ctorParameters = [];
    return NguiDatetimePickerModule;
}());
exports.NguiDatetimePickerModule = NguiDatetimePickerModule;
//# sourceMappingURL=datetime-picker.module.js.map

/***/ }),

/***/ 1261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var datetime_1 = __webpack_require__(1146);
exports.NguiDatetime = datetime_1.NguiDatetime;
var datetime_picker_component_1 = __webpack_require__(1152);
exports.NguiDatetimePickerComponent = datetime_picker_component_1.NguiDatetimePickerComponent;
var datetime_picker_directive_1 = __webpack_require__(1216);
exports.NguiDatetimePickerDirective = datetime_picker_directive_1.NguiDatetimePickerDirective;
var datetime_picker_module_1 = __webpack_require__(1260);
exports.NguiDatetimePickerModule = datetime_picker_module_1.NguiDatetimePickerModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1311:
/***/ (function(module, exports) {

module.exports = "<app-error500 [errorname]=\"serviceErrorResponse\" *ngIf=\"serviceErrorData\"></app-error500>\n\n<sa-widgets-grid [hidden]=\"serviceErrorData\">\n    <!-- calendar widget -->\n    <sa-widget color=\"blueDark\" [collapsed]=\"false\" [colorbutton]=\"false\" [togglebutton]=\"false\" [editbutton]=\"false\">\n        <header>\n\n            <span class=\"widget-icon\">\n                <i class=\"fa fa-calendar\"></i>\n            </span>\n            <h2 style=\"width:15%\"> Events </h2>\n\n            <div class=\"widget-toolbar\">\n                <div class=\"btn-group dropdown dropdown-large\" (click)=\"openFilterDropDown()\" [ngClass]=\"calendarFilterDropDownToggle\" dropdown\n                    style=\"width:15px\">\n                    <a class=\"button-icon\" title=\"filter\" dropdownToggle style=\"color:#fff;\" aria-expanded=\"true\">\n                        <i class=\"fa fa-cog\"></i>\n                    </a>\n                    <div class=\"FilterDropDownAnimation dropdown-menu dropdown-menu-large filterDropwdownViewAlign\" role=\"menu\" (click)=\"$event.stopPropagation()\">\n                        <div id=\"checkout-form\" class=\"smart-form\">\n                            <header style=\"padding:2px\">Filter</header>\n                            <fieldset>\n\n                                <div class=\"row form-group\">\n                                    <section class=\"col col-xs-4 filterFormAlign\">\n                                        <label class=\"label\">Priority</label>\n                                    </section>\n                                    <section class=\"col col-xs-8\">\n                                        <label class=\"form-control\" style=\"border:0px;height:auto\">\n                                            <select select2 multiple id=\"priorityMultipleSelect\" style=\"width:100%\" class=\"select2 form-control\" placeholder=\"priority\">\n                                                <option *ngFor=\"let options of priorityOptions\" [value]=\"options.value\">{{options.name}}</option>\n                                            </select>\n                                        </label>\n                                    </section>\n                                </div>\n\n                                <div class=\"row form-group\">\n                                    <section class=\"col col-xs-4 filterFormAlign\">\n                                        <label class=\"label\">Event Type</label>\n                                    </section>\n                                    <section class=\"col col-xs-8\">\n                                        <label class=\"form-control\" style=\"border:0px;height:auto\">\n\n                                            <select select2 multiple id=\"evntTypeMultipleSelect\" style=\"width:100%\" class=\"select2 \" placeholder=\"Event type\">\n                                                <option *ngFor=\"let options of Typeevents\" [value]=\"options.value\">\n                                                    <i class={{options.value}}></i>{{options.name}}</option>\n                                            </select>\n                                        </label>\n                                    </section>\n                                </div>\n\n                                <div class=\"row form-group\">\n                                    <section class=\"col col-xs-4 filterFormAlign\">\n                                        <label class=\"label\">Calendar View</label>\n                                    </section>\n                                    <section class=\"col col-xs-8\">\n                                        <label class=\" form-control\">\n                                            <select name=\"view\" class=\"form-control\" [(ngModel)]=\"calendarView\" placeholder=\" Calendar view\" required>\n                                                <option value=\"month\">Month</option>\n                                                <option value=\"agendaWeek\">Week</option>\n                                                <option value=\"agendaDay\">Day</option>\n                                                <option value=\"listMonth\">List Month Events</option>\n                                                <option value=\"listWeek\">List Week Events</option>\n                                            </select>\n                                        </label>\n                                    </section>\n                                </div>\n\n                                <div class=\"row form-group\">\n                                    <section class=\"col col-xs-4 tooglePosition filterFormAlign\">\n                                        <label class=\"label\">Show Active</label>\n                                    </section>\n                                    <section class=\"col col-xs-1\">\n                                        <label class=\"toggle\">\n                                            <input checked=\"checked\" name=\"activeEvents\" [(ngModel)]=\"activeEvents\" type=\"checkbox\">\n                                            <i data-swchoff-text=\"No\" data-swchon-text=\"Yes\"></i>\n                                        </label>\n                                    </section>\n                                </div>\n                            </fieldset>\n\n                            <fieldset style=\"padding:5px\">\n                                <div style=\"float:right;\">\n                                    <button class=\"btn  btn-warning btn-sm\" type=\"submit\" (click)=\"onFilterEventCancel()\">Cancel</button>\n                                    <button class=\"btn  btn-success btn-sm\" type=\"submit\" (click)=\"onFilterEventSubmit()\">Submit</button>\n                                </div>\n                            </fieldset>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </header>\n\n        <div>\n\n            <div class=\"widget-body no-padding\">\n                <div class=\"widget-body-toolbar\">\n                    <div class=\"Custom-calendar-buttons\" id=\"calendar-buttons\">\n                        <div class=\"btn-group\">\n                            <a (click)=\"prev()\" class=\"btn btn-default btn-xs\">\n                                <i class=\"fa fa-chevron-left\"></i>\n                            </a>\n                            <a (click)=\"next()\" class=\"btn btn-default btn-xs\">\n                                <i class=\"fa fa-chevron-right\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- calender -->\n                <div id=\"calendar\"></div>\n\n                <!-- createEvent -->\n                <div bsModal #popoverAddEvent=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n                    aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" (click)=\"popoverAddEvent.hide()\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                                <h4 class=\"modal-title\">Create Event</h4>\n                            </div>\n                            <div class=\"smart-form\">\n                                <header>\n                                    <div class=\"form-bootstrapWizard clearfix\" style=\"padding:20px\">\n                                        <ul class=\"bootstrapWizard\">\n                                            <li *ngFor=\"let pane of steps; let i = index\" [class.active]=\"activeStep == pane\" style=\"width:33%\">\n                                                <a>\n                                                    <span class=\"step\">\n                                                        <span *ngIf=\"!pane.checked\">{{i + 1}}</span>\n                                                        <i class=\"fa fa-check\" *ngIf=\"pane.checked\"></i>\n                                                    </span>\n                                                    <span class=\"title\">{{pane.title}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </header>\n                            </div>\n\n                            <div class=\"modal-body\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step1'\">\n                                        <form [formGroup]=\"complexCreateEventForm\" method='post' id=\"add-event-form\">\n                                            <fieldset>\n\n                                                <div class=\"form-group\" style=\"margin-bottom:0px\">\n                                                    <label for='createEventType'>Select Event Type\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <label class=\"select\" style=\"width:100%\">\n                                                        <select [(ngModel)]=\"eventType\" class=\"form-control\" [formControl]=\"this.createEventType\" name=\"createEventType\">\n                                                            <option value=\"\" disabled>Select event type</option>\n                                                            <option *ngFor=\"let options of Typeevents\" [value]=\"options.value\">{{options.name}}</option>\n                                                        </select>\n                                                    </label>\n                                                    <span *ngIf=\"this.createEventType.hasError('required')  &&  this.formValidate\" class=\"icon-color-bad \">Please select event type</span>\n\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"createEventTitle\">Event Title\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <input class=\"form-control\" [(ngModel)]=\"title\" name=\"createEventTitle\" [formControl]=\"this.createEventTitle\" type=\"text\"\n                                                        placeholder=\"Event title\" />\n                                                    <span *ngIf=\"complexCreateEventForm.controls['createEventTitle'].hasError('maxlength')||complexCreateEventForm.controls['createEventTitle'].hasError('minlength')\"\n                                                        class=\" icon-color-bad \">Please enter minimum 3 and maximum 32 charecters</span>\n                                                    <span *ngIf=\" this.createEventTitle.hasError('required') && formValidate\" class=\" icon-color-bad \">Please enter title</span>\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"createEventDescription\">Event Description\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <textarea class=\"form-control\" [(ngModel)]=\"description\" name=\"createEventDescription\" [formControl]=\"this.createEventDescription\"\n                                                        placeholder=\"Please be brief\" style=\"resize: none;\"></textarea>\n                                                    <span *ngIf=\"complexCreateEventForm.controls['createEventDescription'].hasError('maxlength')||complexCreateEventForm.controls['createEventDescription'].hasError('minlength')\"\n                                                        class=\" icon-color-bad \">Please enter minimum 5 and maximum 1000 charecters</span>\n                                                    <span *ngIf=\" this.createEventDescription.hasError('required') && formValidate\" class=\" icon-color-bad \">Please enter description</span>\n                                                </div>\n\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-6\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"createEventStartValid\">Start Date\n                                                                <font class=\"icon-color-bad\">*</font>\n                                                            </label>\n                                                            <input class=\"form-control\" ngui-datetime-picker name=\"createEventStartValid\" [formControl]=\"this.createEventStartValid\"\n                                                                [(ngModel)]=\"eventStartDate\" [default-value]=\"CalenderInputdefaultValue\"\n                                                                parse-format=\"YYYY-MM-DD HH:mm\" [min-date]=\"todayDate\" date-format=\"DD-MM-YYYY HH:mm\"\n                                                                show-week-numbers=true [close-on-select]=\"false\" name=\"eventStartdate\"\n                                                                id=\"eventStartdate\" placeholder=\"Start date\" />\n                                                            <span *ngIf=\"eventaddStartValidation\" class=\" icon-color-bad \">Please select valid date</span>\n                                                            <span *ngIf=\" this.createEventStartValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please select start date</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-sm-6\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"createEventEndValid\">End Date\n                                                                <font class=\"icon-color-bad\">*</font>\n                                                            </label>\n                                                            <input class=\"form-control\" name=\"createEventEndValid\" [formControl]=\"this.createEventEndValid\" [(ngModel)]=\"eventEnddate\"\n                                                                parse-format=\"YYYY-MM-DD HH:mm\" [default-value]=\"CalenderInputEnddefaultValue\"\n                                                                [min-date]=\"todayDate\" ngui-datetime-picker date-format=\"DD-MM-YYYY HH:mm\"\n                                                                [close-on-select]=\"false\" id=\"eventEnddate\" name=\"eventEnddate\"\n                                                                placeholder=\"End date\" />\n                                                            <span *ngIf=\"eventaddEndValidation\" class=\" icon-color-bad \">Please select valid date</span>\n                                                            <span *ngIf=\" this.createEventEndValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please select end date</span>\n                                                        </div>\n                                                    </div>\n                                                    <span *ngIf=\"eventAddStartEndTimeComparision\" class=\" icon-color-bad \">End date should be greater than start date</span>\n                                                </div>\n\n                                                <label>Event Priority</label>\n                                                <div class=\"btn-group btn-group-sm btn-group-justified btn-select-tick\">\n                                                    <div *ngFor=\"let colorClassName of colorClassNames\" [saToggleActive]=\"colorClassName == activeColorClass\" class=\"btn {{colorClassName.bg}}\"\n                                                        (click)=\"setColorClass(colorClassName)\">\n                                                        <span style=\"display:block\">\n                                                            <i class=\" fa fa-check\" style=\"color:#fff;\"></i>\n                                                            <span style=\"color:#fff;font-weight:bold\">{{colorClassName.title}}</span>\n                                                        </span>\n                                                    </div>\n                                                </div>\n\n                                            </fieldset>\n                                        </form>\n                                    </div>\n\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step2'\">\n\n                                        <div id=\"order-form\" class=\"smart-form\">\n                                            <fieldset>\n                                                <div class=\"row\">\n                                                    <section class=\"col col-4\" style=\"padding:5px;padding-left:20px\">\n                                                        Select Property Type:\n                                                    </section>\n                                                    <section class=\"col col-4\">\n                                                        <label class=\"select\">\n                                                            <select [(ngModel)]=\"PropertySelectData\" placeholder=\"Property type\" (ngModelChange)=\"onPropertySelect($event)\" name=\"propertySelect\">\n                                                                <option value=\"\" disabled>Type</option>\n                                                                <option value=\"SMS\">SMS</option>\n                                                                <option value=\"Email\">Email</option>\n                                                            </select>\n                                                            <i></i>\n                                                        </label>\n                                                    </section>\n                                                    <section *ngIf=\"propertySelected\" class=\"col col-2\">\n                                                        <a class=\"btn btn-primary btn-sm\" (click)=\"addPropertyAttributes()\">Add Property</a>\n                                                    </section>\n                                                </div>\n                                            </fieldset>\n\n                                            <div *ngIf=\"propertySelected\" class=\"text-center\">\n                                                <form [formGroup]=\"createPropertiesForm\" method='post' *ngIf=\"showPropertyAttributes\" id=\"checkout-form\" class=\"smart-form\">\n                                                    <fieldset>\n                                                        <div class=\"row\">\n                                                            <section class=\"col col-5\">\n                                                                <label class=\"input\">\n                                                                    <input type=\"text\" name=\"CreatePkey\" [formControl]=\"this.CreatePkey\" [(ngModel)]=\"newProperty.newPropertyKey\" placeholder=\"Property key\">\n                                                                </label>\n                                                            </section>\n                                                            <section class=\"col col-5\">\n                                                                <label class=\"input\">\n                                                                    <input type=\"text\" name=\"CreatePvalue\" [formControl]=\"this.CreatePvalue\" [(ngModel)]=\"newProperty.newPropertyValue\" placeholder=\"Property value\">\n                                                                </label>\n                                                            </section>\n                                                            <section class=\"col col-2\">\n                                                                <button class=\"btn btn-primary btn-sm\" type=\"submit\" [disabled]=\"!createPropertiesForm.valid\" (click)=\"submitPropertyData(newProperty.newPropertyKey,newProperty.newPropertyValue)\">Submit</button>\n                                                            </section>\n                                                        </div>\n                                                    </fieldset>\n                                                </form>\n                                            </div>\n                                        </div>\n\n                                        <table id=\"user\" class=\"table \" style=\"clear:both;padding-top:20px\">\n                                            <tbody>\n\n                                                <tr *ngFor=\"let property of properties| keys\">\n                                                    <td>{{property}} </td>\n                                                    <td>{{properties[property]}}</td>\n                                                    <td>\n                                                        <i class=\"fa fa-trash-o\" (click)='deleteProperty(property)'></i>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step3'\">\n                                        <h1 class=\"text-center text-success\">\n                                            <strong>\n                                                <i class=\"fa fa-check fa-lg\"></i> Complete</strong>\n                                        </h1>\n                                        <h4 class=\"text-center\">Click Add Event to Save</h4>\n                                    </div>\n                                </div>\n                                <div class=\"form-actions\">\n                                    <div class=\"row\">\n                                        <ul class=\"pager wizard no-margin\">\n                                            <li class=\"previous\">\n                                                <a (click)=\"prevStep()\" [class.disabled]=\"steps.indexOf(activeStep) == 0\" class=\"btn btn-lg btn-default\"> Previous </a>\n                                            </li>\n                                            <li class=\"next\">\n                                                <a (click)=\"nextStep()\" [class.hidden]=\"steps.indexOf(activeStep) == 2\" class=\"btn btn-lg txt-color-darken\"> Next </a>\n                                                <a *ngIf=\"steps.indexOf(activeStep) == 2\" (click)=\"AddEventDetailsWithProperties()\" class=\"btn btn-lg txt-color-darken\">\n                                                Add Event </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- updateEvent -->\n                <div bsModal #popoverupdateEvent=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\n                    aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-lg\">\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" (click)=\"popoverupdateEvent.hide()\" aria-label=\"Close\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                                <h4 class=\"modal-title\">Update Event</h4>\n                            </div>\n                            <div class=\"smart-form\">\n                                <header>\n                                    <div class=\"form-bootstrapWizard clearfix\" style=\"padding:20px\">\n                                        <ul class=\"bootstrapWizard\">\n                                            <li *ngFor=\"let pane of steps; let i = index\" [class.active]=\"activeStep == pane\" style=\"width:33%\">\n                                                <a>\n                                                    <span class=\"step\">\n                                                        <span *ngIf=\"!pane.checked\">{{i + 1}}</span>\n                                                        <i class=\"fa fa-check\" *ngIf=\"pane.checked\"></i>\n                                                    </span>\n                                                    <span class=\"title\">{{pane.title}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n                                </header>\n                            </div>\n                            <div class=\"modal-body\">\n                                <div class=\"tab-content\">\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step1'\">\n                                        <form [formGroup]=\"complexupdateEventForm\" id=\"add-event-form\">\n                                            <fieldset>\n\n                                                <div class=\"form-group\" style=\"margin-bottom:0px\">\n                                                    <label for='updateEventType'>Select Event Type\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <label class=\"select\" style=\"width:100%\">\n                                                        <select [(ngModel)]=\"eventType\" class=\"form-control\" [formControl]=\"this.updateEventType\" name=\"updateEventType\">\n                                                            <option value=\"\" disabled>Select event type</option>\n                                                            <option *ngFor=\"let options of Typeevents\" [value]=\"options.value\">{{options.name}}</option>\n                                                        </select>\n                                                    </label>\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"updateTitleValid\">Event Title\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <input [(ngModel)]=\"updateTitle\" class=\"form-control\" name=\"updateTitleValid\" [formControl]=\"this.updateTitleValid\" type=\"text\"\n                                                        placeholder=\"Event title\" [readonly]=\"updateDisableFields\" />\n                                                    <span *ngIf=\"complexupdateEventForm.controls['updateTitleValid'].hasError('maxlength')||complexupdateEventForm.controls['updateTitleValid'].hasError('minlength')\"\n                                                        class=\" icon-color-bad \">Please enter minimum 3 and maximum 32 charecters</span>\n                                                    <span *ngIf=\" this.updateTitleValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please enter title</span>\n                                                </div>\n\n                                                <div class=\"form-group\">\n                                                    <label for=\"updateDescriptionValid\">Event Description\n                                                        <font class=\"icon-color-bad\">*</font>\n                                                    </label>\n                                                    <textarea [(ngModel)]=\"updateDescription\" name=\"updateDescriptionValid\" [formControl]=\"this.updateDescriptionValid\" class=\"form-control\"\n                                                        placeholder=\"Please be brief\" id=\"description\" style=\"resize: none;\"\n                                                        [readonly]=\"updateDisableFields\"></textarea>\n                                                    <span *ngIf=\"complexupdateEventForm.controls['updateDescriptionValid'].hasError('maxlength')||complexupdateEventForm.controls['updateDescriptionValid'].hasError('minlength')\"\n                                                        class=\" icon-color-bad \">Please enter minimum 5 and maximum 1000 charecters</span>\n                                                    <span *ngIf=\" this.updateDescriptionValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please enter description</span>\n                                                </div>\n\n                                                <div class=\"row\">\n                                                    <div class=\"col-sm-6\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"updateEventStartValid\">Start Date\n                                                                <font class=\"icon-color-bad\">*</font>\n                                                            </label>\n                                                            <input class=\"form-control\" name=\"updateEventStartValid\" [default-value]=\"CalenderInputdefaultValue\" [formControl]=\"this.updateEventStartValid\"\n                                                                [(ngModel)]=\"updateEventStartdate\" default-value='setInputCalenderDate'\n                                                                show-week-numbers='true' parse-format=\"YYYY-MM-DD HH:mm\" ngui-datetime-picker\n                                                                date-format=\"DD-MM-YYYY HH:mm\" [min-date]=\"todayDate\" [close-on-select]=\"false\"\n                                                                id=\"updateEventStartdate\" name=\"updateEventStartdate\" placeholder=\"Start date\"\n                                                                [readonly]=\"updateDisableFields \" />\n                                                            <span *ngIf=\"eventUpdateStartValidation\" class=\" icon-color-bad \">PleasesSelect valid date</span>\n                                                            <span *ngIf=\" this.updateEventStartValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please select start date</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <div class=\"col-sm-6\">\n                                                        <div class=\"form-group\">\n                                                            <label for=\"updateEventEndValid\">End Date\n                                                                <font class=\"icon-color-bad\">*</font>\n                                                            </label>\n                                                            <input class=\"form-control\" name=\"updateEventEndValid\" [default-value]=\"CalenderInputEnddefaultValue\" [formControl]=\"this.updateEventEndValid\"\n                                                                [(ngModel)]=\"updateEventEnddate\" [min-date]=\"todayDate\" default-value='setInputCalenderDate'\n                                                                parse-format=\"YYYY-MM-DD HH:mm\" ngui-datetime-picker date-format=\"DD-MM-YYYY HH:mm\"\n                                                                [close-on-select]=\"false\" id=\"updateEventEnddate\" name=\"updateEventEnddate\"\n                                                                placeholder=\"End date\" [readonly]=\"updateDisableFields\" />\n                                                            <span *ngIf=\"eventUpdateEndValidation\" class=\" icon-color-bad \">Please select valid date</span>\n                                                            <span *ngIf=\" this.updateEventEndValid.hasError('required') &&formValidate\" class=\" icon-color-bad \">Please select end date</span>\n                                                        </div>\n                                                    </div>\n\n                                                    <span *ngIf=\"updateStartEndComparision\" class=\" icon-color-bad \">End Date should be greater than start date</span>\n                                                </div>\n                                                <div class=\"form-group\">\n                                                    <label>Event Priority</label>\n                                                    <div class=\"btn-group btn-group-sm btn-group-justified btn-select-tick\">\n                                                        <div *ngFor=\"let colorClassName of colorClassNames\" [saToggleActive]=\"colorClassName == activeColorClass\" class=\"btn {{colorClassName.bg}}\"\n                                                            (click)=\"setColorClass(colorClassName)\">\n                                                            <span style=\"display:block\">\n                                                                <i class=\" fa fa-check\" style=\"color:#fff;\"></i>\n                                                                <span style=\"color:#fff;font-weight:bold\">{{colorClassName.title}}</span>\n                                                            </span>\n                                                        </div>\n                                                    </div>\n                                                </div>\n\n                                            </fieldset>\n                                        </form>\n                                    </div>\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step2'\">\n                                        <div id=\"order-form\" class=\"smart-form\">\n                                            <fieldset>\n                                                <div class=\"row\">\n                                                    <section class=\"col col-4\" style=\"padding:5px;padding-left:20px\">\n                                                        Select Property Type:\n                                                    </section>\n                                                    <section class=\"col col-4\">\n                                                        <label class=\"select\">\n                                                            <select [(ngModel)]=\"PropertySelectData\" placeholder=\"Property type\" (ngModelChange)=\"onPropertySelect($event)\" name=\"propertySelect\">\n                                                                <option value=\"\" selected=\"selected\" disabled>Type</option>\n                                                                <option value=\"SMS\">SMS</option>\n                                                                <option value=\"Email\">Email</option>\n                                                            </select>\n                                                            <i></i>\n                                                        </label>\n                                                    </section>\n                                                    <section *ngIf=\"propertySelected\" class=\"col col-2\">\n                                                        <a class=\"btn btn-primary btn-sm\" (click)=\"addPropertyAttributes()\">Add Property</a>\n                                                    </section>\n                                                </div>\n                                            </fieldset>\n\n                                            <div *ngIf=\"propertySelected\" class=\"text-center\">\n                                                <form [formGroup]=\"createPropertiesForm\" method='post' *ngIf=\"showPropertyAttributes\" id=\"checkout-form\" class=\"smart-form\">\n                                                    <fieldset>\n                                                        <div class=\"row\">\n                                                            <section class=\"col col-5\">\n                                                                <label class=\"input\">\n                                                                    <input type=\"text\" name=\"CreatePkey\" [formControl]=\"this.CreatePkey\" [(ngModel)]=\"newProperty.newPropertyKey\" placeholder=\"Property key\">\n                                                                </label>\n                                                            </section>\n                                                            <section class=\"col col-5\">\n                                                                <label class=\"input\">\n                                                                    <input type=\"text\" name=\"CreatePvalue\" [formControl]=\"this.CreatePvalue\" [(ngModel)]=\"newProperty.newPropertyValue\" placeholder=\"Property value\">\n                                                                </label>\n                                                            </section>\n                                                            <section class=\"col col-2\">\n                                                                <button class=\"btn btn-primary btn-sm\" type=\"submit\" [disabled]=\"!createPropertiesForm.valid\" (click)=\"submitPropertyData(newProperty.newPropertyKey,newProperty.newPropertyValue)\">Submit</button>\n                                                            </section>\n                                                        </div>\n                                                    </fieldset>\n                                                </form>\n                                            </div>\n                                        </div>\n\n                                        <table id=\"user\" class=\"table \" style=\"clear:both;padding-top:20px\">\n                                            <tbody>\n                                                <tr *ngFor=\"let property of properties| keys\">\n                                                    <td>{{property}} </td>\n                                                    <td>{{properties[property]}}</td>\n                                                    <td>\n                                                        <i class=\"fa fa-trash-o\" (click)='deleteProperty(property)'></i>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                    <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step3'\">\n                                        <h1 class=\"text-center text-success\">\n                                            <strong>\n                                                <i class=\"fa fa-check fa-lg\"></i> Complete</strong>\n                                        </h1>\n                                        <h4 class=\"text-center\">Click Update Event to Save</h4>\n                                    </div>\n                                </div>\n                                <div class=\"form-actions\">\n                                    <div class=\"row\">\n                                        <ul class=\"pager wizard no-margin\">\n                                            <li class=\"previous\">\n                                                <a (click)=\"prevStep()\" [class.disabled]=\"steps.indexOf(activeStep) == 0\" class=\"btn btn-lg btn-default\"> Previous </a>\n                                            </li>\n                                            <li class=\"next\">\n                                                <a (click)=\"nextStep()\" [class.hidden]=\"steps.indexOf(activeStep) == 2\" class=\"btn btn-lg txt-color-darken\"> Next </a>\n                                                <a *ngIf=\"steps.indexOf(activeStep) == 2\" (click)=\"updateEventDetailsProperties()\" class=\"btn btn-lg txt-color-darken\"> Update Event </a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </sa-widget>\n\n</sa-widgets-grid>\n"

/***/ }),

/***/ 1312:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <!--<sa-big-breadcrumbs [items]=\"['Calendar', 'Add Events']\" icon=\"calendar\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>-->\n    <!--<sa-stats></sa-stats>-->\n  </div>\n  <calendar-widget></calendar-widget>\n</div>\n"

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


/***/ })

});
//# sourceMappingURL=18.chunk.js.map