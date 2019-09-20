import { Component, OnInit } from '@angular/core';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';
import { Router } from '@angular/router';
declare var cordova: any;
import { PlatformLocation } from '@angular/common';


@Component({
    selector: 'inventory-module',
    templateUrl: './inventory-manager.component.html'
})
export class InventoryManagerComponent {
    public resultQrcode;

    constructor(
        private barcode: barcodeScanner,
        public platformLocation: PlatformLocation,
        private router: Router) { }

    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    }

    /**
     * navigate to Add SKU page
     */
    navigateToSkuAdd() {
        this.router.navigate(['/sku-management/add'])
    }

    /** 
    * navigate to Add Product view page(generate barcode and product table)
    */
    addProductViewPage() {
        this.router.navigate(['add-product-display/product-view'])
    }

    /**
     * Scan the barcode and get the details
    */
    OnUpdate() {
        this.barcode.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.navigateToUpdatePage(this.resultQrcode.text);
            }
        })
    }

    /**
       * navigate to Update Product page based on barcodeId
      */
    navigateToUpdatePage(id) {
        this.router.navigate(['/inventory-update/update', id])
    }


    /**
        * Scan the barcode and get the details
       */
    OnUpdateSKu() {

        this.router.navigate(['/sku-management/update'])
        // this.barcode.promiseScan().then(result => {
        //     this.resultQrcode = result;
        //     if (!this.resultQrcode.cancelled) {
        //         this.navigateToSkuUpdatePage(this.resultQrcode.text);
        //     }
        // })
    }

    /**
       * navigate to Update SKU page based on barcodeId
      */
    navigateToSkuUpdatePage(id) {
        this.router.navigate(['/sku-management/update', id])
    }



    /**
     * Further requirement methods 
     */

    ViewProductSearch() {
        this.barcode.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.navigateToViewPage(this.resultQrcode.text);
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    navigateToManualProductSearch() {
        this.router.navigate(['/inventory-search/input'])
    }

    navigateToViewPage(barcodeId) {
        this.router.navigate(['/inventory-view/view', barcodeId]);
    }



    AddProduct() {
        this.barcode.promiseScan().then(result => {
            this.resultQrcode = result;
            if (this.resultQrcode.cancelled) {
                this.addProductPage();
            } else {
                this.addProductPagewithId(this.resultQrcode.text);
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    addProductPage() {
        this.router.navigate(['/inventory-add/add']);
    }
    addProductPagewithId(barcodeId) {
        this.router.navigate(['/inventory-add/add', barcodeId]);
    }


    
}