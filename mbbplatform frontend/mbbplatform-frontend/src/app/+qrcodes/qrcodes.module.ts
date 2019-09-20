import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SmartadminModule } from '../shared/smartadmin.module'

import { routing, routedComponent } from './qrcodes.routing';

import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

import { QRCodesService } from './qrcodes.service'

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        FormsModule,ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [
        routedComponent
    ],
    providers: [QRCodesService],
})
export class QRCodesModule {

}
