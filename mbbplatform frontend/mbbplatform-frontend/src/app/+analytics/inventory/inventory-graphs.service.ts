import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class AnalyticsGraphService {

    private readonly _headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));

    private readonly headers: HttpHeaders;
    constructor(public http: HttpClient) {

    }

    getAllAnalyticsDetails(s, e) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + `getInventoryDetails/${s}/${e}`, { headers: this._headers }).map(response =>
            response
        );
    }

    getAllAnalyticsDetailsWithoutDates() {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getInventoryDetails', { headers: this._headers }).map(response =>
            response
        );
    }

}

