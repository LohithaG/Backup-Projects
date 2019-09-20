import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { routing, routedComponent } from './inventory.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../../shared/ui/datatable/smartadmin-datatable.module";
import { LoaderModule } from '../../../loader/loader.module';
import { MyDatePickerModule } from 'mydatepicker';



@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        LoaderModule,
        DataTableModule,
        MyDatePickerModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [],
})
export class InventoryModule {

}
