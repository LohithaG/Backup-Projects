import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { endponitConfig } from '../../environments/endpoint';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  private headers: HttpHeaders;
  constructor(public http: HttpClient) {

  }

  login(username: string, password: string) {

    this.headers = new HttpHeaders();
    this.headers = this.headers.append('Content-Type', 'application/json');
    this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.headers = this.headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));
    const body = 'username=' + username + '&password=' + password;
    sessionStorage.setItem('Authentication', "Basic " + btoa(`${username}:${password}`));
    return this.http.post('http://192.168.3.108:7070/login', body).map((response: any) => {
      console.log(response.headers.get('Authorization'))

      return response;
    });


    // this.headers = new HttpHeaders();
    // this.headers = this.headers.append('Content-Type', 'application/json');
    // this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers = this.headers.append("Authorization", "Basic " + btoa(`${username}:${password}`));

    // return this.http.get(endponitConfig.USER_API_ENDPOINT + `getUserByEmail/${username}`, { headers: this.headers })
    //   .map(response => {
    //     sessionStorage.setItem("Autherization", JSON.stringify("Basic " + btoa(`${username}:${password}`)));
    //     return response;
    //   });


    // const body = 'username=' + username + '&password=' + password;
    // return this.http.post('http://192.168.3.108:7070/login', body, { headers: this.headers }).map((response: any) => {
    //   console.log('response')
    //   console.log(response)
    //   console.log(response.headers)

    //   console.log(response.headers.get('Authorization'))

    //   return response;
    // });
  }

  userForgotPassword(email, phone) {
    return this.http.post(environment.USER_API_ENDPOINT + `forgotPassword/${email}`, '', { headers: this.headers })
      .map(response => { return response })
  }


  userOTP(otp, userpassword) {
    let userId = sessionStorage.getItem('userData')
    if (!userId) {
      userId = '';
    }
    return this.http.post(environment.USER_API_ENDPOINT + `setPassword/${userId}/${otp}/${userpassword}`, {}, { headers: this.headers })
      .map(res => { return res })
  }


  getUserDetailsByName(username: string) {
    return this.http.get(environment.USER_API_ENDPOINT + `getUserByUserName/${username}`, ).map(response => {
      return response;
    });
  }


  userAuthentication(username: string, password: string) {
    sessionStorage.setItem('Authentication', '');
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    const body = 'username=' + username + '&password=' + password;
    return this.http.post(environment.USER_LOGIN, body, { headers: headers, observe: "response" }).map(((response: HttpResponse<any>) => {
      sessionStorage.setItem('Authentication', response.headers.get('Authorization'));
      return response;
    }))
  }
}
