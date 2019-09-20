import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';


export const routes: Routes = [
    {
        path: '',
        component: InventoryComponent
    },
    {
        path: 'inventory-details/:sku/:id/:locationid',
        component: InventoryDetailsComponent
    },
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    InventoryComponent,
    InventoryDetailsComponent
]
