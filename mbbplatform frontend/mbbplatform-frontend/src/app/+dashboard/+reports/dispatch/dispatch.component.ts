import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';
declare var L, d3, dc, crossfilter, $: any;
import { ReportsService } from '../reports.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { endponitConfig } from '../../../../environments/endpoint';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-dispatch-details',
    templateUrl: './dispatch.component.html',

})

export class DispatchDetailsComponent {

    loading = false;
    fileNameCount: any;
    public activePageTitle: any;
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
    locationId: any = 0;
    private readonly selDate: any;
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
    @ViewChild('lgModal') public lgModal: ModalDirective;
    constructor(private readonly http: HttpClient, public router: Router, public reportsService: ReportsService) {

    }

    locationDetails = [{ id: 0, location_name: 'All' }, { id: 1, location_name: 'HYDERABAD' }, { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    dateFormat = 'YYYY-MM-DD'
    ngOnInit() {
        this.QueryData.startDate = '2018-12-01';
        this.QueryData.endDate = '2019-02-09';
        this.QueryData.locationId = 1;
        this.fileNameCount = this.QueryData.locationId;

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
                    this.fileNameCount = this.QueryData.locationId;
                    this.loadingView();

                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            }
            this.isSearchQuerySubmitted = false;
        }
    };


    private DispatchDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    dataTableId = '#diapatchDataTable table';
    dispatchDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.loading = true;
            this.http.get(`${endponitConfig.DISPATCH_ENDPONT}getDispatchDetails/${this.QueryDataStartDate}/${this.QueryDataEndDate}/${this.locationId}`,
                { headers: this.headers })
                .map(this.DispatchDetailsData)
                .subscribe((jsondata) => {
                    this.loading = false;
                    if (jsondata != null) {
                        callback({ aaData: jsondata == null ? [] : jsondata })
                    } else {
                        callback({
                            aaData: []
                        })
                    }
                })
        },

        columns: [
            {
                data: 'invoiceId',
                responsivePriority: 1,
            },
            {
                data: 'skucode',
                responsivePriority: 2
            },
            {
                data: 'productName',
                responsivePriority: 3
            },
            {
                data: 'barcode',
                responsivePriority: 4
            },
            {
                data: 'serialNumber',
                responsivePriority: 5,
                "render": (data) => {
                    if (data != null) {
                        return data
                    } else {
                        return '-'
                    }
                }
            },
            { data: 'createdUser', responsivePriority: 6 },
            { data: 'facility', responsivePriority: 7 },

            {
                data: 'createdTime', responsivePriority: 8, "render": (data, type, row, meta) => {
                    if (data == null) {
                        return '-'
                    }
                    if (type === 'display' || type === 'filter') {
                        const date = new Date(data)
                        let dd: any = date.getDate();
                        let mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        if (dd < 10) { dd = '0' + dd }
                        if (mm < 10) { mm = '0' + mm }
                        return `${dd}-${mm}-${yyyy}`;
                    }
                    const date = new Date(data)
                    let dd: any = date.getDate();
                    let mm: any = date.getMonth() + 1;
                    const yyyy = date.getFullYear();
                    if (dd < 10) { dd = '0' + dd }
                    if (mm < 10) { mm = '0' + mm }
                    return `${yyyy}-${mm}-${dd}`;
                }
            },
            {
                data: 'updatedTime', responsivePriority: 9, "render": (data, type, row, meta) => {
                    if (type === 'display') {
                        if (row['productReturn']) {
                            const date = new Date(data)
                            let dd: any = date.getDate();
                            let mm: any = date.getMonth() + 1;
                            const yyyy = date.getFullYear();
                            if (dd < 10) { dd = '0' + dd }
                            if (mm < 10) { mm = '0' + mm }
                            return `${dd}-${mm}-${yyyy}`;
                        } else {
                            return '-'
                        }
                    } else {
                        return data
                    }

                }
            },
            {
                data: 'productReturn',
                responsivePriority: 10,
                "render": (data) => {
                    if (data) {
                        return 'Returned'
                    } else {
                        return 'Dispatched'
                    }
                }
            },


            {
                data: 'comment',
                responsivePriority: 11
            },

        ],
        "columnDefs": [
            {
                "targets": [2],
                "visible": false,
            },
            {
                "targets": [4],
                "visible": false,
            },
            {
                "targets": [10],
                "visible": false,
            },
        ],
        "aaSorting": [[7, "desc"]],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable(this.dataTableId)) {

                        this.loadingView();
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
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('a.tracking_details', row).bind('click', () => {
                this.goToTrackDetails(data.invoiceId)
            });
        }
    };

    loadingView() {
        const table = $(this.dataTableId).DataTable();
        table.search("").draw();
        table.ajax.reload();
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    }

    inVoiceDetails; details;
    goToTrackDetails(data) {
        //    this.reportsService.getOrderDetailsbyInvoiceNo(data).subscribe((invoice: any) => {
        //         this.details = true;
        //         this.inVoiceDetails = invoice.data;
        //        this.lgModal.show()
        //     })
    }

    getExportFileName() {
        if (this.fileNameCount === "0") {
            return 'Dispatch_Report_All_' + this.formatedDate();
        } else if (this.fileNameCount === "1") {
            return 'Dispatch_Report_Hyderabad_' + this.formatedDate();
        } else if (this.fileNameCount === "2") {
            return 'Dispatch_Report_Bangalore_' + this.formatedDate();
        } else if (this.fileNameCount === "3") {
            return 'Dispatch_Report_AmazonFlex_' + this.formatedDate();
        } else {
            return 'Dispatch_Report_' + this.formatedDate();
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

}
