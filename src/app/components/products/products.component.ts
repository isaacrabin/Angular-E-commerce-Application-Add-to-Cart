import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any = [];

  constructor(
    private service: ApiService,
    private cartService: CartService

    ) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((res)=>{
      this.productList = res;
      this.productList.forEach(a => {
        Object.assign(a,{quantity: 1, total: a.price})
      });

    })
  }

  addProductToCart(val){
    this.cartService.addtoCart(val);
  }

}
