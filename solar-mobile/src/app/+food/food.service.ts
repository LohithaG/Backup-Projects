import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { endponitConfig } from '../../environments/endpoints';

@Injectable()
export class FoodServices{
    public headers:Headers;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Authorization',  localStorage.getItem('Authentication'));
        this.headers.append('Content-Type', 'application/json');
    }
    getFoodCourts(){
        return this.http.get(endponitConfig.SOLAR_LOAD_ENDPOINT+'foodcourt/',{headers:this.headers})
        .map((response: Response) => response.json());
    }
    private handleError(error: any) {
        localStorage.setItem('status', '401')
        // 401 unauthorized response so log user out of client
        window.location.href = '/#/error';


        return Observable.throw(error._body);
    }

}
