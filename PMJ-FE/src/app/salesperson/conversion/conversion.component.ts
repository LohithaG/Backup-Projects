import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../sharedservice";
import { SalesPersonService } from '../sales-person-service';
@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
})
export class ConversionComponent implements OnInit {
  diawalkinconversionType = "column";
  goldwalkinconversionType = "column";
  goldTargetActualconversionChartType = "column";
  diamondTargetActualconversionChartType = "column";
  categories: any;
  loaderStatus=false

  goldTotalWalkins: any;
  diaTotalWalkins: any;
  goldPreferredWalkins: any;
  diaPreferredWalkins: any;
  goldConversionTarget: any;
  diaConversionTarget: any;
  diaconversionActual: any;
  goldconversionActual: any;
  noData = false;
  uiClassToggle = true;
  message: {};

  constructor(private cdr: ChangeDetectorRef,
    private datas: DataService,
    private salespersonService: SalesPersonService) { }

  ngOnInit() {
  }
  getdata() {
    this.datas.currentMessage.subscribe(message => this.message = message)
    if (Object.getOwnPropertyNames(this.message).length !== 0) {
      this.toService();
    }
    this.datas.currentMessage.subscribe(message => this.message = message)


  }
  unsubscribeService:any;
  toService() {
    this.loaderStatus=true;
    this.datas.currentMessage.subscribe(message => this.message = message)
    this.unsubscribeService=this.salespersonService.getConversionData(this.message).subscribe((data: any) => {
      this.loaderStatus=false;
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

    this.goldTotalWalkins = data.employee[0].walkins.gold.totalWalkins;
    this.diaTotalWalkins = data.employee[0].walkins.diamond.totalWalkins;
    this.goldPreferredWalkins = data.employee[0].walkins.gold.preferredWalkins;
    this.diaPreferredWalkins = data.employee[0].walkins.diamond.preferredWalkins;

    this.goldConversionTarget = data.employee[0].targets.gold;
    this.diaConversionTarget = data.employee[0].targets.diamond;
    this.goldconversionActual = data.employee[0].actuals.gold;
    this.diaconversionActual = data.employee[0].actuals.diamond;
    this.getDiamondtargetActualConversion();
    this.getGoldtargetActualConversion();
    this.getDiamondConversion();
    this.getGoldConversion();
  }
  getDiamondConversion() {
    this.cdr.detectChanges();

    Highcharts.chart('diamond-walkinconversion', {

      chart: {
        type: this.diawalkinconversionType
      },
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
            allowOverlap: true,
            formatter () {
              const pcnt = (this.y);
              return Highcharts.numberFormat(pcnt, 2) ;
            }
          },
         
          enableMouseTracking: true

        },

      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'WALKINS(COUNT)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TOTAL',
        data: this.diaTotalWalkins,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'PREFERRED',
        data: this.diaPreferredWalkins,
        color: "rgb(58, 175, 255)",
        type:undefined
      }

      ]
    });
  }
  getGoldConversion() {
    this.cdr.detectChanges();
    Highcharts.chart('gold-walkinconversion', {

      chart: {
        type: this.goldwalkinconversionType
      },
      title: {
        text: ''
      },
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
              return Highcharts.numberFormat(pcnt, 2) ;
            }
          },
          enableMouseTracking: true

        },

      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'WALKINS(COUNT)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TOTAL',
        data: this.goldTotalWalkins,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'PREFERRED',
        data: this.goldPreferredWalkins,
        color: "#FFD700",
        type:undefined
      }

      ]
    });
  }
  getDiamondtargetActualConversion() {
    this.cdr.detectChanges();

    Highcharts.chart('diamond-TargetActualconversion', {

      chart: {
        type: this.diamondTargetActualconversionChartType
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
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
              return Highcharts.numberFormat(pcnt, 2) ;
            }
          },
          enableMouseTracking: true

        },

      },
      yAxis: {
        title: {
          text: 'CONVERSION(%)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TARGET',
        data: this.diaConversionTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.diaconversionActual,
        color: "rgb(58, 175, 255)",
        type:undefined
      }

      ]
    });
  }
  getGoldtargetActualConversion() {
    this.cdr.detectChanges();

    Highcharts.chart('gold-TargetActualconversion', {

      chart: {
        type: this.goldTargetActualconversionChartType
      },
      title: {
        text: ''
      },
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
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'CONVERSION(%)'
        },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'TARGET',
        data: this.goldConversionTarget,
        color: 'rgb(204, 65, 37)',
        type:undefined
      }, {
        name: 'ACTUAL',
        data: this.goldconversionActual,
        color: "#FFD700",
        type:undefined
      }

      ]
    });
  }
  lineChartConvertion(id) {
    switch (id) {
      case 'diamond-walkinconversion': {
        this.diawalkinconversionType = this.diawalkinconversionType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiamondConversion();
        break;
      }
      case 'gold-walkinconversion': {
        this.goldwalkinconversionType = this.goldwalkinconversionType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldConversion();
        break;
      }
      case 'gold-TargetActualconversion': {
        this.goldTargetActualconversionChartType = this.goldTargetActualconversionChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getGoldtargetActualConversion();
        break;
      }
      case 'diamond-TargetActualconversion': {
        this.diamondTargetActualconversionChartType = this.diamondTargetActualconversionChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getDiamondtargetActualConversion();
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
