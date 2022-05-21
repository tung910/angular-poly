import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'
import Iproduct from 'src/app/interface/products';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    private products: Array<Iproduct> = [
        { id: 1, image: "https://source.unsplash.com/random", price: 200, status: true },
        { id: 2, image: "https://source.unsplash.com/random", price: 200, status: false },
        { id: 3, image: "https://source.unsplash.com/random", price: 200, status: true },
        { id: 4, image: "https://source.unsplash.com/random", price: 200, status: true },
        { id: 5, image: "https://source.unsplash.com/random", price: 200, status: false },
    ]
    productClone = [...this.products]
    product: any
    isAdd = false

    constructor(private productService: ProductsService) { }

    ngOnInit(): void {
        this.productService.getProduct().subscribe((data) => {
            console.log(data)
        })
    }
    handleRemove(id: number) {
        this.productClone = this.productClone.filter(item => item.id != id)
    }
    handleView(product: any) {
        this.product = product
    }
    onSubmit(fromProduct: Iproduct) {
        this.productClone.push(fromProduct)
    }
    show() {
        this.isAdd = !this.isAdd
    }

}
