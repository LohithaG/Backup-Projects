import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DestinationInspectionServices } from './post-inspection.service';
// import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DomSanitizer } from '@angular/platform-browser';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ScannerService } from '../scanner';
declare var cordova: any;
import { ModalDirective } from 'ngx-bootstrap';
declare let navigator: any;
declare var Camera: any;
import { globalObj } from '../load-information';
import { PopupComponent } from 'app/popup/popup.component'

@Component({
    selector: 'app-post-inspection',
    templateUrl: './post-inspection.component.html',
    providers: [DestinationInspectionServices],
    styles: [` .widgetBody {
        padding-top: 20px !important;
    }
    .expand-value{
        color:white
    }
    .headerRibbon {
        color: #BBB!important;
    }
    .value-color{
        color:black;
        font-weight:bold
    }
  .load-subtitle {
        color: #009999;
    }

    .load-title {
        margin-left: 1%;
    }

    .load-view {
        margin-left: 1%;
    }

    .footer-view-btn {
        color: rgb(203, 82, 48);
    }

    .load-header {
        background-color: rgb(76, 79, 83);
        color: white
    }

    @media (max-width: 970px) {
        .panel-footer {
            text-align: center
        }
    }

    .load.panel-footer {
        background-color: white
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
.footer {
   position: fixed;
   right: 0;
   bottom: 0;
   text-align: center;
   float:right
}
    `]
    //styleUrls: [ './app.component.css' ]
})
export class destinationInspectionComponent {

    insepctorComments: any = '';
    DriverComments: any = '';

    // @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild('sing1') signaturePad1: SignaturePad;
    @ViewChild('sing2') signaturePad2: SignaturePad;
    @ViewChild('cartonInfoModal') public cartonInfoModal: ModalDirective;
    @ViewChild(PopupComponent) popup;
    popupMessage: any;
    popupRoute;
    title;

    loadArrayData: any = {}
    inspectionData: any = []
    CurrentTime;
    Timer;
    constructor(
        public _scannerService: ScannerService,
        private router: Router,
        private _sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private inspectionService: DestinationInspectionServices) {
        this.Timer = setInterval(() => {
            this.CurrentTime = new Date()
        }, 1000);
    }

    ngOnDestroy() {
        this.CurrentTime = '';
        clearInterval(this.Timer)
    }

    skidId: any;
    loadInformation: any = {};
    skidName: any = '';
    ngOnInit() {
        this.loadInformation = JSON.parse(localStorage.getItem('loadObj'));
        this.skidName = localStorage.getItem('skiddropInspectionLocName')
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const skidId = params['id'];
                this.skidId = params['id'];
                this.getCartonsList();
            }
            else {
                console.log('Driver has not selected any load');
            }
        })
    }
    uiListData: any = [];
    selectedObject: any = [];

    conditionList: any = [{ status: 'Good' }, { status: 'Bad' }]
    loaderBtn = false;
    image;

    inspectorComment: any = '';
    driverComment: any = '';

    private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
        "penColor": 'rgb(66,133,244)',
        'canvasWidth': 500,
        'canvasHeight': 200
    };
    driverSignature = '';
    inspectorSignature = '';

    dropdownData: any = [];
    exceptionsObj: any = [];
    showInspectionDetails(index) {
        if (this.inspectionData[index].status == 'Good' || this.inspectionData[index].status == 'Validate') {

        } else {
            this.inspectionService.getCartonExceptions(this.inspectionData[index], 2).subscribe((data) => {
                if (this.dropdownData.index == index) {
                    this.dropdownData.index = null;
                    this.dropdownData = [];
                } else {
                    this.dropdownData = [{ Area: 'Top' }, { Type: 'Open' }, { Severity: 'low' }]
                    this.dropdownData.index = index;
                    this.exceptionsObj = data.data;
                }
            })
        }
    }

    modalClose() {
        clearTimeout(this.timerValue)
        this.cartonInfoModal.hide();
    }

    timerValue: any;
    ScannedCartonInfo: any = {};
    scannedCartonQRCode: any;
    validateCarton() {
        // localStorage.setItem('scannedCartonQRCode', '4ERQBUGENCQDT7SC');
        // this.inspectionService.validateCartonSkidLevel(localStorage.getItem('acceptedLoadNumber'), '4ERQBUGENCQDT7SC', 2, localStorage.getItem('postSkidId')).subscribe((data) => {
        //     if (data.error == null) {
        //         this.ScannedCartonInfo = data.data;
        //         this.cartonInfoModal.show();
        //         this.timerValue = setTimeout(() => {
        //             this.setGoodCondition()
        //             this.cartonInfoModal.hide();
        //         }, 10000);
        //     } else {
        //         alert(data.error.message);
        //     }
        // })


        this._scannerService.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                localStorage.setItem('scannedCartonQRCode', this.resultQrcode.text);
                this.inspectionService.validateCartonSkidLevel(localStorage.getItem('acceptedLoadNumber'), this.resultQrcode.text, 2, localStorage.getItem('postSkidId')).subscribe((data) => {
                    if (data.error == null) {
                        this.ScannedCartonInfo = data.data;
                        this.cartonInfoModal.show();
                        this.timerValue = setTimeout(() => {
                            this.setGoodCondition()
                            this.cartonInfoModal.hide();
                        }, 5000);
                    } else {
                        alert(data.error.message);
                    }
                })
            }
        })
    }



    setGoodCondition() {
        clearTimeout(this.timerValue)
        var obj = {
            "loadNumber": localStorage.getItem('acceptedLoadNumber'),
            "inspectionType": 2,
            "locNbr": this.skidId,
            "cartonObj": {
                "id": this.ScannedCartonInfo.id,
                "cartonStatus": 1,
                "updatedDate": new Date()
            }
        }
        this.inspectionService.inspectionCartonByScan(obj).subscribe((data) => {
            this.cartonInfoModal.hide();
            this.getCartonsList()
        })

    }

    setDamageCondition() {
        clearTimeout(this.timerValue)
        localStorage.setItem('scannedCartonId', this.ScannedCartonInfo.id)
        this.router.navigate(['/post-inspection/damage/post/'])
        this.cartonInfoModal.hide();
    }
    driverSign() {
        this.driverSignStatus = false;
        this.driverSignature = this.signaturePad1.toDataURL();
    }

    insepetorSign() {
        this.insptrSignStatus = false;
        this.inspectorSignature = this.signaturePad2.toDataURL();
    }


    resultQrcode: any;
    inspectionByCartonId(inspect) {
        this._scannerService.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                if (this.resultQrcode.text === inspect.cartonId) {
                    this.router.navigate(['./inspection/inspectionView/', inspect.id, inspect.cartonId])
                } else {
                    alert('please scan valid qrcode');
                }
            }
        })
    }


    /**
     * getCartonsList(after entered into geofence)
     */
    detailsData: any
    getCartonsList() {
        this.inspectionData = [];
        this.inspectionService.getListOfCartonsDetails(localStorage.getItem('acceptedLoadNumber'), 2, this.skidId).subscribe((data: any) => {
            this.inspectionData = data;
            this.detailsData = data
            if (this.inspectionData.length) {
                this.getSignatureStatus();
            }
        })
    }
    cartonId;
    getCartonSearch() {
        this.inspectionData = this.detailsData
        if (this.cartonId) {
            this.inspectionData = this.inspectionData.filter((data) => {
                if (data.cartons.cartonId.toLowerCase().includes(this.cartonId.toLowerCase()) ||
                    data.cartons.weight.includes(this.cartonId.toLowerCase()))
                    return true;
                else
                    return false;
            })
        }
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

    signatureStatus: any;
    getSignatureStatus() {
        this.signatureStatus = true;
        this.inspectionData.find((data) => {
            if (data.status == 'Validate') {
                this.signatureStatus = false;
            }
        })
    }

    driverSignClear() {
        this.driverSignature = '';
        this.signaturePad1.clear()
    }

    dcSignClear() {
        this.inspectorSignature = '';
        this.signaturePad2.clear()
    }

    statusChange(value, i) {
        for (i = 0; i < this.uiListData.length; i++) {
            if (this.uiListData[i].status == 'Good') {
                for (let j = 0; j < this.uiListData[i].imagesList.length; j++) {
                    this.uiListData[i].imagesList[j].image = ''
                }
            }
        }
    }


    image1: any = '';
    image2: any = '';
    image3: any = '';
    pickImage(i, j) {
        this.loaderBtn = true;
        if (navigator != undefined) {
            navigator.camera.getPicture(
                (base64string) => {
                    this.loaderBtn = false;
                    for (let i = 0; i < this.uiListData.length; i++) {
                        if (this.uiListData[i].vinId == this.loadArrayData.loadId) {
                            this.uiListData[i].imagesListService[j].image = base64string;
                            this.uiListData[i].imagesList[j].image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                                + base64string);
                        }
                    }
                },
                (error) => {
                    alert("Unable to obtain picture: " + error);
                }, {
                    quality: 25,
                    //   allowEdit: true,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.PNG,
                    targetWidth: 100,
                    targeHeight: 100,
                    //     correctOrientation: true
                }
            );

        }
    }

    deleteImage(i, j) {
        for (i = 0; i < this.uiListData.length; i++) {
            if (this.loadId = this.uiListData[i].vinId) {
                this.uiListData[i].imagesList[j].image = ''
            }
        }
    }
    insepectionSuccessMsg: any;
    insepectionErrorMsg: any;
    driverSignStatus: any = false;
    insptrSignStatus: any = false;

    addInsepctionWithSignature() {
        if (this.inspectorSignature != '' && this.driverSignature != '') {
            this.loaderBtn = true;
            var postObj = {
                "id": this.inspectionData[0].inspection.id,
                "driverComment": this.driverComment,
                "inspectorComment": this.inspectorComment,
                "driverSignature": this.driverSignature.replace('data:image/png;base64,', ''),
                "inspectorSignature": this.inspectorSignature.replace('data:image/png;base64,', '')
            }
            this.inspectionService.addInsepctionWithSignature(JSON.stringify(postObj)).subscribe((data: any) => {
                //this.loaderBtn = false;
                // if (data.error == null) {
                //     let setValue: any = 'true';
                //     localStorage.setItem('inspectionStatus', setValue);
                //     this.title = "Delivery Inspection"
                //     this.popupMessage = "Delivery Inspection Completed Successfully";
                //     this.popupRoute = "./skiddrop";
                //     this.popup.click();
                // } else {
                //     this.title = "Delivery Inspection"
                //     this.popupMessage = data.error.message;
                //     this.popupRoute = "./skiddrop"
                //     this.popup.click();
                // }
            })
            setTimeout(() => {
                this.loaderBtn = false;
                let setValue: any = 'true';
                localStorage.setItem('inspectionStatus', setValue);
                this.title = "Delivery Inspection"
                this.popupMessage = "Delivery Inspection Completed Successfully";
                this.popupRoute = "./skiddrop";
                this.popup.click();
            }, 2000)
        } else {
            this.loaderBtn = false;
            if (this.driverSignature == '') {
                this.driverSignStatus = true;
            }
            if (this.inspectorSignature == '') {
                this.insptrSignStatus = true;
            }
        }
    }
    // addInsepctionWithSignature() {
    //     if (this.inspectorSignature != '' && this.driverSignature != '') {
    //         //  this.loaderBtn = true;
    //         var postObj = {
    //             "id": this.inspectionData[0].inspection.id,
    //             "driverComment": this.driverComment,
    //             "inspectorComment": this.inspectorComment,
    //             "driverSignature": this.driverSignature.replace('data:image/png;base64,', ''),
    //             "inspectorSignature": this.inspectorSignature.replace('data:image/png;base64,', '')
    //         }
    //         this.inspectionService.addInsepctionWithSignature(JSON.stringify(postObj)).subscribe((data: any) => {
    //             this.loaderBtn = false;
    //             if (data.error == null) {
    //                 let setValue: any = 'true';
    //                 localStorage.setItem('inspectionStatus', setValue);
    //                 this.title = "Delivery Inspection"
    //                 this.popupMessage = "Delivery Inspection Completed Successfully";
    //                 this.popupRoute = "./skiddrop";
    //                 this.popup.click();
    //             } else {
    //                 this.title = "Delivery Inspection"
    //                 this.popupMessage = data.error.message;
    //                 this.popupRoute = "./skiddrop"
    //                 this.popup.click();
    //             }
    //         })
    //     } else {
    //         this.loaderBtn = false;
    //         if (this.driverSignature == '') {
    //             this.driverSignStatus = true;
    //         }
    //         if (this.inspectorSignature == '') {
    //             this.insptrSignStatus = true;
    //         }
    //     }
    // }

    goBack() {
        this.router.navigate(['./post-inspection/skidinspection']);
    }

}

