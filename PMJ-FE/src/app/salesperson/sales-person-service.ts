import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'



@Injectable()
export class SalesPersonService {
  constructor(public http: HttpClient) {

  }
  getSalesData(obj) {
  
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}SalesPersonWiseTargetsVsActuals/${obj.range1startDate}/${obj.range1endDate}/${obj.salesPersonId}`)
    .map(response =>
      response
    );
  }
  getAchievemnetsData(obj) {
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}SalesPersonWiseAchivements/${obj.range1startDate}/${obj.range1endDate}/${obj.salesPersonId}`)
    .map(response =>
      response
    );
  }
  getConversionData(obj) {
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}conversion/${obj.salesPersonId}/${obj.range1startDate}/${obj.range1endDate}`)
    .map(response =>
      response
    );
   
  }
  getMarginsData(obj) {
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}SalesPersonWiseMargins/${obj.range1startDate}/${obj.range1endDate}/${obj.salesPersonId}`)
    .map(response =>
      response
    );
  }
  getAverageTicketSizeData(obj) {
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}ticketSize/${obj.salesPersonId}/${obj.range1startDate}/${obj.range1endDate}`)
    .map(response =>
      response
    );
   

  }
  getKpiBlocksInfo(obj) {
    return this.http.get(`${environment.PERFORMANCE_ANALYSIS}SalesPersonWiseKPIBlocks/${obj.range1startDate}/${obj.range1endDate}/${obj.salesPersonId}`)
    .map(response =>
      response
    );


  }
}
