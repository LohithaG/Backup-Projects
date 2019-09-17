import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './expenses.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { Expenseservice } from './expenses.service';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Error500Module } from '../+auth/+error/+error500/error500.module';


@NgModule({
    imports: [
        Error500Module,
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule,
        SmartadminValidationModule,
        SmartadminInputModule,
    ],
    declarations: [
        routedComponent
    ],
    providers: [Expenseservice],
})

export class ExpensesModule {

}
