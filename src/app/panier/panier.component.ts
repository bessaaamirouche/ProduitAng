import { Component } from '@angular/core';
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  productsPanier!: Array<any>;

  productService: ProductsService;
somme :number=0

  ngOnInit(): void {
    this.productsPanier = this.service.getAllProductsPanier()
    this.somme=this.service.getSommePanier()
  }

  constructor(private service: ProductsService) {
    this.productService = service
  }

  handleDeleteProduct(p: any) {
    this.service.handleDeleteProductPanier(p);
    this.somme=this.service.getSommePanier()
  }
}
