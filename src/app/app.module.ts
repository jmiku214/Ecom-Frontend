import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegistrationFormComponent } from './signup/registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ParentProductComponent } from './parent-product/parent-product.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { SubproductformComponent } from './subproductform/subproductform.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { AddressComponent } from './address/address.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import {MatSelectModule} from '@angular/material/select';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { HelpPageComponent } from './help-page/help-page.component';
import { OrderModalComponent } from './order-modal/order-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    RegistrationFormComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    LogoutComponent,
    ParentProductComponent,
    SubProductComponent,
    SubproductformComponent,
    ProductDetailsComponent,
    AddProductComponent,
    HeaderComponent,
    FooterComponent,
    ProductPageComponent,
    CartComponentComponent,
    AddressComponent,
    AddNewAddressComponent,
    PaymentPageComponent,
    OrderPageComponent,
    SpinnerComponent,
    HelpPageComponent,
    OrderModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatSelectModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
