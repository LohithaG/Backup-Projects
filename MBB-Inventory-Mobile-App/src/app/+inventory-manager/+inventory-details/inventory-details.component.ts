import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { endponitConfig } from '../../../environments/endpoints';

@Component({
    selector: '',
    templateUrl: 'inventory-details.component.html'
})

export class InventoryDetailsComponent {
    public loadsHeader: Headers;
    constructor(
        public http: Http
    ) {
        this.loadsHeader = new Headers();
        this.loadsHeader.append('Content-Type', 'application/json');
        this.loadsHeader.append('Authorization', localStorage.getItem('Authentication'));
    }
    options = {
        dom: 'Bfrtip',
        ajax: (data, callback, settings) => {
            var obj = {
                data: [
                    { name: 'ramu', number: 'xcgbxbx', id: '1' },
                    { name: 'bcvbc', number: ' cbnc', id: '2' },
                    { name: 'bvc', number: 'bcvbc', id: '3' },
                    { name: 'bcvbcv', number: 'bcvbc', id: '4' },
                    { name: 'ramu', number: 'xcgbxbx', id: '1' },
                    { name: 'bcvbc', number: ' cbnc', id: '2' },
                    { name: 'bvc', number: 'bcvbc', id: '3' },
                    { name: 'bcvbcv', number: 'bcvbc', id: '4' }
                ]
            }
            callback({
                aaData: obj.data,
            })
        },
        columns: [
            { data: 'name', responsivePriority: 1 }, { data: 'number', responsivePriority: 4 },
            { data: 'id', responsivePriority: 2 }
        ],
    };

    private shiprocketDetailsData(res) {
        const body = res.json();
        if (body) {
            return body.data
        } else {
            return {}
        }
    }

    shiprocketData;
    shiprocketDetails = {
        dom: 'Bfrtip',
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        ajax: (data, callback, settings) => {
            this.http.get(endponitConfig.INVENTORY_ENDPOINT + 'getAllInventories', { headers: this.loadsHeader })
                .map(this.shiprocketDetailsData)
                .subscribe((jsondata) => {
                    this.shiprocketData = jsondata;
                    callback({ aaData: jsondata })
                })
        },
        columns: [
            { data: 'productName', responsivePriority: 2 },
            { data: 'skuCode', responsivePriority: 1 },
            { data: 'thresholdLevel', responsivePriority:4 },
            { data: 'inventory', responsivePriority: 3 }
        ],
    };


}