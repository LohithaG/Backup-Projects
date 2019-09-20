import { Component, OnInit, ViewChild } from '@angular/core';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';
declare var cordova: any;
import { ProductService } from '../product-services.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformLocation } from '@angular/common'

@Component({
    selector: 'dispatcher-module',
    templateUrl: './dispatcher-module.component.html'
})
export class DispatcherComponent {
    @ViewChild('dispatchMainAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    ngOnInit() {
        this.platformLocation.onPopState(() => {
            this.router.navigate(['/dispatcher/dispatcher-module']);
        });
    }

    public resultQrcode;
    constructor(
        public platformLocation: PlatformLocation,
        private barcode: barcodeScanner, private productService: ProductService, private router: Router) { }

    openScanning() {
        this.barcode.promiseScan().then(result => {
            this.resultQrcode = result;
        }).catch((ex) => {
            console.log(ex);
        });
    }


    viewProduct() {
        this.barcode.promiseScan().then(result => {
            this.resultQrcode = result;
            if (this.resultQrcode.cancelled) {
                // alert('Scanning cancelled')
            } else {
                this.checkBarcode(this.resultQrcode.text)
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    successResponse;
    checkBarcode(barcodeId) {
        this.productService.checkingBarcode(barcodeId).subscribe((data) => {
            if (data.data != null) {
                this.router.navigate(['./dispatcher/dispatcher/view', barcodeId]);
            } else {
                this.successResponse = data.error.message;
                this.submit = true
                this.showPopup.show();
            }
        })
    }

    Okay() {
        this.showPopup.hide();
        if (this.submit) {
            this.router.navigate(['/dispatcher/dispatcher-module']);
        }
    }


    // viewProduct(type) {
    //     this.barcode.promiseScan().then(result => {
    //         this.resultQrcode = result;
    //         if (this.resultQrcode.cancelled) {
    //             this.navigateToManualProductSearch(type);
    //         } else {
    //             this.navigateToViewPage(type, this.resultQrcode.text);
    //         }
    //     }).catch((ex) => {
    //         console.log(ex);
    //     });
    // }

    navigateToManualProductSearch(type) {
        if (type == 'dispatch') {
            this.router.navigate(['/inventory-search/input', 'dispatch'])
        } else {
            this.router.navigate(['/inventory-search/input'])
        }
    }

    navigateToViewPage(type, barcodeId) {
        if (type == 'dispatch') {
            this.router.navigate(['/inventory-view/dispatcher-view', barcodeId]);
        } else {
            this.router.navigate(['/inventory-view/view', barcodeId]);
        }
    }
}