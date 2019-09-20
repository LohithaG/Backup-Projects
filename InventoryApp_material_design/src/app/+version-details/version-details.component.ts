import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
declare var $: any;
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-version',
    templateUrl: './version-details.component.html'
})


export class VersionDetailsComponent {
    userName: any;

    ngOnInit() {
        /**
       * Back Button event trigger
       */
        history.pushState(null, null, location.href);
        window.onpopstate = (event) => {
            history.go(1);
        };
        this.userName = localStorage.getItem('userName')
    }

}



@Component({
    selector: 'dialog-content-example-dialog',
    template: `<h2 mat-dialog-title>SKU</h2>
<mat-dialog-content class="mat-typography">
  <h3>   {{msgText}}</h3>
 
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
</mat-dialog-actions>`,
})
export class DialogComponent {
    msgText: any;
    ngOnInit() {
        this.msgText = localStorage.getItem('msg');
    }
}

