import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './invoices.routing';
import { InvoicesListComponent } from './+invoices-list/invoices-list.component';
import { MyDatePickerModule } from 'mydatepicker';
import { InvoicesService } from './invoices.service'
import { LoaderModule } from '../loader/loader.module';



@NgModule({
  declarations: [
    InvoicesListComponent
  ],
  imports: [
    MyDatePickerModule,
    LoaderModule,
    SmartadminModule,
    SmartadminDatatableModule,

    routing,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [InvoicesService,

  ]
})
export class InvoicesModule { }
