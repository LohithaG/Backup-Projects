import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'reports' },
   
    {
        path: 'reports',
        loadChildren: './+reports/reports.module#ReportsModule',
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
]

