import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Cart } from '../product-page/product-page.component';
import { AddressAdd } from '../add-new-address/add-new-address.component';
import { ProdutBuy } from '../address/address.component';

export class UserLogin {
  username: string = ''
  password: string = ''
  token: string = ''
  userName: string = ''
  userType: string = ''
}

export class UserRegister {
  email: string = ''
  userName: string = ''
  phoneNo: string = ''
}

export class ParentProduct {
  productName: string = ''
  imageUrl: string = ''
}

export class ForgetPassword {
  email: string = ''
  password: string = ''
  retypePassword: string = ''
  otp: string = ''
}
export class SubProduct {
  subProductName: string = ''
  imageUrl: string = ''
  parentProductId: string = ''
}
export class Product {
  id: number = 0
  availableStock: any
  modelName: string = ''
  price: any
  productImage: string = ''
  productName: string = ''
  subProductId: number = 0

}
// const header = new HttpHeaders().set(
//   "Authorization", "Bearer " + localStorage.getItem("token") || '{}'
// );
// const header=null
@Injectable({
  providedIn: 'root'
})



export class LoginServiceService {
  user: UserLogin = new UserLogin
  userRegister: UserRegister = new UserRegister
  forget: ForgetPassword = new ForgetPassword
  isLoggedIn: boolean = false
  parentProduct: ParentProduct = new ParentProduct
  subProduct: SubProduct = new SubProduct
  product: Product = new Product
  cart: Cart = new Cart
  address: AddressAdd = new AddressAdd
  productBuy: ProdutBuy = new ProdutBuy
  constructor(private http: HttpClient) { }

  // baseUrl: string = 'http://192.168.12.41:9090/'
   baseUrl:string='http://192.168.23.95:9090/'

  login(user: any) {
    this.isLoggedIn = true
    return this.http.post<UserLogin>(this.baseUrl + "user/v1/signIn", user)
  }

  register(userRegister: any) {
    return this.http.post<UserRegister>(this.baseUrl + "user/v1/signUp", userRegister);
  }

  forgetPassword(forget: any) {
    return this.http.post<ForgetPassword>(this.baseUrl + "user/v1/forgetPassword", forget);
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    return !(user === null);
  }
  logout() {
    this.isLoggedIn = false
    localStorage.removeItem('token')
  }
  getParentProductData() {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get<ParentProduct>(this.baseUrl + 'getAll/parent/product', { headers: header })
  }
  addNewParentProduct(parentProduct: any) {

    // console.log(parentProduct)
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post<ParentProduct>(this.baseUrl + 'add/parent/product', parentProduct, { headers: header });
  }

  saveSubProduct(subProduct: any) {

    // console.log(this.baseUrl + "add/subProduct")
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post<SubProduct>(this.baseUrl + "add/subProduct", subProduct, { headers: header })
  }

  getSubProduct(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getAll/subProduct/' + id, { headers: header })
  }

  saveProduct(product: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post<Product>(this.baseUrl + 'add/product', product, { headers: header })
  }

  getAllProduct(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getAll/product/' + id, { headers: header })
  }

  getProductById(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getById/product/' + id, { headers: header })
  }

  updateProduct(product: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post<Product>(this.baseUrl + 'update/product', product, { headers: header })
  }
  deleteProduct(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.delete(this.baseUrl + 'delete/product/' + id, { headers: header })
  }

  getProductDetailsById(id: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getByUserId/productDescription/' + id, { headers: header })
  }
  generateOtp(email: string) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post(this.baseUrl + 'user/v1/generateOtp', email)
  }

  addToCart(cart: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post(this.baseUrl + 'add/cart', cart, { headers: header })
  }
  getCartItem(userId: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getByUserId/cart/' + userId, { headers: header })
  }
  removeFromCart(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.delete(this.baseUrl + 'delete/cart/' + id, { headers: header })
  }

  getAllState() {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getAll/state', { headers: header })
  }

  getAllCity(id: number) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'getAll/city/' + id, { headers: header })
  }

  saveAddress(address: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post(this.baseUrl + 'save/address', address, { headers: header })
  }
  getAddressList(id: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'get/address/' + id, { headers: header })
  }

  orderProduct(productBuy: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.post(this.baseUrl + 'add/order', productBuy, { headers:header })
  }

  ordersGetAll(id: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    // console.log(header)
    return this.http.get(this.baseUrl + 'getAll/order/' + id, { headers: header })
  }

  generatePdf(id: any) {
    let header = new HttpHeaders().set(
      "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
    return this.http.get(this.baseUrl + 'generateinvoce/order/' + id, { headers:header })
  }

 cancelorder(orderId:any,productId:any){
  let header = new HttpHeaders().set(
    "Authorization", "Bearer " + localStorage.getItem("token") || '{}');
  // console.log(header)
  return this.http.get(this.baseUrl+'cancel/order/'+orderId+"/"+productId,{headers:header})
 }
}
