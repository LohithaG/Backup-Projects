import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { globalObj } from '../../load-information';
import { LoadServices } from '../loads.service';
declare var cordova: any;

declare let navigator: any;
declare let Camera: any;
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'load-list',
    templateUrl: './loadList.component.html',
    styles: [` .widgetBody {
        padding-top: 20px !important;
    }

    .headerRibbon {
        color: #BBB!important;
    }

    .load-subtitle {
        color: #4791FF;
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
})

export class LoadListComponent {
    public loadList: any = [];
    public inspectionData: any
    public loadListdataError: any;
    public loadAcceptedDetails: any = [];
    public timeandDistanceInfo: any;

    constructor(private route: Router, private _sanitizer: DomSanitizer, private loadservice: LoadServices) { }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.loadListDetails();
    }
    damageImageList: any[];

    refreshBtn = true;

    refreshLoads() {
        this.refreshBtn = false;
        this.loadList = [];
        this.loadListDetails();
        // setTimeout(() => {
        //     this.loadListDetails();
        // }, 1000);
    }

    preInspection(loadNumber: any) {
        let id: any = 1;
        localStorage.setItem('inspectionType', id);
        this.route.navigate(['/inspection/inspectionDetails', loadNumber])
    }

    loadListDetails() {
        const driverId = localStorage.getItem('driverData');
        this.loadservice.getAllLoads(driverId).subscribe(
            data => {
                if (data.data !== null) {
                    this.refreshBtn = true;
                    this.loadList = data.data;
                    for (let i = 0; i < this.loadList.length; i++) {
                        this.refreshBtn = true;
                        if (this.loadList[i].loadStatNbr.id === 4) {
                            localStorage.setItem('acceptedLoadNumber', this.loadList[i].loadNumber);
                            localStorage.setItem('preInspectionStatus', this.loadList[i].preInspectionStatus);
                            localStorage.setItem('loadObj', JSON.stringify(this.loadList[i]));
                            break;
                        }
                    }
                } else {
                    this.refreshBtn = true;
                    this.loadListdataError = data.error.message;
                }
            },
            error => {
                console.log(JSON.stringify(error))
                this.loadListdataError = error;
            });
    }

    loadDetails(loadInfo: any) {
        globalObj.loadNumber = loadInfo.loadNumber;
        globalObj.preInspectionStatus = loadInfo.preInspectionStatus;
        globalObj.loadObj = loadInfo;
        localStorage.setItem('loadNumber', loadInfo.loadNumber);
        localStorage.setItem('preInspectionStatus', loadInfo.preInspectionStatus);
        localStorage.setItem('loadObj', JSON.stringify(loadInfo));
        this.route.navigate(['./skiddrop'])
    }

    postInspection(loadNumber) {
        let id: any = 2;
        localStorage.setItem('inspectionType', id);
        this.route.navigate(['/inspection/inspectionDetails', loadNumber])
    }

}
