import { Component, Input } from '@angular/core';

@Component({
    selector: 'growth-kpi-blocks',
    templateUrl: './kpi-block.component.html'
})

export class KPIBLOCKCOMPONENT {

    @Input() growthTotalSales: any;

    @Input() growthInfoChannel: any;

    @Input() growthLocationStore: any;

    @Input() growthInfo: any;

    ngOnInit() {
        //    console.log(this.growthLocationStore)

    }

}
