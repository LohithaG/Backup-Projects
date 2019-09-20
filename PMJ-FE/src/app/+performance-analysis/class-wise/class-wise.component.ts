import { Component, ChangeDetectorRef } from '@angular/core';
import { ClassWiseService } from './class-wise.service';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from './../shared-modules/app.constant';

@Component({
    selector: 'channel-wise',
    templateUrl: './class-wise.component.html',
    styleUrls: ['class-wise.component.css']
})

export class ClasswiseComponent {

    picChartData = [];
    chartCategories = [];
    stackedGoldValue = [];
    stackedDiamondValue = [];

    emplyChartCategories = [];

    diaQtyTarget = [];
    diaQtyActual = [];
    diaValueTarget = [];
    diaValueActual = [];

    goldQtyTarget = [];
    goldQtyActual = [];
    goldValueTarget = [];
    goldValueActual = [];

    emplyDiaQtyTarget = [];
    emplyDiaQtyActual = [];
    emplyDiaValueTarget = [];
    emplyDiaValueActual = [];

    emplyGoldQtyTarget = [];
    emplyGoldQtyActual = [];
    emplyGoldValueTarget = [];
    emplyGoldValueActual = [];

    singleClassData;
    allClassesData;

    employeeCharts = false;
    loaderStatus = true;
    donutValue = 0;
    classPieChart: any = {};

    commonPlotOptions: any = {
        dataLabels: {
            enabled: true,
            allowOverlap: true,
            style: {
                color: 'black',
                fontSize: '11px',
                textOutline: 'none'
            },
            formatter() {
                return this.y.toFixed(2)
            }
        },
        enableMouseTracking: true,
        events: {
            legendItemClick(e) {
                if (this.visible) {
                    let points = this.chart.series,
                        visPoint = 0;
                    jQuery.each(points, function () {
                        let point = arguments[1];
                        if (point.visible) {
                            visPoint++;
                            if (visPoint > 1) {
                                return false;
                            }
                        }
                    });
                    if (visPoint < 2) {
                        e.preventDefault();
                    }
                }
            }
        }
    }

    goldDiaInfo: any = {
        actuals: {
            "qty": {
                "gold": 0,
                "diamond": 0
            },
            "value": {
                "gold": 0,
                "diamond": 0
            }
        },
        target: {
            "qty": {
                "gold": 0,
                "diamond": 0
            },
            "value": {
                "gold": 0,
                "diamond": 0
            }
        }
    };
    constructor(private readonly classWiseService: ClassWiseService, private cdr: ChangeDetectorRef
    ) {
        window.scrollTo(0, 0);
    }
    ngOnInit() {
        Highcharts.setOptions({
            credits: {
                enabled: false
            },
        });
    }
    dateObj;
    locationId;
    QueryDate(value) {
        this.loaderStatus = true;
        this.dateObj = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.locationId = value.locationId;
        this.initialChart(this.dateObj);

    }
    timelineFullChart = false;
    empFullChart = false;
    hideThePage = false;
    showActuals = false;
    initialChart(dateObj) {
        this.itemsSelected = [];
        this.donutValue = 0;
        this.employeeCharts = false;
        this.showActuals = false;
        this.loaderStatus = true;
        this.chartCategories = [];
        this.picChartData = [];
        this.classWiseService.getAllClassesData(dateObj, this.locationId).subscribe((response: any) => {
            if (response.error === null) {
                this.allClassesData = response;
                this.timelineFullChart = false;
                this.hideThePage = false;
                this.loaderStatus = false;
                for (let i = 0; i < this.allClassesData.data.details.classes.length; i++) {
                    let obj = {
                        name: this.allClassesData.data.details.classes[i],
                        y: this.allClassesData.data.details.actuals.value.gold[i] + this.allClassesData.data.details.actuals.value.diamond[i]
                    }
                    this.picChartData.push(obj);
                }
                for (const Item of this.picChartData) {
                    this.donutValue = this.donutValue + Item.y;
                    if (Item.y !== 0) {
                        this.showActuals = true;
                    }
                }
                this.timelineFullChart = (this.allClassesData.data.details.classes.length > 5) ? true : false;
                this.chartCategories = this.allClassesData.data.details.classes;

                this.goldDiaInfo.actuals = this.allClassesData.data.actuals;
                this.goldDiaInfo.target = this.allClassesData.data.target;
                //stacked chart data
                this.stackedGoldValue = this.allClassesData.data.details.actuals.value.gold;
                this.stackedDiamondValue = this.allClassesData.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = this.allClassesData.data.details.target.qty.diamond;
                this.diaQtyActual = this.allClassesData.data.details.actuals.qty.diamond;
                this.diaValueTarget = this.allClassesData.data.details.target.value.diamond;
                this.diaValueActual = this.allClassesData.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = this.allClassesData.data.details.target.qty.gold;
                this.goldQtyActual = this.allClassesData.data.details.actuals.qty.gold;
                this.goldValueTarget = this.allClassesData.data.details.target.value.gold;
                this.goldValueActual = this.allClassesData.data.details.actuals.value.gold;

                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.pieContainer();
                    this.stackedContainer();
                    this.diaQtygroupContainer();
                    this.diaValuegroupContainer();
                    this.goldQtygroupContainer();
                    this.goldValuegroupContainer();
                } else {
                    this.loaderStatus = false;
                    this.hideThePage = true
                }
            } else {
                this.hideThePage = true;
                this.loaderStatus = false;
            }

        });

    }

    itemsSelected = [];
    pieContainer() {
        this.cdr.detectChanges();
        this.classPieChart = Highcharts.chart('pieContainer', {
            chart: {
                type: 'pie'
            },
            colors: ['#20B070', '#0078A6', '#FCB441', '#F9766D', '#5E1833', '#F27521', '#A53D26', '#5A9AD5'],
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:26px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;"></div>'
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()} :${this.percentage.toFixed(2)} %(${this.y.toFixed(2)}L )`;
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,

                    dataLabels: {
                        enabled: false,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none',
                            type: undefined
                        },
                    },
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.itemsSelected[0] === event.point.name) {
                                this.initialChart(this.dateObj);
                            } else {
                                this.itemsSelected[0] = event.point.name;
                                this.callingSingleClass(this.itemsSelected[0]);
                            }
                        }
                    },
                    point: {
                        events: {
                            legendItemClick: (event) => {
                                return false;
                            }
                        }
                    }
                },
            },
            series: [{
                name: 'Share',
                data: this.picChartData,
                type: undefined
            }]
        });
    }


    stackedContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('stackedContainer', {
            chart: {
                type: 'column',
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                min: 0,
                title: {
                    text: constants.GoldDiamondValue
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',

                    dataLabels: {
                        allowOverlap: true,
                        enabled: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            // if (this.y > 0)
                            return this.y.toFixed(2);
                        }
                    },
                    events: this.commonPlotOptions.events
                }
            },
            series: [{
                name: constants.Gold,
                data: this.stackedGoldValue,
                color: constants.goldColour,
                type: undefined
            }, {
                name: constants.Diamond,
                data: this.stackedDiamondValue,
                color: constants.diamondColour,
                type: undefined
            }]
        });
    }
    diaQtygroupChartType = 'column';
    diaQtygroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('diaQtygroupContainer', {
            chart: {
                type: this.diaQtygroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: constants.DaiamonsQTY
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.diaQtyTarget,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.diaQtyActual,
                color: constants.diamondColour,
                type: undefined
            }],
        });
    }
    diaValuegroupChartType = 'column';
    diaValuegroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('diaValuegroupContainer', {
            chart: {
                type: this.diaValuegroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: constants.DaimondsValue
                },
            },

            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.diaValueTarget,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.diaValueActual,
                color: constants.diamondColour,
                type: undefined
            }]
        });
    }

    goldQtygroupChartType = 'column';
    goldQtygroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('goldQtygroupContainer', {
            chart: {
                type: this.goldQtygroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: constants.GoldQty
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.goldQtyTarget,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.goldQtyActual,
                color: constants.goldColour,
                type: undefined
            }],
        });
    }

    goldValuegroupChartType = 'column';
    goldValuegroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('goldValuegroupContainer', {
            chart: {
                type: this.goldValuegroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: constants.GoldValue
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.goldValueTarget,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.goldValueActual,
                color: constants.goldColour,
                type: undefined
            }],
        });
    }
    callingSingleClass(className) {
        this.employeeCharts = true;
        this.loaderStatus = true;
        this.timelineFullChart = false;
        this.empFullChart = false;
        // console.log(event.point.name)
        this.chartCategories = [];
        this.emplyChartCategories = [];
        for (const Item of this.picChartData) {
            if (Item.name === className) {
                this.donutValue = Item.y;
            }
        }
        this.classPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>` });
        this.classWiseService.getSingleClassData(this.dateObj, this.locationId, className).subscribe((response: any) => {
            if (response.error === null) {
                this.loaderStatus = false;
                this.singleClassData = response;
                this.dateRangeCharts();
                this.employeesCharts();
            } else {
                this.hideThePage = true;
                this.loaderStatus = false;
            }

        });

    }
    dateRangeCharts() {
        this.chartCategories = this.singleClassData.data.details[0].timeLine;
        this.timelineFullChart = (this.singleClassData.data.details[0].timeLine.length > 5) ? true : false;
        this.goldDiaInfo.actuals = this.singleClassData.data.actuals;
        this.goldDiaInfo.target = this.singleClassData.data.target;

        //stacked chart data
        this.stackedGoldValue = this.singleClassData.data.details[0].actuals.value.gold;
        this.stackedDiamondValue = this.singleClassData.data.details[0].actuals.value.diamond;

        //Diamond charts data
        this.diaQtyTarget = this.singleClassData.data.details[0].targets.qty.diamond;
        this.diaQtyActual = this.singleClassData.data.details[0].actuals.qty.diamond;
        this.diaValueTarget = this.singleClassData.data.details[0].targets.value.diamond;
        this.diaValueActual = this.singleClassData.data.details[0].actuals.value.diamond;
        //Gold charts data
        this.goldQtyTarget = this.singleClassData.data.details[0].targets.qty.gold;
        this.goldQtyActual = this.singleClassData.data.details[0].actuals.qty.gold;
        this.goldValueTarget = this.singleClassData.data.details[0].targets.value.gold;
        this.goldValueActual = this.singleClassData.data.details[0].actuals.value.gold;

        this.stackedContainer();
        this.diaQtygroupContainer();
        this.diaValuegroupContainer();
        this.goldQtygroupContainer();
        this.goldValuegroupContainer();
    }

    employeesCharts() {
        this.emplyChartCategories = this.singleClassData.data.details[1].employees;
        this.empFullChart = (this.singleClassData.data.details[1].employees.length > 5) ? true : false;
        this.employsDiaQtygroupContainer();
        this.employsDiaValuegroupContainer();
        this.employsGoldQtygroupContainer();
        this.employsGoldValuegroupContainer();
    }

    empDiaQtygroupChartType = 'spline';
    employsDiaQtygroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('employsDiaQtygroupContainer', {
            chart: {
                type: this.empDiaQtygroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.emplyChartCategories
            },
            yAxis: {
                title: {
                    text: constants.DaiamonsQTY
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: {
                        legendItemClick(e) {
                            if (this.visible) {
                                const points = this.chart.series
                                let visPoint = 0;
                                jQuery.each(points, function () {
                                    const point = arguments[1];
                                    if (point.visible) {
                                        visPoint++;
                                        if (visPoint > 1) {
                                            return false;
                                        }
                                    }
                                });
                                if (visPoint < 2) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                },
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.singleClassData.data.details[1].targets.qty.diamond,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.singleClassData.data.details[1].actuals.qty.diamond,
                color: constants.diamondColour,
                type: undefined
            }],
        });
    }

    empDiaValuegroupChartType = 'spline';
    employsDiaValuegroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('employsDiaValuegroupContainer', {
            chart: {
                type: this.empDiaValuegroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.emplyChartCategories
            },
            yAxis: {
                title: {
                    text: constants.DaimondsValue
                },
            },

            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: {
                        legendItemClick(e) {
                            if (this.visible) {
                                const points = this.chart.series
                                let visPoint = 0;
                                jQuery.each(points, function () {
                                    const point = arguments[1];
                                    if (point.visible) {
                                        visPoint++;
                                        if (visPoint > 1) {
                                            return false;
                                        }
                                    }
                                });
                                if (visPoint < 2) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                },
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.singleClassData.data.details[1].targets.value.diamond,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.singleClassData.data.details[1].actuals.value.diamond,
                color: constants.diamondColour,
                type: undefined
            }]
        });
    }

    empGoldQtygroupChartType = 'spline';
    employsGoldQtygroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('employsGoldQtygroupContainer', {
            chart: {
                type: this.empGoldQtygroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.emplyChartCategories
            },
            yAxis: {
                title: {
                    text: constants.GoldQty
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: {
                        legendItemClick(e) {
                            if (this.visible) {
                                const points = this.chart.series
                                let visPoint = 0;
                                jQuery.each(points, function () {
                                    const point = arguments[1];
                                    if (point.visible) {
                                        visPoint++;
                                        if (visPoint > 1) {
                                            return false;
                                        }
                                    }
                                });
                                if (visPoint < 2) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                },
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.singleClassData.data.details[1].targets.qty.gold,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.singleClassData.data.details[1].actuals.qty.gold,
                color: constants.goldColour,
                type: undefined
            }],
        });
    }

    empGoldValuegroupChartType = 'spline';
    employsGoldValuegroupContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('employsGoldValuegroupContainer', {
            chart: {
                type: this.empGoldValuegroupChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.emplyChartCategories
            },
            yAxis: {
                title: {
                    text: constants.GoldValue
                },
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: {
                        legendItemClick(e) {
                            if (this.visible) {
                                const points = this.chart.series
                                let visPoint = 0;
                                jQuery.each(points, function () {
                                    const point = arguments[1];
                                    if (point.visible) {
                                        visPoint++;
                                        if (visPoint > 1) {
                                            return false;
                                        }
                                    }
                                });
                                if (visPoint < 2) {
                                    e.preventDefault();
                                }
                            }
                        }
                    }
                },
                spline: this.commonPlotOptions
            },
            series: [{
                name: constants.Target,
                data: this.singleClassData.data.details[1].targets.value.gold,
                color: constants.targetColor,
                type: undefined
            }, {
                name: constants.Actual,
                data: this.singleClassData.data.details[1].actuals.value.gold,
                color: constants.goldColour,
                type: undefined
            }],
        });
    }

    resetGraphs() {
        this.initialChart(this.dateObj);
    }

    lineChartConvertion(id) {
        switch (id) {
            case 'diaQtygroup': {
                this.diaQtygroupChartType = this.diaQtygroupChartType === 'column' ? 'spline' : 'column';
                this.diaQtygroupContainer();
                break;
            }
            case 'diaValuegroup': {
                this.diaValuegroupChartType = this.diaValuegroupChartType === 'column' ? 'spline' : 'column';
                this.diaValuegroupContainer();
                break;
            }
            case 'goldQtygroup': {
                this.goldQtygroupChartType = this.goldQtygroupChartType === 'column' ? 'spline' : 'column';
                this.goldQtygroupContainer();
                break;
            }
            case 'goldValuegroup': {
                this.goldValuegroupChartType = this.goldValuegroupChartType === 'column' ? 'spline' : 'column';
                this.goldValuegroupContainer();
                break;
            }
            case 'empDiaQtygroup': {
                this.empDiaQtygroupChartType = this.empDiaQtygroupChartType === 'column' ? 'spline' : 'column';
                this.employsDiaQtygroupContainer();
                break;
            }
            case 'empDiaValuegroup': {
                this.empDiaValuegroupChartType = this.empDiaValuegroupChartType === 'column' ? 'spline' : 'column';
                this.employsDiaValuegroupContainer();
                break;
            }
            case 'empGoldQtygroup': {
                this.empGoldQtygroupChartType = this.empGoldQtygroupChartType === 'column' ? 'spline' : 'column';
                this.employsGoldQtygroupContainer();
                break;
            }
            case 'empGoldValuegroup': {
                this.empGoldValuegroupChartType = this.empGoldValuegroupChartType === 'column' ? 'spline' : 'column';
                this.employsGoldValuegroupContainer();
                break;
            }
        }
    }
}
