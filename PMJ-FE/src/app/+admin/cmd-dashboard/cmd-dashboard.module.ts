import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './cmd-dashboard.routing';
import { TargetActaulService } from './cmd-dashboard.service';
import { InfoBoxModule } from './shared/info-boxes/info-boxes.module';
import { DateFilterModule } from './shared/date-filters/date-filter.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        InfoBoxModule,
        DateFilterModule,
        LoaderModule,
        routing
    ],
    declarations: [
        routedComponent
    ],
    providers: [TargetActaulService],
})
export class TargetActualModule {

}
