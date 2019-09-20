

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'shipments' },
    {
        path: 'shipments',
        loadChildren: './Zshipments/shipments.module#ShipmentsModule'

    },
    {
        path: 'remittance',
        loadChildren: './Zremittance/remittance.module#RemittanceModule'
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [],
    providers: [

    ],
})
export class ZepoModule { }
