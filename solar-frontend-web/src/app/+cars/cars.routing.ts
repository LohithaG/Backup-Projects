import { Routes, RouterModule } from '@angular/router';
import { LoadsListComponent } from './components/list/cars.list.component';
import { LoadAddComponent } from './components/add/car.add.component';
import { LoadUpdateComponent } from './components/update/car.update.component';
const routes: Routes = [
  {
    path: '', component: LoadsListComponent, data: { pageTitle: 'Cartons Details' }
  },
  {
    path: 'addCarton', component: LoadAddComponent, data: { pageTitle: 'Add Carton' }
  },
  {
    path: 'updateCarton/:vinId', component: LoadUpdateComponent, data: { pageTitle: 'Update Carton' }
  }
];

export const routing = RouterModule.forChild(routes);
