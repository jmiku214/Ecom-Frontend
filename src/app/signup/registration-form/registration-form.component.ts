import { Component } from '@angular/core';
import { LoginServiceService, UserRegister } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  user:UserRegister=new UserRegister
  retypePassword:string=''
  constructor(private service:LoginServiceService,
    private router:Router){}
  register(){
    console.log(this.user)
     this.service.register(this.user).subscribe(
      data=>{
        window.alert("Registration Succesful..")
        this.router.navigate(['/'])
      },
      error=>{
        window.alert("Email/Phone Already Exist..")
      }
     );
     
  }
}
