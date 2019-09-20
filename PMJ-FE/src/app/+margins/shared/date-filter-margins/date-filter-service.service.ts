import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DateFilterService {

    constructor(public readonly _http: HttpClient) {
    }
    getLocationDetailsByCluster(clusterName) {
        return this._http.get(`${environment.LOCATIONS}getlocationsByCluster/${clusterName}`)
            .map(response => { return response })
    }
    getLocationDetails() {
        return this._http.get(`${environment.LOCATIONS}getbychannel/SHW`)
            .map(response => { return response })
    }

    getSalesPersonDetails(id) {
        return this._http.get(`${environment.EMPLOYEES}getbylocation/${id}`)
            .map(response => { return response })
    }

    getAllStates() {
        return this._http.get(`${environment.LOCATIONS}getd2hgroupbyState`)
            .map(response => { return response })
    }
    getClusterDetails(id) {
        return this._http.get(`${environment.LOCATIONS}getclustersByState/${id}`)
            .map(response => { return response })
    }
}
