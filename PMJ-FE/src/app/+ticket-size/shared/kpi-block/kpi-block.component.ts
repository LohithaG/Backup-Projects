import { Component, Input, ViewContainerRef, Output, EventEmitter } from '@angular/core';
import { t } from '@angular/core/src/render3';


@Component({
    selector: 'ticket-kpi-boxes',
    templateUrl: './kpi-block.component.html',
    styleUrls: ['./kpi-block.css']
})

export class TicketKpiBlockComponent {
   
    @Input() ticketsKpiInfo: any;
    goldDiaInfo: any;
    ngOnInit() {
       
     
    }
}



// cost: 10,
// tag_price: 1,
// margin: 2
// sale_price: 1,
