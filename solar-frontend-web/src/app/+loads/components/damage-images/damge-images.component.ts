import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoadsService } from '../../services/load.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as moment from 'moment';
declare var $;
/**
 * This component deals with loads update operation
 */
@Component({
    templateUrl: './damge-images.component.html',
    providers: [LoadsService]
})
export class LoadDocumentsComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private loadService: LoadsService,
        fb: FormBuilder, private cdr: ChangeDetectorRef) {
    }

    documentsList: any = [];
    loadNumber: any;
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            if (params['loadNum'] !== undefined) {
                const loadNum: string = +params['loadNum'] + '';
                this.loadNumber = params['loadNum'];
                let typeid = localStorage.getItem('type')
                this.loadService.getDocumnentsByLoadandType(loadNum, typeid).subscribe((data: any) => {
                    if (data.data != null) {
                        this.documentsList = data.data;
                        console.log(this.documentsList)
                    } else {
                        alert(data.error.message)
                        this.router.navigate(['./loads'])
                    }
                })
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/loads']);
    }
    goToHome() {
        const link = ['/dashboard'];
        this.router.navigate(link);
    }



}
