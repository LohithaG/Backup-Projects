import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module'
import { routing, routedComponent } from './class-wise.routing';
import { ClassWiseService } from './class-wise.service';
import { ClasswiseComponent } from './class-wise.component';
import { InfoBoxModule } from '../shared-modules/info-boxes/info-boxes.module';
import { DateFilterModule } from '../shared-modules/date-filters/date-filter.module';
import { LoaderModule } from '../../shared-modules/loader/loader.module';
@NgModule({
    declarations: [
        routedComponent,
        ClasswiseComponent
    ],
    imports: [
        SmartadminModule,
        routing,
        DateFilterModule,
        InfoBoxModule,
        LoaderModule
    ],
    providers: [ClassWiseService],
    exports: [ClasswiseComponent]
})
export class ClassWiseModule {

}
