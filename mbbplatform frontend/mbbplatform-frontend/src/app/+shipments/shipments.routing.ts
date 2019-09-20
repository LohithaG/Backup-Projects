import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ShipmentsComponent } from './shipments.component';
import { ShipmentsDetailsComponent } from "./shipments-details/shipments-details.component";


export const routes: Routes = [
    {
        path: '',
        component: ShipmentsComponent
    },
    {
        path: 'shipments-details/:data.trackingNo',
        component: ShipmentsDetailsComponent
    },
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ShipmentsComponent,
    ShipmentsDetailsComponent
]
