export interface Parameters {
    company_name: string;
    trademark: string;
    email: string;
    adress: string;
    adress_complement: string;
    city: string;
    states: string;
    zip_code: string;
    social_networks: Array<String>;
    phones: Array<String>
}

export interface ParametersGetResponse {
    Products: Array<Parameters>;
    cursor: string;
}