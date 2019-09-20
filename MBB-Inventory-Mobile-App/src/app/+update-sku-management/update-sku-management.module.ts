import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateSkuManagementComponent } from './update-sku-management.component';
import { UtilsModule } from '../shared/utils/utils.module';
import { SmartadminModule } from '../shared/smartadmin.module';
import { ProductService } from '../product-services.service';

const routes: Routes = [
  {
    path: '',
    component: UpdateSkuManagementComponent
  },
]


@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    SmartadminModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UpdateSkuManagementComponent],
  providers: [ProductService]
})
export class UpdateSkuManagementModule { }
