import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class ConversionD2HService {

    constructor(public readonly _http: HttpClient) {
    }

    public getAllStatesData(obj) {
        return this._http.get(`${environment.D2H_CONVERSION_FACTOR}forAllD2H/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
    public getSingleStateClustersData(obj,state) {
        return this._http.get(`${environment.D2H_CONVERSION_FACTOR}D2HState/${state}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getSingleClusterLocationsData(obj,cluster) {
        return this._http.get(`${environment.D2H_CONVERSION_FACTOR}getlocationWise/${cluster}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getLocationWiseTeams(obj,location) {
      return this._http.get(`${environment.D2H_CONVERSION_FACTOR}getTeamWise/${location}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
}
