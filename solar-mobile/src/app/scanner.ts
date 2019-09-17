import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class ScannerService {

    promiseScan() {
        return new Promise((resolve, reject) => {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    return resolve(result);
                },
                (error) => {
                    return reject('ERROR');
                }, {
                    prompt: "Place a QR Code inside the scan area",
                }
            );
        });
    }
}