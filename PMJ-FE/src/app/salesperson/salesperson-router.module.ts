import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {SalesPersonComponent} from './sales-person-component';
import { SalesComponent } from './sales/sales.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { MarginsComponent } from './margins/margins.component';
import { ConversionComponent } from './conversion/conversion.component';
import { AverageTicketSizeComponent } from './average-ticket-size/average-ticket-size.component';
const salesPersonRoutes : Routes=[
    {path:'',redirectTo:"salespersoncomponent"},
    {path:'salespersoncomponent',component:SalesPersonComponent ,children: [
        {
          
            path: '',redirectTo:'salescomponent' 
          },
        // {
          
        //     path: '',
        //     component: SalesComponent
        //   },
        {
          
          path: 'salescomponent',
          component: SalesComponent
        },
        {
        
          path: 'achievementscomponent',
          component: AchievementsComponent
        },{
            
            path: 'marginscomponent',
            component: MarginsComponent
          },{
           
            path: 'conversioncomponent',
            component: ConversionComponent
          },{
           
            path: 'averageticketsizecomponent',
            component: AverageTicketSizeComponent
          },
      ]},

   

]
@NgModule({
imports:[RouterModule.forChild(salesPersonRoutes)],
exports :[RouterModule]
})
    
export class SalesPersonRouterModule{

}
