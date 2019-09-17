import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExpensesServices } from '../expenses.service';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'expenses-list',
    templateUrl: './+expenses-list.component.html',
    styles: [` .widgetBody {
        padding-top: 20px !important;
    }

    .headerRibbon {
        color: #BBB!important;
    }

    .load-subtitle>b {
        color: #3276b1;
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

export class ExpensesListComponent {
    public expensesList: any = [];
    public loadListdataError: any;
    public loadAcceptedDetails: any = [];
    public timeandDistanceInfo: any;

    constructor(private route: Router, private expensesService: ExpensesServices) { }
    apptNbr: any = '';

    ngOnInit() {
        this.getAllLoadNumbers()
    }
    loadNumbersList: any = [];
    getAllLoadNumbers() {
        this.expensesService.getLoadNumberByDriverid(localStorage.getItem('driverData')).subscribe((data) => {
            if (data.error == null) {
                this.loadNumbersList = data.data;
            }
        })
    }

    getExpensesByLoadId() {
        this.expensesService.getAllExpensesByLoadId(this.apptNbr).subscribe((data) => {
            if (data.error == null) {
                this.expensesList = data.data;
            }
        })
    }
    addExpenses() {
        this.route.navigate(['./expenses/addExpenses'])
    }

}
