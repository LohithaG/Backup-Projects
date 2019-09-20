import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { LocationwiseD2hComponent } from './d2h.component'
export const routes: Routes = [

    {
        path: '',
        component: LocationwiseD2hComponent
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    LocationwiseD2hComponent
]

