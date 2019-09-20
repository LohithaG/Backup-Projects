
import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { RemByPaymentNoComponent } from './rembypaymentno.component';
import { RemittanceDetailsComponent } from "./remittance-details/remittance-details.component";


export const routes: Routes = [
    {
        path: '',
        component: RemByPaymentNoComponent
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    RemByPaymentNoComponent,
    RemittanceDetailsComponent
]
