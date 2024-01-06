import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPassword, LoginServiceService } from '../service/login-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
    otpFieldShow:boolean=false
    forget:ForgetPassword=new ForgetPassword
    retypePassword:string=''
    constructor(private loginService:LoginServiceService,private router:Router){}
    forgetPassword(){
      if(this.forget.password===this.forget.retypePassword){
        this.loginService.forgetPassword(this.forget).subscribe(
          data=>{
            window.alert("Password Reset Successful...")
            this.router.navigate(['/'])
          },
          error=>{
            window.alert("Enter valid Otp..")
          }
        );
      }
      else{
        window.alert("Password Mismatched..")
      }
    }
    generateOtp(){
      this.loginService.generateOtp(this.forget.email).subscribe(
        data=>{
          window.alert("Otp sent succesfully")
          this.otpFieldShow=true
        }
      );
    }
}
