import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { routing } from './po.routing';

import { POComponent } from './po-list/po.component';
import { AddPOComponent } from './po-add/po-add.component';
import { UpdatePOComponent } from './po-update/po-update.component';
import { DetailsComponent } from './details/details.component';
import { LoaderModule } from '../loader/loader.module';



import { POService } from './po.service'
//PriceDetailsComponent

@NgModule({
  declarations: [
    POComponent, AddPOComponent, UpdatePOComponent,
    DetailsComponent,
   
  ],
  imports: [
    SmartadminModule,
    MyDatePickerModule,
    SmartadminDatatableModule,
    routing,
    LoaderModule,
    FormsModule, ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
  ],
  providers: [POService,
  ]
})
export class POModule { }