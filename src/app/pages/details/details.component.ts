import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    id: any
    constructor(private route: ActivatedRoute, private productService: ProductsService) {
        this.id = this.route.snapshot.params
        productService.getProduct()
    }

    ngOnInit(): void {

    }

}
