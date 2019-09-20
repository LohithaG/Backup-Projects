import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { TargetVsActualComponent } from './cmd-dashboard.component';

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
