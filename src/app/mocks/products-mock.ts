import { Parameters } from './../interfaces/parameters';
import { AnimalType, Products, ProductsGetResponse } from './../interfaces/products';
import { Observable } from 'rxjs';



export class ProductsServiceMock
{


    product!: Products;

    getCategories (): Observable<Products[]>
    {
        return new Observable<Products[]>(observer =>
        {
            observer.next([
                {
                    name: 'Product',
                    description: 'Product',
                    value: 204.9,
                    promotional_value: 184.41,
                    featured_image: 'image_url',
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
                }, ]);
            observer.complete();
        });
    }

    getProductsHighlights (): Observable<Products[]>
    {
        return new Observable<Products[]>(observer =>
        {
            observer.next([
                {
                    name: 'Product',
                    description: 'Product',
                    value: 204.9,
                    promotional_value: 184.41,
                    featured_image: 'image_url',
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
                }, ]);
            observer.complete();

        });
    }

    getProduct (id: string): Observable<Products>
    {
        return new Observable<Products>(observer =>
        {
            observer.next(this.product);
            observer.complete();
        });

    }

    getParameters (): Observable<Parameters[]>
    {
        return new Observable<Parameters[]>(observer =>
        {
            observer.next([
                {
                    company_name: 'company',
                    trademark: 'trademark',
                    adress: 'adress',
                    adress_complement: 'adress_complement',
                    city: 'city',
                    state: 'state',
                    zip_code: 'zip_code',
                    social_networks: [],
                    account: 'account',
                    name: 'name',
                    phones: [],
                    number: 'number',
                    type: 'type',
                    country_code: 'country_code'
                }, ]);
            observer.complete();
        });
    }

    products: Array<Products> = [
        {
            name: "Product",
            description: "Product",
            value: 204.9,
            promotional_value: 184.41,
            featured_image: "image_url",
            images: [],
            videos: [],
            rating_stars: 5,
            rating_count: 424,
            installment_available: true,
            installment_count: 2,
            featured: true,
            category: "Medicina e Sa\u00fade",
            subcategory: "Antipulgas e Carrapatos",
            animal_type: AnimalType.Dog,
            url: "/url",
            created_at: "2021-04-12 21:28:35.881119+00:00",
            id: "EJf7MU4hES59rlLMJrdH",
            status: 'active'
        },
        {
            name: "Product2",
            description: "Product2",
            value: 204.9,
            promotional_value: 184.41,
            featured_image: "image_url",
            images: [],
            videos: [],
            rating_stars: 5,
            rating_count: 424,
            installment_available: true,
            installment_count: 2,
            featured: true,
            category: "Medicina e Sa\u00fade",
            subcategory: "Antipulgas e Carrapatos",
            animal_type: AnimalType.Dog,
            url: "/url",
            created_at: "2021-04-12 21:28:35.881119+00:00",
            id: "EJf7MU4hES59rlLMJrdH",
            status: 'string'
        }
    ];
    getProducts ()
    {
        return new Observable<ProductsGetResponse>(observer =>
        {
            observer.next({
                products: [ this.product ],
                cursor: ''
            }
            );
            observer.complete();
        });
    }


}
