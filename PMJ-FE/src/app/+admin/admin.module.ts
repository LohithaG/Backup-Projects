import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { routing } from './admin.routing';
import { SmartadminDatatableModule } from '../shared/ui/datatable/smartadmin-datatable.module';
import { AuthService } from '../+auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
declare var require: any;
@NgModule({
  declarations: [
    
  ],
  imports: [
    SmartadminModule,
    SmartadminDatatableModule,
    routing,
    FormsModule, ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AdminModule { }
