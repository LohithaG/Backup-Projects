import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { POService } from '../po.service'

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var $: any;
import { ModalDirective, esLocale } from 'ngx-bootstrap';
import { endponitConfig } from '../../../environments/endpoint';
import * as moment from 'moment';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

@Component({
    selector: 'po-list',
    templateUrl: './po.component.html'
})

export class POComponent {
    loading = false
    public users;
    public QueryData: any = { startDate: '', endDate: '' };
    public stockRecievedDate: any = '';
    public QueryDataEndDate;
    public QueryDataStartDate;
    poDate = new Date();
    public userWidget = true;
    userlistMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;

    @ViewChild('loadPOPopup') public loadPOPopup: ModalDirective;
    public showChildModal(): void {
        this.loadPOPopup.show();
    }
    d = new Date()
    private readonly myDatePickerOptions: IMyOptions = {
        openSelectorOnInputClick: true,
        inline: false,
        disableDateRanges: [{
            begin: {
                year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1,
                day: (new Date()).getDate() + 1
            }, end: { year: 9999, month: 12, day: 31 }
        }],
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };
    // public stockRecievedDatePickerOptions: IMyOptions = {}
    private stockRecievedDatePickerOptions: IMyOptions = {
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false,
        showClearDateBtn: false,
        editableDateField: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))



    public isSearchQuerySubmitted: boolean;
    public errorMessage;

    userType: any;
    dateFormat = 'YYYY-MM-DD'
    ngOnInit() {
        this.userType = sessionStorage.getItem('userRole')
        this.route.params.subscribe(params => {
            if (params['data'] !== undefined) {
                if (params['data'] === 'ASuccess') {
                    this.userlistMessage = 'User created successfully';
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                } else if (params['data'] === 'USuccess') {
                    this.userlistMessage = 'User updated successfully';
                    setTimeout(() => { this.userlistMessage = '' }, 3000);
                }
            }
        })
        localStorage.setItem('poObj', '')

        // this.stockRecievedDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = { 'date': { 'year': this.d.getFullYear() - 1, 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }

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
    vendorsNameList: any = [];
    purchaseInvoiceStatusList: any = [];
    vendorId: any = 0;
    purchaseInvoiceId: any = 0;
    loadingView() {
        var table = $('#DataTable table').DataTable();
        this.loading = true;
        table.ajax.reload();
        setTimeout(() => {
            this.loading = false;
        }, 2000);
    }

    getStatusList() {
        this.poService.getStatusList().subscribe(data => {
        })

    }
    getAllVendors() {
        this.poService.getStatusList().subscribe(data => {
            if (data.data != []) {
                this.purchaseInvoiceStatusList = data['data'];
                this.purchaseInvoiceStatusList.unshift({ id: 0, status: 'All' })
                const statusObj1: any = this.purchaseInvoiceStatusList.find(status => 0 === status.id)
                this.purchaseInvoiceId = statusObj1.id
            }
            else {
                alert(data.error.message);
            }
        })
        this.poService.getAllVendors().subscribe((data) => {
            if (data.data != []) {
                this.vendorsNameList = data.data;
                this.vendorsNameList.unshift({ id: 0, name: 'All', createdTime: "2019-03-14T19:02:46+05:30", updatedTime: "2019-03-14T19:02:46+05:30" })
                const statusObj: any = this.vendorsNameList.find(status => 0 === status.id)
                this.vendorId = statusObj.id
            } else {
                alert(data.error.message)
            }
        })
    }
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    @ViewChild('transportModal') public transportModal: ModalDirective;
    poId: any;

    stockRecievedConfirmation(data) {
        this.stockRecievedDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        let date = new Date(data.purchaseOrderDate);
        this.stockRecievedDatePickerOptions = {
            openSelectorOnInputClick: true,
            inline: false,
            dateFormat: 'dd-mm-yyyy',
            showTodayBtn: false,
            showClearDateBtn: false,
            editableDateField: false,
            height: '30px',
            selectionTxtFontSize: '14px',
            indicateInvalidDate: true,
            disableUntil: { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()},
            disableSince: { year: this.d.getFullYear(), month: this.d.getMonth() + 1, day: this.d.getDate() + 1 },
        };

        this.transportModal.show();
        this.poId = data.poId;
    }
    onDateChanged(date) {
        this.stockRecievedDate = date;
    }
    stockRecieved() {

        var month, day;
        if (this.stockRecievedDate.date['month'] < 10) {
            month = '0' + this.stockRecievedDate.date['month'];
        }
        else {
            month = this.stockRecievedDate.date['month'];
        }
        if (this.stockRecievedDate.date['day'] < 10) {
            day = '0' + this.stockRecievedDate.date['day'];
        }
        else {
            day = this.stockRecievedDate.date['day'];
        }

        var date = this.stockRecievedDate.date['year'] + '-' + month + '-' + day;
        this.poService.updatePoStatus(this.poId, 2, date).subscribe(data => {
            this.loadingView()

        })
        this.transportModal.hide();
    }
    vendorChange() {
    }
    options = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "aaSorting": [[6, "asc"], [7, "desc"]],
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
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns' },
            {
                extend: 'csv',
                text: '<i class="fa fa-file-o"> CSV Download</i>',
                filename: () => { return this.getExportFileName(); }
            },
        ],

        ajax: (data, callback, settings) => {
            this.http.get(`${endponitConfig.VENDORS_API_ENDPOINT}getAllPoDetails/${this.QueryDataStartDate}/${this.QueryDataEndDate}/${this.vendorId}/${this.purchaseInvoiceId}`, { headers: this.headers })
                .map(this.extractData)
                .subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        "columnDefs": [
            {
                "targets": [4],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [5],
                "visible": false,
                "searchable": true
            }
        ],
        columns: [
            { data: 'ponumber', responsivePriority: 1 }, { data: 'vendorname', responsivePriority: 2 },
            { data: 'count', responsivePriority: 3, "className": "text-center" },
            {
                data: 'purchaseOrderDate',
                responsivePriority: 4,
                render: (data, type, row, meta) => {
                    if (data == null) {
                        return '-';
                    }
                    if (new Date(data).getDate() >= 10) {
                        if ((new Date(data).getMonth() + 1) >= 10) {
                            return `${new Date(data).getDate()}-${(new Date(data).getMonth() + 1)}-${new Date(data).getFullYear()}`;
                        }
                        else {
                            return `${new Date(data).getDate()}-0${(new Date(data).getMonth() + 1)}-${new Date(data).getFullYear()}`;
                        }
                    }
                    else {
                        if ((new Date(data).getMonth() + 1) > 10) {
                            return `0${(new Date(data).getDate())}-${(new Date(data).getMonth() + 1)}-${new Date(data).getFullYear()}`;
                        }
                        else {
                            return `0${(new Date(data).getDate())}-0${(new Date(data).getMonth() + 1)}-${new Date(data).getFullYear()}`;
                        }
                    }
                    //   
                }
            },
            {
                data: 'comments', responsivePriority: 5,
                render: (data, type, row) => {
                    if (data == null) {
                        return "-";
                    }
                    else {
                        return data;
                    }
                }
            },
            {
                data: 'skuList', responsivePriority: 6,
            },
            {
                data: 'purchaseInvoiceStatus', responsivePriority: 7,
                render: (data, type, row) => {
                    if (data == null) {
                        return "-";
                    }
                    else {
                        if (data.id === 1) {
                            return 'Created'
                        }
                        else {
                            return 'Received'
                        }
                    }
                }
            },
            {
                data: 'stockReceivedDate',
                render: (data, type, row) => {
                    if (data === null) {
                        return '-'
                    }
                    let array = data.split("-");
                    let date = array[2] + '-' + array[1] + '-' + array[0];
                    if (type === 'display' || type === 'filter') {
                        return date;
                    }
                    return array[0] + '-' + array[1] + '-' + array[2];
                }
            },
            {
                data: null,
                orderable: false,
                className: 'editcenter',
                render: (data, type, row, meta) => {
                    if (this.userType === 'SUPERADMIN' || this.userType === 'ADMIN' || this.userType === 'ACCOUNTANT_MANAG' || this.userType === 'ACCOUNTANT') {
                        if (!data.productDetails[0].poVendorId.priceDetailsAdded) {
                            if (data.purchaseInvoiceStatus.id === 2)
                                return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="editor_details"> Add Bank Details </a>'
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="editor_details"> Add Bank Details </a>/<a class="add_stock"><i class="fa fa-truck"></i></a>'
                        } else {
                            if (data.purchaseInvoiceStatus.id === 2)
                                return '<a class="editor_view"> <i class="fa fa-eye"></i></a>/<a class="editor_details"> Update Bank Details</a>'
                            return '<a class="editor_view"> <i class="fa fa-eye"></i></a>/<a class="editor_details"> Update Bank Details</a>/<a class="add_stock"><i class="fa fa-truck"></i></a>'
                        }
                    } else {
                        return '<a class="editor_view"> <i class="fa fa-eye"></i></a>';
                    }
                },
                responsivePriority: 7
            },

        ],


        rowCallback: (row: Node, data: any | Object, index: number) => {

            $('td', row).unbind('click');
            $('a.editor_edit', row).bind('click', () => {
                this.editVendor(data);
            });

            $('a.editor_view', row).bind('click', () => {
                this.gotoViewLoadDetails(data);
            });
            $('a.editor_details', row).bind('click', () => {
                this.gotoViewPoDetails(data);
            });
            $('a.add_stock', row).bind('click', () => {
                this.stockRecievedConfirmation(data);
            })
            return row;
        },
    };
    gotoViewPoDetails(poObject) {
        localStorage.setItem('poObj', JSON.stringify(poObject))
        const link = ['/purchaseorder/details', poObject.ponumber];
        this.router.navigate(link);
    }
    loggedUserRole;
    constructor(private readonly poService: POService, private readonly route: ActivatedRoute, private readonly http: HttpClient, private readonly router: Router) {
        this.getAllVendors()
        if (localStorage.getItem('userWidget') != null) {
            localStorage.getItem('userWidget').split(',').forEach(element => {
                if (element === 'Add User' || element === 'add user') {
                    this.userWidget = false;
                }
            });
        }
        this.loggedUserRole = sessionStorage.getItem("userRole")

    }

    poDetails: any = {}
    priceId = 1
    poListView: any = {};
    public gotoViewLoadDetails(viewObj: any) {
        this.poListView = viewObj;
        this.poService.getAllPurchasePoDetails(viewObj.productDetails[0].poVendorId.id).subscribe((data: any) => {
            if (data.error == null) {
                this.poDetails = data.data;
                for (let data of this.poDetails.priceDetails) {
                    this.priceId = data.poVendorId.currencyTypeId.id
                }
                this.loadPOPopup.show();
            }
            else {
                alert(data.error.message)
            }
        })
    }






    public editVendor(poObj: any) {
        localStorage.setItem('poObj', JSON.stringify(poObj))
        const link = ['/purchaseorder/update', poObj.ponumber];
        this.router.navigate(link);

    }


    private extractData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }



    getExportFileName() {
        return 'PO_Report_' + this.formatedDate()
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