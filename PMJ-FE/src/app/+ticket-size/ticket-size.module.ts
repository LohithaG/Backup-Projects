import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'location-wise-shw' },
    {
        path: 'location-wise-shw',
        loadChildren: './location-wise-shw/shw-location-wise.module#TicketsLocationWiseSHWModule'
    },
    {
        path: 'location-wise-d2h',
        loadChildren: './location-wise-d2h/d2h-location-wise.module#TicketsLocationWiseD2HModule'
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
export class TicketSizeModule {

}
