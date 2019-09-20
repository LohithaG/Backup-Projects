import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './shipments.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { MyDatePickerModule } from 'mydatepicker';
import { ShipmentsService } from './shipments.service';
import { LoaderModule } from '../loader/loader.module';



@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        MyDatePickerModule,
        LoaderModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [ShipmentsService],
})
export class ShipmentsModule {

}
