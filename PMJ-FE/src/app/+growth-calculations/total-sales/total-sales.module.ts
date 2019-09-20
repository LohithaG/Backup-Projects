import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { TotalSalesComponent } from './total-sales.component';
import { GrowthKPIModule } from '../shared/kpi-block/kpi-block.module';
import { GrowthCalculationService } from '../growth.service';
import { GrowthDateFilterModule } from '../shared/date-filters/date-filter.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: TotalSalesComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        LoaderModule,
        GrowthDateFilterModule,
        RouterModule.forChild(routes), GrowthKPIModule
    ],
    declarations: [
        TotalSalesComponent
    ],
    providers: [GrowthCalculationService],
})
export class TotalSalesModule {

}
