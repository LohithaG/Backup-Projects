import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
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
} 
