import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class POService {

    constructor(private http: HttpClient) {
    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    getAllVendors() {
        return this.http.get(endponitConfig.VENDORS_API + 'getAllDetails', { headers: this.headers })
            .map((response: any) => response)
    }

    getStatusList(){
        return this.http.get(endponitConfig.VENDORS_API_ENDPOINT+'getAllPurchaseInvoiceStatus',{headers:this.headers})
        .map((responce:any)=>responce)
    }

    updatePoStatus(poId,poStatus,stockRecievedDate){
        return this.http.get(`${endponitConfig.VENDORS_API_ENDPOINT}updatePOStatus/${poId}/${poStatus}/${stockRecievedDate}`,{headers:this.headers})
        .map(res=>{return res}) 
    }

    getAllPoDetails() {
        return this.http.get(endponitConfig.VENDORS_API_ENDPOINT + 'getAllPoDetails', { headers: this.headers })
            .map((response: any) => response)
    }

    getDetailsbyPO(id) {
        return this.getAllPoDetails().toPromise().then(pos => pos.data.find(pos => pos.ponumber == id))
    }

    addPoDetails(poDetails) {
        return this.http.post(endponitConfig.VENDORS_API_ENDPOINT + 'addPoVendor', poDetails, { headers: this.headers })
            .map(res => { return res })
    }

    addpoBankDetails(poBankDetails) {
        return this.http.post(endponitConfig.BANK_DETAILS + 'addDetails', poBankDetails, { headers: this.headers })
            .map(res => { return res })
    }

    getAllBankDetails() {
        return this.http.get(endponitConfig.BANK_DETAILS + 'getAllDetails', { headers: this.headers })
            .map(res => { return res })
    }

    getBankDetailsPoVendorId(poVendorId) {
        return this.http.get(endponitConfig.BANK_DETAILS + 'getByPO/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    deleteBankDetailsPoVendorId(poVendorId) {
        return this.http.delete(endponitConfig.BANK_DETAILS + 'deleteDetails/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    addOtherChargesDetails(otherChargesDetails) {
        return this.http.post(endponitConfig.OTHER_CHARGES + 'addDetails', otherChargesDetails, { headers: this.headers })
            .map(res => { return res })
    }

    getOtherChargesDetailsPoVendorId(poVendorId) {
        return this.http.get(endponitConfig.OTHER_CHARGES + 'getByPO/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    deleteOtherChargesPoVendorId(poVendorId) {
        return this.http.delete(endponitConfig.OTHER_CHARGES + 'deleteDetails/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    addPriceDetails(priceid, poVendorId, postObjArray) {
        return this.http.post(endponitConfig.PRICE_DETAILS + 'calculatingPrices/' + priceid + '/' + poVendorId, postObjArray, { headers: this.headers })
            .map(res => { return res })
    }

    getPriceDetailsPoVendorId(poVendorId) {
        return this.http.get(endponitConfig.PRICE_DETAILS + 'getByPO/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    // deletePriceDetailsPoVendorId(poVendorId) {
    //     return this.http.delete(endponitConfig.VENDOR_ITEM_DETAILS + poVendorId, { headers: this.headers })
    //         .map(res => { return res })
    // }
    deletePriceDetailsPoVendorId(poVendorId) {
        return this.http.delete(endponitConfig.PRICE_DETAILS + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    getAllPurchasePoDetails(poVendorId) {
        return this.http.get(endponitConfig.PRICE_DETAILS + 'getAllPoDetails/' + poVendorId, { headers: this.headers })
            .map(res => { return res })
    }

    getAllDetails() {
        return this.http.get(endponitConfig.PRICE_DETAILS + 'getAllDetails', { headers: this.headers })
            .map(res => { return res })
    }

    getSKUdetails(skuCode) {
        return this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getInventoryBySkuCodeandActiveStatus/' + skuCode, { headers: this.headers })
            .map((response: any) => response);
    }

    addpoItemDetails(poItemDetails) {
        return this.http.post(endponitConfig.VENDOR_ITEM_DETAILS + 'addVendorItemDetails', poItemDetails, { headers: this.headers })
            .map(res => { return res })
    }
    updatepoItemDetails(poItemupdateDetails, id) {
        return this.http.put(endponitConfig.VENDORS_API_ENDPOINT + 'updatePoVendor/' + id, poItemupdateDetails, { headers: this.headers })
            .map(res => { return res })
    }

    getAllUsers(): Observable<UserData[]> {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + 'getAllUsers', { headers: this.headers })
            .map((response: any) => response)
    }

    deleteUser(userId: any) {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + 'deleteUser/' + userId, { headers: this.headers })
            .map(res => { return res })
    }

    updateVendor(vendorDetails) {
        return this.http.put(endponitConfig.VENDORS_API_ENDPOINT + 'updatePovendor/' + vendorDetails.id, vendorDetails, { headers: this.headers })
            .map(res => { return res })
    }

    addVendor(vendorDetails) {
        return this.http.post(endponitConfig.VENDORS_API_ENDPOINT + 'addPovendor', vendorDetails, { headers: this.headers })
            .map(res => { return res })
    }

    deleteVendorItemList(id) {
        return this.http.delete(endponitConfig.VENDOR_ITEM_DETAILS + id, { headers: this.headers })
            .map((response: any) => response)
    }

    getAllUserRoleTypes() {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + 'getAllRoles', { headers: this.headers })
            .map((response: any) => response)
    }


    public getVendorDetailsByID(vendorId) {
        return this.http.get(endponitConfig.VENDORS_API_ENDPOINT + vendorId, { headers: this.headers })
            .map((response) => response)
    }
}


export class UserData {
    constructor() { }
    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public active: boolean;
    public roles: roles[]
}
export class roles {
    public id: number;
    public name: string
}
