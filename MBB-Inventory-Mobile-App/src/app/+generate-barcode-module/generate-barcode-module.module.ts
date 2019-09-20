import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateBarcodeModuleComponent } from './generate-barcode-module.component';

import { SmartadminModule } from '../shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductService } from '../product-services.service';

const routes: Routes = [
  {
    path: 'generate',
    component: GenerateBarcodeModuleComponent
  }]
@NgModule({
  imports: [
    CommonModule, SmartadminModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GenerateBarcodeModuleComponent],
  exports:[GenerateBarcodeModuleComponent]
})
export class GenerateBarcodeModuleModule { }
