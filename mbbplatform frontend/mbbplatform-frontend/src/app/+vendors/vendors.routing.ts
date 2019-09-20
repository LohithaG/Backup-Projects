
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { VendorsListComponent } from './+vendors-list/vendors-list.component';
import { AddVendorComponent } from './+add-vendor/add-vendor.component';
import { EditVendorComponent } from './+edit-vendor/edit-vendor.component';


export const routes: Routes = [
  {
    path: 'editVendor/:vendorId',
    component: EditVendorComponent,
  },
  {
    path: 'addVendor',
    component: AddVendorComponent,
  },
  {
    path: '',
    component: VendorsListComponent,
  }
];


export const routing = RouterModule.forChild(routes)
