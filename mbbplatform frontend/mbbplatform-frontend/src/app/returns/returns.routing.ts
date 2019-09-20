import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ReturnsComponent } from './returns-list/returns-list.component';

import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';
import { RefundComponent } from "./refund-details/refund-details.component";
import { ReturnDetailsComponent } from "./return-details/return-details.component";

export const routes: Routes = [
    {
        path: '',
        component: ReturnsComponent,
    },
    {
        path: 'refund/:date1/:id/:orderId',
        component: RefundComponent,
    },
    {
        path: 'return/:date/:dispatchId/:orderId',
        component: ReturnDetailsComponent,
    },
   
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ReturnsComponent,
    RefundComponent,
    ReturnDetailsComponent
]
