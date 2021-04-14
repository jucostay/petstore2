export interface Categories {
    id: string,
    name: string;
    description: string;
    subcategories: Array<String>;
    url: string
}

export interface CategoryGetResponse {
    products: Array<Categories>;
    cursor: string;
}