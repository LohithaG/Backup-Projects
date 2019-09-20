declare var $: any;
declare var L, d3, dc, crossfilter;

import { Component } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { endponitConfig } from '../../environments/endpoint';
import { FastMovingService } from './fast-moving.service';

@Component({
    selector: 'fastmoving-details',
    templateUrl: './fast-moving.component.html',
})

export class FastMovingComponent {
    loading = false;
    public QueryData: any = { startDate: '', endDate: '' };

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    constructor(private readonly http: HttpClient, public router: Router, public fastmovingService: FastMovingService) {
    }
    locationDetails = [{ id: 0, location_name: 'All' }, { id: 1, location_name: 'HYDERABAD' }, { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]
    channelDetails = [{ id: 0, channel_name: 'All' }, { id: 1, channel_name: "MBB-Woocommerce" }, { id: 2, channel_name: "Amazon" }, { id: 3, channel_name: 'AMAZON Flex' }, { id: 4, channel_name: 'Flipkart' }
    , { id: 5, channel_name: 'Snapdeal' }, { id: 6, channel_name: 'Shopclues' }, { id: 7, channel_name: 'Custom' }]

    private readonly model: Object = { date: { year: 2019, month: 10, day: 9 } };
    private readonly startDate: any;
    private readonly endDate: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public isSearchQuerySubmitted;
    errorMessage: any = '';
    serviceErrorResponse: any = '';
    serviceErrorData: any = '';

    d = new Date()
    private readonly myDatePickerOptions: IMyOptions = {
        openSelectorOnInputClick: true,
        inline: false,
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
    dateFrmt = 'YYYY-MM-DD';
    ngOnInit() {
        this.QueryData.sourceId = 0;
        this.QueryData.destinationId = 0
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth(), 'day': this.d.getDate() } }

        const stYear = this.QueryData.startDate.date.year;
        const stMonth = this.QueryData.startDate.date.month;
        const stDay = this.QueryData.startDate.date.day;
        const startDate = `${stYear}-${stMonth}-${stDay}`;
        this.QueryDataStartDate = moment(startDate, this.dateFrmt).format(this.dateFrmt);

        const endYear = this.QueryData.endDate.date.year;
        const endMonth = this.QueryData.endDate.date.month;
        const endDay = this.QueryData.endDate.date.day;
        const endDate = `${endYear}-${endMonth}-${endDay}`;
        this.QueryDataEndDate = moment(endDate, this.dateFrmt).format(this.dateFrmt);

    }
    public QuerySubmit(): void {
        this.loading = false;
        if (this.QueryData.startDate !== '') {
            const stYear = this.QueryData.startDate.date.year;
            const stMonth = this.QueryData.startDate.date.month;
            const stDay = this.QueryData.startDate.date.day;
            const startDate = `${stYear}-${stMonth}-${stDay}`;
            this.QueryDataStartDate = moment(startDate, this.dateFrmt).format(this.dateFrmt);
        } else {
            this.QueryDataStartDate = ''
        }

        if (this.QueryData.endDate !== '') {
            const endYear = this.QueryData.endDate.date.year;
            const endMonth = this.QueryData.endDate.date.month;
            const endDay = this.QueryData.endDate.date.day;
            const endDate = `${endYear}-${endMonth}-${endDay}`;
            this.QueryDataEndDate = moment(endDate, this.dateFrmt).format(this.dateFrmt);
        } else {
            this.QueryDataEndDate = '';
        }

        if (this.QueryDataStartDate === '' && this.QueryDataEndDate === '') {
            this.isSearchQuerySubmitted = true;
        } else {
            try {
                if (new Date(this.QueryDataStartDate) > new Date(this.QueryDataEndDate)) {
                    this.errorMessage = 'End date should be greater than start date';
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 3000)
                } else {
                    this.errorMessage = '';
                    var table = $('#PACKAGEDataTable table').DataTable();
                    table.search("").draw();
                    table.ajax.reload();
                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            }
            this.isSearchQuerySubmitted = false;
            this.loadingView()
        }
    };
    private fastMovingSKUDetails(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    textCenter = "text-center";
    dataTableId = '#fastMovingDataTable table';
    fastMovingDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.loading = true;
            this.http.get(`${endponitConfig.FAST_MOVING_SKU}getFastMovingSkus/${this.QueryDataStartDate}/${this.QueryDataEndDate}/${this.locationId}/${this.channelId}`,
                { headers: this.headers })
                .map(this.fastMovingSKUDetails)
                .catch((error: any) => {
                    return Observable.throwError(error);
                })
                .subscribe((jsondata) => {
                    this.loading = false;
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        "columnDefs": [
            {
                targets: [0],
                render: (data, type, row, meta) => {
                    if (type === 'sort') {
                        const char = data.slice(0, 1);
                        if (char === '0') {
                            return `"${data}"`
                        }
                        return data
                    }
                    return data;
                },
            },


        ],
        columns: [
            { data: 'skuCode', responsivePriority: 1 },
            {
                data: 'productName',
                responsivePriority: 2
            },
            {
                data: 'count',
                responsivePriority: 2
            },

        ], 
        "aaSorting": [[2, 'desc']],
        buttons: [{
            text: '<i class="fa fa-refresh"></i> Refresh',
            className: 'moreColumns',
            action: (e, dt, node, config) => {
                if ($.fn.DataTable.isDataTable(this.dataTableId)) {
                    this.loadingView()
                }
            }
        },
        {
            extend: 'csv',
            text: '<i class="fa fa-file-o"> CSV Download</i>',
            exportOptions: {
                orthogonal: 'sort'
            },
            filename: () => { return this.getExportFileName(); }
        },
        ],

    };
    getInventoryDetails() {
        this.loadingView();
    }
    channelId:any=0;
    locationId: any = 0;
    getExportFileName() {
        if (this.locationId === 0) {
            return 'Inventory_Report_All_' + this.formatedDate()
        } else if (this.locationId === '1') {
            return 'Inventory_Report_Hyderabad_' + this.formatedDate()
        } else if (this.locationId === '2') {
            return 'Inventory_Report_Bangalore_' + this.formatedDate()
        } else if (this.locationId === '3') {
            return 'Inventory_Report_AmazonFlex_' + this.formatedDate()
        } else {
            return 'Inventory_Report_' + this.formatedDate()
        }
    }
    loadingView() {
        const table = $(this.dataTableId).DataTable();
        this.loading = true;
        table.ajax.reload();
    }
    formatedDate() {
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
}
