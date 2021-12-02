/**This File contains the cartModel and Cart items
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/

import { Time } from "@angular/common";
import { Product } from "./product.model";

export class CartModel {
	public userName: string;
	public orderItems: CartItemModel[];
	public voucherDiscount: number;
}

export class CartItemModel {
	public product: Product;
	public quantity: number;
}