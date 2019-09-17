
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadChildren: './+skids-list/skid-list.module#SkidListModule'
    },
    {
        path: 'skiddrop:/id',
        loadChildren: './+skid-details/skid-details.module#SkidDetailsModule'
    }
];

export const routing = RouterModule.forChild(routes);
