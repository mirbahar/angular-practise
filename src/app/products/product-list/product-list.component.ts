import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[] = [];

    @Output() selectProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
        this.products = [

            new Product('Table', 1999, '', 'A table descript'),
            new Product('Chair', 50, '', 'A char descript'),
            new Product('Computer', 50000, '', 'A computer descript'),
            new Product('Kedata', 100, '', 'A kedara descript'),
            new Product('Macbook Pro (Ratina)', 145000, '', 'A macbook descript')
        ]
  }

    onProductSelected(product:Product){
        this.selectProductEvent.emit(product)
    }

}
/*export class GenericPerson<T, S>{
 private s: S;
 get(v: T):T {
 return v;
 }
 set(s: S):void {
 this.s = s;
 }
 }
 let first = new GenericPerson<String, Product>();
 let second = new GenericPerson<Product, String>();
 first.set('sd');
 second.set('sd');*/
