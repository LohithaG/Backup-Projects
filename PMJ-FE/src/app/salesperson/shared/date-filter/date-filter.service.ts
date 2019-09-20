import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class DateDataFilterService {

    constructor(public readonly _http: HttpClient) {
    }

    getLocationDetails() {
        return this._http.get(environment.PMJ_URL+'/pmj/location/getbychannel/SHW')
            .map(response => { return response })
            
    }

    getSalesPersonDetails(id) {
        return this._http.get(`${environment.PMJ_URL}/pmj/employee/getbylocation/${id}`)
            .map(response => { return response })
    }
}
