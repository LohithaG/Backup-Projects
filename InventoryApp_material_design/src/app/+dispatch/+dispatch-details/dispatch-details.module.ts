import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DispatchDetailsComponent, FilterPipe } from './dispatch-details.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {SharedModule} from '../../shared.module'

import {
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
} from '@angular/material';


const routes: Routes = [
    {
        path: '',
        component: DispatchDetailsComponent
    }
]


@NgModule({
    imports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        CommonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        [RouterModule.forChild(routes)],
        FormsModule, ReactiveFormsModule,
    ],
    declarations: [FilterPipe, DispatchDetailsComponent],
    providers: [

    ],
    entryComponents: []
})
export class DispatchDetailsModule { }
