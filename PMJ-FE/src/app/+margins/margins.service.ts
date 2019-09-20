import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class TagToSaleSHWService {
    constructor(public http: HttpClient) {

    }

    getTagToSalesData(obj) {
        return this.http.get(`${environment.PMJ_URL}/pmj/margintosalesshw/${obj.startDate}/${obj.endDate}`)
        .map(response =>
            response
        );
    }
    getTagToSalesSelectedStateDataD2H(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/margintosalesd2h/${event.stateId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getTagToSalesSelectedClusterDataD2H(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/margintosalesd2h/${event.stateId}/${event.clusterId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getTagToSaleSelectedLocationDataD2H(event) {
        return this.http.get(`${environment.PMJ_UR}/pmj/margintosalesd2h/${event.stateId}/${event.clusterId}/${event.locationId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getTagToSalesAllStatesD2HData(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/margintosalesd2h/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToSalesSHWData(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscost/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToTagSHWData(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscostotag/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToSalesSelectedStateDataD2H(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscostosalesd2h/${event.stateId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToSalesSelectedClusterDataD2H(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscostosalesd2h/${event.stateId}/${event.clusterId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToSaleSelectedLocationDataD2H(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscostosalesd2h/${event.stateId}/${event.clusterId}/${event.locationId}/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
    getCostToSalesAllStatesD2HData(event) {
        return this.http.get(`${environment.PMJ_URL}/pmj/marginscostosalesd2h/${event.range1startDate}/${event.range1endDate}`)
        .map(response =>
            response
        );
    }
}
