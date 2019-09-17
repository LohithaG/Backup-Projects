import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { routing } from './fuel.routing';
import { LoadDataFilterPipe } from '../shared/pipes/loaddata-filter.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { SelectModule } from 'angular2-select';
import { FuelListComponent } from './components/list/fuel.list.component';
import { FuelAddComponent } from './components/add/fuel.add.component';
import { FuelUpdateComponent } from './components/update/fuel.update.component';

import { SmartadminModule } from "../shared/smartadmin.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

import { Error500Module } from '../+auth/+error/+error500/error500.module';

@NgModule({
  imports: [
    
    SmartadminModule,
    SmartadminDatatableModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    DataTableModule,
    MyDatePickerModule,
    SelectModule,
    Error500Module
  ],
  declarations: [
    FuelListComponent,
    FuelAddComponent,
    FuelUpdateComponent
   // LoadDataFilterPipe

  ]
})
export  class FuelModule { }

