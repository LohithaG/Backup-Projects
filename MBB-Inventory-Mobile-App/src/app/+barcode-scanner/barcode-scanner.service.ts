import { Injectable } from '@angular/core';
declare var cordova: any;

@Injectable()
export class barcodeScanner {

    promiseScan() {
        return new Promise((resolve, reject) => {
            cordova.plugins.barcodeScanner.scan(
                (result) => {
                    return resolve(result);
                },
                (error) => {
                    return reject('ERROR');
                },{
                    prompt : "Place a barcode inside the scan area",
                }
            );
        });
    }
}