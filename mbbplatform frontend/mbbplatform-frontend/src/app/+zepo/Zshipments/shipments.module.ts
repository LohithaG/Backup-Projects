import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './shipments.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";



@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [],
})
export class ShipmentsModule {

}
