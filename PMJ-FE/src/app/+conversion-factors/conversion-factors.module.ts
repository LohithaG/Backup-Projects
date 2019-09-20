import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module'
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'conversion-location-wise-d2h' },
    {
        path: 'conversion-location-wise-d2h',
        loadChildren: './location-wise-d2h/location-wise-d2h.module#ConversionLocationWiseD2HModule'
    },

    {
        path: 'conversion-location-wise-shw',
        loadChildren: './location-wise-shw/location-wise.module#ConversionLocationWiseSHWModule'
    },
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
export class ConversionFactorsModule {

}
