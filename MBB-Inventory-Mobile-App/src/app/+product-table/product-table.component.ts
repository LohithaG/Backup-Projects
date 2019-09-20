import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';
import { Router } from '@angular/router';
import { ProductService } from '../product-services.service';
import { globalArray } from '../globalData';
declare var $: any;
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

    @ViewChild('ProductTableAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    barcodeObj = [];
    resultQrcode;
    successStatus;

    constructor(
        private barcodescanner: barcodeScanner,
        private router: Router,
        private productService: ProductService
    ) { }

    ngOnInit() {
        this.barcodeObj = globalArray
    }

    /**
     * smart Table options
     */

    options = {
        dom: 'Bfrtip',
        ajax: (data, callback, settings) => {
            var obj = {
                data: this.barcodeObj
            }
            callback({
                aaData: obj.data,
            })
        },
        columns: [
            { data: 'barcode', responsivePriority: 1 }, { data: 'inventoryId.productName', responsivePriority: 4 },
            { data: 'inventoryConditionId.inventoryCondition', responsivePriority: 2 }
        ],
    };


    /**
     * Add product page navigation
     */
    addProductCheck() {
        this.barcodescanner.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                this.navigateProductPage(this.resultQrcode.text);
            }
        }).catch((ex) => {
            console.log(ex);
        });
    }

    navigateProductPage(barcodeId) {
        this.router.navigate(['/inventory-add/add', barcodeId])
    }

    /**
     * Products send to database 
     */

    saveProducts() {
        if (globalArray.length != 0) {
            this.productService.addProduct(globalArray).subscribe((data) => {
                if (data.error == null) {
                    globalArray.length = 0;
                    this.barcodeObj = [];
                    this.successStatus = 'Products added sucessfully'
                    this.submit = true
                    this.showPopup.show();
                } else {
                    this.successStatus = data.error.message;
                    this.showPopup.show();
                }
            })
        } else {
            this.successStatus = 'please add the products to table';
            this.showPopup.show();
        }
    }
    /**
     * Popup closing methods and conditions
     */
    Okay() {
        this.showPopup.hide();
        if (this.submit) {
            this.router.navigate(['inventory/inventory-manager'])
        }
    }
}
