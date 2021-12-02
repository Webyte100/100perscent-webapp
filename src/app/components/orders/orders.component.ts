/**This class describes  functions of orders component with get orders and specification
* @author S.Swetha, Shruthi Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[]= [];
  constructor(private service: OrderService, private router: Router, private authService: LoginService) { }

  ngOnInit(): void {
     this.authService.getAuthenticatedUser().subscribe(
       user =>{
         this.getOrders(user.userName);
       }
    );  
  }

  getOrders(username : string){
    this.service.getOrders(username).then(data =>{
      this.orders = data;
    });
  }

  specification(modelNo: string){
    this.router.navigate([`/product/${modelNo}`]);
  }

}
