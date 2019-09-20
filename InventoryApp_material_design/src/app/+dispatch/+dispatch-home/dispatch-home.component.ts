import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var cordova: any;
import { PlatformLocation } from '@angular/common';

import { QRCodeScanner } from '../../+qrcode-scanner/qrcode-scanner.service';

@Component({
    selector: 'dispatch-home',
    templateUrl: './dispatch-home.component.html',
    styles: [`
    .footer-text{
        font-weight:bold
    }
    `]
})

export class DispatchManagerHomeComponent {

    constructor(
        private readonly router: Router,
        private readonly _qrScanner: QRCodeScanner
    ) {

    }

    resultQrcode: any;

    ngOnInit() {
        /**
         * Back Button event trigger
         */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };
    }

    /**
    * navigate to Dispatch Details
    */

    navigateTodispatchView() {
        this.router.navigate(['/dispatch/view'])
    }

    navigateTomanifestView() {

        this._qrScanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                localStorage.setItem('QRCode', this.resultQrcode.text)
                this.router.navigate(['/dispatch/manifest'])
            }
        })
    }

    navigateToInvoiceView() {
        this.router.navigate(['/dispatch/invoice'])
    }
}

