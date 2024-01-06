import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent implements OnInit{
  helpList:any=[]
  orderCancel:boolean=false
  orderData:any=[]
  constructor( private router:Router, private loginService:LoginServiceService){}
  ngOnInit(){
    this.helpList.push("CANCEL-ORDER")
    this.helpList.push("TRACK-ORDER")
    this.loginService.ordersGetAll(localStorage.getItem("userId")).subscribe(
      data=>{
       this.orderData=data
       console.log(this.orderData)
      },
      error=>{
        console.log(error)
      }
    );
  }
  getHelp(item:any){
    console.log(item)
    if(item=="CANCEL-ORDER"){
     this.orderCancel=true
    }
    
  }
  backToOrder(){
    this.router.navigate(['orderPage'])
  }
}
