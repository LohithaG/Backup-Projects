import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsDetailsComponent } from "./shipments-details.component";


export const routes: Routes = [
    {
        path: '',
        component: ShipmentsDetailsComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ShipmentsDetailsComponent
]
