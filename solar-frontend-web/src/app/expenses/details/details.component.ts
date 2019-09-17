import { Component, EventEmitter, ViewChild, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Expenseservice } from '../expenses.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap';
import * as moment from 'moment';
declare var $;
import { DomSanitizer } from '@angular/platform-browser';
/**
 * This component deals with loads update operation
 */

@Component({
    templateUrl: './details.component.html'
})
export class ExpensesDetailsComponent implements OnInit {

    constructor(private router: Router,
        private _sanitizer: DomSanitizer,
        private route: ActivatedRoute,
        private expenseService: Expenseservice,
        private cdr: ChangeDetectorRef) {
    }

    @ViewChild('weatherDetailsModal') public weatherDetailsModal: ModalDirective;
    public showChildModal(): void {
        this.weatherDetailsModal.show();
    }

    public hideChildModal(): void {
        this.weatherDetailsModal.hide();
    }

    expensesList: any;
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                const loadId: string = +params['id'] + '';
                this.expenseService.getExpensesId(loadId).toPromise().then(expensesData => {
                    this.expensesList = expensesData;
                });
            }
        });

    }
    expensesObj: any;
    receiptImage: any = '';
    viewImage(obj) {
        this.expenseService.getExpensesImagebyId(obj.id).subscribe((data) => {
            if (data.error == null) {
                this.expensesObj = data;
                this.receiptImage = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                    + data.billImage);
                this.weatherDetailsModal.show();
            }
        })
    }



    goBack(): void {
        this.router.navigate(['/loads']);
    }
    goToHome() {
        const link = ['/dashboard'];
        this.router.navigate(link);
    }



}
