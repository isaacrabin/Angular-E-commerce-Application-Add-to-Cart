import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem:Number= 0
;
  constructor(
    private router: Router,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.cartService.getProducts().subscribe((res)=>{
      this.totalItem = res.length;
      console.log(res)
    })
  }

  gotoCart(){
    this.router.navigate(['cart'])
  }

}
