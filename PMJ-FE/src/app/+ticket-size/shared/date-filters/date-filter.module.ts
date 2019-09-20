import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketDateFilterComponent } from './date-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [TicketDateFilterComponent],
    exports: [TicketDateFilterComponent],
    entryComponents: [],
    imports: [CommonModule, MyDatePickerModule, SmartadminModule],
})
export class TicketDateFilterModule { }
