import { Component, Input } from '@angular/core';

@Component({
    selector: 'growth-kpi-blocks',
    templateUrl: './kpi-block.component.html',
    styleUrls: ['./kpi-block.component.css']
})
export class KPIBLOCKCOMPONENT {

    @Input() growthInfo = [];
    constructor() {
    }
    ngOnInit() {

    }
}
