import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../../shared/smartadmin.module'
import { routing, routedComponent } from './inventory-details.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../../../../shared/ui/datatable/smartadmin-datatable.module";
import { LoaderModule } from '../../../../loader/loader.module';



@NgModule({
    imports: [
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
export class InventoryDetailsModule {

}
