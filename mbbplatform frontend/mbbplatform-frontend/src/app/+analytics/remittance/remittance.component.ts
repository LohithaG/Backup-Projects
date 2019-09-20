import { ModalDirective } from "ngx-bootstrap";
declare var $: any;
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
declare var L, d3, dc, crossfilter;
import { RemittanceService } from './remittance.service';

@Component({
    selector: 'shipzepo-remittance',
    templateUrl: './remittance.component.html',
})

export class RemittanceComponent {

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
    constructor(public remittanceService: RemittanceService) {
        this.activePageTitle = 'Analytics';
    }
    ngOnInit() {
        $('#noData').hide();
        this.getDefaultDates()
    }
    getDefaultDates() {
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = {
            'date': {
                'year': this.d.getFullYear(), 'month': this.d.getMonth(),
                'day': this.d.getDate() == 29 ? 28 : this.d.getDate() == 30 ? 28 : this.d.getDate() == 31 ? 28 : this.d.getDate()
            }
        }
        this.QuerySubmit();
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
            } else {
                this.errorMessage = '';
                this.remittanceService.getRemittanceDetailsByDate(this.QueryDataStartDate, this.QueryDataEndDate).subscribe((response) => {
                    this.renderDashBoardAnalyticsCharts(response.data)
                });
            }
            this.isSearchQuerySubmitted = false;
        }
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
            const statusChart = dc.pieChart('#status-chart_rem');
            const shpngAggrtrChart = dc.pieChart('#shipping_Aggrtr_chart');
            const paymentRefChart = dc.barChart('#payment_ref_chart');
            const dataCount = dc.dataCount('#dc-data-count_rem');
            const dataTable = dc.dataTable('.dc-data-table_rem');
            const mdx = crossfilter(data);
            const all = mdx.groupAll();

            const scheduleArrivalDateDim = mdx.dimension(function (d) {
                return '';
            });


            const statusDim = mdx.dimension(function (d) {
                if (d.remittanceStatus === '') {
                    d.remittanceStatus = 'EMPTY STATUS'
                }
                return d.remittanceStatus.toUpperCase();
            });

            const statusGroup = statusDim.group();

            statusChart
                .width(500 - 30)
                .height(200)
                .radius(100)
                .dimension(statusDim)
                .group(statusGroup)
                .on('pretransition', function (chart) {
                    chart.selectAll('text.pie-slice')
                        .text(function (d) {
                            return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                        })
                })
                .legend(dc.legend())
                .colors(d3.scale.ordinal().range(['#01B3A5', '#354447']));
            const appttypeDim = mdx.dimension(function (d) {
                return d.shippingAggregator;
            });
            const appttypeGroup = appttypeDim.group();


            shpngAggrtrChart
                .width(500 - 20)
                .height(200)
                .radius(100)
                .dimension(appttypeDim)
                .group(appttypeGroup)
                .legend(dc.legend())
                .colors(d3.scale.ordinal().range(['#275B89', '#C7514A']));
            const getApptTypeName = function (apptType) {
                let name = '';
                switch (apptType) {
                    case 'shiprocket':
                        name = ' SHIPROCKET ';
                        break;
                    case 'zepo':
                        name = ' ZEPO ';
                        break;
                    default:
                        name = apptType;
                }
                return name;
            };

            shpngAggrtrChart.on('pretransition', function (chart) {

                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text(function (d) {
                        return getApptTypeName(d.name)
                    });

                chart.selectAll('text.pie-slice').text(function (d) {
                    return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';

                })
            });


            const destinationDim = mdx.dimension(function (d) {
                return d.paymentReferennceNumber;
            });

            const destinationGroup = destinationDim.group();
            paymentRefChart.width(1100)
                .height(250)
                .margins({ top: 20, right: 10, bottom: 120, left: 20 })
                .dimension(destinationDim)
                .group(destinationGroup)
                .brushOn(true)
                .elasticY(true)
                .x(d3.scale.ordinal())
                .xUnits(dc.units.ordinal)
                .renderlet(function (chart) {
                    chart.selectAll('g.x text')
                        .style('text-anchor', 'end')
                        .attr('transform', 'translate(-10,0)rotate(270)')
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
                    if (d.paymentReferennceNumber !== null || d.paymentReferennceNumber !== undefined) {
                        return d.paymentReferennceNumber;
                    }

                })
                .size(2000)
                .columns([
                    {
                        label: 'ORDER ID',
                        format: (d) => {
                            return d.orderId;
                        }
                    },
                    {
                        label: 'TRACKING NUMBER',
                        format: (d) => { return d.trackingNo; }
                    },
                    {
                        label: 'CRFID/LEDGER',
                        format: (d) => {
                            return d.cRFIDORLedger;
                        }
                    }
                    ,
                    // {
                    //     label: 'PAYMENT REFERENCE NUMBER',
                    //     format: function (d) { return d.paymentReferennceNumber; }
                    // },
                    {
                        label: 'AMOUNT',
                        format: (d) => { return d.amount; }
                    }
                    ,
                    {
                        label: 'REMITTANCE STATUS',
                        format: (d) => { return d.remittanceStatus; }
                    }
                    ,
                    {
                        label: 'REMITTANCE DATE',
                        format: (d) => {
                            d.remittedDate = d.remittedDate.split("-").reverse().join("-");
                            return d.remittedDate;
                        }
                    },
                    {
                        label: 'SHIPPING AGGREGATOR',
                        format: (d) => { return d.shippingAggregator; }
                    }
                ])
                // .sortBy(function (d) {
                //     return d.amount;
                // })
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
                            if (key === "CRFIDORLEDGER") {
                                key = "CRFID/LEDGER"
                            }
                            if (key === "PAYMENTREFERENNCENUMBER") {
                                key = "PAYMENT REFERENCE NUMBER"
                            }
                            if (key === "REMITTANCESTATUS") {
                                key = "REMITTANCE STATUS"
                            }
                            if (key === "REMITTEDDATE") {
                                key = "REMITTED DATE"
                            }
                            if (key === "CREATEDDATE") {
                                key = "CREATED DATE"
                            }
                            if (key === "UPDATEDDATE") {
                                key = "UPDATED DATE"
                            }
                            if (key === "SHIPPINGAGGREGATOR") {
                                key = "SHIPPING AGGREGATOR"
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
                    };
                    var title = "Remittance_Report_" + formatedDate() + ".csv";
                    var blob = new Blob([d3.csv.format(data2)], { type: "text/csv;charset=utf-8" });
                    FileSaver.saveAs(blob, title)
                })

            dc.renderAll();


            // Re-rendering all charts on reset
            $('.status-chart_rem').on('click', function () {
                statusChart.filterAll();
                dc.redrawAll();
            });
            $('.shipping_Aggrtr_chart').on('click', function () {
                shpngAggrtrChart.filterAll();
                dc.redrawAll();
            });

            $('#dc-data-count_rem .reset').on('click', function () {
                dataCount.filterAll();
                dc.redrawAll();
            });
            $('#payment_ref_chart .reset').on('click', function () {
                paymentRefChart.filterAll();
                dc.redrawAll();
            });
        }
        setTimeout(() => {
            this.loading = false
        }, 1000);

    }


    getRemittanceAnalytics() {
        this.remittanceService.getAllRemittanceDetails().toPromise().then((response: any) => {
            this.renderDashBoardAnalyticsCharts(response)
        }, error => {
            this.serviceErrorResponse = error.exception;
            this.serviceErrorData = true;
        });
    }

    resetGraphs() {
        this.loading = true;
        this.QuerySubmit()
    }

}
