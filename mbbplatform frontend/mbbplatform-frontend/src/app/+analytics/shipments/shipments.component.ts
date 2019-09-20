import { Response, Headers } from '@angular/http'

import { ModalDirective } from "ngx-bootstrap";
import * as FileSaver from 'file-saver';
declare var $: any;
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import * as moment from 'moment';
declare var L, d3, dc, crossfilter;

import { ShipmentService } from './shipments.service';
import { format } from 'path';

@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    providers: [ShipmentService]
})

export class ShipmentsComponent {

    public activePageTitle: any;
    public QueryData: any = { startDate: '', endDate: '' };
    public isSearchQuerySubmitted: boolean;
    private readonly model: Object = { date: { year: 2018, month: 10, day: 9 } };
    private readonly startDate: any;
    private readonly endDate: any;
    public dummyPreview: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public errorMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;

    private readonly selDate: any;

    private readonly myDatePickerOptions: IMyOptions = {
        // other options...
        disableDateRanges: [{
            begin: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 },
            end: { year: 9999, month: 12, day: 31 }
        }],
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };
    d = new Date();

    constructor(public shipmentService: ShipmentService) {
        this.activePageTitle = 'Analytics';
    }
    ngOnInit() {
        $('#noData').hide();
        this.getDefaultDates()
    }
    loading = false
    QuerySubmit() {
        this.loading = true;
        if (this.QueryData.startDate !== '') {
            const stYear = this.QueryData.startDate.date.year;
            const stMonth = this.QueryData.startDate.date.month;
            const stDay = this.QueryData.startDate.date.day;
            const startDate = `${stYear}-${stMonth}-${stDay}`;

            this.QueryDataStartDate = moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        } else {
            this.QueryDataStartDate = ''
        }

        if (this.QueryData.endDate !== '') {
            const endYear = this.QueryData.endDate.date.year;
            const endMonth = this.QueryData.endDate.date.month;
            const endDay = this.QueryData.endDate.date.day;
            const endDate = `${endYear}-${endMonth}-${endDay}`;
            this.QueryDataEndDate = moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        } else {
            this.QueryDataEndDate = '';
        }

        if (this.QueryDataStartDate === '' && this.QueryDataEndDate === '') {
            this.isSearchQuerySubmitted = true;
        } else {
            if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                this.errorMessage = 'End date should be greater than start date';
                setTimeout(() => {
                    this.errorMessage = '';
                }, 3000)
            } else {
                this.errorMessage = '';
                this.shipmentService.getShipmentsDetailsByDate(this.QueryDataStartDate, this.QueryDataEndDate).subscribe((response: any) => {
                    this.renderDashBoardAnalyticsCharts(response.data)
                });

            }
            this.isSearchQuerySubmitted = false;
        }
    }

    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    public renderDashBoardAnalyticsCharts(data) {
        function buildArcs(chart) {
            return d3.svg.arc().outerRadius(chart.radius()).innerRadius(chart.innerRadius());
        }
        function labelPosition(d, arc) {
            var centroid = arc.centroid(d);
            if (isNaN(centroid[0]) || isNaN(centroid[1])) {
                return [0, 0];
            } else {
                return centroid;
            }
        }

        if (data.length === 0) {
            $('#data').hide();
            $('#noData').show();
        } else {
            $('#noData').hide();
            $('#data').show();
            const loadsChart = dc.barChart('#bar-chart');
            const statusChart = dc.pieChart('#status-chart');
            const appttypeChart = dc.pieChart('#appointment-type-chart');
            const appttypeChart1 = dc.pieChart('#appointment-type-chart1');
            const delayCharts = dc.pieChart('#delayCharts');
            const dcChart = dc.barChart('#dc-chart');
            const dataCount = dc.dataCount('#dc-data-count');
            const dataTable = dc.dataTable('.dc-data-table');
            const colorScale = d3.scale.category20b();
            const dateFormat = d3.time.format('%Y-%m-%d');

            data.forEach(function (d) {
                d.cd = dateFormat.parse(d.createdDate);
                d.sad = dateFormat.parse(d.deliveryDate);
                d.aad = dateFormat.parse(d.dispatchDate);
            });

            const mdx = crossfilter(data);
            const all = mdx.groupAll();

            data.forEach((d) => {
                d.od = dateFormat.parse(d.orderDate);
            })

            const scheduleArrivalDateDim = mdx.dimension(function (d) {
                return d.od;
            });

            const loadsGroup = scheduleArrivalDateDim.group();
            const minDate = scheduleArrivalDateDim.bottom(1)[0].od
            const maxDate = scheduleArrivalDateDim.top(1)[0].od;

            loadsChart
                .width(1100)
                .height(300)
                .dimension(scheduleArrivalDateDim)
                .group(loadsGroup)
                .brushOn(true)
                .elasticX(true)
                .elasticY(true)
                .x(d3.time.scale().domain([minDate, maxDate]))
                .xUnits(d3.time.days)
                .colors(colorScale)

            const ontimeDelayC = mdx.dimension(function (d) {
                if (d.deliveryStatus !== null) {
                    // console.log(d.deliveryStatus);
                    return d.deliveryStatus;
                }
            });
            const ontimeDelayGroup = ontimeDelayC.group();

            delayCharts
                .width(500 - 20)
                .height(300)
                .cy(105)
                .radius(100)
                .dimension(ontimeDelayC)
                .group(ontimeDelayGroup)
                .legend(dc.legend().x(170).y(230).itemWidth(100).horizontal(true))
                .colors(d3.scale.ordinal().range(['#F9766D', '#18BF7C']))
            const ontimeDelayName = function (apptType) {
                let name = '';
                switch (apptType) {
                    case 'ONTIME':
                        name = ' ONTIME ';
                        break;
                    case 'DELAY':
                        name = ' DELAY ';
                        break;
                    default:
                        name = apptType;
                }
                console.log(apptType);
                return name;
            };

            delayCharts.on('pretransition', function (chart) {

                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text(function (d) {
                        return ontimeDelayName(d.name)
                    });

                chart.selectAll('text.pie-slice')
                    .transition()
                    .duration(chart.transitionDuration())
                    .attr('transform', (d, i) => {
                        var j = 0;
                        var arc = buildArcs(chart);
                        var xy = labelPosition(d, arc);
                        if (xy[1] < 0) {
                            j = -(10 * (i + 1));
                        }
                        else {
                            j = 10 * (i + 1);
                        }
                        return 'translate(' + (+xy[0] - 25) + ',' + (j) + ')';
                    })
                    .text(function (d) {

                        const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                        if (percent > 1) {
                            return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                        }
                    })
            });

            const statusDim = mdx.dimension(function (d) {
                if (d.status !== "" && d.status != null) {
                    return d.status.toUpperCase();
                }
            });

            const statusGroup = statusDim.group();

            statusChart
                .width(500 - 30)
                .height(300)
                .radius(100)
                .cy(105)
                .dimension(statusDim)
                .group(statusGroup)
                .on('pretransition', function (chart) {
                    chart.selectAll('text.pie-slice')
                        .transition()
                        .duration(chart.transitionDuration())
                        .attr('transform', (d, i) => {
                            var j = 0;
                            var arc = buildArcs(chart);
                            var xy = labelPosition(d, arc);
                            if (xy[1] < 0) {
                                j = -(10 * (i + 1));
                            }
                            else {
                                j = 10 * (i + 1);
                            }
                            return 'translate(' + (+xy[0] - 25) + ',' + (j) + ')';
                        })
                        .text(function (d) {
                            const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                            if (percent > 1) {
                                return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                            }
                            // return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                        })
                })
                .legend(dc.legend().horizontal(true).legendWidth(350).itemHeight(10).itemWidth(150).x(50).y(230).gap(7))
                .colors(d3.scale.ordinal().range(['#D62828', '#0B6B3A', '#1F77B4', '#FF7F24', '#764659', '#9A6634', '#DDDF21', '#9A2C77']));

            const appttypeDim = mdx.dimension(function (d) {
                return d.shippingAggregator;
            });
            const appttypeGroup = appttypeDim.group();

            appttypeChart
                .width(500 - 20)
                .height(300)
                .radius(100)
                .cy(105)
                .dimension(appttypeDim)
                .group(appttypeGroup)
                .legend(dc.legend().horizontal(true).gap(7).x(150).y(230).itemWidth(120).legendWidth(200))
                .colors(d3.scale.ordinal().range(['#e68a00', '#275B89', '#a52a2a', '#217C7B']))
            const getApptTypeName = function (apptType) {
                let name = '';
                switch (apptType) {
                    case 'shiprocket':
                        name = ' SHIPROCKET ';
                        break;
                    case 'zepo':
                        name = ' ZEPO ';
                        break;
                    case 'AMAZON':
                        name = ' AMAZON ';
                        break;
                    case 'FLIPKART':
                        name = ' FLIPKART ';
                        break;
                    default:
                        name = apptType;
                }
                return name;
            };

            appttypeChart.on('pretransition', function (chart) {

                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text(function (d) {
                        return getApptTypeName(d.name)
                    });

                chart.selectAll('text.pie-slice')
                    .transition()
                    .duration(chart.transitionDuration())
                    .attr('transform', (d, i) => {
                        var j = 0;
                        var arc = buildArcs(chart);
                        var xy = labelPosition(d, arc);
                        if (xy[1] < 0) {
                            j = -(10 * (i + 1));
                        }
                        else {
                            j = 10 * (i + 1);
                        }
                        return 'translate(' + (+xy[0] - 25) + ',' + (j) + ')';
                    })
                    .text(function (d) {
                        const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                        if (percent > 1) {
                            return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                        }
                        // return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                    })
            });



            const appttypeDim1 = mdx.dimension(function (d) {
                return d.paymentMode;
            });
            const appttypeGroup1 = appttypeDim1.group();

            appttypeChart1
                .width(500 - 20)
                .height(300)
                .radius(100)
                .cy(105)
                .dimension(appttypeDim1)
                .group(appttypeGroup1)
                .legend(dc.legend().x(160).y(230).itemWidth(100).horizontal(true))
                .colors(d3.scale.ordinal().range(['#E0411D', '#FCB441']));
            const getApptTypeName1 = function (paymentMode) {
                let paymentname = paymentMode;
                switch (paymentMode) {
                    case 'cod':
                        paymentname = ' COD';
                        break;
                    case 'online': {
                        paymentname = ' ONLINE';
                        break;
                    }
                }
                return paymentname;
            };

            appttypeChart1.on('pretransition', function (chart) {

                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text(function (d) {
                        return getApptTypeName1(d.name)
                    });

                chart.selectAll('text.pie-slice')
                    .text(function (d) {
                        const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                        if (percent > 1) {
                            return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                        }
                        //return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%'
                    })
            });


            const destinationDim = mdx.dimension(function (d) {
                if (d.courierName == null) {
                    return 'AMAZON&FLIPKART'
                }
                return d.courierName;
            });

            const destinationGroup = destinationDim.group();
            dcChart.width(990 - 30)
                .height(250)
                .margins({ top: 20, right: 10, bottom: 80, left: 80 })
                .dimension(destinationDim)
                .group(destinationGroup)
                .brushOn(true)
                .elasticY(true)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .renderlet(function (chart) {
                    chart.selectAll('g.x text')
                        .style('text-anchor', 'end')
                        .attr('transform', 'translate(-10,0)rotate(315)')
                })

            dataCount
                .dimension(mdx)
                .group(all)
                .html({
                    some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> shipments',
                    all: 'All shipments selected. Please click on the graph to apply filters.'
                });

            dataTable
                .dimension(scheduleArrivalDateDim)
                .group(function (d) {
                    if (d.courierName == null) {
                        return 'AMAZON&FLIPKART'
                    }
                    return d.courierName;
                })
                .size(2000)
                .columns([
                    {
                        label: 'ORDER ID',
                        format: (d) => { return d.orderId; }
                    },
                    // {
                    //     label:'Pickup Scheduled Date',
                    //     format:(d)=>{return "date"}
                    // },
                    {
                        label: 'TRACKING NUMBER',
                        format: (d) => { return d.trackingNo; }
                    },
                    {
                        label: 'COURIER NAME',
                        format: (d) => {
                            if (d.courierName == null) {
                                return 'AMAZON&FLIPKART'
                            }
                            return d.courierName;
                        }
                    }
                    ,
                    {
                        label: 'PAYMENT MODE',
                        format: (d) => { return d.paymentMode.toUpperCase(); }
                    }
                    ,
                    {
                        label: 'ORDER TOTAL',
                        format: (d) => {
                            if (d.orderTotal == null) {
                                return '0.00';
                            } else {
                                return d.orderTotal + '.00';
                            }
                        }
                    }
                    ,
                    {
                        label: 'STATUS',
                        format: (d) => { return d.status; }
                    },
                    {
                        label: 'SHIPPING COST(In Rs)',
                        format: (d) => {
                            if (d.shippingCost == null) {
                                return '0.00';
                            } else {
                                return d.shippingCost + '.00';
                            }
                        }
                    },
                    {
                        label: 'SHIPPING AGGREGATOR',
                        format: (d) => {
                            if (d.shippingAggregator === 'AMAZON_IN') {
                                return 'AMAZON'
                            }
                            return d.shippingAggregator;
                        }
                    },
                    {
                        label: 'DISPATCH DATE',
                        format: (d) => {
                            data = d.dispatchDate;
                            if (data.length > 10 && data !== null) {
                                const date = new Date(data)
                                const dd: any = date.getDate();
                                const mm: any = date.getMonth() + 1;
                                const yyyy = date.getFullYear();
                                return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                            }
                            return data;
                        }
                    }, {
                        label: 'DELIVERY DATE',
                        format: (d) => {
                            data = d.deliveryDate;
                            if (data.length > 10 && data !== null) {
                                const date = new Date(data)
                                const dd: any = date.getDate();
                                const mm: any = date.getMonth() + 1;
                                const yyyy = date.getFullYear();
                                return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                            }
                            return data;
                        }
                    },
                ])
                .order(d3.ascending)
                .on('renderlet', function (table) {
                    table.selectAll('.dc-table-group').classed('info', true);
                });

            d3.select('#download')
                .on('click', function () {
                    var data = scheduleArrivalDateDim.top(Infinity);

                    var data2 = [];
                    var object = {}
                    for (let i = 0; i < data.length; i++) {
                        object = {};
                        Object.keys(data[i]).forEach(function (key) {
                            var value = data[i][key];
                            key = key.toUpperCase();
                            if (key === "ORDERID") {
                                key = "ORDER ID";
                            }
                            if (key === "TRACKINGNO") {
                                key = "TRACKING NUMBER"
                            }
                            if (key === "COURIERNAME") {
                                key = "COURIER NAME"
                            }
                            if (key === "PAYMENTMODE") {
                                key = "PAYMENT MODE"
                            }
                            if (key === "ORDERTOTAL") {
                                key = "ORDER TOTAL"
                            }
                            if (key === "SHIPPINGAGGREGATOR") {
                                key = "SHIPPING AGGREGATOR"
                            }
                            if (key === "DISPATCHDATE") {
                                key = "DISPATCH DATE"
                            }
                            if (key === "DELIVERYDATE") {
                                key = "DELIVERY DATE"
                            }
                            if (key === "CREATEDDATE") {
                                key = "CREATED DATE"
                            }
                            if (key === "UPDATEDDATE") {
                                key = "UPDATED DATE"
                            }
                            if (key === "DELIVERYSTATUS") {
                                key = "DELIVERY STATUS"
                            }
                            if (key === "SHIPPINGCOST") {
                                key = "SHIPPING COST"
                            }
                            if (key === "REQUESTDATE") {
                                key = "REQUEST DATE"
                            }
                            if (key === "ORDERDATE") {
                                key = "ORDER DATE"
                            }
                            if (key === "PRODUCTNAME") {
                                key = "PRODUCT NAME"
                            }
                            if (key === "SALEORDERITEMCODE") {
                                key = "SALE ORDER ITEM CODE"
                            }
                            object[key] = value;
                        });
                        data2.push(object);
                    }
                    function formatedDate() {
                        const date = new Date(),
                            year = date.getFullYear(),
                            month = (date.getMonth() + 1).toString(),
                            formatedMonth = (month.length === 1) ? ("0" + month) : month,
                            day = date.getDate().toString(),
                            formatedDay = (day.length === 1) ? ("0" + day) : day,
                            hour = date.getHours().toString(),
                            formatedHour = (hour.length === 1) ? ("0" + hour) : hour,
                            minute = date.getMinutes().toString(),
                            formatedMinute = (minute.length === 1) ? ("0" + minute) : minute,
                            second = date.getSeconds().toString(),
                            formatedSecond = (second.length === 1) ? ("0" + second) : second;
                        return `${formatedDay}${formatedMonth}${year}_${formatedHour}${formatedMinute}${formatedSecond}`;
                    }
                    var date = new Date().toLocaleDateString()
                    var time = new Date().toLocaleTimeString()
                    var title = "Shipments_Report_" + formatedDate() + ".csv";
                    var blob = new Blob([d3.csv.format(data2)], { type: "text/csv;charset=utf-8" });
                    FileSaver.saveAs(blob, title);
                })

            dc.renderAll();


            // Re-rendering all charts on reset    #status-chart .reset
            $('.Shipment_Status_Chart').on('click', function () {
                statusChart.filterAll();
                dc.redrawAll();
            });
            $('.Daily_Status_Chart').on('click', function () {
                loadsChart.filterAll();
                dc.redrawAll();
            });
            $('.Shipping_Aggregator_Chart').on('click', function () {
                appttypeChart.filterAll();
                dc.redrawAll();
            });
            $('.payment_mode_chart').on('click', function () {
                appttypeChart1.filterAll();
                dc.redrawAll();
            });

            $('.Couriers_list').on('click', function () {
                dcChart.filterAll();
                dc.redrawAll();
            });

            $('.shipments_delivery_status_chart').on('click', function () {
                delayCharts.filterAll();
                dc.redrawAll();
            });


        }

        setTimeout(() => {
            this.loading = false
        }, 1000);
    }
    getAnalyticsData() {
        this.shipmentService.getAllShipmentDetails().subscribe((response: any) => {
            this.renderDashBoardAnalyticsCharts(response.data)
        }, error => {
            this.serviceErrorResponse = error.exception;
            this.serviceErrorData = true;
        });
    }

    resetGraphs() {
        this.QuerySubmit()
    }

    getDefaultDates() {
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth(), 'day': this.d.getDate() } }
        this.QuerySubmit();
    }

}
