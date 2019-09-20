import { NgModule } from '@angular/core';

import { SmartadminModule } from '../shared/smartadmin.module'

import { routing } from './enquiries.routing';
import { addEnquiryComponent } from './+add/add.component'

@NgModule({
    imports: [
        SmartadminModule,
        routing,
    ],
    declarations: [
        addEnquiryComponent
    ],
    providers: [],
})
export class EnquiryModule {

}
