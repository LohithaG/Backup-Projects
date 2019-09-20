import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'location-wise-store' },
    {
        path: 'location-wise-store',
        loadChildren: './location/store/store.module#LocationWiseStoreModule',
        data: { pageTitle: 'Location wise store' }
    },
    {
        path: 'location-wise-d2h',
        loadChildren: './location/d2h/d2h.module#LocationWiseD2hModule',
        data: { pageTitle: 'Location wise d2h' }
    },
    {
        path: 'class-wise',
        loadChildren: './class-wise/class-wise.module#ClassWiseModule',
        data: { pageTitle: 'Class wise' }
    },
    {
        path: 'channel-wise',
        loadChildren: './channel-wise/channel-wise.module#ChannelWiseModule',
        data: { pageTitle: 'Channel wise' }
    },
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [

]

