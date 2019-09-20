import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';
import { TicketLocationWiseD2HComponent } from './d2h-location-wise.component'
import { InfoBoxModule } from '../../shared-modules/info-boxes/info-boxes.module';
import { TicketDateFilterModule } from '../shared/date-filters/date-filter.module';
import { TicketKpiblockModule } from '../shared/kpi-block/kpi-block.module';
import { TicketLocationWiseD2HService } from './d2h-location-wise.service'
import { LoaderModule } from '../../shared-modules/loader/loader.module';

export const routes: Routes = [
    {
        path: '',
        component: TicketLocationWiseD2HComponent
    }
];

@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes),
        InfoBoxModule,
        TicketDateFilterModule,
        TicketKpiblockModule,
        LoaderModule
    ],
    declarations: [TicketLocationWiseD2HComponent],
    providers: [TicketLocationWiseD2HService],
})
export class TicketsLocationWiseD2HModule {

}
