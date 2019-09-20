import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { QrCodesComponent } from './qrcodes.component';
import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: QrCodesComponent,
        data: { roles: ['ADMIN'] }, canActivate: [AuthGuard, UserRoleGuard]
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    QrCodesComponent
]
