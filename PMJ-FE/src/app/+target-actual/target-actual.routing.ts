import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { TargetVsActualComponent } from './target-actual.component';
import { AuthGuard } from '../../+auth/guards/index';
import { UserRoleGuard } from '../../+auth/guards/userRole.guard';

export const routes: Routes = [
    {
        path: '',
        component: TargetVsActualComponent,
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    TargetVsActualComponent
]
