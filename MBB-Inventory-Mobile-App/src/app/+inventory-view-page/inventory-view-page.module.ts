import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InventoryViewPageComponent } from './inventory-view-page.component';
import { ProductService } from '../product-services.service';
import { UtilsModule } from '../shared/utils/utils.module';
import { SmartadminModule } from '../shared/smartadmin.module';
import { InventoryDispatcherViewComponent } from './inventory-dispatcher-view/inventory-dispatcher-view.component';

const routes: Routes = [
  {
    path: 'view/:id',
    component: InventoryViewPageComponent
  },{
    path: 'dispatcher-view/:id',
    component: InventoryDispatcherViewComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    UtilsModule,
    SmartadminModule,
    RouterModule.forChild(routes),
  ],
  declarations: [InventoryViewPageComponent, InventoryDispatcherViewComponent],
  providers: [ProductService]
})
export class InventoryViewPageModule {

}
