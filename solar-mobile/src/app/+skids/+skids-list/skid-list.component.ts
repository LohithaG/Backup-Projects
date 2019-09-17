import { Component } from '@angular/core';
import { globalObj } from '../../load-information';
import { Router } from '@angular/router';
import { SkidServices } from '../skids.service'
@Component({
    selector: 'skid-list',
    templateUrl: './skid-list.component.html',
    providers: [SkidServices]
})

export class SkidListComponent {
    loadObj: any;
    acceptBtnStatus: any;
    inspectionStatus: any;
    constructor(public _router: Router, public _skidServices: SkidServices) { }
    skidDrops: any = [];
    pickupInspectionLoc: any;
    picInspectionStatus: any;
    navigateMaps: any;

    btnStaus: any;
    ngOnInit() {
        this.loadObj = JSON.parse(localStorage.getItem('loadObj'));
        let acceptedLoadNumber: any = localStorage.getItem('acceptedLoadNumber');
        let preInspectionStatus: any = localStorage.getItem('preInspectionStatus');
        this.btnStaus = localStorage.getItem('acceptedLoadNumber') ? true : false;

        if (acceptedLoadNumber) {
            this.acceptBtnStatus = false;
            if (preInspectionStatus == 'true') {
                this.inspectionStatus = false;
                this.navigateMaps = true;
            } else {
                this.navigateMaps = false;
                this.inspectionStatus = true;
                if (acceptedLoadNumber != this.loadObj.loadNumber) {
                    this.navigateMaps = false;
                    this.inspectionStatus = false;
                    this.acceptBtnStatus = true;
                }
            };
        } else {
            this.acceptBtnStatus = true;
        }

        if (localStorage.getItem('loadNumber')) {
            this._skidServices.getSkidsByloadNumber(localStorage.getItem('loadNumber')).subscribe((data) => {
                if (data.error == null) {
                    this.skidDrops = data.data;
                    if (acceptedLoadNumber) {
                        this._skidServices.getListOfCartonsForPostInspection(acceptedLoadNumber).subscribe((data) => {
                            if (data.error == null) {
                                if ((data.loadDetails.skidDrops.length == data.loadDetails.postInspectionCompletedSkids) && data.loadDetails.skidDrops.length != 0) {
                                    this._skidServices.setLoadAccept(acceptedLoadNumber, 5).subscribe((da) => {
                                        localStorage.removeItem('acceptedLoadNumber');
                                        localStorage.removeItem('preInspectionStatus');
                                        localStorage.removeItem('skiddropInspectionLocName');
                                        localStorage.removeItem('skiddropInspectionLocNum');
                                        localStorage.removeItem('postSkidId');
                                        localStorage.removeItem('loadObj');
                                        this._router.navigate(['./loads'])
                                    })
                                }
                            } else {
                                alert(data.error.message)
                            }
                        })
                    }
                } else {
                    alert(data.error.message)
                }
            })
        } else {
            this._router.navigate(['./loads'])
        }
        this.getMilesDetails();
    }

    loadDetailsData: any;
    pendingInfo: any;
    getMilesDetails() {
        this._skidServices.getLoadDetailsBesedOnMiles(this.loadObj.loadNumber).subscribe((data) => {
            if (data.error == null) {
                this.pendingInfo = data
            } else {
                alert(data.error.message)
            }
        })
    }

    acceptLoad() {
        if (localStorage.getItem('acceptedLoadNumber')) {
            alert('already load accepted');
        } else {
            this._skidServices.setLoadAccept(localStorage.getItem('loadNumber'), 4).subscribe(
                data => {
                    let loadNumber = localStorage.getItem('loadNumber');
                    localStorage.setItem('acceptedLoadNumber', loadNumber)
                    this._router.navigate(['/inspection/inspectionDetails', loadNumber]);
                })
        }
    }

    goBack() {
        this._router.navigate(['/loads'])
    }
    gotoMaps() {
        this._router.navigate(['./maps'])
    }
    goToSkids() {
        let loadNumber = localStorage.getItem('acceptedLoadNumber')
        this._router.navigate(['/inspection/inspectionDetails', loadNumber])
    }
    gotodeliveryInspection() {
        this._router.navigate(['/post-inspection/inspectionDetails', this.pickupInspectionLoc])
    }


    loadComplete() {
        this._skidServices.setLoadAccept('100009', 5).subscribe((da) => { })
    }
}