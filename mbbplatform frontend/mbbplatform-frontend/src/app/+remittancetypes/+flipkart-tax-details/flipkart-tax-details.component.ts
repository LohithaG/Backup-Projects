import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import * as moment from 'moment';

import { endponitConfig } from '../../../environments/endpoint';
import { RemittanceTypesService } from '../remittancetypes.service';

declare var $;
@Component({
    selector: 'flipkart-tax',
    templateUrl: './flipkart-tax-details.component.html',
})
export class FlipkartTaxComponent {
    loading = false
    constructor(public remittanceService: RemittanceTypesService,
        private readonly route: ActivatedRoute, private readonly http: HttpClient, public router: Router) {
    }

    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.id = params['id'];
                this.orderId = params['orderId'];
            } else {
                this.router.navigate(['/remittance/flipkart-cod'])
            }
        })

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
    orderId; id;
    flipkartDetails = {
        dom: 'Bfrtip', "ordering": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_REM_COD + `flipkartcodfee/gettaxes?orderItemId=${this.id}`,
                { headers: this.headers }).map(this.flipkartData)
                .subscribe((jsondata: any) => {
                    callback({ aaData: jsondata == null ? [] : jsondata })
                })
        },
        columns: [

            {
                data: 'marketPlaceFee', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    return data;
                }
            },
            {
                data: 'taxCollectedAtSource', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }
                    return data;
                }
            },
            {
                data: 'taxes', responsivePriority: 3,
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
                data: 'commissionRate', responsivePriority: 4,
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
                data: 'commission', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }

                    return data
                }
            },
            {
                data: 'collectionFee', responsivePriority: 6,
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
                data: 'fixedFee', responsivePriority: 7,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "-"
                    }

                    return data
                }
            },
            {
                data: 'reverseShippingFee', responsivePriority: 8,
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


        ],
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
            {
                extend: 'csv', text: '<i class="fa fa-file-o"> CSV Download</i>', className: 'moreColumns',
                exportOptions: {
                    orthogonal: 'export'
                },
                filename: () => { return this.getExportFileName(); }
            },
        ]
    };



    getExportFileName() {
        return 'Flipkart_Remittance_Tax_Report_' + this.formatedDate()
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
