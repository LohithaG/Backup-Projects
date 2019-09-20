import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { routing } from './vendors.routing';

import { VendorsListComponent } from './+vendors-list/vendors-list.component';
import { AddVendorComponent } from './+add-vendor/add-vendor.component';
import { EditVendorComponent } from './+edit-vendor/edit-vendor.component';
import { LoaderModule } from '../loader/loader.module';


import { VendorService } from './vendors.service'


@NgModule({
  declarations: [
    EditVendorComponent, VendorsListComponent, AddVendorComponent
  ],
  imports: [
    SmartadminModule,
    MyDatePickerModule,
    SmartadminDatatableModule,
    LoaderModule,
    routing,
    FormsModule, ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [VendorService,
  ]
})
export class VendorsModule { }
