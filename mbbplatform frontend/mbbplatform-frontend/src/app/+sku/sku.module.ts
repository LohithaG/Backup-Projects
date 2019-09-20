import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './sku.routing';
import { DataTableModule } from "angular2-datatable";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";
import { SKUService } from './sku.service';
import { SmartadminValidationModule } from '../shared/forms/validation/smartadmin-validation.module';
import { SmartadminInputModule } from '../shared/forms/input/smartadmin-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../loader/loader.module';


@NgModule({
    imports: [
        SmartadminModule,
        routing,
        SmartadminDatatableModule,
        DataTableModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        LoaderModule,
        SmartadminValidationModule,
        SmartadminInputModule,
    ],
    declarations: [
        routedComponent
    ],
    providers: [SKUService],
})

export class SKUModule {

}
