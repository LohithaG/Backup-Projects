import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, routedComponent } from './inventory-shipping.routing';
import { MyDatePickerModule } from 'mydatepicker';
import { InventoryShippingService } from './inventory-shipping.service'
import { LoaderModule } from '../loader/loader.module';


@NgModule({
    declarations: [
        routedComponent
    ],
    imports: [
        SmartadminModule,
        MyDatePickerModule,
        SmartadminDatatableModule,
        LoaderModule,
        routing,
        FormsModule, ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    providers: [InventoryShippingService]
})
export class InventoryShippingModule { }
