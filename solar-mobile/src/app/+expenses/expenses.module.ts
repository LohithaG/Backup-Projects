

import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';

import { ExpensesDetailsComponent } from './+expenses-details/+expenses-details.component';
import { ExpensesListComponent } from './+expenses-list/+expenses-list.component';
import {AddExpensesComponent} from './+add-expenses/addexpenses.component'
import {ReactiveFormsModule} from '@angular/forms';
import { routing } from './expenses.routing';
import { MyDatePickerModule } from 'mydatepicker';
import {ExpensesServices} from './expenses.service';

// import { NavigateMapsComponent } from './navigate-map/navigate-map.component';

@NgModule({
  imports: [routing, SmartadminModule,MyDatePickerModule,ReactiveFormsModule],
  declarations: [ExpensesDetailsComponent, ExpensesListComponent,AddExpensesComponent],
  exports: [],
  providers: [ExpensesServices],
})
export class ExpensesModule { }
