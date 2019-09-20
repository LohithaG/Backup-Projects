import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'info-boxes',
    templateUrl: './info-boxes.component.html',
    styleUrls: ['./info-boxes.css']
})

export class InfoBoxesComponent {
    @Input() infoData: any;
    goldDiaInfo: any;
    ngOnInit() {
        this.goldDiaInfo = this.infoData;
        // console.log(this.infoData)
    }
}



// cost: 10,
// tag_price: 1,
// margin: 2
// sale_price: 1,
