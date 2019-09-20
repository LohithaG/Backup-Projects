import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { RemittanceComponent } from './remittance.component';


export const routes: Routes = [
    {
        path: '',
        component: RemittanceComponent
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    RemittanceComponent
]
