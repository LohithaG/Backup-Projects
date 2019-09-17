import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InspectionServices } from './inspection.service';
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
    selector: 'app-inspection',
    templateUrl: './inspection.component.html',
    providers: [InspectionServices],
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
export class InspectionComponent {

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
        private inspectionService: InspectionServices) {
        this.Timer = setInterval(() => {
            this.CurrentTime = new Date()
        }, 1000);
    }

    ngOnDestroy() {
        this.CurrentTime = '';
        clearInterval(this.Timer)
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
            this.inspectionService.getCartonExceptions(this.inspectionData[index], 1).subscribe((data) => {
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
    validateCarton() {
 

        // localStorage.setItem('scannedCartonQRCode', '4ERQBUGENCQDT7SC');
        // this.inspectionService.validateCarton(this.loadNumberId, '4ERQBUGENCQDT7SC', 1).subscribe((data) => {
        //     if (data.error == null) {
        //         this.ScannedCartonInfo = data.data;
        //         this.cartonInfoModal.show();
        //         this.timerValue = setTimeout(() => {
        //             this.setGoodCondition()
        //             this.cartonInfoModal.hide();
        //         }, 5000);
        //     } else {
        //         alert(data.error.message);
        //     }
        // })

        this._scannerService.promiseScan().then(result => {
            this.resultQrcode = result;
            if (!this.resultQrcode.cancelled) {
                localStorage.setItem('scannedCartonQRCode', this.resultQrcode.text);
                this.inspectionService.validateCarton(this.loadNumberId, this.resultQrcode.text, 1).subscribe((data) => {
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
            "inspectionType": 1,
            "locNbr": this.loadInformation.originLocNbr.locNbr,
            "cartonObj": {
                "id": this.ScannedCartonInfo.id,
                "cartonStatus": 1,
                "updatedDate": new Date(),
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
        this.router.navigate(['/inspection/damage/pre/'])
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
    loadNumberId: any;
    loadInformation: any = {};
    ngOnInit() {
        this.loadInformation = JSON.parse(localStorage.getItem('loadObj'));
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const loadId = params['id'];
                this.loadNumberId = params['id'];
                this.getCartonsList();
            }
            else {
                console.log('Driver has not selected any load');
            }
        })
    }
    detailsData: any
    getCartonsList() {
        this.inspectionData = [];
        this.inspectionService.getListOfCartonsDetails(this.loadNumberId, 1, this.loadInformation.originLocNbr.locNbr).subscribe((data: any) => {
            this.inspectionData = data;
            this.detailsData = data
            if (this.inspectionData.length > 0) {
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
                    data.cartons.weight.includes(this.cartonId.toLowerCase()) || data.cartons.destinationLocation.locAddrName.toLowerCase().includes(this.cartonId.toLowerCase()))
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
                    correctOrientation: true
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
                if (data.error == null) {
                    this.loaderBtn = false;
                    let setValue: any = 'true';
                    localStorage.setItem('preInspectionStatus', setValue);
                    this.title = "Pick-Up Inspection";
                    this.popupMessage = "Pick-Up Inspection Completed Successfully";
                    this.popupRoute = "./skiddrop";
                    this.popup.click();
                } else {
                    this.loaderBtn = false
                    this.title = "Pick-Up Inspection"
                    this.popupMessage = data.error.message;
                    this.popupRoute = "./loads";
                    this.popup.click();
                }
            })
        } else {
            if (this.driverSignature == '') {
                this.driverSignStatus = true;
            }
            if (this.inspectorSignature == '') {
                this.insptrSignStatus = true;
            }
        }

    }

    goBack() {
        this.router.navigate(['/loads']);
    }

}

