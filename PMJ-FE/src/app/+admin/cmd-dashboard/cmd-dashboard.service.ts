import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class TargetActaulService {
    constructor(public http: HttpClient) {
    }

    getAllSalesData(obj) {
        return this.http.get(environment.TARGET_VS_ACTUALS + `groupby/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    getAllChannelsData(obj) {
        return this.http.get(environment.PERFORMANCE_ANALYSIS + 'ForAllChannels/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        );
    }

    getAllClassesData(obj, locationId) {

        return this.http.get(environment.PERFORMANCE_ANALYSIS + 'forAllClassesAndLocations/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        )
        // return this.http.get(environment.PERFORMANCE_ANALYSIS + 'forAllClasses/' + 5 + '/' + obj.startDate + '/' + obj.endDate).map(response =>
        //     response
        // );
    }

    getAllLocationsData(obj) {
        return this.http.get(environment.PERFORMANCE_ANALYSIS + 'forAllSHW/SHW/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        );
    }

    getAllStatesData(obj) {
        return this.http.get(environment.PERFORMANCE_ANALYSIS + 'forAllD2H/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        );
    }

    getTopList(obj) {

        return this.http.get(environment.PMJ_URL + '/pmj/cmddashboard/topEmployess/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        );
    }

    getKpiInfo(obj) {
        return this.http.get(environment.PMJ_URL + '/pmj/cmddashboard/kpiblock/' + obj.startDate + '/' + obj.endDate).map(response =>
            response
        );
    }

} 
