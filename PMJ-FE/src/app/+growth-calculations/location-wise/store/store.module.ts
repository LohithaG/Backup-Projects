import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { LocationStoreComponent } from './store.component';
import { GrowthKPIModule } from '../../shared/kpi-block/kpi-block.module';
import { GrowthCalculationService } from '../../growth.service';
import { GrowthDateFilterModule } from '../../shared/date-filters/date-filter.module';
import { LoaderModule } from '../../../shared-modules/loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: LocationStoreComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes),
        LoaderModule,
        GrowthKPIModule,
        GrowthDateFilterModule
    ],
    declarations: [
        LocationStoreComponent
    ],
    providers: [GrowthCalculationService],
})
export class StoreWiseLocationModule {

}
