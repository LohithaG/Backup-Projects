import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './remittance.routing';
import { RemittanceService } from './remittance.service';

import { MyDatePickerModule } from 'mydatepicker';
import { LoaderModule } from '../../loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        LoaderModule,
        MyDatePickerModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [RemittanceService],
})
export class RemittanceModule {

}
