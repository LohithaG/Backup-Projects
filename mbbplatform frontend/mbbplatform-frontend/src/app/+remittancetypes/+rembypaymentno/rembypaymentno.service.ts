import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class RemByPaymentNoService {


    private readonly _headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));
    constructor(public http: HttpClient) {
       
    }
 

  
}
