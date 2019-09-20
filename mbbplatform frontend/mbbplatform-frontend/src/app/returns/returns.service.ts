import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class ReturnService {

    constructor(private http: HttpClient) {

    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

   
    returnView(id) {
        return this.http.get(endponitConfig.RETURNS_DETAILS_API +'returnDetails/'+ id, { headers: this.headers })
            .map((response: any) => response);
    }
    refundView(id) {
        return this.http.get(endponitConfig.RETURNS_DETAILS_API +'refundDetails/'+ id, { headers: this.headers })
            .map((response: any) => response);
    }
    addRefundDetails(refundObj) {
        return this.http.post(endponitConfig.RETURNS_DETAILS_API + 'refundDetails/addRefundDetails' , refundObj, { headers: this.headers })
            .map((response: any) => response);
    }
    getChannels() {
        return this.http.get(endponitConfig.RETURNS_DETAILS_API +'returnDetails/getAllChannels', { headers: this.headers })
            .map((response: any) => response);
    }
    getReturns() {
        return this.http.get(endponitConfig.RETURNS_DETAILS_API +'returnDetails/getAllTypeOfReturns', { headers: this.headers })
            .map((response: any) => response);
    }
    getReasons() {
        return this.http.get(endponitConfig.RETURNS_DETAILS_API +'returnDetails/getAllReturnReasons', { headers: this.headers })
            .map((response: any) => response);
    }
    addReturnDetails(returnObj,id) {
        return this.http.post(endponitConfig.RETURNS_DETAILS_API + 'returnDetails/addReturnDetails/'+id , returnObj, { headers: this.headers })
            .map((response: any) => response);
    }
}

