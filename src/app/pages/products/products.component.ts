import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    products = [
        { id: 1, image: "https://source.unsplash.com/random", price: 200 },
        { id: 2, image: "https://source.unsplash.com/random", price: 200 },
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
