import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RatingComponent } from './components/rating/rating.component';
import { CartQuantityComponent } from './components/shared/cart-quantity/cart-quantity.component';
import { OtpComponent } from './components/otp/otp.component';
import { EmailPhoneComponent } from './components/email-phone/email-phone.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressComponent } from './components/address/address.component';
import { LoginService } from './services/login.service';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './guards/AuthGuard/auth.guard';
import { AdminGuard } from './guards/AdminGuard/admin.guard';
import { NegateAuthGuard } from './guards/NegateAuth/negate-auth.guard';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminAddComponent } from './components/admin/admin-add/admin-add.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { BymodelnoComponent } from './components/admin/bymodelno/bymodelno.component';
import { AdminEditComponent } from './components/admin/admin-edit/admin-edit.component';
import { FileUploadModule } from "ng2-file-upload";
import { CloudinaryModule, CloudinaryConfiguration} from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';
import { ValidateExpiryDirective } from './directives/expiryValidator/validate-expiry.directive';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductDetailComponent,
		ProductCardComponent,
		RegisterComponent,
		LoginComponent,
		HomeComponent,
		ProductListComponent,
		HeaderComponent,
		FooterComponent,
        RatingComponent,
		CartQuantityComponent,
		OtpComponent,
		EmailPhoneComponent,
        AddressComponent,
		FileUploadComponent,
		UserSectionComponent,
		OrdersComponent,
		AddressComponent,
		CartComponent,
		AdminAddComponent,
		AdminEditComponent,
		AdminListComponent,
		BymodelnoComponent,
		AdminComponent,
  		PaymentComponent,
        SuccessComponent,
        ValidateExpiryDirective,
        SpinnerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		FileUploadModule,
		CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'dssno9il5' } as CloudinaryConfiguration),
 
	],
	providers: [
		LoginService,
		AuthGuard,
		AdminGuard,
		NegateAuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
