import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product-services.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { globalArray } from '../globalData';
import * as moment from 'moment';
import { setTimeout } from 'timers';

import { ModalDirective } from 'ngx-bootstrap';

declare var cordova: any;

declare let navigator: any;
declare let Camera: any;

@Component({
    selector: 'app-add-inventory-page',
    templateUrl: './add-inventory-page.component.html',
    styleUrls: ['./add-inventory-page.component.css']
})
export class AddInventoryPageComponent implements OnInit, OnDestroy {

    @ViewChild('addProductAlert') public showPopup: ModalDirective;
    submit: boolean = false;

    photoOption: boolean;
    public complexForm: FormGroup;
    submitted: boolean = true;
    errorResponse;
    ItemStatusType: any;
    productFacilityList: any;
    productConditionList: any;
    inventoryConditionId: AbstractControl;
    itemStatusId: AbstractControl;
    productName: AbstractControl;
    barcode: AbstractControl
    successResponse;
    categoryName;
    skuCode;
    errorStatus;
    productListStatus;
    inventoryItem;
    inventoryProduct: any;
    facilityId;
    productCreatedDate = new Date()

    constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private productService: ProductService, private _location: Location, private route: ActivatedRoute, private router: Router) { }

    productAddObj: any = {};
    formatedAddObj: any = {};
    ngOnInit() {
        this.photoOption = false;
        this.productListStatus = '';
        this.complexForm = this.fb.group({
            barcode: [null, [Validators.required]],
            skuCode: [null, [Validators.required]],
            productName: [null, [Validators.required]],
            inventoryConditionId: [null, [Validators.required]],
            itemStatusId: [null, [Validators.required]],
        })
        this.barcode = this.complexForm.controls["barcode"];
        this.skuCode = this.complexForm.controls["skuCode"];
        this.productName = this.complexForm.controls["productName"];
        this.inventoryConditionId = this.complexForm.controls["inventoryConditionId"];
        this.itemStatusId = this.complexForm.controls["itemStatusId"];


        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                this.productService.getAllBarcodes().subscribe((data) => {
                    if (data.error == null) {
                        const status = data.data.find(obj => obj.barcode == params['id']);
                        const status2 = globalArray.find(obj => obj.barcode == params['id']);
                        if (!status && !status2) {
                            const splitBarcodeCode = params['id'].lastIndexOf('-');
                            const barcodeId = params['id'].slice(0, splitBarcodeCode);
                            // this.productAddObj.barcode = barcodeId;
                            this.productAddObj.barcode = params['id'];
                            this.getDetailsByBarcodeId(barcodeId);
                        } else {
                            this.successResponse = 'Product already exists';
                            this.submit = true
                            this.showPopup.show();
                        }
                    } else {
                        this.successResponse = data.error.message;
                        this.submit = true
                        this.showPopup.show();
                    }
                })
            }
        })
        this.getAllProductConditionList();
        this.getAllProductStatusList()
    }

    inventoryid: any;
    item
    item1
    getDetailsByBarcodeId(barcodeId) {
        this.productService.getDetailsByBarcode(barcodeId).subscribe(data => {
            if (data.error == null) {
                this.inventoryid = data.data.id;
                this.productAddObj.productName = data.data.productName;
                this.productAddObj.skuCode = data.data.skuCode;
                this.barcode.setValue(this.productAddObj.barcode);
                this.skuCode.setValue(data.data.skuCode)
                this.productName.setValue(this.productAddObj.productName);
                this.inventoryConditionId.setValue(this.productAddObj.inventoryCondition.inventoryCondition);
                this.item = 'Available'
                this.itemStatusId.setValue(this.item);
                this.item1 = this.productAddObj.inventoryCondition.inventoryCondition;
                this.productService.getStatusByInventoryCondition(this.productAddObj.inventoryCondition.id).subscribe((data) => {
                    this.statusList = data.data;
                })
            } else {
                this.successResponse = data.error.message;
                this.submit = true
                this.showPopup.show();
            }
        })
    }

    testValue;
    getAllProductConditionList() {
        this.productService.getProductConditionList().subscribe(data => {
            if (data.data != null) {
                this.productConditionList = data.data;
                this.productAddObj.inventoryCondition = this.productConditionList.find(status => 1 == status.id)
                this.testValue = this.productAddObj.inventoryCondition.id
            }
        })
    }
    testValue2;
    getAllProductStatusList() {
        this.productService.getAllProductStatusTypes().subscribe(data => {
            this.statusList = data.data;
        })
    }

    statusList;
    imagesArray: any = [];
    test;
    sub: boolean = false;
    getStatusList(id) {
        this.sub = true;
        if (id == "Good") {
            this.test = 1
        }
        else {
            this.test = 2
        }

        this.productService.getStatusByInventoryCondition(this.test).subscribe((data) => {
            this.ItemStatusType = data.data;
            this.statusList = data.data;
            this.itemStatusId.setValue(this.statusList[0].itemStatus);
            // for (let i of this.statusList) {
            //     this.itemStatusId.setValue(i.itemStatus);
            //     break
            // }
        })
    }


    uploadImage() {
        var options = {
            quality: 50,
            targetWidth: 150,
            targeHeight: 150,
            correctOrientation: true
        };
        if (navigator != undefined) {
            navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), {
                quality: 100,
                targetWidth: 150,
                targetHeight: 150,
                destinationType: navigator.camera.DestinationType.DATA_URL,
                sourceType: navigator.camera.PictureSourceType.CAMERA,
                encodingType: navigator.camera.EncodingType.PNG,
            });
        }

    }

    onSuccess(imageData) {
        this.imagesArray.push(imageData)
        this.cdr.detectChanges();
    }

    onFail(message) {
        console.log('failure')
        alert('Failed because: ' + message);
    }

    id
    addUser() {
        this.submitted = false;

        if (this.complexForm.valid) {
            this.submitted = true;
            const today_Date = new Date();

            this.statusList.find((data) => {
                if (data.itemStatus == this.complexForm.value.itemStatusId) {
                    this.id = data.id;
                    this.itemStatusId.setValue(data.itemStatus)
                }
            })

            var obj = {
                "facilityId": {
                    "id": 1,
                    "facility": "GvsOxygen"
                },
                "inventoryConditionId": {
                    "id": this.sub ? this.test : 1,
                    "inventoryCondition": this.complexForm.value.inventoryConditionId
                },
                "inventoryId": {
                    "id": this.inventoryid,
                    "enabled": null,
                    "inventory": 2,
                    "skuCode": this.productAddObj.skuCode,
                    "productName": this.productAddObj.productName,
                    "createdTime": moment(today_Date).format(),
                    "updatedTime": null,
                    "badInventory": null,
                    "blockedInventory": 0,
                    "pendingQcAccessment": null,
                    "thresholdLevel": null,
                    "returnPending": null,
                    "inventoryConditionId": {
                        "id": this.sub ? this.test : 1,
                        "inventoryCondition": this.complexForm.value.inventoryConditionId
                    },
                    "description": null
                },
                "itemStatusId": {
                    "id": this.id,
                    "itemStatus": this.complexForm.value.itemStatusId,
                    "inventoryConditionId": {
                        "id": this.sub ? this.test : 1,
                        "inventoryCondition": this.complexForm.value.inventoryConditionId
                    }
                },
                "barcode": this.productAddObj.barcode,
                productImage: null,
                updatedTime: moment(today_Date).format(),
                createdTime: moment(today_Date).format()
            }

            globalArray.push(obj)
            setTimeout(() => {
                this.complexForm.reset();
                this.clearFields();
            }, 500)
            this.successResponse = 'Product added successfully'
            this.submit = true
            this.showPopup.show();
        }
    }


    Okay() {
        this.showPopup.hide();
        if (this.submit) {
            this.router.navigate(['add-product-display/product-view'])
        }
    }


    cancelUser() {
        this._location.back();
    }

    ngOnDestroy() {
        this.clearFields();
    }

    clearFields() {
        // this.productName = '';
        // this.categoryName = '';
        // this.skuCode = '';
        // this.barcode = '';
        // this.errorResponse = '';
        // this.errorStatus = '';
    }

}












// import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
// import { ProductService } from '../product-services.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { Location } from '@angular/common';
// import { globalArray } from '../globalData';
// import * as moment from 'moment';
// import { setTimeout } from 'timers';

// import { ModalDirective } from 'ngx-bootstrap';

// declare var cordova: any;
// declare let navigator: any;
// declare let Camera: any;

// @Component({
//     selector: 'app-add-inventory-page',
//     templateUrl: './add-inventory-page.component.html',
//     styleUrls: ['./add-inventory-page.component.css']
// })
// export class AddInventoryPageComponent implements OnInit, OnDestroy {

//     @ViewChild('addProductAlert') public showPopup: ModalDirective;
//     submit: boolean = false;

//     photoOption: boolean;
//     public complexForm: FormGroup;
//     barcode;
//     submitted: boolean = true;
//     errorResponse;
//     ItemStatusType: any;
//     productFacilityList: any;
//     productConditionList: any;
//     successResponse;
//     productName;
//     categoryName;
//     skuCode;
//     errorStatus;
//     productListStatus;
//     inventoryItem;
//     inventoryProduct: any;
//     itemStatusId;
//     facilityId;
//     inventoryConditionId;
//     productCreatedDate = new Date()

//     constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private productService: ProductService, private _location: Location, private route: ActivatedRoute, private router: Router) { }

//     productAddObj: any = {};
//     formatedAddObj: any = {};
//     ngOnInit() {
//         this.photoOption = false;
//         this.productListStatus = '';
//         this.complexForm = this.fb.group({
//             inventoryConditionId: [null, [Validators.required]],
//             inventoryId: this.fb.group({
//                 productName: [null, [Validators.required]],
//             }),
//             itemStatusId: [null, [Validators.required]],
//             barcode: [null, [Validators.required]]
//         })

//         this.route.params.forEach((params: Params) => {
//             if (params['id'] !== undefined) {
//                 this.productAddObj.barcode = params['id'];
//                 this.productService.getAllBarcodes().subscribe((data) => {
//                     if (data.error == null) {
//                         const status = data.data.find(obj => obj.barcode == params['id']);
//                         const status2 = globalArray.find(obj => obj.barcode == params['id']);
//                         if (!status && !status2) {
//                             const splitSkuCode = params['id'].lastIndexOf('-');
//                             const skuCode = params['id'].slice(0, splitSkuCode);
//                             this.getDetailsBySku(skuCode);
//                         } else {
//                             this.successResponse = 'Product already exists';
//                             this.submit = true
//                             this.showPopup.show();
//                         }
//                     } else {
//                         this.successResponse = data.error.message;
//                         this.submit = true
//                         this.showPopup.show();
//                     }
//                 })
//             }
//         })
//         this.getAllProductConditionList();
//         this.getAllProductStatusList()
//     }

//     inventoryid: any;
//     getDetailsBySku(skuId) {
//         this.productAddObj.skuCode = skuId;
//         this.productService.getDetailsBySkuId(skuId).subscribe(data => {

//             if (data.error == null) {
//                 this.inventoryid = data.data.id;
//                 this.productAddObj.productName = data.data.productName;
//             } else {
//                 this.successResponse = data.error.message;
//                 this.submit = true
//                 this.showPopup.show();
//             }
//         })
//     }

//     testValue;
//     getAllProductConditionList() {
//         this.productService.getProductConditionList().subscribe(data => {
//             if (data.data != null) {
//                 this.productConditionList = data.data;
//                 this.productAddObj.inventoryCondition = this.productConditionList.find(status => 1 == status.id)
//                 this.testValue = this.productAddObj.inventoryCondition.id
//             }
//         })
//     }
//     testValue2;
//     getAllProductStatusList() {
//         this.productService.getAllProductStatusTypes().subscribe(data => {
//             this.ItemStatusType = data.data;
//             this.productAddObj.itemStatus = this.ItemStatusType.find(status => 1 == status.id)
//             this.testValue2 = this.productAddObj.itemStatus.id
//         })
//     }

//     statusList;
//     imagesArray: any = [];
//     picUpload: any;
//     getStatusList(id) {
//         if (id) {
//             this.productService.getStatusByInventoryCondition(id).subscribe((data) => {
//                 this.ItemStatusType = data.data;
//                 this.statusList = data.data;
//             })
//             if (id == 2) {
//                 this.picUpload = true;
//             } else {
//                 this.picUpload = false
//             }
//         }
//     }


//     uploadImage() {
//         var options = {
//             quality: 50,
//             targetWidth: 150,
//             targeHeight: 150,
//             correctOrientation: true
//         };
//         if (navigator != undefined) {
//             navigator.camera.getPicture(this.onSuccess.bind(this), this.onFail.bind(this), {
//                 quality: 100,
//                 targetWidth: 150,
//                 targetHeight: 150,
//                 destinationType: navigator.camera.DestinationType.DATA_URL,
//                 sourceType: navigator.camera.PictureSourceType.CAMERA,
//                 encodingType: navigator.camera.EncodingType.PNG,
//             });
//         }

//     }


//     onSuccess(imageData) {
//         var formdata = new FormData();
//         formdata.append("image", imageData, '1');
//         this.imagesArray.push({ image: imageData })
//         this.cdr.detectChanges();
//     }

//     onFail(message) {
//         console.log('failure')
//     }


//     addUser() {
//         this.submitted = false;
//         if (this.complexForm.valid) {
//             this.submitted = true;
//             const today_Date = new Date();
//             this.complexForm.value.inventoryId = this.inventoryItem;
//             var statusType = this.ItemStatusType.find(id => id.id == this.testValue2)
//             var obj = {
//                 "facilityId": {
//                     "id": 1,
//                     "facility": "GvsOxygen"
//                 },
//                 "inventoryConditionId": {
//                     "id": this.testValue,
//                     "inventoryCondition": this.testValue == 1 ? 'Good' : 'Bad'
//                 },
//                 "inventoryId": {
//                     "id": this.inventoryid,
//                     "enabled": null,
//                     "inventory": 2,
//                     "skuCode": this.productAddObj.skuCode,
//                     "productName": this.productAddObj.productName,
//                     "createdTime": moment(today_Date).format(),
//                     "updatedTime": null,
//                     "badInventory": null,
//                     "blockedInventory": 0,
//                     "pendingQcAccessment": null,
//                     "thresholdLevel": null,
//                     "returnPending": null,
//                     "inventoryConditionId": {
//                         "id": this.testValue,
//                         "inventoryCondition": this.testValue == 1 ? 'Good' : 'Bad'
//                     },
//                     "description": null
//                 },
//                 "itemStatusId": {
//                     "id": statusType.id,
//                     "itemStatus": statusType.itemStatus,
//                     "inventoryConditionId": {
//                         "id": this.testValue,
//                         "inventoryCondition": this.testValue == 1 ? 'Good' : 'Bad'
//                     }
//                 },
//                 "barcode": this.productAddObj.barcode,
//                 //  "productImage": this.testValue == 2 ? this.imagesArray : []
//                 // productImage: formdata
//                 productImage: null,
//                 updatedTime: moment(today_Date).format(),
//                 createdTime: moment(today_Date).format()
//             }
//             globalArray.push(obj)
//             setTimeout(() => {
//                 this.complexForm.reset();
//                 this.clearFields();
//             }, 500)

//             this.successResponse = 'Product added successfully'
//             this.submit = true
//             this.showPopup.show();
//         }
//     }




//     Okay() {
//         this.showPopup.hide();
//         if (this.submit) {
//             this.router.navigate(['add-product-display/product-view'])
//         }
//     }

//     cancelUser() {
//         this.router.navigate(['add-product-display/product-view'])
//     }

//     ngOnDestroy() {
//         this.clearFields();
//     }

//     clearFields() {
//         this.productName = '';
//         this.categoryName = '';
//         this.skuCode = '';
//         this.barcode = '';
//         this.errorResponse = '';
//         this.errorStatus = '';
//     }

// }
