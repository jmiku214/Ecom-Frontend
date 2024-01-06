import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService, ParentProduct } from '../service/login-service.service';

@Component({
  selector: 'app-parent-product',
  templateUrl: './parent-product.component.html',
  styleUrls: ['./parent-product.component.css']
})
export class ParentProductComponent {
  parentProduct:ParentProduct=new ParentProduct
  constructor(private loginService:LoginServiceService,
    private router:Router){}

    addParentProduct(){
       this.loginService.addNewParentProduct(this.parentProduct).subscribe(
        data=>{
          window.alert("Product Added Succesfully")
          this.router.navigate(['dashboard'])
        }
       );
    }
}
