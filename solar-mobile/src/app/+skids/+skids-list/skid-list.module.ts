

import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module';
import { SkidListComponent } from './skid-list.component';
import { routing } from './skid-list.routing';


@NgModule({
    imports: [routing, SmartadminModule],
    declarations: [SkidListComponent],
    exports: []
})
export class SkidListModule { }
