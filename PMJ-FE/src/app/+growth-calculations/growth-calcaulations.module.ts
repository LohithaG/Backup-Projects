import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'location-store' },
    {
        path: 'totalsales',
        loadChildren: './total-sales/total-sales.module#TotalSalesModule',
        data: { pageTitle: 'Total Sales' }
    },
    {
        path: 'salesperson',
        loadChildren: './salesperson/salesperson.module#SalesPersonModule',
        data: { pageTitle: 'Sales Person' }
    },
    {
        path: 'channel-wise-growth',
        loadChildren: './channels-wise/channel-wise.module#GrowthChannelWiseModule',
        data: { pageTitle: 'Channel Wise' }
    },
    {
        path: 'location-store',
        loadChildren: './location-wise/store/store.module#StoreWiseLocationModule',
        data: { pageTitle: 'Location Wise Store' }
    },
    {
        path: 'location-d2h',
        loadChildren: './location-wise/d2h/d2h.module#D2HWiseLocationModule',
        data: { pageTitle: 'Location Wise D2H' }
    }
];


@NgModule({
    imports: [
        SmartadminModule,
        RouterModule.forChild(routes)
    ],
    declarations: [

    ],
    providers: [],
})
export class GrowthCalculationsModule {

}
