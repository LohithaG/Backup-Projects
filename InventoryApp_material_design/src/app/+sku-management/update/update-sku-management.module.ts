import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateSkuManagementComponent, DialogComponent } from './update-sku-management.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: UpdateSkuManagementComponent
  },
]


@NgModule({
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    RouterModule.forChild(routes),
  ],
  declarations: [UpdateSkuManagementComponent, DialogComponent],
  providers: [],
  entryComponents: [DialogComponent]
})
export class UpdateSkuManagementModule { }
