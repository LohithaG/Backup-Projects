import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './barchart.component';
import { SmartadminModule } from '../../../shared/smartadmin.module'

@NgModule({
    declarations: [BarChartComponent],
    exports: [BarChartComponent],
    entryComponents: [],
    imports: [CommonModule],
})
export class BarChartModule { }
