import { ProductsService } from './../../services/products.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductsServiceMock } from 'src/app/mocks/products-mock';
import { from } from 'rxjs';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { AnimalType, Products } from 'src/app/interfaces/products';

const product: Products = {
  name: "Product",
  description: "Product",
  value: 204.9,
  promotional_value: 184.41,
  featured_image: '',
  images: [],
  videos: [],
  rating_stars: 5,
  rating_count: 424,
  status: 'active',
  installment_available: true,
  installment_count: 2,
  featured: true,
  animal_type: AnimalType.Dog,
  category: 'Medicina e Saúde',
  subcategory: 'Antipulgas e Carrapatos',
  url: '/url',
  created_at: '2021-04-12 21:28:35.881119+00:00',
  id: 'EJf7MU4hES59rlLMJrdH'
}

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

    // it('should check product_value in html', () => {
    //   const html = fixture.nativeElement;
    //   const productValue = document.querySelector('ng-container .pricevalue');
    //   expect(productValue?.textContent).toContain(`${product.value}`);
    //   console.log(`${product.value}`)
    // });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the title and price of a product',() =>{
   
    const html = fixture.nativeElement;
    const valor=html.querySelector('value');
    const desconto=html.querySelector('promotional-value');
    const titulo=html.querySelector('nome');
    expect(titulo?.textContent?.trim()).toEqual(undefined);
    expect(valor==204.90);
    expect(desconto==184.41);
    
  });

});
