/**This class describes  functions of success component 
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { LoginService } from 'src/app/services/login.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  order: Order = new Order();
  user: UserModel = new UserModel();
  id: string;
  date = new Date();
  latestOrderIndex: number;
  constructor(private service: OrderService, private authService: LoginService) { }

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(user => {
			this.user = user ;
      this.id = this.random(10000, 99999).toString();
      this.id = this.id.replace(/\./,"");
      this.order.orderId = this.id;
    });
    this.service.getOrders(this.user.userName).then(data =>{
      this.order = data[data.length - 1];
    });

  }
  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

}
