import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { InventoryApprovalComponent } from './inventory-list/inventory-list.component';
import { InventoryApprovalViewComponent } from "./inventory-view/inventory-view.component";



export const routes: Routes = [
    {
        path: '',
        component: InventoryApprovalComponent,
    },
    {
        path: 'inventory-view/:poNumber/:poName',
        component: InventoryApprovalViewComponent,
    },


];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    InventoryApprovalComponent,
    InventoryApprovalViewComponent
]
