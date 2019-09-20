import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-serviceerror',
    templateUrl: './service-error.html',
})
export class ServiceErrorComponent implements OnInit {

    errorStatus
    constructor(private route: ActivatedRoute, public cdr:ChangeDetectorRef) { }

    ngOnInit( ) {
        // this.route.params.forEach((params: Params) => {
        //     this.errorStatus = params['error'];
        //     this.cdr.detectChanges()
        // });
      
    }

}
