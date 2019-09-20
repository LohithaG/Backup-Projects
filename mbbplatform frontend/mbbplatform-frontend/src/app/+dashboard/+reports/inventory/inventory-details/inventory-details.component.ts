declare var $: any;
declare var L, d3, dc, crossfilter;

import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { endponitConfig } from '../../../../../environments/endpoint';
import { ModalDirective } from 'ngx-bootstrap';
import { ReportsService } from '../../reports.service';

@Component({
    selector: 'app-inventory-details',
    templateUrl: './inventory-details.component.html',
})

export class InventoryDetailsComponent {
    loading = false;
    sku;
    id;
    locationId;
    public QueryData: any = { startDate: '', endDate: '' };
    public isSearchQuerySubmitted: boolean;
    private readonly model: Object = { date: { year: 2019, month: 10, day: 9 } };   
    public dummyPreview: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public errorMessage: string;
    public serviceErrorResponse;
    public serviceErrorData;
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
        listDetails = [{ id: 1, list_name: 'Available' }, { id: 5, list_name: 'Pending QC' }, { id: 6, list_name: 'Unavailable' }, { id: 8, list_name: 'Scanned/In transit' }, { id: 9, list_name: 'Pending Approval' }]

    @ViewChild('lgModal') public lgModal: ModalDirective;
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    constructor(private readonly http: HttpClient, public router: Router, private readonly route: ActivatedRoute, public reportsService: ReportsService) {
    }
    productName; strDate; endDate;
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    dateFormat = 'YYYY-MM-DD'
    ngOnInit() {
        this.QueryData.startDate = '2018-12-01';
        this.QueryData.endDate = '2019-02-09';
        this.QueryData.locationId = 1;

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
        this.route.params.forEach((params: Params) => {
            this.sku = params['sku']
            this.id = params['id']
            this.locationId = params['locationid']
        })
    }
    private InventoryDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
     getInventoryDetails() {
        this.loadingView();
    }
    dataTableId = '#inventoryDetailsDataTable table'
    inventoryDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(`${endponitConfig.INVENTORY_ENDPOINT}getItemsBasedOnSkuCodeAndDates/${this.QueryDataStartDate}/${this.QueryDataEndDate}/${this.sku}/${this.id}/${this.locationId}`,
                { headers: this.headers })
                .map(this.InventoryDetailsData)
                .catch((error: any) => {
                    return Observable.throwError(error);
                })
                .subscribe((jsondata) => {
                    callback({ aaData: jsondata })
                })
        },
        columns: [
            {
                data: 'qrcode',
                responsivePriority: 1
            },
            {
                data: 'serialNumber',
                responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        return data
                    } else {
                        return "-"
                    }
                }
            },
            {
                data: 'createdDate',
                responsivePriority: 3,
                "render": (data, type, row, meta) => {
                    if (data) {
                        const dArr = data.split("-");  // ex input "2010-01-18"
                        return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
                    } else {
                        return data
                    }
                }
            },
            {
                data: 'updateDate',
                responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data) {
                        const dArr = data.split("-");  // ex input "2010-01-18"
                        return `${dArr[2]}-${dArr[1]}-${dArr[0]}`;
                    } else {
                        return data
                    }
                }
            },
            {
                data: 'updatedUser',
                responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        return data
                    } else {
                        return "-"
                    }
                }
            },
            {
                data: 'facility.facility',
                responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data != null) {
                        if(this.id==8){
                        return data+' -> '+row['toFacility'];
                        }
                        else{
                            return data;
                        }
                    } else {
                        return "-"
                    }
                }
            },
        ],
        buttons: [
            {
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
                filename: () => { return this.getExportFileName(); }
            },
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            this.productName = data.productName;
        }
    };
    loadingView() {
        const table = $(this.dataTableId).DataTable();
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
                        this.errorMessage = '';
                    }, 3000)
                } else {
                    this.errorMessage = '';

                    this.loadingView();

                }
            } catch (error) {
                this.serviceErrorResponse = error.exception;
                this.serviceErrorData = true;
            }
            this.isSearchQuerySubmitted = false;
        }
    };
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
            return 'Inventory_Report' + this.formatedDate()
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
        return `date_${formatedDay}-${formatedMonth}-${year}_time_${formatedHour}.${formatedMinute}.${formatedSecond}`;
    };



}
