import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products!: Array<any>;

    constructor() {
    }

    ngOnInit(): void {
        this.products = [
            {id: 1, nom: "PC", prix: 1000},
            {id: 2, nom: "MacBook", prix: 1500},
            {id: 3, nom: "iPad", prix: 1000},
            {id: 4, nom: "iPhone", prix: 1200},
            {id: 5, nom: "Watch", prix: 700},
            {id: 6, nom: "MacM2", prix: 2000},
        ];
    }

    handleDeleteProduct(p: any) {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1)
    }

    handleReductionProduct(p: any) {
        p.prix = 0.5*p.prix
    }
}
