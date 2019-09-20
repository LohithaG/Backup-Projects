import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSkuManagementComponent } from './add-sku-management.component';
import { UtilsModule } from '../shared/utils/utils.module';
import { SmartadminModule } from '../shared/smartadmin.module';
import { ProductService } from '../product-services.service';

const routes: Routes = [
  {
    path: 'add',
    component: AddSkuManagementComponent
  },
  {
    path: 'update',
    loadChildren: '../+update-sku-management/update-sku-management.module#UpdateSkuManagementModule'
  }
]


@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    SmartadminModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AddSkuManagementComponent],
  providers: [ProductService]
})
export class AddSkuManagementModule { }
