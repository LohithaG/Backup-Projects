import { Routes, RouterModule } from '@angular/router';

import { FoodListComponent } from './components/list/food.list.component';
import { FoodAddComponent } from './components/add/food.add.component';
import { FoodUpdateComponent } from './components/update/food.update.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: FoodListComponent, data: { pageTitle: 'Motels Details' }
  },
  {
    path: 'addMotel', component: FoodAddComponent,data: { pageTitle: 'Add Motel' }
  },
  {
    path: 'updateMotel/:Id', component: FoodUpdateComponent,data: { pageTitle: 'Update Motel' }
  }
];

export const routing = RouterModule.forChild(routes);
