/**This File describes the login authentication 
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Injectable({
	providedIn: 'root'
})
export class NegateAuthGuard implements CanActivate {
	constructor(private authService: LoginService, private router: Router) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
			if (this.authService.loggedIn.value) {
				this.router.navigate(['/'])
			}
			return !this.authService.loggedIn.value
	}
}
