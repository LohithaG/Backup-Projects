import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: 'add' },
    {
        path: 'add',
        loadChildren: './add/add-product.module#AddProductModule'

    },
    {
        path: 'update',
        loadChildren: './update/update-product.module#UpdateProductModule'
    },

    {
        path: 'view',
        loadChildren: './view/view-product.module#ViewProductModule'
    },

    {
        path: 'return',
        loadChildren: './return/return.module#ReturnProductModule'
    },
    {
        path: 'shipping',
        loadChildren: './shipping/shipping.module#ShippingProductModule'
    },
    {
        path: 'return-product',
        loadChildren: './return-invoice/return-invoice.module#ReturnInvoiceModule'
    },
    {
        path: 'delete',
        loadChildren: './del/delete.module#DeleteProductModule'
    }

]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [],
    exports: [],
    providers: [

    ],
})
export class ProductManagementModule { }
