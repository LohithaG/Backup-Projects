import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxesComponent } from './info-boxes.component';
import { SmartadminModule } from '../../../../shared/smartadmin.module'

@NgModule({
    declarations: [InfoBoxesComponent],
    exports: [InfoBoxesComponent],
    entryComponents: [],
    imports: [CommonModule, SmartadminModule],
})
export class InfoBoxModule { }
