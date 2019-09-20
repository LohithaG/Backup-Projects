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
    selector: 'flipkart-remittance',
    templateUrl: './flipkart-cod.component.html',
})
export class FlipkartRemittanceComponent {
    loading = false
    constructor(public remittanceService: RemittanceTypesService, private readonly http: HttpClient, public router: Router) {
    }
    returnType: any = 'all';
    returnTypes = [{ id: 1, return_name: 'all', name: 'ALL' }, { id: 2, return_name: 'COURIER RETURN', name: 'COURIER RETURN' }, { id: 3, return_name: 'CUSTOMER RETURN', name: 'CUSTOMER RETURN' },
    { id: 4, return_name: 'ORDER', name: 'ORDER' }]
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
    public shipping_fee: any = 0;
    public commission: any = 0;
    public collection_fee: any = 0;
    public fixed_fee: any = 0;
    public reverse_shipping_fee: any = 0;
    public tax_at_source: any = 0;
    public all_taxes: any = 0;
    public order_id_for_market: any;
    public order_id: any;
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

    private flipkartData(res) {
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
    @ViewChild('transportModal') public transportModal: ModalDirective;
    @ViewChild('taxModal') public taxModal: ModalDirective;
    taxDetails: any; taxDetails1: any; taxDetails2: any; taxDetails3: any;


    showMarketPlaceFee(data) {
        this.order_id_for_market = data.orderId;
        this.shipping_fee = data.shippingCharges;
        this.commission = data.commission;
        this.reverse_shipping_fee = data.reverseShippingFee;
        this.collection_fee = data.collectionFee;
        this.fixed_fee = data.fixedFee;
        let orderItemId = data.orderItemId;


        this.remittanceService.taxDetails(orderItemId).subscribe((data: any) => {
            this.taxDetails = data.data[0];
            this.taxDetails1 = data.data[1];
            this.taxDetails2 = data.data[2];
            this.taxDetails3 = data.data[3];
        })
        this.transportModal.show();
    }
    showTaxes(data) {
        this.tax_at_source = data.taxCollectedAtSource;
        this.all_taxes = data.taxes;

        this.order_id = data.orderId;
        this.taxModal.show();
    }
    flipkartDetails = {
        dom: 'Bfrtip', "ordering": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_REM_COD + `flipkartcod/getorders?startDate=${this.QueryDataStartDate}&endDate=${this.QueryDataEndDate}&returnType=${this.returnType}`,
            { headers: this.headers }).map(this.flipkartData)
                .subscribe((jsondata: any) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        columns: [

            { data: 'neftId', responsivePriority: 1 },
            {
                data: 'settlementDate', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    const dArr = data.split("-");
                    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
                }
            },
            {
                data: 'settledAmount', responsivePriority: 3,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    if (data % 1 === 0) {
                        data = data + ".00"
                        return data
                    }
                    return data
                }
            },
            {
                data: 'orderId', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            {
                data: 'saleAmount', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    if (data % 1 === 0) {
                        data = data + ".00"
                        return data
                    }
                    return data
                }
            },
            {
                data: 'refund', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    return data
                }
            },
            {
                data: 'orderDate', responsivePriority: 7,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    const dArr = data.split("-");
                    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];
                }
            },
            {
                data: 'dispatchDate', responsivePriority: 8,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data == "NA") {
                        return 'NA'
                    }
                    const dArr = data.split("-");
                    return dArr[2] + "-" + dArr[1] + "-" + dArr[0];

                }
            },

            {
                data: 'sellerSku', responsivePriority: 9,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            {
                data: 'quantity', responsivePriority: 10,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            {
                data: 'returnType', responsivePriority: 11,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },
            {
                data: 'taxCollectedAtSource', responsivePriority: 12,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },

            {
                data: 'itemReturnStatus', responsivePriority: 13,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return data;
                }
            },

            {
                data: 'shippingCharges', responsivePriority: 14,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    if (data % 1 === 0) {
                        data = data + ".00"
                        return data
                    }
                    return data;
                }
            },
            {
                data: 'marketPlaceFeeAndTaxes', responsivePriority: 15,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-";
                    }
                    return '<a class="fee" routerLink="Active">' + data + '</a>';
                }
            },
        ],
        "columnDefs": [
            {
                "targets": [5],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [6],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [7],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [9],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [13],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [12],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [8],
                "visible": false,
                "searchable": true
            }


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
        ], rowCallback: (row: Node, data: any) => {
            $('a.tax_view', row).bind('click', () => {
                this.getTaxDetails(data)
            });
            $('a.fee', row).bind('click', () => {
                this.showMarketPlaceFee(data);
            });
            $('a.tax', row).bind('click', () => {
                this.showTaxes(data);
            })
        }
    };

    getTaxDetails(data) {
        this.router.navigate(['remittance/flipkart-tax-details', data.orderItemId, data.orderId])
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
    getExportFileName() {
        return 'Flipkart_Remittance_Report_' + this.formatedDate()
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
