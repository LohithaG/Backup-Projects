import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
// import { constants } from './../../../shared/appConstants';
import { constants } from './../../shared-modules/app.constant'
import { StoreService } from './store.service';


@Component({
    selector: 'location-wise-store',
    templateUrl: './store.component.html',
    styleUrls: ['store.component.css']
})

export class LocationwiseStoreComponent {
    picChartData = [];
    chartCategories = [];
    stackedGoldValue = []
    stackedDiamondValue = []

    diaQtyTarget = [];
    diaQtyActual = [];
    diaValueTarget = [];
    diaValueActual = [];

    goldQtyTarget = [];
    goldQtyActual = [];
    goldValueTarget = [];
    goldValueActual = [];

    response;
    donutValue = 0;

    loaderStatus = true;
    locationPieChart: any = {};

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

    constructor(private readonly storeService: StoreService, private cdr: ChangeDetectorRef
    ) {

    }
    ngOnInit() {
        Highcharts.setOptions({
            credits: {
                enabled: false
            },
        });
        window.scrollTo(0, 0)
    }

    dateObj;
    QueryDate(value) {
        this.loaderStatus = true;
        this.dateObj = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.initialChart(this.dateObj);
    }

    fullChart = false;
    hideThePage = false;
    unSubscribe: any;
    showActuals = false;
    initialChart(dateObj) {
        this.clearChartData();
        this.showActuals = false;
        this.loaderStatus = true;
        console.log(JSON.stringify(this.goldDiaInfo))
        this.itemsSelected = [];
        this.chartCategories = [];
        this.picChartData = [];
        this.donutValue = 0;
        this.storeService.getAllLocationsData(dateObj).subscribe((response: any) => {
            if (response.error === null && response.data !== null) {
                this.loaderStatus = false;
                this.fullChart = false;
                this.hideThePage = false;
                for (let i = 0; i < response.data.details.location.length; i++) {
                    let obj = {
                        name: response.data.details.location[i],
                        y: response.data.details.actuals.value.gold[i] + response.data.details.actuals.value.diamond[i]
                    }
                    this.picChartData.push(obj);
                }
                for (const item of this.picChartData) {
                    this.donutValue = this.donutValue + item.y;
                    if (item.y !== 0) {
                        this.showActuals = true;
                    }
                }
                this.chartCategories = response.data.details.location;
                this.fullChart = (response.data.details.location.length > 5) ? true : false;
                this.goldDiaInfo.actuals = response.data.actuals;
                this.goldDiaInfo.target = response.data.target;
                //stacked chart data
                this.stackedGoldValue = response.data.details.actuals.value.gold;
                this.stackedDiamondValue = response.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = response.data.details.target.qty.diamond;
                this.diaQtyActual = response.data.details.actuals.qty.diamond;
                this.diaValueTarget = response.data.details.target.value.diamond;
                this.diaValueActual = response.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = response.data.details.target.qty.gold;
                this.goldQtyActual = response.data.details.actuals.qty.gold;
                this.goldValueTarget = response.data.details.target.value.gold;
                this.goldValueActual = response.data.details.actuals.value.gold;
                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.loaderStatus = false;
                    this.hideThePage = false;
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
                this.loaderStatus = false;
                this.hideThePage = true;
            }
        })
    }

    itemsSelected = [];
    pieContainer() {
        this.cdr.detectChanges();
        this.locationPieChart = Highcharts.chart('pieContainer', {
            chart: {
                type: 'pie',
            },
            colors: ['#20B070', '#0078A6', '#FCB441', '#F9766D', '#5E1833', '#F27521', '#A53D26', '#5A9AD5'],
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:26px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;"></div>'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()}:${this.percentage.toFixed(2)}%(${this.y.toFixed(2)}L)`;
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,

                    dataLabels: {
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        enabled: false
                    },
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.itemsSelected[0] === event.point.name) {
                                this.initialChart(this.dateObj);
                            } else {
                                this.itemsSelected[0] = event.point.name;
                                this.callingSingleBranch(event);
                            }
                        },
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
            }],
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

    callingSingleBranch(event) {
        this.loaderStatus = true;
        this.clearChartData();
        console.log(event.point.name)
        this.chartCategories = [];

        for (const item of this.picChartData) {
            if (item.name === event.point.name) {
                this.donutValue = item.y;
            }
        }
        this.locationPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>` });
        this.storeService.getSingleLocationData(this.dateObj, event.point.name).subscribe((branchResponse: any) => {
            if (branchResponse.error === null && branchResponse.data !== null) {
                this.loaderStatus = false;
                this.hideThePage = false;
                this.fullChart = false;
                this.chartCategories = branchResponse.data.details.timeLine;
                this.fullChart = (branchResponse.data.details.timeLine.length > 5) ? true : false;
                this.goldDiaInfo.actuals = branchResponse.data.actuals;
                this.goldDiaInfo.target = branchResponse.data.target;

                //stacked chart data
                this.stackedGoldValue = branchResponse.data.details.locations.actuals.value.gold;
                this.stackedDiamondValue = branchResponse.data.details.locations.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = branchResponse.data.details.locations.target.qty.diamond;
                this.diaQtyActual = branchResponse.data.details.locations.actuals.qty.diamond;
                this.diaValueTarget = branchResponse.data.details.locations.target.value.diamond;
                this.diaValueActual = branchResponse.data.details.locations.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = branchResponse.data.details.locations.target.qty.gold;
                this.goldQtyActual = branchResponse.data.details.locations.actuals.qty.gold;
                this.goldValueTarget = branchResponse.data.details.locations.target.value.gold;
                this.goldValueActual = branchResponse.data.details.locations.actuals.value.gold;
                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.hideThePage = false;
                    // this.pieContainer();
                    this.stackedContainer();
                    this.diaQtygroupContainer();
                    this.diaValuegroupContainer();
                    this.goldQtygroupContainer();
                    this.goldValuegroupContainer();
                } else {
                    this.hideThePage = true;
                }
                this.cdr.detectChanges();
            } else {
                this.loaderStatus = false;
                this.hideThePage = true;
            }

        })
    }

    clearChartData() {
        //stacked chart data
        this.stackedGoldValue = [];
        this.stackedDiamondValue = [];
        //Diamond charts data
        this.diaQtyTarget = [];
        this.diaQtyActual = [];
        this.diaValueTarget = [];
        this.diaValueActual = [];
        //Gold charts data
        this.goldQtyTarget = [];
        this.goldQtyActual = [];
        this.goldValueTarget = [];
        this.goldValueActual = [];
    }

    resetGraphs() {
        this.initialChart(this.dateObj)
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
        }
    }

}
