import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './remittancetypes.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { RemittanceTypesService } from './remittancetypes.service';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { RemittanceService } from './+rembyorder/remittance.service';
import { RemByPaymentNoService } from './+rembypaymentno/rembypaymentno.service';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        LoaderModule,
        FormsModule,
        ReactiveFormsModule,

        SmartadminValidationModule,
        SmartadminInputModule,
        MyDatePickerModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [RemittanceTypesService, RemittanceService, RemByPaymentNoService],
})

export class RemittanceTypesModule {

}
