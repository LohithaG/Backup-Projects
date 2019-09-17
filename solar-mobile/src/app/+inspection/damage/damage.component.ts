import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InspectionServices } from '../inspection.service';
// import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DomSanitizer } from '@angular/platform-browser';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule, AbstractControl, FormArray } from '@angular/forms';
import { globalObj } from '../../load-information';
declare var cordova: any;

declare let navigator: any;
declare var Camera: any;
import { PopupComponent } from 'app/popup/popup.component'


@Component({
    selector: 'app-damage',
    templateUrl: './damage.component.html',
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
.inspectionDropDown {
  background-color: #767E85;
  padding-top: 0px;
  padding-bottom: 0px;
}

.dropDownBackgroungColor{ 
  background-color:white;
  margin: 10px
}
.dropDownBackground{
    background-color:white;
    border-bottom:1px solid black;
    margin: 10px

}

.icon-color-bad{
  color:darkred
}
    
    `]
    //styleUrls: [ './app.component.css' ]
})
export class DamageComponent {

    public complexForm: FormGroup;

    areaData: any;
    typeData: any
    severityData: any
    AreaList: any
    TypeList: any
    SeverityList: any
    formValidate = false
    errorMessage;
    formValid = false
    loaderBtn = false

    itemDetails: any = [];
    itemsAddStatus = false;
    exceptionsLength = 0;

    @ViewChild(PopupComponent) popup;
    popupMessage: any;
    popupRoute



    cartonQr: any;
    loadNumber: any;
    constructor(private router: Router, private fb: FormBuilder, private _sanitizer: DomSanitizer, private route: ActivatedRoute, private inspectionService: InspectionServices) {
        this.complexForm = this.fb.group({
            'items': new FormArray([])
        })
        this.cartonQr = localStorage.getItem('scannedCartonQRCode');
        this.loadNumber = localStorage.getItem('acceptedLoadNumber');
    }
    loadInformation: any;
    ngOnInit() {
        this.loadInformation = JSON.parse(localStorage.getItem('loadObj'));
        this.getAllExceptionAreas()
        this.getAllExceptionTypes()
        this.getAllSeverities()
        this.itemsAddStatus = true;
        (this.complexForm.get('items') as FormArray).push(this.createItem());
    }

    getAllExceptionAreas() {
        this.inspectionService.getAllExceptionAreas().subscribe((data) => {
            this.AreaList = data
        })
    }

    getAllExceptionTypes() {
        this.inspectionService.getAllExceptionTypes().subscribe((data) => {
            this.TypeList = data
        })
    }

    getAllSeverities() {
        this.inspectionService.getAllSeverities().subscribe((data) => {
            this.SeverityList = data
        })
    }
    createItem() {
        return new FormGroup({
            'exceptionArea': new FormControl(null, Validators.required),
            'exceptionType': new FormControl(null, Validators.required),
            'exceptionSeverity': new FormControl(null, Validators.required),
            'comments': new FormControl(null, Validators.required),
            'damageImages': new FormArray([this.createImage()])
        })
    }
    addImage(control) {
        if (control.value.length < 3) {
            control.push(this.createImage())
        }
        else {
            alert('Not Allowed More than 3 images')
        }
    }

    createImage() {
        return new FormGroup({
            'image': new FormControl(null),
            'base64': new FormControl(null, Validators.required)

        })
    }

    onDeleteItem(index) {
        const controlArray: any = this.complexForm.get('items') as FormArray;
        controlArray.controls = [];
        (this.complexForm.get('items') as FormArray).push(this.createItem());
        //this.status = false

    }

    deleteImage(control, index) {
        control.removeAt(index)
        if (control.value.length == 0) {
            this.addImage(control)
        }
    }


    pickImage(control, index) {
      
        this.loaderBtn = true;
        if (navigator != undefined) {
            navigator.camera.getPicture(
                (base64string) => {
                    this.loaderBtn = false;
                    const image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                        + base64string);
                    control.controls[index].get('base64').setValue(image)
                    control.controls[index].get('image').setValue(base64string)
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





    exptionObjectData: any = [];
    onAddItem() {
        this.status = true
        this.formValidate = false
        if (this.complexForm.valid) {
            const controlArray: any = this.complexForm.get('items') as FormArray;
            this.exptionObjectData.push(controlArray.value[0])
            // this.formValidate = false;
            controlArray.controls = [];
            (this.complexForm.get('items') as FormArray).push(this.createItem());
            this.exceptionsLength = this.exptionObjectData.length
        }
        else {
            this.formValidate = true;
        }
    }
    hide() {
        this.status = true
        const controlArray: any = this.complexForm.get('items') as FormArray;
        controlArray.controls = [];
        (this.complexForm.get('items') as FormArray).push(this.createItem());
        this.formValidate = false
    }



    status = true
    expetionList() {
        const controlArray: any = this.complexForm.get('items') as FormArray;
        if (this.exptionObjectData.length > 0) {
            controlArray.controls = []
            this.status = false
        }
    }

    deleteException(index) {
        this.exptionObjectData.splice(index, 1)
        this.exceptionsLength = this.exptionObjectData.length
        if (this.exceptionsLength == 0) {
            this.hide()
        }
    }
    postObj: any = {}
    successMsg: any = '';
    title;

    validateException() {
        this.loaderBtn = true
        var obj = {
            "loadNumber": this.loadNumber,
            "inspectionType": 1,
            "locNbr": this.loadInformation.originLocNbr.locNbr,
            "cartonObj": {
                "id": localStorage.getItem('scannedCartonId'),
                "cartonStatus": 2,
                "updatedDate": new Date(),
                exceptionObj: {
                    exceptionObjects: this.exptionObjectData
                }
            }
        }

        this.inspectionService.inspectionCartonByScan(obj).subscribe((data) => {
            this.loaderBtn = false
            this.title = "Pick-Up Inspection"
            this.popupMessage = "Damage Images Added Successfully";
            this.popupRoute = "./inspection/inspectionDetails/" + this.loadNumber;
            this.popup.click();
        })
    }
    submit() {
        if (this.complexForm.valid) {
            const controlArray: any = this.complexForm.get('items') as FormArray;
            this.exptionObjectData.push(controlArray.value[0])
            this.exceptionsLength = this.exptionObjectData.length
            this.validateException()
        }
        else {
            this.formValidate = true
        }
    }
}

