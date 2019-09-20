import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { CostToSalesComponentd2h } from './cost-to-salesd2h.component';
import { InfoBoxModule } from '../shared/info-boxes/info-boxes.module';
import { DateFilterMarginsModule } from '../shared/date-filter-margins/date-filter-margins.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';
import { TagToSaleSHWService } from '../margins.service';

const routes: Routes = [
    {
        path: '',
        component: CostToSalesComponentd2h
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes), InfoBoxModule, DateFilterMarginsModule,LoaderModule
    ],
    declarations: [
        CostToSalesComponentd2h
    ],
    providers: [TagToSaleSHWService],
})
export class CostToSalesModuled2h {

}
