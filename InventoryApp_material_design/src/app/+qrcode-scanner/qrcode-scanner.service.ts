import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class QRCodeScanner {

    promiseScan() {
        return new Promise((resolve, reject) => {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    return resolve(result);
                },
                (error) => {
                    return reject('ERROR');
                }, {
                    prompt: "Place a qr inside the scan area",
                }
            );
        });
    }
}

