import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { endponitConfig } from '../../../environments/endpoint';
import { InventoryShippingService } from '../inventory-shipping.service';
import { ModalDirective } from 'ngx-bootstrap';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import * as moment from 'moment';

declare var $;
@Component({
    selector: 'inventory-shipping',
    templateUrl: './shipping-list.component.html',
    styles: [``]
})
export class InventoryShippingComponent {
    loading = false
    public QueryData: any = { startDate: '', endDate: '', sourceId: 0, destinationId: '', statusId: 0 };
    @ViewChild('lgModal') public lgModal: ModalDirective;

    private readonly model: Object = { date: { year: 2019, month: 10, day: 9 } };
    private readonly startDate: any;
    private readonly endDate: any;
    public QueryDataEndDate;
    public QueryDataStartDate;
    public isSearchQuerySubmitted;
    errorMessage: any = '';
    serviceErrorResponse: any = '';
    serviceErrorData: any = '';
    locationDetails: any = [{ id: 0, location_name: 'ALL' }, { id: 1, location_name: 'HYDERABAD' }, { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]
    locationDetails2: any = []
    packageStatusList: any = [{ id: 0, status: 'ALL' }, { id: 1, status: 'Package Created' }, { id: 2, status: 'Scanning-inprogress' }, { id: 3, status: 'Packing completed' }, { id: 4, status: 'Package-In-Transit' }, { id: 5, status: 'Package Received' }]
    d = new Date()
    private readonly myDatePickerOptions: IMyOptions = {
        openSelectorOnInputClick: true,
        inline: false,
        editableDateField: false,
        disableDateRanges: [{ begin: { year: (new Date()).getFullYear(), month: (new Date()).getMonth() + 1, day: (new Date()).getDate() + 1 }, end: { year: 9999, month: 12, day: 31 } }],
        dateFormat: 'dd-mm-yyyy',
        showTodayBtn: false,
        showClearDateBtn: false,
        height: '30px',
        selectionTxtFontSize: '14px',
        indicateInvalidDate: true,
    };
    adminType: any;

    constructor(
        public shippingService: InventoryShippingService,
        private http: HttpClient,
        public router: Router) {
        this.adminType = sessionStorage.getItem('userRole') == 'SUPERADMIN' ? true : false;
    }
    facilityId: any; role: any; userType: any;
    ngOnInit() {
        this.userType = sessionStorage.getItem('userRole')
        this.QueryData.destinationId = 0;
        this.QueryData.sourceId = 0;

        // if (this.adminType) {
        //     this.QueryData.sourceId = 0;
        // } else {
        //     this.QueryData.sourceId = sessionStorage.getItem('facilityId');
        // }
        this.role = sessionStorage.getItem('userRole');
        this.facilityId = sessionStorage.getItem('facilityId');
        this.getDestinationLocations();

        this.QueryData.endDate = { 'date': { 'year': this.d.getFullYear(), 'month': this.d.getMonth() + 1, 'day': this.d.getDate() } }
        this.QueryData.startDate = {
            'date': {
                'year': this.d.getFullYear(), 'month': this.d.getMonth(),
                'day': this.d.getDate() == 29 ? 28 : this.d.getDate() == 30 ? 28 : this.d.getDate() == 31 ? 28 : this.d.getDate()
            }
        }

        const stYear = this.QueryData.startDate.date.year;
        const stMonth = this.QueryData.startDate.date.month;
        const stDay = this.QueryData.startDate.date.day;
        const startDate = stYear + '-' + stMonth + '-' + stDay;
        this.QueryDataStartDate = moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

        const endYear = this.QueryData.endDate.date.year;
        const endMonth = this.QueryData.endDate.date.month;
        const endDay = this.QueryData.endDate.date.day;
        const endDate = endYear + '-' + endMonth + '-' + endDay;
        this.QueryDataEndDate = moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

    }

    getDestinationLocations() {
        this.locationDetails2 = [];
        this.locationDetails.find((data: any) => {
            if (data.id != this.QueryData.sourceId) {
                this.locationDetails2.push(data)
            } else if (data.id == 0) {
                this.locationDetails2.push(data)
            }
        })
    }

    public QuerySubmit(): void {
        if (this.QueryData.startDate !== '') {
            const stYear = this.QueryData.startDate.date.year;
            const stMonth = this.QueryData.startDate.date.month;
            const stDay = this.QueryData.startDate.date.day;
            const startDate = stYear + '-' + stMonth + '-' + stDay;
            this.QueryDataStartDate = moment(startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        } else {
            this.QueryDataStartDate = ''
        }

        if (this.QueryData.endDate !== '') {
            const endYear = this.QueryData.endDate.date.year;
            const endMonth = this.QueryData.endDate.date.month;
            const endDay = this.QueryData.endDate.date.day;
            const endDate = endYear + '-' + endMonth + '-' + endDay;
            this.QueryDataEndDate = moment(endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
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
        var table = $('#PACKAGEDataTable table').DataTable();
        table.search("").draw();
        this.loading = true;
        setTimeout(() => {
            this.loading = false
            table.ajax.reload();
        }, 1000);
    }
    @ViewChild('transportModal') public transportModal: ModalDirective;
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
            this.http.get(endponitConfig.INVENTORY_TRANSFER + 'getPackagesOnDatesAndRoutes/' + this.QueryData.sourceId + '/' + this.QueryData.destinationId + '/' + this.QueryDataStartDate + '/' + this.QueryDataEndDate + '/' + this.QueryData.statusId, { headers: this.headers })
                .map(this.PackageDetailsData)
                .subscribe((jsondata) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        columns: [
            {
                data: 'transferInventory.transferId',
                "render": function (data) {
                    if (data == null) {
                        data = '-'
                    }
                    return data;
                }
            },
            {
                data: 'transferInventory.packageName',
                "render": function (data, type, row, meta) {
                    if (type === 'display') {
                        data = ' <a class="package_view"> ' + data.toUpperCase() + '</a>';
                    }
                    return data;
                }
            },
            {
                data: 'transferInventory.numberOfskus', "className": "text-center"
            },
            {
                data: 'transferInventory.numberOfProducts', "className": "text-center"
            },
            {
                data: 'transferInventory.statusId.status',
                "render": function (data) {
                    if (data == null) {
                        data = '-'
                    }
                    return data;
                }
            },
            {
                data: 'transferInventory.createdTime',
                render: (data, type, row, meta) => {
                    if (data == null) {
                        return '-';
                    }
                    if (new Date(data).getDate() > 10) {
                        if ((new Date(data).getMonth() + 1) > 10) {
                            return (new Date(data).getDate()) + '-' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                        }
                        else {
                            return (new Date(data).getDate()) + '-' + '0' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                        }
                    }
                    else {
                        if ((new Date(data).getMonth() + 1) > 10) {
                            return '0' + (new Date(data).getDate()) + '-' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                        }
                        else {
                            return '0' + (new Date(data).getDate()) + '-' + '0' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                        }
                    }
                }
            },
            {
                data: 'receivedDate',
                render: (data, type, row, meta) => {
                    let dataa: any = row['transferInventory'];
                    if (data == null) {
                        return '-';
                    }
                    if (dataa.statusId.id == 5) {
                        if (new Date(data).getDate() > 10) {
                            if ((new Date(data).getMonth() + 1) > 10) {
                                return (new Date(data).getDate()) + '-' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                            }
                            else {
                                return (new Date(data).getDate()) + '-' + '0' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                            }
                        }
                        else {
                            if ((new Date(data).getMonth() + 1) > 10) {
                                return '0' + (new Date(data).getDate()) + '-' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                            }
                            else {
                                return '0' + (new Date(data).getDate()) + '-' + '0' + (new Date(data).getMonth() + 1) + '-' + new Date(data).getFullYear();
                            }
                        }
                    } else {
                        return '-'
                    }
                }
            },
            {
                data: 'skuList'
            },
            {
                data: 'transferInventory.comments',
                render: (data) => {
                    if (data == null) {
                        return '-';
                    } else {
                        return data;
                    }
                }
            },
            {
                orderable: false,
                className: 'editcenter',
                "render": (data, type, row, meta) => {
                    if (row['transferInventory'].statusId.status == 'Packing completed') {
                        if (row['fromFacility'] == sessionStorage.getItem('facilityId')) {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="package_view"> <i class="fa fa-eye"></i></a>/<a class="inventory_dispatch">Dispatch</a>/<a class="inventory_documents"> <i class="fa fa-download"></i></a>'
                        } else {
                            return '<a class="package_view"> <i class="fa fa-eye"></i></a>'
                        }
                    } else if (row['transferInventory'].statusId.status == 'Scanning In Progress') {
                        if (row['fromFacility'] == sessionStorage.getItem('facilityId')) {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="package_view"> <i class="fa fa-eye"></i></a>/<a class="inventory_documents"> <i class="fa fa-download"></i></a>'
                        } else {
                            return '<a class="package_view"> <i class="fa fa-eye"></i></a>/<a class="inventory_documents"> <i class="fa fa-download"></i></a>'
                        }
                    } else if (row['transferInventory'].statusId.status == 'Package-In-Transit') {
                        return '<a class="package_view"> <i class="fa fa-eye"></i></a>/<a class="inventory_tracking"> <i class="fa fa-map"></i></a>/<a class="inventory_documents"> <i class="fa fa-download"></i></a>'
                    } else if (row['transferInventory'].statusId.status == 'Package Received') {
                        return `<a class="package_view"> <i class="fa fa-eye"></i></a>
                         /<a class="inventory_documents"> <i class="fa fa-download"></i></a>`
                    } else if ((row['transferInventory'].statusId.status == 'Package Created')) {
                        if (row['fromFacility'] == sessionStorage.getItem('facilityId')) {
                            return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="package_view"> <i class="fa fa-eye"></i></a>'
                        } else {
                            return '<a class="package_view"> <i class="fa fa-eye"></i></a>'
                        }
                    }
                    else {
                        return '<a class="package_view"> <i class="fa fa-eye"></i></a>'
                    }
                }
            }
        ],
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
        "columnDefs": [
            {
                "targets": [7],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [8],
                "visible": false,
                "searchable": true
            },
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            const self = this;
            $('td', row).unbind('click');
            $('a.editor_edit', row).bind('click', () => {
                self.editPackage(data);
            });

            $('a.package_view', row).bind('click', () => {
                self.packageView(data);
            });
            $('a.inventory_dispatch', row).bind('click', () => {
                self.inventoryDispatch(data)
            })
            $('a.inventory_tracking', row).bind('click', () => {
                self.inventoryTracking(data)
            })

            $('a.inventory_documents', row).bind('click', () => {
                self.sendingEmail(data)
            })
            // $('a.editor_remove', row).bind('click', () => {
            //     this.lgModal.show();
            //     this.packageName = data.name;
            //     this.deleteData = data;
            //     this.deleteRow = row;
            //   });
            return row;
        },
    };
    public editPackage(data: any) {
        const link = ['/shipping/update', data.transferInventory.id, data.transferInventory.packageName];
        this.router.navigate(link);
    }

    packageView(data) {
        const link = ['./shipping/package', data.transferInventory.packageName, data.transferInventory.id];
        this.router.navigate(link);
    }

    inventoryDispatch(data) {
        const link = ['./shipping/package/dispatch', data.transferInventory.packageName, data.transferInventory.id];
        this.router.navigate(link);
    }
    trackingpopUpDetails: any = {};
    selectedPackageId: any;
    inventoryTracking(data) {
        this.selectedPackageId = data.transferInventory.id;
        this.shippingService.getTransportDetailsByPackageId(data.transferInventory.id).subscribe((data: any) => {
            if (data.error == null) {
                this.trackingpopUpDetails = data.data;
                this.transportModal.show()
            } else {
                alert(data.error.message)
            }
        })
        // const link = ['./shipping/tracking', data.id];
        // this.router.navigate(link);
    }

    viewTracking(trackingNumber) {
        this.transportModal.hide()
        const link = ['./shipping/tracking', trackingNumber];
        this.router.navigate(link);
    }


    packageRcvngMsg: any = '';
    comments: any = '';
    commentsError: any;
    loaderbtn = false; cancel = false;
    packageReceived() {
        this.commentsError = false;

        if (this.comments.length > 10 && this.comments.length < 200) {
            this.loaderbtn = true;
            this.cancel = true;
            this.shippingService.packageReceived(this.selectedPackageId, this.comments).subscribe((data: any) => {
                if (data.error == null) {
                    this.packageRcvngMsg = 'Package Added to Inventory';
                    this.comments = '';
                    this.loaderbtn = false;
                    this.cancel = false;
                    this.transportModal.hide();
                    setTimeout(() => {
                        this.packageRcvngMsg = '';
                        this.loadingView();
                    }, 2000);
                } else {
                    this.loaderbtn = false;
                    this.cancel = false;
                    alert(data.error.message);
                    this.packageRcvngMsg = data.error.message;
                }
            })
        } else {
            this.commentsError = true;
            setTimeout(() => {
                this.commentsError = false;
            }, 3000);
        }
    }
    sucessMsg: any = '';
    errorMsg: any = '';
    sendingEmail(data: any) {
        this.loading = true;
        this.shippingService.downloadDocuments(sessionStorage.getItem('userData'), data.transferInventory.id).subscribe((data: any) => {
            if (data.data !== null) {
                this.sucessMsg = 'Documents emailed successfully';
                this.loading = false;
                setTimeout(() => {
                    this.sucessMsg = '';
                }, 3000)
            } else {
                this.errorMsg = data.error.message;
                this.loading = false;
                setTimeout(() => {
                    this.errorMsg = '';
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

