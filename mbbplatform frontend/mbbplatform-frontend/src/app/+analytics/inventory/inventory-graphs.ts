import { ModalDirective } from "ngx-bootstrap";
declare var $;
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
declare var L, d3, dc, crossfilter, d3pie: any;
import { AnalyticsGraphService } from './inventory-graphs.service';

@Component({
    selector: 'shipzepo-remittance',
    templateUrl: './inventory.html',
})

export class InventoryGraphsComponent {

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
        //dateFormat: 'yyyy-mm-dd',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };

    constructor(
        public analyticsGraphService: AnalyticsGraphService
    ) {
        this.activePageTitle = 'Analytics';
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
    }
    d = new Date();
    ngOnInit() {
        $('#noData').hide();
        this.getDefaultDates()
    }
    getDefaultDates() {
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth(), 'day': this.d.getDate() } }
        this.QuerySubmit();
    }


    QuerySubmit() {
        this.analyticsGraphService.getAllAnalyticsDetailsWithoutDates().toPromise().then((response: any) => {
            this.renderDashBoardAnalyticsCharts(response.data)
        }, error => {
            this.serviceErrorResponse = error.exception;
            this.serviceErrorData = true;
        });
    }




    public renderDashBoardAnalyticsCharts(data: any) {
        function buildArcs(chart) {
            return d3.svg.arc().outerRadius(chart.radius()).innerRadius(chart.innerRadius());
        }
        function labelPosition(d, arc) {
            const centroid = arc.centroid(d);
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
            const inventoryStatus = dc.pieChart('#inventory_status_chart');
            const inventoryLocation = dc.pieChart('#inventory_location_chart');
            const InventoryDataCount = dc.dataCount('#inventory_data_count_chart');
            const dataTable = dc.dataTable('.dc-data-table_rem');


            const mdx = crossfilter(data);
            const all = mdx.groupAll();

            const scheduleArrivalDateDim = mdx.dimension(function (d) {
                return '';
            });


            const statusDim = mdx.dimension(function (d) {

                if (d.status === 'Available') {
                    d.status = 'AVAILABLE'
                    return d.status;
                } else if (d.status === 'blockedInventory') {
                    d.status = 'BAD CONDITION'
                    return d.status;
                } else if (d.status === 'Pending Quality Check') {
                    d.status = 'PENDING QC'
                    return d.status;
                }
                else if (d.status === 'Unavailable') {
                    d.status = 'UNAVAILABLE'
                    return d.status;
                }
                return d.status

            });

            const statusGroup = statusDim.group();

            inventoryStatus
                .width(500 - 30)
                .height(250)
                .radius(100)
                .dimension(statusDim)
                .group(statusGroup)
                .cy(105)
                .on('renderlet', function (chart) {
                    chart.selectAll('text.pie-slice')
                        .transition()
                        .duration(chart.transitionDuration())
                        .attr('transform', (d, i) => {
                            let j = 0;
                            let arc = buildArcs(chart);
                            let xy = labelPosition(d, arc);
                            if (xy[1] < 0) {
                                j = -(10 * (i + 1));
                            }
                            else {
                                j = 10 * (i + 1);
                            }
                            return `translate(${(+xy[0] - 5)},${(j)})`;
                        })
                        .text(function (d) {
                            const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                            if (percent > 1) {
                                return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                            } else {
                                return '';
                            }
                            //   return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                        })
                })
                .legend(dc.legend())
                // .legend(dc.legend().y(230).x(100).horizontal(true).itemWidth(100))
                .colors(d3.scale.ordinal().range(['#20B070', '#0078A6', '#FCB441', '#F9766D', '#5E1833']));
            const appttypeDim = mdx.dimension(function (d) {
                return d.location;
            });
            const appttypeGroup = appttypeDim.group();

            inventoryLocation
                .width(500 - 20)
                .height(250)
                .radius(100)
                .cy(105)
                .dimension(appttypeDim)
                .group(appttypeGroup)
                .title((hoverData) => {
                    return hoverData.key == 'Amazon_Flex' ? 'AMAZON' + ':' + hoverData.value : hoverData.key + ':' + hoverData.value
                })
                // .legend(dc.legend().y(230).x(110).horizontal(true).itemWidth(100))
                .legend(dc.legend())
                .colors(d3.scale.ordinal().range(['#F27521', '#A53D26', '#5A9AD5']))
            //  .ordinalColors(['red','green','blue'])

            const getApptTypeName = function (apptType) {
                let name = '';
                switch (apptType) {
                    case 'MBB_Hyderabad':
                        name = 'HYDERABAD ';
                        break;
                    case 'MBB_Bangalore':
                        name = ' BANGALORE';
                        break;
                    case 'Amazon_Flex':
                        name = 'AMAZON';
                        break
                    default:
                        name = apptType;
                }
                return name;
            };

            inventoryLocation.on('renderlet', (chart) => {
                chart.selectAll('.dc-legend-item text')
                    .text(' ')
                    .append('tspan')
                    .text((d) => {
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
                        return 'translate(' + (+xy[0] - 5) + ',' + (j) + ')';
                    })
                    .text((d) => {
                        const percent = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
                        if (percent > 1) {
                            return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                        } else {
                            return '';
                        }
                        // return dc.utils.printSingleValue((d.endAngle - d.startAngle) / (2 * Math.PI) * 100) + '%';
                    })

            });

            InventoryDataCount
                .dimension(mdx)
                .group(all)
                .html({
                    some: '<strong>%filter-count</strong> selected out of <strong>%total-count</strong> inventory items',
                    all: 'All inventory items selected. Please click on the graph to apply filters.'
                });

            dataTable
                .dimension(scheduleArrivalDateDim)
                .group(function (d) {
                    d3.format('02d');
                    return d.status;
                })
                .size(2000)
                .columns([
                    {
                        label: 'SKU CODE',
                        format: (d) => {
                            return d.skuCode;
                        }
                    },
                    {
                        label: 'PRODUCT NAME',
                        format: (d) => { return d.productName; }
                    },
                    {
                        label: 'COUNT',
                        format: (d) => {
                            if (d.count == null) {
                                d.count = 0;
                            }
                            return d.count;
                        }
                    },
                    {
                        label: 'FACILITY',
                        format: (d) => {
                            if (d.location === 'MBB_Hyderabad') {
                                d.location = 'HYDERABAD';
                            } else if (d.location === 'MBB_Bangalore') {
                                d.location = 'BANGALORE';
                            } else if (d.location === 'Amazon_Flex') {
                                d.location = 'AMAZON';
                            }
                            return d.location;
                        }
                    }
                ])
                .sortBy(function (d) {
                    return d.status;
                })
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
                            if (key === "SKUCODE") {
                                key = "SKU CODE";
                            }
                            if (key === "LOCATION") {
                                key = "FACILITY"
                            }
                            if (key === "PRODUCTNAME") {
                                key = "PRODUCT NAME"
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
                    var title = "Inventory_Report_" + formatedDate() + ".csv";
                    var blob = new Blob([d3.csv.format(data2)], { type: "text/csv;charset=utf-8" })
                    FileSaver.saveAs(blob, title);
                });
            dc.renderAll();
            // Re-rendering all charts on reset
            $('.inventory_status_chart').on('click', function () {
                inventoryStatus.filterAll();
                dc.redrawAll();
            });
            $('.inventory_location_chart').on('click', function () {
                inventoryLocation.filterAll();
                dc.redrawAll();
            });


        }
    }

    resetGraphs() {
        this.QuerySubmit()
    }

}



