/**This class describes  Values of GENDERS and  SPEEDS as const
* @author Varsha Vaitla, Surya Alapati
* @version 12.0.2
**/
import { environment } from "src/environments/environment";
export class GlobalConstants{
    public static title : string = 'perscent-app';
	public static apiUrl : string = environment.apiUrl;
}

export const URLS = {
	UPDATE_PROFILE_IMAGE: GlobalConstants.apiUrl + "/user/update",
	OTP_GENERATE: GlobalConstants.apiUrl + "/otp/generate",
	OTP_VALIDATE: GlobalConstants.apiUrl + "/otp/validate",
	REGISTER: GlobalConstants.apiUrl + "/register",
	BRANDS: GlobalConstants.apiUrl + "/brands",
	COLLECTIONS: GlobalConstants.apiUrl + "/collections",
	PRODUCT_LIST: (brand?: string, collection?: string) => {
		let url = new URL(GlobalConstants.apiUrl + "/products")
		brand && url.searchParams.append("brandName", brand)
		collection && url.searchParams.append("collectionName", collection)
		return url.toString()
	},
	GET_PRODUCT: (modelNo: string) => GlobalConstants.apiUrl + "/products/" + modelNo,
	GET_SIMILAR_PRODUCTS: (modelNo: string) => GlobalConstants.apiUrl + "/products/similarProducts?modelNo=" + modelNo,
	LOGIN: GlobalConstants.apiUrl + "/login",
	GET_ORDERS: (username: string) =>{
		let url = new URL(GlobalConstants.apiUrl + "/orders")
		url.searchParams.append("userName", username);
		return url.toString();
	},
	ADD_PRODUCT:GlobalConstants.apiUrl + "/products/add",
    EDIT_PRODUCT:GlobalConstants.apiUrl + "/products/edit",
	DELETE_PRODUCT:(modelNo:string) => GlobalConstants.apiUrl + "/products/"+ modelNo,
	CART : (userName: string) => GlobalConstants.apiUrl + `/orders/cart?userName=${userName}`,
	UPDATE_CART: GlobalConstants.apiUrl + "/orders/cart",
	QUANTITY_IN_CART: (userName: string, modelNo: string) => {
		let url = new URL(GlobalConstants.apiUrl + "/orders/cart/quantity")
		userName && url.searchParams.append("userName", userName)
		modelNo && url.searchParams.append("modelNo", modelNo)
		return url.toString()
	},
	USER_ADDRESS: (username: string) => `${GlobalConstants.apiUrl}/user/${username}/address`,
	USER_ADDRESS_WITH_ID: (username: string, addressId: number) => `${GlobalConstants.apiUrl}/user/${username}/address/${addressId}`,
	CARD: (username: string) => `${GlobalConstants.apiUrl}/user/${username}/cards`,
	PLACEORDER: `${GlobalConstants.apiUrl}/orders/placeOrder`,
	ADDVOUCHER: `${GlobalConstants.apiUrl}/orders/cart/addVoucher`
};