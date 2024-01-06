import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{

  constructor(private router:Router,private loginService:LoginServiceService){}
  orderData:any=[]
  displayStyle = "none";
  ngOnInit(){
    this.loginService.ordersGetAll(localStorage.getItem("userId")).subscribe(
      data=>{
       this.orderData=data
      //  console.log(this.orderData)
      },
      error=>{
        console.log(error)
      }
    );
  }
  backToCart(){
     this.router.navigate(['cart'])
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
  }

  getHelp(id:any){
    this.router.navigate(['helpPage',id])
  }

  navigateToHelpPage(){
    this.router.navigate(['helpPage'])
  }

  openPopup(item:any) {
    localStorage.setItem("orderId",item.id)
    localStorage.setItem("productId",item.productId)
    this.displayStyle = "block";
  }
  closePopup() {
    console.log("close  ")
    this.displayStyle = "none";
  }
  cancelOrder(item:any){
     console.log(item)
     this.loginService.cancelorder(localStorage.getItem("orderId"),localStorage.getItem("productId")).subscribe(
      data=>{
        // this.orderData=data
       //  console.log(this.orderData)
       this.loginService.ordersGetAll(localStorage.getItem("userId")).subscribe(
        data=>{
         this.orderData=data
        //  console.log(this.orderData)
        },
        error=>{
          console.log(error)
        }
      );
      this.displayStyle = "none";
       },
       error=>{
         console.log(error)
       }
     );
     
  }
  reOrder(id:any){
    console.log(id)
    localStorage.setItem("productId",id)
    this.router.navigate(['address'])
  }
}
