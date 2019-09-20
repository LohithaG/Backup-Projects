import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';

import { endponitConfig } from '../../../environments/endpoint';
import { RemittanceTypesService } from '../remittancetypes.service';

declare var $;
@Component({
    selector: 'amazon-flipkartremittance',
    templateUrl: './amazon-flipkart-cod.component.html',
})
export class AmazonAndFlipkartRemittanceComponent {
    loading = false
    constructor(public remittanceService: RemittanceTypesService, private readonly http: HttpClient, public router: Router) {
    }
    channelTypes = [{ id: 1, channel_name: 'all', name: 'ALL' }, { id: 2, channel_name: 'Flipkart', name: 'FLIPKART' }, { id: 3, channel_name: 'Amazon', name: 'AMAZON' }]
    channelType: any = 'Flipkart';
    public QueryData: any = { startDate: '', endDate: '' };
    public isSearchQuerySubmitted: boolean;
    private readonly model: Object = { date: { year: 2019, month: 10, day: 9 } };
    private readonly startDate: any;
    private readonly endDate: any;
    public dummyPreview: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public errorMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;
    private readonly selDate: any;
    d = new Date();
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
    dateFormat = 'YYYY-MM-DD';
    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.QueryData.startDate = '2019-01-01';
        this.QueryData.endDate = '2019-02-05';
        const now = new Date();
        now.setDate(now.getDate() - 31)

        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = {
            'date': {
                'year': this.d.getFullYear()-1, 'month': this.d.getMonth(),
                'day': this.d.getDate() === 29 ? 28 : this.d.getDate() === 30 ? 28 : this.d.getDate() === 31 ? 28 : this.d.getDate()
            }
        }

        const stYear = this.QueryData.startDate.date.year;
        const stMonth = this.QueryData.startDate.date.month;
        const stDay = this.QueryData.startDate.date.day;
        const startDate = `${stYear}-${stMonth}-${stDay}`;
        this.QueryDataStartDate = moment(startDate, this.dateFormat).format(this.dateFormat);

        const endYear = this.QueryData.endDate.date.year;
        const endMonth = this.QueryData.endDate.date.month;
        const endDay = this.QueryData.endDate.date.day;
        const endDate = `${endYear}-${endMonth}-${endDay}`;
        this.QueryDataEndDate = moment(endDate, this.dateFormat).format(this.dateFormat);

    }
    private readonly headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));

    private shipmentTypeDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    remittanceDetails = {
        dom: 'Bfrtip', "ordering": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_SHIPMENTS_COD+`flipkartamazon/getCodDetails/${this.QueryDataStartDate}/${this.QueryDataEndDate}/${this.channelType}`, 
                { headers: this.headers }).map(this.shipmentTypeDetailsData)
                .subscribe((jsondata: any) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        columns: [
            {
                data: 'orderId', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            { data: 'sku', responsivePriority: 2 },
            { data: 'settlementId', responsivePriority: 3 },
            {
                data: 'settledAmount', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    if (data % 1 === 0) {
                        return data + ".00"
                    }
                    return data
                }
            },
            { data: 'orderItemId', responsivePriority: 5 },
            {
                data: 'shippingCharges', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    if (data % 1 === 0) {
                        return data + ".00"
                    }
                    return data
                }
            },
            {
                data: 'channel', responsivePriority: 7,
                "render": (data, type, row, meta) => {
                    if (data === 'Flipkart') {
                        return `<span style="color:deepskyblue">${data}</span>`.toUpperCase()
                    } else {
                        return `<span style="color:coral" >${data}</span>`.toUpperCase()
                    }
                }
            },
            {
                data: 'productName', responsivePriority: 8,
            },
            {
                data: 'createdDate', responsivePriority: 9,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data.length > 10 && data !== null) {
                        const date = new Date(data)
                        const dd: any = date.getDate();
                        const mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                    }
                    return data
                }
            },
            {
                data: 'updatedDate', responsivePriority: 10,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data.length > 10 && data !== null) {
                        const date = new Date(data)
                        const dd: any = date.getDate();
                        const mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                    }
                    return data
                }
            },
            {
                data: 'neftId', responsivePriority: 11,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            {
                data: 'settelementDate', responsivePriority: 12,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data.length > 10 && data !== null) {
                        const date = new Date(data)
                        const dd: any = date.getDate();
                        const mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                    }
                    return data
                }
            },
        ],
        "columnDefs": [
            {
                "targets": [1],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [7],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [8],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [9],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [10],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [11],
                "visible": false,
                "searchable": false
            },
        ],
        "aaSorting": [[0, 'desc']],
        buttons: [
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable('#DataTable table')) {
                        this.loadingView()
                    }
                }
            },
            {
                extend: 'csv', text: '<i class="fa fa-file-o"> CSV Download</i>', className: 'moreColumns',
                exportOptions: {
                    orthogonal: 'export'
                },
                filename: () => { return this.getExportFileName(); }
            },
        ]
    };

    public QuerySubmit(): void {
        if (this.QueryData.startDate !== '') {
            const stYear = this.QueryData.startDate.date.year;
            const stMonth = this.QueryData.startDate.date.month;
            const stDay = this.QueryData.startDate.date.day;
            const startDate = `${stYear}-${stMonth}-${stDay}`;

            this.QueryDataStartDate = moment(startDate, this.dateFormat).format(this.dateFormat);
        } else {
            this.QueryDataStartDate = ''
        }

        if (this.QueryData.endDate !== '') {
            const endYear = this.QueryData.endDate.date.year;
            const endMonth = this.QueryData.endDate.date.month;
            const endDay = this.QueryData.endDate.date.day;
            const endDate = `${endYear}-${endMonth}-${endDay}`;
            this.QueryDataEndDate = moment(endDate, this.dateFormat).format(this.dateFormat);
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
                        this.errorMessage = ''
                    }, 3000);
                } else {
                    this.errorMessage = '';
                    this.loadingView()
                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;

                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }
    };
    getExportFileName() {
        if (this.channelType === 'Flipkart') {
            return 'Remittance_Report_FLIPKART_' + this.formatedDate()
        }
        if (this.channelType === 'Amazon') {
            return 'Remittance_Report_AMAZON_' + this.formatedDate()
        }
        else {
            return 'Amazon_Flipkart_Remittance_Report_' + this.formatedDate()
        }
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
    loadingView() {
        const table = $('#DataTable table').DataTable();
        table.search("").draw();
        this.loading = true;
        table.ajax.reload();
        setTimeout(() => {
            this.loading = false
        }, 1000);
    }
}
