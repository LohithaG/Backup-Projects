import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent, DialogComponent } from './add-product.component';


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
        component: AddProductComponent
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
        CommonModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [AddProductComponent,
        DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class AddProductModule { }
