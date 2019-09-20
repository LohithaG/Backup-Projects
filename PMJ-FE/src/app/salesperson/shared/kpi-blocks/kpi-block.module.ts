import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPIBLOCKCOMPONENT } from './kpi-block.component';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [KPIBLOCKCOMPONENT],
    exports: [KPIBLOCKCOMPONENT],
    entryComponents: [],
    imports: [CommonModule, SmartadminModule],
})
export class GrowthKPIModule { }
