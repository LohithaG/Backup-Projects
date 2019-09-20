import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { TagPriceToSalesComponent } from './tag-price-to-sales.component';
import { InfoBoxModule } from '../shared/info-boxes/info-boxes.module';
import { DateFilterModule } from '../shared/date-filters/date-filter.module'
import { TagToSaleSHWService } from '../margins.service';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: TagPriceToSalesComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes), InfoBoxModule, DateFilterModule,LoaderModule
    ],
    declarations: [
        TagPriceToSalesComponent
    ],
    providers: [TagToSaleSHWService],
})
export class TagPriceToSalesModule {

}
