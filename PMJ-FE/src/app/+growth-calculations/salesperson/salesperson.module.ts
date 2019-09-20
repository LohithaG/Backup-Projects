import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { SalesPersonComponent } from './salesperson.component';
import { GrowthKPIModule } from '../shared/kpi-block/kpi-block.module';
import { GrowthCalculationService } from '../growth.service';
import { GrowthDateFilterModule } from '../shared/date-filters/date-filter.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: SalesPersonComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        LoaderModule,
        GrowthDateFilterModule,
        RouterModule.forChild(routes),
        GrowthKPIModule
    ],
    declarations: [
        SalesPersonComponent
    ],
    providers: [GrowthCalculationService],
})
export class SalesPersonModule {

}
