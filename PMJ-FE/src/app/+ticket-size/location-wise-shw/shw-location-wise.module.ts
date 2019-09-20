import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { TicketLocationWiseSHWComponent } from './shw-location-wise.component'
import { InfoBoxModule } from '../../shared-modules/info-boxes/info-boxes.module';
import { TicketDateFilterModule } from '../shared/date-filters/date-filter.module';
import { TicketKpiblockModule } from '../shared/kpi-block/kpi-block.module';
import { TicketLocationWiseSHWService } from './shw-location-wise.service'
import { LoaderModule } from '../../shared-modules/loader/loader.module';

export const routes: Routes = [
    {
        path: '',
        component: TicketLocationWiseSHWComponent
    }
];

@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes),
        TicketDateFilterModule,
        InfoBoxModule,
        TicketKpiblockModule,
        LoaderModule
    ],
    declarations: [TicketLocationWiseSHWComponent],
    providers: [TicketLocationWiseSHWService],
})
export class TicketsLocationWiseSHWModule {

}
