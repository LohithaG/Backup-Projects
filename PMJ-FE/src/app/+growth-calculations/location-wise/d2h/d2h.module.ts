import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { LocationD2HComponent } from './d2h.component';

import { GrowthKPIModule } from '../../shared/kpi-block/kpi-block.module';
import { GrowthCalculationService } from '../../growth.service';
import { GrowthDateFilterModule } from '../../shared/date-filters/date-filter.module';
import { LoaderModule } from '../../../shared-modules/loader/loader.module';
const routes: Routes = [
    {
        path: '',
        component: LocationD2HComponent
    }
]


@NgModule({
    imports: [
        LoaderModule,
        SmartadminModule,
        GrowthDateFilterModule,
        RouterModule.forChild(routes), GrowthKPIModule],
    declarations: [
        LocationD2HComponent
    ],
    providers: [GrowthCalculationService],
})
export class D2HWiseLocationModule {

}
