import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { SKUComponent } from './sku-list/sku.component';
import { AddSKUComponent } from './add-sku/add-sku.component';
import { UpdateSKUComponent } from './update-sku/update-sku.component';

import { SkuDetailsComponent } from './sku-imagedetails/sku-details.component';


import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: SKUComponent,
       // data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'add',
        component: AddSKUComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'update/:skuCode',
        component: UpdateSKUComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },
    {
        path: 'view/:skuCode',
        component: SkuDetailsComponent,
        //data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, userRoleGuard]
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    SKUComponent,
    AddSKUComponent,
    UpdateSKUComponent,
    SkuDetailsComponent
]
