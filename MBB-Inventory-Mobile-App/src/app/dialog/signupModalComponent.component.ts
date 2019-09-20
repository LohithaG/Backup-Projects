import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModel } from './alert.interface';

@Component({
    selector: 'alert',
    templateUrl: './signupModaltemplate.component.html',
    styleUrls: ['./signupModel.css']
})
export class signupComponentModal extends DialogComponent<AlertModel, null> implements AlertModel, OnInit {

    data
    title: any;
    message: any;
    constructor(dialogService: DialogService, public router: Router) {
        super(dialogService);
    }

    ngOnInit() {
    //     console.log(this.message)
    //     this.data = this.message;
    }


    onOk() {
        this.close();
    }

}


