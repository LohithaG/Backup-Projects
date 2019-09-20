import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { DispatchDetailsComponent } from './dispatch.component';


export const routes: Routes = [
    {
        path: '',
        component: DispatchDetailsComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    DispatchDetailsComponent
]

