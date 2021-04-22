
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { AnimalType, Products, ProductsGetResponse } from '../interfaces/products';
import { ProductsServiceMock } from '../mocks/products-mock';
import { ProductComponent } from '../pages/product/product.component';
import { ProductsService } from './products.service';

describe('ProductService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  // let httpClient: HttpClient;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // declarations: [ProductComponent, MockComponents(ProductItemComponent)],
      // providers: [
      //   {
      //     provide: ProductsService,
      //     useClass: ProductsServiceMock
      //   }
      // ]
    });

    // httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should get product', () => {
    service.getProduct('ID1').subscribe(product => {
      expect(product.name).toEqual('Ração Seca');
    })
  

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1');

    expect(req.request.method).toEqual('GET');

    const product: Products = {
      name: 'Ração Seca',
      description: 'Ração para cachorro',
      value: 158.9,
      promotional_value: 143.07,
      featured_image: '',
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 8,
      installment_available: true,
      installment_count: 3,
      featured: true,
      category: 'ração',
      subcategory: 'ração seca',
      animal_type: AnimalType.Dog,
      created_at: '2021-04-11 14:22:17.916440+00:00',
      id: 'ID1',
      url: '',
      status: 'active'
    }

    req.flush(product);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should test get list products', () => {
    service.getProducts().subscribe(products => {
      expect(products.products.length).toEqual(2);
      expect(products.products[0].id).toEqual("EJf7MU4hRS59rlLMJrdh");
    })
    // Vamos conferir qual url foi chamada pelo metodo getProducts()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products');

    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET')
    const productsget: ProductsGetResponse = {
      cursor: '',
      products: [
        {
          name: "Product",
          description: "Product",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "imageUrl",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,
          installment_available: true,
          installment_count: 2,
          featured: true,
          category: "Medicina e Sa\u00fade",
          status: "asd",
          subcategory: "Antipulgas e Carrapatos",
          animal_type: AnimalType.Dog,
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hRS59rlLMJrdh"
        },
        {
          name: "Product",
          description: "Product",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "imageUrl",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,
          installment_available: true,
          installment_count: 2,
          featured: true,
          category: "Medicina e Sa\u00fade",
          status: "asd",
          subcategory: "Antipulgas e Carrapatos",
          animal_type: AnimalType.Dog,
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hRS59rlLMJrdh"
        }
      ]
    }
    req.flush(productsget);
  });

});
