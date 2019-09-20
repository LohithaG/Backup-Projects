import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {


    constructor(private readonly http: HttpClient) {

    }

    getAllUsers(): Observable<any> {
        return this.http.get(environment.USER_API_ENDPOINT + 'getAllUsers')
            .map((response: any) => response);
    }

    deleteUser(userId: any) {
        return this.http.delete(environment.USER_API_ENDPOINT + `deleteUser/${userId}`)
            .map(res => { return res });
    }

    updateUser(userDetails) {
        return this.http.put(environment.USER_API_ENDPOINT + `updateUser`, JSON.stringify(userDetails))
            .map((res: any) => { return res });
    }

    addUser(userDetails) {
        return this.http.post(environment.USER_API_ENDPOINT + `addUser`, JSON.stringify(userDetails))
            .map((res: any) => { return res });
    }

    getAllUserRoleTypes() {

        return this.http.get(environment.USER_API_ENDPOINT + `getAllRoles`)
            .map((response: any) => response.json().data);
    }

    /**
  * This method gets  user details based on user Id
  */
    public getUserDetailsByID(userId: string) {

        return this.http.get(environment.USER_API_ENDPOINT + `getUserById/${userId}`)
            .map((res: any) => { return res.data });

        // return this.getAllUsers().toPromise().then(users => 
        // users.find(usera => Number(usera.id) === Number(userId)));
    }

}

// /api/users/getUserById/{userId}

