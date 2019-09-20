

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
} from '@angular/material';



const routes: Routes = [
    { path: '', redirectTo: 'generate' },
    {
        path: 'generate',
        loadChildren: './generate/generate.module#GenerateQrModule'
    },
    {
        path: 'retrieve',
        loadChildren: './retrieve/retrieve.module#RetrieveQrModule'
    },
    {
        path: 'search',
        loadChildren: './search/qr-search.module#SearchQrModule'
    }
]


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [],
    providers: [

    ],
})
export class QrManagementModule { }
