import { Injectable } from  "@angular/core" ;
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./auth-service.service";
import { User } from "./user.model";
import { Router } from "@angular/router";
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthServiceService,
        private router: Router){
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean | Observable<boolean> | Promise<boolean>{
        if (sessionStorage.getItem('Auth_token')) {
            if(sessionStorage.getItem('role')=='ADMIN'){
                this.router.navigate(['/admin']);
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
