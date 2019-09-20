import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ConvesionLocationwiseD2hComponent } from './location-wise-d2h.component'
export const routes: Routes = [

    {
        path: '',
        component: ConvesionLocationwiseD2hComponent
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ConvesionLocationwiseD2hComponent
]
