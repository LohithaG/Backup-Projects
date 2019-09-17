

import { NgModule } from '@angular/core';
import { SmartadminModule } from '../../shared/smartadmin.module';

import { SkidDetailsComponent } from './skid-details.component';

import { routing } from './skid-details.routing';


@NgModule({
    imports: [routing, SmartadminModule],
    declarations: [SkidDetailsComponent],
    exports: []
})
export class SkidDetailsModule { }
