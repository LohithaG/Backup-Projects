import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './location-wise-d2h.routing';
import { ConversionD2HService } from './location-wise-d2h.service';
import { ConversionDateFilterModule } from '../shared/date-filters/date-filter.module';
import { ConversionKpiblockModule } from '../shared/kpi-block/kpi-block.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
        ConversionDateFilterModule,
        ConversionKpiblockModule,
        LoaderModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [ConversionD2HService]
})
export class ConversionLocationWiseD2HModule {

}
