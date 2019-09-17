
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SkidDetailsComponent } from './skid-details.component';


export const routes: Routes = [

    {
        path: '',
        component: SkidDetailsComponent
    }
];

export const routing = RouterModule.forChild(routes);
