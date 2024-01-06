import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

export class ProdutBuy{
  addressId:any
  productId:any
  userId:any
}

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  productData:any
  addressId:any
  productBuy:ProdutBuy=new ProdutBuy
  responseObj:any
  constructor(private router:Router,private loginService:LoginServiceService){}
  ngOnInit() {
    // this.address="ndsjcbsdncsduhvjsdnvjsdjvmsdmkvjskvosjvos,sbsdjbvjwjvkjwdv,whviwjvkjwdv"
    // this.addressList.push(this.address)
    // this.addressList.push("wencbwvnwuvjkw,wvvuwjhvujwbnvuwhv,wnvuwjivjwkv")
    // this.addressList.push("wfi2ifi29r2bhvgvhabvbf,nvjwqvhjeivjjhefvw")
    // console.log(this.addressList)
   this.loginService.getAddressList(localStorage.getItem("userId")).subscribe(
    data=>{
      this.addressList=data
      // console.log(data)
    }
   );
  //  console.log(history.state.id)
   this.loginService.getProductDetailsById(localStorage.getItem("productId")).subscribe(
    data=>{
      this.productData=data
      // console.log(this.productData)
    }
   );

  }
  address:string=''
  addressList:any=[]
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
  }

  setAddress(item:any){
    // console.log(item)
    this.addressId=item.id
    this.productBuy.addressId=item.id
  }

  proceedTOBuy(){
    if(!this.addressId){
      window.alert("Please select the address..")
    }
    else{
      this.productBuy.productId=this.productData.product.id
      this.productBuy.userId=localStorage.getItem("userId")
      this.loginService.orderProduct(this.productBuy).subscribe(
        data=>{
          // window.alert("Order Placed..")
          console.log(data)
          this.responseObj=data
          this.loginService.generatePdf(this.responseObj.id).subscribe(
            data=>{
              console.log(data)
            },
            error=>{
              console.log(error)
            }
          );
          window.alert("Order Placed...")
          this.router.navigate(['orderPage'])
        },
        error=>{
          window.alert("Something went Wrong..")
        }
      );
      // console.log(this.productBuy)
      // this.router.navigate(['orderPage'])
    }
  }
}
