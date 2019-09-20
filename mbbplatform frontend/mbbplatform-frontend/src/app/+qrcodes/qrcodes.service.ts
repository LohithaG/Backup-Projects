import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class QRCodesService {


    private readonly _headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")));
    constructor(public http: HttpClient) {

    }


    GenerateQRcodes(sku, count) {
        return this.http.get(`${endponitConfig.BARCODES_ENDPOINT}zixing/${sku}/${count}`, { headers: this._headers })
            .map(response => response);
    }

    getAllSkuCodes() {
        return this.http.get(`${endponitConfig.MBB_INVENTORY}inventory/getAllSkusBasedOnSorting`, { headers: this._headers })
            .map(response => response);
    }

    retrieveQrCodes(skuCode) {
        return this.http.get(`${endponitConfig.BARCODES_ENDPOINT}reprint${skuCode}`, { headers: this._headers })
            .map(response => response);
    }

    printQrcode(qrCodesdata) {
        return this.http.post(`${endponitConfig.BARCODES_ENDPOINT}qrcodeList`, qrCodesdata, { headers: this._headers })
            .map(response => response);
    }

}
