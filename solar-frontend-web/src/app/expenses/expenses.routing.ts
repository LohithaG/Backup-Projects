import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './list/expenses.component';
import { ExpensesDetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: ExpensesComponent,
        data: { pageTitle: 'Expenses Details' }
    },
    {
        path: 'details/:id',
        component: ExpensesDetailsComponent,
        data: { pageTitle: 'Expenses Details' }
    }


];

export const routing = RouterModule.forChild(routes);


export const routedComponent = [
    ExpensesComponent, ExpensesDetailsComponent

]
