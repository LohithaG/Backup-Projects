import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { routing } from './cars.routing';
import { LoadsListComponent } from './components/list/cars.list.component';
import { LoadAddComponent } from './components/add/car.add.component';
import { LoadUpdateComponent } from './components/update/car.update.component';
import { LoadDataFilterPipe } from '../shared/pipes/loaddata-filter.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { SelectModule } from 'angular2-select';

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
    LoadsListComponent,
    LoadAddComponent,
    LoadUpdateComponent,
  ]
})
export class CarsModule { }
