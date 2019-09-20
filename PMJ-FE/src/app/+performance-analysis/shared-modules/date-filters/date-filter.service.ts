import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DateDataFilterService {

    constructor(public readonly _http: HttpClient) {
    }

    getLocationDetails() {
        return this._http.get(environment.LOCATIONS + `getbychannel/SHW`)
            .map(response => { return response })
    }

    getSalesPersonDetails(id) {
        return this._http.get(environment.EMPLOYEES + `getbylocation/${id}`)
            .map(response => { return response })
    }
}
