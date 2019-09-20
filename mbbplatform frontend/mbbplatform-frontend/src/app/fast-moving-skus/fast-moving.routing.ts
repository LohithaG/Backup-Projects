import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { FastMovingComponent } from './fast-moving.component';

export const routes: Routes = [
    {
        path: '',
        component: FastMovingComponent
    },
   
];

export const routing = RouterModule.forChild(routes);
export const routedComponent = [
    FastMovingComponent
]
