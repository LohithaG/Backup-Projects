import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductDisplayComponent } from './add-product-display.component';

import { SmartadminModule } from '../shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from '../product-services.service';
import { GenerateBarcodeModuleModule } from '../+generate-barcode-module/generate-barcode-module.module';
import { ProductTableModule } from '../+product-table/product-table.module';
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

const routes: Routes = [
  {
    path: 'product-view',
    component: AddProductDisplayComponent
  }]
@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    FormsModule, ReactiveFormsModule,
    GenerateBarcodeModuleModule,
    ProductTableModule, SmartadminDatatableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AddProductDisplayComponent,]
})
export class AddProductDisplayModule { }
