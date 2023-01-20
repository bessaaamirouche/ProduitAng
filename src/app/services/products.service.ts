import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private products!: Array<any>;
  constructor() { 
    this.products= [
      {id:1, nom : "PC", Prix : 1000},
      {id:2, nom : "MacBook", Prix : 1500},
      {id:3, nom : "iPad", Prix : 1000},
      {id:4, nom : "iPhone", Prix : 1200},
      {id:5, nom : "Watch", Prix : 700},
      {id:6, nom : "MacM2", Prix : 2000},
      {id:6, nom : "MacM2", Prix : 2000},
    ];
  }

  public getAllProducts() : Observable<Array<any>>{
    return of (this.products);
  }
}
