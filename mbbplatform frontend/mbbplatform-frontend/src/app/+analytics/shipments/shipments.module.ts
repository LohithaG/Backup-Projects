import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './shipments.routing';
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
    providers: [],
})
export class ShipmentsModule {

}
