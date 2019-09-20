import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
import { constants } from '../../shared-modules/app.constant';
import { TargetActaulService } from './cmd-dashboard.service';
import { Router } from "@angular/router";
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'target-actual',
    templateUrl: './cmd-dashboard.component.html'
})

export class TargetVsActualComponent {

    pieOptions: any = {
        legend: {
            enabled: false,
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            useHTML: true,
            labelFormatter() {
                return `${this.name.toUpperCase()} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
            }
        },
        legendType2: {
            enabled: true,
            itemWidth: 250,
            width: 500,
            labelFormatter() {
                return `${this.name.replace('Class', '')} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
            }
        },
    }

    yAxisTitle: any = 'VALUE (LACs)';

    plotOptions: any = {
        dataLabels: {
            enabled: true,
            allowOverlap: true,
            style: {
                color: 'black',
                fontSize: '11px',
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
                    jQuery.each(points, function() {
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

    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('lgModal2') public lgModal2: ModalDirective;

    toolTip: any = {
        enabled: true,
        formatter() {
            return `<b>${this.series.name}</b><br/>${this.point.y}`;
        }
    }
    dynamicUi = false;
    test1 = true;
    loaderStatus = true;
    goldDiaInfo: any = {

    };

    kpiInfo: any = {
        achievement: 10,
        profit: 0,
        conversion: 0,
        ticketSize: 0
    };

    goldDiaDetails: any = {};
    constructor(
        public _targetActaulService: TargetActaulService,
        private readonly cdr: ChangeDetectorRef,
        private readonly router: Router
    ) {

    }
    meauStatus: any;
    selectedType = 1;
    ngOnInit() {
        this.hideThePage = false;
    }

    /**
  * Method From Date Filers
  */
    hideThePage = false;
    unSubscribe: any;
    channelsChartData = [];
    locationStackedChart: any = [];
    locationStackedTimeLine: any;
    locationGoldStacked: any;
    locationDiaStacked: any;


    stateStackedChart: any = [];
    stateStackedTimeLine: any = [];
    stateGoldStacked: any;
    stateDiaStacked: any;

    classData: any = [];
    allClassesData: any = [];
    donutValue = 0;


    channelsTotalSale: any = 0;
    classSale: any = 0;



    categoryStatus = true;
    channelStatus = true;
    classStatus = true;
    locationStatus = true;
    stateStatus = true;




    stackToolTip: any = {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    }
    pieToolTip: any = {
        pointFormat: '<b>{point.y}</b>'
    }

    QueryDate(value) {
        this.channelsChartData = [];
        this.classData = []
        this.channelsTotalSale = 0;
        this.classSale = 0;
        //this.loaderStatus=true
        this.categoryStatus = true;
        this.channelStatus = true;
        this.classStatus = true;
        this.locationStatus = true;
        this.stateStatus = true;
        this.kpiInfo = {
            achievement: 0,
            profit: 0,
            conversion: 0,
            ticketSize: 0
        };

        const dateObj: any = {
            startDate: '' + value.range1startDate,
            endDate: '' + value.range1endDate
        }

        this._targetActaulService.getKpiInfo(dateObj).subscribe((kpiData: any) => {
            if (kpiData.error === null) {
                this.kpiInfo = {
                    achievement: kpiData.data.achivements,
                    profit: kpiData.data.margin,
                    conversion: kpiData.data.conversion,
                    ticketSize: kpiData.data.tiketSize,
                }
            } else {
                this.router.navigate(['/error', kpiData.error.message]);
            }
        })
        this._targetActaulService.getAllSalesData(dateObj).subscribe((data: any) => {
            if (data.error === null) {
                this.getGraphs(data.data);

                this.hideThePage = false;
                this.categoryStatus = false;
                this.cdr.detectChanges();
            } else {
                this.router.navigate(['/error', data.error.message]);
                this.categoryStatus = false;
                this.hideThePage = true;
            }
        })


        this._targetActaulService.getAllChannelsData(dateObj).subscribe((allChannelsData: any) => {
            if (allChannelsData.error === null) {
                for (let i = 0; i < allChannelsData.data.details.channels.length; i++) {
                    const obj = {
                        name: allChannelsData.data.details.channels[i],
                        y: allChannelsData.data.details.actuals.value.gold[i] + allChannelsData.data.details.actuals.value.diamond[i]
                    }
                    this.channelsChartData.push(obj);
                }
                for (let j = 0; j < this.channelsChartData.length; j++) {
                    this.channelsTotalSale = this.channelsTotalSale + this.channelsChartData[j].y;
                    // if (this.picChartData[j].y !== 0) {
                    //     this.showActuals = true;
                    // }
                }
                this.channelWisePie();
                this.cdr.detectChanges();
                this.channelStatus = false;
                this.hideThePage = false;
            } else {
                this.router.navigate(['/error', allChannelsData.error.message]);
                this.channelStatus = false;
                this.hideThePage = true;
            }
        })

        this._targetActaulService.getAllClassesData(dateObj, 1).subscribe((response: any) => {
            if (response.error === null) {
                this.allClassesData = response;

                for (let i = 0; i < this.allClassesData.data.details.classes.length; i++) {
                    const obj = {
                        name: this.allClassesData.data.details.classes[i],
                        y: this.allClassesData.data.details.actuals.value.gold[i] + this.allClassesData.data.details.actuals.value.diamond[i]
                    }
                    this.classData.push(obj);

                }
                for (let j = 0; j < this.classData.length; j++) {
                    this.classSale = this.classSale + this.classData[j].y;
                    // if (this.classData[j].y !== 0) {
                    //     this.showActuals = true;
                    // }
                }
                this.classWiseChart();
                this.hideThePage = false;
                this.classStatus = false;
            } else {
                this.router.navigate(['/error', response.error.message]);
                this.hideThePage = true;
                this.classStatus = false;
            }
        })

        this._targetActaulService.getAllLocationsData(dateObj).subscribe((response: any) => {
            if (response.error === null && response.data !== null) {

                this.locationStackedTimeLine = response.data.details.location;
                this.locationGoldStacked = response.data.details.actuals.value.gold;
                this.locationDiaStacked = response.data.details.actuals.value.diamond;
                this.locationStackedContainer();
                setTimeout(() => {
                    this.locationStatus = false;
                    this.hideThePage = false;
                }, 1000);
            } else {
                this.router.navigate(['/error', response.error.message]);
                this.locationStatus = false;
                this.hideThePage = true;
            }
        })

        this._targetActaulService.getAllStatesData(dateObj).subscribe((stateRes: any) => {
            if (stateRes.error === null && stateRes.data !== null) {
                this.stateStackedTimeLine = stateRes.data.details.state;
                this.stateGoldStacked = stateRes.data.details.actuals.value.gold;
                this.stateDiaStacked = stateRes.data.details.actuals.value.diamond;
                this.stateStackedContainer();
                setTimeout(() => {
                    this.stateStatus = false;
                    this.hideThePage = false;
                }, 1000);
            } else {
                this.router.navigate(['/error', stateRes.error.message]);
                this.stateStatus = false;
                this.hideThePage = true;
            }
        })

        this._targetActaulService.getTopList(dateObj).subscribe((topList: any) => {
            this.teamTimeLine = [];
            this.teamGold = [];
            this.teamDiamond = [];
            this.topEmpDiamond = [];
            this.topEmpGold = [];
            this.topEmpTimeLine = [];

            if (topList.error === null) {
                if (topList.data.d2hteam) {
                    topList.data.d2hteam.find((d: any) => {
                        this.teamTimeLine.push(`${d.team.location.locationCode}-${d.team.teamNum}`);
                        this.teamGold.push(d.totalGold ? d.totalGold : 0);
                        this.teamDiamond.push(d.totalDiamond ? d.totalDiamond : 0);
                    })
                    this.topTeamListCharts();
                }
                if (topList.data.showroomemp) {
                    topList.data.showroomemp.find((d: any) => {
                        this.topEmpTimeLine.push(`${d.employee.location.locationCode.replace("SHW", ' ').toUpperCase()}-${d.employee.empName.toUpperCase()}`);
                        this.topEmpGold.push(d.totalGold ? d.totalGold : 0);
                        this.topEmpDiamond.push(d.totalDiamond ? d.totalDiamond : 0);
                    })
                    this.topEmpListCharts();
                }
            } else {
                this.router.navigate(['/error', topList.error.message]);

            }
        })


    }

    top10EmployeeData: any = [];
    top10TeamsData: any = [];
    teamDiamond: any = [];
    teamGold: any = [];
    teamTimeLine: any = [];

    topEmpDiamond: any = [];
    topEmpGold: any = [];
    topEmpTimeLine: any = [];

    topEmpListCharts() {
        this.cdr.detectChanges()
        Highcharts.chart('topEmployees', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.topEmpTimeLine
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
                    text: this.yAxisTitle
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'none'
                    },
                    formatter() {
                        return this.total.toFixed(2);
                    }
                }
            },

            tooltip: this.stackToolTip,
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'black',
                            fontWeight: 'none',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2);
                        }
                    },
                    events: this.plotOptions.events
                }
            },

            series: [
                {
                    name: 'GOLD',
                    color: constants.goldColour,
                    data: this.topEmpGold,
                    type: undefined
                }, {
                    name: 'DIAMOND',
                    color: constants.diamondColour,
                    data: this.topEmpDiamond,
                    type: undefined

                }
            ]
        });
    }
    topTeamListCharts() {
        this.cdr.detectChanges()
        Highcharts.chart('topTeams', {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.teamTimeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'none'
                    },
                    formatter() {
                        return this.total.toFixed(2);
                    }
                }
            },
            credits: {
                enabled: false
            },
            tooltip: this.stackToolTip,
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'black',
                            fontWeight: 'none',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2);
                        }
                    },
                    events: this.plotOptions.events
                }
            },
            series: [{
                name: 'GOLD',
                color: constants.goldColour,
                data: this.teamGold,
                type: undefined
            }, {
                name: 'DIAMOND',
                color: constants.diamondColour,
                data: this.teamDiamond,
                type: undefined
            }

            ]
        });
    }


    stateStackedContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('stateStackedContainer', {
            chart: {
                type: 'column',
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.stateStackedTimeLine
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
                    text: this.yAxisTitle
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'none'
                    },
                    formatter() {
                        return this.total.toFixed(2);
                    }
                }
            },
            tooltip: this.stackToolTip,
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'black',
                            fontWeight: 'none',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2);
                        }
                    },
                    events: this.plotOptions.events
                }
            },
            series: [{
                name: 'GOLD',
                data: this.stateGoldStacked,
                color: constants.goldColour,
                type: undefined
            }, {
                name: 'DIAMOND',
                data: this.stateDiaStacked,
                color: constants.diamondColour,
                type: undefined
            }]
        });
    }

    locationStackedContainer() {
        this.cdr.detectChanges();
        Highcharts.chart('locationStackedContainer', {
            chart: {
                type: 'column',
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.locationStackedTimeLine
            },
            yAxis: {
                min: 0,
                title: {
                    style: {
                        color: 'black',
                        letterSpacing: '1px'
                    },
                    text: this.yAxisTitle
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'none'
                    },
                    formatter() {
                        return this.total.toFixed(2);
                    }
                }
            },
            tooltip: this.stackToolTip,
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
                            fontWeight: 'none',
                            fontSize: '11px',
                            textOutline: 'none'
                        },
                        formatter() {
                            return this.y.toFixed(2);
                        }
                    },
                    events: this.plotOptions.events
                }
            },
            series: [{
                name: 'GOLD',
                data: this.locationGoldStacked,
                color: constants.goldColour,
                type: undefined
            }, {
                name: 'DIAMOND',
                data: this.locationDiaStacked,
                color: constants.diamondColour,
                type: undefined
            }],
            // exporting: {
            //     buttons: {
            //         contextButton: {
            //             menuItems: ['viewFullscreen', 'printChart']
            //         }
            //     }
            // }
        });
    }

    actualSales: any;
    getGraphs(data) {

        this.dynamicUi = false;
        this.goldDiaInfo.actuals = data.actuals;
        this.goldDiaInfo.target = data.target;

        this.actualSales = this.goldDiaInfo.actuals.value.gold + this.goldDiaInfo.actuals.value.diamond;

        this.goldDiaDetails = data.details;

        this.dynamicUi = this.goldDiaDetails.timeline.length > 5 ? true : false;

        if (this.goldDiaInfo.target.value.gold && this.goldDiaInfo.target.value.diamond) {
            this.hideThePage = false;
            this.getActualSalesPieChart();
            this.loaderStatus = false;
        } else {
            this.hideThePage = true;
            this.loaderStatus = false;
        }
    }


    channelWisePie() {
        this.cdr.detectChanges();
        Highcharts.chart('channelWisePieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            colors: ['#5E1833', '#F27521', '#A53D26', '#5A9AD5'],
            title: {
                text: `<div style="font-size:24px;color:#FDA706">${this.channelsTotalSale.toFixed(2)}<br><span style="font-size:14px">(LACs)</span></div>`,
                align: 'center',
                verticalAlign: 'middle',
                y: 30
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Channel</div>'
            },
            tooltip: this.pieToolTip,
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                          distance: -0
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '90%'],
                    size: '150%',
                    showInLegend: true,
                }
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
                labelFormatter() {
                    return `${this.name} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '70%',
                data: this.channelsChartData
            }]
        });
    }


    classWiseChart() {
        this.cdr.detectChanges();
        Highcharts.chart('classWisePieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            colors: ['#20B070', '#F9766D', '#5E1833', '#F27521', '#FCB441', '#F9766D', '#5E1833'],
            title: {
                text: `<div style="font-size:24px;color:#FDA706">${this.classSale.toFixed(2)}<br><span style="font-size:14px">(LACs)</span></div>`,
                align: 'center',
                verticalAlign: 'middle',
                y: 30
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Class</div>'
            },
            tooltip: {
                pointFormat: '<b>{point.y}</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                          distance: -0,
                        formatter: function() {
                            if (this.percentage) {
                                return this.point.name.replace('Class', '')
                            }
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '90%'],
                    size: '150%',
                    showInLegend: true,
                }
            },
            legend: {
                enabled: true,
                itemWidth: 200,
                width: 400,
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name.replace('Class', '')} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                type: 'pie',
                innerSize: '70%',
                data: this.classData
            }]
        });

    }


    getActualSalesPieChart() {
        this.cdr.detectChanges();
        Highcharts.chart('actualSalesPieContainer', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: `<div style="font-size:24px;color:#FDA706">${this.actualSales.toFixed(2)}<br><span style="font-size:14px">(LACs)</span></div>`,
                align: 'center',
                verticalAlign: 'middle',
                y: 30
            },
            subtitle: {
                text: '<div style="color: #333333;font-size: 18px;fill: #333333;">Category</div>'

            },
            tooltip: {
                pointFormat: '<b>{point.y}</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -0
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '90%'],
                    size: '150%',
                    showInLegend: true,
                }
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'bottom',
                useHTML: true,
                labelFormatter() {
                    return `${this.name} : ${this.percentage.toFixed(2)} % ( ${this.y.toFixed(2)}L )`;
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                innerSize: '70%',
                data: [

                    {
                        name: 'GOLD',
                        y: this.goldDiaInfo.actuals.value.gold,
                        color: constants.goldColour
                    },
                    {
                        name: 'DIAMOND',
                        y: this.goldDiaInfo.actuals.value.diamond,
                        color: constants.diamondColour
                    }
                ]
            }]
        });
    }


    selectedChartId: any;
    selectedChartTitle: any = '';
    viewFullScreen(id, title) {
        this.selectedChartId = '';
        this.selectedChartId = id;
        this.selectedChartTitle = title;
        switch (id) {
            case 'topTeams': {
                this.lgModal.show();
                this.topTeamListCharts();
                break;
            }
            case 'topEmployees': {
                this.lgModal.show();
                this.topEmpListCharts();
                break;
            }
            case 'locationStackedContainer': {
                this.lgModal.show();
                this.locationStackedContainer();
                break;
            }
            case 'stateStackedContainer': {
                this.lgModal.show();
                this.stateStackedContainer();
                break;
            }
        }
    }

    closeFullView(id) {
        this.selectedChartId = '';
        this.selectedChartTitle = '';
        this.lgModal.hide();
        this.lgModal2.hide();
        this.combinedFullView = '';
        switch (id) {
            case 'topTeams': {
                this.topTeamListCharts();
                break;
            }
            case 'topEmployees': {
                this.topEmpListCharts();
                break;
            }
            case 'locationStackedContainer': {
                this.locationStackedContainer();
                break;
            }
            case 'stateStackedContainer': {
                this.stateStackedContainer();
                break;
            }
            case 'combinedView': {
                this.channelWisePie();
                this.classWiseChart();
                this.getActualSalesPieChart()
                break;
            }
        }
    }
    combinedFullView: any = '';
    combinedViewFullScreen(CommonCharts) {

        this.combinedFullView = CommonCharts;
        this.lgModal2.show();
        this.channelWisePie();
        this.classWiseChart();
        this.getActualSalesPieChart()
    }
}
