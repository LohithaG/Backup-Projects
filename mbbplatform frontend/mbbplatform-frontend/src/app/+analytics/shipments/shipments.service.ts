import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class ShipmentService {

    private readonly _headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));

    private readonly headers: HttpHeaders;
    constructor(public http: HttpClient) {

    }

    getAllShipmentDetails() {
        return this.http.get(endponitConfig.MBB_SHIPMENTS + 'getAllzeposrshipments', { headers: this._headers }).map(response =>
            response
        );
    }

    getShipmentsDetailsByDate(startDate, endDate) {
        return this.http.get(endponitConfig.MBB_SHIPMENTS + `getShipmentDetailsReports/${startDate}/${endDate}`, { headers: this._headers }).map(response =>
            response
        );
    }
}

