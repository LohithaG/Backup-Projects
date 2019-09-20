import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { CostToTagPriceComponent } from './cost-to-tag-price.component';
import { LoaderModule } from '../../shared-modules/loader/loader.module';
import { InfoBoxModule } from '../shared/info-boxes/info-boxes.module';
import {DateFilterModule} from '../shared/date-filters/date-filter.module'
import { TagToSaleSHWService } from '../margins.service';

const routes: Routes = [
    {
        path: '',
        component: CostToTagPriceComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,
        DateFilterModule,
        InfoBoxModule,
        RouterModule.forChild(routes),LoaderModule
    ],
    declarations: [
        CostToTagPriceComponent
    ],
    providers: [TagToSaleSHWService],
})
export class CostToTagPriceModule {

}
