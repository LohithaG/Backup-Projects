import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterComponent } from './date-filter.component';
import { DateFilterService } from './date-filter.service';

import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import { Select2Module } from '../select2/select2.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
@NgModule({
    declarations: [DateFilterComponent],
    exports: [DateFilterComponent],
    entryComponents: [],
    providers: [DateFilterService],
    imports: [CommonModule, MyDatePickerModule, SmartadminModule, Select2Module, ReactiveFormsModule, FormsModule],
})
export class GrowthDateFilterModule { }
