import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class RemittanceService {


    private readonly _headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));
    constructor(public http: HttpClient) {

    }


    public getAllRemittanceDetails() {
        return this.http.get(endponitConfig.MBB_REMITTANCE + 'getAllShippingAggregatorAndStatus/all/all', { headers: this._headers }).map((response: any) => response);
    }

    getRemittanceDetailsByDate(startDate, endDate) {
        return this.http.get(endponitConfig.MBB_REMITTANCE + `getCodRemittanceReports?startDate=${startDate}&endDate=${endDate}`, { headers: this._headers })
            .map((response: any) => response);
    }
}


//192.168.3.35:2020/mbb/codremittance/getCodRemittanceReports?startDate=2018-12-17&endDate=2018-12-17

