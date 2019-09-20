

import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
import { RouterModule, Routes } from '@angular/router';
import { DispatcherComponent } from './dispatcher-module.component';
import { barcodeScanner } from '../+barcode-scanner/barcode-scanner.service';
import { ProductService } from '../product-services.service';
import { dispatcherProductViewComponent } from './+view-product/view-product.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
    {
        path: 'dispatcher-module',
        component: DispatcherComponent
    },
    {
        path: 'dispatcher/view/:id',
        component: dispatcherProductViewComponent
    },

]


@NgModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule.forChild(routes), SmartadminModule],
    declarations: [DispatcherComponent, dispatcherProductViewComponent],
    exports: [],
    providers: [ProductService, barcodeScanner],
})
export class DispatcherModule { }