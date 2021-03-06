import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { GrowthCalculationService } from '../../growth.service';
import { constants } from '../../../shared-modules/app.constant';
import { Router } from "@angular/router";

@Component({
    selector: 'store-wise',
    templateUrl: './store.component.html',
    styles: ['rect:{width:100%}']
})

export class LocationStoreComponent {
    kpiBlockInfo: any = {
        length: 3,
        info: {
            range_1: null,
            range_2: null,
            range_3: null,
            growthr1r2: null,
            growthr1r3: null,
            growthr2r3: null
        }
    };


    loaderStatus = false;

    serviceData: any;
    ngOnInit() {

    }
    yAaxisTitle: any = 'VALUE (LACs)';

    legendOptions: any = {
        enabled: true,
        itemWidth: 130,
        width: 400,
        align: 'center'
    }

    commomPlotOptions: any = {
        dataLabels: {
            enabled: true,
            // allowOverlap: true,
            style: {
                color: 'black',
                fontSize: '11px',
                fontWeight: 'none',
                textOutline: 'none'
            },
            formatter() {
                return this.y === 0 ? this.y : this.y.toFixed(2)
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


    constructor(
        public growthService: GrowthCalculationService,
        public cdr: ChangeDetectorRef,
        private readonly router: Router,
    ) {

    }

    seriesData: any;
    goldSalesData: any;
    diamondSalesData: any;
    kpiInfo = false;

    QueryDate(value) {
        this.loaderStatus = true;

        this.seriesData = [];
        this.goldSalesData = [];
        this.diamondSalesData = [];
        this.growthService.locationWiseSales(value).subscribe((data: any) => {
            if (data.error === null) {
                this.serviceData = data.data;
                this.kpiBlockInfo.info = {
                    range_1: this.serviceData.range1 === undefined ? null : this.serviceData.range1,
                    range_2: this.serviceData.range2 === undefined ? null : this.serviceData.range2,
                    range_3: this.serviceData.range3 === undefined ? null : this.serviceData.range3,
                    growthr1_r2: this.serviceData.growthr1_r2 === undefined ? null : this.serviceData.growthr1_r2,
                    growthr1_r3: this.serviceData.growthr1_r3 === undefined ? null : this.serviceData.growthr1_r3,
                    growthr2_r3: this.serviceData.growthr2_r3 === undefined ? null : this.serviceData.growthr2_r3,
                };
                this.kpiInfo = true;
                if (value.range3startDate === undefined) {
                    this.seriesData =
                        [{
                            name: 'GOLD',
                            data: this.serviceData.details.range1_gold,
                            stack: 'R1',
                            color: constants.goldColour,
                            showInLegend: false,
                            type: undefined
                        }, {
                            name: 'DIAMOND',
                            data: this.serviceData.details.range1_diamond,
                            stack: 'R1',
                            color: constants.diamondColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'GOLD',
                            data: this.serviceData.details.range2_gold,
                            stack: 'R2',
                            color: constants.goldColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'DIAMOND',
                            data: this.serviceData.details.range2_diamond,
                            stack: 'R2',
                            color: constants.diamondColour, showInLegend: false,
                            type: undefined
                        }];

                    this.goldSalesData = [
                        {
                            name: 'Range 1',
                            stack: 'R1',
                            data: this.serviceData.details.range1_gold,
                            type: undefined
                        }, {
                            name: 'Range 2',
                            data: this.serviceData.details.range2_gold,
                            stack: 'R2',
                            type: undefined
                        },
                        {
                            name: 'R1 Target',
                            type: 'spline',
                            data: this.serviceData.details.gold_target_r1
                        }, {
                            name: 'R2 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.gold_target_r2
                        }
                    ]

                    this.diamondSalesData = [
                        {
                            name: 'Range 1',
                            stack: 'R1',
                            data: this.serviceData.details.range1_diamond,
                            type: undefined
                        }, {
                            name: 'Range 2',
                            data: this.serviceData.details.range2_diamond,
                            stack: 'R2',
                            type: undefined
                        },
                        {
                            name: 'R1 Target',
                            type: 'spline',
                            data: this.serviceData.details.diamond_target_r1,
                        },
                        {
                            name: 'R2 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.diamond_target_r2
                        }
                    ]

                    this.cdr.detectChanges();
                    this.salesCharts();
                    this.goldSales();
                    this.diamondSales();

                    this.loaderStatus = false;

                } else {

                    this.seriesData =
                        [{
                            name: 'GOLD',
                            data: this.serviceData.details.range1_gold,
                            stack: 'R1',
                            color: constants.goldColour,
                            showInLegend: false,
                            type: undefined
                        }, {
                            name: 'DIAMOND',
                            data: this.serviceData.details.range1_diamond,
                            stack: 'R1',
                            color: constants.diamondColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'GOLD',
                            data: this.serviceData.details.range2_gold,
                            stack: 'R2',
                            color: constants.goldColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'DIAMOND',
                            data: this.serviceData.details.range2_diamond,
                            stack: 'R2',
                            color: constants.diamondColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'GOLD',
                            data: this.serviceData.details.range3_gold,
                            stack: 'R3',
                            color: constants.goldColour, showInLegend: false,
                            type: undefined
                        }, {
                            name: 'DIAMOND',
                            data: this.serviceData.details.range3_diamond,
                            stack: 'R3',
                            color: constants.diamondColour, showInLegend: false,
                            type: undefined
                        }
                        ];

                    this.goldSalesData = [
                        {
                            name: 'Range 1',
                            stack: 'range1',
                            data: this.serviceData.details.range1_gold,
                            type: undefined
                        }, {
                            name: 'Range 2',
                            data: this.serviceData.details.range2_gold,
                            stack: 'range2',
                            type: undefined
                        }, {
                            name: 'Range 3',
                            data: this.serviceData.details.range3_gold,
                            stack: 'range3',
                            type: undefined
                        },
                        {
                            name: 'R1 Target',
                            type: 'spline',
                            data: this.serviceData.details.gold_target_r1,
                        },
                        {
                            name: 'R2 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.gold_target_r2,
                        },
                        {
                            name: 'R3 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.gold_target_r3,
                        }
                    ]
                    this.diamondSalesData = [
                        {
                            name: 'Range 1',
                            stack: 'range1',
                            data: this.serviceData.details.range1_diamond,
                            type: undefined
                        }, {
                            name: 'Range 2',
                            data: this.serviceData.details.range2_diamond,
                            stack: 'range2',
                            type: undefined
                        }, {
                            name: 'Range 3',
                            data: this.serviceData.details.range3_diamond,
                            stack: 'range3',
                            type: undefined
                        },
                        {
                            name: 'R1 Target',
                            type: 'spline',
                            data: this.serviceData.details.diamond_target_r1,

                        },
                        {
                            name: 'R2 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.diamond_target_r2,
                        },
                        {
                            name: 'R3 Target',
                            type: 'spline',
                            visible: false,
                            data: this.serviceData.details.diamond_target_r3,
                        }
                    ]
                    this.cdr.detectChanges();
                    this.salesCharts();
                    this.goldSales();
                    this.diamondSales();
                    this.loaderStatus = false;
                }

            } else {
                this.loaderStatus = false;
                this.router.navigate(['/error', data.error.message]);
            }
        })
    }


    salesCharts() {

        Highcharts.chart('locationWiseSales_SHW', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.serviceData.locations,
            },
            credits: {
                enabled: false
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAaxisTitle
                },
                stackLabels: {
                    enabled: true,
                    // allowOverlap: true,
                    style: {
                        color: 'black',
                        fontSize: '11px',
                        fontWeight: 'none',
                        textOutline: 'none'
                    },
                    formatter() {
                        const obj: any = this
                        return obj.stack;
                    },
                    align: 'center'
                }
            },
            tooltip: {
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            fontWeight:'none',
                            textOutline: 'none'
                        },
                        formatter() {
                            if (this.y > 0) {
                                return this.y.toFixed(2);
                            }
                        }
                    }
                }
            },
            series: this.seriesData
        });
    }

    goldSales() {
        Highcharts.chart('gold_Sales', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.serviceData.locations
            },
            credits: {
                enabled: false
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAaxisTitle
                }
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            tooltip: {
                shared: true
            },
            legend: this.legendOptions,
            series: this.goldSalesData

        });
    }

    diamondSales() {
        Highcharts.chart('diamond_Sales', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.serviceData.locations
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAaxisTitle
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                shared: true
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            legend: this.legendOptions,
            series: this.diamondSalesData

        });
    }
}
