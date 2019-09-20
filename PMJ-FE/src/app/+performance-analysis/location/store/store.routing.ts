import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { LocationwiseStoreComponent } from './store.component'
export const routes: Routes = [
    {
        path: '',
        component: LocationwiseStoreComponent
    }
];

export const routing = RouterModule.forChild(routes);
export const routedComponent = [
    LocationwiseStoreComponent
]

