import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'shipments' },
    {
        path: 'shipments',
        loadChildren: './shipments/shipments.module#ShipmentsModule',
    },
    {
        path: 'remittance',
        loadChildren: './remittance/remittance.module#RemittanceModule',
    },
    {
        path: 'inventory-graphs',
        loadChildren: './inventory/inventory-graphs.module#AnayticsGraphsModule',
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
]

