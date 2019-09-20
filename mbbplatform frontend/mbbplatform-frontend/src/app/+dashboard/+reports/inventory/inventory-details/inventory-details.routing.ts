

import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { InventoryDetailsComponent } from './inventory-details.component';


export const routes: Routes = [
    {
        path: '',
        component: InventoryDetailsComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    InventoryDetailsComponent
]
