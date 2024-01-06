import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit{

  constructor( private activateRoute:ActivatedRoute,
    private router:Router,
    private loginService:LoginServiceService){}
    parentProductName:any
    productSubProductList:any=[]
    subProductList:any=[]
    userType:any
    userTypeValue:string=''
    addButton:boolean=false
  ngOnInit(){
    this.userType=localStorage.getItem("userType")
    this.userTypeValue=String(this.userType)
    if(this.userTypeValue==="Owner"){
        this.addButton=true
    }
    else{
      this.addButton=false
    }
    this.id=this.activateRoute.snapshot.params['id']
    this.loginService.getSubProduct(this.id).subscribe(
      data=>{
        this.productSubProductList=data
        this.parentProductName=this.productSubProductList.parentProductName
        this.subProductList=this.productSubProductList.subProductList
      },
      error=>{
        console.log(error)
      }
      
    );
  }

    id:number=0
  addSubProduct(){
    console.log("hello")
    this.id=this.activateRoute.snapshot.params['id']
    this.router.navigate(['subProductAdd',this.id])
  }

  logout(){
     localStorage.removeItem("token")
     localStorage.removeItem("userType")
     localStorage.removeItem('userId')
     this.router.navigate(['/'])
  }

  getProducts(id:number){
    // console.log(id)
    this.router.navigate(['productDetails',id])
  }
}
