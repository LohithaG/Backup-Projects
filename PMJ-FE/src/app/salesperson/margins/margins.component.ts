import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../sharedservice";
import { SalesPersonService } from '../sales-person-service';
@Component({
  selector: 'app-margins',
  templateUrl: './margins.component.html',
})
export class MarginsComponent implements OnInit {
  categories: any;
  unsubscribeService:any;
  diaQtyChartType = "column";
  goldQtyChartType = "column";
  loaderStatus=false;
  goldachievementsTarget: any;
  diaachievementsTarget: any;
  goldachievementsSale: any;
  diaachievementsSale: any;
  message: {};
  uiClassToggle = true;
  noData = false;

  ngOnInit() {

  }
  constructor(private cdr: ChangeDetectorRef,
    private datas: DataService, private salespersonService: SalesPersonService) {
  }
  getdata() {
    this.datas.currentMessage.subscribe(message => this.message = message)
    if (Object.getOwnPropertyNames(this.message).length !== 0) {
      this.toService();
    }
    this.datas.currentMessage.subscribe(message => this.message = message)

  }
  toService() {
    this.loaderStatus=true;
    this.datas.currentMessage.subscribe(message => this.message = message)
    this.unsubscribeService=this.salespersonService.getMarginsData(this.message).subscribe((data: any) => {
      this.loaderStatus=false;
      if (data.status !== 0) {
        if (data.data.totalsaleprice !== 0) {
          this.noData = false;
          this.getGraphs(data.data);
          this.cdr.detectChanges();
        } else {
          this.noData = true;

          console.log("NO data")
        }
      } else {
        this.noData = true;

      }
    })
  }
  getGraphs(data) {
    this.uiClassToggle = false;
    this.categories = data.timeLine;
    this.uiClassToggle = (this.categories.length > 5) ? true : false;
    this.goldachievementsTarget = data.goldTagPriceVSSalePrice.tagPrice;
    this.diaachievementsTarget = data.diamondTagPriceVSSalePrice.tagPrice;
    this.goldachievementsSale = data.goldTagPriceVSSalePrice.salePrice;
    this.diaachievementsSale = data.diamondTagPriceVSSalePrice.salePrice;

    this.getDiamondMargin();
    this.getGoldMargin();
  }
  getDiamondMargin() {
    this.cdr.detectChanges();
    Highcharts.chart('diamond-margin', {
      plotOptions: {
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

      },
      chart: {
        type: this.diaQtyChartType
      },

      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE(LACS)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TAG PRICE',
        data: this.diaachievementsTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'SALE PRICE',
        data: this.diaachievementsSale,
        color: "rgb(58, 175, 255)",
        type:undefined
      }

      ]
    });
  }
  getGoldMargin() {
    this.cdr.detectChanges();
    Highcharts.chart('gold-margin', {
      plotOptions: {
        spline: {
          dataLabels: {
            enabled: true,
            formatter () {
              const pcnt = (this.y);
              return Highcharts.numberFormat(pcnt, 2);
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
              return Highcharts.numberFormat(pcnt, 2);
            }
          },
          enableMouseTracking: true

        },
      },

      chart: {
        type: this.goldQtyChartType
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE(LACS)'
        },

      },

      credits: {
        enabled: false
      },
      series: [{
        name: 'TAG PRICE',
        data: this.goldachievementsTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'SALE PRICE',
        data: this.goldachievementsSale,
        color: "rgb(255, 215, 0)",
        type:undefined
      }

      ]
    });
  }
  lineChartConvertion(id) {
    switch (id) {
      case 'diamond-margin': {
        this.diaQtyChartType = this.diaQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiamondMargin();


        break;
      }
      case 'gold-margin': {
        this.goldQtyChartType = this.goldQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldMargin();
        break;
      }

    }
  }
  ngOnDestroy() {
    this.loaderStatus = false;
    if (this.unsubscribeService) {
      this.unsubscribeService.unsubscribe();
    }
  }
}
