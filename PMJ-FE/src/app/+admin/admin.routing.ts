
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', redirectTo: 'users' },
  {
    path: 'users',
    loadChildren: './+users/users.module#UserModule',
  },
  {
    path: 'dashboard',
    loadChildren: './cmd-dashboard/cmd-dashboard.module#TargetActualModule',
  }
];


export const routing = RouterModule.forChild(routes)
