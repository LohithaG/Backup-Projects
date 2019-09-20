import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Response, Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'

@Injectable()
export class FileUploadService {
    constructor(public http: HttpClient) {

    }

    fileUpload(obj) {
        return this.http.post(`${environment.FILE_UPLOAD}file`, obj).map(response =>
            response
        );
    }

    downloadFile(filetype) {
        return this.http.get(`${environment.FILE_UPLOAD}sample/${filetype}`, { responseType: 'text' }).map((response: any) =>
            response
        );
    }


}