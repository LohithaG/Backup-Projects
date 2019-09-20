import { Component, ViewChild } from '@angular/core';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ModalDirective } from "ngx-bootstrap";
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import { endponitConfig } from '../../../environments/endpoint';
import { SKUService } from '../sku.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare var $;
@Component({
    selector: 'sku-details',
    templateUrl: './sku-details.component.html',
    styles: [`  `]
})
export class SkuDetailsComponent {
    @ViewChild('lgModal') public lgModal: ModalDirective;
    public addImageForm: FormGroup;
    formValidate: boolean;
    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    constructor(private readonly fb: FormBuilder,
        public skuService: SKUService, private readonly _sanitizer: DomSanitizer, private readonly route: ActivatedRoute,
        private readonly http: HttpClient, public router: Router) {
        this.addImageForm = new FormGroup({
            'images': new FormControl(null, [Validators.required]),
        })
    }
    image; productImg; imageShow; skuDetails: any; details; sku;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.sku = params['skuCode']
            if (params['skuCode'] !== undefined) {
                this.skuService.getProductDetails(params['skuCode']).subscribe((data: any) => {
                    this.details = true;
                    this.skuDetails = data.data;
                    if (data.data != null && data.data.productImage != null) {
                        this.image = true;
                        this.productImg = data.data.productImage ? data.data.productImage : [];
                        this.productImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.data.productImage)
                    } else {
                        this.imageShow = true;
                        this.change = false;
                        this.details = true;
                        // setTimeout(() => {
                        //     alert("No images for this sku please update")
                        // }, 100)
                    }
                })
            } else {
                this.router.navigate(['/sku'])
            }
        })
    }
    change = true;
    changeImage() {
        this.change = false;
        this.imageShow = true
    }
    update; updateMessage = 'SKU Image Updated Successfully'
    spin = false;
    updateImage() {
        if (this.addImageForm.valid) {
            const formData: FormData = new FormData();
            formData.append('file', this.uploadedFiles[0], this.uploadedFiles[0].name);
            this.skuService.updateSkuImage(formData, this.skuDetails.skuCode).subscribe((data: any) => {
                this.update = true;
                this.spin = true;
                setTimeout(() => {
                    this.router.navigate(['./sku'])
                }, 1000)
            })
        } else {
            this.formValidate = true;
        }
    }
    zoom() {
        this.lgModal.show()
    }
    imgDelete(id) {
        this.formValidate = true;
        this.addImageForm.controls['images'].setValue(null)
        this.uploadedFiles.splice(id, 1)
        if (id === 1) {
            this.image1 = null;
        }


    }
    selectedImage: any;
    public picked(event, field) {
        this.selectedImage = field;
        const fileList: FileList = event.target.files;
        if (fileList.length > 0 && fileList[0].size>3134) {
            const file: File = fileList[0];
            if (field === 1) {
                this.handleInputChange(file);
            }
        }
        else {
            // alert("No file selected");
            alert("File resolution should more than 200*200px");
            this.imgDelete(this.selectedImage);
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
    gotoPreviousPage() {
        setTimeout(() => {
            this.router.navigate(['./sku'])
        })
    }

}
