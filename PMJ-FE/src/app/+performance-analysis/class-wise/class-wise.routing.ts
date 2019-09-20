import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ClasswiseComponent } from './class-wise.component'
export const routes: Routes = [

    {
        path: '',
        component: ClasswiseComponent
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ClasswiseComponent
]

