import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartEmpty = true;
  cartItems:any = [];
  grandTotal: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.cartService.getProducts().subscribe((res)=>{
      this.cartItems = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.cartItems.length)
      if(this.cartItems.length > 0){
        this.cartEmpty = false;
      }else{
        this.cartEmpty = true;
      }

    })
  }

  removeItem(item){
    this.cartService.removeCartItem(item);
    this.getProducts()
  }

}
