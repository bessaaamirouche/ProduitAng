import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products!: Array<any>;

    productService: ProductsService;

    constructor(private service: ProductsService) {
        this.productService = service
    }

    ngOnInit(): void {
        this.products = this.service.getAllProducts()
    }

    handleDeleteProduct(p: any) {
        this.service.handleDeleteProduct(p);
    }

    handleReductionProduct(p: any) {
        this.service.handleReductionProduct(p);
    }
}
