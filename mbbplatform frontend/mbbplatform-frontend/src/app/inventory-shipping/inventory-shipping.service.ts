import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class InventoryShippingService {

    constructor(private http: HttpClient) {

    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))


    getSKUdetails(skuCode, facility) {
        return this.http.get(endponitConfig.PACKAGE_DETAILS + 'getCountBasedOnSkuCode/' + skuCode + '/' + facility, { headers: this.headers })
            .map((response: any) => response);
    }


    addPackageSKUdetails(SKUObj, fromLocation, toLocation) {
        return this.http.post(endponitConfig.PACKAGE_DETAILS + 'addTransfer/' + fromLocation + '/' + toLocation, SKUObj, { headers: this.headers })
            .map((response: any) => response);
    }

    getPackageSKUDetails(packageId) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + '/' + packageId, { headers: this.headers })
            .map((response: any) => response);
    }

    getTranportTypes() {
        return this.http.get(endponitConfig.TRANSPORT_DETAILS + 'getAllTransportation', { headers: this.headers })
            .map((response: any) => response);

    }

    getAllFacilityTypes() {
        return this.http.get(endponitConfig.PACKAGE_DETAILS + 'getAllFacilities', { headers: this.headers })
            .map((response) => response);
    }

    addSelfTransportDetails(selfObj) {
        return this.http.post(endponitConfig.SELF_TRANSPORT + 'addSelfTransport', selfObj, { headers: this.headers })
            .map((response: any) => response);
    }
    addPrivateTransportDetails(aggrObj) {
        return this.http.post(endponitConfig.AGGGTR_TRANSPORT + 'addShippingAggregator', aggrObj, { headers: this.headers })
            .map((response: any) => response);
    }

    getTransportDetailsByPackageId(id) {
        return this.http.get(endponitConfig.INVENTORY_TRANSFER + 'getTransportType/' + id, { headers: this.headers })
            .map((response) => response);
    }


    getPackageDetailsByPackageId(id) {
        return this.http.get(endponitConfig.PACKAGE_DETAILS + 'update/' + id, { headers: this.headers })
            .map((response) => response);
    }

    updateSkuDetails(SKUObj, packageId) {
        return this.http.put(endponitConfig.PACKAGE_DETAILS + 'updatePackageDetails/' + packageId, SKUObj, { headers: this.headers })
            .map((response: any) => response);
    }


    uploadDocuments(formData, formObj) {
        return this.http.post(endponitConfig.DOCUMENTS_UPLOAD + 'addTransferDocument/', formData, { headers: this.headers })
            .map((response: any) => response);
    }


    downloadDocumentsBasedonid(id) {
        return this.http.get(endponitConfig.DOCUMENTS_UPLOAD + 'getTransferDocument/' + id, { headers: this.headers })
            .map((response: any) => response);

    }


    checkPackage(source, destination) {
        return this.http.get(endponitConfig.PACKAGE_DETAILS + 'checkPackageName/' + source + '/' + destination, { headers: this.headers })
            .map((response: any) => response);
    }

    
    packageReceived(id, comments) {
        return this.http.put(endponitConfig.INVENTORY_TRANSFER + 'UpdateStatusToReceive/' + id + '/' + comments+'/'+sessionStorage.getItem('userName'), {}, { headers: this.headers })
            .map((response: any) => response);
    }


    packageViewDetails(id) {
        return this.http.get(endponitConfig.INVENTORY_TRANSFER + 'viewPackage/' + id, { headers: this.headers })
            .map((response: any) => response);
    }

    getTrackingDetails(trakingId) {
        return this.http.get(endponitConfig.INVENTORY_TRANSFER + 'viewPackage/' + trakingId, { headers: this.headers })
            .map((response: any) => response);
    }

    downloadDocuments(email, id) {
        return this.http.get(endponitConfig.DOCUMENTS_UPLOAD + 'sendingMailForTransferInventory/' + email + '/' + id, { headers: this.headers })
            .map((response: any) => response);
    }

    deleteSKUFromPakage(id) {
        return this.http.delete(endponitConfig.PACKAGE_DETAILS + id, { headers: this.headers })
            .map((response: any) => response);
    }
}

