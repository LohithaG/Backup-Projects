import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { searchInventoryPageComponent } from './+search-inventory-page.component';
import { FormsModule }   from '@angular/forms';
import { SmartadminModule } from '../shared/smartadmin.module';

const routes: Routes = [
  {
    path: 'input/:id',
    component: searchInventoryPageComponent
  },
  {
    path: 'input',
    component: searchInventoryPageComponent
  }]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    SmartadminModule
  ],
  declarations: [searchInventoryPageComponent]
})
export class searchInventoryPageModule { }
