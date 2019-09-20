import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import {SmartadminInputModule} from "../../shared/forms/input/smartadmin-input.module";
import { Routes, RouterModule } from '@angular/router';
import { CostToSalesComponent } from './cost-to-sales.component';
import { InfoBoxModule } from '../shared/info-boxes/info-boxes.module';
import {DateFilterModule} from '../shared/date-filters/date-filter.module'
import { TagToSaleSHWService } from '../margins.service';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: CostToSalesComponent
    }
]


@NgModule({
    imports: [
        SmartadminModule,SmartadminInputModule,
        RouterModule.forChild(routes), InfoBoxModule, DateFilterModule,LoaderModule
    ],
    declarations: [
        CostToSalesComponent
    ],
    providers: [TagToSaleSHWService],
})
export class CostToSalesModule {

}
