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
    selector: 'app-shipment',
    templateUrl: './shipments.component.html',
})

export class ShipmentDetailsComponent {
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


    ZepoShipments = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            //  this.http.get(endponitConfig.MBB_ZEPOSHIPMENTS + 'getAllZepoShipment', { headers: this.headers })
            this.http.get('http://192.168.3.82:4321/assets/json/zepo/shipments.json', { headers: this.headers })
                .map(this.getResponce)
                .subscribe((jsondata) => {
                    callback({
                        aaData: jsondata,
                    })
                })
        },
        columns: [
            { data: 'trackingNo', responsivePriority: 1 },
            { data: 'courierName', responsivePriority: 2 },
            { data: 'orderNumber', responsivePriority: 3 },
            { data: 'shipmentId', responsivePriority: 4 },
            { data: 'deliveryCompanyName', responsivePriority: 5 },
            { data: 'pickupNumber', responsivePriority: 6 },
            { data: 'trackingStatus', responsivePriority: 7 },
            { data: 'paymentMode', responsivePriority: 8 },
            {
                data: 'requestDate', responsivePriority: 9,
                "render":  (data, type, row, meta)=> {
                    if (type === 'display') {
                        const date = new Date(data);
                        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
                            .toISOString()
                            .split("T")[0];
                      
                    }
                    return data;
                }
            },
            {
                data: 'createdDate', responsivePriority: 10,
                "render":  (data, type, row, meta)=> {
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
