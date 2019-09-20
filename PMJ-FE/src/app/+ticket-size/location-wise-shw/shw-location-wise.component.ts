import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from '../../shared-modules/app.constant';
import { TicketLocationWiseSHWService } from './shw-location-wise.service'
import { Router } from "@angular/router";

@Component({
    selector: 'tickets-location-wise-shw',
    templateUrl: './shw-location-wise.component.html'
})

export class TicketLocationWiseSHWComponent {
    serviceInfo: any = {};
    legendItemClick = {
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
        events: this.legendItemClick

    }


    unSubscribe: any;
    dateObject: any;
    constructor(
        public cdr: ChangeDetectorRef,
        private readonly router: Router,
        private readonly shwService: TicketLocationWiseSHWService
    ) { }

    loaderStatus = false
    hideThePage = false;
    showActuals = false;



    QueryDate(value) {
        this.dateObject = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.getChartData()
    }

    itemsSelected = []
    categoriesObj: any = []
    goldActualData: any = []
    diamondActualData: any = []
    goldTargetData: any = []
    diamondTargetData: any = []
    salesPersonCategories: any = []
    salesPersonStatus = false
    salesGoldActualData: any = []
    salesDiamondActualData: any = []
    salesGoldTargetData: any = []
    salesDiamondTargetData: any = []
    totalTicketSize
    ticketsKpiInfo: any = {}
    diamondPercentage: any
    goldPercentage: any
    lengthStatus = false;
    response;
    branchResponse;
    ngOnInit() {
        this.hideThePage = false;
        window.scrollTo(0, 0)
    }

    getChartData() {
        this.showActuals = false;
        this.loaderStatus = true
        this.itemsSelected = [];
        this.categoriesObj = [];
        this.pieChartData = [];
        this.salesPersonStatus = false
        this.unSubscribe = this.shwService.getAllLocationsData(this.dateObject).subscribe(((data: any) => {
            if (data.error === null && data.data !== null) {
                this.hideThePage = false;
                this.loaderStatus = false;
                this.response = data.data
                this.lengthStatus = false;
                this.diamondPercentage = 0
                this.goldPercentage = 0
                
                if (this.response.data.targets.diamond) {
                    this.diamondPercentage = (this.response.data.actuals.diamond / this.response.data.targets.diamond) * 100
                }
                if (this.response.data.targets.gold) {
                    this.goldPercentage = (this.response.data.actuals.gold / this.response.data.targets.gold) * 100
                }
                this.getChartDataDetails()

            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true;
                this.loaderStatus = false;
            }
        }));
    }
    getChartDataDetails() {
        this.totalTicketSize = this.response.data.actuals.diamond + this.response.data.actuals.gold;

        this.categoriesObj = this.response.data.details.locations

        this.goldActualData = this.response.data.details.actuals.gold
        this.diamondActualData = this.response.data.details.actuals.diamond
        this.goldTargetData = this.response.data.details.targets.gold
        this.diamondTargetData = this.response.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.response.data.actuals, targets: this.response.data.targets, diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        console.log(this.ticketsKpiInfo)

        if (this.response.data.targets.diamond || this.response.data.targets.gold ||
            this.response.data.actuals.diamond || this.response.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true;
            this.loaderStatus = false;
        }
    }


    initialChart() {
        this.itemsSelected = [];
        this.categoriesObj = [];
        this.pieChartData = [];
        this.salesPersonStatus = false
        this.unSubscribe = this.shwService.getAllLocationsData(this.dateObject).subscribe(((data: any) => {
            if (data.error === null && data.data !== null) {
                this.response = data.data
                this.lengthStatus = false;
                this.hideThePage = false;
                this.totalTicketSize = 0

                this.totalTicketSize = this.response.data.actuals.diamond + this.response.data.actuals.gold;
                this.pieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>` });

                this.diamondPercentage = 0
                this.goldPercentage = 0
                if (this.response.data.targets.diamond) {
                    this.diamondPercentage = (this.response.data.actuals.diamond / this.response.data.targets.diamond) * 100
                }
                if (this.response.data.targets.gold) {
                    this.goldPercentage = (this.response.data.actuals.gold / this.response.data.targets.gold) * 100
                }
                this.getChartDetailswithoutPie()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.hideThePage = true;
                this.loaderStatus = false
            }
        }))
    }
    getChartDetailswithoutPie() {
        this.categoriesObj = this.response.data.details.locations
        this.goldActualData = this.response.data.details.actuals.gold
        this.diamondActualData = this.response.data.details.actuals.diamond
        this.goldTargetData = this.response.data.details.targets.gold
        this.diamondTargetData = this.response.data.details.targets.diamond
        this.ticketsKpiInfo = {
            actuals: this.response.data.actuals, targets: this.response.data.targets, diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.response.data.targets.diamond || this.response.data.targets.gold ||
            this.response.data.actuals.diamond || this.response.data.actuals.gold) {
            this.cdr.detectChanges();
            // this.getPieChart()
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
        } else {
            this.hideThePage = true
              this.loaderStatus = false
        }
    }
    pieChart: any = {}
    pieChartData: any = []
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
        this.pieChart = Highcharts.chart('ticketsizepieContainershw', {

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
                    return `<b> ${this.point.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;"></div>'
            },
            legend: {
                enabled: false,
                // layout: 'vertical',
                // align: 'right',
                // floating: true,
                // verticalAlign: 'bottom',
                // useHTML: true,
                // labelFormatter() {
                //     return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
                // }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,
                    dataLabels: {
                        enabled: true,
                        alignTo: 'plotEdges',
                        format: '<b>{point.name}</b>: {point.y}',
                        connectorShape: function (labelPosition, connectorPosition, options) {

                            var connectorPadding = options.connectorPadding,
                                touchingSliceAt = connectorPosition.touchingSliceAt,
                                series = this.series,
                                plotWidth = series.chart.plotWidth-10,
                                plotLeft = series.chart.plotLeft-10,
                                alignment = labelPosition.alignment,
                                stepDistance = 150, // in px - distance betwenn the step and vertical plot border
                                stepX = alignment === 'left' ? plotLeft + plotWidth - stepDistance : plotLeft + stepDistance;

                            return ['M',
                                labelPosition.x + (alignment === 'left' ? 1 : -1) *
                                connectorPadding,
                                labelPosition.y,
                                'L',
                                stepX,
                                labelPosition.y,
                                'L',
                                stepX,
                                touchingSliceAt.y,
                                'L',
                                touchingSliceAt.x,
                                touchingSliceAt.y
                            ];

                        }

                    },
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.itemsSelected[0] === event.point.name) {
                                this.initialChart();
                            } else {
                                this.itemsSelected[0] = event.point.name;
                                this.callingSingleBranch(this.dateObject, event);
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

    yAxisValue = "VALUE (LACs)"
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
                    text: this.yAxisValue
                },

            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: this.legendItemClick

                },
                spline: this.commonPlotOptions
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'TARGET',
                data: this.salesDiamondTargetData,
                color: constants.targetColor,
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.salesDiamondActualData,
                color: constants.diamondColour,
                type: undefined
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
                    text: this.yAxisValue
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false,
                        allowOverlap: true,
                        formatter() {
                            return this.y.toFixed(2)
                        }
                    },
                    enableMouseTracking: true,
                    events: this.legendItemClick

                },
                spline: this.commonPlotOptions
            },
            series: [{
                name: 'TARGET',
                data: this.salesGoldTargetData,
                color: constants.targetColor,
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.salesGoldActualData,
                color: constants.goldColour,
                type: undefined
            }

            ]
        });

    }
    golddiamondChartType: any = 'column';
    diamondTargetgroupChartType: any = 'column';
    goldTargetgroupChartType: any = 'column'
    salesdiamondTargetgroupChartType: any = 'spline';
    salesgoldTargetgroupChartType: any = 'spline';
    lineChartConvertion(id) {
        switch (id) {
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
            case 'salesdiamondTargetgroup': {
                this.salesdiamondTargetgroupChartType = this.salesdiamondTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondDataSalesPerson();
                break;
            }
            case 'salesgoldTargetgroup': {
                this.salesgoldTargetgroupChartType = this.salesgoldTargetgroupChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldDataSalesPerson()
                break;
            }
        }
    }

    callingSingleBranch(value, location) {
        this.loaderStatus = true
        this.categoriesObj = [];
        this.salesPersonStatus = true
        this.unSubscribe = this.shwService.getSingleLocationData(value, location.point.name).subscribe((data: any) => {
            if (data.error == null && data.data !== null) {
                this.branchResponse = data.data
                this.loaderStatus = false
                this.lengthStatus = false;
                this.hideThePage = false
                this.diamondPercentage = 0
                this.goldPercentage = 0
                this.totalTicketSize = 0
                if (this.branchResponse.data.targets.diamond) {
                    this.diamondPercentage = (this.branchResponse.data.actuals.diamond / this.branchResponse.data.targets.diamond) * 100
                }
                if (this.branchResponse.data.targets.gold) {
                    this.goldPercentage = (this.branchResponse.data.actuals.gold / this.branchResponse.data.targets.gold) * 100
                }
                this.getSingleLocationChartDetails()
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.loaderStatus = false
                this.hideThePage = true
            }
        });
    }
    setWidth = 0
    getSingleLocationChartDetails() {
        this.setWidth = 0
        this.totalTicketSize = this.branchResponse.data.actuals.diamond + this.branchResponse.data.actuals.gold;
        this.pieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.totalTicketSize.toFixed(2)}<br>(LACs)</div>` });
        this.categoriesObj = this.branchResponse.data.details.timeline
        this.goldActualData = this.branchResponse.data.details.actuals.gold
        this.diamondActualData = this.branchResponse.data.details.actuals.diamond
        this.goldTargetData = this.branchResponse.data.details.targets.gold
        this.diamondTargetData = this.branchResponse.data.details.targets.diamond
        this.salesGoldActualData = this.branchResponse.data.employeeDetails.actuals.gold
        this.salesDiamondActualData = this.branchResponse.data.employeeDetails.actuals.diamond
        this.salesGoldTargetData = this.branchResponse.data.employeeDetails.targets.gold
        this.salesDiamondTargetData = this.branchResponse.data.employeeDetails.targets.diamond
        this.salesPersonCategories = this.branchResponse.data.employeeDetails.employee
        this.ticketsKpiInfo = {
            actuals: this.branchResponse.data.actuals, targets: this.branchResponse.data.targets, diamondPercentage: this.diamondPercentage, goldPercentage: this.goldPercentage
        };
        if (this.salesPersonCategories.length > 10) {
            this.setWidth = 2000
        }
        if (this.branchResponse.data.targets.diamond || this.branchResponse.data.targets.gold ||
            this.branchResponse.data.actuals.diamond || this.branchResponse.data.actuals.gold) {
            this.cdr.detectChanges();
            this.getStackChartLocationWise()
            this.getGoldTicketSize()
            this.getDiamondTicketSize()
            this.getGoldDataSalesPerson()
            this.getDiamondDataSalesPerson()
        } else {
            this.hideThePage = true
        }
    }
    ngOnDestroy() {
        this.unSubscribe.unsubscribe();
        this.loaderStatus = false
    }
}
