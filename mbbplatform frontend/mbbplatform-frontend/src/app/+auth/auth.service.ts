import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endponitConfig } from '../../environments/endpoint';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private headers: HttpHeaders;
  constructor(public http: HttpClient) {

  }

  login(username: string, password: string) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));

    return this.http.get(endponitConfig.USER_API_ENDPOINT + `getUserByEmail/${username}`, { headers: this.headers })
      .map(response => {
        sessionStorage.setItem("Autherization", JSON.stringify("Basic " + btoa(`${username}:${password}`)));
        return response;
      });
  }

  userForgotPassword(email, phone) {
    return this.http.post(endponitConfig.USER_API_ENDPOINT + `forgotPassword/${email}`, '', { headers: this.headers })
      .map(response => { return response })
  }


  userOTP(otp, userpassword) {
    let userId = sessionStorage.getItem('userData')
    if (!userId) {
      userId = '';
    }
    return this.http.post(endponitConfig.USER_API_ENDPOINT + `setPassword/${userId}/${otp}/${userpassword}`, {}, { headers: this.headers })
      .map(res => { return res })
  }

  /** User Authentication */
  userAuthentication(username: string, password: string) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = `'username=${username}&password=${password}`;
    return this.http.post(endponitConfig.USER_LOGIN, body, { headers: headers1 }).map(response => {
      return response;
    });
  }

  getUserDetailsByEmail(email: string) {
    const headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get(`${endponitConfig.USER_API_ENDPOINT}getUserByEmail/${email}`, { headers: headers1 }).map(response => {
      return response;
    });
  }
}
