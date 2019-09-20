import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceViewComponent, DialogComponent } from './invoice-view.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SharedModule } from '../../shared.module'

import {
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule,
    MatSlideToggleModule,
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: InvoiceViewComponent
    }
]


@NgModule({
    imports: [
        MatIconModule,
        MatCheckboxModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        SharedModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [InvoiceViewComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class InvoiceViewModule { }
