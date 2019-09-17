
import { NgModule } from '@angular/core';
import { SmartadminModule } from '../shared/smartadmin.module';
// import { MapStyleService } from '../shared/map-style.service';
// import { GoogleAPIService } from './shared/google-api.service';
import { routing } from './fuel.routing';
 //import { LoadServices } from '../+loads/loads.service';
import {FuelstationsComponent} from './fuelstations/fuelstations.component';
import {FuelServices} from './fuel.service';

@NgModule({
  imports: [routing, SmartadminModule],
  declarations: [FuelstationsComponent],
  exports: [],
  providers:[FuelServices]
})
export class FuelModule {

}
