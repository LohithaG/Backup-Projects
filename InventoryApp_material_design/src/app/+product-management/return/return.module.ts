import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReturnProductComponent, DialogComponent } from './return.component';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,

} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: ReturnProductComponent
    }
]


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatSelectModule,
        MatCheckboxModule,
        CommonModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [ReturnProductComponent, DialogComponent],
    providers: [

    ]
    , entryComponents: [DialogComponent]
})
export class ReturnProductModule { }
