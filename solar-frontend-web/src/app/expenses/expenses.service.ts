import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { Http } from '@angular/http';
import { endponitConfig } from '../../environments/endpoints';
import 'rxjs/add/operator/map'

@Injectable()
export class Expenseservice {

    private headers: Headers;
    private diversUrl = 'app/drivers';

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('Authentication'));
        // this.headers.set('X-Auth-Token', localStorage.getItem('token'));
    }


    getExpensesId(id) {
        let URL = endponitConfig.EXPENSES_API + 'getDetailsByLoad/' + id
        return this.http.get(URL, { headers: this.headers })
            .map((response: Response) => response.json().data).catch(this.handleError);
    }

    getExpensesImagebyId(expid) {
        let URL = endponitConfig.EXPENSES_API + 'getExpenseDetails/' + expid
        return this.http.get(URL, { headers: this.headers })
            .map((response: Response) => response.json().data).catch(this.handleError);
    }

    public getLoads() {
        let getDriversURL = endponitConfig.LOAD_API_ENDPOINT + 'getAcceptedLoadList'
        return this.http.get(getDriversURL, { headers: this.headers })
            .map((response: Response) => response.json().data).catch(this.handleError);
    }

    getExpensesByloadNumber(id) {
        let URL = endponitConfig.EXPENSES_API + 'getExpensesByDriver/' + id
        return this.http.get(URL, { headers: this.headers })
            .map((response: Response) => response.json().data).catch(this.handleError);
    }

    private handleError(error: any) {
        if (error.status == 404) {
            return Observable.throw(error.json());
        } else {
            localStorage.setItem('status', '401')
            window.location.href = '/#/error';
            return Observable.throw(error.json());
        }
    }

}

