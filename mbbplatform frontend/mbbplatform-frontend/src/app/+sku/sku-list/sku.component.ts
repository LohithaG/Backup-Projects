import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { endponitConfig } from '../../../environments/endpoint';
import { SKUService } from '../sku.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap';

declare var $;
@Component({
    selector: 'sku-list',
    templateUrl: './sku.component.html',

})
export class SKUComponent {
    @ViewChild('lgModal') public lgModal: ModalDirective;

    loading = false;
    constructor(private readonly http: HttpClient, private readonly _sanitizer: DomSanitizer, public router: Router, private readonly skuService: SKUService, ) {
    }
    ngOnInit() {
    }
    locationDetails: any = [{ id: 0, location_name: 'ALL' },{ id: 1, location_name: 'HYDERABAD' },
    { id: 2, location_name: 'BANGALORE' }, { id: 3, location_name: 'AMAZON Flex' }]

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    private SKUDetailsData(res) {
        const body = res;
        if (body) {
            return body.data
        } else {
            return {}
        }
    }
    SKUDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.loading = true;
            this.http.get(`${endponitConfig.INVENTORY_ENDPOINT}getAllSkusBasedOnSorting/${this.facilityId}`, { headers: this.headers })
                .map(this.SKUDetailsData)
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
                data: 'skuCode', responsivePriority: 1
            },
            {
                data: 'productName', responsivePriority: 2
            },
            {
                data: 'thresholdLevel', responsivePriority: 3, "className": "text-center"
            },
            {
                data: 'serialNumberStatus', responsivePriority: 4, "className": "text-center",
                render: (data) => {
                    if (data) {
                        return '<a> <i class="fa fa-check"></i></a>'
                    } else {
                        return '<a> <i style="color:#ff9980" class="fa fa-close"></i></a>'
                    }
                }
            },
            {
                data: 'description', responsivePriority: 5,
            },
            {
                data: 'barcodeId', responsivePriority: 6
            },
            {
                data: 'SKUImage', responsivePriority: 7, className: 'text-center',
                'render': (data, type, full, meta) => {
                    if (data != null) {
                        return '<a><img class="sku_view" id="hover_view" src="data:image/png;base64,' + data + '" /></a>';
                    } else {
                        return '-';
                    }
                }
            },

            {
                data: 'enabled',
                responsivePriority: 8,
                orderable: false,
                className: 'editcenter',
                "render": (data, type, row, meta) => {
                    if (row['productImage']) {
                        return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="editor_view"> <i class="fa fa-picture-o" aria-hidden="true"></i></a>'
                    } else {
                        return '<a class="editor_edit"> <i class="fa fa-edit"></i></a>/<a class="editor_view">Add Image</a>'
                    }
                }
            }
        ],
        buttons: [
            {
                text: '<i class="fa fa-refresh"></i> Refresh',
                className: 'moreColumns btn btn-sm dataTableCustomButtonMargin',
                action: (e, dt, node, config) => {
                    if ($.fn.DataTable.isDataTable('#SKUDataTable table')) {
                        this.loadingView()
                    }
                }
            },
            { extend: 'colvis', text: 'More Columns', className: 'moreColumns', },
            {
                extend: 'csv', className: "moreColumns",
                text: '<i class="fa fa-file-o"> CSV Download</i>',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5],
                    orthogonal: 'sort'
                },
                filename: () => { return this.getExportFileName(); }
            }
        ],
        columnDefs: [
            { width: 70, targets: 0 }, { width: 350, targets: 1 }, { width: 80, targets: 2 }, { width: 80, targets: 3 },
            { width: 500, targets: 4 }, { width: 90, targets: 5 }, { width: 50, targets: 6 }, { width: 100, targets: 7 },
            {
                targets: [0],
                render: (data, type, row, meta) => {
                    if (type === 'sort') {
                        const char = data.slice(0, 1);
                        if (char === 0) {
                            return `"${data}"`
                        }
                        return data
                    }
                    return data;
                },
            },
            {
                "targets": [4],
                "visible": false,
                "searchable": true
            },
            {
                "targets": [5],
                "visible": false,
                "searchable": true
            },]
        ,
        rowCallback: (row: Node, data: any | Object, index: number) => {
            $('td', row).unbind('click');
            $('a.editor_edit', row).bind('click', () => {
                this.editSKU(data);
            });
            $('a.editor_view', row).bind('click', () => {
                this.viewImage(data);
            });
            $('.sku_view', row).bind('click', () => {
                this.skuImage(data);
            });

            $('a.editor_remove', row).bind('click', () => {
                if (data.id === Number(localStorage.getItem('userData'))) {
                    window.alert('Logged in user can not be deleted')
                }
            });
            return row;
        },
    };

    public editSKU(skuData: any) {
        const link = ['/sku/update', skuData.skuCode];
        this.router.navigate(link);
    }
    public viewImage(skuData: any) {
        const link = ['/sku/view', skuData.skuCode];
        this.router.navigate(link);
    }
    skuImg: any; prodName: any; skuCod: any;
    public skuImage(skuData: any) {
        this.prodName = skuData.productName;
        this.skuCod = skuData.skuCode;
        this.skuService.getSKUImage(this.skuCod).subscribe((data: any) => {
            if (data != null) {
                const image = data.data.productImage;
                this.skuImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + image)
                this.lgModal.show();
            } else {
                alert(data.error.message)
            }
        })
        // this.skuImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + skuData.SKUImage)
        //    this.lgModal.show();
    }
    getExportFileName() {
        return 'SKU_Report_' + this.formatedDate()
    }
    loadingView() {
        const table = $('#SKUDataTable table').DataTable();
        table.search("").draw();
        this.loading = true;
        setTimeout(() => {
            this.loading = false
            table.ajax.reload();
        }, 1000);
    }
    facilityId = 0;
    getLocationDetails() {
        this.loadingView();
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
