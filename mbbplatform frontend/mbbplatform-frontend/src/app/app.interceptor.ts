import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders, HttpEvent }
    from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import { Router } from "@angular/router";

@Injectable()


export class AppInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = sessionStorage.getItem("Autherization");
        if (!!auth) {
            var req = req.clone({
                headers: new HttpHeaders().set('Authorization', JSON.parse(sessionStorage.getItem("Autherization")))
            });
        }
        return next.handle(req).do(
            (event: any) => {
            },

            (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 501 || error.status === 503) {
                        this.router.navigate(['/error501']);
                    } else if (error.status === 401 || error.status === 403) {
                        this.router.navigate(['/error401']);
                    } else if (error.status === 404) {
                        this.router.navigate(['/error404']);
                    }
                    else {
                        this.router.navigate(['/service-error']);
                    }
                }
            }
        );
    }
}
