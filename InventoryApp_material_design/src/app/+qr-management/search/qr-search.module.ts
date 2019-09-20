import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchQrComponent, DialogComponent } from '../search/qr-search.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: SearchQrComponent
    }
]


@NgModule({
    imports: [
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        CommonModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule,
    ],
    declarations: [SearchQrComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class SearchQrModule { }
