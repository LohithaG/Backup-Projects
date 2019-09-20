import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmartadminModule} from "../shared/smartadmin.module";
import { SalesPersonComponent } from './sales-person-component';
import { SalesComponent } from './sales/sales.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MarginsComponent } from './margins/margins.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AverageTicketSizeComponent } from './average-ticket-size/average-ticket-size.component';
import { SalesPersonRouterModule } from './salesperson-router.module'
import { LoaderModule } from '../shared-modules/loader/loader.module';
import { GrowthKPIModule } from './shared/kpi-blocks/kpi-block.module';
import {DateFilterModule} from './shared/date-filter/date-filter.module';
import {SalesPersonService} from './sales-person-service';
import {DataService} from './sharedservice'
@NgModule({
  imports: [
    CommonModule, SmartadminModule,
    GrowthKPIModule,DateFilterModule,LoaderModule,
    SalesPersonRouterModule,
  ],
  providers:[SalesPersonService,DataService],
  declarations: [
    SalesPersonComponent,
    SalesComponent,
    AchievementsComponent,
    MarginsComponent,
    ConversionComponent,
    AverageTicketSizeComponent]
})
export class SalespersonModule { }
