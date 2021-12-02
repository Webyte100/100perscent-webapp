/**This class describes order item details
* @author Vihitha karnatakam, Yasaswini Talanki
* @version 12.0.2
**/

import { Product } from './product.model';

export class OrderItem{
    product: Product;
    boughtAtPrice: number;
    quantity: number;
}