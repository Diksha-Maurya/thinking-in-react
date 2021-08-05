import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterableProductTableComponent } from './filterable-product-table/filterable-product-table.component';
import { SearchBarComponent } from './filterable-product-table/search-bar/search-bar.component';
import { ProductTableComponent } from './filterable-product-table/product-table/product-table.component';
import { ProductCategoryRowComponent } from './filterable-product-table/product-table/product-category-row/product-category-row.component';
import { ProductRowComponent } from './filterable-product-table/product-table/product-row/product-row.component';
import { JsonDataService } from './services/json-data.service';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    FilterableProductTableComponent,
    SearchBarComponent,
    ProductTableComponent,
    ProductCategoryRowComponent,
    ProductRowComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [JsonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
