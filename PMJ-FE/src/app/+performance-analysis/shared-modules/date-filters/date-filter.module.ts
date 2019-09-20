import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterComponent } from './date-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { DateDataFilterService } from './date-filter.service';

@NgModule({
    declarations: [DateFilterComponent],
    exports: [DateFilterComponent],
    entryComponents: [],
    providers:[DateDataFilterService],
    imports: [CommonModule, MyDatePickerModule, SmartadminModule],
})
export class DateFilterModule { }
