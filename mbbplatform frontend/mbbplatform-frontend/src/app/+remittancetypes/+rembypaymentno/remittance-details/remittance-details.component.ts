import { Component, ViewChild, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import { endponitConfig } from '../../../../environments/endpoint';
import { RemittanceTypesService } from '../../remittancetypes.service';

declare var $;
@Component({
    selector: 'remittance-details',
    templateUrl: './remittance-details.component.html',
})
export class RemittanceDetailsComponent implements OnInit {
    crfId;paymentReferenceNumber;totalAmount=0;
    constructor(public remittanceTypesService: RemittanceTypesService, private readonly route: ActivatedRoute, private readonly http: HttpClient, public router: Router) {
    }
   
    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.route.params.forEach((params: Params) => {
            this.crfId = params['data.crfid']
            this.paymentReferenceNumber = params['data.utr']
        })
    }
    twoDigits(number) {
        return (number < 10 ? '0' : '') + number;
    }
    private remByPaymentRefDetailsData(res) {
        return res;
    }
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
    remByPaytDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.ALL_REM_BYPAY_COD + `shiprocket/getorderid/${this.crfId}`, { headers: this.headers })
                .map(this.remByPaymentRefDetailsData)
                .catch(error => {
                    const errMsg = (error.message) ? error.message :
                        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
                    console.error(errMsg);
                    if (error.status === 404) {
                        error = error.json();
                        console.log(error.exception)
                        return Observable.throwError(error);
                    } else {
                        localStorage.setItem('status', '401')
                        window.location.href = '/#/error';
                        return Observable.throwError(errMsg);
                    }
                })
                .subscribe((jsondata) => {
                    const data: any = JSON.parse(jsondata[0])
                    jsondata = data.awbs
                    for (const cod of jsondata) {                     
                            this.totalAmount += parseInt(cod.total);                     
                    }
                    callback({ aaData: jsondata })
                })
        },
        columns: [
            {
                data: 'delivered_date', responsivePriority: 1,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "null";
                    }
                    if (data.length > 10 && data !== null) {
                        const date = new Date(data)
                        const dd: any = date.getDate();
                        const mm: any = date.getMonth() + 1;
                        const yyyy = date.getFullYear();
                        return `${this.twoDigits(dd)}-${this.twoDigits(mm)}-${yyyy}`;
                    }
                    return data
                }
            },
            {
                data: 'channel_order_id',
                responsivePriority: 2,
                render: (data, type, row) => {
                    if (data == null) {
                        return "null";
                    }
                    return data;
                }
            },
            {
                data: 'awb', responsivePriority: 3,
            },
            {
                data: 'courier', responsivePriority: 4,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "null"
                    }
                    return data
                }
            },
            {
                data: 'total', responsivePriority: 5,
                "render": (data, type, row, meta) => {
                    if (data == null) {
                        return "null"
                    }
                    return data
                }
            }
        ],
        buttons: [
            {
                extend: 'csv', text: '<i class="fa fa-file-pdf-o"> CSV Download</i>',
               filename: () => { return this.getExportFileName(); }
            },
        ],

    };
    getExportFileName() {
        return 'MBB-Remittance- ' + this.formatedDate()
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
