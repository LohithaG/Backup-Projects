import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { endponitConfig } from '../environments/endpoints';
import { globalArray } from './globalData';

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class ProductService {
    public headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    getProductById(id) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getInventoryBySkuCode/' + id, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getProductByBarcodeId(id) {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getInventoryItemsByBarcode/' + id, { headers: this.headers })
            .map((response: Response) => response.json());

    }

    getAllProductStatusTypes() {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getAllInventoryStatuses', { headers: this.headers })
            .map((response: Response) => response.json());
    }

    updateProductStatus(productId, StatusId) {
        return this.http.put(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'updateStatus/' + productId + '/' + StatusId, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    addProduct(object) {
        return this.http.post(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'addNewInventoryItem', JSON.stringify(object), { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getProductOnStatus(status) {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getItemsByStatus/' + status, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getDetailsByBarcode(barcodeId) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getDetailsbyBarcodeId/' + barcodeId, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getProductFacilityList() {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getAllFacilities', { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getProductConditionList() {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getAllConditions', { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getAllSkuCodes() {
        return this.http.get(endponitConfig.MBB_INVENTORY + 'inventory/getAllSkuCodes', { headers: this.headers })
            .map((response: Response) => response.json());
    }

    updateProduct(object) {
        return this.http.put(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'updateInventoryItem/' + object.id, JSON.stringify(object), { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getAllInventoryCondtions() {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getAllConditions', { headers: this.headers })
            .map((response: Response) => response.json());
    }
    addingSku(obj) {
        return this.http.post(endponitConfig.INVENTORY_ENDPOINT + 'addInventory', JSON.stringify(obj), { headers: this.headers })
            .map((response: Response) => response.json());
    }


    GenerateBarcodes(sku, count) {
        return this.http.get(endponitConfig.BARCODES_ENDPOINT + 'zixing/' + sku + '/' + count, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    reprintBarcodesList(id) {
        return this.http.get(endponitConfig.BARCODES_ENDPOINT + 'reprint/' + id, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    printBarcode(barcode) {
        return this.http.get(endponitConfig.BARCODES_ENDPOINT + 'qrcode/' + barcode, { headers: this.headers })
            .map((response: Response) => { response.json() });
    }

    getStatusByInventoryCondition(id) {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getStatusBasedONCondition/' + id, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getAllBarcodes() {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getAllBarcodes', { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getDetailsBySkuId(skuValue) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getInventoryBySkuCode/' + skuValue, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    checkingBarcode(id) {
        return this.http.get(endponitConfig.INVENTORY_ITEM_ENDPOINT + 'getInventoryItemsByBarcode/' + id, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    getCheckListBySKu(sku) {
        return this.http.get(endponitConfig.DISPATCH_ENDPONT + 'getAccessoriesBySkuCode/' + sku, { headers: this.headers })
            .map((response: Response) => response.json());
    }

    addDispatch(obj) {
        return this.http.post(endponitConfig.DISPATCH_ENDPONT + 'addDispatch', JSON.stringify(obj), { headers: this.headers })
            .map((response: Response) => response.json());
    }

    addCheckList(obj) {
        return this.http.post(endponitConfig.CHECKLIST_ENDPONT + 'addNewChecklist', JSON.stringify(obj), { headers: this.headers })
            .map((response: Response) => response.json());
    }

    updateSku(obj) {
        return this.http.put(endponitConfig.INVENTORY_ENDPOINT + 'updateSku/' + obj.id, JSON.stringify(obj), { headers: this.headers })
            .map((response: Response) => response.json());
    }


    // storeProductData(obj) {
    //     console.log(obj)
    //     this.globalArray.push(obj)
    //     console.log(this.globalArray)
    // }

    // getStoredProductData() {
    //     return this.globalArray;
    // }

}


// localhost:1010/mbb/InventoryItem/getInventoryItemsByBarcode/{barcode}
// http://192.168.3.120:1010/mbb/inventoryItem/getInventoryItemsByBarcode/1234