import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { InvoicesService } from '../invoices.service'
import { endponitConfig } from '../../../environments/endpoint';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ModalDirective } from 'ngx-bootstrap';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';

declare var $: any;

@Component({
    selector: 'datatables-invoices-list',
    templateUrl: './invoices-list.component.html',
    styles: [],

})
export class InvoicesListComponent implements OnInit {
    loading = false;
    public QueryData: any = { startDate: '', endDate: '' };
    public isSearchQuerySubmitted: boolean;
    public QueryDataEndDate: string;
    public QueryDataStartDate: string;
    public errorMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;
    locationId: any = 0;
    private readonly selDate: any;
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
    @ViewChild('lgModal') public lgModal: ModalDirective;
    locationDetails = [{ id: 0, location_name: 'All' }, { id: 1, location_name: 'HYDERABAD' }, { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]

    channelTypes = [{ id: 1, channel_name: 'All', name: 'ALL' }, { id: 2, channel_name: 'WOOCOMMERCE', name: 'WOOCOMMERCE' },
    { id: 3, channel_name: 'CUSTOM', name: 'CUSTOM' }, { id: 4, channel_name: 'AMAZON_IN', name: 'AMAZON' },
    { id: 5, channel_name: 'FLIPKART', name: 'FLIPKART' }, { id: 6, channel_name: 'SHOPCLUES', name: 'SHOPCLUES' }, { id: 7, channel_name: 'SNAPDEAL', name: 'SNAPDEAL' }]

    statusTypes = [{ id: 1, status_name: 'All', name: 'ALL' }, { id: 2, status_name: 'DELIVERED', name: 'DELIVERED' },
    { id: 3, status_name: 'IN TRANSIT', name: 'IN TRANSIT' }, { id: 4, status_name: 'PICKUP SCHEDULED', name: 'PICKUP SCHEDULED' },
    { id: 5, status_name: 'RETURNED', name: 'RETURNED' }, { id: 6, status_name: 'DISPATCHED', name: 'DISPATCHED' },
    { id: 7, status_name: 'CANCELLED', name: 'CANCELLED' }]

    paymentMode = [{ id: 1, payment_name: 'All', name: 'ALL' }, { id: 1, payment_name: 'cod', name: 'COD' }, { id: 1, payment_name: 'online', name: 'ONLINE' }]
    constructor(private readonly invoicesService: InvoicesService, private readonly http: HttpClient, public router: Router) {
    }
    channelType: any = 'All'
    statusType: any = 'All';
    paymentType: any = 'All';


    dateFormat = 'YYYY-MM-DD'
    ngOnInit() {
        this.QueryData.startDate = '2018-12-01';
        this.QueryData.endDate = '2019-02-09';
        this.QueryData.locationId = 1;

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

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    private InvoicesDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    InvoiceOptions = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.loading = true;
            const sd = this.QueryDataStartDate;
            const ed = this.QueryDataEndDate;
            const pt = this.paymentType;
            this.http.get(`${endponitConfig.INVOICE_DETAILS}getInvoiceDetails/${sd}/${ed}/${pt}/${this.statusType}/${this.channelType}`,
                { headers: this.headers })
                .map(this.InvoicesDetailsData)
                .catch((error: any) => {
                    return Observable.throwError(error);
                })
                .subscribe((jsondata) => {
                    this.loading = false;
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },

        columns: [
            {
                data: 'invoiceNumber', responsivePriority: 1,
                render: (data, type, row) => {
                    return `<a type='button' data-toggle="modal" style='cursor:pointer;'   class='orderId' >${data}</a>`;
                }
            },
            {
                data: 'orderDate', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        let dateAr = data.split('-');
                        let orderDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0];
                        return orderDate;
                    } else {
                        return '-'
                    }
                }
            },
            {
                data: 'totalPrice', responsivePriority: 3,
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
                data: 'channelName', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data === "AMAZON_IN") {
                        data = 'AMAZON'
                        return data
                    }
                    return data;
                }
            },
            {
                data: 'awbNumber', responsivePriority: 5,
            },
            {
                data: 'paymentMode', responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data === "NET_BANKING") {
                        data = 'NET BANKING'
                        return data
                    } else if (data === 'DEBIT_CARD') {
                        return 'DEBIT CARD'
                    } else if (data === 'CREDIT_CARD') {
                        return 'CREDIT CARD'
                    }
                    return data;
                }
            },

            {
                data: 'status', responsivePriority: 7,
            },
        ],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable('#InvoiceDataTable table')) {
                        this.loadingView();
                    }
                }
            },
            {
                extend: 'csv',
                exportOptions: {
                    orthogonal: 'sort'
                }, text: '<i class="fa fa-file-o"> CSV Download</i>',
                filename: () => { return this.getExportFileName(); }


            }
        ]
        ,
        rowCallback: (row: Node, data: any | Object, index: number) => {


            $('td', row).unbind('click');
            $('a.orderId', row).bind('click', () => {
                this.getOrderIdDetails(data)
            });
            $('a.editor_eye', row).bind('click', () => {
                this.showInvoice(data);
            });
            return row;
        },
    };
    table; invoice; inVoiceDetails; inVoiceDetail;
    getOrderIdDetails(data) {
        this.invoice = data.invoiceNumber;
        this.invoicesService.getInvoiceId(this.invoice).subscribe((order: any) => {
            this.inVoiceDetails = JSON.parse(order.data)
            if (this.inVoiceDetails != null) {
                this.table = true;
                this.inVoiceDetail = this.inVoiceDetails[0]
                this.inVoiceDetails = this.inVoiceDetails[1]
                this.lgModal.show()
            } else {
                alert('No details available for this invoice');
                console.log(order.error.message)
            }
        })
    }

    invoicesDetails; invoicesData;
    public showInvoice(details: any) {
        this.invoicesData = true
        this.invoicesDetails = details;
        this.lgModal.show()
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
                        this.errorMessage = '';
                    }, 3000)
                } else {
                    this.errorMessage = '';
                    this.loadingView()
                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            }
            this.isSearchQuerySubmitted = false;
        }
    };

    loadingView() {
        const table = $('#InvoiceDataTable table').DataTable();
        table.search("").draw();
        table.ajax.reload();
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }
    getExportFileName() {
        return 'Invoice_Report_' + this.formatedDate()
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
