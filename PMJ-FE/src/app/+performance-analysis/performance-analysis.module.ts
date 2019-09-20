import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing, routedComponent } from './performance-analysis.routing';

@NgModule({
    imports: [
        SmartadminModule,
        routing,
    ],
    declarations: [
        routedComponent
    ],
    providers: [],
})
export class PerformanceAnalysisModule {

}
