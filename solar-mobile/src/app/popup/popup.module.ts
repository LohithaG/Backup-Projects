import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { ModalModule } from "ngx-bootstrap";




@NgModule({
    declarations: [ PopupComponent],
    exports:[ PopupComponent],
    entryComponents: [],
    imports: [CommonModule,ModalModule.forRoot()],

   
    
    
})
export class PopupModule{}
