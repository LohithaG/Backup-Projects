import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class TicketLocationWiseSHWService {

    constructor(public readonly _http: HttpClient) {
    }

    public getAllLocationsData(obj) {
        return this._http.get(`${environment.TICKET_SIZE}showroom/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
    public getSingleLocationData(obj, location) {
        return this._http.get(`${environment.TICKET_SIZE}byshowroomlocation/${obj.startDate}/${obj.endDate}/${location}`).map(response =>
            response
        );
    }
}
