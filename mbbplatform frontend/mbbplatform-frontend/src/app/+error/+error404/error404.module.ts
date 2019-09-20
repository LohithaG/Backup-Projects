import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404RoutingModule } from './error404.routing';
import { Error404Component } from './error404';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        Error404RoutingModule,
        SmartadminLayoutModule,
    ],
    declarations: [Error404Component]
})
export class Error404Module { }
