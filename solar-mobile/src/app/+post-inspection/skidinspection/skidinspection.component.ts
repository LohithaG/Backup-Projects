import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//import { InspectionServices } from '../inspection.service';
// import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DomSanitizer } from '@angular/platform-browser';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ScannerService } from '../scanner';
declare var cordova: any;
import { ModalDirective } from 'ngx-bootstrap';
declare let navigator: any;
declare var Camera: any;
import { globalObj } from '../../load-information';
import { DestinationInspectionServices } from '../post-inspection.service';

@Component({
    selector: 'app-skid',
    templateUrl: './skidinspection.component.html',
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
       color:blue
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

   `]
    //styleUrls: [ './app.component.css' ]
})
export class SkidInspectionComponent {
    skidData: any = { skid: '' }
    skidList: any = []
    loadNumber: any;
    formValidate = false
    constructor(private router: Router, private destinationservice: DestinationInspectionServices) {

    }
    loadCompleteMsg: any;
    ngOnInit() {
        let acceptedLoadNumber = localStorage.getItem('acceptedLoadNumber');
        if (acceptedLoadNumber) {
            this.destinationservice.getListOfCartonsForPostInspection(acceptedLoadNumber).subscribe((data) => {
                if (data.error == null) {
                    this.skidList = data.skidDropsList;
                }
            })
        }
    }

    submit() {
        if (this.skidData.skid != '') {
            globalObj.postSkidLocNum = this.skidData.skid;
            this.skidList.find((skid) => {
                if (skid.destLocNbr.locNbr == this.skidData.skid) {
                    localStorage.setItem('postSkidId', skid.id);
                    localStorage.setItem('skiddropInspectionLocName', skid.destLocNbr.locAddrName);
                }
            })
            // globalObj.selectedSkidId = this.skidData.skid
            // globalObj.skiddropInspectionLocNum = this.skidData.skid;
            localStorage.setItem('skiddropInspectionLocNum', this.skidData.skid);
            this.router.navigate(['/post-inspection/inspectionDetails', this.skidData.skid])
        } else {
            this.formValidate = true
        }
    }

}
