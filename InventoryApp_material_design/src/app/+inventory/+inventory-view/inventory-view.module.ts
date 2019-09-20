import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryManagerViewComponent } from './inventory-view.component';


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
        component: InventoryManagerViewComponent
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
    declarations: [InventoryManagerViewComponent],
    providers: [

    ],
    entryComponents: []
})
export class InventoryViewModule { }
