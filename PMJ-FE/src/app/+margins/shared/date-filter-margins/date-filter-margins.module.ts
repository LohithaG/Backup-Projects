import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFilterComponentMargins } from './date-filter-margins.component';
import { MyDatePickerModule } from 'mydatepicker';
import { SmartadminModule } from '../../../shared/smartadmin.module';
import {TagToSaleSHWService} from '../../margins.service'
import {DateFilterService} from './date-filter-service.service'
@NgModule({
    declarations: [DateFilterComponentMargins],
    exports: [DateFilterComponentMargins],
    entryComponents: [],
    providers: [TagToSaleSHWService,DateFilterService],
    imports: [CommonModule, 
       MyDatePickerModule, SmartadminModule],
       
})
export class DateFilterMarginsModule { }
