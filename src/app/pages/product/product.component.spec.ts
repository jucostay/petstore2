import { ProductsService } from './../../services/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductsServiceMock } from 'src/app/mocks/products-mock';
import { from } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap:convertToParamMap({'id': '123'})}}
          
        }]
      
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });



  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
