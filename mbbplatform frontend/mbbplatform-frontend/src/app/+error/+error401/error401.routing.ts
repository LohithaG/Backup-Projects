import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error401Component } from "./error401";

const routes: Routes = [{
    path: '',
    component: Error401Component
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class Error401RoutingModule { }
