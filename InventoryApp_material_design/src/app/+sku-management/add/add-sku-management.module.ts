import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSkuManagementComponent, DialogComponent } from './add-sku-management.component';
import {SharedModule} from '../../shared.module'

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatIconModule,
  MatSelectModule,MatDialogModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: AddSkuManagementComponent
  }
]


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule, 
    SharedModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  declarations: [AddSkuManagementComponent, DialogComponent],
  entryComponents: [DialogComponent],
  providers: [

  ]
})
export class AddSkuManagementModule { }
