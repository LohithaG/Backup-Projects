import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SKUService } from '../sku.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    selector: 'add-sku',
    templateUrl: './add-sku.component.html'
})

export class AddSKUComponent {
    public addSKUForm: FormGroup;
    public skuObj: any = { facilitiesThreshold: [] }
    formValidate: boolean;
    successResponse;
    errorResponse;
    @ViewChild('lgModel') public lgModel: ModalDirective;
    constructor(private readonly skuService: SKUService, private readonly _sanitizer: DomSanitizer,
        private readonly fb: FormBuilder,
        private readonly router: Router, private readonly http: HttpClient,
    ) {
        this.addSKUForm = new FormGroup({
            'skucode': new FormControl(null, [Validators.required, Validators.maxLength(30)]),
            'productName': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            'serialNumber': new FormControl(null),
            'notification': new FormControl(false, [Validators.requiredTrue]),
            'description': new FormControl(null),
            // 'image': new FormControl(null),
            'items': new FormArray([])
        })
    }
    successMessage = 'SKU details added successfully';
    existSKUMessage = "SKU Code already exist,Please try with another SKU Code ";
    productData; jsondata;
    ngOnInit() {
        this.skuObj.serialNumber = false;
    }
    isok: boolean; existSku: boolean; err; isReadOnly = true; location: any = []; loc;
    skuDetails() {
        this.skuObj.skuCode = this.skuObj.skuCode.trim();
        if (this.skuObj.skuCode !== '') {
            this.skuService.skuCheck(this.skuObj.skuCode).subscribe((data: any) => {
                if (data.data !== null) {
                    if (this.skuObj.skuCode === data.data.inventory.skuCode) {
                        this.isReadOnly = true;
                        this.err = "sku already exist"
                        setTimeout(() => {
                            this.err = ""
                        }, 2000)
                    }
                } else {
                    this.isReadOnly = false;
                    this.err = "SKU code not available"
                    this.getDetails()
                }
            })
        } else {
            this.isReadOnly = true;
            (this.addSKUForm.get('items') as FormArray).controls = []

        }
    }
    getDetails() {
        (this.addSKUForm.get('items') as FormArray).controls = []

        setTimeout(() => {
            this.err = ""
        }, 2000)
        this.skuService.getFacilities().subscribe((data: any) => {
            for (const i of data.data) {
                (this.addSKUForm.get('items') as FormArray).push(this.createItem(i));
            }
            const controlArray: any = this.addSKUForm.get('items') as FormArray;
            for (let i = 0; i < controlArray.length; i++) {
                controlArray.controls[i].get('thresholdLevel').setValue(5);
            }
        })
    }
    createItem(obj) {
        if (obj) {
            return new FormGroup({
                'facility': new FormControl(obj.facility, [Validators.required]),
                'thresholdLevel': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]),
            })
        }
        else {
            return new FormGroup({
                'thresholdLevel': new FormControl(null, [Validators.required, Validators.pattern('^([1-9][0-9]{0,2})$')]),
            })
        }
    }
    popUp:boolean;
    addSkus() {
        if (this.addSKUForm.valid) {
            if (this.skuObj.serialNumber) {
                this.addSkuDetails();
            } else {
                this.popUp = true;
                this.lgModel.show();
            }
        } else {
            this.formValidate = true;
        }
    }

    submitted; spin = false; validate = true;
    addSkuDetails() {
        if (this.popUp) {
            this.popUp = false;
            this.lgModel.hide();
        }
        let postObj: any = { facilitiesThreshold: [] }
        const formData: FormData = new FormData();
        if (this.addSKUForm.valid) {
            if(this.skuObj.description==null){
                this.skuObj.description=null
            }
            for (let i = 0; i < this.addSKUForm.get('items').value.length; i++) {
                postObj.facilitiesThreshold.push({
                    facility: { id: i + 1, facility: this.addSKUForm.value.items[i].facility, facilityName: this.addSKUForm.value.items[i].facility },
                    thresholdLevel: this.addSKUForm.value.items[i].thresholdLevel
                })
            }
            postObj.inventory = {
                "skuCode": this.skuObj.skuCode,
                "productName": this.skuObj.productName,
                "description": this.skuObj.description,
                "serialNumberStatus": this.skuObj.serialNumber,
            }
            if (this.yes == true) {
                postObj.inventory.active = true
            }
            else if (this.no == true) {
                postObj.inventory.active = false
            }
            postObj.createdTime = new Date();
            // if(this.uploadedFiles[0]!=null){
            //     formData.append('files', this.uploadedFiles[0], this.uploadedFiles[0].name);
            // }else{
            //     formData.append('files', '');
            // }
            // formData.append('inventory', JSON.stringify(postObj))
            this.skuService.addingSku(postObj).subscribe(data => {
                const addRes: any = data;
                if (addRes.data != null) {
                    this.isok = true
                    this.spin = true;
                    this.validate = false;
                    setTimeout(() => {
                        postObj = {}
                        this.router.navigate(['./sku'])
                    }, 1000)
                } else {
                    this.existSku = true;
                    setTimeout(() => {
                        this.existSku = false;
                    }, 3000)
                }
            })
        }
        else {
            this.formValidate = true;
        }
    }
    selectedImage: any;
    public picked(event, field) {
        this.selectedImage = field;
        const fileList: FileList = event.target.files;
        if (fileList.length > 0 && fileList[0].size > 3134) {
            const file: File = fileList[0];
            if (field === 1) {
                this.handleInputChange(file);
            }
        }
        else {
            alert("No file selected");
            this.imgDelete(this.selectedImage);
        }
    }
    imgDelete(id) {
        this.addSKUForm.controls['image'].setValue(null)
        this.uploadedFiles.splice(id, 1)
        if (id === 1) {
            this.image1 = null;
        }
    }
    uploadedFiles: any = []; image1: any = '';
    handleInputChange(files) {
        const file = files;
        const reader = new FileReader();
        const n = file.type.lastIndexOf('/');
        const fileType = file.type.substring(n + 1);
        if (fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg') {
            reader.onload = (e: any) => {
                file.src = e.target.result;
                if (this.selectedImage === 1) {
                    this.uploadedFiles[0] = file
                }
                const id = this.selectedImage
                const reader = e.target;
                const base64result = reader.result.substr(reader.result.indexOf(',') + 1);
                if (id === 1) {
                    this.image1 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + base64result);
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            const path1: any = document.getElementById('file-input1')

            path1.value = '';

            alert('Invalid file format');
            return;
        }
    }
    no = false; yes = false;
    notificationChecked(e) {
        if (e.target.checked) {
            this.no = false;
            this.yes = true;
        } else {
            this.yes = false;
        }
    }
    notificationChecked1(e) {
        if (e.target.checked) {
            this.yes = false;
            this.no = true;
        } else {
            this.no = false;
        }
    }
    gotoPreviousPage() {
        setTimeout(() => {
            this.router.navigate(['./sku'])
        })
    }
}
