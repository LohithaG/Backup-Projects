import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, routedComponent } from './returns.routing';
import { MyDatePickerModule } from 'mydatepicker';
import { ReturnService } from './returns.service'
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
    providers: [ReturnService]
})
export class ReturnModule { }
