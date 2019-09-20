import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from '../../shared-modules/app.constant';
import { GrowthCalculationService } from '../growth.service';
import { Router } from "@angular/router";
@Component({
    selector: 'salesperson',
    templateUrl: './salesperson.component.html'
})

export class SalesPersonComponent {
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
    loaderStatus = false;

    constructor(
        public _growthService: GrowthCalculationService,
        private readonly router: Router,
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

    yAaxisTitle: any = 'VALUE (LACs)';

    QueryDate(value) {
        this.loaderStatus = true;
        this._growthService.salesPersonWiseSales(value).subscribe((data: any) => {
            if (data.error === null) {
                this.totalSalesData = data.data;
                this.getTotalSales();
                this.loaderStatus = false;
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.loaderStatus = false;
            }
        })
    }

    ngOnInit() {

    }
    getTotalSales() {
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
        this.cdr.detectChanges();
        this.goldDiamondSales()
        this.goldSales();
        this.diamondSales()
        this.loaderStatus = false;
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
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAaxisTitle
                },
                stackLabels: {
                    enabled: false,
                    formatter() {
                        return `<div style="font-size:19px">${this.total.toFixed(2)}</div>`;
                    },
                    align: 'center'
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
                            fontWeight: 'none',
                            textOutline: 'none'
                        },
                        formatter() {
                            if (this.y > 0) {
                                return this.y.toFixed(2);
                            }
                        }
                    },
                    events: this.commomPlotOptions.events
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
                    text: this.yAaxisTitle
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
            credits: {
                enabled: false
            },
            xAxis: {
                categories: this.totalSalesData.details.gold.timeline
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
            series:
            [
                {
                    name: 'TARGET',
                    data: this.totalSalesData.details.diamond.target,
                    color: constants.diamondTargetColour,
                    type: undefined
                }, {
                    name: 'ACTUAL',
                    data: this.totalSalesData.details.diamond.actual,
                    color: constants.diamondColour,
                    type: undefined
                },

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
