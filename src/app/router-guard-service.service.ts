import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './service/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardServiceService implements CanActivate {

  constructor(private loginService: LoginServiceService,
    private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginService.isUserLoggedIn())
      return true;
    this.router.navigate(['/'])
    return false;
  }
}
