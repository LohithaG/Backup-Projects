
import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
// import { MapStyleService } from './shared/map-style.service';
// import { GoogleAPIService } from './shared/google-api.service';
import { routing } from './food.routing';
// import { LoadServices } from '../+loads/loads.service';
import {FoodcourtsComponent} from './foodcourts/foodcourts.component'
import {FoodServices} from './food.service';


@NgModule({
  imports: [routing, SmartadminModule],
  declarations: [FoodcourtsComponent],
  exports: [],
  providers:[FoodServices]
})
export class FoodModule {

}
