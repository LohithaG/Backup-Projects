

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'add' },
    {
        path: 'add',
        loadChildren: './add/add-sku-management.module#AddSkuManagementModule'

    },
    {
        path: 'update',
        loadChildren: './update/update-sku-management.module#UpdateSkuManagementModule'
    }]
 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [],
    providers: [

    ],
})
export class SKUModule { }
