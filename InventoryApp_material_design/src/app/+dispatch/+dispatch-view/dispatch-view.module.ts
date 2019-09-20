import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DispatchViewComponent, DialogComponent } from './dispatch-view.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {SharedModule} from '../../shared.module'

import {
    MatIconModule,
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
        component: DispatchViewComponent
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
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        SharedModule,
        [RouterModule.forChild(routes)],
        FormsModule, 
         ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ],
    declarations: [DispatchViewComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class DispatchViewModule { }
