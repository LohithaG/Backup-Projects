import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent, DialogComponent } from './update-product.component';


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
        component: UpdateProductComponent
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
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [UpdateProductComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class UpdateProductModule { }
