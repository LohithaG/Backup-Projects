import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { TagPriceToSalesComponentd2h } from './tag-price-to-salesd2h.component';
import { InfoBoxModule } from '../shared/info-boxes/info-boxes.module';
import { DateFilterMarginsModule } from '../shared/date-filter-margins/date-filter-margins.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';
const routes: Routes = [
    {
        path: '',
        component: TagPriceToSalesComponentd2h
    }
]


@NgModule({
    imports: [
        DateFilterMarginsModule,
        SmartadminModule,
        RouterModule.forChild(routes), InfoBoxModule,LoaderModule
    ],
    declarations: [
        TagPriceToSalesComponentd2h
    ],
})
export class TagPriceToSalesModuled2h {

}
