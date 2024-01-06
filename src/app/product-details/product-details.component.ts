import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService, Product } from '../service/login-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id:number=0
  productObj:any
  subproductName:any
  productList:any=[]
  product:Product=new Product
  addButton:boolean=false
  userType:any
  userTypeValue:string=''
  subProductId:number=0
  searchText:string=''
  filteredList:any=[]
  productPriceList:any=[]
  constructor(private activateRoute:ActivatedRoute,
    private router:Router,private loginService:LoginServiceService){}
  
  ngOnInit(){
    this.userType=localStorage.getItem("userType")
    this.userTypeValue=String(this.userType)
    this.productPriceList.push("ALL")
    this.productPriceList.push("0-20000")
    this.productPriceList.push("20000-40000")
    this.productPriceList.push("40000-60000")
    this.productPriceList.push("60000+")
    if(this.userTypeValue==="Owner"){
        this.addButton=true
    }
    else{
      this.addButton=false
    }
    this.loginService.getAllProduct(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
        this.productObj=data
        this.subproductName=this.productObj.subProductName
        this.productList=this.productObj.productList
        this.subProductId=this.productObj.parentId
        this.filteredList=this.productList
        // console.log(this.productList)
      },
      error=>{
        console.log(error)
      }
    );
  }
  addProduct(){
     this.id=this.activateRoute.snapshot.params['id']
     this.router.navigate(['addProduct'],{state:{id:this.id}})
  }

  updateProduct(product:any){
     this.product=product
     this.router.navigate(['addProduct',product.id])
  }

  deleteProduct(id:number){
    this.loginService.deleteProduct(id).subscribe();
    this.getAllData()
     
  }

  getAllData(){
    window.alert("Deleted Succesfully..")
    this.loginService.getAllProduct(this.activateRoute.snapshot.params['id']).subscribe(
      data=>{
       
        this.productObj=data
        this.subproductName=this.productObj.subProductName
        this.productList=this.productObj.productList
      },
      error=>{
        console.log(error)
      }
    );
  }

  backToSubproducts(){
    this.router.navigate(['subproduct',this.subProductId])
  }
  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
 }
 redirectProductPage(id:number){
  this.router.navigate(['productPage',id])
 }

 getFilterdata(){
  
  if(this.searchText==''){
    this.filteredList=this.productList
  }
  else{
    this.filteredList=this.productList.filter((p: { productName: any | string[]; modelName: string })=>p.productName.toLowerCase().includes(this.searchText.toLowerCase()) || p.modelName.toLowerCase().includes(this.searchText.toLowerCase()));
  }
 }

 setData(item:any){
  // console.log(item)
  if(item=="ALL"){
    this.filteredList=this.productList
  }
  else if(item=="0-20000"){
    this.filteredList=this.productList.filter((p: { price: any | string[]; modelName: string })=>p.price>=0 && p.price<=20000);
  }
  else if(item=="20000-40000"){
    this.filteredList=this.productList.filter((p: { price: any | string[]; modelName: string })=>p.price>=20000 && p.price<=40000);
  }
  else if(item=="40000-60000"){
    this.filteredList=this.productList.filter((p: { price: any | string[]; modelName: string })=>p.price>=40000 && p.price<=60000);
  }
  else if(item=="60000+"){
    this.filteredList=this.productList.filter((p: { price: any | string[]; modelName: string })=>p.price>=60000);
  }
 }
}
