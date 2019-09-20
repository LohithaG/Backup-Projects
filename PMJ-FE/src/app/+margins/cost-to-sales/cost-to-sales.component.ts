import { Component, ChangeDetectorRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { constants } from '../../shared-modules/app.constant';
import { TagToSaleSHWService } from '../margins.service';


@Component({
    selector: 'cost-to-sales',
    templateUrl: './cost-to-sales.component.html'
})

export class CostToSalesComponent {
    goldCostChartType = 'column';
    diaLocationChartType = 'column';
    goldLocationChartType = 'column';
    diaCostChartType = 'column';
    diaValCostLocation: any;
    diaValSaleLocation: any;
    goldValCostLocation: any;
    goldValSaleLocation: any;
    uiLocationClassToggle = true;
    uiClassToggle = true;
    categories: any;
    diaValCost: any;
    diaValSale: any;
    goldValCost: any;
    goldValSale: any;
    totalCost: any;
    locations: any;
    totalSales: any;
    targetSalesInfo: any = {
        goldSales: 0,
        diamondSales: 0,
        goldTarget: 0,
        diamondTarget: 0
    };
    kipblock = {
        cost: 0,
        sale: 0,
        margin: 0
    }
    loaderStatus = false;

    commomPlotOptions: any = {
        dataLabels: {
            enabled: true,
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
                        const point = arguments[1];
                        if (point.visible) {
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
    commonOption = {
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

    };

    constructor(private cdr: ChangeDetectorRef, public _tagToSaleService: TagToSaleSHWService) { }

    ngOnInit() {

    }


    noData = false;
    unSubscribe: any;
    queryDate(event) {
        this.loaderStatus = true;
        this.unSubscribe = this._tagToSaleService.getCostToSalesSHWData(event).subscribe((data: any) => {
            this.loaderStatus = false;
            if (data.error == null) {
                if (data.data.totalcostprice !== 0) {
                    this.noData = false;
                    this.getGraphs(data.data);
                    this.cdr.detectChanges();
                } else {
                    this.noData = true;
                    this.kipblock = {
                        cost: 0,
                        sale: 0,
                        margin: 0
                    }
                    console.log("NO data")
                }
            } else {
                this.noData = true;
                this.kipblock = {
                    cost: 0,
                    sale: 0,
                    margin: 0
                }
            }


        })

    }
    getGraphs(data) {
        this.uiClassToggle = false;
        this.uiLocationClassToggle = false;
        this.categories = data.details.timeline;
        this.uiClassToggle = (this.categories.length > 5) ? true : false;
        this.targetSalesInfo.goldSales = data.saleprice.gold;
        this.targetSalesInfo.goldCost = data.costprice.gold;
        this.diaValCost = data.details.actuals.costprice.diamond;
        this.diaValSale = data.details.actuals.saleprice.diamond;
        this.goldValCost = data.details.actuals.costprice.gold;
        this.goldValSale = data.details.actuals.saleprice.gold;
        this.targetSalesInfo.diamondSales = data.saleprice.diamond;
        this.totalCost = data.totalcostprice;
        this.kipblock.cost = data.totalcostprice;
        this.totalSales = data.totalsaleprice;
        this.kipblock.sale = data.totalsaleprice;
        this.kipblock.margin = data.totalmargin;


        this.targetSalesInfo.diamondCost = data.costprice.diamond;
        this.locations = data.details.locations.names;
        this.uiLocationClassToggle = (this.locations.length > 5) ? true : false;

        this.diaValCostLocation = data.details.locations.actuals.costprice.diamond;
        this.diaValSaleLocation = data.details.locations.actuals.saleprice.diamond;
        this.goldValCostLocation = data.details.locations.actuals.costprice.gold;
        this.goldValSaleLocation = data.details.locations.actuals.saleprice.gold;

        this.getcostPieChart();
        this.getSalePieChart();
        this.getDiamondPriceBarChart();
        this.getGoldPriceBarChart();
        this.getLocationDiamondPriceBarChart();
        this.getLocationGoldPriceBarChart();
    }
    getcostPieChart() {
        this.cdr.detectChanges();


        Highcharts.chart('tagPriceGoldDiamondsContainer', {
            chart: {
                type: 'pie'
            },

            subtitle: {
                text: `<div style="color: #333333;font-size: 18px;fill: #333333;">Cost Price</div>`
            },
            tooltip: {
            },
            credits: {
                enabled: false
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706"> ${this.totalCost.toFixed(2)} <br>(LACs)</div>`
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)} L )`;
                }
            },
            plotOptions: this.commonOption,

            series: [{
                name: 'Cost price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.targetSalesInfo.goldCost,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.targetSalesInfo.diamondCost,
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

                type: 'pie'
            },
            subtitle: {
                text: `<div style="color: #333333;font-size: 18px;fill: #333333;">Sale Price</div>`
            },
            tooltip: {
            },
            credits: {
                enabled: false
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalSales.toFixed(2)}<br>(LACs)</div>`
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name} : ${this.percentage.toFixed(2)}  % ( ${this.y.toFixed(2)} L )`;
                }
            },
            plotOptions: this.commonOption,

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
                type: this.diaCostChartType,
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
                    name: 'COST PRICE',
                    data: this.diaValCost,
                    color: '#cc4125',
                    type:undefined
                }, {
                    name: 'SALE PRICE',
                    data: this.diaValSale,
                    color: '#2196f3',
                    type:undefined
                }]
        });

    }
    getGoldPriceBarChart() {
        Highcharts.chart('goldTagPricevsSalePriceContainer', {
            chart: {
                type: this.goldCostChartType
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
                    name: 'COST PRICE',
                    data: this.goldValCost,
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
        Highcharts.chart('LocWisediaCostPricevsSalePriceContainer', {
            chart: {
                type: this.diaLocationChartType,
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.locations
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
                    name: 'COST PRICE',
                    data: this.diaValCostLocation,
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
        Highcharts.chart('LocWiseGoldCostPricevsSalePriceContainer', {
            chart: {
                type: this.goldLocationChartType,
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
                    name: 'COST PRICE',
                    data: this.goldValCostLocation,
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
                this.diaCostChartType = this.diaCostChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondPriceBarChart();
                break;
            }
            case 'goldTagPricevsSalePriceContainer': {
                this.goldCostChartType = this.goldCostChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldPriceBarChart();
                break;
            }
            case 'LocWisediaCostPricevsSalePriceContainer': {
                this.diaLocationChartType = this.diaLocationChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getLocationDiamondPriceBarChart();

                break;
            }
            case 'LocWiseGoldCostPricevsSalePriceContainer': {
                this.goldLocationChartType = this.goldLocationChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getLocationGoldPriceBarChart();
                break;
            }
        }
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.loaderStatus = false;
        if (this.unSubscribe) {
            this.unSubscribe.unsubscribe();
        }
    }
}
