import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddressComponent } from './address/address.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ParentProductComponent } from './parent-product/parent-product.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RouterGuardServiceService } from './router-guard-service.service';
import { RegistrationFormComponent } from './signup/registration-form/registration-form.component';
import { SubProductComponent } from './sub-product/sub-product.component';
import { SubproductformComponent } from './subproductform/subproductform.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent
  },
  {
    path: 'registration',
    component: RegistrationFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [RouterGuardServiceService]
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'parentProduct',
    component: ParentProductComponent,
    canActivate: [RouterGuardServiceService]
  },
  {
    path: 'subproduct/:id',
    component: SubProductComponent,
    canActivate: [RouterGuardServiceService]
  },
  {
    path: 'subProductAdd/:id',
    component: SubproductformComponent,
    canActivate: [RouterGuardServiceService]
  },
  {
    path: 'productDetails/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path: 'addProduct/:id',
    component: AddProductComponent
  },
  {
    path: 'productPage/:id',
    component: ProductPageComponent
  },
  {
    path: 'cart',
    component: CartComponentComponent
  }, {
    path: 'address',
    component: AddressComponent
  },
  {
    path: 'addNewAddress',
    component: AddNewAddressComponent
  },
  {
    path: 'paymentPage',
    component: PaymentPageComponent
  },
  {
    path: 'orderPage',
    component: OrderPageComponent
  },
  {
    path: 'helpPage',
    component: HelpPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
