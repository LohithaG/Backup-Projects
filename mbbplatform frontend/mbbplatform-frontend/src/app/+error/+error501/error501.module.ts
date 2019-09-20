import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error501RoutingModule } from './error501.routing';
import { Error501Component } from './error501';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        Error501RoutingModule,
        SmartadminLayoutModule,
    ],
    declarations: [Error501Component]
})
export class Error501Module { }
