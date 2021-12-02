/**This class describes  functions of payment component with paymentsuccess and set address
* @author S.Swetha, Shruti Sunil Mayekar 
* @version 12.0.2
**/

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';
import { PaymentModel } from '../models/payment.model';
import { PlaceOrderModel } from '../models/placeorder.model';
import { AddressModel } from '../models/address.model';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/services/shared/spinner/spinner.service';


@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

	payment: PaymentModel = new PaymentModel();
	name: string;
	totalPrice: number = 0;
	paymentSuccess: boolean | undefined;
	month: number;
	year: number;
	addressId: number;
	order: PlaceOrderModel = new PlaceOrderModel();
	greater: boolean | undefined;
	monthList:  number[]
	yearList: number[]

	constructor(private service: LoginService, private cartService: CartItemsService,
		private router: Router, private spinnerService: SpinnerService) {
		this.service.getAuthenticatedUser().subscribe(user => {
			this.name = user.userName;
			cartService.getTotalAmount(this.name).subscribe(() => {
				this.totalPrice = cartService.totalPrice;
				if (this.totalPrice == 0) {
					router.navigate(['/products'])
				}
			});
		});
		const currentYear = new Date().getFullYear()
		this.monthList = new Array(12).fill(0).map((_, i) => i + 1)
		this.yearList = new Array(5).fill(0).map((_, i) => currentYear + i)
	}

	ngOnInit(): void { }

	onPaymentSuccess() {
		this.spinnerService.showSpinner()
		this.payment.expiry = new Date(this.year, this.month)
		this.cartService.saveCard(this.payment, this.name).then((res: any) => {
			this.payment.paymentMethodId = res.id
			this.order.transaction.paymentMethodId = res.id
			this.order.userName = this.name
			this.order.addressId = this.addressId
			this.order.transaction.amount = this.totalPrice
			return this.cartService.placeOrder(this.order).then((res: any) => {
				let result: boolean = res.result;
				this.paymentSuccess = result;
				if(this.paymentSuccess == true){
					
					this.router.navigate(['/success'])
				}
			}).catch((e) => {
				throw e;
			})
		}).catch(() => {
			this.paymentSuccess = false;
		})
		.finally(() => {
			this.spinnerService.hideSpinner()
		})
	}

	setAddress(address: AddressModel) {
		this.addressId = address.id;
	}

	

}
