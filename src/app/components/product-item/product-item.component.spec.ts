import { MockComponents, MockDirective } from 'ng-mocks';
import { AnimalType } from './../../interfaces/products-highlights';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Products } from 'src/app/interfaces/products';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';

// Produto Mock criado
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

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductItemComponent,
        MockComponents( 
          MatIcon,
          MatCard,
        ),
        MockDirective(RouterLink)
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
    
  });


  it('should check product name in html', () => {
    const html = fixture.nativeElement;
    const productName = document.querySelector('mat-card .product-name');
    expect(productName?.textContent).toEqual(`${product.name}`);
    console.log(`${product.name}`)
  });
 
  it('should check product_value in html', () => {
    const html = fixture.nativeElement;
    const productValue = document.querySelector('mat-card .original-value');
    expect(productValue?.textContent).toContain(`${product.value}`);
    console.log(`${product.value}`)
  });
  it('should check promotional_value in html', () => {
    const html = fixture.nativeElement;
    const promotionalValue = document.querySelector('mat-card .value');
    console.log ('promotionalValue');
    console.log (promotionalValue);
    expect(promotionalValue?.textContent).toContain(`${product.promotional_value}`);
    console.log(`${product.promotional_value}`)
  });
  it('should show five icon stars', () => {
    const html = fixture.nativeElement;
    // get all mat-icon
    const matIcons = document.getElementsByTagName('mat-icon');
    // check mat-icon count
    expect(matIcons.length).toEqual(6);
    // check first mat-icon
    expect(matIcons[0].textContent?.trim()).toContain('star');
  });
  it('should show stars with 3.5 rating star', () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 1
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();
    // Obtendo todos os matIcons no html
    const matIcons = document.getElementsByTagName('mat-icon');
    console.log(matIcons);
    // Checando todos os icones
    expect(matIcons[0].textContent?.trim()).toContain('star');
    component.product.rating_stars = 1
    fixture.autoDetectChanges();
    expect(matIcons[0].textContent?.trim()).toContain('startstar_borderstar_borderstar_borderstar_border');
    component.product.rating_stars = 0.5
    fixture.autoDetectChanges();
    expect(matIcons[0].textContent?.trim()).toContain('star_border');
  });

it('should create', () => {
    expect(component).toBeTruthy();
  });
})
