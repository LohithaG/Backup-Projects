import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { addEnquiryComponent } from './+add/add.component'

export const routes: Routes = [
    {
        path: '', redirectTo: 'add', pathMatch: 'full'
    },
    {
        path: 'add',
        component: addEnquiryComponent,
    }
];

export const routing = RouterModule.forChild(routes);
 