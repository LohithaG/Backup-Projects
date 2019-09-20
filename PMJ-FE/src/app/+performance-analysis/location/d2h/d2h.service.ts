import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class D2HService {

    constructor(public readonly _http: HttpClient) {
    }

    public getAllStatesData(obj) {

        return this._http.get(environment.PERFORMANCE_ANALYSIS + `forAllD2H/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getSingleStateClustersData(obj, state) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `D2HState/${state} /${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }


    public getSingleClusterLocationsData(obj, state, cluster) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `D2HCluster/${state}/${cluster}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getLocationWiseTeams(obj, location) {

        return this._http.get(environment.PERFORMANCE_ANALYSIS + `D2HLocation/${location}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

}
