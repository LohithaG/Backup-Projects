import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../+auth/guards/index';
import { UserRoleGuard } from '../../+auth/guards/userRole.guard';


export const routes: Routes = [
    { path: '', redirectTo: 'inventory' },
    {
        path: 'inventory',
        loadChildren: './inventory/inventory.module#InventoryModule',
        data: { roles: ['ADMIN', 'SUPERADMIN', 'ACCOUNTANT', 'INVENTORY_MANAG', 'DISPATCHER', 'RETURN_MANAG', 'PRODUCT_VERIFIER'] }, canActivate: [AuthGuard, UserRoleGuard]
    },
    {
        path: 'dispatch',
        loadChildren: './dispatch/dispatch.module#DispatchDetailsModule',
        data: { roles: ['ADMIN', 'SUPERADMIN', 'DISPATCHER', 'INVENTORY_MANAG', 'ACCOUNTANT_MANAG', 'RETURN_MANAG', 'PRODUCT_VERIFIER'] }, canActivate: [AuthGuard, UserRoleGuard]
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
] 
