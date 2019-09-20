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
import { Router } from '@angular/router';
import { endponitConfig } from '../../../../environments/endpoint';
import { ModalDirective } from 'ngx-bootstrap';
import { ReportsService } from '../reports.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-inventory-details',
    templateUrl: './inventory.component.html',
})

export class InventoryComponent {
    loading = false;
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @ViewChild('skuModal') public skuModal: ModalDirective;

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    constructor(private readonly http: HttpClient, private readonly _sanitizer: DomSanitizer, public router: Router, public reportsService: ReportsService) {
    }
    locationDetails = [{ id: 0, location_name: 'All' }, { id: 1, location_name: 'HYDERABAD' }, { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]
    skuStatuses = [{ id: 1, status: 'ACTIVE' }, { id: 0, status: 'IN-ACTIVE' }];
    skuStatus: any = 1;
    ngOnInit() {
    }
    private InventoryDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    textCenter = "text-center";
    dataTableId = '#inventoryDataTable table';
    inventoryDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.loading = true;
            this.http.get(`${endponitConfig.INVENTORY_ENDPOINT}getBasedOnFacility/${this.locationId}/${this.skuStatus}`,
                { headers: this.headers })
                .map(this.InventoryDetailsData)
                .catch((error: any) => {
                    return Observable.throwError(error);
                })
                .subscribe((jsondata) => {
                    this.loading = false;
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        "columnDefs": [
            {
                targets: [0],
                render: (data, type, row, meta) => {
                    if (type === 'sort') {
                        const char = data.slice(0, 1);
                        if (char === '0') {
                            return `"${data}"`
                        }
                        return data
                    }
                    return data;
                },
            },
            {
                "targets": [1],
                "visible": false,
            },
            {
                "targets": [6],
                "visible": false,
            },

        ],
        columns: [
            { data: 'skuCode', responsivePriority: 1 },
            {
                data: 'productName',
                responsivePriority: 2
            },
            {
                data: 'SKUImage',
                responsivePriority: 3, className: 'text-center',
                'render': (data, type, full, meta) => {
                    if (data != null) {
                        return '<a><img class="sku_view" id="hover_view" src="data:image/png;base64,' + data + '" /></a>';
                    } else {
                        return '-';
                    }
                }
            },
            {
                data: 'inventory',
                "className": this.textCenter,
                responsivePriority: 4,
                render: (data, type, row, meta) => {
                    if (data == null) {
                        data = 0;
                        data = `<a class="ad">${data}</a>`;
                        return data
                    } else {
                        if (data < row['thresholdLevel']) {
                            if (data === 0) {
                                data = `<a class="ad">${data}</a>`;
                            } else {
                                data = `<a class="ad available_details">${data}</a>`;
                            }
                        } else {
                            data = `<a class="available_details"> ${data}</a>`;
                        }
                        return data;
                    }
                }
            },
            {
                data: 'pendingQcAccessment',
                "className": this.textCenter,
                responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        data = 0;
                        data = `<a class="pc">${data}</a>`;
                        return data
                    } else {
                        if (data < 5) {
                            if (data === 0) {
                                data = `<a class="pc"> ${data}</a>`;
                            } else {
                                data = `<a class="pc pQC_details"> ${data}</a>`;
                            }
                        } else {
                            data = `<a class="pQC_details"> ${data}</a>`;
                        }
                        return data;
                    }
                }
            },
            {
                data: 'badInventory',
                "className": this.textCenter,
                responsivePriority: 6,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        data = 0;
                        data = `<a class="pc">${data}</a>`;
                        return data
                    } else {
                        if (data < 5) {
                            if (data === 0) {
                                data = `<a class="pc"> ${data}</a>`;
                            } else {
                                data = `<a class="pc bi_details">${data}</a>`;
                            }
                        } else {
                            data = `<a class="bi_details"> ${data}</a>`;
                        }
                        return data;
                    }
                }
            },
            {
                data: 'barcodeId',
                "className": this.textCenter,
                responsivePriority: 7
            },
            {
                data: 'inTransitCount',
                responsivePriority: 8,
                "className": this.textCenter,
                "render": (data, type, row, meta) => {
                    if (data == null || data === 0) {
                        data = 0;
                        data = `<a>${data}</a>`;
                        return data
                    } else {
                        data = `<a class="scanned_details"> ${data}</a>`;
                        return data;
                    }
                }
            },
            {
                data: 'pendingApprovalCount',
                responsivePriority: 9,
                "className": this.textCenter,
                "render": (data, type, row, meta) => {
                    if (data == null || data === 0) {
                        data = 0;
                        data = `<a>${data}</a>`;
                        return data
                    } else {
                        data = `<a class="pending_details"> ${data}</a>`;
                        return data;
                    }
                }
            }
        ],
        buttons: [{
            text: '<i class="fa fa-refresh"></i> Refresh',
            className: 'moreColumns',
            action: (e, dt, node, config) => {
                if ($.fn.DataTable.isDataTable(this.dataTableId)) {
                    this.loadingView()
                }
            }
        },
        { extend: 'colvis', text: 'More Columns', className: 'moreColumns' },
        {
            extend: 'csv',
            text: '<i class="fa fa-file-o"> CSV Download</i>',
            exportOptions: {
                orthogonal: 'sort'
            },
            filename: () => { return this.getExportFileName(); }
        },
        ],
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('a.available_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'available')
            });
            $('a.pQC_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'pendingqc')
            });
            $('a.bi_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'blocked')
            });
            $('a.blocked_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'blocked')
            });
            $('a.scanned_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'inTransitCount')
            });
            $('a.pending_details', row).bind('click', () => {
                this.goToTrackDetails(data, 'pendingApprovalCount')
            });
            $('.sku_view', row).bind('click', () => {
                this.skuImage(data);
            });

        }
    };
    getInventoryDetails() {
        this.loadingView();
    }
    productDetails;
    productDetailsStatusType: any;
    ProductDetailsTitle: any;
    inventoryCount;
    goToTrackDetails(obj, statusType) {
        if (statusType === 'available') {
            this.statusType = 'commonColumns'
            this.inventoryCount = obj.inventory;
            this.getServiceData(obj.skuCode, 1, this.locationId);
            this.ProductDetailsTitle = 'Available Product Details';
        } else if (statusType === 'pendingqc') {
            this.statusType = 'commonColumns'
            this.ProductDetailsTitle = 'PendingQC  Product Details';
            this.getServiceData(obj.skuCode, 5, this.locationId);
        } else if (statusType === 'blocked') {
            this.statusType = 'commonColumns'
            this.ProductDetailsTitle = 'BadInventory Product Details';
            this.getServiceData(obj.skuCode, 6, this.locationId);
        } else if (statusType === 'inTransitCount') {
            this.getServiceData(obj.skuCode, 8, this.locationId);
        } else if (statusType === 'pendingApprovalCount') {
            this.getServiceData(obj.skuCode, 9, this.locationId);
        }
        else {
            this.reportsService.getOrderDetailsbyInvoice(obj.invoiceId).subscribe((data: any) => {
                this.productDetails = data.data;
                this.lgModal.show()
            })
        }
    }
    prodName: any; skuCod: any; skuImg: any;
    public skuImage(skuData: any) {
        this.prodName = skuData.productName;
        this.skuCod = skuData.skuCode;
        this.reportsService.getSKUImage(this.skuCod).subscribe((data: any) => {
            if (data != null) {
                const image = data.data.productImage;
                this.skuImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image)
                this.skuModal.show();
            } else {
                alert(data.error.message)
            }
        })

    }

    statusType;
    getServiceData(sku, id, locationid) {
        // this.reportsService.getLocationWiseProductDetails(sku, id, locationid).subscribe((data: any) => {
        //     this.productDetails = data.data;
        //     this.lgModal.show()
        // })
        if (this.inventoryCount !== 0) {
            this.router.navigate(['dashboard/reports/inventory/inventory-details', sku, id, locationid])
        }
    }
    locationId: any = 0;

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
            return 'Inventory_Report_' + this.formatedDate()
        }
    }
    loadingView() {
        const table = $(this.dataTableId).DataTable();
        // table.search("").draw();
        this.loading = true;
        table.ajax.reload();
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
