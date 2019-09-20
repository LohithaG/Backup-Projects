import { Component, ChangeDetectorRef } from '@angular/core';
import { GrowthCalculationService } from '../growth.service';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from '../../shared-modules/app.constant';
import { Router } from "@angular/router";

@Component({
    selector: 'total-sales',
    templateUrl: './total-sales.component.html',
    styles: [
        `
        .highcharts-container {
            width:100%
        }
        
        `
    ]
})

export class TotalSalesComponent {
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

    totalSalesData: any = {};
    loaderStatus = true;
    yAxisLabel: any = 'VALUE (LACs)';
    constructor(
        private readonly router: Router,
        public _growthService: GrowthCalculationService,
        public cdr: ChangeDetectorRef
    ) {

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


    QueryDate(value) {
        this.loaderStatus = true;
        this.getTotalSales(value);
    }

    ngOnInit() {

    }

    getTotalSales(value) {
        this.totalSalesData = [];
        this._growthService.totalSalesData(value).subscribe((data: any) => {
            if (data.error === null) {
                this.totalSalesData = data.data;
                this.setKpiValues();
                this.goldDiamondSales()
                this.goldSales();
                this.diamondSales()
                this.loaderStatus = false;
            } else {
                this.loaderStatus = false;
                this.router.navigate(['/error', data.error.message]);
            }
        })
    }

    setKpiValues() {
        this.kpiBlockInfo = {
            info: {
                range_1: this.totalSalesData.range1 === undefined ? null : this.totalSalesData.range1,
                range_2: this.totalSalesData.range2 === undefined ? null : this.totalSalesData.range2,
                range_3: this.totalSalesData.range3 === undefined ? null : this.totalSalesData.range3,
                growthr1r2: this.totalSalesData.growthr1_r2 === undefined ? null : this.totalSalesData.growthr1_r2,
                growthr1r3: this.totalSalesData.growthr1_r3 === undefined ? null : this.totalSalesData.growthr1_r3,
                growthr2r3: this.totalSalesData.growthr2_r3 === undefined ? null : this.totalSalesData.growthr2_r3,
            }
        }
    }

    goldDiamondSales() {

        Highcharts.chart('gold_diamond_sales', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.totalSalesData.totalsales.timeline
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
                    text: this.yAxisLabel
                },
                stackLabels: {
                    enabled: false,
                    // allowOverlap: true,

                    formatter() {
                        return `<div style="font-size:19px">${this.total.toFixed(2)}</div>`;
                    },
                    align: 'center'
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'black',
                            fontSize: '11px',
                            fontWeight: 'none',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2);
                        }
                    }
                }
            },
            series: [{
                name: 'GOLD',
                data: this.totalSalesData.totalsales.gold,
                color: constants.goldColour,
                type: undefined
            }, {
                name: 'DIAMOND',
                data: this.totalSalesData.totalsales.diamond,
                color: constants.diamondColour,
                type: undefined
            }]
        });
    }
    goldSalesChartType: any = 'column';
    goldSales() {
        Highcharts.chart('goldSales', {
            chart: {
                type: this.goldSalesChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.totalSalesData.details.gold.timeline
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
                    text: this.yAxisLabel
                }
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series:
            [{
                name: 'TARGET',
                data: this.totalSalesData.details.gold.target,
                color: constants.goldTargetColour,
                type: undefined
            },
            {
                name: 'ACTUAL',
                data: this.totalSalesData.details.gold.actual,
                color: constants.goldColour,
                type: undefined
            }
            ]
        });
    }
    diamondSalesChartType: any = 'column';
    diamondSales() {
        Highcharts.chart('diamondSales', {
            chart: {
                type: this.diamondSalesChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.totalSalesData.details.gold.timeline
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
                    text: this.yAxisLabel
                }
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series:
            [{
                name: 'TARGET',
                data: this.totalSalesData.details.diamond.target,
                color: constants.diamondTargetColour,
                type: undefined
            },
            {
                name: 'ACTUAL',
                data: this.totalSalesData.details.diamond.actual,
                color: constants.diamondColour,
                type: undefined
            }
            ]
        });
    }

    lineChartConvertion(id) {
        switch (id) {
            case 'goldSales': {
                this.goldSalesChartType = this.goldSalesChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.goldSales();
                break;
            }
            case 'diamondSales': {
                this.diamondSalesChartType = this.diamondSalesChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.diamondSales();
                break;
            }
        }
    }

}
