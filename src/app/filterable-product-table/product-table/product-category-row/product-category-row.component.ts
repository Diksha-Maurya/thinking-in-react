import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-category-row',
  templateUrl: './product-category-row.component.html',
  styleUrls: ['./product-category-row.component.css']
})
export class ProductCategoryRowComponent implements OnInit {
  @Input() item :any= '';
  constructor() { }

  ngOnInit(): void {
  }

}
