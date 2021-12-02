/**This class describes the  product details
* @author Vihitha karnatakam, Yasaswini Talanki
* @version 12.0.2
**/

import { Brand } from "./brand.model";
import { Collection } from "./collection.model";


export class Product{
    public id: number;
    public name: string;
    public price: number;
    public brand: Brand;
    public collection: Collection;
    public series: string;
    public modelNo: string;
    public category: string;
    public gender: string;
    public deliverySpeed: string;
    public starRating: number;
    public discount: number;
    public expiryDate: number;
    public images: string[] = [];
    constructor(){
    this.brand=new Brand();
    this.collection=new Collection();
  }
	getDiscountedPrice(): number {
		return this.price - (this.price * this.discount / 100);
	}
	static build(fields: Partial<Product>): Product {
		return Object.assign(new Product(), fields)
	}
}