import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  checked: boolean = false;
  currentMsgToSibling = '';
  searchText: any = '';
  @Output() msgToSibling = new EventEmitter<any>();

  @Output() searchTextToProductTable = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  msgToProductTable() {
    console.log(this.searchText);
    this.searchTextToProductTable.emit(this.searchText)
  }


  checkInStock() {
    // console.log(this.checked);
    this.checked = !this.checked;
    this.msgToSibling.emit(this.checked)
  }

}
