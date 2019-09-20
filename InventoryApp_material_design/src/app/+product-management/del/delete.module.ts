import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteShippingComponent, DialogComponent } from './delete.component';
import { MatExpansionModule } from '@angular/material/expansion';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule

} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: DeleteShippingComponent
    }
]


@NgModule({
    imports: [
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
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
    declarations: [DeleteShippingComponent, DialogComponent],
    providers: [

    ]
    , entryComponents: [DialogComponent]
})
export class DeleteProductModule { }
