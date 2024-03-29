import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
// import { AppSettings } from '../../shared/appSettings';
import { INotifications } from '../../+notifications/models/notifications';
declare var $;
import { endponitConfig } from '../../../environments/endpoints';
@Injectable()
export class ContactDriverService {

    private headers: Headers;
    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }


    public getAllNotifications(driverId) {
        let user_id = localStorage.getItem('userData');
        return this.http.get(endponitConfig.NOTIFICATIONS_API_ENDPOINT + 'getNotifications/1/driver/' + driverId, { headers: this.headers })
            .map((response: Response) => response.json().data);
    }


    public addChatNotifications(notification: INotifications) {
        this.http.post(endponitConfig.NOTIFICATIONS_API_ENDPOINT + 'webAddNotification', JSON.stringify(notification), { headers: this.headers })
            .toPromise()
            .then(response => response.json().data)
            .catch(error => console.log("error occured adding chat notification details" + error));
    }
}
