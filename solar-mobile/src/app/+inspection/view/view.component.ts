import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InspectionServices } from '../inspection.service';
// import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DomSanitizer } from '@angular/platform-browser';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

declare var cordova: any;

declare let navigator: any;
declare var Camera: any;


@Component({
    selector: 'view-inspection',
    templateUrl: './view.component.html',
    providers: [InspectionServices],
    styles: [`
    
    .imgg{
        float:left
        }
        
        .sku
        {
        position: relative;
        padding:10px;
        }
        .close-tag{
              float: right;
        background:aqua;
        width: 15px;
        text-align: center; 
        overflow:hidden; 
        }
        .ui-overlay-c {
            background-color: rgba(0, 0, 0, 0.5);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            text-align: center;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
        }
        .loading-bar {
         
          display: inline-block;
          width: 4px;
          height: 18px;
          border-radius: 4px;
          animation: loading 1s ease-in-out infinite;
        }
        .loading-bar:nth-child(1) {
          background-color: #3498db;
          animation-delay: 0;
        }
        .loading-bar:nth-child(2) {
          background-color: #c0392b;
          animation-delay: 0.09s;
        }
        .loading-bar:nth-child(3) {
          background-color: #f1c40f;
          animation-delay: .18s;
        }
        .loading-bar:nth-child(4) {
          background-color: #27ae60;
          animation-delay: .27s;
        }
        
        @keyframes loading {
          0% {
            transform: scale(1);
          }
          20% {
            transform: scale(1, 2.2);
          }
          40% {
            transform: scale(1);
          }
        }
    `]
    //styleUrls: [ './app.component.css' ]
})
export class InspectionViewComponent {

    insepctorComments: any = '';
    DriverComments: any = '';

    // @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild('sing1') signaturePad1: SignaturePad;
    @ViewChild('sing2') signaturePad2: SignaturePad;

    loadArrayData: any = {}
    inspectionData: any;
    constructor(private router: Router, private _sanitizer: DomSanitizer, private route: ActivatedRoute, private inspectionService: InspectionServices) { }
    uiListData: any = [];
    selectedObject: any = [];

    conditionList: any = [{ id: 1, status: 'Good' }, { id: 2, status: 'Damage' }]
    loaderBtn = false;
    image;

    cartonStatus: any = 1;
    cartonComments: any = '';

    private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
        "penColor": 'rgb(66,133,244)',
        'canvasWidth': 500,
        'canvasHeight': 200
    };
    driverSignature;
    inspectorSignature
    driverSign() {
        // this.driverSignature = '';
        this.driverSignature = this.signaturePad1.toDataURL();
        // console.log(this.driverSignature)
    }

    insepetorSign() {
        // this.inspectorSignature = '';
        this.inspectorSignature = this.signaturePad2.toDataURL();
        // console.log(this.inspectorSignature)
    }


    loadNumberId: any;
    cartonQR: any;
    cartonId: any;
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['cartonId'] !== undefined) {
                this.cartonQR = params['cartonCode'];
                this.cartonId = params['cartonId'];
                this.inspectionService.getCartonInfo(this.cartonId).subscribe((data) => {
                    this.inspectionData = data;
                })
            } else {
                console.log('Driver has not selected any load');
            }
        })
    }
    loadId;
    selectionChange(value, ind) {
        this.loadArrayData.loadId = value;
        this.selectedObject = [];
        for (let i = 0; i < this.uiListData.length; i++) {
            if (this.uiListData[i].vinId == this.loadArrayData.loadId) {
                this.selectedObject.push(this.uiListData[i])
            }
        }
    }

    imagesList: any = [{ 'image': '', convertedImg: '' }, { 'image': '', convertedImg: '' }, { 'image': '', convertedImg: '' }];

    image1: any = '';
    image2: any = '';
    image3: any = '';
    pickImage(i) {
        this.loaderBtn = true;
        if (navigator != undefined) {
            navigator.camera.getPicture(
                (base64string) => {
                    this.loaderBtn = false;
                    this.imagesList[i].image = base64string;
                    this.imagesList[i].convertedImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + base64string);
                },
                (error) => {
                    this.loaderBtn = false;
                    alert("Unable to obtain picture: " + error);
                }, {
                    quality: 25,
                    allowEdit: true,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 100,
                    targeHeight: 100,
                    correctOrientation: true
                }
            );
        }
    }

    deleteImage(i) {
        this.imagesList[i].image = '';
        this.imagesList[i].convertedImg = '';
    }
    insepectionSuccessMsg: any;
    insepectionErrorMsg: any;
    addInspectionDeatails() {
        let obj: any = {
            "loadNumber": localStorage.getItem('passingLoadNumber'),
            "inspectionType": localStorage.getItem('inspectionType'),
            "cartonObj": {
                "id": this.cartonId,
                "comment": "hjgjhk",
                "cartonStatus": this.cartonStatus,
                "damageImages": this.cartonStatus == 2 ? this.imagesList : []
            }
        }
        
        this.inspectionService.addInsepction(obj).subscribe((data: any) => {
            // console.log('data');
            // console.log(data);
            if (data.error == null) {
                var dataObj: any = data.data;
                // console.log('dataObj')
                // console.log(dataObj)
                localStorage.setItem('inspectionId', dataObj.inspection.id)
                this.insepectionSuccessMsg = 'Insepction Details Added Successfully';
                setTimeout(() => {
                    this.insepectionSuccessMsg = ''
                    this.goBack();
                }, 3000);
            } else {
                this.insepectionErrorMsg = data.error.message;
                setTimeout(() => {
                    this.insepectionSuccessMsg = ''
                    this.goBack();
                }, 3000);
            }
        })
    }

    goBack() {
        this.router.navigate(['/loads']);
    }

}

