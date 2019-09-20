import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './login-error.routing';
import { ErrorComponent } from './login-error';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        SmartadminLayoutModule,
    ],
    declarations: [ErrorComponent]
})
export class ErrorModule { }
