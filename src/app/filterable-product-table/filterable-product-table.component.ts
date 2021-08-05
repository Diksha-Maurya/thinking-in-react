import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterable-product-table',
  templateUrl: './filterable-product-table.component.html',
  styleUrls: ['./filterable-product-table.component.css']
})
export class FilterableProductTableComponent implements OnInit {
  public isInStock: any;

  public searchTextData: string;

  constructor() {
    this.searchTextData = '';
  }

  ngOnInit(): void {
  }

  isStocked($event: any) {
    console.log($event);
    this.isInStock = $event;
  }

  sendSearchText($event: any) {
    console.log($event);
    this.searchTextData = $event;
  }

}
