import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './target-actual.routing';
import { TargetActaulService } from './target-actual.service';
import { InfoBoxModule } from './shared/info-boxes/info-boxes.module';
import { DateFilterModule } from './shared/date-filters/date-filter.module';
import { LoaderModule } from '../shared-modules/loader/loader.module';

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
