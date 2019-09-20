import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { ConversionD2HService } from './location-wise-d2h.service';
// import { constants } from './../../shared-modules/app.constant'
@Component({
    selector: 'conversion-location-wise-d2h',
    templateUrl: './location-wise-d2h.component.html',
    styleUrls: ['location-wise-d2h.component.css']
})

export class ConvesionLocationwiseD2hComponent {
    picChartData = [];
    clusterPieData = [];
    locationPieData = [];

    chartCategories = [];
    // clusterChartCategories = [];
    // teamChartCategories = [];

    stackedGoldValue = [];
    stackedDiamondValue = [];

    goldConversionTarget = [];
    goldConversionActual = [];
    diaConversionTarget = [];
    diaConversionActual = [];

    goldWalkinsTotal = [];
    goldWalkinsPreferred = [];
    diaWalkinsTotal = [];
    diaWalkinsPreferred = [];

    lengthStatus = false;
    stateCharts = true;
    culsterWiseCharts = false;
    locationStatus = false;
    clusterStatus = false;

    allStatesData;
    singlestateClustersData;
    singleclusterLocationsData;
    locationsWiseTeamsData;

    stateSelected = [];
    clusterSelected = [];
    locationSelected = [];

    stateDonutValue = 0;
    clusterDonutValue = 0;
    locationDonutValue = 0;

    locationSHWKpiInfo: any = {
    };
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
    };

    statePieChart: any = {};
    clusterPieChart: any = {};
    locationPieChart: any = {};

    dateObject: any;
    loaderStatus = false;
    hideThePage = false;
    constructor(private readonly conversionD2HService: ConversionD2HService, public cdr: ChangeDetectorRef,
    ) {
    }
    QueryDate(value) {
        this.dateObject = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.initialChart(this.dateObject);
    }
    ngOnInit() {
        Highcharts.setOptions({
            credits: {
                enabled: false
            }, title: {
                text: ''
            }
        });
    }

    showActuals = false;
    initialChart(dateObject) {
        this.chartCategories = [];
        this.stateSelected = [];

        this.picChartData = [];
        this.clusterPieData = [];
        this.locationPieData = [];
        this.lengthStatus = false;
        this.clusterStatus = false;
        this.locationStatus = false;
        this.showActuals = false;
        this.loaderStatus = true
        this.hideThePage = true;

        this.conversionD2HService.getAllStatesData(this.dateObject).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false;
                this.hideThePage = false;
                this.allStatesData = data.data
                this.chartCategories = this.allStatesData.details.state;
                this.locationSHWKpiInfo = {
                    diamondTotal: this.allStatesData.diatotalwalkins, diamondPreferred: this.allStatesData.diapreferredwalkins,
                    goldTotal: this.allStatesData.goldtotalwalkins, goldPreferred: this.allStatesData.goldpreferredwalkins,
                };
                this.locationSHWKpiInfo.diamondPercentage = 0
                this.locationSHWKpiInfo.goldPercentage = 0
                if (this.allStatesData.diatotalwalkins) {
                    this.locationSHWKpiInfo.diamondPercentage = (this.allStatesData.diapreferredwalkins / this.allStatesData.diatotalwalkins) * 100
                }
                if (this.allStatesData.goldtotalwalkins) {
                    this.locationSHWKpiInfo.goldPercentage = (this.allStatesData.goldpreferredwalkins / this.allStatesData.goldtotalwalkins) * 100
                }

                this.lengthStatus = (this.allStatesData.details.state.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.allStatesData.details.walkins.gold.preferredWalkins;
                this.stackedDiamondValue = this.allStatesData.details.walkins.diamond.preferredWalkins;
                //Gold and Diamond Converiosn data

                this.goldConversionTarget = this.allStatesData.details.targets.gold;
                this.goldConversionActual = this.allStatesData.details.actuals.gold;

                this.diaConversionTarget = this.allStatesData.details.targets.diamond;
                this.diaConversionActual = this.allStatesData.details.actuals.diamond;

                //Gold and Diamond walkins data
                this.goldWalkinsTotal = this.allStatesData.details.walkins.gold.totalWalkins;
                this.goldWalkinsPreferred = this.allStatesData.details.walkins.gold.preferredWalkins;


                this.diaWalkinsTotal = this.allStatesData.details.walkins.diamond.totalWalkins;
                this.diaWalkinsPreferred = this.allStatesData.details.walkins.diamond.preferredWalkins;


                this.pieContainer();
                this.stackedContainer();
                this.goldConversionContainer();
                this.diamondConversionContainer();
                this.goldWalkinsContainer();
                this.diamondsWalkinsContainer();
                this.cdr.detectChanges();
            } else {
                this.loaderStatus = false
                this.hideThePage = true
            }
        })
    }

    pieContainer() {
        this.stateDonutValue = 0;
        for (let i = 0; i < this.allStatesData.details.state.length; i++) {
            let obj = {
                name: this.allStatesData.details.state[i],
                y: this.allStatesData.details.walkins.gold.preferredWalkins[i] + this.allStatesData.details.walkins.diamond.preferredWalkins[i]
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
            colors: ['#5E1833', '#F27521', '#0078A6', '#FCB441', '#A53D26', '#5A9AD5', '#20B070', '#F9766D',],
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:34px;color:#FDA706">${this.stateDonutValue.toFixed(2)}<br>(Walkins)</div>`
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
                    return `${this.name}:${this.percentage.toFixed(2)}%(${this.y.toFixed(2)})`;
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
                        enabled: false
                    },
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.stateSelected[0] === event.point.name) {
                                this.initialChart(this.dateObject);
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
                    text: 'Preferred Walkins'
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
                name: 'GOLD',
                data: this.stackedGoldValue,
                color: '#FFD700',
                type: undefined
            }, {
                name: 'DIAMOND',
                data: this.stackedDiamondValue,
                color: '#2196f3',
                type: undefined
            }]
        });
    }

    goldConversionChartType = 'column';
    goldConversionContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('goldConversionContainer', {
            chart: {
                type: this.goldConversionChartType,
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: 'Conversion %'
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
                name: 'TARGET',
                data: this.goldConversionTarget,
                color: '#CC4125',
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.goldConversionActual,
                color: '#FFD700',
                type: undefined
            }],
        });

    }
    diamondConversChartType = 'column';
    diamondConversionContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('diamondConversionContainer', {
            chart: {
                type: this.diamondConversChartType,
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: 'Conversion %'
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
                name: 'TARGET',
                data: this.diaConversionTarget,
                color: '#CC4125',
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.diaConversionActual,
                color: '#2196f3',
                type: undefined
            }]
        });
    }

    goldWalkinsChartType = 'column';
    goldWalkinsContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('goldWalkinsContainer', {
            chart: {
                type: this.goldWalkinsChartType,
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: 'Walkins Count'
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
                name: 'TOTAL',
                data: this.goldWalkinsTotal,
                color: '#CC4125',
                type: undefined
            }, {
                name: 'PREFERRED',
                data: this.goldWalkinsPreferred,
                color: '#FFD700',
                type: undefined
            }],
        });
    }
    diamondsWalkinsChartType = 'column';
    diamondsWalkinsContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('diamondsWalkinsContainer', {
            chart: {
                type: this.diamondsWalkinsChartType,
            },
            xAxis: {
                categories: this.chartCategories
            },
            yAxis: {
                title: {
                    text: 'Walkins Count'
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
                name: 'TOTAL',
                data: this.diaWalkinsTotal,
                color: '#CC4125',
                type: undefined
            }, {
                name: 'PREFERRED',
                data: this.diaWalkinsPreferred,
                color: '#2196f3',
                type: undefined
            }],
        });
    }

    callingSingleState(state) {
        this.clusterStatus = true;
        this.locationStatus = false
        this.lengthStatus = false;
        this.loaderStatus = true

        this.clusterPieData = [];
        this.clusterSelected = []
        this.chartCategories = [];

        for (const item of this.picChartData) {
            if (item.name === state) {
                this.stateDonutValue = item.y;
            }
        }
        this.statePieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.stateDonutValue.toFixed(2)}<br>(Walkins)</div>` });

        // this.singlestateClustersData = this.conversionD2HService.getSingleStateClustersData();
        this.conversionD2HService.getSingleStateClustersData(this.dateObject, state).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.singlestateClustersData = data.data
                this.chartCategories = this.singlestateClustersData.details.clusters;

                this.locationSHWKpiInfo = {
                    diamondTotal: this.singlestateClustersData.diatotalwalkins, diamondPreferred: this.singlestateClustersData.diapreferredwalkins,
                    goldTotal: this.singlestateClustersData.goldtotalwalkins, goldPreferred: this.singlestateClustersData.goldpreferredwalkins,
                };
                this.locationSHWKpiInfo.diamondPercentage = 0
                this.locationSHWKpiInfo.goldPercentage = 0
                if (this.allStatesData.diatotalwalkins) {
                    this.locationSHWKpiInfo.diamondPercentage = (this.singlestateClustersData.diapreferredwalkins / this.singlestateClustersData.diatotalwalkins) * 100
                }
                if (this.allStatesData.goldtotalwalkins) {
                    this.locationSHWKpiInfo.goldPercentage = (this.singlestateClustersData.goldpreferredwalkins / this.singlestateClustersData.goldtotalwalkins) * 100
                }
                // this.locationSHWKpiInfo.diamondPercentage = this.singlestateClustersData.diamondConversion;
                // this.locationSHWKpiInfo.goldPercentage = this.singlestateClustersData.goldConversion;

                this.lengthStatus = (this.singlestateClustersData.details.clusters.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.singlestateClustersData.details.walkins.gold.preferredWalkins;
                this.stackedDiamondValue = this.singlestateClustersData.details.walkins.diamond.preferredWalkins;
                //Gold and Diamond Converiosn data

                this.goldConversionTarget = this.singlestateClustersData.details.targets.gold;
                this.goldConversionActual = this.singlestateClustersData.details.actuals.gold;

                this.diaConversionTarget = this.singlestateClustersData.details.targets.diamond;
                this.diaConversionActual = this.singlestateClustersData.details.actuals.diamond;

                //Gold and Diamond walkins data
                this.goldWalkinsTotal = this.singlestateClustersData.details.walkins.gold.totalWalkins;
                this.goldWalkinsPreferred = this.singlestateClustersData.details.walkins.gold.preferredWalkins;

                this.diaWalkinsTotal = this.singlestateClustersData.details.walkins.diamond.totalWalkins;
                this.diaWalkinsPreferred = this.singlestateClustersData.details.walkins.diamond.preferredWalkins;

                this.cdr.detectChanges();
                this.clusterPieContainer();
                this.stackedContainer();
                this.goldConversionContainer();
                this.diamondConversionContainer();
                this.goldWalkinsContainer();
                this.diamondsWalkinsContainer();
            } else {
                this.loaderStatus = false
            }
        })


    }

    clusterPieContainer() {
        this.clusterDonutValue = 0;
        for (let i = 0; i < this.singlestateClustersData.details.clusters.length; i++) {
            let obj = {
                name: this.singlestateClustersData.details.clusters[i],
                y: this.singlestateClustersData.details.walkins.gold.preferredWalkins[i] + this.singlestateClustersData.details.walkins.diamond.preferredWalkins[i]
            }
            this.clusterPieData.push(obj);
            this.clusterDonutValue = this.clusterDonutValue + obj.y;
        }
        this.clusterPieChart = Highcharts.chart('clusterPieContainer', {
            chart: {
                type: 'pie',
            },
            colors: ['#0078A6', '#FCB441', '#A53D26', '#5E1833', '#F27521', '#5A9AD5', '#20B070', '#F9766D',],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },

            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:34px;color:#FDA706">${this.clusterDonutValue.toFixed(2)}<br>(Walkins)</div>`
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
                    return `${this.name}:${this.percentage.toFixed(2)}%(${this.y.toFixed(2)})`;
                }
            },

            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,
                    dataLabels: {
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

        this.clusterPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.clusterDonutValue.toFixed(2)}<br>(Walkins)</div>` });
        this.conversionD2HService.getSingleClusterLocationsData(this.dateObject, cluster).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.singleclusterLocationsData = data.data;
                this.chartCategories = this.singleclusterLocationsData.details.locations;

                this.locationSHWKpiInfo = {
                    diamondTotal: this.singleclusterLocationsData.diatotalwalkins, diamondPreferred: this.singleclusterLocationsData.diapreferredwalkins,
                    goldTotal: this.singleclusterLocationsData.goldtotalwalkins, goldPreferred: this.singleclusterLocationsData.goldpreferredwalkins,
                };
                this.locationSHWKpiInfo.diamondPercentage = 0
                this.locationSHWKpiInfo.goldPercentage = 0
                if (this.allStatesData.diatotalwalkins) {
                    this.locationSHWKpiInfo.diamondPercentage = (this.singleclusterLocationsData.diapreferredwalkins / this.singleclusterLocationsData.diatotalwalkins) * 100
                }
                if (this.allStatesData.goldtotalwalkins) {
                    this.locationSHWKpiInfo.goldPercentage = (this.singleclusterLocationsData.goldpreferredwalkins / this.singleclusterLocationsData.goldtotalwalkins) * 100
                }

                this.lengthStatus = (this.singleclusterLocationsData.details.locations.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.singleclusterLocationsData.details.walkins.gold.preferredWalkins;
                this.stackedDiamondValue = this.singleclusterLocationsData.details.walkins.diamond.preferredWalkins;
                //Gold and Diamond Converiosn data

                this.goldConversionTarget = this.singleclusterLocationsData.details.targets.gold;
                this.goldConversionActual = this.singleclusterLocationsData.details.actuals.gold;

                this.diaConversionTarget = this.singleclusterLocationsData.details.targets.diamond;
                this.diaConversionActual = this.singleclusterLocationsData.details.actuals.diamond;

                //Gold and Diamond walkins data
                this.goldWalkinsTotal = this.singleclusterLocationsData.details.walkins.gold.totalWalkins;
                this.goldWalkinsPreferred = this.singleclusterLocationsData.details.walkins.gold.preferredWalkins;

                this.diaWalkinsTotal = this.singleclusterLocationsData.details.walkins.diamond.totalWalkins;
                this.diaWalkinsPreferred = this.singleclusterLocationsData.details.walkins.diamond.preferredWalkins;

                this.cdr.detectChanges();
                this.locationPieContainer();
                this.stackedContainer();
                this.goldConversionContainer();
                this.diamondConversionContainer();
                this.goldWalkinsContainer();
                this.diamondsWalkinsContainer();
            } else {
                this.loaderStatus = false
            }
        })

    }

    locationPieContainer() {
        this.locationDonutValue = 0;
        for (let i = 0; i < this.singleclusterLocationsData.details.locations.length; i++) {
            let obj = {
                name: this.singleclusterLocationsData.details.locations[i],
                y: this.singleclusterLocationsData.details.walkins.gold.preferredWalkins[i] + this.singleclusterLocationsData.details.walkins.diamond.preferredWalkins[i]
            }
            this.locationPieData.push(obj);
            this.locationDonutValue = this.locationDonutValue + obj.y;
        }
        this.locationPieChart = Highcharts.chart('locationPieContainer', {
            chart: {
                type: 'pie',
            },
            colors: ['#5A9AD5', '#20B070', '#F9766D', '#5E1833', '#F27521', '#0078A6', '#FCB441', '#A53D26',],
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:34px;color:#FDA706">${this.locationDonutValue.toFixed(2)}<br>(Walkins)</div>`
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
                    return `${this.name}:${this.percentage.toFixed(2)}%(${this.y.toFixed(2)})`;
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,
                    dataLabels: {
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

        for (const item of this.locationPieData) {
            if (item.name === location) {
                this.locationDonutValue = item.y;
            }
        }

        this.locationPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.locationDonutValue.toFixed(2)}<br>(Walkins)</div>` });
        this.conversionD2HService.getLocationWiseTeams(this.dateObject, location).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.locationsWiseTeamsData = data.data;
                this.chartCategories = this.locationsWiseTeamsData.details.teams;

                this.locationSHWKpiInfo = {
                    diamondTotal: this.locationsWiseTeamsData.diatotalwalkins, diamondPreferred: this.locationsWiseTeamsData.diapreferredwalkins,
                    goldTotal: this.locationsWiseTeamsData.goldtotalwalkins, goldPreferred: this.locationsWiseTeamsData.goldpreferredwalkins,
                };
                this.locationSHWKpiInfo.diamondPercentage = 0
                this.locationSHWKpiInfo.goldPercentage = 0
                if (this.allStatesData.diatotalwalkins) {
                    this.locationSHWKpiInfo.diamondPercentage = (this.locationsWiseTeamsData.diapreferredwalkins / this.locationsWiseTeamsData.diatotalwalkins) * 100
                }
                if (this.allStatesData.goldtotalwalkins) {
                    this.locationSHWKpiInfo.goldPercentage = (this.locationsWiseTeamsData.goldpreferredwalkins / this.locationsWiseTeamsData.goldtotalwalkins) * 100
                }

                this.lengthStatus = (this.locationsWiseTeamsData.details.teams.length > 6) ? true : false;
                //stacked chart data
                this.stackedGoldValue = this.locationsWiseTeamsData.details.walkins.gold.preferredWalkins;
                this.stackedDiamondValue = this.locationsWiseTeamsData.details.walkins.diamond.preferredWalkins;
                //Gold and Diamond Converiosn data

                this.goldConversionTarget = this.locationsWiseTeamsData.details.targets.gold;
                this.goldConversionActual = this.locationsWiseTeamsData.details.actuals.gold;

                this.diaConversionTarget = this.locationsWiseTeamsData.details.targets.diamond;
                this.diaConversionActual = this.locationsWiseTeamsData.details.actuals.diamond;

                //Gold and Diamond walkins data
                this.goldWalkinsTotal = this.locationsWiseTeamsData.details.walkins.gold.totalWalkins;
                this.goldWalkinsPreferred = this.locationsWiseTeamsData.details.walkins.gold.preferredWalkins;

                this.diaWalkinsTotal = this.locationsWiseTeamsData.details.walkins.diamond.totalWalkins;
                this.diaWalkinsPreferred = this.locationsWiseTeamsData.details.walkins.diamond.preferredWalkins;
                this.cdr.detectChanges();
                this.stackedContainer();
                this.goldConversionContainer();
                this.diamondConversionContainer();
                this.goldWalkinsContainer();
                this.diamondsWalkinsContainer();
            } else {
                this.loaderStatus = false;
            }
        });

    }

    resetGraphs() {
        this.stateCharts = true;
        this.culsterWiseCharts = false;
        this.initialChart(this.dateObject);
    }

    lineChartConvertion(id) {
        switch (id) {
            case 'goldConversionContainer': {
                this.goldConversionChartType = this.goldConversionChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.goldConversionContainer();
                break;
            }
            case 'diamondConversionContainer': {
                this.diamondConversChartType = this.diamondConversChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.diamondConversionContainer();
                break;
            }
            case 'goldWalkinsContainer': {
                this.goldWalkinsChartType = this.goldWalkinsChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.goldWalkinsContainer();
                break;
            }
            case 'diamondsWalkinsContainer': {
                this.diamondsWalkinsChartType = this.diamondsWalkinsChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.diamondsWalkinsContainer();
                break;
            }
        }
    }
}
