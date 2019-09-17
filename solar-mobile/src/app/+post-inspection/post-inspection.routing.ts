
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { destinationInspectionComponent } from './post-inspection.component';
import { SkidInspectionComponent } from './skidinspection/skidinspection.component';
import { DamageComponent } from './damage/damage.component';

export const routes: Routes = [

    {
        path: 'inspectionDetails/:id',
        component: destinationInspectionComponent
    },
    {
        path: 'skidinspection',
        component: SkidInspectionComponent
    },
 {
        path: 'damage/post',
        component: DamageComponent
    },
];

export const routing = RouterModule.forChild(routes);
