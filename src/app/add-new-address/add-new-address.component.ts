import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

export class AddressAdd {
  cityId: any;
  stateId: any;
  user: any;
  address: string = '';
  phone: string = '';
  name: string = '';
  nearByLocationAddress: string = '';
  pincode: any;
}

@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.css']
})
export class AddNewAddressComponent implements OnInit {
  stateList: any = []
  cityList: any = []
  address: AddressAdd = new AddressAdd
  constructor(private loginService: LoginServiceService,
    private router: Router) { }
  ngOnInit() {
    this.loginService.getAllState().subscribe(
      data => {
        this.stateList = data
        // console.log(data)
      }
    );
  }

  getCityData(item: any) {
    //  console.log(item)
    this.address.stateId = item
    this.loginService.getAllCity(item).subscribe(
      data => {

        this.cityList = data
        // console.log(data)
      }
    );
  }

  setCityData(id: any) {
    this.address.cityId = id
  }

  saveAddress() {
    console.log(this.address)
    this.address.user=localStorage.getItem("userId")
    if (this.address.name == '') {
      window.alert("Contact Person Name Can not be null..")
    }
    else if (this.address.phone == '') {
      window.alert("Please Enter the phone number..")
    }
    else if (!this.address.stateId) {
      window.alert("Please Select The State..")
    }
    else if (!this.address.cityId) {
      window.alert("Please Select The City..")
    }
    else if (!this.address.pincode) {
      window.alert("Please Enter your pincode..")
    }
    else if (this.address.address == '') {
      window.alert("Please Enter your address..")
    }
    else {
      this.loginService.saveAddress(this.address).subscribe(
        data => {
          this.router.navigate(['address'])
        }
      );
    }

  }

}
