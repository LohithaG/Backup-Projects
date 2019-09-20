import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { endponitConfig } from '../../environments/endpoint';

@Injectable()
export class UserService {

    constructor(private readonly http: HttpClient) {

    }

    headers = new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))

    getAllUsers(): Observable<UserData[]> {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + 'getAllUsers', { headers: this.headers })
            .map((response: any) => response).catch(this.handleError);
    }

    deleteUser(userId: any) {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + `deleteUser/${userId}`, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    updateUser(userDetails) {
        return this.http.put(endponitConfig.USER_API_ENDPOINT + 'updateUser', userDetails, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    addUser(userDetails) {
        return this.http.post(endponitConfig.USER_API_ENDPOINT + 'addUser', userDetails, { headers: this.headers })
            .map(res => { return res }).catch(this.handleError);
    }

    getAllUserRoleTypes() {
        return this.http.get(endponitConfig.USER_API_ENDPOINT + 'getAllRoles', { headers: this.headers })
            .map((response: any) => response).catch(this.handleError);
    }

    /**
  * This method gets  user details based on user Id
  */
    public getUserDetailsByID(userId: string) {
        return this.getAllUsers().toPromise().then((users: any) =>
            users.data.find(usera => Number(usera.id) === Number(userId)));
    }

    private handleError(error: any) {
        if (error.status === 404) {
            localStorage.setItem('status', '500')
            return Observable.throwError(error.json());
        } else {
            localStorage.setItem('status', '401')
            // 401 unauthorized response so log user out of client
            window.location.href = '/#/error';
            return Observable.throwError(error._body);
        }
    }




}


export class UserData {
    constructor() { }
    public id: string;
    public name: string;
    public email: string;
    public phone: string;
    public active: boolean;
    public roles: roles[]
}
export class roles {
    public id: number;
    public name: string
}
