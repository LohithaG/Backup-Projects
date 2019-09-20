import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'info-boxes',
    templateUrl: './info-boxes.component.html',
    styleUrls: ['./info-boxes.css']
})

export class InfoBoxesComponent {
    @Input() costtosalesshw: any;
    @Input() marginsInfocostd2h:any;
    @Input() marginsInfoD2H: any;
    @Input() marginTagToSaleSHW:any;
    @Input() costtotagshw: any;
  
   
    ngOnInit() {
       
    }
}



// cost: 10,
// tag_price: 1,
// margin: 2
// sale_price: 1,
