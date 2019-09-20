import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'info-boxes',
    templateUrl: './info-boxes.component.html',
    styleUrls: ['./info-boxes.css']
})

export class InfoBoxesComponent {
    @Input() kpiInfo: any;
    info: any;
    ngOnInit() {
        // this.info = this.infoData;
        // console.log(this.info);
    }
}

