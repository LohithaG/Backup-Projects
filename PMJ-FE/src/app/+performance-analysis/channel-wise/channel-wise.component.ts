import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { ChannelWiseService } from './channel-wise.service';
import { constants } from './../shared-modules/app.constant'

@Component({
    selector: 'channel-wise',
    templateUrl: './channel-wise.component.html'
})

export class ChannelwiseComponent {
    picChartData = [];
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

    loaderStatus = true;
    donutValue = 0;
    channelPieChart: any = {};

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

    constructor(private readonly channelWiseService: ChannelWiseService, private cdr: ChangeDetectorRef
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
    hideThePage = false;
    unSubscribe: any;
    showActuals = false;
    initialChart(dateObj) {
        console.log(dateObj)
        this.donutValue = 0;
        this.showActuals = false;
        this.loaderStatus = true;
        this.itemsSelected = [];
        this.chartCategories = [];
        this.picChartData = [];
        this.channelWiseService.getAllChannelsData(dateObj).subscribe((allChannelsData: any) => {
            if (allChannelsData.error === null) {
                this.loaderStatus = false;
                this.hideThePage = false;
                for (let i = 0; i < allChannelsData.data.details.channels.length; i++) {
                    let obj = {
                        name: allChannelsData.data.details.channels[i],
                        y: allChannelsData.data.details.actuals.value.gold[i] + allChannelsData.data.details.actuals.value.diamond[i]
                    }
                    this.picChartData.push(obj);
                }
                for (const Item of this.picChartData) {
                    this.donutValue = this.donutValue + Item.y;
                    if (Item.y !== 0) {
                        this.showActuals = true;
                    }
                }

                this.chartCategories = allChannelsData.data.details.channels;
                this.fullChart = (allChannelsData.data.details.channels.length > 5) ? true : false;
                this.assigningValuesToCharts(allChannelsData)
                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.hideThePage = false;
                    this.loaderStatus = false;
                    this.pieContainer();
                    this.stackedContainer();
                    this.diaQtygroupContainer();
                    this.diaValuegroupContainer();
                    this.goldQtygroupContainer();
                    this.goldValuegroupContainer();
                } else {
                    this.hideThePage = true;
                    this.loaderStatus = false;
                }
                this.cdr.detectChanges();
            } else {
                this.hideThePage = true;
                this.loaderStatus = false;
            }

        })

    }

    itemsSelected = [];
    pieContainer() {
        this.cdr.detectChanges();
        this.channelPieChart = Highcharts.chart('pieContainer', {
            chart: {
                type: 'pie',
            },
            colors: ['#FCB441', '#F9766D', '#5E1833'],
            title: {
                align: 'center',
                verticalAlign: 'middle',
                text: `<div style="font-size:26px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;"></div>'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'right',
                floating: true,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.toUpperCase()}:${this.percentage.toFixed(2)}  % (${this.y.toFixed(2)}L )`;
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: true,
                    showInLegend: true,
                    events: {
                        click: (event) => {
                            if (this.itemsSelected.length === 0) {
                                this.itemsSelected[0] = event.point.name;
                                this.callingSinglechannel(event);
                                this.cdr.detectChanges();
                            } else if (this.itemsSelected[0] === event.point.name) {
                                this.initialChart(this.dateObj);
                                this.cdr.detectChanges();
                            } else {
                                this.itemsSelected[0] = event.point.name;
                                this.callingSinglechannel(event);
                            }
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
                        enabled: false,
                    },
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

    callingSinglechannel(event) {
        console.log(event.point.name);
        this.loaderStatus = true;
        this.chartCategories = [];
        let id = event.point.name === "SHW" ? 1 : 2;
        for (const Item of this.picChartData) {
            if (Item.name === event.point.name) {
                this.donutValue = Item.y;
            }
        }
        this.channelPieChart.setTitle({ text: `<div style="font-size:34px;color:#FDA706">${this.donutValue.toFixed(2)}<br>(LACs)</div>` });

        this.channelWiseService.getSingleChannelData(this.dateObj, id).subscribe((singleChannelData: any) => {
            if (singleChannelData.error === null) {
                this.hideThePage = false;
                this.loaderStatus = false;
                this.chartCategories = singleChannelData.data.details.timeline;
                this.assigningValuesToCharts(singleChannelData);
                this.fullChart = (singleChannelData.data.details.timeline.length > 5) ? true : false;
                if (this.goldDiaInfo.target.value.gold || this.goldDiaInfo.target.value.diamond ||
                    this.goldDiaInfo.target.qty.gold || this.goldDiaInfo.target.qty.diamond) {
                    this.hideThePage = false;
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
                this.hideThePage = true;
                this.loaderStatus = false;
            }

        })
    }

    fullChart = false;
    assigningValuesToCharts(response) {
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

    resetGraphs() {
        this.initialChart(this.dateObj);
    }
}
