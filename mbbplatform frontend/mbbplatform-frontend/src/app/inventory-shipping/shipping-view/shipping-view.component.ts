import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { endponitConfig } from '../../../environments/endpoint';
declare var $;
import { InventoryShippingService } from '../inventory-shipping.service'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'shipping-view',
    templateUrl: './shipping-view.component.html',
})

export class InventoryShippingViewComponent implements OnInit {


    constructor(
        public _shippingService: InventoryShippingService,
        private http: HttpClient,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private _sanitizer: DomSanitizer,
        private router: Router,
        private cdr: ChangeDetectorRef) {
    }
    packageId: any = '';
    packageName: '';
    packageSKUDetails: any = [];
    trackingDetails: any = {};
    downloadDocuments: any = [];
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['packageId'] !== undefined) {
                const packageId: string = +params['packageId'] + '';
                this.packageId = packageId;
                this.packageName = params['packageName']
                this._shippingService.packageViewDetails(params['packageId']).subscribe((data: any) => {
                    if (data.data != null) {
                        this.packageSKUDetails = data.data.skuDetails;
                        this.trackingDetails = data.data.transportDetails;
                        this.downloadDocuments = data.data.documents ? data.data.documents : [];
                        if (this.downloadDocuments.length) {
                            this.downloadDocuments.find((data: any) => {
                                data.binaryData = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.binaryData)
                            })
                        }
                    } else {
                        alert("No details added for this package ")
                    }
                })
            } else {

            }
        });

    }





    downloadImage(imageObj) {

        let byteCharacters: any = atob(imageObj.binaryData)
        let byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        let blob = new Blob([byteArray], { "type": "image/jpeg" });

        if (navigator.msSaveBlob) {
            let filename = imageObj.fileName;
            navigator.msSaveBlob(blob, filename);
        } else {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.setAttribute('visibility', 'hidden');
            link.download = imageObj.fileName;;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

}



