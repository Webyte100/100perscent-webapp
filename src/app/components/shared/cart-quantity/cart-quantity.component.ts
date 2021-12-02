/**This File describes to increase quantity of product
* @author Varsh Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Component, Input, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { CartItemsService } from 'src/app/services/shared/cart-item/cart-items.service';

@Component({
	selector: 'app-cart-quantity',
	templateUrl: './cart-quantity.component.html',
	styleUrls: ['./cart-quantity.component.css']
})
export class CartQuantityComponent implements OnInit {

	@Input() quantity: number
	@Input() productId: number
	@Input() showLabel: boolean
	@Output() quantityChange = new EventEmitter<number>()

	quantity$: BehaviorSubject<number>
	userName: string

	constructor(private cartItemsService: CartItemsService, private loginService: LoginService) {
		loginService.getAuthenticatedUser().subscribe(user => {
			this.userName = user.userName
		})
	}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges){
		if(changes.quantity.isFirstChange()){
			this.subscribe()
		}
		else{
			this.quantity$.next(changes.quantity.currentValue)
		}
	}

	ngOnDestroy(): void {
		this.quantity$.unsubscribe()
	}

	subscribe(): void {
		this.quantity$= new BehaviorSubject(this.quantity)
		this.quantity$
			.pipe(skip(1))
			.subscribe((newQuantity) => {
				this.quantity = newQuantity
				this.quantityChange.emit(this.quantity)
				this.cartItemsService.updateQuantity(this.userName, this.productId, this.quantity)
			})
	}

	addQuantity() {
		this.quantity$.next(this.quantity + 1)
	}
	subtractQuantity() {
		this.quantity$.next(this.quantity - 1 < 0 ? 0 : this.quantity - 1)
	}
}
