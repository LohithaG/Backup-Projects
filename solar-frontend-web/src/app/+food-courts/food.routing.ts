import { Routes, RouterModule } from '@angular/router';

import { FoodListComponent } from './components/list/food.list.component';
import { FoodAddComponent } from './components/add/food.add.component';
import { FoodUpdateComponent } from './components/update/food.update.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: FoodListComponent, data: { pageTitle: 'Food Court Details' }
  },
  {
    path: 'addFood', component: FoodAddComponent,data: { pageTitle: 'Add Food-Court' }
  },
  {
    path: 'updateFoodCourt/:Id', component: FoodUpdateComponent,data: { pageTitle: 'Update Food-Court' }
  }
];

export const routing = RouterModule.forChild(routes);
