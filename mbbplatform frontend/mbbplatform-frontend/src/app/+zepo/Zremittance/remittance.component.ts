import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { endponitConfig } from '../../../environments/endpoint';

declare var $;

@Component({
    selector: 'app-remittance',
    templateUrl: './remittance.component.html',
})

export class RemittanceDetailsComponent {
    codPaybleDetails;
    getReportUrl;
    awbsDetails: any;
    details;
    loadDate = 1539549002;

    @ViewChild('lgModal') public lgModal: ModalDirective;
    constructor(private readonly http: HttpClient, public router: Router) {

    }
    ngOnInit() {
    }



    private getResponce(res) {
        return res.data;
    }
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))


    ZepoRemittance = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            //   this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getUndispatchedItems', { headers: this.headers })
            this.http.get('http://192.168.3.82:4321/assets/json/zepo/remittance.json', { headers: this.headers })
                .map(this.getResponce)
                .subscribe((jsondata) => {
                    callback({
                        aaData: jsondata,
                    })
                })
        },
        // columns: [

        //     { data: 'inventoryId.productName', responsivePriority: 1 },
        //     { data: 'inventoryId.skuCode', responsivePriority: 2 },
        //     { data: 'barcode', responsivePriority: 3 },
        //     {
        //         data: 'createdTime',
        //         responsivePriority: 4,
        //         "render": function (data, type, row, meta) {
        //             if (type === 'display') {
        //                 var date = new Date(data);
        //                 var requiredFormat = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        //                     .toISOString()
        //                     .split("T")[0];
        //                 return requiredFormat
        //             }
        //             return data;
        //         }
        //     },
        // ],
        columns: [
            { data: 'id', responsivePriority: 1 },
            { data: 'ledger', responsivePriority: 2 },
            { data: 'trackingId', responsivePriority: 3 },
            { data: 'courierName', responsivePriority: 4 },
            {
                data: 'totalAmount', responsivePriority: 5,
                "render":  (data, type, row, meta)=> {
                    return "₹ " + data
                }
            },
            { data: 'dueDate', responsivePriority: 6 },
            { data: 'deliveryDate', responsivePriority: 7 },
            { data: 'moneyReceivedDate', responsivePriority: 8 },
            { data: 'moneyReceivedFromCourierCompany', responsivePriority: 9 },
            { data: 'transferDate', responsivePriority: 10 },
            { data: 'status', responsivePriority: 11 },

            {
                data: 'createdDate', responsivePriority: 12,
                "render":  (data, type, row, meta) =>{
                    if (type === 'display') {
                        const date = new Date(data);
                        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
                            .toISOString()
                            .split("T")[0];
                        
                    }
                    return data;
                }
            },
        ],
        "aaSorting": [[1, 'desc']],
    };


}
