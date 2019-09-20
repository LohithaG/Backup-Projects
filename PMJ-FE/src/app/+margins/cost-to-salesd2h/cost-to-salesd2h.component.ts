import { Component, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { constants } from '../../shared-modules/app.constant';
import { TagToSaleSHWService } from '../margins.service';


@Component({
    selector: 'cost-to-salesd2h',
    templateUrl: './cost-to-salesd2h.component.html'
})

export class CostToSalesComponentd2h {
    location: any;
    diamondTagSaleChartType = 'column';
    goldTagSaleChartType = 'column';
    diamondLocationChartType = 'column';
    goldLocationChartType = 'column';
    uiClassToggle = true;
    uiLocationToggle = true;
    noData = false;
    stateData: any;
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
    costSalesInfo: any = {
        totalCostPrice: 0,
        totalSalePrice: 0,
        totalMargin: 0,
        goldSales: 0,
        diamondSales: 0,
        diamondTarget: 0,
        goldTarget: 0
    };
    loaderStatus = false;
    graphPlotOptions = {
        spline: {
            dataLabels: {
                enabled: true,
                formatter () {
                    const pcnt = (this.y);
                    return Highcharts.numberFormat(pcnt,0);
                }
            },
            enableMouseTracking: true
        },
        column: {

            dataLabels:
            {
                enabled: true,
                formatter () {
                    const pcnt = (this.y);
                    return Highcharts.numberFormat(pcnt,0);
                }
            },
            enableMouseTracking: true

        },

    };
    yAxis = {
        min: 0,
        minPadding: 0,
        startOnTick: true,
        title: {
            text: 'VALUE (LACS)'
        }
    };
    pieOptions = {
        innerSize: '70%',
        showInLegend: true,
        dataLabels: {
            enabled: false,
        },
        point: {
            events: {
                legendItemClick () {
                    return false;
                }
            }
        }
    };
    goldDiaDetails: any = {};

    actualSales: any;
    targetSales: any;
    targetTags: any;
    unSubscribe: any;
  
    constructor(private cdr: ChangeDetectorRef, public _tagToSaleService: TagToSaleSHWService) { }

    ngOnInit() {
    }
    emptyKpi() {
        this.costSalesInfo = {
            totalCostPrice: 0,
            totalSalePrice: 0,
            totalMargin: 0,
        };
    }
    queryDate(event) {
        this.loaderStatus = true;
        if (event.stateId === 'ALL') {
            this.unSubscribe = this._tagToSaleService.getCostToSalesAllStatesD2HData(event).subscribe((data: any) => {
                this.loaderStatus = false;
                this.location = 'STATE';
                if (data.status !== 0) {
                     if (data.data.totalsaleprice !== 0) {
                    this.noData = false;
                    this.getGraphs(data.data);

                     }else{
                     this.emptyKpi();
                     this.noData = true;
                     console.log("No data")
                     }
                } else {
                    this.emptyKpi();
                    this.noData = true;
                    console.log("No data")
                }
            });
        }
        else if (event.stateId !== 'ALL' && event.clusterId === 'ALL') {
            this.unSubscribe = this._tagToSaleService.getCostToSalesSelectedStateDataD2H(event).subscribe((data: any) => {
                this.loaderStatus = false;
                this.location = 'CLUSTER';
                if (data.status !== 0) {
                    this.noData = false;
                    this.getGraphs(data.data);
                } else {
                    this.emptyKpi();

                    this.noData = true;
                    console.log("No data")
                }
            })
        } else if (event.clusterId !== 'ALL' && event.locationId === 'ALL') {

            this.unSubscribe = this._tagToSaleService.getCostToSalesSelectedClusterDataD2H(event).subscribe((data: any) => {
                this.loaderStatus = false;
                this.location = 'LOCATION';
                if (data.status !== 0) {
                    this.noData = false;
                    this.getGraphs(data.data);
                } else {
                    this.emptyKpi();

                    this.noData = true;
                    console.log("No data")
                }
            })
        } else if (event.locationId !== 'ALL') {
            this.unSubscribe = this._tagToSaleService.getCostToSaleSelectedLocationDataD2H(event).subscribe((data: any) => {
                this.loaderStatus = false;
                this.location = 'TEAM';
                if (data.status !== 0) {
                    this.noData = false;
                    this.getGraphs(data.data);
                } else {
                    this.emptyKpi();

                    this.noData = true;
                    console.log("No data")
                }
            })
        }
    }

    getGraphs(data) {
        this.uiClassToggle = false;
        this.uiLocationToggle = false;
        this.categories = data.d2hdetails.timeline;
        this.uiClassToggle = (this.categories.length > 5) ? true : false;

        this.diaValTag = data.d2hdetails.actuals.costprice.diamond;
        this.diaValSale = data.d2hdetails.actuals.saleprice.diamond;
        this.goldValTag = data.d2hdetails.actuals.costprice.gold;
        this.goldValSale = data.d2hdetails.actuals.saleprice.gold;

        this.costSalesInfo.totalCostPrice = data.totalcostprice;
        this.costSalesInfo.totalSalePrice = data.totalsaleprice;
        this.costSalesInfo.totalMargin = data.totalmargin;

        this.locations = data.d2hdetails.clusters.locations;
        this.uiLocationToggle = (this.locations.length > 5) ? true : false;

        this.diaValTagLocation = data.d2hdetails.clusters.actuals.costprice.diamond;
        this.diaValSaleLocation = data.d2hdetails.clusters.actuals.saleprice.diamond;
        this.goldValTagLocation = data.d2hdetails.clusters.actuals.costprice.gold;
        this.goldValSaleLocation = data.d2hdetails.clusters.actuals.saleprice.gold;


        this.costSalesInfo.goldTarget = data.costprice.gold;
        this.costSalesInfo.diamondTarget = data.costprice.diamond;
        this.costSalesInfo.goldSales = data.saleprice.gold;
        this.costSalesInfo.diamondSales = data.saleprice.diamond;

        // this.targetSales = this.stateData.totalsaleprice;
        // this.kpiBlockInfo.tag_price = this.stateData.totaltagprice;
        // this.kpiBlockInfo.sale_price = this.stateData.totalsaleprice;
        // this.kpiBlockInfo.margin = this.stateData.totalmargin;

        this.getCostPieChart();
        this.getSalePieChart();
        this.getDiamondPriceBarChart();
        this.getGoldPriceBarChart();
        this.getLocationDiamondPriceBarChart();
        this.getLocationGoldPriceBarChart();


    }

    getCostPieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('tagPriceGoldDiamondsContainer', {
            chart: {
                type: 'pie'
            },
            tooltip: {
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.costSalesInfo.totalCostPrice.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Cost Price</div>'
            },
            plotOptions: {
                pie: this.pieOptions,
            },

            credits: {
                enabled: false
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter () {
                    return `${this.name} : ${this.percentage.toFixed(2)} % (${this.y.toFixed(2)} L )`;
                }
            },
            series: [{
                name: 'Cost price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.costSalesInfo.goldTarget,
                    color: constants.goldColour,
                }, {
                    name: 'DIAMOND',
                    y: this.costSalesInfo.diamondTarget,
                    color: constants.diamondColour,
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

            tooltip: {
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.costSalesInfo.totalSalePrice.toFixed(2)}<br>(LACs)</div>`
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Sale Price</div>'
            },
            plotOptions: {
                pie: this.pieOptions,
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter () {
                    return `${this.name} : ${this.percentage.toFixed(2)} % (${this.y.toFixed(2)} L )`;
                }
            },

            series: [{
                name: 'Sale price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.costSalesInfo.goldSales,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.costSalesInfo.diamondSales,
                    color: constants.diamondColour,
                    dataId: null,
                }],
                type:undefined
            }]
        },
        );


    }

    getDiamondPriceBarChart() {
        this.cdr.detectChanges();
        Highcharts.chart('diamondsTagPricevsSalePriceContainer', {
            chart: {
                type: this.diamondTagSaleChartType,
            },
            plotOptions: this.graphPlotOptions,

            title: {
                text: ''
            },
            xAxis: {
                categories: this.categories
            },
            yAxis: this.yAxis,
            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'COST PRICE',
                    data: this.diaValTag,
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
        this.cdr.detectChanges();
        Highcharts.chart('goldTagPricevsSalePriceContainer', {
            chart: {
                type: this.goldTagSaleChartType,
            },
            title: {
                text: ''
            },
            plotOptions: this.graphPlotOptions,

            xAxis: {
                categories: this.categories
            },
            yAxis: this.yAxis,

            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'COST PRICE',
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
        this.cdr.detectChanges();
        Highcharts.chart('LocWisediaTagPricevsSalePriceContainer', {
            chart: {
                type: this.diamondLocationChartType,
            },
            plotOptions: this.graphPlotOptions,

            title: {
                text: ''
            },
            xAxis: {
                categories: this.locations,
            },
            yAxis: this.yAxis,

            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'COST PRICE',
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
        this.cdr.detectChanges();
        Highcharts.chart('LocWiseGoldTagPricevsSalePriceContainer', {
            chart: {
                type: this.goldLocationChartType,
            },
            title: {
                text: ''
            },
            plotOptions: this.graphPlotOptions,

            xAxis: {
                categories: this.locations
            },
            yAxis: this.yAxis,

            credits: {
                enabled: false
            },
            series: [
                {
                    name: 'COST PRICE',
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
                this.diamondTagSaleChartType = this.diamondTagSaleChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondPriceBarChart();
                break;
            }
            case 'goldTagPricevsSalePriceContainer': {
                this.goldTagSaleChartType = this.goldTagSaleChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldPriceBarChart();
                break;
            }
            case 'LocWisediaTagPricevsSalePriceContainer': {
                this.diamondLocationChartType = this.diamondLocationChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getLocationDiamondPriceBarChart();
                break;
            } case 'LocWiseGoldTagPricevsSalePriceContainer': {
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
