import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,CanActivateChild, RouterStateSnapshot } from '@angular/router';




@Injectable()
export class UserRoleGuard implements CanActivate, CanActivateChild {

    constructor(private readonly router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userRole = sessionStorage.getItem('userRole');
        const roles = route.data['roles'] as Array<string>;
        let checkLoop = true;
        for (const i of roles) {
            if (checkLoop) {
                if (i === userRole) {
                    checkLoop = false;
                    return true;
                }
            }
        }
        this.router.navigate(['/auth/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const userRole = sessionStorage.getItem('userRole');
        const roles = route.data['roles'] as Array<string>;
        let checkLoop = true;
        for (const i of roles) {
            if (checkLoop) {
                if (i === userRole) {
                    checkLoop = false;
                    return true;
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
