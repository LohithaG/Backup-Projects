import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../../environments/endpoint';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ReportsService {

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    constructor(private readonly http: HttpClient) { }

    getOrderDetailsbyInvoice(id) {
        return this.http.get(`${endponitConfig.MBB_ORDERS}getOrderDetails/${id}`, { headers: this.headers }).map((response: any) => response);
    }

    getProductTrackList(sku, statusId) {
        return this.http.get(`${endponitConfig.INVENTORY_ENDPOINT}getCountBasedOnFacility/${sku}/${statusId}`, { headers: this.headers }).map((response: any) => response);
    }

    getLocationWiseProductDetails(sku, statusId, facilityId) {
        return this.http.get(`${endponitConfig.INVENTORY_ENDPOINT}getItemsBasedOnSkuCode/${sku}/${statusId}/${facilityId}`, 
        { headers: this.headers }).map((response: any) => response);
    }

    getOrderDetailsbyInvoiceNo(id) {
        return this.http.get(`${endponitConfig.DISPATCH_ENDPONT}getByInvoiceNo/${id}`, { headers: this.headers }).map((response: any) => response);
    }
    getSKUImage(skuCode){
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT +`getInventoryImage/${skuCode}`, { headers: this.headers })
        .map((response: any) => response);
    }

    private subject = new BehaviorSubject<any>(null);

    sendObject(event:any) {
        this.subject.next(event);
    }
 
    clearObject() {
        this.subject.next(null);
    }
 
    getObject(): Observable<any> {
        return this.subject.asObservable();
    }
}


