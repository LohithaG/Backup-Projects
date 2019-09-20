import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: 'view' },
    {
        path: 'view',
        loadChildren: './+inventory-view/inventory-view.module#InventoryViewModule'
    },
    {
        path: 'details',
        loadChildren: './+inventory-details/inventory-details.module#InventoryDetailsModule'
    }

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [],
    providers: [

    ],
})
export class InventoryManagerModule { }
