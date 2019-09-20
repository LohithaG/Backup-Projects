import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class RemittanceTypesService {

    private readonly headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));
    constructor(public http: HttpClient) {
    }
    public getCODData() {
        return this.http.get(endponitConfig.ALL_REM_BYPAY_COD + 'shiprocket/getCodremittanceAmount', { headers: this.headers }).map((response: any) => response);
    }
    public getZepoCODData() {
       return this.http.get(endponitConfig. ALL_REM_COD +'codremittance/getAllzepocodremittance', { headers: this.headers }).map((response: any) => response);
    }
    public getAllCODData() {
      return this.http.get(endponitConfig. ALL_REM_COD +'codremittance/getAllcodremittance', { headers: this.headers }).map((response: any) => response);
        
    }
    public getCRFID(id) {
        return this.http.get(endponitConfig.ALL_REM_BYPAY_COD + `shiprocket/getorderid/${id}`, { headers: this.headers }).map((response: any) => response);
    }
    public taxDetails(id){
       return this.http.get(endponitConfig.ALL_REM_COD + `flipkarttaxdetails/gettax/${id}`, { headers: this.headers }).map((response: any) => response);
    }
}



