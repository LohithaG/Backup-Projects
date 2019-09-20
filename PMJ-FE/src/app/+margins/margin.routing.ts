import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'cost-to-sales' },
    {
        path: 'cost-to-sales',
        loadChildren: './cost-to-sales/cost-to-sales.module#CostToSalesModule',
        data: { pageTitle: 'Cost to Sale' }
    },
    {
        path: 'cost-to-salesd2h',
        loadChildren: './cost-to-salesd2h/cost-to-salesd2h.module#CostToSalesModuled2h'
    },
    {
        path: 'cost-to-tag-price',
        loadChildren: './cost-to-tag-price/cost-to-tag-price.module#CostToTagPriceModule'
    },
    {
        path: 'tag-price-to-sales',
        loadChildren: './tag-price-to-sales/tag-price-to-sales.module#TagPriceToSalesModule',
        data: { pageTitle: 'Tag Price to Sale' }
    },
    {
        path: 'tag-price-to-salesd2h',
        loadChildren: './tag-price-to-salesd2h/tag-price-to-salesd2h.module#TagPriceToSalesModuled2h'
    },

];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [

]

