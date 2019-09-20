import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenerateQrComponent, DialogComponent } from '../generate/generate.component';

import { MatExpansionModule } from '@angular/material/expansion';
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
        component: GenerateQrComponent
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
        MatExpansionModule,
        MatSelectModule,
        CommonModule,
        MatDialogModule,
        [RouterModule.forChild(routes)],
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
    ],
    declarations: [GenerateQrComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class GenerateQrModule { }
