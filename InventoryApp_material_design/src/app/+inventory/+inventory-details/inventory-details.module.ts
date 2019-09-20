import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryDetailsComponent,FilterPipe, SortPipe } from './inventory-details.component';


import { MatExpansionModule } from '@angular/material/expansion';
import {
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: InventoryDetailsComponent
    }
]


@NgModule({
    imports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        CommonModule,
        [RouterModule.forChild(routes)],
        FormsModule, ReactiveFormsModule,
    ],
    declarations: [FilterPipe,InventoryDetailsComponent,SortPipe],
    providers: [

    ],
    entryComponents: []
})
export class InventoryDetailsModule { }
