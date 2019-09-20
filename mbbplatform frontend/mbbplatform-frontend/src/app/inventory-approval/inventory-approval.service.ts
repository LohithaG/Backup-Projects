import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class InventoryApprovalService {

    constructor(public http: HttpClient) {

    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    packageViewDetails(id) {
        return this.http.get(endponitConfig.INVENTORY_TRANSFER + `viewPackage/${id}`, { headers: this.headers })
            .map((response: any) => response);
    }

    inventoryApproval(id) {
        return this.http.put(endponitConfig.INVENTORY_ITEM_ENDPOINT + `updateApprovalstatus/${id}` , { headers: this.headers })
            .map((response: any) => response);
    }


}

