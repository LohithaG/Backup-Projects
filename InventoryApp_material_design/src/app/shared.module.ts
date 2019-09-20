import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { PopUpComponent } from './popup/popup.component';
import {  MatIconModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef,MatDialogModule } from '@angular/material/dialog';




@NgModule({
    declarations: [ LoaderComponent, PopUpComponent],
    exports:[ LoaderComponent, PopUpComponent],
    imports:[MatDialogModule, MatIconModule, MatButtonModule],
    entryComponents: [PopUpComponent],
    providers: [
        {provide: MatDialogRef, useValue: {}},
    ],
    
    
})
export class SharedModule{}

