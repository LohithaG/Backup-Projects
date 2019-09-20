import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { RemittanceComponent } from './remittance.component';
import { AuthGuard } from '../../+auth/guards/index';
import { UserRoleGuard } from '../../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: RemittanceComponent,
        //data: { roles: ['ADMIN', 'ACCOUNTANT', 'ACCOUNTANT_MANAG'] }, canActivate: [AuthGuard, UserRoleGuard]
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    RemittanceComponent
]
