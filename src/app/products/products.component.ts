import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
handleDeleteProduct(p: any) {
let index = this.products.indexOf(p);
this.products.splice(index,1)
}
  products! : Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.products= [
      {id:1, nom : "PC", Prix : 1000},
      {id:2, nom : "MacBook", Prix : 1500},
      {id:3, nom : "iPad", Prix : 1000},
      {id:4, nom : "iPhone", Prix : 1200},
      {id:5, nom : "Watch", Prix : 700},
      {id:6, nom : "MacM2", Prix : 2000},
    ];
  }
}
