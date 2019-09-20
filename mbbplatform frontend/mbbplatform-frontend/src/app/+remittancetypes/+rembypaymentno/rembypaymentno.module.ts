import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './rembypaymentno.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import {RemByPaymentNoService } from './rembypaymentno.service';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        MyDatePickerModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [RemByPaymentNoService],
})
export class RemByPaymentNoModule {

}
