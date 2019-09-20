import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionDateFilterComponent } from './date-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [ConversionDateFilterComponent],
    exports: [ConversionDateFilterComponent],
    entryComponents: [],
    imports: [CommonModule, MyDatePickerModule, SmartadminModule],
})
export class ConversionDateFilterModule { }

