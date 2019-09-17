import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ILoad } from '../models/load';
import { endponitConfig } from '../../../environments/endpoints';

/**
 * This is a service class which makes Rest service calls to PALS dash board to get loads details
 */

@Injectable()
export class CarsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Authorization", localStorage.getItem('Authentication'));
    }

    getSkidsByLoad(loadNumber) {
        return this.http.get(endponitConfig.LOAD_API_ENDPOINT + 'skidDropsByLoadNumber/' + loadNumber, { headers: this.headers }).map((response: Response) => <any>response.json().data).catch(this.handleError);
    }

    public getAllLoads(): Observable<any> {
        return this.http.get(endponitConfig.LOAD_API_ENDPOINT + 'getAllLoadAppointments', { headers: this.headers }).map((response: Response) => <any>response.json().data).catch(this.handleError);
    }

    public getAllPartialLoads(): Observable<any> {
        return this.http.get(endponitConfig.LOAD_API_ENDPOINT + 'partialloads', { headers: this.headers }).map((response: Response) => <any>response.json().data).catch(this.handleError);
    }


    getLoadDetailsByLoadId(id) {
        return this.http.get(endponitConfig.CARTONS_API + 'getCartonById/' + id, { headers: this.headers }).map((response: Response) => <any>response.json().data).catch(this.handleError);
    }
    getQRcodeById(id) {
        return this.http.get(endponitConfig.CARTONS_API + 'getCartonIdById/' + id, { headers: this.headers }).map((response: Response) => <any>response.json().data).catch(this.handleError);
    }
    updateCar(carObj) {
        let loadAddURL = endponitConfig.CARTONS_API + 'updateCarton'
        let url = `${loadAddURL}`;
        return this.http
            .put(url, carObj, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(error => {
                this.handleError;
                console.log("error occured in updating car details" + error)
            });
    }


    public addCarton(carton: any) {
        let loadAddURL = endponitConfig.CARTONS_API + 'addCarton'
        let url = `${loadAddURL}`;
        return this.http
            .post(url, carton, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(error => {
                this.handleError;
                console.log("error occured in adding new car details" + error)
            });
    }



    public updateLoad(load: any) {
        let loadUpdateURL = endponitConfig.LOAD_API_ENDPOINT + 'updateLoadAppointment'
        let url = `${loadUpdateURL}`;
        return this.http
            .put(url, load, { headers: this.headers })
            .toPromise()
            .then(response => response.json())
            .catch(error => {
                this.handleError;
                console.log("error occured updating load details" + error)
            });
    }

    public deleteCar(car: any) {
        let deleteCarsURL = endponitConfig.CARTONS_API + 'deleteCarton/'
        let url = `${deleteCarsURL}${car.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .map(response => response.json()).catch(this.handleError);
    }

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


}
