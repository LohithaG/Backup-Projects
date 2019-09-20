import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { RemittanceComponent } from './+rembyorder/remittance.component';



import { AuthGuard } from '../+auth/guards/index';
import { UserRoleGuard } from '../+auth/guards/userRole.guard';
import { RemByPaymentNoComponent } from "./+rembypaymentno/rembypaymentno.component";
import { RemittanceDetailsComponent } from "./+rembypaymentno/remittance-details/remittance-details.component";
import { AmazonAndFlipkartRemittanceComponent } from "./+amazon-flipkart-cod/amazon-flipkart-cod.component";
import { FlipkartRemittanceComponent } from "./+flipkart-cod/flipkart-cod.component";
import { FlipkartTaxComponent } from "./+flipkart-tax-details/flipkart-tax-details.component";
import {AmazonRemittanceComponent} from './+amazon-cod/amazon-cod.component';

export const routes: Routes = [
    {
        path: 'byOrders',
        component: RemittanceComponent,
      
    },
    {
        path: 'byPaymentRef',
        component: RemByPaymentNoComponent,
       
    }, 
    // {
    //     path: 'amazon-flipkart-cod',
    //     component: AmazonAndFlipkartRemittanceComponent,

    // }
   // , 
    {
        path: 'byPaymentRef/remittance-details/:data.crfid/:data.utr',
        component: RemittanceDetailsComponent
    },
     {
        path: 'flipkart-cod',
        component: FlipkartRemittanceComponent,

    },
    {
        path:'amazon-cod',
        component:AmazonRemittanceComponent
    }
   , 
   {
    path: 'flipkart-tax-details/:id/:orderId',
    component: FlipkartTaxComponent,

}

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    RemittanceComponent,
    RemByPaymentNoComponent,
    RemittanceDetailsComponent,
    AmazonAndFlipkartRemittanceComponent,
    FlipkartRemittanceComponent,
    FlipkartTaxComponent,
    AmazonRemittanceComponent
   
]
