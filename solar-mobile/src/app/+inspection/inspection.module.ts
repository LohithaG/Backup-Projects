import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './inspection.routing';
import { SmartadminModule } from '../shared/smartadmin.module';
import { InspectionServices } from './inspection.service';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ScannerService } from '../scanner';
import { InspectionComponent } from './inspection.component';
import { InspectionViewComponent } from './view/view.component';
import { DamageComponent, } from './damage/damage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModule } from '../popup/popup.module';

@NgModule({
  imports: [routing, FormsModule, SmartadminModule, ReactiveFormsModule, SignaturePadModule,PopupModule],
  declarations: [InspectionComponent, DamageComponent, InspectionViewComponent],
  providers: [InspectionServices, ScannerService]
})
export class InspectionModule { }
