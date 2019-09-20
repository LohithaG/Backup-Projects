import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceErrorComponent } from "./service-error";

const routes: Routes = [{
    path: '',
    component: ServiceErrorComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ServiceErrorRoutingModule { }
