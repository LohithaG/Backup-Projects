import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class InvoicesService {

    constructor(private readonly http: HttpClient) {

    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    getAllUsers() {

        return this.http.get(`${endponitConfig.USER_API_ENDPOINT}getAllUsers`, { headers: this.headers })
            .map((response: any) => response).catch(this.handleError);
    }

    public getInvoiceId(id) {
        return this.http.get(`${endponitConfig.INVOICE_DETAILS}getDetailsByInvoice/${id}`, { headers: this.headers }).map((response: any) => response);
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
