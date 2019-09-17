
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SkidListComponent } from './skid-list.component';


export const routes: Routes = [

    {
        path: '',
        component: SkidListComponent
    }
];

export const routing = RouterModule.forChild(routes);
