import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class SKUService {

    private readonly headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));

   constructor(public http: HttpClient) {
    }

    getSKUDetails(skuCode) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + `getInventoryBySkuCode/${skuCode}`, { headers: this.headers })
            .map((response: any) => response);
    }
    addingSku(obj) {
        return this.http.post(endponitConfig.INVENTORY_ENDPOINT +'addInventory',obj, { headers: this.headers })
            .map((response: any) => response);
    }

    updateSku(obj,id,userId) {
        return this.http.put(endponitConfig.INVENTORY_ENDPOINT +`updateSku/${id}/${userId}`, obj, { headers: this.headers })
            .map((response: any) => response);
    }
    skuCheck(skuCode) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT +`getInventoryBySkuCode/${skuCode}`, { headers: this.headers })
            .map((response: any) => response);
    }
    getFacilities(){
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT +'getAllFacilities', { headers: this.headers })
        .map((response: any) => response);
    }
    getProductDetails(skuCode){
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT +`getInventoryImage/${skuCode}`, { headers: this.headers })
        .map((response: any) => response);
    }
    updateSkuImage(obj,skuCode) {
        return this.http.put(endponitConfig.INVENTORY_ENDPOINT +`updateInventoryPicture/${skuCode}`, obj, { headers: this.headers })
            .map((response: any) => response);
    }
    getSKUStatusCheck(skuCode,status){
        return this.http.put(endponitConfig.INVENTORY_ENDPOINT +`updateInventoryStatus/${skuCode}/${status}`,'', { headers: this.headers })
        .map((response: any) => response);
    }
    getSKUImage(skuCode){
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT +`getInventoryImage/${skuCode}`, { headers: this.headers })
        .map((response: any) => response);
    }
}

