import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { endponitConfig } from '../../../environments/endpoint';
import { InventoryApprovalService } from '../inventory-approval.service';
import { ModalDirective } from 'ngx-bootstrap';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';

declare var $;
@Component({
    selector: 'inventory-approval',
    templateUrl: './inventory-list.component.html'
})
export class InventoryApprovalComponent {

    public QueryData: any = { startDate: '', endDate: '', sourceId: '', destinationId: '', statusId: 0 };
    packageStatusList: any = [{ id: 0, status: 'All' }, { id: 1, status: 'Pending' }, { id: 2, status: 'Adding InProgress' },
    { id: 3, status: 'Waitng For Approval' }, { id: 4, status: 'Approved' }, { id: 5, status: 'QR Codes Not Generated' }]

    private readonly model: Object = { date: { year: 2019, month: 10, day: 9 } };
    private readonly startDate: any;
    private readonly endDate: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public isSearchQuerySubmitted;
    errorMessage: any = '';
    serviceErrorResponse: any = '';
    serviceErrorData: any = '';
    loading = false;

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
    adminType: any;
    constructor(
        public approvalService: InventoryApprovalService,
        private readonly http: HttpClient,
        public router: Router) {
        this.adminType = false;
    }

    dateFrmt = 'YYYY-MM-DD';
    ngOnInit() {
        this.QueryData.sourceId = 0;
        this.QueryData.destinationId = 0
        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = { 'date': { 'year': this.d.getFullYear() - 1, 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }

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

    @ViewChild('approvalModal') public approvalModal: ModalDirective;
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    private PackageDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    PackageDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.VENDORS_API_ENDPOINT + 'getInventoryapproval/' + this.QueryDataStartDate + '/' + this.QueryDataEndDate + '/' + this.QueryData.statusId, { headers: this.headers })
                .map(this.PackageDetailsData)
                .subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        "columnDefs": [
            {
                "targets": [5],
                "visible": false,
                "searchable": true
            },

        ],
        columns: [
            {
                data: 'poNumber',
            },
            {
                data: 'totalCount',
            },
            {
                data: 'addedToInventory'
            },
            {
                data: 'statusInfo.status',
                "render": function (data) {
                    if (data == null) {
                        data = '-'
                    }
                    return data;
                }
            },
            {
                data: 'purchaseOrderDate',
                "render": (data, type, row, meta) => {
                    if (type === 'display') {
                        const date = new Date(data)
                        let dd: any = date.getDate();
                        let mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        if (dd < 10) { dd = '0' + dd }
                        if (mm < 10) { mm = '0' + mm }
                        return `${dd}-${mm}-${yyyy}`;
                    } else {
                        return data
                    }
                }
            },
            {
                data: 'skuList',
            },
            {
                data: null,
                orderable: false,
                className: 'editcenter',
                "render": (data, type, row, meta) => {
                    // || row['statusInfo'].status == 'QR Codes Not Generated' 
                    if (row['statusInfo'].status == 'Pending' || row['statusInfo'].status == 'Adding InProgress' || row['statusInfo'].status == 'Approved') {
                        return '<a class="inventory-view"> <i class="fa fa-eye"></i></a>'
                    } else if (row['statusInfo'].status == 'Waitng For Approval') {
                        return '<a class="inventory-view"> <i class="fa fa-eye"></i></a>/<a class="inventory_move">Approve</a>'
                    } else {
                        return '-'
                    }
                }
            }
        ],
        "order": [[3, "desc"]],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable('#PACKAGEDataTable table')) {
                        this.loadingView()
                    }
                }
            },
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns' },
            {
                extend: 'csv', className: "moreColumns",
                text: '<i class="fa fa-file-o"> CSV Download</i>',
                exportOptions: {
                    orthogonal: 'sort'
                },
                filename: () => { return this.getExportFileName(); }

            }
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('a.inventory-view', row).bind('click', () => {
                self.inventoryView(data);
            });
            $('a.inventory_move', row).bind('click', () => {
                self.inventoryMove(data);
            });
            return row;
        },
    };
    loadingView() {
        var table = $('#PACKAGEDataTable table').DataTable();
        table.ajax.reload();
        this.loading = true;
        setTimeout(() => {
            this.loading = false
        }, 2000);
    }
    approvedPoNumber: any;
    approvedPoName: any;
    inventoryView(data) {
        this.approvedPoName = data.poNumber
        const link = ['./inventory-approval/inventory-view', data.poVendorId, data.poNumber];
        this.router.navigate(link);
    }
    inventoryMove(data) {
        this.approvedPoName = data.poNumber
        this.approvedPoNumber = data.poVendorId;
        this.approvalModal.show();
    }
    approvedSuccessMsg: any = '';
    approvedErrorMsg: any = '';
    success:boolean;
    InventoryApproved() {
        this.success=false;
        this.approvalService.inventoryApproval(this.approvedPoNumber).subscribe((data: any) => {
            if (data.data != null) {
                this.success=true;
                this.approvedSuccessMsg = "Inventory Added Successfully";
                setTimeout(() => {
                    this.success=false;
                    this.approvedSuccessMsg = "";
                    this.approvalModal.hide();
                    this.loadingView()
                }, 3000)

            } else {
                this.approvedErrorMsg = data.error.message;
                setTimeout(() => {
                    this.approvedErrorMsg = "";
                    this.approvalModal.hide();
                    this.loadingView()
                }, 3000)
            }
        })
    }

    getExportFileName() {
        return 'Inventory_Transfer_Report_' + this.formatedDate()
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

