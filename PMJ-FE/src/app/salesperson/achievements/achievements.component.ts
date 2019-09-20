import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../sharedservice";
import { SalesPersonService } from '../sales-person-service';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  //styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  categories: any;
  goldachievementsActual;
  diaachievementsActual;
  achievementsChartType = "column";
  message: {};
  noData = false;
  unsubscribeService: any;
  loaderStatus = false;
  constructor(private cdr: ChangeDetectorRef,
    private datas: DataService, private salespersonService: SalesPersonService) { }

  ngOnInit() {
    // this.getGraphs();
  }
  getdata() {
    this.datas.currentMessage.subscribe(message => this.message = message)
    if (Object.getOwnPropertyNames(this.message).length !== 0) {
      this.toService();
    }
    this.datas.currentMessage.subscribe(message => this.message = message)


  }
  toService() {
    this.loaderStatus = true
    this.datas.currentMessage.subscribe(message => this.message = message)
    this.unsubscribeService = this.salespersonService.getAchievemnetsData(this.message).subscribe((data: any) => {
      if (data.error == null) {
        this.loaderStatus = false

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
        this.loaderStatus = false


      }
    })
  }
  getGraphs(data) {
    this.categories = data.timeLine;
    this.goldachievementsActual = data.goldAchivementsPercentage;
    this.diaachievementsActual = data.diamondAchivementsPercentage;
    this.getAcievements();
  }
  getAcievements() {
    Highcharts.chart('achievements', {
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
      tooltip: {

      },
      chart: {
        type: this.achievementsChartType,
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.categories
      },
      yAxis: {
        title: {
          text: 'PERCENTAGE'
        },
        // labels: {
        //   formatter () {
        //     return this.value;
        //   }
        // },

      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Diamond',
        data: this.diaachievementsActual,
        color: 'rgb(33, 150, 243)',
        type:undefined
      }, {
        name: 'Gold',
        data: this.goldachievementsActual,
        color: "#FFD700",
        type:undefined
      }

      ]
    });
  }
  lineChartConvertion(id) {
    switch (id) {
      case 'achievements': {
        this.achievementsChartType = this.achievementsChartType === 'column' ? 'spline' : 'column';
        this.cdr.detectChanges();
        this.getAcievements();


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
