import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { GrowthCalculationService } from '../growth.service';
import { Router } from "@angular/router";
import { constants } from '../../shared-modules/app.constant';
@Component({
    selector: 'channel-wise',
    templateUrl: './channel-wise.component.html'
})

export class ChannelWiseComponent {
    kpiBlockInfo: any = {
        length: 3,
        shw: {
            growthr1r2: null,
            growthr1r3: null,
            growthr2r3: null
        },
        d2h: {
            growthr1r2: null,
            growthr1r3: null,
            growthr2r3: null
        }
    };

    commomPlotOptions: any = {
        dataLabels: {
            enabled: true,
            // allowOverlap: true,
            style: {
                color: 'black',
                fontWeight: 'none',
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

    yAxisTitle: any = 'VALUE (LACs)';

    serviceData: any;
    loaderStatus = false;

    seriesData: any;
    goldSalesData: any;
    diamondSalesData: any;


    shwGoldSalesData: any;
    shwDiamondSalesData: any;
    d2hGoldSalesData: any;
    d2hDiamondSalesData: any;

    timeLine: any;

    ngOnInit() {

    }

    constructor(
        public growthService: GrowthCalculationService,
        public cdr: ChangeDetectorRef,
        private readonly router: Router,
    ) {

    }
    QueryDate(value) {
        //  console.log(value)
        this.loaderStatus = true;
        this.growthService.channelWiseSales(value).subscribe((data: any) => {
            if (data.error == null) {
                this.serviceData = data.data;
                this.kpiBlockInfo = {
                    shw: {
                        growthr1r2: this.serviceData.details.shw.growthr1_r2 === undefined ? null : this.serviceData.details.shw.growthr1_r2,
                        growthr1r3: this.serviceData.details.shw.growthr1_r3 === undefined ? null : this.serviceData.details.shw.growthr1_r3,
                        growthr2r3: this.serviceData.details.shw.growthr2_r3 === undefined ? null : this.serviceData.details.shw.growthr2_r3
                    },
                    d2h: {
                        growthr1r2: this.serviceData.details.d2h.growthr1_r2 === undefined ? null : this.serviceData.details.d2h.growthr1_r2,
                        growthr1r3: this.serviceData.details.d2h.growthr1_r3 === undefined ? null : this.serviceData.details.d2h.growthr1_r3,
                        growthr2r3: this.serviceData.details.d2h.growthr2_r3 === undefined ? null : this.serviceData.details.d2h.growthr2_r3,
                    }
                }

                if (value.range3startDate === undefined) {
                    this.timeLine = ['Range 1', 'Range 2'];
                    this.shwGoldSalesData = [
                        {
                            name: 'TAREGT',
                            color: constants.targetColor,
                            data: [this.serviceData.details.shw.gold_target_r1, this.serviceData.details.shw.gold_target_r2],
                            type: undefined
                        },
                        {
                            name: 'ACTUAL',
                            color: constants.goldColour,
                            data: [this.serviceData.details.shw.range1_gold, this.serviceData.details.shw.range2_gold],
                            type: undefined
                        }
                    ]

                    this.shwDiamondSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.shw.diamond_target_r1, this.serviceData.details.shw.diamond_target_r2],
                            type: undefined
                        }, {
                            name: 'ACTUAL',
                            color: constants.diamondColour,
                            data: [this.serviceData.details.shw.range1_diamond, this.serviceData.details.shw.range2_diamond],
                            type: undefined
                        }
                    ]

                    this.d2hGoldSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.d2h.gold_target_r1, this.serviceData.details.d2h.gold_target_r2],
                            type: undefined
                        },
                        {
                            name: 'ACTUAL',
                            color: constants.goldColour,
                            data: [this.serviceData.details.d2h.range1_gold, this.serviceData.details.d2h.range2_gold],
                            type: undefined
                        }
                    ]

                    this.d2hDiamondSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.d2h.diamond_target_r1, this.serviceData.details.d2h.diamond_target_r2],
                            type: undefined
                        }, {
                            name: 'ACTUAL',
                            color: constants.diamondColour,
                            data: [this.serviceData.details.d2h.range1_diamond, this.serviceData.details.d2h.range2_diamond],
                            type: undefined
                        }
                    ]

                    this.cdr.detectChanges();
                    this.shwGoldSales();
                    this.shwDiamondSales();
                    this.d2hGoldSales();
                    this.d2hDiamondSales();

                } else {
                    this.timeLine = ['Range 1', 'Range 2', 'Range 3'];
                    this.shwGoldSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.shw.gold_target_r1, this.serviceData.details.shw.gold_target_r2, this.serviceData.details.shw.gold_target_r3],
                            type: undefined
                        }, {
                            name: 'ACTUAL',
                            color: constants.goldColour,
                            data: [this.serviceData.details.shw.range1_gold, this.serviceData.details.shw.range2_gold, this.serviceData.details.shw.range3_gold],
                            type: undefined
                        }
                    ]

                    this.shwDiamondSalesData = [

                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.shw.diamond_target_r1, this.serviceData.details.shw.diamond_target_r2, this.serviceData.details.shw.diamond_target_r3],
                            type: undefined
                        },
                        {
                            name: 'ACTUAL',
                            color: constants.diamondColour,
                            data: [this.serviceData.details.shw.range1_diamond, this.serviceData.details.shw.range2_diamond, this.serviceData.details.shw.range3_diamond],
                            type: undefined
                        }
                    ]

                    this.d2hGoldSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.d2h.gold_target_r1, this.serviceData.details.d2h.gold_target_r2, this.serviceData.details.d2h.gold_target_r3],
                            type: undefined
                        }, {
                            name: 'ACTUAL',
                            color: constants.goldColour,
                            data: [this.serviceData.details.d2h.range1_gold, this.serviceData.details.d2h.range2_gold, this.serviceData.details.d2h.range3_gold],
                            type: undefined
                        }
                    ]

                    this.d2hDiamondSalesData = [
                        {
                            name: 'TARGET',
                            color: constants.targetColor,
                            data: [this.serviceData.details.d2h.diamond_target_r1, this.serviceData.details.d2h.diamond_target_r2, this.serviceData.details.d2h.diamond_target_r3],
                            type: undefined
                        }, {
                            name: 'ACTUAL',
                            color: constants.diamondColour,
                            data: [this.serviceData.details.d2h.range1_diamond, this.serviceData.details.d2h.range2_diamond, this.serviceData.details.d2h.range3_diamond],
                            type: undefined
                        }
                    ]
                    this.cdr.detectChanges();
                    this.shwGoldSales();
                    this.shwDiamondSales();
                    this.d2hGoldSales();
                    this.d2hDiamondSales();
                }
                this.loaderStatus = false;
            } else {
                this.loaderStatus = false;
                this.router.navigate(['/error', data.error.message]);
            }
        })
    }
    shwGoldType = "column";
    shwDiaType = "column";
    d2hGoldType = "column";
    d2hDiaType = "column";
    shwGoldSales() {
        Highcharts.chart('gold_Sales_shw', {
            chart: {
                type: this.shwGoldType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.timeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                }
            },
            tooltip: {
                shared: true
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: this.shwGoldSalesData

        });
    }

    shwDiamondSales() {
        Highcharts.chart('diamond_Sales_shw', {
            chart: {
                type: this.shwDiaType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.timeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                }
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: this.shwDiamondSalesData

        });
    }
    d2hGoldSales() {
        Highcharts.chart('gold_Sales_d2h', {
            chart: {
                type: this.d2hGoldType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.timeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                }
            },
            tooltip: {
                shared: true
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: this.d2hGoldSalesData

        });
    }

    d2hDiamondSales() {
        Highcharts.chart('diamond_Sales_d2h', {
            chart: {
                type: this.d2hDiaType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.timeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                }
            },
            tooltip: {
                shared: true
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: this.d2hDiamondSalesData

        });
    }

    lineChartConvertion(id) {
        switch (id) {
            case 'gold_Sales_shw': {
                this.shwGoldType = this.shwGoldType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.shwGoldSales();
                break;
            }
            case 'diamond_Sales_shw': {
                this.shwDiaType = this.shwDiaType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.shwDiamondSales();
                break;
            }
            case 'gold_Sales_d2h': {
                this.d2hGoldType = this.d2hGoldType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.d2hGoldSales();
                break;
            }
            case 'diamond_Sales_d2h': {
                this.d2hDiaType = this.d2hDiaType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.d2hDiamondSales();
                break;
            }

        }
    }
}
