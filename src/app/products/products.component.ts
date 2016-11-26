import { Component, OnInit } from '@angular/core';
import {Product} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    selectedItem:Product;
  constructor() { }

  ngOnInit() {
      this.selectedItem = new Product('Macbook Pro (Ratina)', 145000, '', 'A macbook descript')
  }

}
