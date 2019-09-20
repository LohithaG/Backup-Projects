import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error401RoutingModule } from './error401.routing';
import { Error401Component } from './error401';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        Error401RoutingModule,
        SmartadminLayoutModule,
    ],
    declarations: [Error401Component]
})
export class Error401Module { }
