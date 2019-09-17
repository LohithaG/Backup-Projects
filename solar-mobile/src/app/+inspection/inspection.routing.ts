
import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { InspectionComponent } from './inspection.component';
import { InspectionViewComponent } from './view/view.component';
import { DamageComponent } from './damage/damage.component';

export const routes: Routes = [

    {
        path: 'inspectionDetails/:id',
        component: InspectionComponent
    },
    {
        path: 'inspectionView/:cartonId/:cartonCode',
        component: InspectionViewComponent
    },
    {
        path: 'damage/pre',
        component: DamageComponent
    },
];

export const routing = RouterModule.forChild(routes);
