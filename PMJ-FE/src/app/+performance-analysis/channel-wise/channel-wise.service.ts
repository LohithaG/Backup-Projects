import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ChannelWiseService {


    constructor(public readonly _http: HttpClient) {

    }

    public getAllChannelsData(obj) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `ForAllChannels/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getSingleChannelData(obj, id) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `ChannelWise/${id}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

}
