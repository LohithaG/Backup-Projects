import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ChannelwiseComponent } from './channel-wise.component'
export const routes: Routes = [

    {
        path: '',
        component: ChannelwiseComponent
    }
];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ChannelwiseComponent
]
