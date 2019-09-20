import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error501Component } from "./error501";

const routes: Routes = [{
    path: '',
    component: Error501Component
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class Error501RoutingModule { }
