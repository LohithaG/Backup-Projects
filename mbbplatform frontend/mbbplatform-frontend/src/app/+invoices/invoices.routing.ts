
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { InvoicesListComponent } from './+invoices-list/invoices-list.component';


export const routes: Routes = [

  {
    path: '',
    component: InvoicesListComponent,
    data: { pageTitle: 'Invoices Details' }
  }
];


export const routing = RouterModule.forChild(routes)
