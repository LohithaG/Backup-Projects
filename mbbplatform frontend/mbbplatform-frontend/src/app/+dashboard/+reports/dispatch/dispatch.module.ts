import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { routing, routedComponent } from './dispatch.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../../shared/ui/datatable/smartadmin-datatable.module";
import { MyDatePickerModule } from 'mydatepicker';
import { LoaderModule } from '../../../loader/loader.module';

@NgModule({
    imports: [
        MyDatePickerModule,
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        LoaderModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [],
})
export class DispatchDetailsModule {

}
