import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class VendorService {

    constructor(private readonly http: HttpClient) {
    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    getAllVendors() {
        return this.http.get(endponitConfig.VENDORS_API_ENDPOINT_NEW + 'getAllDetails', { headers: this.headers })
            .map((response: any) => response).catch(this.handleError);
    }

    deleteVendor(vendorId) {

        return this.http.delete(endponitConfig.VENDORS_API_ENDPOINT_NEW + vendorId, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    updateVendor(vendorDetails) {
        return this.http.put(endponitConfig.VENDORS_API_ENDPOINT_NEW + `updateVendor/${vendorDetails.id}`, vendorDetails, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    addVendor(vendorDetails) {
        return this.http.post(endponitConfig.VENDORS_API_ENDPOINT_NEW + 'addDetails', vendorDetails, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }



    /**
  * This method gets  user details based on user Id
  */
    public getVendorDetailsByID(vendorId: string) {

        return this.http.get(endponitConfig.VENDORS_API_ENDPOINT_NEW + vendorId, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    private handleError(error: any) {
        if (error.status === 404) {
            localStorage.setItem('status', '500')
            return Observable.throwError(error.json());
        } else {
            localStorage.setItem('status', '401')
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return Observable.throwError(error._body);
        }
    }




}


export class VendorData {
    constructor() { }
    public id: string;

}
export class Roles {
    public id: number;
    public name: string
}
