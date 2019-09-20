import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {

    constructor(public readonly _http: HttpClient) {

    }
    public getAllLocationsData(obj) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `forAllSHW/SHW/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getSingleLocationData(obj, branch) {

        return this._http.get(environment.PERFORMANCE_ANALYSIS + `ShwWise/${branch}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
}
