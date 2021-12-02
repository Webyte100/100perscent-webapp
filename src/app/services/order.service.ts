/**This File describes order service 
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Injectable } from '@angular/core';
import { Order } from '../components/models/order.model';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) { }

  getOrders(username: string): Promise<Order[]>{
    return this.http.get<Order[]>(URLS.GET_ORDERS(username)).toPromise();
  }
}
