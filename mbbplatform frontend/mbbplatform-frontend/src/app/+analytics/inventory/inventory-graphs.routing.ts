import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { InventoryGraphsComponent } from './inventory-graphs';
import { AuthGuard } from '../../+auth/guards/index';
import { UserRoleGuard } from '../../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: InventoryGraphsComponent,
        //data: { roles: ['ADMIN', 'DISPATCHER', 'ACCOUNTANT_MANAG'] }, canActivate: [AuthGuard, userRoleGuard]
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    InventoryGraphsComponent
]
