import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { constants } from '../shared-modules/app.constant';
import { TargetActaulService } from './target-actual.service';
import { Router } from "@angular/router";
// import Exporting from 'highcharts/modules/exporting';

//  Exporting(Highcharts);
@Component({
    selector: 'target-actual',
    templateUrl: './target-actual.component.html',
    styleUrls: ['./target-actual.css']
})

export class TargetVsActualComponent {

    pieOptions: any = {
        legend: {
            enabled: true,
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            useHTML: true,
            labelFormatter() {
                return `${this.name} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
            }
        },
    }

    commomPlotOptions: any = {
        dataLabels: {
            enabled: true,
            allowOverlap: true,
            style: {
                color: 'black',
                fontSize: '11px',
                fontWeight: 'none',
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
                    jQuery.each(points, function() {
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
    toolTip: any = {
        enabled: true,
        formatter() {
            return `<b>${this.series.name}</b><br/>${this.point.y}`;
        }
    }
    dynamicUi = false;
    test1 = true;
    loaderStatus = true;
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

    goldDiaDetails: any = {};
    constructor(
        public _targetActaulService: TargetActaulService,
        private readonly cdr: ChangeDetectorRef,
        private readonly router: Router,

    ) {

    }

    selectedType = 1;
    ngOnInit() {
        this.hideThePage = false;

    }

    /**
     * Method From Date Filers
     */
    hideThePage = false;
    unSubscribe: any;


    QueryDate(value) {

        this.loaderStatus = true;
        const dateObj: any = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }
        this.unSubscribe = this._targetActaulService.getAllSalesData(dateObj).subscribe((data: any) => {
            if (data.error === null) {
                this.hideThePage = false;
                this.getGraphs(data.data);
                this.cdr.detectChanges();
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.loaderStatus = false;
                this.hideThePage = true;
            }
        })
    }


    /**
     * Get Graphs Info
     */

    actualSales: any;
    targetSales: any;
    getGraphs(data) {
        this.clickType = '';
        this.dynamicUi = false;

        this.goldDiaInfo.actuals = data.actuals;
        this.goldDiaInfo.target = data.target;

        this.actualSales = this.goldDiaInfo.actuals.value.gold + this.goldDiaInfo.actuals.value.diamond;
        this.targetSales = this.goldDiaInfo.target.value.gold + this.goldDiaInfo.target.value.diamond;

        this.goldDiaDetails = data.details;

        this.dynamicUi = this.goldDiaDetails.timeline.length > 5 ? true : false;

        if (this.goldDiaInfo.target.value.gold && this.goldDiaInfo.target.value.diamond) {
            this.hideThePage = false;
            this.getActualSalesPieChart();
            this.getTargetSalesPieChart();
            this.getDiaValue()
            this.getDiaQty();
            this.getGoldValue();
            this.getGoldQty();
            this.loaderStatus = false;
        } else {
            this.hideThePage = true;
            this.loaderStatus = false;
        }
    }


    getTargetSalesPieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('targetSalesPieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter() {
                    return `<b>${this.series.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.targetSales.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Target</div>'
            },
            legend: this.pieOptions.legend,
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    events: {
                        click: (event) => {
                        }
                    },
                    point: {
                        events: {
                            legendItemClick: (event) => {
                                return false;
                            }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },

            series: [{
                name: 'Value( Lacs )',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.goldDiaInfo.target.value.gold,
                    color: constants.goldColour,
                    type: undefined
                }, {
                    name: 'DIAMOND',
                    y: this.goldDiaInfo.target.value.diamond,
                    color: constants.diamondColour,
                    type: undefined
                }],
                type: undefined
            }]
        })
    }

    /**
     * Pie Chart
     */
    clickType: any = '';
    getActualSalesPieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('actualSalesPieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: true,
                formatter() {
                    return `<b>${this.series.name}</b><br/>${this.point.y}`;
                }
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.actualSales.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Actual</div>'
            },
            legend: this.pieOptions.legend,
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    showInLegend: true,
                    events: {
                        click: (event) => {
                        }
                    },
                    point: {
                        events: {
                            legendItemClick: (event) => {
                                return false;
                            }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                }
            },
            series: [{
                name: 'Value( Lacs )',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.goldDiaInfo.actuals.value.gold,
                    color: constants.goldColour,
                    type: undefined
                }, {
                    name: 'DIAMOND',
                    y: this.goldDiaInfo.actuals.value.diamond,
                    color: constants.diamondColour,
                    type: undefined
                }],
                type: undefined
            }]
        });
    }

    /**
     * Gold QTY
     */
    goldQtygroupChartType: any = 'column';
    getGoldQty() {
        //GOLD QTY 
        Highcharts.chart('goldQtygroupContainer', {
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            chart: {
                type: this.goldQtygroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.goldDiaDetails.timeline
            },
            yAxis: {
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: 'QTY (KGs)'
                }
            },
            tooltip: this.toolTip,

            credits: {
                enabled: false
            },
            series: [{
                name: 'TARGET',
                data: this.goldDiaDetails.target.qty.gold,
                //    data: [1, 2, 3, 5],
                zIndex: 2,
                color: constants.targetColor,
                type: undefined
            }, {
                name: 'ACTUAL',
                //      data: [1, 1, 3, 2],
                zIndex: 2,
                data: this.goldDiaDetails.actuals.qty.gold,
                color: constants.goldColour,
                type: undefined
            }
                // ,{
                //     name: 'PERCENTAGES',
                //     type: 'spline',
                //     zIndex: 1,
                //     showInLegend: false,
                //     dataLabels: {
                //         enabled: true,
                //         formatter: function() {
                //             return this.point.y * 100 + '%';
                //         }
                //     },
                //     color: 'white',
                //     data: [1, 0.5, 1, 0.4]
                //  }
            ]
        });
    }

    /**
     * Gold VALUE
     */

    goldValuegroupChartType: any = 'column';
    getGoldValue() {

        //GOLD VALUE 
        Highcharts.chart('goldValuegroupContainer', {
            chart: {
                type: this.goldValuegroupChartType
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            tooltip: this.toolTip,
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            xAxis: {
                categories: this.goldDiaDetails.timeline
            },
            yAxis: {
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: 'VALUE (LACs)'
                }
            },

            series: [{
                name: 'TARGET',
                data: this.goldDiaDetails.target.value.gold,
                color: constants.targetColor,
                type: undefined
            }, {
                name: 'ACTUAL',
                data: this.goldDiaDetails.actuals.value.gold,
                color: constants.goldColour,
                type: undefined
            }]
        });
    }

    /**
     * DIAMOND QTY
     */
    diaQtygroupChartType: any = 'column';
    getDiaQty() {
        Highcharts.chart('diaQtygroupContainer', {
            chart: {
                type: this.diaQtygroupChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.goldDiaDetails.timeline,

            },
            tooltip: this.toolTip,
            yAxis: {
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: 'QTY (CTs)'
                }
            },
            // dataLabels: true,
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions,

            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'TARGET',
                    data: this.goldDiaDetails.target.qty.diamond,
                    color: constants.targetColor,
                    type: undefined
                },
                {
                    name: 'ACTUAL',
                    data: this.goldDiaDetails.actuals.qty.diamond,
                    color: constants.diamondColour,
                    type: undefined
                }
            ]
        });
    }


    /**
     * DIAMOND VALUE
     */
    diaValuegroupChartType: any = 'column';
    getDiaValue() {
        //Diamond VALUE 
        Highcharts.chart('diaValuegroupContainer', {
            chart: {
                type: this.diaValuegroupChartType
            },
            title: {
                text: ''
            },
            tooltip: this.toolTip,
            xAxis: {
                categories: this.goldDiaDetails.timeline
            },

            yAxis: {
                className: 'highcharts-color-0',
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: 'VALUE (LACs)'
                }
            },

            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'TARGET',
                    data: this.goldDiaDetails.target.value.diamond,
                    color: constants.targetColor,
                    type: undefined
                }, {
                    name: 'ACTUAL',
                    data: this.goldDiaDetails.actuals.value.diamond,
                    color: constants.diamondColour,
                    type: undefined
                }],

        });
    }



    lineChartConvertion(id) {
        switch (id) {
            case 'diaQtygroup': {
                this.diaQtygroupChartType = this.diaQtygroupChartType === 'column' ? 'spline' : 'column';
                this.getDiaQty();
                break;
            }
            case 'diaValuegroup': {
                this.diaValuegroupChartType = this.diaValuegroupChartType === 'column' ? 'spline' : 'column';
                this.getDiaValue();
                break;
            }
            case 'goldQtygroup': {
                this.goldQtygroupChartType = this.goldQtygroupChartType === 'column' ? 'spline' : 'column';
                this.getGoldQty();
                break;
            }
            case 'goldValuegroup': {
                this.goldValuegroupChartType = this.goldValuegroupChartType === 'column' ? 'spline' : 'column';
                this.getGoldValue();
                break;
            }
        }
    }


    ngOnDestroy() {
        this.unSubscribe.unsubscribe();
    }




}
