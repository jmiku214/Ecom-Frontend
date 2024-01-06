import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService, SubProduct } from '../service/login-service.service';

@Component({
  selector: 'app-subproductform',
  templateUrl: './subproductform.component.html',
  styleUrls: ['./subproductform.component.css']
})
export class SubproductformComponent {

  constructor(private loginService:LoginServiceService,
    private activateRoute:ActivatedRoute,
    private router:Router){}

  subproduct:SubProduct=new SubProduct

  addSubProduct(){
    this.subproduct.parentProductId=this.activateRoute.snapshot.params['id']

     this.loginService.saveSubProduct(this.subproduct).subscribe(
      data=>{
        this.router.navigate(['subproduct',this.subproduct.parentProductId])
      },
      error=>{
        window.alert("Something went wrong!!")
      }
     );
  }
}
