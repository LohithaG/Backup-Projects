import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ShipmentDetailsComponent } from './shipments.component';


export const routes: Routes = [
    {
        path: '',
        component: ShipmentDetailsComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ShipmentDetailsComponent
]
