import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from '../shared/smartadmin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddInventoryPageComponent } from './add-inventory-page.component';
import { ProductService } from '../product-services.service';


const routes: Routes = [
  {
    path: 'add',
    component: AddInventoryPageComponent
  },
  {
    path: 'add/:id',
    component: AddInventoryPageComponent
  }
]



@NgModule({
  imports: [
    CommonModule,
    SmartadminModule, FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AddInventoryPageComponent],
  providers: [ProductService]
})
export class AddInventoryPageModule { }
