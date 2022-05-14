import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    @Input() show: any
    @Output() newItem = new EventEmitter<any>()
    constructor() { }

    addItem(fromProduct: NgForm) {
        this.newItem.emit(fromProduct.value)
    }
    ngOnInit(): void {
    }

}
