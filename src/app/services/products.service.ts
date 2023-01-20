import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 private products!: Array<any>;
 private productsPanier!: Array<any>;
    private sommme:number = 0;
    constructor() {
    this.products= [
      {id:1, nom : "PC", prix : 1000},
      {id:2, nom : "MacBook", prix : 1500},
      {id:3, nom : "iPad", prix : 1000},
      {id:4, nom : "iPhone", prix : 1200},
      {id:5, nom : "Watch", prix : 700},
      {id:6, nom : "MacM2", prix : 2000},
      {id:6, nom : "MacM2", prix : 2000},
    ];
        this.productsPanier=[];
  }

  public getAllProducts() : Array<any>{
    return this.products;
  }

    handleDeleteProduct(p: any) {
        let index = this.products.indexOf(p);
        this.products.splice(index,1)
    }

    handleReductionProduct(p: any) {
            p.prix = 0.5*p.prix
        }

    public getAllProductsPanier() : Array<any>{
        return this.productsPanier;
    }

    ajouterAuPanier(p: any) {
        this.productsPanier.push(p)
        this.sommme = this.sommme + p.prix

    }

    handleDeleteProductPanier(p: any) {
        let index = this.productsPanier.indexOf(p);
        this.sommme = this.sommme - p.prix
        this.productsPanier.splice(index,1)
    }

    getSommePanier(){
        return this.sommme;
    }
}
