import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit{
  userId:any
  cartData:any=[]
  qunatiy:any
  constructor(private loginService:LoginServiceService,private router:Router){}
  ngOnInit(){
    this.userId=localStorage.getItem("userId")
    localStorage.removeItem("productId")
    this.loginService.getCartItem(this.userId).subscribe(
      data=>{
        // console.log(data)
        this.cartData=data
        // console.log(this.cartData)
      },
      error=>{
         console.log(error)
      }
    );
  }
  removeFromCart(id:number){
    this.userId=localStorage.getItem("userId")
     this.loginService.removeFromCart(id).subscribe();
     this.getAllCartData();
    //  this.loginService.getCartItem(this.userId).subscribe(
    //   data=>{
    //     // console.log(data)
    //     this.cartData=data
    //     console.log(this.cartData)
    //   },
    //   error=>{
    //      console.log(error)
    //   }
    // );
  }
  getAllCartData(){
    window.alert("Product Remove From Cart Success..")
    this.loginService.getCartItem(this.userId).subscribe(
      data=>{
        // console.log(data)
        this.cartData=data
        console.log(this.cartData)
      },
      error=>{
         console.log(error)
      }
    );
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
  }

  buyNow(item:any){
    // console.log(item.productId)
    localStorage.setItem("productId",item.productId)
    this.router.navigate(['address'])
  }

}
