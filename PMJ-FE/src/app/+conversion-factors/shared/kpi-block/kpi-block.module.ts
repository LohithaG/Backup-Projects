import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionKpiBlockComponent } from './kpi-block.component';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [ConversionKpiBlockComponent],
    exports: [ConversionKpiBlockComponent],
    entryComponents: [],
    imports: [CommonModule, SmartadminModule],
})
export class ConversionKpiblockModule { } 

