/**This File describes login service 
 * to login user
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Injectable } from '@angular/core';
import { CredentialModel as user } from '../components/models/credential.model';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../common/global-constants';
import { UserModel } from 'src/app/components/models/user.model';
import { BehaviorSubject } from 'rxjs';
import { Roles } from '../components/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticatedUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());
  public getAuthenticatedUser(){
    return this.authenticatedUser;
  }
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly KEY: string = "authUser"

  constructor(private http: HttpClient) {
	  const userInStorage = localStorage.getItem(this.KEY);
	  if(userInStorage != null) {
		  this.setAuthenticatedUser(JSON.parse(userInStorage) as UserModel)
	  }
  }
  

  authenticate(user: user) {
    return this.http.post<UserModel>(URLS.LOGIN, user);
  }
  
  saveAuthenticatedUser(user: UserModel) {
	this.setAuthenticatedUser(user)
	localStorage.setItem(this.KEY, JSON.stringify(user))
  }

  setAuthenticatedUser(user: UserModel): void {
	this.loggedIn.next(true);
	this.isAdmin.next(user?.roles?.some(({role}) => role == Roles.AD) || false)
	this.authenticatedUser.next(user);
  }

  logoutUser() {
    this.loggedIn.next(false);
	this.isAdmin.next(false);
    this.authenticatedUser.next(new UserModel());
	localStorage.removeItem(this.KEY)
  }
}
