import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'popup',
    templateUrl: './popup.component.html',
})
export class PopUpComponent {

    constructor(
        public dialogRef: MatDialogRef<PopUpComponent>,
    ) {

    }
    data
    title: any;

    public click() {

        // alert("Hi")
        this.dialogRef.close();
    }
}

