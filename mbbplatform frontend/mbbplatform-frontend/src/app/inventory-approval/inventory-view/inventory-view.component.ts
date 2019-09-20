import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { endponitConfig } from '../../../environments/endpoint';
declare var $;
import { InventoryApprovalService } from '../inventory-approval.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'inventory-view',
    templateUrl: './inventory-view.component.html',
})

export class InventoryApprovalViewComponent implements OnInit {


    constructor(
        public _shippingService: InventoryApprovalService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _sanitizer: DomSanitizer,
        private router: Router,
        private cdr: ChangeDetectorRef) {
    }
    packageId: any = '';
    packageName: '';
    packageSKUDetails: any = [];
    trackingDetails: any = {};
    downloadDocuments: any = [];
    id;
    poName: any;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.id = params['poNumber'];
            this.poName = params['poName']
        });
    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    PackageDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'viewInventoryApproval/' + this.id, { headers: this.headers })
                .subscribe((jsondata: any) => {
                    jsondata = jsondata.data;
                    callback({ aaData: jsondata == null ? [] : jsondata.barcodeDetails })
                })
        },
        columns: [

            {
                data: 'skuCode',
            },
            {
                data: 'barCode',
            },
            {
                data: 'productName',
            },
            {
                data: 'facility'
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
                extend: 'csv', className: "moreColumns",
                text: '<i class="fa fa-file-o"> CSV Download</i>',
                exportOptions: {
                    orthogonal: 'sort'
                },
                filename: () => { return this.getExportFileName(); }

            }
        ],

    };
    loading = false;
    loadingView() {
        var table = $('#DataTable table').DataTable();
        table.search("").draw();
        this.loading = true;
        setTimeout(() => {
            this.loading = false
            table.ajax.reload();
        }, 1000);
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



