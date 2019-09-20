import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { InventoryShippingComponent } from './shipping-list/shipping-list.component';
import { InventoryShippingViewComponent } from './shipping-view/shipping-view.component';
import { AddShippingComponent } from './add-shipping/add-shipping.component';
import { UpdateShippingComponent } from './update-shipping/update-shipping.component';
import { InventoryDispatchComponent } from './inventory-dispatch/inventory-dispatch.component';
import { InventoryTrackingComponent } from './inventory-tracking/inventory-tracking.component';

import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: InventoryShippingComponent,
    },
    {
        path: 'package/:packageName/:packageId',
        component: InventoryShippingViewComponent,
    },
    {
        path: 'add',
        component: AddShippingComponent,
    },
    {
        path: 'update/:packageId/:packageName',
        component: UpdateShippingComponent,
    },
    {
        path: 'package/dispatch/:packageName/:id',
        component: InventoryDispatchComponent
    },
    {
        path: 'tracking/:trackingId',
        component: InventoryTrackingComponent
    }

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    InventoryShippingComponent,
    InventoryShippingViewComponent,
    AddShippingComponent,
    UpdateShippingComponent,
    InventoryDispatchComponent,
    InventoryTrackingComponent
]
