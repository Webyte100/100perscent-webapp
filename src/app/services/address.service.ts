/**This File describes address service
 * to add, update, remove or delete address
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLS } from '../common/global-constants';
import { AddressModel } from '../components/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  address: AddressModel[] =[];

  editedAddress: AddressModel = new AddressModel();
  getAddressList(userName: string): Promise<AddressModel[]>{
    return this.http.get<AddressModel[]>(URLS.USER_ADDRESS(userName)).toPromise()
  }

  saveAddress(userName: string, addr: AddressModel){
    return this.http.post<Object>(URLS.USER_ADDRESS(userName), addr).toPromise()
  }

  removeAddress(userName: string, id: number){
    return this.http.delete<Object>(URLS.USER_ADDRESS_WITH_ID(userName, id)).toPromise()
  }

  updateAddress(userName: string, addr: AddressModel){
	return this.http.post<Object>(URLS.USER_ADDRESS(userName), addr).toPromise()
  }
}
