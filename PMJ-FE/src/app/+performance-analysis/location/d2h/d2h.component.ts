import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { D2HService } from './d2h.service';
import { constants } from './../../shared-modules/app.constant'
@Component({
    selector: 'location-wise-d2h',
    templateUrl: './d2h.component.html',
    styleUrls: ['d2h.component.css']
})

export class LocationwiseD2hComponent {
    picChartData = [];
    clusterPieData = [];
    locationPieData = [];

    chartCategories = [];
    stackedGoldValue = [];
    stackedDiamondValue = [];

    diaQtyTarget = [];
    diaQtyActual = [];
    diaValueTarget = [];
    diaValueActual = [];

    goldQtyTarget = [];
    goldQtyActual = [];
    goldValueTarget = [];
    goldValueActual = [];

    lengthStatus = false;
    stateCharts = true;
    culsterWiseCharts = false;
    locationStatus = false;

    allStatesData;
    singlestateClustersData;
    singleClusterLocationsData;
    locationsWiseTeamsData;
    singleclusterLocationsData;

    stateSelected = [];
    clusterSelected = [];
    locationSelected = [];
    dateObj;

    loaderStatus = true;
    clusterStatus = false;

    stateDonutValue = 0;
    clusterDonutValue = 0;
    locationDonutValue = 0;

    statePieChart: any = {};
    clusterPieChart: any = {};
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

    constructor(private readonly d2hService: D2HService, public cdr: ChangeDetectorRef,
    ) {
    }
    ngOnInit() {
        Highcharts.setOptions({
            credits: {
                enabled: false
            }, title: {
                text: ''
            }
        });
        // this.initialChart();
        window.scrollTo(0, 0)
    }

    QueryDate(value) {
        this.loaderStatus = true;
        this.dateObj = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.initialChart(this.dateObj);
    }

    hideThePage = true;
    showActuals = false;
    initialChart(dateObj) {
        this.clearChartsData();
        this.showActuals = false;
        this.chartCategories = [];
        this.stateSelected = [];
        this.picChartData = [];
        this.clusterPieData = [];
        this.locationPieData = [];
        this.lengthStatus = false;
        this.clusterStatus = false;
        this.locationStatus = false;
        this.loaderStatus = true;
        this.hideThePage = true;
        this.d2hService.getAllStatesData(dateObj).subscribe((response: any) => {
            if (response.error === null) {
                this.hideThePage = false;
                this.loaderStatus = false;
                this.allStatesData = response;
                this.chartCategories = this.allStatesData.data.details.state;
                this.goldDiaInfo.actuals = this.allStatesData.data.actuals;
                this.goldDiaInfo.target = this.allStatesData.data.target;
                this.lengthStatus = (this.allStatesData.data.details.state.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.allStatesData.data.details.actuals.value.gold;
                this.stackedDiamondValue = this.allStatesData.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = this.allStatesData.data.details.target.qty.diamond;
                this.diaQtyActual = this.allStatesData.data.details.actuals.qty.diamond;
                this.diaValueTarget = this.allStatesData.data.details.target.value.diamond;
                this.diaValueActual = this.allStatesData.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = this.allStatesData.data.details.target.qty.gold;
                this.goldQtyActual = this.allStatesData.data.details.actuals.qty.gold;
                this.goldValueTarget = this.allStatesData.data.details.target.value.gold;
                this.goldValueActual = this.allStatesData.data.details.actuals.value.gold;

                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.pieContainer();
                    this.stackedContainer();
                    this.diaQtygroupContainer();
                    this.diaValuegroupContainer();
                    this.goldQtygroupContainer();
                    this.goldValuegroupContainer();
                    this.cdr.detectChanges();
                } else {
                    this.loaderStatus = false;
                    this.hideThePage = true
                }
            } else {
                this.loaderStatus = false;
                this.hideThePage = true;
            }
        });

    }

    pieContainer() {
        this.stateDonutValue = 0;
        for (let i = 0; i < this.allStatesData.data.details.state.length; i++) {
            let obj = {
                name: this.allStatesData.data.details.state[i],
                y: this.allStatesData.data.details.actuals.value.gold[i] + this.allStatesData.data.details.actuals.value.diamond[i]
            }
            this.picChartData.push(obj);
        }
        for (const item of this.picChartData) {
            this.stateDonutValue = this.stateDonutValue + item.y;
            if (item.y !== 0) {
                this.showActuals = true;

            }
        }
        this.cdr.detectChanges();
        this.statePieChart = Highcharts.chart('pieContainer', {
            chart: {
                type: 'pie',
            },
            colors: ['#20B070', '#0078A6', '#FCB441', '#F9766D', '#5E1833', '#F27521', '#A53D26', '#5A9AD5'],
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:26px;color:#FDA706">${this.stateDonutValue.toFixed(2)}<br>(LACs)</div>`
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
                    return `${this.name.toUpperCase()}:${this.percentage.toFixed(2)} % (${this.y.toFixed(2)}L)`;
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
                            if (this.stateSelected[0] === event.point.name) {
                                this.initialChart(this.dateObj);
                            } else {
                                this.stateSelected[0] = event.point.name;
                                this.callingSingleState(this.stateSelected[0]);
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
            }],
            navigation: {
                buttonOptions: {
                    enabled: true
                }
            }
        });
    }

    stackedContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('stackedContainer', {
            chart: {
                type: 'column',
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
                        enabled: true,
                        allowOverlap: true,
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

    callingSingleState(state) {
        // console.log(event.point.name);
        this.clusterPieData = [];
        this.clusterStatus = true;
        this.loaderStatus = true;
        this.locationStatus = false
        this.lengthStatus = false;
        this.clusterSelected = []
        this.chartCategories = []
        for (const item of this.picChartData) {
            if (item.name === state) {
                this.stateDonutValue = item.y;
            }
        }
        this.statePieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.stateDonutValue.toFixed(2)}<br>(LACs)</div>` });
        this.d2hService.getSingleStateClustersData(this.dateObj, state).subscribe((response: any) => {
            if (response.error === null) {
                this.singlestateClustersData = response;
                this.loaderStatus = false;
                this.chartCategories = this.singlestateClustersData.data.details.cluster;
                this.goldDiaInfo.actuals = this.singlestateClustersData.data.actuals;
                this.goldDiaInfo.target = this.singlestateClustersData.data.target;

                this.lengthStatus = (this.singlestateClustersData.data.details.cluster.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.singlestateClustersData.data.details.actuals.value.gold;
                this.stackedDiamondValue = this.singlestateClustersData.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = this.singlestateClustersData.data.details.target.qty.diamond;
                this.diaQtyActual = this.singlestateClustersData.data.details.actuals.qty.diamond;
                this.diaValueTarget = this.singlestateClustersData.data.details.target.value.diamond;
                this.diaValueActual = this.singlestateClustersData.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = this.singlestateClustersData.data.details.target.qty.gold;
                this.goldQtyActual = this.singlestateClustersData.data.details.actuals.qty.gold;
                this.goldValueTarget = this.singlestateClustersData.data.details.target.value.gold;
                this.goldValueActual = this.singlestateClustersData.data.details.actuals.value.gold;
                this.cdr.detectChanges();
                this.clusterPieContainer();
                this.stackedContainer();
                this.diaQtygroupContainer();
                this.diaValuegroupContainer();
                this.goldQtygroupContainer();
                this.goldValuegroupContainer();
            } else {
                this.loaderStatus = false;
            }

        });


    }

    clusterPieContainer() {
        this.clusterDonutValue = 0;
        for (let i = 0; i < this.singlestateClustersData.data.details.cluster.length; i++) {
            let obj = {
                name: this.singlestateClustersData.data.details.cluster[i],
                y: this.singlestateClustersData.data.details.actuals.value.gold[i] + this.singlestateClustersData.data.details.actuals.value.diamond[i]
            }
            this.clusterPieData.push(obj);
            this.clusterDonutValue = this.clusterDonutValue + obj.y;
        }

        this.clusterPieChart = Highcharts.chart('clusterPieContainer', {
            chart: {
                type: 'pie',
            },

            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:26px;color:#FDA706">${this.clusterDonutValue.toFixed(2)}<br>(LACs)</div>`
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
                    return `${this.name.toUpperCase()}:${this.percentage.toFixed(2)}% (${this.y.toFixed(2)}L )`;
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
                            if (this.clusterSelected[0] === event.point.name) {
                                this.callingSingleState(this.stateSelected[0]);
                            } else {
                                this.clusterSelected[0] = event.point.name;
                                this.callingSingleCluster(this.clusterSelected[0]);
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
                data: this.clusterPieData,
                type: undefined
            }],
            navigation: {
                buttonOptions: {
                    enabled: true
                }
            }
        });
    }

    callingSingleCluster(cluster) {
        // console.log(event.point.name);
        this.locationStatus = true;
        this.lengthStatus = false;
        this.loaderStatus = true;
        this.locationSelected = []
        this.locationPieData = [];
        this.chartCategories = [];
        for (const item of this.clusterPieData) {
            if (item.name === cluster) {
                this.clusterDonutValue = item.y;
            }
        }
        this.clusterPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.clusterDonutValue.toFixed(2)}<br>(LACs)</div>` });
        this.d2hService.getSingleClusterLocationsData(this.dateObj, this.stateSelected[0], cluster).subscribe((response: any) => {
            if (response.error === null) {
                this.singleclusterLocationsData = response;
                this.loaderStatus = false;
                this.chartCategories = this.singleclusterLocationsData.data.details.location;
                this.goldDiaInfo.actuals = this.singleclusterLocationsData.data.actuals;
                this.goldDiaInfo.target = this.singleclusterLocationsData.data.target;
                this.lengthStatus = (this.singleclusterLocationsData.data.details.location.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.singleclusterLocationsData.data.details.actuals.value.gold;
                this.stackedDiamondValue = this.singleclusterLocationsData.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = this.singleclusterLocationsData.data.details.target.qty.diamond;
                this.diaQtyActual = this.singleclusterLocationsData.data.details.actuals.qty.diamond;
                this.diaValueTarget = this.singleclusterLocationsData.data.details.target.value.diamond;
                this.diaValueActual = this.singleclusterLocationsData.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = this.singleclusterLocationsData.data.details.target.qty.gold;
                this.goldQtyActual = this.singleclusterLocationsData.data.details.actuals.qty.gold;
                this.goldValueTarget = this.singleclusterLocationsData.data.details.target.value.gold;
                this.goldValueActual = this.singleclusterLocationsData.data.details.actuals.value.gold;

                this.cdr.detectChanges();
                this.locationPieContainer();
                this.stackedContainer();
                this.diaQtygroupContainer();
                this.diaValuegroupContainer();
                this.goldQtygroupContainer();
                this.goldValuegroupContainer();
            } else {
                this.loaderStatus = false;
            }
        });
    }

    locationPieContainer() {
        this.locationDonutValue = 0;
        for (let i = 0; i < this.singleclusterLocationsData.data.details.location.length; i++) {
            let obj = {
                name: this.singleclusterLocationsData.data.details.location[i],
                y: this.singleclusterLocationsData.data.details.actuals.value.gold[i] + this.singleclusterLocationsData.data.details.actuals.value.diamond[i]
            }
            this.locationPieData.push(obj);
            this.locationDonutValue = this.locationDonutValue + obj.y;
        }
        this.locationPieChart = Highcharts.chart('locationPieContainer', {
            chart: {
                type: 'pie',
            },

            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:26px;color:#FDA706">${this.locationDonutValue.toFixed(2)}<br>(LACs)</div>`
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
                    return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % (${this.y.toFixed(2)}L)`;
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
                            if (this.locationSelected[0] === event.point.name) {
                                this.callingSingleCluster(this.clusterSelected[0]);
                            } else {
                                this.locationSelected[0] = event.point.name;
                                this.callingTeams(this.locationSelected[0]);
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
                data: this.locationPieData,
                type: undefined
            }],
            navigation: {
                buttonOptions: {
                    enabled: true
                }
            }
        });
    }

    callingTeams(location) {
        this.lengthStatus = false;
        this.loaderStatus = true;
        ;
        for (const item of this.locationPieData) {
            if (item.name === location) {
                this.locationDonutValue = item.y;
            }
        }
        this.locationPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.locationDonutValue.toFixed(2)}<br>(LACs)</div>` });
        this.d2hService.getLocationWiseTeams(this.dateObj, location).subscribe((response: any) => {
            if (response.error === null) {
                this.loaderStatus = false;
                this.locationsWiseTeamsData = response;
                this.chartCategories = this.locationsWiseTeamsData.data.details.teams;

                this.goldDiaInfo.actuals = this.locationsWiseTeamsData.data.actuals;
                this.goldDiaInfo.target = this.locationsWiseTeamsData.data.target;
                this.lengthStatus = (this.locationsWiseTeamsData.data.details.teams.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.locationsWiseTeamsData.data.details.actuals.value.gold;
                this.stackedDiamondValue = this.locationsWiseTeamsData.data.details.actuals.value.diamond;
                //Diamond charts data
                this.diaQtyTarget = this.locationsWiseTeamsData.data.details.target.qty.diamond;
                this.diaQtyActual = this.locationsWiseTeamsData.data.details.actuals.qty.diamond;
                this.diaValueTarget = this.locationsWiseTeamsData.data.details.target.value.diamond;
                this.diaValueActual = this.locationsWiseTeamsData.data.details.actuals.value.diamond;
                //Gold charts data
                this.goldQtyTarget = this.locationsWiseTeamsData.data.details.target.qty.gold;
                this.goldQtyActual = this.locationsWiseTeamsData.data.details.actuals.qty.gold;
                this.goldValueTarget = this.locationsWiseTeamsData.data.details.target.value.gold;
                this.goldValueActual = this.locationsWiseTeamsData.data.details.actuals.value.gold;
                this.cdr.detectChanges();
                this.stackedContainer();
                this.diaQtygroupContainer();
                this.diaValuegroupContainer();
                this.goldQtygroupContainer();
                this.goldValuegroupContainer();
            } else {
                this.loaderStatus = false;
            }

        });

    }

    resetGraphs() {
        this.stateCharts = true;
        this.culsterWiseCharts = false;
        this.initialChart(this.dateObj);
    }

    lineChartConvertion(id) {
        switch (id) {
            case 'diaQtygroupContainer': {
                this.diaQtygroupChartType = this.diaQtygroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.diaQtygroupContainer();
                break;
            }
            case 'diaValuegroupContainer': {
                this.diaValuegroupChartType = this.diaValuegroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.diaValuegroupContainer();
                break;
            }
            case 'goldQtygroupContainer': {
                this.goldQtygroupChartType = this.goldQtygroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.goldQtygroupContainer();
                break;
            }
            case 'goldValuegroupContainer': {
                this.goldValuegroupChartType = this.goldValuegroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.goldValuegroupContainer();
                break;
            }
        }
    }
    clearChartsData() {
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
}
