import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceErrorRoutingModule } from './service-error.routing';
import { ServiceErrorComponent } from './service-error';
import { SmartadminLayoutModule } from "../../shared/layout/layout.module";


@NgModule({
    imports: [
        CommonModule,
        ServiceErrorRoutingModule,
        SmartadminLayoutModule,
    ],
    declarations: [ServiceErrorComponent]
})
export class ServiceErrorModule { }
