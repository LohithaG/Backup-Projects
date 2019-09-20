import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { POComponent } from './po-list/po.component';
import { AddPOComponent } from './po-add/po-add.component';
import { UpdatePOComponent } from './po-update/po-update.component';
import { DetailsComponent } from './details/details.component';

import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: POComponent,
        // data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'add',
        component: AddPOComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'details/:poId',
        component: DetailsComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'update/:skuCode',
        component: UpdatePOComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    POComponent,
    AddPOComponent,
    UpdatePOComponent
]