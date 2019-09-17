
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { ExpensesDetailsComponent } from './+expenses-details/+expenses-details.component';
import { ExpensesListComponent } from './+expenses-list/+expenses-list.component';
import { AddExpensesComponent } from './+add-expenses/addexpenses.component';

export const routes: Routes = [

  {
    path: '',
    component: ExpensesListComponent
  },
  {
    path: 'loadDetails/:id',
    component: ExpensesDetailsComponent
  },
  {
      path:'addExpenses',
      component:AddExpensesComponent
  }

];

export const routing = RouterModule.forChild(routes);
