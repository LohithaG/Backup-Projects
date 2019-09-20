import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './channel-wise.routing';
import { InfoBoxModule } from '../shared-modules/info-boxes/info-boxes.module';
import { DateFilterModule } from '../shared-modules/date-filters/date-filter.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';
import { ChannelwiseComponent } from './channel-wise.component';
import { ChannelWiseService } from './channel-wise.service';
@NgModule({
    imports: [
        SmartadminModule,
        routing,
        DateFilterModule,
        InfoBoxModule, 
        LoaderModule
    ],
    declarations: [
        routedComponent
    ],
    providers: [ChannelWiseService],
})
export class ChannelWiseModule {

}
