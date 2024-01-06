import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService, Product } from '../service/login-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
product:Product=new Product
dataObject:any
subproductId:number=0
constructor(private router:Router,
  private loginService:LoginServiceService,
  private activateRoute:ActivatedRoute){
    // this.dataObject=this.router.getCurrentNavigation().extras.state.id;
  }
  ngOnInit(){
    if(this.activateRoute.snapshot.params['id']){
      this.loginService.getProductById(this.activateRoute.snapshot.params['id']).subscribe(
        data=>{
          this.dataObject=data
          this.product.id=this.dataObject.id
          this.product.modelName=this.dataObject.modelName
          this.product.price=this.dataObject.price
          this.product.availableStock=this.dataObject.availableStock
          this.product.productImage=this.dataObject.productImage
          this.product.productName=this.dataObject.productName
          this.product.subProductId=this.dataObject.subProductId
        }
       );
    }

    
    
     
  }

  addProduct(){
    
    if(this.product.id!=0){
      this.loginService.updateProduct(this.product).subscribe(
        data=>{
          this.router.navigate(['productDetails',this.product.subProductId])
        },
        error=>{
          console.log(error)
        }
      );
    }
    else{
      this.product.subProductId=history.state.id
      console.log(this.product.subProductId)
      this.loginService.saveProduct(this.product).subscribe(
        data=>{
          this.router.navigate(['productDetails',this.product.subProductId])
        },
        error=>{
          console.log(error)
        }
      );
    }
    
  }
  cancel(){
    if(history.state){
      this.router.navigate(['productDetails',history.state.id])
  }
    else{

      this.router.navigate(['productDetails',this.activateRoute.snapshot.params['id']])
    }
  }
}
