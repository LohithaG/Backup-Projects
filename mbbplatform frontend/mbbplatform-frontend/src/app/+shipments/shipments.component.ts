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

import { endponitConfig } from '../../environments/endpoint';
import { ShipmentsService } from './shipments.service';

declare var $;
@Component({
    selector: 'app-shipments',
    templateUrl: './shipments.component.html',
    styles: [`  `]
})
export class ShipmentsComponent {
    loading = false;
    codPaybleDetails;
    getReportUrl;
    awbsDetails: any;
    details;
    loadDate = 1539549002;
    @ViewChild('lgModal') public lgModal: ModalDirective;
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
    statusType: any = 'IN TRANSIT';
    paymentMode:any='all';
    shipmentTypes = [{ id: 1, shipment_name: 'all', name: 'ALL' }, { id: 2, shipment_name: 'ZEPO', name: 'ZEPO' },
    { id: 3, shipment_name: 'SHIPROCKET', name: 'SHIPROCKET' }, { id: 4, shipment_name: 'AMAZON', name: 'AMAZON' },
    { id: 5, shipment_name: 'FLIPKART', name: 'FLIPKART' }]
    statusTypes = [{ id: 1, status_name: 'all', name: 'ALL' }, { id: 2, status_name: 'DELIVERED', name: 'DELIVERED' },
    { id: 3, status_name: this.statusType, name: this.statusType }, { id: 4, status_name: 'PICKUP SCHEDULED', name: 'PICKUP SCHEDULED' },
    { id: 5, status_name: 'RETURNED', name: 'RETURNED' }, { id: 6, status_name: 'DISPATCHED', name: 'DISPATCHED' },
    { id: 7, status_name: 'CANCELLED', name: 'CANCELLED' }, { id: 8, status_name: 'Exception', name: 'EXCEPTION' }]
    paymentModes = [{ id: 1, payment_name: 'all', name: 'ALL' }, { id: 2, payment_name: 'COD', name: 'COD' },
    { id: 3, payment_name: 'ONLINE', name: 'ONLINE' }]
  
    constructor(private readonly shipmentsService: ShipmentsService, private readonly http: HttpClient, public router: Router) {
    }
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
                'year': this.d.getFullYear(), 'month': this.d.getMonth(),
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
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    private shipmentsData(res) {
        const body = res;
        if (body) {
            return body
        } else {
            return {}
        }
    }
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    shipments = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_SHIPMENTS_COD
                + `zepoSRShipments/getShipmentDetails?startDate=${this.QueryDataStartDate}&endDate=${this.QueryDataEndDate}&shippingAggregator=${this.shipmentType}&status=${this.statusType}&paymentMode=${this.paymentMode}`,
                { headers: this.headers }).map(this.shipmentsData)
                .subscribe((jsondata: any) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })

                })
        },

        "columnDefs": [{ width: 170, targets: 0 }, { width: 170, targets: 1 }, { width: 310, targets: 2 },
        { width: 100, targets: 3 }, { width: 300, targets: 4 }, { width: 90, targets: 5 }, { width: 90, targets: 6 },
        { width: 100, targets: 7 }, { width: 240, targets: 8 }, { width: 130, targets: 9 }, { width: 130, targets: 10 }, { width: 90, targets: 12 }
            , {
            "targets": [9],
            "visible": false,
            "searchable": true
        },
        {
            "targets": [11],
            "visible": false,
            "searchable": true
        },
        {
            "targets": [12],
            "visible": false,
            "searchable": true
        },
        {
            "targets": [10],
            "visible": false,
            "searchable": true
        },
        {
            "targets": [0],
            render: (data, type, row, meta) => {
                if (type === 'export') {
                    return "\u200C" + data;
                }
                return data;
            },

        },
        {
            "targets": [9],
            render: (data, type, row, meta) => {
                if (type === 'export') {
                    return "\u200C" + data;
                }
                return data;
            },

        },
        {
            "targets": [10],
            render: (data, type, row, meta) => {
                if (type === 'export') {
                    return "\u200C" + data;
                }
                return data;
            },

        }
        ],
        columns: [
            {
                data: 'createdDate', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data === null) {
                        return '-'
                    }
                    data = data.toString().split("-").reverse().join("-");
                    if (type === 'display' || type === 'filter') {
                        return data;
                    }
                    return data.toString().split("-").reverse().join("-");

                }
            },
            {
                data: 'orderDate', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data.toString().split("-").reverse().join("-");

                },
            },
            {
                data: 'orderId', responsivePriority: 3,
                "render": (data, type, row, meta) => {
                    if (data == null) {

                        return "-";
                    }
                    if (data.split('').pop() === '-' && data !== null) {
                        const str = data.split("");
                        str.pop();
                        return str.join("");
                    }
                    return data;
                }
            },
            {
                data: 'trackingNo', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data === 'NA') {
                        return "<center>-</center>"
                    }
                    return `<a type='button' data-toggle="modal" style='cursor:pointer;'   class='orderId' >${data}</a>`;
                }
            },
            {
                data: 'courierName', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    return data
                }
            },
            {
                data: 'paymentMode', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    return data.toUpperCase()
                }
            },
            {
                data: 'orderTotal', responsivePriority: 7,
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
                data: 'shippingAggregator', responsivePriority: 8,
                "render": (data, type, row, meta) => {
                    if (data === 'ZEPO') {
                        return `<span style="color:deepskyblue" > ${data.toUpperCase()} </span>`
                    }
                    if (data === 'SHIPROCKET') {
                        return `<span style="color:coral" > ${data.toUpperCase()} </span>`
                    }
                    if (data === 'AMAZON') {
                        return `<span class="text-info" >${data.toUpperCase()} </span>`
                    }
                    if (data === 'FLIPKART') {
                        return `<span class="text-danger"> ${data.toUpperCase()} </span>`
                    }
                    else {
                        return `<span style="color:coral" > ${data.toUpperCase()} </span>`
                    }
                }
            },
            {
                data: 'status', responsivePriority: 9,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    return data.toUpperCase()
                }
            },
            {
                data: 'dispatchDate', responsivePriority: 10,
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
                data: 'deliveryDate', responsivePriority: 11,
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
                data: 'shippingCost', responsivePriority: 12,
                "render": (data, type, row, meta) => {
                    if (data === null) {
                        return '0.00'
                    }
                    return data + ".00"
                }
            },
            {
                data: 'productName', responsivePriority: 13,
                "render": (data, type, row, meta) => {
                    if (data === null) {
                        return '-'
                    }
                    return data
                }
            },

        ],
        "aaSorting": [[0, "desc"]],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable('#DataTable table')) {
                        this.loadingView()
                    }
                }
            },

            { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
            {
                extend: 'csv', className: 'moreColumns', title: "Shipment " + new Date().toLocaleDateString(), text: '<i class="fa fa-file-o"> CSV Download</i>',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    orthogonal: 'export'
                },
                filename: () => { return this.getExportFileName(); }
            },
        ],
        rowCallback: (row: Node, data: any) => {
            $('a.orderId', row).bind('click', () => {
                this.getTrackDetails(data)
            });
        }
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
    getExportFileName() {
        if (this.shipmentType === 'AMAZON') {
            return 'Shipments_Report_AMAZON_' + this.formatedDate()
        }
        if (this.shipmentType === 'shiprocket') {
            return 'Shipments_Report_SHIPROCKET_' + this.formatedDate()
        }
        if (this.shipmentType === 'zepo') {
            return 'Shipments_Report_ZEPO_' + this.formatedDate()
        }
        if (this.shipmentType === 'FLIPKART') {
            return 'Shipments_Report_FLIPKART_' + this.formatedDate()
        }
        else {
            return 'Shipments_Report_' + this.formatedDate()
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

    shipmentType: any = 'all';
    getShipmentWise() {
    }

    getStatusWise() {
    }
    trNo; trackingDetails; table;
    getTrackDetails(data) {
        this.trNo = data.trackingNo;
        this.shipmentsService.getTrackingDetails(this.trNo).subscribe((order: any) => {
            if (order.length !== 0) {
                this.table = true;
                this.trackingDetails = data
                this.lgModal.show()
            } else {
                this.table = false;
                this.trackingDetails = null;
            }
        })
        //this.router.navigate(['shipments/shipments-details', data.trackingNo])
    }
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
}
