import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule
} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
        MatCardModule,
        MatIconModule,
        CommonModule,
        [RouterModule.forChild(routes)],
        FormsModule, 
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ],
    declarations: [LoginComponent],
    providers: [

    ]
})
export class LoginModule { }
