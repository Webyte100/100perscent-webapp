/**This class describes payment methods
* @author Vihitha karnatakam, Yasaswini Talanki
* @version 12.0.2
**/

export class PaymentModel{
    public paymentMethodId: number;
    public nameOnCard: string;
    public cardNumber: number;
    public expiry: Date;
    public cvvNo: number;
}