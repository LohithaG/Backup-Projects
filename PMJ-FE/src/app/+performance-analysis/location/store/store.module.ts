import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { routing, routedComponent } from './store.routing';
import { StoreService } from './store.service';
import { LocationwiseStoreComponent } from './store.component'
import { RouterModule } from '@angular/router';
import { InfoBoxModule } from '../../shared-modules/info-boxes/info-boxes.module';
import { DateFilterModule } from '../../shared-modules/date-filters/date-filter.module';
import { LoaderModule } from '../../../shared-modules/loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        DateFilterModule,
        InfoBoxModule,
        LoaderModule,
        routing,
        // KpiBlocksModule
    ],
    declarations: [
        LocationwiseStoreComponent,
        routedComponent
    ],
    providers: [StoreService],
    exports: []

})
export class LocationWiseStoreModule {

}
