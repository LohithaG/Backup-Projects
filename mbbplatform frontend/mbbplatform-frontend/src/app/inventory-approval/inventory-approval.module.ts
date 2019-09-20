import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, routedComponent } from './inventory-approval.routing';
import { MyDatePickerModule } from 'mydatepicker';
import { LoaderModule } from '../loader/loader.module';


import { InventoryApprovalService } from './inventory-approval.service'


@NgModule({
    declarations: [
        routedComponent
    ],
    imports: [
        LoaderModule,
        SmartadminModule,
        MyDatePickerModule,
        SmartadminDatatableModule,
        routing,
        FormsModule, ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    providers: [InventoryApprovalService]
})
export class InventoryApprovalModule { }
