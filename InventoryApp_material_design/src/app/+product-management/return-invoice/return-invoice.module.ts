import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReturnInvoiceComponent,DialogComponent } from './return-invoice.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


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
        component: ReturnInvoiceComponent
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
        MatCheckboxModule,
        CommonModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [ReturnInvoiceComponent,DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class ReturnInvoiceModule { }
