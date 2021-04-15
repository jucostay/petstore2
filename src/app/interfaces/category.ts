export interface category {
    id: string,
    name: string;
    description: string;
    subcategories: Array<String>;
    url: string
}

export interface CategoryGetResponse {
    Products: Array<category>;
    cursor: string;
}