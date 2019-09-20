/**
 * Created by griga on 7/11/16.
 */


import { Routes, RouterModule, Data } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { AuthLayoutComponent } from './shared/layout/app-layouts/auth-layout.component';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard, userRoleGuard } from './+auth/guards/index';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'inventory',
        loadChildren: 'app/+inventory-manager/inventory-manager.module#inventoryManagerModule',
        data: { roles: ['INVENTORY_MANAG'] }, canActivate: [AuthGuard, userRoleGuard]
      },
      {
        path: 'dispatcher',
        loadChildren: 'app/+dispatcher-module/dispatcher-module.module#DispatcherModule',
        data: { roles: ['DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      },
      {
        path: 'inventory-search',
        loadChildren: 'app/+search-inventory-page/+search-inventory-page.module#searchInventoryPageModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      }, {
        path: 'inventory-view',
        loadChildren: 'app/+inventory-view-page/inventory-view-page.module#InventoryViewPageModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      }, {
        path: 'inventory-add',
        loadChildren: 'app/+add-inventory-page/add-inventory-page.module#AddInventoryPageModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      },
      {
        path: 'sku-management',
        loadChildren: 'app/add-sku-management/add-sku-management.module#AddSkuManagementModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      },
      {
        path: 'inventory-update',
        loadChildren: 'app/+update-inventory-page/update-inventory-page.module#UpdateInventoryPageModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      }, {
        path: 'add-barcodes',
        loadChildren: 'app/+generate-barcode-module/generate-barcode-module.module.ts#GenerateBarcodeModuleModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      },
      {
        path: 'add-product-display',
        loadChildren: 'app/+add-product-display/add-product-display.module.ts#AddProductDisplayModule',
        data: { roles: ['INVENTORY_MANAG', 'DISPATCHER'] }, canActivate: [AuthGuard, userRoleGuard]
      }


      // {
      //   path: 'dashboard',
      //   loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
      //   data: { pageTitle: 'Dashboard', roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
      // },
      /*   {
          path: 'loads',
          loadChildren: 'app/+loads/loads.module#LoadsModule',
           data: { pageTitle: 'loads', roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
        },
        {
          path: 'maps',
          loadChildren: 'app/+maps/maps.module#MapsModule',
          data: { roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
        }, */
      /*   {
          path: 'barcode',
          loadChildren: 'app/+barcode-scanner/barcode-scanner.module#barcodeScannerModule',
          data: { roles: ['DRIVER', 'ADMIN'] }, canActivate: [AuthGuard]
        }, */

      // {
      //   path: 'profile',
      //   loadChildren: 'app/+profile/profile.module#profileModule',
      //  // data: { roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
      // },

      // {
      //   path: 'users',
      //   loadChildren: 'app/+users/users.module#UserModule',
      //   data: { pageTitle: 'Users', roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
      // },

      /*   {
          path: 'notifications',
          loadChildren: 'app/+notifications/notifications.module#NotificationModule',
          data: { pageTitle: 'Notifications' , roles: ['USER', 'ADMIN'] }, canActivate: [AuthGuard]
        } */
    ]
  },

  {
    path: 'login',
    loadChildren: './+auth/+login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: './+auth/+register/register.module#RegisterModule',
  },
  {
    path: 'forgot-password',
    loadChildren: './+auth/+forgot/forgot.module#ForgotModule'
  },
  {
    path: 'locked',
    loadChildren: './+auth/+locked/locked.module#LockedModule'
  },
  {
    path: 'otp',
    loadChildren: './+auth/+otp/otp.module#OtpModule',
  },
  {
    path: 'error',
    loadChildren: './+auth/+error/error.module#ErrorModule',
  },

  { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },


  // {path: '**', redirectTo: 'miscellaneous/error404'}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
