import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './remittance.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { RemittanceService } from './remittance.service';
import { MyDatePickerModule } from 'mydatepicker';
import { LoaderModule } from '../../loader/loader.module';

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
    providers: [RemittanceService],
})
export class RemittanceModule {

}
