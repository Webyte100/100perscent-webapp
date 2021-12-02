/**This class describes user details 
 * entered by user
* @author Vihitha karnatakam, Yasaswini Talanki
* @version 12.0.2
**/

import { Role } from "./role.model";

export class UserModel{
    public userName: string;
    public email: string;
    public password: string;
    public confirmpwd: string;
    public phoneNo: string;
    public dateCreated: string;
    public userImage: string;
	public roles: Role[];
}