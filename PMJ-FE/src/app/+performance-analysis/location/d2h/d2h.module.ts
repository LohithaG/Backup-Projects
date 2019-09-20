import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { routing, routedComponent } from './d2h.routing';
import { D2HService } from './d2h.service';
import { LocationwiseD2hComponent } from './d2h.component';
import { InfoBoxModule } from '../../shared-modules/info-boxes/info-boxes.module';
import { DateFilterModule } from '../../shared-modules/date-filters/date-filter.module';
import { LoaderModule } from '../../../shared-modules/loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        DateFilterModule,
        InfoBoxModule,
        LoaderModule
    ],
    declarations: [
        LocationwiseD2hComponent,
        routedComponent
    ],
    providers: [D2HService]
})
export class LocationWiseD2hModule {

}
