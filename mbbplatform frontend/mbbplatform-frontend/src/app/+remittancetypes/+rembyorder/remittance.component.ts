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
import { RemittanceService } from './remittance.service';

declare var $;
@Component({
    selector: 'remittance-byorder',
    templateUrl: './remittance.component.html',
})
export class RemittanceComponent {
    loading=false
    constructor(public remittanceService: RemittanceService, private readonly http: HttpClient, public router: Router) {
    }

    shipmentTypes = [{ id: 1, shipment_name: 'all', name: 'ALL' }, { id: 2, shipment_name: 'SHIPROCKET', name: 'SHIPROCKET' }, { id: 3, shipment_name: 'ZEPO', name: 'ZEPO' }]
    remittanceTypes = [{ id: 1, remittance_name: 'all', name: 'ALL' }, { id: 2, remittance_name: 'Complete', name: 'COMPLETE' },
    { id: 3, remittance_name: 'Payment pending', name: 'PAYMENT PENDING' }]
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
        this.QueryData.startDate =  {
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
    private readonly headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));
    private shipmentTypeDetailsData(res) {
        const body = res;
        if (body) {
            return body
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
            this.http.get(endponitConfig.ALL_SHIPMENTS_COD 
                + `codremittance/getCodRemittanceDetails?startDate=${this.QueryDataStartDate}&endDate=${this.QueryDataEndDate}&shippingAggregator=${this.shipmentType}&status=${this.remittanceType}`,
                { headers: this.headers }).map(this.shipmentTypeDetailsData).subscribe((jsondata: any) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        "columnDefs": [{ width: 100, targets: 0 }, { width: 170, targets: 1 }, { width: 120, targets: 2 },
        { width: 170, targets: 3 }, { width: 160, targets: 4 }, { width: 80, targets: 5 },
        { width: 150, targets: 6 }, { width: 100, targets: 7 },
        {
            "targets": [0],
            "orderable": true,
        },
        {
            "targets": [0],
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
                data: 'remittedDate', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    data = data.toString().split("-").reverse().join("-");
                    if (type === 'display' || type === 'filter') {
                        return data;
                    }
                    return data.toString().split("-").reverse().join("-");
                }
            },
            {
                data: 'orderId', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data.split('').pop() === '-' && data !== null) {
                        const str = data.split("");
                        str.pop();
                        return str.join("");
                    }
                    return data.split('.').join("");
                }
            },
            { data: 'trackingNo', responsivePriority: 3 },
            { data: 'cRFIDORLedger', responsivePriority: 4 },
            { data: 'paymentReferennceNumber', responsivePriority: 5 },
            {
                data: 'amount', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    return data + ".00"
                }
            },
            {
                data: 'remittanceStatus', responsivePriority: 7,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data.toUpperCase() === 'Payment Pending'.toUpperCase()) {
                        return `<span style="color:darkred" >${data.toUpperCase()} </span>`
                    } else {
                        return `<span id="a" style="color:green" >${data.toUpperCase()}</span>`
                    }
                }
            },

            {
                data: 'shippingAggregator', responsivePriority: 8,
                "render": (data, type, row, meta) => {
                    if (data === 'ZEPO') {
                        return `<span style="color:deepskyblue">${data.toUpperCase()}</span>`
                    } else {
                        return `<span style="color:coral" >${data.toUpperCase()}</span>`
                    }
                }
            },
        ],
        "aaSorting": [[0, 'desc']],
        buttons: [
            // { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
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
    getExportFileName() {
        if (this.shipmentType === 'SHIPROCKET') {
            return 'Remittance_Report_SHIPROCKET_' + this.formatedDate()
        }
        if (this.shipmentType === 'ZEPO') {
            return 'Remittance_Report_ZEPO_' + this.formatedDate()
        }
        else {
            return 'Remittance_Report_' + this.formatedDate()
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
    remittanceType: any = 'all';
    getRemittanceWise() {
    }

     loadingView() {
        const table = $('#DataTable table').DataTable();
        table.search("").draw();
        this.loading = true;
        table.ajax.reload();
        setTimeout(() => {
            this.loading = false
        }, 1000);
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
