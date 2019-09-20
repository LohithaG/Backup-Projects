import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketKpiBlockComponent } from './kpi-block.component';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [TicketKpiBlockComponent],
    exports: [TicketKpiBlockComponent],
    entryComponents: [],
    imports: [CommonModule, SmartadminModule],
})
export class TicketKpiblockModule { }
