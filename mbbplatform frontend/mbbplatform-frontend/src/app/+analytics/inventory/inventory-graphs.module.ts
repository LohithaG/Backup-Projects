import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './inventory-graphs.routing';
import { MyDatePickerModule } from 'mydatepicker';
import { AnalyticsGraphService } from './inventory-graphs.service';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        MyDatePickerModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [AnalyticsGraphService],
})
export class AnayticsGraphsModule {

}
