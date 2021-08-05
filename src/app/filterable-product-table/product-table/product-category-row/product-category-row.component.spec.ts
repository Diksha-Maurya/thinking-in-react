import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryRowComponent } from './product-category-row.component';

describe('ProductCategoryRowComponent', () => {
  let component: ProductCategoryRowComponent;
  let fixture: ComponentFixture<ProductCategoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

