import { Component, ViewChild, OnInit } from '@angular/core';
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
import { RemByPaymentNoService } from './rembypaymentno.service';
import { RemittanceTypesService } from '../remittancetypes.service';

declare var $;
@Component({
    selector: 'remittance-bypayno',
    templateUrl: './rembypaymentno.component.html',
})
export class RemByPaymentNoComponent implements OnInit {
    loading = false
    public codPaybleDetails;
    public shiprocketData;
    public lastCodRemittedDate;
    public lastCodRemittedDatesArray: any = [];
    public remittanceInitiatedDate;
    public remittanceInitiatedDatesArray: any = [];
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
    @ViewChild('lgModal') public lgModal: ModalDirective;
    constructor(public remittanceTypesService: RemittanceTypesService, private readonly http: HttpClient, public router: Router) {
    }
    zepoCODData; remittedAmt = 0; pendingPay = 0; allCODData; allRemittedAmt = 0; allPendingPay = 0;

    shipmentTypes = [{ id: 1, shipment_name: 'all', name: 'ALL' }, { id: 2, shipment_name: 'SHIPROCKET', name: 'SHIPROCKET' }, { id: 3, shipment_name: 'ZEPO', name: 'ZEPO' }]
    remittanceTypes = [{ id: 1, remittance_name: 'all', name: 'ALL' }, { id: 2, remittance_name: 'Complete', name: 'COMPLETE' },
    { id: 3, remittance_name: 'Payment pending', name: 'PAYMENT PENDING' }]
    dateFormat = 'YYYY-MM-DD';
    payPending="Payment Pending";
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

        this.remittanceTypesService.getCODData().subscribe((data: any) => {
            this.codPaybleDetails = data.cod_payble;
        })
        this.remittanceTypesService.getZepoCODData().subscribe((data: any) => {
            this.zepoCODData = data.data;

            for (const zepo of this.zepoCODData) {
                if (zepo.remittanceStatus === "Complete") {
                    this.remittedAmt += parseInt(zepo.amount);
                }
                if (zepo.remittanceStatus === this.payPending) {
                    this.pendingPay += parseInt(zepo.amount);
                }
            }
        })
        this.remittanceTypesService.getAllCODData().subscribe((data: any) => {
            this.allCODData = data.data;

            for (const cod of this.allCODData) {
                if (cod.remittanceStatus === "Complete") {
                    this.allRemittedAmt += parseInt(cod.amount);
                }
                if (cod.remittanceStatus.toUpperCase() === this.payPending.toUpperCase()) {
                    this.allPendingPay += parseInt(cod.amount);
                }
            }
        })
    }
    crf; awbsDetails; table;
    getOrderIdDetails(data) {
        this.router.navigate(['remittance/byPaymentRef/remittance-details', data.crfid, data.utr])
    }

    twoDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }
    private remByPaymentRefDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    remByPaytDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_SHIPMENTS_COD +
                `zepoSRCodRemittance/getAllCodRemittance?startDate=${this.QueryDataStartDate}&endDate=${
                this.QueryDataEndDate}&shippingAggregator=${this.shipmentType}&status=${this.remittanceType}`,
                { headers: this.headers })
                .map(this.remByPaymentRefDetailsData)
                // .catch(error => {
                //     const errMsg = (error.message) ? error.message :
                //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                //     console.error(errMsg);
                //     if (error.status === 404) {
                //         error = error.json();
                //         console.log(error.exception)
                //         return Observable.throwError(error);
                //     } else {
                //         localStorage.setItem('status', '401')
                //         window.location.href = '/#/error';
                //         return Observable.throwError(errMsg);
                //     }
                // })
                .subscribe((jsondata) => {
                    this.shiprocketData = jsondata;
                    callback({ aaData: jsondata == null ? [] : jsondata })

                })
        },

        "columnDefs": [{ width: 80, targets: 0 }, { width: 80, targets: 1 }, { width: 100, targets: 2 }, { width: 110, targets: 3 },
        { width: 60, targets: 4 }, { width: 70, targets: 5 }, { width: 100, targets: 6 }, { width: 100, targets: 7 },

        {
            "targets": [6],
            "visible": false,
            "searchable": false
        },
        {
            "targets": [7],
            "visible": false,
            "searchable": false
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
                data: 'createdAt',
                responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    data = data.toString().split("/").reverse().join("-");
                    if (type === 'display' || type === 'filter') {
                        return data.toString().split("-").reverse().join("-");
                    }
                    return data.toString().split("/").reverse().join("-");
                }
            },
            {
                data: 'crfid',
                responsivePriority: 2,
                render: (data, type, row) => {
                    if (data == null) {
                        return "-";
                    }
                    if (!isNaN(data)) {
                        return `<a type='button' data-toggle="modal" style='cursor:pointer;'   class='orderId' >${data}</a>`;
                    } else {
                        return data;
                    }
                }
            },
            {
                data: 'utr', responsivePriority: 3,
            },
            {
                data: 'status', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    data=data.toUpperCase();
                    if (data === 'PAYMENT PENDING') {
                        return `<span style="color:darkred" >${data.toUpperCase()}</span>`
                    }
                    if (data === 'COMPLETE') {
                        return `<span style="color:green" >${data.toUpperCase()}</span>`
                    }
                    else {
                        return `<span style="color:deepskyblue" >${data.toUpperCase()}</span>`
                    }

                }
            },
            {
                data: 'remittedValue', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }

                    return data + ".00"

                }
            },
            {
                data: 'shippingAggregator', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data === 'ZEPO') {
                        return `<span style="color:deepskyblue" >${data} </span>`
                    }
                    else {
                        return `<span style="color:coral" >${data}</span>`
                    }

                }
            },
            { data: 'accountType', responsivePriority: 7 },
            { data: 'remarks', responsivePriority: 8 },
        ],
        "aaSorting": [[0, 'desc']],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable(this.dataTableId)) {
                        this.loadingView()
                    }
                }
            },
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
            {
                extend: 'csv', text: '<i class="fa fa-file-pdf-o"> CSV Download</i>'
                ,

                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],
                    orthogonal: 'export'
                },
                filename: () => { return this.getExportFileName(); }
            },
        ],
        rowCallback: (row: Node, data: any) => {
            $('a.orderId', row).bind('click', () => {
                this.getOrderIdDetails(data)
            });
        }
    };
    getExportFileName() {
        return 'Payment_Ref_Report_ ' + this.formatedDate()
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
    zepoType; shiprocketType; allType = true;
    dataTableId = '#DataTable table';
    QuerySubmit() {

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
                    if (this.shipmentType === 'ZEPO') {
                        this.zepoType = true;
                        this.shiprocketType = false;
                        this.loadingView()
                    }
                    if (this.shipmentType === 'SHIPROCKET') {
                        this.shiprocketType = true;
                        this.zepoType = false;
                        this.loadingView()
                    }
                    if (this.shipmentType === 'all') {
                        this.allType = true;
                        this.shiprocketType = false;
                        this.zepoType = false;
                        this.loadingView()
                    }
                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;

                console.error('Getting  filtered data completed  in Analytics');
            }
            this.isSearchQuerySubmitted = false;
        }

    }

    loadingView() {
        const table = $(this.dataTableId).DataTable();
        table.search("").draw();
        this.loading = true;
        table.ajax.reload();
        setTimeout(() => {
            this.loading = false
        }, 1000);
    }
}
