import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from '../shared/smartadmin.module';
import { UpdateInventoryPageComponent } from './update-inventory-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'update/:id',
    component: UpdateInventoryPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [UpdateInventoryPageComponent]
})
export class UpdateInventoryPageModule { }
