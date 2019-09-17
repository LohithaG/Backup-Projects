import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from "angular2-datatable";
import { routing } from './chat.routing';
import { ChatComponent } from './components/add/chat.component';

import { MyDatePickerModule } from 'mydatepicker';
import { SelectModule } from 'angular2-select';
import { BoldPipe } from './components/add/chat.pipe';
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
    ChatComponent,
    BoldPipe
  ]
})
export class ChatModule { }
