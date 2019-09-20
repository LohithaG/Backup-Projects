import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VersionDetailsComponent, DialogComponent } from './version-details.component';
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
        component: VersionDetailsComponent
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
        MatDialogModule,
        CommonModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [VersionDetailsComponent, DialogComponent],
    entryComponents: [DialogComponent],
    providers: [

    ]
})
export class VersionModule { }
