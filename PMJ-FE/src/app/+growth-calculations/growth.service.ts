import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GrowthCalculationService {

    constructor(public http: HttpClient) {

    }
    url: any;
    totalSalesData(obj: any) {
        this.url = environment.GROWTH_ENDPOINT + 'totalsales/';
        return this.commonMethod(obj);
    }

    channelWiseSales(obj: any) {
        this.url = environment.GROWTH_ENDPOINT + 'bychannel/';
        return this.commonMethod(obj)
    }

    locationWiseSales(obj) {
        this.url = environment.GROWTH_ENDPOINT + 'bylocationshowroom/';
        return this.commonMethod(obj)
    }

    commonMethod(obj) {
        if (obj.range3startDate === undefined && obj.range3endDate === undefined) {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${null}/${null}`;
        } else {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${obj.range3startDate}/${obj.range3endDate}`;
        }
        return this.http.get(this.url).map(response =>
            response
        );
    }

    salesPersonWiseSales(obj: any) {
        this.url = environment.GROWTH_ENDPOINT + 'bysalesperson/';
        return this.commonMethodWithId(obj, obj.salesPersonId);
    }


    locationWiseSalesD2h(obj) {
        this.url = environment.GROWTH_ENDPOINT + 'bylocationd2h/';
        return this.d2hSerivceMethod(obj, obj.stateId, obj.clusterId);
    }


    d2hSerivceMethod(obj, stateId, clusterId) {
        if (obj.range3startDate === undefined && obj.range3endDate === undefined) {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${null}/${null}/${clusterId}/${stateId}`;
        } else {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${obj.range3startDate}/${obj.range3endDate}/${clusterId}/${stateId}`;
        }
        return this.http.get(this.url).map(response =>
            response
        );
    }


    commonMethodWithId(obj, id) {
        if (obj.range3startDate === undefined && obj.range3endDate === undefined) {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${null}/${null}/${id}`;
        } else {
            this.url = this.url + `${obj.range1startDate}/${obj.range1endDate}/${obj.range2startDate}/${obj.range2endDate}/${obj.range3startDate}/${obj.range3endDate}/${id}`;
        }
        return this.http.get(this.url).map(response =>
            response
        );
    }
}
