import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { RemittanceDetailsComponent } from './remittance.component';


export const routes: Routes = [
    {
        path: '',
        component: RemittanceDetailsComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    RemittanceDetailsComponent
]
