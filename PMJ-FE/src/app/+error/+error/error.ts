import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-error',
    templateUrl: './error.html',
})
export class ErrorComponent implements OnInit {

    errorStatus
    constructor(private route: ActivatedRoute) { }

    ngOnInit( ) {
        this.route.params.forEach((params: Params) => {
            this.errorStatus = params['error'];
            // this.cdr.detectChanges()
        });
      
    }

}
