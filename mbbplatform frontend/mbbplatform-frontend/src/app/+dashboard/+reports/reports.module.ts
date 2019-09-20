import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './reports.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { MyDatePickerModule } from 'mydatepicker';
import { ReportsService } from './reports.service'

@NgModule({
    imports: [
        SmartadminModule,
        routing, MyDatePickerModule,
        SmartadminDatatableModule,
        DataTableModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [ReportsService],
})
export class ReportsModule {

}
