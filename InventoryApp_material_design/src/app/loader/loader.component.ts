import { Component, Input, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
})

export class LoaderComponent {

    constructor() {

    }
    @Input() loading = false;
}
