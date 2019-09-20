import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceComponent,DialogComponent } from './invoice.component';


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
        component: InvoiceComponent
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
    declarations: [InvoiceComponent,DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class InvoiceModule { }
