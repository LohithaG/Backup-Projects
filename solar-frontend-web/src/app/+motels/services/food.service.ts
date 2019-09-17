import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import { endponitConfig } from '../../../environments/endpoints';


/**
 * This is drivers service class which does Rest service calls for all drivers operations
 */

@Injectable()
export class FoodService {
  private headers: Headers;
  private diversUrl = 'app/drivers';

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', localStorage.getItem('Authentication'));
    // this.headers.set('X-Auth-Token', localStorage.getItem('token'));

  }

  public getFood(): Observable<any> {
    console.info("This method gets all Food list details");
    return this.http.get(endponitConfig.FOOD_API_ENDPOINT, { headers: this.headers })
      .map((response: Response) => response.json().data)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

 

  public addMotel(object) {
    let foodAddURL = endponitConfig.MOTELS_ENDPOINT + 'addMotel'
    let url = `${foodAddURL}`;
    return this.http
      .post(url, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        this.handleError;
        console.error('error occured in adding new driver details' + error)
      });
  }

  public updateFoodStation(object) {
    let foodAddURL = endponitConfig.MOTELS_ENDPOINT + 'updateMotel'
    let url = `${foodAddURL}`;
    return this.http
      .put(url, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        this.handleError;
        console.error('error occured in adding new driver details' + error)
      });
  }

  public deleteFood(object) {
    console.log(object)
    let deleteDriverURL = endponitConfig.FOOD_API_ENDPOINT + 'deletefoodcourt/'
    let url = `${deleteDriverURL}${object.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(response => response.json())
      .catch(error => {
        this.handleError;
        console.error('error occured in deleting driver details' + error)
      });
  }


  public getMotelById(id) {
    let getDriversURL = endponitConfig.MOTELS_ENDPOINT + id
    return this.http.get(getDriversURL, { headers: this.headers })
      .map((response: Response) => response.json().data).catch(this.handleError);
  }


  // public getDriverDetailsByID(id: string) {

  //   return this.getDrivers().toPromise().then(drivers => drivers.find(driver => driver.id == id)).catch(this.handleError);
  // }


  private handleError(error: any) {
    if (error.status == 404) {
      return Observable.throw(error.json());
    } else {
      localStorage.setItem('status', '401')
      // 401 unauthorized response so log user out of client
      window.location.href = '/#/error';
      return Observable.throw(error.json());
    }
  }

  

 public getFoodAddress(address: any) {
  let accessToken = 'pk.eyJ1Ijoia2NlYTk5IiwiYSI6ImNpeGcwZGV3cTAwMGIyb253Z3g5bmJpMnIifQ.B0pZrnhEOmaPwHmmQH1nyw'
  var apiEndpoint = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + accessToken + '&autocomplete=true&limit=3'
  return this.http.get(apiEndpoint)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}
 

}
