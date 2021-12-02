import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import CartRequest from 'src/app/components/models/request/cartRequest.model';
import { URLS } from 'src/app/common/global-constants';
import { CartModel } from 'src/app/components/models/cart.model';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaymentModel } from 'src/app/components/models/payment.model';
import { PlaceOrderModel } from 'src/app/components/models/placeorder.model';

@Injectable({
	providedIn: 'root'
})
export class CartItemsService {

	private _totalCartItems: number = 0;
	public totalPrice: number = 0;

	constructor(private http: HttpClient) { }

	set totalCartItems(quantity: number) {
		this._totalCartItems = quantity
	}

	get totalCartItems(): number {
		return this._totalCartItems
	}

	updateQuantity(userName: string, productId: number, quantity: number): Promise<any> {
		const reqBody: CartRequest = {userName, productId, quantity}
		return this.http
			.post<Object>(URLS.UPDATE_CART, reqBody)
			.toPromise()
			.then((res: any) => {
				this.totalCartItems = res.cartItems
			})
	}

	getUserCart(userName: string): Observable<CartModel> {
		const sub = this.http.get<CartModel>(URLS.CART(userName))
		return sub
	}

	getTotalAmount(userName: string){
		let sub =  this.getUserCart(userName).pipe(share())
		sub.subscribe((cart: CartModel) => {
		let discountPrice = 0;
		this.totalPrice = 0;
		cart.orderItems.forEach(({product: item, quantity}, index) => {
			if (index == 0) {
				discountPrice = 0;
			}
			if (quantity >= 1) {
				discountPrice += (item.price * item.discount * quantity / 100);
				this.totalPrice += (item.price * quantity);
			}
		});
		if(cart.voucherDiscount>0){
			let voucherPrice = cart.voucherDiscount * this.totalPrice / 100;
			this.totalPrice = this.totalPrice - discountPrice - voucherPrice;
		}else{
			this.totalPrice = this.totalPrice - discountPrice
		}
		})
		return sub
	}

	saveCard(payment: PaymentModel, username: string){
		return this.http.post<Object>(URLS.CARD(username), payment).toPromise()
	}

	placeOrder(order: PlaceOrderModel){
		return this.http.post<Object>(URLS.PLACEORDER, order).toPromise()
	}

	addVoucher(userName: string, voucherDiscount: number){
		return this.http.post<Object>(URLS.ADDVOUCHER, {userName, voucherDiscount}).toPromise()
	}
}