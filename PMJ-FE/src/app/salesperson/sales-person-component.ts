import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { DataService } from "./sharedservice";
import { SalesPersonService } from './sales-person-service'

@Component({
  selector: 'app-sales-person-component',
  templateUrl: './sales-person-component.html',
  styleUrls: ['./sales-person-component.css'],

})
export class SalesPersonComponent implements OnInit {
  public activePath: string;
  emp: any;

  kpiBlockInfo: any;
  constructor(private route: ActivatedRoute, private router: Router,
    private cdr: ChangeDetectorRef, private datas: DataService,
    private salespersonService: SalesPersonService) {
  }

  componentRef: any;
  changeOfRoutes(event) {
    this.componentRef = event;
    const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
    this.activePath = snapshot.url;
    this.componentRef.getdata();
  }
  obj = {};
  ngOnInit() {
  };

  queryDate(event) {
    this.obj = event;

    this.getdata()

  }
  flag = false;
  getdata() {
    this.cdr.detectChanges();
    this.kpiBlockInfo = {};
    this.salespersonService.getKpiBlocksInfo(this.obj).subscribe((data: any) => {
      if (data.status !== 409) {
        this.kpiBlockInfo = data.data;
        if (this.kpiBlockInfo.ticketSize != null) {
          if (this.kpiBlockInfo.ticketSize.actual === "NaN" || this.kpiBlockInfo.ticketSize.actual === 'Infinity') {
            let flag = {
              bool: true
            }
            this.kpiBlockInfo.ticketSize.flag = flag;
          } else {
            let flag = {
              bool: false
            }
            this.kpiBlockInfo.ticketSize.flag = flag;

          }

        }

      }
    })
    this.datas.changeMessage(this.obj)
    this.componentRef.toService();

  }
}






