import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  shop = [
    {
      name: 'Pink Kush',
      qty: 0,
      price: 150,
    },
    {
      name: 'Sour Diesel',
      qty: 0,
      price: 350,
    },
    {
      name: 'Purple Kush',
      qty: 0,
      price: 75,
    },
    {
      name: 'OG Kush',
      qty: 0,
      price: 55,
    },
  ];

  constructor() {}

  ngOnInit() {}

  incrementQty(index: number) {
    this.shop[index].qty += 1;
  }

  decrementQty(index: number) {
    if (this.shop[index].qty > 0) {
      this.shop[index].qty -= 1;
    }
  }
}
