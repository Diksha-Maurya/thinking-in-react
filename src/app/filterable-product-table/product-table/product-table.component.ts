import { ChangeDetectionStrategy, Component, Input, KeyValueDiffers, OnInit, SimpleChanges } from '@angular/core';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableComponent implements OnInit {

  category: Array<String> = [];
  flag: boolean = false;
  Json: any;
  jsonResponse: any;
  differ: any;
  @Input() isInStock: string = '';

  @Input() searchTextData: string = '';

  constructor(private jsonDataService: JsonDataService, private differs: KeyValueDiffers) {
    // this.isInStock = '';
    // this.searchTextData = '';

    this.jsonDataService.getJSON().subscribe(res => {
      this.jsonResponse = res;
      for (let itemCategory in res) {
        this.flag = false;
        for (let categoryOfArray in this.category) {
          if (this.category[categoryOfArray] == res[itemCategory].category) {
            this.flag = true;
          }
        }
        if (this.flag == false) {
          this.category.push(res[itemCategory].category);
        }
      }
      this.Json = res;
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (var changed in changes) {
      console.log(changes[changed].currentValue);
      /*  if ((changes[changed].currentValue == '') || (changes[changed].currentValue == undefined)) {
        console.log("In undefined", changes[changed].currentValue);
      } */
      if ((changes[changed].currentValue == '') || (changes[changed].currentValue == undefined)) {
        console.log("In undefined", changes[changed].currentValue);
      }
      else {
        if (changed == 'searchTextData') {
          for (let itemCategory in this.jsonResponse) {
            console.log(this.jsonResponse[itemCategory].name, changes[changed].currentValue);
            if (this.jsonResponse[itemCategory].name == changes[changed].currentValue) {
              console.log(changes[changed].currentValue);
              this.category = [];
              this.Json = [];
              this.category.push(this.jsonResponse[itemCategory].category);
              this.Json.push(this.jsonResponse[itemCategory]);
            }
          }
        }
        else if (changed == 'isInStock') {
          console.log(this.Json);
          // this.category = [];
          this.Json = [];
          for (let itemCategory in this.jsonResponse) {
            console.log(this.jsonResponse[itemCategory].stocked, changes[changed].currentValue);
            if (this.jsonResponse[itemCategory].stocked == changes[changed].currentValue) {
              this.Json.push(this.jsonResponse[itemCategory]);
            }
          }
        }

      }
    }
  }

  ngOnInit(): void {

  }

}
