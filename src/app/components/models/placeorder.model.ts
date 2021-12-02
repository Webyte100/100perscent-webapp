/**This class describes the order and transaction methods
* @author Vihitha karnatakam, Yasaswini Talanki
* @version 12.0.2
**/

export class PlaceOrderModel{
    public userName: string;
    public addressId: number;
    public transaction: TransactionModel = new TransactionModel();
}

export class TransactionModel{
    public paymentMethodId: number;
    public amount: number;
}