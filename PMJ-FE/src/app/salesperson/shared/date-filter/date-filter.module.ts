import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterComponent } from './date-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module'
import {Select2Module} from "../select2/select2.module";
import {DateDataFilterService} from "./date-filter.service"

@NgModule({
    declarations: [DateFilterComponent],
    exports: [DateFilterComponent],
    entryComponents: [],
    providers:[DateDataFilterService],
    imports: [CommonModule,Select2Module, 
       MyDatePickerModule, SmartadminModule],
})
export class DateFilterModule { }
