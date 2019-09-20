import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Injectable()
export class TicketLocationWiseD2HService {

    constructor(public readonly _http: HttpClient) {
    }

    public getAllStatesData(obj) {
        return this._http.get(`${environment.TICKET_SIZE}d2hstates/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
  
    public getAllClustersData(obj, state) {
        return this._http.get(`${environment.TICKET_SIZE}d2hcluster/${obj.startDate}/${obj.endDate}/${state}`).map(response =>
            response
        );
    }
    public getAllLocationsData(obj,cluster,state){
        return this._http.get(`${environment.TICKET_SIZE}d2hlocation/${obj.startDate}/${obj.endDate}/${cluster}/${state}`).map(response =>
            response
        );
    }
    public getTeamData(obj,location){
        return this._http.get(`${environment.TICKET_SIZE}d2hteam/${obj.startDate}/${obj.endDate}/${location}`).map(response =>
            response
        );
    }
}
