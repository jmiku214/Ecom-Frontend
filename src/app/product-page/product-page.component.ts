import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../service/login-service.service';

export class Cart {
  productId: number = 0
  userId: any
  totalQuantity: number = 0
  productPrice: number = 0
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  imageData: any
  productName: any
  price: number = 0
  productId: any
  cart: Cart = new Cart
  constructor(private router: Router, private activateRoute: ActivatedRoute,
    private loginService: LoginServiceService) { }

  ngOnInit() {
    this.loginService.getProductDetailsById(this.activateRoute.snapshot.params['id']).subscribe(
      data => {
        // console.log(data)
        this.imageData = data
        if (localStorage.getItem("productId")) {
          localStorage.removeItem("productId")
        }

        this.productName = this.imageData.product.productName + " " + this.imageData.product.modelName
        this.price = this.imageData.product.price
        this.productId = this.imageData.productId
        if (this.imageData.imageUrlList != null) {
          this.imageList = this.imageData.imageUrlList
          this.imageName = this.imageList[this.i]

        }
        else {
          this.imageName = this.imageData.product.productImage
          this.arrowShow = false
        }

        // console.log(this.imageList)
      }
    );
    // this.imageList.push("https://cdn1.smartprix.com/rx-i5yXc2rSP-w420-h420/dell-inspiron-3520-d.webp")
    // this.imageList.push("https://cdn1.smartprix.com/rx-iVpi6VSGr-w420-h420/dell-inspiron-3511-l.webp")

    // console.log(this.imageList[this.i])

  }
  arrowShow: boolean = false
  imageList: Array<String> = []
  imageName: any = ''
  i: number = 0

  showArrow() {
    // console.log("mouse in")
    if (this.imageList.length > 0) {
      // console.log(this.imageList)
      this.arrowShow = true
    }
    else {
      this.arrowShow = false
    }

  }
  hiddenarrow() {
    // console.log("mouse out")
    this.arrowShow = false

    //  console.log(this.imageName)

    // if(this.i!=null){
    //    this.imageName=this.imageList[this.i]
    //    console.log(this.imageName)
    // }
  }
  getNextImage() {
    this.i = this.i + 1;
    if (this.i == (this.imageList.length)) {
      this.i = 0
      this.imageName = this.imageList[this.i]
    } else {
      this.imageName = this.imageList[this.i]
      // console.log(this.imageName)
    }

  }
  getPreviousImage() {
    this.i = this.i - 1;
    if (this.i < 0) {
      this.i = this.imageList.length - 1
      this.imageName = this.imageList[this.i]
    }
    else {
      this.imageName = this.imageList[this.i]
    }
  }
  backToProductPage() {
    this.router.navigate(['productDetails', this.imageData.product.subProductId])
    // console.log(this.imageData.product.subProductId)
  }
  logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("userType")
    localStorage.removeItem('userId')
    this.router.navigate(['/'])
  }

  addToCart() {
    this.cart.productId = this.productId
    this.cart.userId = localStorage.getItem("userId")
    this.cart.productPrice = this.price
    this.cart.totalQuantity = 1
    this.loginService.addToCart(this.cart).subscribe(
      data => {
        window.alert("Product Added To Cart...")
        this.router.navigate(['cart'])
      },
      error => {
        window.alert('Item is out of available stock..')
      }

    );
  }

  buyNow(){
    localStorage.setItem("productId",this.productId)
    this.router.navigate(['address'])
  }
}
