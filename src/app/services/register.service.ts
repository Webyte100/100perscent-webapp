/**This File describes register service 
 * to register new user
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel as User } from '../components/models/user.model';
import { URLS } from '../common/global-constants';
import { share } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RegisterService {
	public registeredUser: User;

	constructor(private http: HttpClient) { }

	register(user: User) {
		let obs = this.http.post(URLS.REGISTER, user).pipe(share())
		this.registeredUser = user
		obs.subscribe(_ => {
			this.registeredUser = user
		})
		return obs;
	}
}
