import { Component, OnInit } from '@angular/core';

import { products} from '../products';

@Component({
  selector: 'app-product-app',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList = products;
  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('this is a share');
  }

}
