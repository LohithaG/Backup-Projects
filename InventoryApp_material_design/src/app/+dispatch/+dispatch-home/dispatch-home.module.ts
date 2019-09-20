import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DispatchManagerHomeComponent } from './dispatch-home.component';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: DispatchManagerHomeComponent
    }
]


@NgModule({
    imports: [
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule, ReactiveFormsModule,
    ],
    declarations: [DispatchManagerHomeComponent],
    providers: [

    ],
    entryComponents: []
})
export class DispatchHomeModule { }
