import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../sharedservice";
import { SalesPersonService } from '../sales-person-service';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],

})
export class SalesComponent implements OnInit {
  diaQtyChartType = "column";
  goldQtyChartType = "column";
  diaValueChartType = "column";
  goldValueChartType = "column";
  loaderStatus=false;
  categories: any;
  diaQtyActual;
  diaQtyTarget;
  diaValActual;
  diaValTarget;
  goldQtyActual;
  goldQtyTarget;
  goldValActual;
  goldValTarget;
  uiClassToggle = true;
  noData = false;
  unsubscribeService:any;
  message: {};


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
    this.unsubscribeService= this.salespersonService.getSalesData(this.message).subscribe((data: any) => {
      this.loaderStatus=false;
      if (data.status !== 0) {
        if (data.data.totalsaleprice !== 409) {
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
    this.cdr.detectChanges();

    this.categories = data.details.timeline;
    this.uiClassToggle = (this.categories.length > 5) ? true : false;

    this.diaQtyActual = data.details.actuals.qty.diamond;
    this.diaQtyTarget = data.details.target.qty.diamond;

    this.diaValActual = data.details.actuals.value.diamond;
    this.diaValTarget = data.details.target.value.diamond;


    this.goldQtyActual = data.details.actuals.qty.gold;
    this.goldQtyTarget = data.details.target.qty.gold;

    this.goldValActual = data.details.actuals.value.gold;
    this.goldValTarget = data.details.target.value.gold;
    this.getDiaValue()
    this.getDiaQty();
    this.getGoldValue();
    this.getGoldQty();
  }
  getDiaQty() {
    this.cdr.detectChanges();

    Highcharts.chart('diaQtygroupContainer', {
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
        type: this.diaQtyChartType
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories,

      },

      yAxis: {
        title: {
          text: 'QTY (CTS)'
        }
      },
      credits: {
        enabled: false
      },



      series: [
        { name: 'TARGET', data: this.diaQtyTarget, color: '#cc4125', type:undefined},
         { name: 'ACTUAL', data: this.diaQtyActual, color: '#2196f3', type:undefined }
      ]
    });
  }

  /**
    * DIAMOND VALUE
    */
  getDiaValue() {
    this.cdr.detectChanges();
    Highcharts.chart('diaValuegroupContainer', {
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
        type:
          this.diaValueChartType


      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE (LACS)'
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'TARGET',
          data: this.diaValTarget,
          color: '#cc4125',
          type:undefined
        }, {
          name: 'ACTUAL',
          data: this.diaValActual,
          color: '#2196f3',
          type:undefined
        }]
    });


  }
  /**
    * Gold QTY
    */
  getGoldQty() {
    this.cdr.detectChanges();
    Highcharts.chart('goldQtygroupContainer', {
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
        type: this.goldQtyChartType,


      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'QTY (KG)'
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TARGET',
        data: this.goldQtyTarget,
        color: '#cc4125',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.goldQtyActual,
        color: "#FFD700",
        type:undefined
      }

      ]
    });
  }

  /**
   * Gold VALUE
   */
  getGoldValue() {

    this.cdr.detectChanges();
    Highcharts.chart('goldValuegroupContainer', {
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
        type: this.goldValueChartType

      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'VALUE (LACS)'
        }
      },
      credits: {
        enabled: false
      },

      series: [{
        name: 'TARGET',
        data: this.goldValTarget,
        color: '#cc4125',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.goldValActual,
        color: "#FFD700",
        type:undefined
      }]
    });
  }
  lineChartConvertion(id) {
    switch (id) {
      case 'diaQtygroupContainer': {
        this.diaQtyChartType = this.diaQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiaQty();


        break;
      }
      case 'goldQtygroupContainer': {
        this.goldQtyChartType = this.goldQtyChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldQty();
        break;
      }
      case 'diaValuegroupContainer': {
        this.diaValueChartType = this.diaValueChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiaValue();

        break;
      }
      case 'goldValuegroupContainer': {
        this.goldValueChartType = this.goldValueChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldValue();
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
