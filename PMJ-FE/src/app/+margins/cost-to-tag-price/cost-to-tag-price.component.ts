import { Component, ChangeDetectorRef, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { constants } from '../../shared-modules/app.constant';
import { TagToSaleSHWService } from '../margins.service';

@Component({
    selector: 'cost-to-tag-price',
    templateUrl: './cost-to-tag-price.component.html'
})

export class CostToTagPriceComponent {
    goldCostChartType = 'column';
    diaCostChartType = 'column';
    uiClassToggle = true;
    categories: any;
    diaValCost: any;
    diaValTag: any;
    goldValCost: any;
    goldValTag: any;
    totalCost: any;
    totalTag: any;
    targetTagInfo: any = {
        goldTag: 0,
        diamondTag: 0,
        goldTarget: 0,
        diamondTarget: 0
    };
    kipblock = {
        cost: 0,
        tag: 0,
        margin: 0
    }
    loaderStatus = false;

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
        this.unSubscribe = this._tagToSaleService.getCostToTagSHWData(event).subscribe((data: any) => {
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
                        tag: 0,
                        margin: 0
                    }
                    console.log("NO data")
                }
            } else {
                this.noData = true;
                this.kipblock = {
                    cost: 0,
                    tag: 0,
                    margin: 0
                }
            }


        })

    }
    getGraphs(data) {
        this.uiClassToggle = false;
        this.categories = data.details.timeline;
        this.uiClassToggle = (this.categories.length > 5) ? true : false;
        this.targetTagInfo.goldTag = data.tagprice.gold;
        this.targetTagInfo.goldCost = data.costprice.gold;
        this.diaValCost = data.details.actuals.costprice.diamond;
        this.diaValTag = data.details.actuals.tagprice.diamond;
        this.goldValCost = data.details.actuals.costprice.gold;
        this.goldValTag = data.details.actuals.tagprice.gold;
        this.targetTagInfo.diamondTag = data.tagprice.diamond;
        this.totalCost = data.totalcostprice;
        this.kipblock.cost = data.totalcostprice;
        this.totalTag = data.totaltagprice;
        this.kipblock.tag = data.totaltagprice;
        this.kipblock.margin = data.totalmargin;


        this.targetTagInfo.diamondCost = data.costprice.diamond;

       

        this.getcostPieChart();
        this.getTagPieChart();
        this.getDiamondPriceBarChart();
        this.getGoldPriceBarChart();
      
    }
    getcostPieChart() {
        this.cdr.detectChanges();


        Highcharts.chart('costPriceGoldDiamondsContainer', {
            chart: {

                type: 'pie'
            },

            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Cost Price</div>'
            },
            tooltip: {
            },
            credits: {
                enabled: false
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalCost.toFixed(2)}<br>(LACs)</div>`
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
            plotOptions: this.commonOption,

            series: [{
                name: 'Cost price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.targetTagInfo.goldCost,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.targetTagInfo.diamondCost,
                    color: constants.diamondColour,
                    dataId: null,
                }],
                type:undefined
            }]
        },
        );

    }
    getTagPieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('tagPriceGoldDiamondsContainer', {
            chart: {

                type: 'pie'
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Tag Price</div>'
            },
            tooltip: {
            },
            credits: {
                enabled: false
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: `<div style="font-size:34px;color:#FDA706">${this.totalTag.toFixed(2)}<br>(LACs)</div>`
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter () {
                    return `${this.name} : ${this.percentage.toFixed(2)} %  '( '${this.y.toFixed(2)} L )`;
                }
            },
            plotOptions: this.commonOption,

            series: [{
                name: 'Tag price',
                colorByPoint: true,
                data: [{
                    name: 'GOLD',
                    y: this.targetTagInfo.goldTag,
                    color: constants.goldColour,
                    dataId: null,
                }, {
                    name: 'DIAMOND',
                    y: this.targetTagInfo.diamondTag,
                    color: constants.diamondColour,
                    dataId: null,
                }],
                type:undefined

            }]
        },
        );

    }
    getDiamondPriceBarChart() {
        Highcharts.chart('diamondsCostPricevsTagPriceContainer', {
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
                    name: 'TAG PRICE',
                    data: this.diaValTag,
                    color: '#2196f3',
                    type:undefined
                }]
        });

    }
    getGoldPriceBarChart() {
        Highcharts.chart('goldCostPricevsTagPriceContainer', {
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
                    name: 'TAG PRICE',
                    data: this.goldValTag,
                    color: constants.goldColour,
                    type:undefined
                }]
        });

    }

    lineChartConvertion(id) {
        switch (id) {
            case 'diamondsCostPricevsTagPriceContainer': {
                this.diaCostChartType = this.diaCostChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getDiamondPriceBarChart();
                break;
            }
            case 'goldCostPricevsTagPriceContainer': {
                this.goldCostChartType = this.goldCostChartType === 'column' ? 'spline' : 'column';
                this.cdr.detectChanges();
                this.getGoldPriceBarChart();
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
