import { Component, ViewChild, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
    selector: '',
    templateUrl: 'inventory-details.component.html'
})

export class InventoryDetailsComponent implements OnInit {
    Inventorydetails
    constructor(
        public appService: AppService
    ) {
    }
    get(a, b) {

    }

    ngOnInit() {
        /**
      * Back Button event trigger
      */
        history.pushState(null, null, location.href);
        window.onpopstate = function (event) {
            history.go(1);
        };

        this.appService.getInventoryDetails().subscribe((data: any) => {
            if (data.data != null) {
                this.Inventorydetails = data.data;
            }
        })
    }
}



import { pipe } from 'rxjs';
@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.skuCode.toLowerCase().includes(searchText);
        });
    }
}


@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {


    transform(array: Array<string>, args: string): Array<string> {

        if (!array || array === undefined || array.length === 0) return null;

        array.sort((a: any, b: any) => {
            if (a.skuCode < b.skuCode) {
                return -1;
            } else if (a.skuCode > b.skuCode) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}


