import { Component, ChangeDetectorRef } from '@angular/core';
import { ConversionLocationWiseSHWService } from './location-wise.service'
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from '../../shared-modules/app.constant';
import { Router } from "@angular/router";
@Component({
    selector: 'conversion-location-wise-shw',
    templateUrl: './location-wise.component.html'
})

export class ConversionLocationWiseSHWComponent {
    serviceInfo: any = {};
    commonPlotOptions: any = {
        dataLabels: {
            enabled: true,
            allowOverlap: true,
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
    }

    constructor(
        public cdr: ChangeDetectorRef,
        private readonly shwService: ConversionLocationWiseSHWService,
        private readonly router: Router,
    ) { }

    loading = false
    dateObject: any
    QueryDate(value) {
        this.dateObject = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.getChartData()
    }

    itemsSelected = []
    categoriesObj: any = []
    salesPersonCategories: any = []
    goldActualData: any = []
    diamondActualData: any = []
    goldTargetData: any = []
    diamondTargetData: any = []
    goldPreferredWalkinData: any = []
    diamondPreferredWalkinData: any = []
    goldTotalWalkinData: any = []
    diamondTotalWalkinData: any = []
    salesgoldTotalWalkin: any = []
    salesdiamondTotalWalkin: any = []
    salesgoldPreferredWalkin: any = []
    salesdiamondPreferredWalin: any = []
    locationSHWKpiInfo: any = {}
    diamondPercentage: any
    goldPercentage: any
    response;
    branchResponse;
    unSubscribe: any
    hideThePage = false
    loaderStatus = false
    totalConversion
    showActuals = false
    ngOnInit() {
        //this.getChartData()
    }

    getChartData() {
        this.loaderStatus = true
        this.itemsSelected = [];
        this.categoriesObj = [];
        this.pieChartData = [];
        this.diamondPercentage = 0
        this.goldPercentage = 0
        this.showActuals = false
        this.unSubscribe = this.shwService.getAllLocationsData(this.dateObject).subscribe(((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.response = data.data
                this.salesPersonStatus = false
                if (this.response.diamondTotalwalkins) {
                    this.diamondPercentage = (this.response.diamondPreferredwalkins / this.response.diamondTotalwalkins) * 100
                }
                if (this.response.goldTotalwalkins) {
                    this.goldPercentage = (this.response.goldPreferredwalkins / this.response.goldTotalwalkins) * 100
                }
                //prefererd/total
                this.getStateDetailsData()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true;
                this.loaderStatus = false
            }
        }));
    }
    getStateDetailsData() {
        this.totalConversion = this.response.diamondPreferredwalkins + this.response.goldPreferredwalkins
        this.categoriesObj = this.response.details.locations

        this.goldActualData = this.response.details.actuals.gold
        this.diamondActualData = this.response.details.actuals.diamond
        this.goldTargetData = this.response.details.targets.gold
        this.diamondTargetData = this.response.details.targets.diamond

        this.goldPreferredWalkinData = this.response.details.walkins.gold.preferredWalkins
        this.diamondPreferredWalkinData = this.response.details.walkins.diamond.preferredWalkins
        this.goldTotalWalkinData = this.response.details.walkins.gold.totalWalkins
        this.diamondTotalWalkinData = this.response.details.walkins.diamond.totalWalkins
        this.locationSHWKpiInfo = {
            diamondTotal: this.response.diamondTotalwalkins, diamondPreferred: this.response.diamondPreferredwalkins,
            goldTotal: this.response.goldTotalwalkins, goldPreferred: this.response.goldPreferredwalkins,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };

        this.cdr.detectChanges();
        this.getPieChart()
        this.getStackChartLocationWise()
        this.getGoldData()
        this.getDiamondData()
        this.getGoldWalkins();
        this.getDiamondWalkins()
    }
    initialChart() {
        this.itemsSelected = [];
        this.loaderStatus = true
        this.categoriesObj = [];
        this.pieChartData = [];
        this.salesPersonStatus = false
        this.diamondPercentage = 0
        this.goldPercentage = 0

        this.unSubscribe = this.shwService.getAllLocationsData(this.dateObject).subscribe(((data: any) => {
            if (data.error === null && data.data !== null) {
                this.hideThePage = false;
                this.loaderStatus = false;
                this.response = data.data;
                if (this.response.diamondTotalwalkins) {
                    this.diamondPercentage = (this.response.diamondPreferredwalkins / this.response.diamondTotalwalkins) * 100
                }
                if (this.response.goldTotalwalkins) {
                    this.goldPercentage = (this.response.goldPreferredwalkins / this.response.goldTotalwalkins) * 100
                }
                this.getLocationDetailsDataWithoutPie()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true
                this.loaderStatus = false
            }
        }));
    }

    getLocationDetailsDataWithoutPie() {
        this.categoriesObj = this.response.details.locations
        this.totalConversion = this.response.diamondPreferredwalkins + this.response.goldPreferredwalkins;
        this.pieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalConversion.toFixed(2)}<br>(Walkins)</div>` });
        this.goldActualData = this.response.details.actuals.gold
        this.diamondActualData = this.response.details.actuals.diamond
        this.goldTargetData = this.response.details.targets.gold
        this.diamondTargetData = this.response.details.targets.diamond

        this.goldPreferredWalkinData = this.response.details.walkins.gold.preferredWalkins
        this.diamondPreferredWalkinData = this.response.details.walkins.diamond.preferredWalkins
        this.goldTotalWalkinData = this.response.details.walkins.gold.totalWalkins
        this.diamondTotalWalkinData = this.response.details.walkins.diamond.totalWalkins
        this.locationSHWKpiInfo = {
            diamondTotal: this.response.diamondTotalwalkins, diamondPreferred: this.response.diamondPreferredwalkins,
            goldTotal: this.response.goldTotalwalkins, goldPreferred: this.response.goldPreferredwalkins,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };

        this.cdr.detectChanges();
        this.getStackChartLocationWise();
        this.getGoldData();
        this.getDiamondData();
        this.getGoldWalkins();
        this.getDiamondWalkins();
    }
    pieChartData: any = [];
    pieChart: any = {};
    walkinMsg = 'Walkins Count';
    getPieChart() {
        this.pieChartData = [];
        for (let i = 0; i < this.categoriesObj.length; i++) {
            const obj = {
                name: this.categoriesObj[i],
                y: this.goldPreferredWalkinData[i] + this.diamondPreferredWalkinData[i]
            }
            this.pieChartData.push(obj)
        }

        for (const j of this.pieChartData) {
            if (j.y !== 0) {
                this.showActuals = true;
                break;
            }
        }
        const seriesData = [{
            name: 'Value',
            colorByPoint: true,
            data: this.pieChartData,
            type:undefined
        }]
        this.cdr.detectChanges();
        this.pieChart = Highcharts.chart('ticketsizepieContainershw', {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            colors: ['#5E1833', '#F27521', '#0078A6', '#FCB441', '#A53D26', '#5A9AD5', '#20B070', '#F9766D',],
            tooltip: {
            },

            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalConversion.toFixed(2)}<br>(Walkins)</div>`
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
                    return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y} )`;
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
                            if (this.itemsSelected[0] === event.point.name) {
                                this.initialChart();
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
                }
            },
            series: seriesData
        });
    }

    getDiamondData() {
        Highcharts.chart('targetvsActuals_diamond', {
            chart: {
                type: this.diamondTargetgroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categoriesObj
            },
            yAxis: {
                title: {
                    text: 'Conversion %'
                },

            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'TARGET',
                data: this.diamondTargetData,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'ACTUAL',
                data: this.diamondActualData,
                color: constants.diamondColour,
                type:undefined
            }

            ]
        });
    }

    getGoldData() {
        Highcharts.chart('targetvsActuals_gold', {
            chart: {
                type: this.goldTargetgroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categoriesObj
            },
            yAxis: {
                title: {
                    text: 'Conversion %'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },
            series: [{
                name: 'TARGET',
                data: this.goldTargetData,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'ACTUAL',
                data: this.goldActualData,
                color: constants.goldColour,
                type:undefined
            }
            ]
        });

    }

    getDiamondWalkins() {
        Highcharts.chart('diamondWalkins', {
            chart: {
                type: this.diamondWalkingroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categoriesObj
            },
            yAxis: {
                title: {
                    text: this.walkinMsg
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },

            series: [{
                name: 'TOTAL',
                data: this.diamondTotalWalkinData,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'PREFERRED',
                data: this.diamondPreferredWalkinData,
                color: constants.diamondColour,
                type:undefined
            }

            ]
        });

    }

    getGoldWalkins() {
        Highcharts.chart('goldWalkins', {
            chart: {
                type: this.goldWalkingroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categoriesObj
            },
            yAxis: {
                title: {
                    text: this.walkinMsg
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            },

            series: [{
                name: 'TOTAL',
                data: this.goldTotalWalkinData,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'PREFERRED',
                data: this.goldPreferredWalkinData,
                color: constants.goldColour,
                type:undefined
            }

            ]
        });

    }

    getDiamondDataSalesPerson() {
        Highcharts.chart('targetvsActuals_diamond_sales', {
            chart: {
                type: this.salesdiamondTargetgroupChartType,
                scrollablePlotArea: {
                    minWidth: this.setWidth,
                    scrollPositionX: 1
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.salesPersonCategories
            },
            yAxis: {
                title: {
                    text: this.walkinMsg
                },

            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        allowOverlap: true,
                        formatter() {
                            if (this.y) {
                                return this.y.toFixed(2)
                            }

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
                spline: {
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            if (this.y) {
                                return this.y.toFixed(2)
                            }

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
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'TOTAL',
                data: this.salesdiamondTotalWalkin,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'PREFERRED',
                data: this.salesdiamondPreferredWalin,
                color: constants.diamondColour,
                type:undefined
            }

            ]
        });
    }

    getGoldDataSalesPerson() {
        Highcharts.chart('targetvsActuals_gold_sales', {
            chart: {
                type: this.salesgoldTargetgroupChartType,
                scrollablePlotArea: {
                    minWidth: this.setWidth,
                    scrollPositionX: 1
                }
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.salesPersonCategories
            },
            yAxis: {
                title: {
                    text: this.walkinMsg
                }
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
                            if (this.y) {
                                return this.y.toFixed(2)
                            }
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
                spline: {
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            if (this.y) {
                                return this.y.toFixed(2)
                            }
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
                }
            },
            credits: {
                enabled: false
            },

            series: [{
                name: 'TOTAL',
                data: this.salesgoldTotalWalkin,
                color: constants.targetColor,
                type:undefined
            }, {
                name: 'PREFERRED',
                data: this.salesgoldPreferredWalkin,
                color: constants.goldColour,
                type:undefined
            }

            ]
        });

    }

    getStackChartLocationWise() {
        Highcharts.chart('goldDiamondsStack', {
            chart: {
                type: this.golddiamondChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categoriesObj
            },
            yAxis: {
                title: {
                    text: 'Preferred Walkins'
                }
            },
            credits: {
                enabled: false
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
                data: this.goldPreferredWalkinData,
                color: constants.goldColour,
                type:undefined
            }, {
                name: 'DIAMOND',
                data: this.diamondPreferredWalkinData,
                color: constants.diamondColour,
                type:undefined
            }

            ]
        });
    }
    golddiamondChartType: any = 'column';
    diamondTargetgroupChartType: any = 'column';
    goldTargetgroupChartType: any = 'column'
    goldWalkingroupChartType: any = 'column'
    diamondWalkingroupChartType: any = 'column'
    salesdiamondTargetgroupChartType: any = 'spline';
    salesgoldTargetgroupChartType: any = 'spline'
    lineChartConvertion(id) {
        switch (id) {
            case 'diamondTargetgroup': {
                this.diamondTargetgroupChartType = this.diamondTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondData();
                break;
            }
            case 'goldTargetgroup': {
                this.goldTargetgroupChartType = this.goldTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldData();
                break;
            }
            case 'salesgoldTargetgroup': {
                this.salesgoldTargetgroupChartType = this.salesgoldTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldDataSalesPerson()
                break;
            }
            case 'goldWalkingroup': {
                this.goldWalkingroupChartType = this.goldWalkingroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldWalkins();
                break;
            }
            case 'daimondWalkingroup': {
                this.diamondWalkingroupChartType = this.diamondWalkingroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondWalkins()
                break;
            }
            case 'salesdiamondTargetgroup': {
                this.salesdiamondTargetgroupChartType = this.salesdiamondTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondDataSalesPerson();
                break;
            }

        }
    }

    salesPersonStatus = false
    callingSingleBranch(location) {
        this.categoriesObj = [];
        this.salesPersonCategories = []
        this.diamondPercentage = 0
        this.goldPercentage = 0
        this.loaderStatus = true
        this.unSubscribe = this.shwService.getSingleLocationData(this.dateObject, location.point.name).subscribe((data: any) => {
            if (data.error == null && data.data !== null) {
                this.branchResponse = data.data
                this.salesPersonStatus = true
                this.loaderStatus = false
                this.hideThePage = false
                console.log(this.branchResponse.data.diamondTotalwalkins)
                if (this.branchResponse.data.diamondTotalwalkins) {
                    this.diamondPercentage = (this.branchResponse.data.diamondPreferredwalkins / this.branchResponse.data.diamondTotalwalkins) * 100
                }
                if (this.branchResponse.data.goldTotalwalkins) {
                    this.goldPercentage = (this.branchResponse.data.goldPreferredwalkins / this.branchResponse.data.goldTotalwalkins) * 100
                }
                this.getSingleLocationDetailsData()
            }
            else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true
                this.loaderStatus = false
            }
        })
    }
    setWidth = 0
    getSingleLocationDetailsData() {
        this.setWidth=0
        this.totalConversion = this.branchResponse.data.diamondPreferredwalkins + this.branchResponse.data.goldPreferredwalkins;
        this.pieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalConversion.toFixed(2)}<br>(Walkins)</div>` });
        this.categoriesObj = this.branchResponse.data.details.timeline
        this.salesPersonCategories = this.branchResponse.data.employeeDetails.employee

        this.goldActualData = this.branchResponse.data.details.actuals.gold
        this.diamondActualData = this.branchResponse.data.details.actuals.diamond
        this.goldTargetData = this.branchResponse.data.details.targets.gold
        this.diamondTargetData = this.branchResponse.data.details.targets.diamond
        this.salesgoldTotalWalkin = this.branchResponse.data.employeeDetails.walkins.gold.totalWalkins

        this.salesdiamondTotalWalkin = this.branchResponse.data.employeeDetails.walkins.diamond.totalWalkins

        this.salesgoldPreferredWalkin = this.branchResponse.data.employeeDetails.walkins.gold.preferredWalkins
        this.salesdiamondPreferredWalin = this.branchResponse.data.employeeDetails.walkins.diamond.preferredWalkins
        this.goldPreferredWalkinData = this.branchResponse.data.details.walkins.gold.preferredWalkins
        this.diamondPreferredWalkinData = this.branchResponse.data.details.walkins.diamond.preferredWalkins
        this.goldTotalWalkinData = this.branchResponse.data.details.walkins.gold.totalWalkins
        this.diamondTotalWalkinData = this.branchResponse.data.details.walkins.diamond.totalWalkins
        if (this.salesPersonCategories.length > 10) {
            this.setWidth = 2000
        }
        this.locationSHWKpiInfo = {
            diamondTotal: this.branchResponse.data.diamondTotalwalkins, diamondPreferred: this.branchResponse.data.diamondPreferredwalkins,
            goldTotal: this.branchResponse.data.goldTotalwalkins, goldPreferred: this.branchResponse.data.goldPreferredwalkins,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };

        this.cdr.detectChanges();
        // this.getPieChart()
        this.getStackChartLocationWise()
        this.getGoldData()
        this.getDiamondData()
        this.getGoldWalkins();
        this.getDiamondWalkins()
        this.getGoldDataSalesPerson()
        this.getDiamondDataSalesPerson()
    }
}

