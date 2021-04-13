export interface Category {
    id: string,
    name: string;
    description: string;
    subcategories: Array<String>;
    url: string
}

export interface CategoryGetResponse {
    products: Array<Category>;
    cursor: string;
}