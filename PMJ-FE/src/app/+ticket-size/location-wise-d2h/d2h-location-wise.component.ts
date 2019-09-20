import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from './../../shared-modules/app.constant'
import { TicketLocationWiseD2HService } from './d2h-location-wise.service'
import { Router } from "@angular/router";
@Component({
    selector: 'tickets-location-wise-d2h',
    templateUrl: './d2h-location-wise.component.html'
})

export class TicketLocationWiseD2HComponent {

    serviceInfo: any = {};
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
                    const points = this.chart.series;
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

    legendOptions = {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        floating: true,
        verticalAlign: 'bottom',
        useHTML: true,
        labelFormatter() {
            return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
        }
    }
    constructor(
        public cdr: ChangeDetectorRef,
        private readonly router: Router,
        private readonly d2hService: TicketLocationWiseD2HService
    ) { }
    unSubscribe: any
    loaderStatus = false
    hideThePage = false;
    dateObject: any;
    QueryDate(value) {
        this.dateObject = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.getChartData()
    }


    stateSelected = []
    clusterSelected = []
    locationSelected = []
    categoriesObj: any = []
    goldActualData: any = []
    diamondActualData: any = []
    goldTargetData: any = []
    diamondTargetData: any = []
    ticketsKpiInfo: any = {}
    diamondPercentage: any
    goldPercentage: any
    lengthStatus = false;
    stateResponse;
    clustersResponse;
    locationResponse
    clusterStatus;
    locationStatus;
    showActuals = false;

    ngOnInit() {
        window.scrollTo(0, 0)
    }

    getChartData() {
        this.loaderStatus = true
        this.showActuals = false
        this.stateSelected = [];
        this.clusterSelected = []
        this.locationSelected = []
        this.categoriesObj = [];
        this.pieChartData = [];
        this.lengthStatus = false;
        this.clusterStatus = false
        this.locationStatus = false
        this.unSubscribe = this.d2hService.getAllStatesData(this.dateObject).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.hideThePage = false;
                this.loaderStatus = false
                this.stateResponse = data.data
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.totalTicketSize = 0
                if (this.stateResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.stateResponse.data.actuals.diamond / this.stateResponse.data.targets.diamond) * 100
                }
                if (this.stateResponse.data.targets.gold) {
                    this.goldPercentage = (this.stateResponse.data.actuals.gold / this.stateResponse.data.targets.gold) * 100
                }
                this.stateDetailsData()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true;
                this.loaderStatus = false
            }
        });
    }

    stateDetailsData() {
        this.totalTicketSize = this.stateResponse.data.actuals.diamond + this.stateResponse.data.actuals.gold;
        this.categoriesObj = this.stateResponse.data.details.states
        if (this.stateResponse.data.details.states.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }

        this.goldActualData = this.stateResponse.data.details.actuals.gold
        this.diamondActualData = this.stateResponse.data.details.actuals.diamond
        this.goldTargetData = this.stateResponse.data.details.targets.gold
        this.diamondTargetData = this.stateResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.stateResponse.data.actuals, targets: this.stateResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.stateResponse.data.targets.diamond || this.stateResponse.data.targets.gold ||
            this.stateResponse.data.actuals.diamond || this.stateResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }


    initialChart() {
        this.loaderStatus = true
        this.stateSelected = [];
        this.categoriesObj = [];
        this.pieChartData = [];
        this.unSubscribe = this.d2hService.getAllStatesData(this.dateObject).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.hideThePage = false;
                this.loaderStatus = false
                this.stateResponse = data.data

                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.totalTicketSize = 0

                if (this.stateResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.stateResponse.data.actuals.diamond / this.stateResponse.data.targets.diamond) * 100
                }
                if (this.stateResponse.data.targets.gold) {
                    this.goldPercentage = (this.stateResponse.data.actuals.gold / this.stateResponse.data.targets.gold) * 100
                }

                this.categoriesObj = this.stateResponse.data.details.states
                if (this.stateResponse.data.details.states.length > 6) {
                    this.lengthStatus = true
                } else {
                    this.lengthStatus = false
                }
                this.stateDetailsDataWithoutPie()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true;
                this.loaderStatus = false
            }
        });
        this.lengthStatus = false;
        this.clusterStatus = false
        this.locationStatus = false
    }
    stateDetailsDataWithoutPie() {
        this.totalTicketSize = this.stateResponse.data.actuals.diamond + this.stateResponse.data.actuals.gold;
        this.statePieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>` });

        this.goldActualData = this.stateResponse.data.details.actuals.gold
        this.diamondActualData = this.stateResponse.data.details.actuals.diamond
        this.goldTargetData = this.stateResponse.data.details.targets.gold
        this.diamondTargetData = this.stateResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.stateResponse.data.actuals, targets: this.stateResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.stateResponse.data.targets.diamond || this.stateResponse.data.targets.gold ||
            this.stateResponse.data.actuals.diamond || this.stateResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            // this.getPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }
    pieChartData: any = []
    clusterPieChartData: any = []
    locationPieChartData: any = []
    totalTicketSize: any;
    statePieChart: any = {}
    clusterPieChart: any = {}
    locationPieChart: any = {}
    subtitleData = '<div style="color: #333333;font-size: 18px;fill: #333333;"></div>'
    getPieChart() {
        this.pieChartData = [];
        for (let i = 0; i < this.categoriesObj.length; i++) {
            const obj = {
                name: this.categoriesObj[i],
                y: this.goldActualData[i] + this.diamondActualData[i]
            }
            this.pieChartData.push(obj)
        }
        const seriesData = [{
            name: 'Value',
            colorByPoint: true,
            data: this.pieChartData,
            type: undefined
        }]
        for (const j of this.pieChartData) {
            if (j.y !== 0) {
                this.showActuals = true;
                break;
            }
        }
        this.cdr.detectChanges();
        this.statePieChart = Highcharts.chart('ticketsizepieContainershw', {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            colors: ['#20B070', '#0078A6', '#FCB441', '#F9766D', '#5E1833', '#F27521', '#A53D26', '#5A9AD5'],

            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter() {
                    return `<b>${this.point.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: this.subtitleData
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,
                    dataLabels: {
                        enabled: false,
                    },
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.stateSelected[0] === event.point.name) {
                                this.initialChart();
                            } else {
                                this.stateSelected[0] = event.point.name;
                                this.clusterEvent = event
                                this.callingCluster(event);
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
                }
            },

            series: seriesData
        });
    }
    yAxisValue = 'VALUE (Lacs)'
    getDiamondTicketSize() {
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
                    text: this.yAxisValue
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
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.diamondActualData,
                color: constants.diamondColour,
                type: undefined
            }

            ]
        });
    }

    getGoldTicketSize() {
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
                    text: this.yAxisValue
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commonPlotOptions,
                spline: this.commonPlotOptions
            }, series: [{
                name: 'TARGET',
                data: this.goldTargetData,
                color: constants.targetColor,
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.goldActualData,
                color: constants.goldColour,
                type: undefined
            }
            ]
        });

    }

    getStackChartLocationWise() {
        Highcharts.chart('goldDiamondsTicketStack', {
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
                    text: this.yAxisValue
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
                            if (this.y > 0) {
                                return this.y.toFixed(2);
                            }
                        }
                    },
                    events: this.commonPlotOptions.events
                }
            },
            series: [{
                name: 'GOLD',
                data: this.goldActualData,
                color: constants.goldColour,
                type: undefined
            }, {
                name: 'DIAMOND',
                data: this.diamondActualData,
                color: constants.diamondColour,
                type: undefined
            }

            ]
        });
    }
    golddiamondChartType: any = 'column';
    diamondTargetgroupChartType: any = 'column';
    goldTargetgroupChartType: any = 'column'
    lineChartConvertion(id) {
        switch (id) {
            case 'golddiamondgroup': {
                this.golddiamondChartType = this.golddiamondChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getStackChartLocationWise();
                break;
            }

            case 'diamondTargetgroup': {
                this.diamondTargetgroupChartType = this.diamondTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondTicketSize();
                break;
            }
            case 'goldTargetgroup': {
                this.goldTargetgroupChartType = this.goldTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldTicketSize();
                break;
            }
        }
    }
    clusterEvent;
    locationEvent;
    clusterTicketSize;
    callingCluster(event) {
        this.loaderStatus = true
        this.clusterStatus = true
        this.locationStatus = false
        this.clusterSelected = []
        this.categoriesObj = [];
        this.unSubscribe = this.d2hService.getAllClustersData(this.dateObject, event.point.name).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false;
                this.hideThePage = false
                this.clustersResponse = data.data
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.clusterTicketSize = 0
                if (this.clustersResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.clustersResponse.data.actuals.diamond / this.clustersResponse.data.targets.diamond) * 100
                }
                if (this.clustersResponse.data.targets.gold) {
                    this.goldPercentage = (this.clustersResponse.data.actuals.gold / this.clustersResponse.data.targets.gold) * 100
                }
                this.clusterDetailsData()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.loaderStatus = false;
                this.hideThePage = true
            }
        });
        this.lengthStatus = false;
    }
    clusterDetailsData() {
        this.totalTicketSize = this.clustersResponse.data.actuals.diamond + this.clustersResponse.data.actuals.gold;
        this.statePieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>` });

        this.clusterTicketSize = this.clustersResponse.data.actuals.diamond + this.clustersResponse.data.actuals.gold;
        this.categoriesObj = this.clustersResponse.data.details.clusters
        if (this.clustersResponse.data.details.clusters.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }
        this.goldActualData = this.clustersResponse.data.details.actuals.gold
        this.diamondActualData = this.clustersResponse.data.details.actuals.diamond
        this.goldTargetData = this.clustersResponse.data.details.targets.gold
        this.diamondTargetData = this.clustersResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.clustersResponse.data.actuals, targets: this.clustersResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.clustersResponse.data.targets.diamond || this.clustersResponse.data.targets.gold ||
            this.clustersResponse.data.actuals.diamond || this.clustersResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getClusterPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }
    callingClusterwithoutpie(event) {
        this.loaderStatus = true
        this.clusterSelected = []
        this.locationStatus = false
        this.clusterStatus = true
        this.categoriesObj = [];
        this.unSubscribe = this.d2hService.getAllClustersData(this.dateObject, this.stateSelected[0]).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {

                this.loaderStatus = false
                this.hideThePage = false
                this.clustersResponse = data.data
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.clusterTicketSize = 0
                if (this.clustersResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.clustersResponse.data.actuals.diamond / this.clustersResponse.data.targets.diamond) * 100
                }
                if (this.clustersResponse.data.targets.gold) {
                    this.goldPercentage = (this.clustersResponse.data.actuals.gold / this.clustersResponse.data.targets.gold) * 100
                }
                this.clusterDetailsDataWithoutPie()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true
                this.loaderStatus = false
            }
        })

        this.lengthStatus = false;

    }
    clusterDetailsDataWithoutPie() {
        this.clusterTicketSize = this.clustersResponse.data.actuals.gold + this.clustersResponse.data.actuals.diamond
        this.clusterPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.clusterTicketSize.toFixed(2)}<br>(LACs)</div>` });

        // this.locationTicketSize = this.locationResponse.data.actuals.diamond + this.locationResponse.data.actuals.gold
        this.categoriesObj = this.clustersResponse.data.details.clusters
        if (this.clustersResponse.data.details.clusters.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }
        this.goldActualData = this.clustersResponse.data.details.actuals.gold
        this.diamondActualData = this.clustersResponse.data.details.actuals.diamond
        this.goldTargetData = this.clustersResponse.data.details.targets.gold
        this.diamondTargetData = this.clustersResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.clustersResponse.data.actuals, targets: this.clustersResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.clustersResponse.data.targets.diamond || this.clustersResponse.data.targets.gold ||
            this.clustersResponse.data.actuals.diamond || this.clustersResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }

    getClusterPieChart() {
        this.clusterPieChartData = []
        for (let i = 0; i < this.categoriesObj.length; i++) {
            const obj = {
                name: this.categoriesObj[i],
                y: this.goldActualData[i] + this.diamondActualData[i]
            }
            this.clusterPieChartData.push(obj)
        }
        const seriesData = [{
            name: 'Value',
            colorByPoint: true,
            data: this.clusterPieChartData,
            type: undefined
        }]
        this.cdr.detectChanges();
        this.clusterPieChart = Highcharts.chart('ticketsizepieCluster', {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            colors: ['#5E1833', '#F27521', '#A53D26', '#5A9AD5', '#20B070', '#0078A6', '#FCB441', '#F9766D',],

            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter() {
                    return `<b>${this.point.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.clusterTicketSize.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: this.subtitleData
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
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
                                this.callingClusterwithoutpie(event);
                            } else {
                                this.clusterSelected[0] = event.point.name;
                                this.locationEvent = event
                                this.callingLocations(event);
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
                }
            },

            series: seriesData
        });
    }
    locationTicketSize
    callingLocations(event) {
        this.loaderStatus = true
        this.categoriesObj = [];
        this.locationSelected = []
        this.lengthStatus = false;
        this.cdr.detectChanges()
        this.locationStatus = true;
        this.locationStatus = true;

        this.clusterStatus = true

        this.unSubscribe = this.d2hService.getAllLocationsData(this.dateObject, event.point.name,this.clusterEvent.point.name).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.hideThePage = false
                this.locationResponse = data.data
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.locationTicketSize = 0
                if (this.locationResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.locationResponse.data.actuals.diamond / this.locationResponse.data.targets.diamond) * 100
                }
                if (this.locationResponse.data.targets.gold) {
                    this.goldPercentage = (this.locationResponse.data.actuals.gold / this.locationResponse.data.targets.gold) * 100
                }

                this.locationDetailsData()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true
                this.loaderStatus = false
            }
        });
    }
    locationDetailsData() {
        this.clusterTicketSize = this.locationResponse.data.actuals.diamond + this.locationResponse.data.actuals.gold
        this.clusterPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.clusterTicketSize.toFixed(2)}<br>(LACs)</div>` });

        this.locationTicketSize = this.locationResponse.data.actuals.diamond + this.locationResponse.data.actuals.gold
        this.categoriesObj = this.locationResponse.data.details.locations
        if (this.locationResponse.data.details.locations.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }

        this.goldActualData = this.locationResponse.data.details.actuals.gold
        this.diamondActualData = this.locationResponse.data.details.actuals.diamond
        this.goldTargetData = this.locationResponse.data.details.targets.gold
        this.diamondTargetData = this.locationResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.locationResponse.data.actuals, targets: this.locationResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };

        if (this.locationResponse.data.targets.diamond || this.locationResponse.data.targets.gold ||
            this.locationResponse.data.actuals.diamond || this.locationResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getLocationPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }
    getLocationPieChart() {
        this.locationPieChartData = []
        for (let i = 0; i < this.categoriesObj.length; i++) {
            const obj = {
                name: this.categoriesObj[i],
                y: this.goldActualData[i] + this.diamondActualData[i]
            }
            this.locationPieChartData.push(obj)
        }
        const seriesData = [{
            name: 'Value',
            colorByPoint: true,
            data: this.locationPieChartData,
            type: undefined
        }]
        this.cdr.detectChanges();
        this.locationPieChart = Highcharts.chart('ticketsizepieLocation', {

            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },

            colors: ['#5E1833', '#F27521', '#0078A6', '#FCB441', '#A53D26', '#5A9AD5', '#20B070', '#F9766D',],

            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter() {
                    return `<b>${this.point.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.locationTicketSize.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: this.subtitleData
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
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
                                this.callingLocationswithoutPie(event);
                            } else {
                                this.locationSelected[0] = event.point.name;
                                this.callingTeam(event);
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
                }
            },

            series: seriesData
        });
    }

    callingLocationswithoutPie(event) {
        this.loaderStatus = true
        this.categoriesObj = [];
        this.locationSelected = []
        this.unSubscribe = this.d2hService.getAllLocationsData(this.dateObject, this.clusterSelected[0],this.clusterEvent.point.name).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.hideThePage = false
                this.locationResponse = data.data;
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.locationTicketSize = 0
                if (this.locationResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.locationResponse.data.actuals.diamond / this.locationResponse.data.targets.diamond) * 100
                }
                if (this.locationResponse.data.targets.gold) {
                    this.goldPercentage = (this.locationResponse.data.actuals.gold / this.locationResponse.data.targets.gold) * 100
                }
                this.locationDetailsWithoutPie()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true
                this.loaderStatus = false
            }
        });
    }
    locationDetailsWithoutPie() {
        this.locationTicketSize = this.locationResponse.data.actuals.diamond + this.locationResponse.data.actuals.gold
        this.locationPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.locationTicketSize.toFixed(2)}<br>(LACs)</div>` });

        this.categoriesObj = this.locationResponse.data.details.locations
        if (this.locationResponse.data.details.locations.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }
        this.goldActualData = this.locationResponse.data.details.actuals.gold
        this.diamondActualData = this.locationResponse.data.details.actuals.diamond
        this.goldTargetData = this.locationResponse.data.details.targets.gold
        this.diamondTargetData = this.locationResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.locationResponse.data.actuals, targets: this.locationResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.locationResponse.data.targets.diamond || this.locationResponse.data.targets.gold ||
            this.locationResponse.data.actuals.diamond || this.locationResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            // this.getLocationPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }

    }
    callingTeam(event) {
        this.categoriesObj = [];
        this.loaderStatus = true
        this.unSubscribe = this.d2hService.getTeamData(this.dateObject, event.point.name).subscribe((data: any) => {
            if (data.error === null && data.data !== null) {
                this.loaderStatus = false
                this.hideThePage = false
                this.locationResponse = data.data
                this.diamondPercentage = 0
                this.goldPercentage = 0
                if (this.locationResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.locationResponse.data.actuals.diamond / this.locationResponse.data.targets.diamond) * 100
                }
                if (this.locationResponse.data.targets.gold) {
                    this.goldPercentage = (this.locationResponse.data.actuals.gold / this.locationResponse.data.targets.gold) * 100
                }
                this.teamDetailsData()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.loaderStatus = false
                this.hideThePage = true
            }
        });
        this.lengthStatus = false;
    }
    teamDetailsData() {
        this.categoriesObj = this.locationResponse.data.details.teams

        if (this.locationResponse.data.details.teams.length > 6) {
            this.lengthStatus = true
        } else {
            this.lengthStatus = false
        }

        this.goldActualData = this.locationResponse.data.details.actuals.gold
        this.diamondActualData = this.locationResponse.data.details.actuals.diamond
        this.goldTargetData = this.locationResponse.data.details.targets.gold
        this.diamondTargetData = this.locationResponse.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.locationResponse.data.actuals, targets: this.locationResponse.data.targets,
            diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.locationResponse.data.targets.diamond || this.locationResponse.data.targets.gold ||
            this.locationResponse.data.actuals.diamond || this.locationResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
        }
    }
    ngOnDestroy() {
        this.unSubscribe.unsubscribe();
        this.loaderStatus = false
    }
}
