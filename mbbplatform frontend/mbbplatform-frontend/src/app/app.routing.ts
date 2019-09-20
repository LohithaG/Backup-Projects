
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuard } from './+auth/guards/index';
import { UserRoleGuard } from './+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'shipping',
                loadChildren: 'app/inventory-shipping/inventory-shipping.module#InventoryShippingModule',
                data: { roles: ['ADMIN', 'SUPERADMIN','INVENTORY_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'shipments',
                loadChildren: 'app/+shipments/shipments.module#ShipmentsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'DISPATCHER', 'ACCOUNTANT_MANAG','ACCOUNTANT'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'analytics',
                loadChildren: 'app/+analytics/analytics.module#AnalyticsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT_MANAG','ACCOUNTANT','INVENTORY_MANAG','DISPATCHER','PRODUCT_VERIFIER','RETURN_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'qrcodes',
                loadChildren: 'app/+qrcodes/qrcodes.module#QRCodesModule',
            },

            {
                path: 'users',
                loadChildren: './+users/users.module#UserModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },

            {
                path: 'sku',
                loadChildren: './+sku/sku.module#SKUModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'INVENTORY_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'vendors',
                loadChildren: 'app/+vendors/vendors.module#VendorsModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT_MANAG', 'ACCOUNTANT'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            // {
            //     path: 'vendors',
            //     loadChildren: 'app/+vendors/vendors.module#VendorsModule',
            //     data: { roles: ['ADMIN', 'ACCOUNTANT_MANAG', 'ACCOUNTANT'] }, canActivate: [AuthGuard, userRoleGuard]
            // },
            {
                path: 'invoices',
                loadChildren: 'app/+invoices/invoices.module#InvoicesModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'INVENTORY_MANAG', 'DISPATCHER', 'ACCOUNTANT_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'purchaseorder',
                loadChildren: 'app/purchaseorder/po.module#POModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT', 'ACCOUNTANT_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'remittance',
                loadChildren: 'app/+remittancetypes/remittancetypes.module#RemittanceTypesModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT_MANAG', 'ACCOUNTANT'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'fast-moving-skus',
                loadChildren: 'app/fast-moving-skus/fast-moving.module#FastMovingModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT_MANAG', 'ACCOUNTANT'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'returns',
                loadChildren: 'app/returns/returns.module#ReturnModule',
                data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT_MANAG','INVENTORY_MANAG','RETURN_MANAG', 'ACCOUNTANT'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
            {
                path: 'error401',
                loadChildren: './+error/+error401/error401.module#Error401Module'
            },
            {
                path: 'error404',
                loadChildren: './+error/+error404/error404.module#Error404Module'
            },
            {
                path: 'error501',
                loadChildren: './+error/+error501/error501.module#Error501Module'
            },
            {
                path: 'service-error',
                loadChildren: './+error/+service-error/service-error.module#ServiceErrorModule'
            },
            {
                path: 'inventory-approval',
                loadChildren: 'app/inventory-approval/inventory-approval.module#InventoryApprovalModule',
                data: { roles: ['ADMIN', 'SUPERADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
            },
        ]
    },

    { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule' },
    {
        path: 'error',
        loadChildren: './+error/+login-error/login-error.module#ErrorModule'
    },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
