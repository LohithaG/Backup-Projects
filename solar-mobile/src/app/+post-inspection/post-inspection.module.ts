import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './post-inspection.routing';
import { SmartadminModule } from '../shared/smartadmin.module';
import { DestinationInspectionServices } from './post-inspection.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ScannerService } from '../scanner';
import { destinationInspectionComponent } from './post-inspection.component';
import { SkidInspectionComponent } from './skidinspection/skidinspection.component';
import { DamageComponent } from './damage/damage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from '../popup/popup.module';

@NgModule({
    imports: [routing,ReactiveFormsModule, FormsModule, SmartadminModule, SignaturePadModule,PopupModule],
    declarations: [destinationInspectionComponent,DamageComponent,SkidInspectionComponent],
    providers: [DestinationInspectionServices, ScannerService]
})
export class PostInspectionModule { }
