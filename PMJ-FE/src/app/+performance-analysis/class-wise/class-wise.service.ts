import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ClassWiseService {

    constructor(public readonly _http: HttpClient) {
    }

    public getAllClassesData(obj, locationId) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `forAllClasses/${locationId}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }

    public getSingleClassData(obj, locationId, Class) {
        return this._http.get(environment.PERFORMANCE_ANALYSIS + `forEachClass/${locationId}/${Class}/${obj.startDate}/${obj.endDate}`).map(response =>
            response
        );
    }
}
