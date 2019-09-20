import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var cordova: any;

import { PlatformLocation } from '@angular/common';

import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';

@Component({
    selector: 'inventory-module',
    templateUrl: './inventory-view.component.html',
    styles: [`
    .footer-text{
        font-weight:bold
    }
    `]
})
export class InventoryManagerViewComponent implements OnInit {
    constructor(
        private readonly  router: Router,
        private readonly _qrScanner: QRCodeScanner
    ) {

    }

    resultQrcode: any;
    userType;

    ngOnInit() {
        /**
         * Back Button event trigger
         */
        this.userType = localStorage.getItem('userRole');

        history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
            history.go(1);
        };
    }

    /**
    * navigate to Add SKU page
    */

    navigateToAddSKU() {
        this.router.navigate(['/sku/add'])
    }

    /**
     * navigate to Update SKU page
    */

    navigateToUpdateSKU() {
        this.router.navigate(['/sku/update'])
    }

    navigateToView() {
        this.router.navigate(['/product/view'])

    }

    navigateToReturn() {
        this.router.navigate(['/product/return-product'])

    }

    /**
     * navigate to Add Product page 0155-0000058
    */
    //0140-0000184
    navigateToAddProduct() {
        // localStorage.setItem('QRCode', '0175-0000005')
        // this.router.navigate(['/product/add'])
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', this.resultQrcode.text)
                this.router.navigate(['/product/add'])
            }
        })
    }

    /**
     * navigate to Update product page
    */

    navigateToUpdateProduct() {
        //  localStorage.setItem('QRCode', '0175-0000005')
        // this.router.navigate(['/product/update'])
        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', this.resultQrcode.text)
                this.router.navigate(['/product/update'])
            }
        })
    }

    /**
     * Navigate to Transfers Page
     */
    navigateToTransfers() {
        this.router.navigate(['/product/shipping']);
    }
    /**
        * Navigate to Restore Page
        */
    navigateToRestore() {
        this.router.navigate(['/product/delete']);
    }


    /**
     * navigate to return Product Page
     */
    navigateToReturnProduct() {
        this.router.navigate(['/product/return-product']);
    }

    /**
       * navigate to generate QR Code page
      */

    navigateToGenerateQrCodes() {
        this.router.navigate(['/qr/generate'])
    }

    /**
     * navigate to retrieve QR Code page
    */

    navigateToRetrieveQrCodes() {
        this.router.navigate(['/qr/retrieve'])
    }

    /**
     * Navigate to Search page
     */
    navigateToSearchQrCode() {
        this.router.navigate(['/qr/search'])
    }
}

