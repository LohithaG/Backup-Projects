import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../sharedservice";
import { SalesPersonService } from '../sales-person-service';
@Component({
  selector: 'app-average-ticket-size',
  templateUrl: './average-ticket-size.component.html',
  //styleUrls: ['./average-ticket-size.component.scss']
})
export class AverageTicketSizeComponent implements OnInit {
  categories: any;
  diaQtyChartType = "column";
  goldQtyChartType = "column";
  goldachievementsTarget: any;
  diaachievementsTarget: any;
  goldachievementsSale: any;
  diaachievementsSale: any;
  loaderStatus=false

  message: {};
  uiClassToggle = true;
  noData = false;
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
  constructor(private cdr: ChangeDetectorRef,
    private datas: DataService, private salespersonService: SalesPersonService) {
  }
  ngOnInit() {
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
    this.salespersonService.getAverageTicketSizeData(this.message).subscribe((data: any) => {
      this.loaderStatus=false
      if (data.status !== 409) {
        this.noData = false;
        this.getGraphs(data.data);
        this.cdr.detectChanges();
      } else {
        this.noData = true;

        console.log("NO data")
      }

    })
  }
  getGraphs(data) {
    this.uiClassToggle = false;

    this.categories = data.timeLine;
    this.uiClassToggle = (this.categories.length > 5) ? true : false;

    this.goldachievementsTarget = data.employee[0].targets.gold;
    this.diaachievementsTarget = data.employee[0].targets.diamond;
    this.goldachievementsSale = data.employee[0].actuals.gold;
    this.diaachievementsSale = data.employee[0].actuals.diamond;

    this.getDiamondTicket();
    this.getGoldTicket();
  }
  getDiamondTicket() {
    this.cdr.detectChanges();
    Highcharts.chart('diamondticketsize', {

      chart: {
        type: this.diaQtyChartType
      },
      title: {
        text: ''
      },
      plotOptions: this.graphPlotOptions,
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE (LACS)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TARGET',
        data: this.diaachievementsTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.diaachievementsSale,
        color: "rgb(58, 175, 255)",
        type:undefined
      }

      ]
    });
  }
  getGoldTicket() {
    this.cdr.detectChanges();
    Highcharts.chart('goldticketsize', {

      chart: {
        type: this.goldQtyChartType
      },
      plotOptions: this.graphPlotOptions,
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE (LACS)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TARGET',
        data: this.goldachievementsTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.goldachievementsSale,
        color: "rgb(255, 215, 0)",
        type:undefined
      }

      ]
    });
  }
  lineChartConvertion(id) {
    switch (id) {
      case 'diamondticketsize': {
        this.diaQtyChartType = this.diaQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiamondTicket();


        break;
      }
      case 'goldticketsize': {
        this.goldQtyChartType = this.goldQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldTicket();
        break;
      }

    }
  }
}
