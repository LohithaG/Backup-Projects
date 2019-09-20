import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import { endponitConfig } from '../../../environments/endpoint';
import { ShipmentsService } from '../shipments.service';

declare var $;
@Component({
    selector: 'shipments-details',
    templateUrl: './shipments-details.component.html',
    styles: [`  `]
})
export class ShipmentsDetailsComponent {
   
   
    constructor(private readonly shipmentsService: ShipmentsService, private readonly route: ActivatedRoute, private readonly http: HttpClient, public router: Router) {
    }
    trackingNo;
    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.route.params.forEach((params: Params) => {
            this.trackingNo = params['data.trackingNo']
          
        })
    }
    twoDigit(number) {
        return (number < 10 ? '0' : '') + number
    }
    private shipmentsData(res) {
        return res.data;
    }
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    shipments = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_SHIPMENTS_COD+`zepoSRShipments/getTrackingDetails/${this.trackingNo}`, { headers: this.headers })
                .subscribe((jsondata: any) => {
                    jsondata=jsondata.data
                    callback({
                        aaData: jsondata,
                    })
                })
        },

        columns: [
            {
                data: 'orderDate', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data === null) {
                        return 'null'
                    }
                    data = data.toString().split("-").reverse().join("-");
                    if (type === 'display' || type === 'filter') {
                        return data;
                    }
                    return data.toString().split("-").reverse().join("-");

                }
            },
            {
                data: 'status', responsivePriority: 2,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "null";
                    }
                    return data;
                   
                },
            },
            {
                data: 'orderId', responsivePriority: 3,
                "render": (data, type, row, meta) => {
                    if (data == null) {

                        return "null";
                    }
                    if (data.split('').pop() === '-' && data !== null) {
                        const str = data.split("");
                        str.pop();
                        return str.join("");
                    }
                    return data;
                }
            },
            {
                data: 'paymentMode', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                   
                    return data;
                }
            },
           
          
            
    
            {
                data: 'dispatchDate', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "null";
                    }
                    if (data.length > 10 && data !== null) {
                        const date = new Date(data)
                        const dd: any = date.getDate();
                        const mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        return `${this.twoDigit(dd)}-${this.twoDigit(mm)}-${yyyy}`;
                    }
                    return data
                }
            }
           
           
        ],
        buttons: [
        {
            extend: 'csv', className: 'moreColumns', title: "Shipment " + new Date().toLocaleDateString(), text: '<i class="fa fa-file-o"> CSV Download</i>',
           
            filename: () => { return this.getExportFileName(); }
        },
        ]
       
    };
    getExportFileName() {
      
            return 'MBB-Shipments- ' + this.formatedDate()
        
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
