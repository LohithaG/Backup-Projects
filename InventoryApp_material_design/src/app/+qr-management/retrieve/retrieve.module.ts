import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RetrieveQrComponent, DialogComponent } from './retrieve.component';
import { MatListModule } from '@angular/material/list';

import { MatExpansionModule } from '@angular/material/expansion';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: RetrieveQrComponent
    }
]


@NgModule({
    imports: [
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatRippleModule,
        MatListModule,
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
    declarations: [RetrieveQrComponent, DialogComponent],
    providers: [

    ],
    entryComponents: [DialogComponent]
})
export class RetrieveQrModule { }
