import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { OtpComponent } from './components/otp/otp.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CartComponent } from './components/cart/cart.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { BymodelnoComponent } from './components/admin/bymodelno/bymodelno.component';
import { AuthGuard } from './guards/AuthGuard/auth.guard';
import { AdminGuard } from './guards/AdminGuard/admin.guard';
import { NegateAuthGuard } from './guards/NegateAuth/negate-auth.guard';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent, canActivate: [NegateAuthGuard]},
  {path: 'admin-add', component: AdminAddComponent, canActivate: [AdminGuard]},
  {path: 'admin-edit/:model', component: AdminEditComponent, canActivate: [AdminGuard]},
  {path: 'admin-list', component: AdminListComponent, canActivate: [AdminGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [NegateAuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'otp',component : OtpComponent, canActivate: [NegateAuthGuard]},
  {path: 'email-phone',component:EmailPhoneComponent, canActivate: [NegateAuthGuard]},
  {path: 'products' , component: ProductListComponent},
  {path: 'product/:model', component: ProductDetailComponent},
  {path: 'account', component: UserSectionComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'cart',component:CartComponent, canActivate: [AuthGuard]},
  {path: 'bymodelno',component:BymodelnoComponent, canActivate: [AdminGuard]},
  {path: 'payment', component:PaymentComponent},
  {path: 'success', component:SuccessComponent},
  {path: '**', redirectTo: ""},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
	onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
