import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { constants } from '../../shared-modules/app.constant';
import { TagToSaleSHWService } from '../margins.service';

@Component({
    selector: 'tag-price-to-sales',
    templateUrl: './tag-price-to-sales.component.html',
})

export class TagPriceToSalesComponent {
    diaTagChartType = "column";
    goldTagChartType = "column";
    diaSaleChartType = "column";
    goldSaleChartType = "column";


    commomPlotOptions: any = {
        dataLabels: {
            enabled: true,
            formatter () {
                return this.y.toFixed(2)
            }
        },
        enableMouseTracking: true,
        events: {
            legendItemClick (e) {
                if (this.visible) {
                    let points = this.chart.series,
                        visPoint = 0;

                    jQuery.each(points, function () {
                        let point = arguments[1];
                        if (point.visible){
                            visPoint++;
                        }
                        if (visPoint > 1) {
                            return false;
                        }
                    });
                    if (visPoint < 2) {
                        e.preventDefault();
                    }
                }
            }
        }
    }

    loaderStatus = false;
    tagToSaledata: any;
    uiClassToggle = true;
    uiLocationToggle = true;

    categories: any;
    locations: any;
    diaValTag: any;
    diaValSale: any;
    goldValTag: any;
    goldValSale: any;
    goldValTagLocation: any;
    goldValSaleLocation: any;
    diaValTagLocation: any;
    diaValSaleLocation: any;
    targetSalesInfo: any = {
        goldSales: 0,
        diamondSales: 0,
        goldTarget: 0,
        diamondTarget: 0
    };

    goldDiaDetails: any = {};
    kpiBlockInfo: any = {
    };
    noData = false;
    actualSales: any;
    targetSales: any;
    targetTags: any;
    constructor(private cdr: ChangeDetectorRef,
        public _tagToSaleService: TagToSaleSHWService,
    ) { }

    ngOnInit() {
        //this.getGraphs("j")
        //  this.getGraphData();
    }
    unSubscribe: any;
    queryDate(event) {
        let dateObj: any = {
            startDate: '' + event.range1startDate,
            endDate: '' + event.range1endDate
        }
        this.loaderStatus = true;

        this.unSubscribe = this._tagToSaleService.getTagToSalesData(dateObj).subscribe((data: any) => {
            this.loaderStatus = false;
            if (data.error === null) {
                if (data.data.totalsaleprice !== 0) {
                    this.noData = false;


                    this.getGraphs(data.data);
                    this.cdr.detectChanges();
                } else {
                    this.noData = true;
                    this.kpiBlockInfo = {

                        totaltagprice: 0,
                        totalsaleprice: 0,
                        totalmargin: 0,

                    }
                    console.log("NO data")
                }
            } else {
                this.noData = true;
                this.kpiBlockInfo = {

                    totaltagprice: 0,
                    totalsaleprice: 0,
                    totalmargin: 0,

                }
            }


        })

    }

    getGraphs(data) {
        this.uiClassToggle = false;
        this.uiLocationToggle = false;
        this.categories = data.details.timeline;
        this.targetSalesInfo.goldSales = data.saleprice.gold;
        this.targetSalesInfo.goldTarget = data.tagprice.gold;
        this.diaValTag = data.details.actuals.tagprice.diamond;
        this.diaValSale = data.details.actuals.saleprice.diamond;
        this.goldValTag = data.details.actuals.tagprice.gold;
        this.goldValSale = data.details.actuals.saleprice.gold;
        this.targetSalesInfo.diamondSales = data.saleprice.diamond;
        this.locations = data.details.locations.names;
        this.uiLocationToggle = (this.locations.length > 5) ? true : false;
        this.diaValTagLocation = data.details.locations.actuals.tagprice.diamond;
        this.diaValSaleLocation = data.details.locations.actuals.saleprice.diamond;
        this.goldValTagLocation = data.details.locations.actuals.tagprice.gold;
        this.goldValSaleLocation = data.details.locations.actuals.saleprice.gold;
        this.uiClassToggle = (this.categories.length > 5) ? true : false;
        //  alert(this.categories.length)
        this.targetSalesInfo.diamondTarget = data.tagprice.diamond;

        this.kpiBlockInfo = {

            totaltagprice: data.totaltagprice,
            totalsaleprice: data.totalsaleprice,
            totalmargin: data.totalmargin,

        }
        this.targetTags = data.totaltagprice;
        this.targetSales = data.totalsaleprice;

        this.getTagPieChart();
        this.getSalePieChart();
        this.getDiamondPriceBarChart();
        this.getGoldPriceBarChart();
        this.getLocationDiamondPriceBarChart();
        this.getLocationGoldPriceBarChart();

    }
    getTagPieChart() {
        this.cdr.detectChanges();


        Highcharts.chart('tagPriceGoldDiamondsContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },

           
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.targetTags.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Tag Price</div>'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    showInLegend: true,
                    //  backgroundColor: 'red',
                    point: {
                        events: {
                            legendItemClick: (event) => {
                                return false;
                            }
                        }
                    },
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter () {
                    return `${this.name} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
                }
            },
            series: [{
                name: 'Tag price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.targetSalesInfo.goldTarget,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.targetSalesInfo.diamondTarget,
                    color: constants.diamondColour,
                    dataId: null,
                }],
                type:undefined
            }]
        },
        );
    }
    getSalePieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('salePriceGoldDiamondsContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },

            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Sale Price</div>'
            },
            tooltip: {
            },
            credits: {
                enabled: false
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.targetSales.toFixed(2)}<br>(LACs)</div>`
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter () {
                    return `${this.name} : ${this.percentage.toFixed(2)} %(${this.y.toFixed(2)} L )`;
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    allowPointSelect: false,
                    cursor: 'pointer',
                    showInLegend: true,
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


                },

            },

            series: [{
                name: 'Sale price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.targetSalesInfo.goldSales,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.targetSalesInfo.diamondSales,
                    color: constants.diamondColour,
                    dataId: null,
                }],
                type:undefined
            }]
        },
        );


    }
    getDiamondPriceBarChart() {

        Highcharts.chart('diamondsTagPricevsSalePriceContainer', {
            chart: {
                type: this.diaTagChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.categories
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            yAxis: {
                title: {
                    text: 'VALUE (LACs)'
                }
            },
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'TAG PRICE',
                    data: this.diaValTag,
                    color: '#cc4125',
                    type:undefined
                }, {
                    name: 'SALE PRICE',
                    data: this.diaValSale,
                    color: '#2196f3',
                    type:undefined
                }
            ]
        });

    }
    getGoldPriceBarChart() {
        Highcharts.chart('goldTagPricevsSalePriceContainer', {
            chart: {
                type: this.goldTagChartType
            },
            title: {
                text: ''
            },

            xAxis: {
                categories: this.categories
            },
            yAxis: {
                title: {
                    text: 'VALUE (LACs)'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: [
                {
                    name: 'TAG PRICE',
                    data: this.goldValTag,
                    color: '#cc4125',
                    type:undefined
                }, {
                    name: 'SALE PRICE',
                    data: this.goldValSale,
                    color: constants.goldColour,
                    type:undefined
                }]
        });

    }
    getLocationDiamondPriceBarChart() {
        Highcharts.chart('LocWisediaTagPricevsSalePriceContainer', {
            chart: {
                type: this.diaSaleChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.locations
            },
            yAxis: {
                title: {
                    text: 'VALUE (LACs)'
                }
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                column: this.commomPlotOptions,
                spline: this.commomPlotOptions
            },
            series: [
                {
                    name: 'TAG PRICE',
                    data: this.diaValTagLocation,
                    color: '#cc4125',
                    type:undefined
                }, {
                    name: 'SALE PRICE',
                    data: this.diaValSaleLocation,
                    color: '#2196f3',
                    type:undefined
                }]
        });

    }
    getLocationGoldPriceBarChart() {
        Highcharts.chart('LocWiseGoldTagPricevsSalePriceContainer', {
            chart: {
                type: this.goldSaleChartType
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.locations
            },
            yAxis: {
                title: {
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
                    name: 'TAG PRICE',
                    data: this.goldValTagLocation,
                    color: '#cc4125',
                    type:undefined
                }, {
                    name: 'SALE PRICE',
                    data: this.goldValSaleLocation,
                    color: constants.goldColour,
                    type:undefined
                }]
        });

    }
    lineChartConvertion(id) {
        switch (id) {
            case 'diamondsTagPricevsSalePriceContainer': {
                this.diaTagChartType = this.diaTagChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondPriceBarChart();
                break;
            }
            case 'goldTagPricevsSalePriceContainer': {
                this.goldTagChartType = this.goldTagChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldPriceBarChart();
                break;
            }
            case 'LocWisediaTagPricevsSalePriceContainer': {
                this.diaSaleChartType = this.diaSaleChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getLocationDiamondPriceBarChart();

                break;
            }
            case 'LocWiseGoldTagPricevsSalePriceContainer': {
                this.goldSaleChartType = this.goldSaleChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getLocationGoldPriceBarChart();
                break;
            }
        }
    }


    ngOnDestroy() {
        this.loaderStatus = false;
        if (this.unSubscribe) {
            this.unSubscribe.unsubscribe();
        }
    }
}
