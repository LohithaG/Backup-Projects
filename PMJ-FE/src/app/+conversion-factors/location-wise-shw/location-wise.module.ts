import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { ConversionLocationWiseSHWComponent } from './location-wise.component'
import { ConversionLocationWiseSHWService } from './location-wise.service'

import { ConversionDateFilterModule } from '../shared/date-filters/date-filter.module';
import { ConversionKpiblockModule } from '../shared/kpi-block/kpi-block.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

export const routes: Routes = [
    {
        path: '',
        component: ConversionLocationWiseSHWComponent
    }
];

@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes),

        ConversionDateFilterModule,
        ConversionKpiblockModule,
        LoaderModule
    ],
    declarations: [ConversionLocationWiseSHWComponent],
    providers: [ConversionLocationWiseSHWService],
})
export class ConversionLocationWiseSHWModule {

}
